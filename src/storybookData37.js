// A2 Teens digital storybook, Book 37: "A Broken Friendship"
// Static content -- no Supabase. Seventh book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook37/cover.jpg";

export const STORYBOOK_TITLE = "A Broken Friendship";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Nadia and Vivian sitting on opposite ends of a park bench, both looking away from each other, a folded note resting on the bench between them.";

export const CHARACTERS = [
  { name: "Nadia", role: "The narrator, a teenager", look: "Long dark hair, oversized sweater, observant but prone to overthinking." },
  { name: "Vivian", role: "Nadia's best friend since childhood", look: "Short dyed hair, denim jacket, usually cheerful but currently distant." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something's Different",
    image: null,
    imageNote: "Nadia watching Vivian from across the hallway, Vivian laughing with other classmates instead of walking over as usual, a subtle distance visible between them.",
    story:
      "Lately, something feels different between Vivian and me, though I can't quite pinpoint exactly when this quiet shift began happening. We have been inseparable since third grade, sharing everything from secrets to lunch tables without a single serious argument ever occurring. This week, though, she hasn't texted first, hasn't saved me a seat at lunch, and seems perpetually distracted whenever we do talk briefly. “You're probably overthinking this, Nadia,” I tell myself, since everyone gets busy sometimes with schoolwork or family matters. Still, a small, uncomfortable knot forms in my stomach every time I notice her avoiding eye contact lately.",
    questions: [
      { text: "How long have Nadia and Vivian been friends?", answer: "Since third grade." },
      { text: "What has Nadia noticed about Vivian's behavior?", answer: "She hasn't texted first, saved a seat, or seemed distracted." },
      { text: "What does Nadia tell herself?", answer: "That she's probably overthinking things." },
    ],
    trueFalse: [
      { text: "Nadia and Vivian have been friends since third grade.", answer: true },
      { text: "Vivian has been texting Nadia first as usual.", answer: false },
      { text: "Nadia notices Vivian seems distracted lately.", answer: true },
      { text: "Nadia feels completely at ease about this change.", answer: false },
      { text: "Nadia notices Vivian avoiding eye contact.", answer: true },
    ],
    buildSentence: [
      {
        target: "Lately, something feels different between Vivian and me, though I can't quite pinpoint exactly when this quiet shift began happening.",
        jumbled: ["happening.", "though", "Vivian", "shift", "I", "this", "Lately,", "something", "me,", "can't", "between", "exactly", "began", "quite", "and", "when", "feels", "quiet", "pinpoint", "different"],
      },
      {
        target: "We have been inseparable since third grade, sharing everything from secrets to lunch tables without a single serious argument ever occurring.",
        jumbled: ["We", "have", "third", "been", "inseparable", "argument", "occurring.", "tables", "from", "a", "everything", "secrets", "to", "serious", "lunch", "since", "ever", "without", "single", "sharing", "grade,"],
      },
      {
        target: "This week, though, she hasn't texted first, hasn't saved me a seat at lunch, and seems perpetually distracted whenever we do talk briefly.",
        jumbled: ["distracted", "week,", "seat", "hasn't", "briefly.", "she", "hasn't", "first,", "seems", "perpetually", "whenever", "at", "texted", "we", "and", "lunch,", "a", "This", "do", "talk", "though,", "saved", "me"],
      },
      {
        target: "“You're probably overthinking this, Nadia,” I tell myself, since everyone gets busy sometimes with schoolwork or family matters.",
        jumbled: ["since", "family", "probably", "busy", "gets", "“You're", "with", "everyone", "overthinking", "tell", "matters.", "sometimes", "schoolwork", "myself,", "this,", "Nadia,”", "I", "or"],
      },
      {
        target: "Still, a small, uncomfortable knot forms in my stomach every time I notice her avoiding eye contact lately.",
        jumbled: ["small,", "my", "lately.", "every", "eye", "knot", "contact", "time", "notice", "stomach", "forms", "avoiding", "I", "Still,", "in", "a", "uncomfortable", "her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a change in someone close to you.",
    mySentenceExample: "I noticed a change in my friend's mood after her exam results.",
  },
  {
    number: 2,
    title: "The Silent Lunch",
    image: null,
    imageNote: "Nadia and Vivian sitting across from each other at a cafeteria table, both looking down at their trays instead of talking, an awkward silence visible.",
    story:
      "At lunch today, Vivian sits across from me like usual, but the easy, comfortable conversation we always shared feels noticeably absent between us now. I attempt small talk about an upcoming test, but her responses come short and clipped, nothing like her normally animated storytelling style. The silence stretches uncomfortably between bites of food, filled only by the distant chatter of other tables around us. I catch her checking her phone repeatedly, and something about her expression seems guarded in a way I don't recognize from years of friendship. “Something's wrong, Nadia,” I think to myself, walking to class afterward as an unfamiliar distance follows us down the hallway.",
    questions: [
      { text: "How does the lunch conversation feel today?", answer: "Noticeably absent of their usual easy conversation." },
      { text: "What does Nadia attempt to talk about?", answer: "An upcoming test." },
      { text: "What does Nadia notice Vivian doing repeatedly?", answer: "Checking her phone." },
    ],
    trueFalse: [
      { text: "The lunch conversation feels easy and comfortable as usual.", answer: false },
      { text: "Nadia attempts small talk about an upcoming test.", answer: true },
      { text: "Vivian's responses come short and clipped.", answer: true },
      { text: "Nadia notices Vivian checking her phone repeatedly.", answer: true },
      { text: "The silence between them feels completely normal.", answer: false },
    ],
    buildSentence: [
      {
        target: "At lunch today, Vivian sits across from me like usual, but the easy, comfortable conversation we always shared feels noticeably absent between us now.",
        jumbled: ["At", "Vivian", "comfortable", "the", "between", "easy,", "now.", "lunch", "like", "always", "across", "conversation", "from", "absent", "feels", "today,", "but", "me", "we", "us", "noticeably", "usual,", "sits", "shared"],
      },
      {
        target: "I attempt small talk about an upcoming test, but her responses come short and clipped, nothing like her normally animated storytelling style.",
        jumbled: ["attempt", "I", "animated", "short", "an", "but", "nothing", "storytelling", "talk", "test,", "small", "come", "about", "like", "upcoming", "her", "responses", "style.", "normally", "and", "her", "clipped,"],
      },
      {
        target: "The silence stretches uncomfortably between bites of food, filled only by the distant chatter of other tables around us.",
        jumbled: ["tables", "between", "bites", "around", "filled", "of", "stretches", "the", "of", "only", "us.", "food,", "The", "by", "other", "silence", "distant", "chatter", "uncomfortably"],
      },
      {
        target: "I catch her checking her phone repeatedly, and something about her expression seems guarded in a way I don't recognize from years of friendship.",
        jumbled: ["I", "I", "repeatedly,", "a", "phone", "in", "expression", "from", "seems", "her", "her", "her", "and", "about", "way", "checking", "of", "don't", "catch", "something", "recognize", "guarded", "friendship.", "years"],
      },
      {
        target: "“Something's wrong, Nadia,” I think to myself, walking to class afterward as an unfamiliar distance follows us down the hallway.",
        jumbled: ["wrong,", "distance", "down", "us", "class", "unfamiliar", "as", "hallway.", "think", "follows", "afterward", "myself,", "“Something's", "Nadia,”", "the", "walking", "to", "I", "to", "an"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an awkward silence you experienced with someone.",
    mySentenceExample: "I experienced an awkward silence with my cousin after a small disagreement.",
  },
  {
    number: 3,
    title: "A Guess Gone Wrong",
    image: null,
    imageNote: "Nadia confronting Vivian in the school hallway, arms crossed defensively, Vivian looking confused and slightly hurt by the accusation.",
    story:
      "Unable to bear the tension any longer, I finally confront Vivian after school, assuming she's upset about a comment I made weeks ago regarding her new friend group. “Is this about what I said at the party?” I ask directly, bracing myself for an uncomfortable but necessary conversation. Vivian's confused expression immediately tells me I've guessed completely wrong, and something about her hurt reaction makes the situation feel even worse now. “That's not it at all, Nadia,” she says quietly, her voice carrying an edge I don't fully understand yet. Instead of clarifying further, she simply walks away, leaving me more confused than before.",
    questions: [
      { text: "What does Nadia assume Vivian is upset about?", answer: "A comment Nadia made at a party about her new friend group." },
      { text: "How does Vivian react to Nadia's guess?", answer: "Confused -- it's completely wrong." },
      { text: "What does Vivian do instead of explaining further?", answer: "She walks away." },
    ],
    trueFalse: [
      { text: "Nadia assumes it's about a comment at a party.", answer: true },
      { text: "Vivian confirms Nadia guessed correctly.", answer: false },
      { text: "Vivian's voice carries an edge Nadia doesn't understand.", answer: true },
      { text: "Vivian explains everything clearly right away.", answer: false },
      { text: "Nadia feels more confused after this conversation.", answer: true },
    ],
    buildSentence: [
      {
        target: "Unable to bear the tension any longer, I finally confront Vivian after school, assuming she's upset about a comment I made weeks ago regarding her new friend group.",
        jumbled: ["I", "regarding", "the", "longer,", "new", "tension", "any", "ago", "weeks", "school,", "bear", "she's", "her", "to", "friend", "finally", "assuming", "Unable", "a", "group.", "Vivian", "after", "confront", "upset", "comment", "made", "I", "about"],
      },
      {
        target: "“Is this about what I said at the party?” I ask directly, bracing myself for an uncomfortable but necessary conversation.",
        jumbled: ["said", "“Is", "for", "bracing", "I", "but", "what", "ask", "necessary", "at", "I", "uncomfortable", "party?”", "conversation.", "about", "an", "myself", "the", "this", "directly,"],
      },
      {
        target: "Vivian's confused expression immediately tells me I've guessed completely wrong, and something about her hurt reaction makes the situation feel even worse now.",
        jumbled: ["me", "feel", "something", "guessed", "confused", "hurt", "wrong,", "now.", "completely", "the", "immediately", "worse", "her", "expression", "I've", "makes", "about", "situation", "reaction", "Vivian's", "and", "tells", "even"],
      },
      {
        target: "“That's not it at all, Nadia,” she says quietly, her voice carrying an edge I don't fully understand yet.",
        jumbled: ["at", "carrying", "don't", "voice", "says", "quietly,", "fully", "yet.", "her", "all,", "edge", "Nadia,”", "“That's", "she", "not", "understand", "an", "it", "I"],
      },
      {
        target: "Instead of clarifying further, she simply walks away, leaving me more confused than before.",
        jumbled: ["confused", "than", "me", "before.", "more", "further,", "leaving", "Instead", "clarifying", "of", "walks", "away,", "simply", "she"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you guessed wrong about why someone was upset.",
    mySentenceExample: "I guessed wrong about why my friend seemed upset at school.",
  },
  {
    number: 4,
    title: "The Real Reason",
    image: null,
    imageNote: "Nadia and Vivian standing tensely by the lockers, both talking with raised, frustrated voices, other students glancing over curiously.",
    story:
      "Frustrated by Vivian's vague dismissal, I press further the next day, my patience wearing thin from days of confusing distance between us. “You can't just say it's not that and walk away. Tell me what's actually wrong,” I say, my voice rising with genuine frustration despite my efforts to stay calm. Vivian's composure cracks slightly. “Maybe you wouldn't even understand, Nadia,” she snaps back, insisting she couldn't explain everything honestly right now. The exchange escalates quickly into raised voices near the lockers, both of us saying things neither of us truly means in that heated moment. We separate angrily, the friendship feeling more fractured than ever before.",
    questions: [
      { text: "What does Nadia press Vivian to do?", answer: "Tell her what's actually wrong." },
      { text: "How does Vivian's composure react?", answer: "It cracks -- she snaps back." },
      { text: "What happens near the lockers?", answer: "Their argument escalates into raised voices." },
    ],
    trueFalse: [
      { text: "Nadia presses Vivian to explain what's wrong.", answer: true },
      { text: "Vivian's composure stays perfectly calm throughout.", answer: false },
      { text: "The exchange escalates into raised voices.", answer: true },
      { text: "They separate feeling closer than ever.", answer: false },
      { text: "Nadia's patience is wearing thin from days of distance.", answer: true },
    ],
    buildSentence: [
      {
        target: "Frustrated by Vivian's vague dismissal, I press further the next day, my patience wearing thin from days of confusing distance between us.",
        jumbled: ["thin", "of", "us.", "the", "days", "from", "further", "between", "I", "Frustrated", "by", "distance", "wearing", "vague", "dismissal,", "my", "confusing", "next", "press", "Vivian's", "day,", "patience"],
      },
      {
        target: "“You can't just say it's not that and walk away. Tell me what's actually wrong,” I say, my voice rising with genuine frustration despite my efforts to stay calm.",
        jumbled: ["not", "with", "that", "“You", "walk", "can't", "stay", "what's", "to", "Tell", "efforts", "say", "genuine", "voice", "me", "despite", "my", "my", "say,", "frustration", "just", "I", "and", "calm.", "it's", "actually", "wrong,”", "rising", "away."],
      },
      {
        target: "Vivian's composure cracks slightly.",
        jumbled: ["Vivian's", "cracks", "slightly.", "composure"],
      },
      {
        target: "“Maybe you wouldn't even understand, Nadia,” she snaps back, insisting she couldn't explain everything honestly right now.",
        jumbled: ["honestly", "back,", "Nadia,”", "explain", "understand,", "snaps", "she", "right", "everything", "wouldn't", "“Maybe", "you", "couldn't", "now.", "she", "insisting", "even"],
      },
      {
        target: "The exchange escalates quickly into raised voices near the lockers, both of us saying things neither of us truly means in that heated moment.",
        jumbled: ["moment.", "voices", "escalates", "lockers,", "quickly", "us", "truly", "the", "that", "of", "us", "exchange", "saying", "heated", "neither", "The", "raised", "things", "of", "both", "near", "in", "into", "means"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an argument that got worse than you expected.",
    mySentenceExample: "My argument with my sibling got worse than I expected over something small.",
  },
  {
    number: 5,
    title: "Days Apart",
    image: null,
    imageNote: "Nadia sitting alone at lunch, glancing across the cafeteria at Vivian sitting with new friends, both avoiding eye contact.",
    story:
      "For the following week, Vivian and I avoid each other entirely, our usual seats and shared routines suddenly feeling painfully empty and unfamiliar. I sit alone at lunch, glancing occasionally toward her new table, feeling a strange mixture of anger, sadness, and stubborn pride preventing me from reaching out first. Other classmates notice the obvious tension, occasionally asking cautiously if everything's okay between us lately. I brush off their concerns, insisting everything's fine, though privately, the loneliness feels heavier with each passing day apart. “What happened, Nadia?” I whisper to myself some nights, replaying our argument and wondering where exactly everything went so wrong.",
    questions: [
      { text: "How long do Nadia and Vivian avoid each other?", answer: "A week." },
      { text: "What does Nadia feel sitting alone at lunch?", answer: "A mixture of anger, sadness, and stubborn pride." },
      { text: "What do classmates notice?", answer: "The obvious tension between them." },
    ],
    trueFalse: [
      { text: "They avoid each other for the following week.", answer: true },
      { text: "Nadia feels completely fine sitting alone.", answer: false },
      { text: "Classmates notice the obvious tension between them.", answer: true },
      { text: "Nadia tells classmates the whole truth immediately.", answer: false },
      { text: "The loneliness feels heavier with each passing day.", answer: true },
    ],
    buildSentence: [
      {
        target: "For the following week, Vivian and I avoid each other entirely, our usual seats and shared routines suddenly feeling painfully empty and unfamiliar.",
        jumbled: ["unfamiliar.", "seats", "shared", "week,", "avoid", "empty", "painfully", "the", "and", "routines", "For", "usual", "following", "and", "feeling", "each", "Vivian", "suddenly", "other", "I", "and", "our", "entirely,"],
      },
      {
        target: "I sit alone at lunch, glancing occasionally toward her new table, feeling a strange mixture of anger, sadness, and stubborn pride preventing me from reaching out first.",
        jumbled: ["reaching", "anger,", "toward", "from", "first.", "and", "a", "stubborn", "mixture", "preventing", "feeling", "sit", "pride", "her", "out", "new", "at", "sadness,", "table,", "alone", "of", "strange", "I", "me", "glancing", "lunch,", "occasionally"],
      },
      {
        target: "Other classmates notice the obvious tension, occasionally asking cautiously if everything's okay between us lately.",
        jumbled: ["Other", "tension,", "if", "asking", "us", "occasionally", "classmates", "everything's", "between", "the", "cautiously", "obvious", "okay", "notice", "lately."],
      },
      {
        target: "I brush off their concerns, insisting everything's fine, though privately, the loneliness feels heavier with each passing day apart.",
        jumbled: ["loneliness", "privately,", "heavier", "each", "everything's", "off", "I", "brush", "concerns,", "apart.", "passing", "though", "fine,", "feels", "day", "with", "their", "insisting", "the"],
      },
      {
        target: "“What happened, Nadia?” I whisper to myself some nights, replaying our argument and wondering where exactly everything went so wrong.",
        jumbled: ["whisper", "wondering", "happened,", "so", "where", "argument", "“What", "our", "and", "everything", "Nadia?”", "wrong.", "myself", "exactly", "went", "replaying", "I", "to", "some", "nights,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt lonely after a disagreement.",
    mySentenceExample: "I felt lonely after a disagreement with my best friend last month.",
  },
  {
    number: 6,
    title: "Advice from Someone Else",
    image: null,
    imageNote: "Nadia sitting on the couch talking with her older sister, who listens thoughtfully while holding a mug of tea, a warm living room lamp glowing nearby.",
    story:
      "Noticing my obvious sadness, my older sister sits down beside me one evening, gently asking what's actually going on between Vivian and me. I explain the whole confusing situation, admitting I still don't understand what triggered this sudden, painful distance between us. “Sometimes people pull away because they're struggling with something they're embarrassed to share, Nadia,” my sister suggests thoughtfully, drawing from her own past friendship experiences. This perspective hadn't genuinely occurred to me before, since I had mostly focused on feeling hurt rather than curious about Vivian's actual situation. Maybe, I realize slowly, this isn't really about me at all.",
    questions: [
      { text: "Who sits down to talk with Nadia?", answer: "Her older sister." },
      { text: "What does Nadia's sister suggest?", answer: "That people pull away when struggling with something embarrassing." },
      { text: "What does Nadia realize by the end?", answer: "That maybe this isn't really about her." },
    ],
    trueFalse: [
      { text: "Nadia's older sister talks with her about the situation.", answer: true },
      { text: "Nadia's sister suggests people sometimes pull away out of embarrassment.", answer: true },
      { text: "Nadia had already considered this possibility before.", answer: false },
      { text: "Nadia realizes this might not be about her at all.", answer: true },
      { text: "Nadia refuses to listen to her sister's advice.", answer: false },
    ],
    buildSentence: [
      {
        target: "Noticing my obvious sadness, my older sister sits down beside me one evening, gently asking what's actually going on between Vivian and me.",
        jumbled: ["down", "between", "my", "sits", "gently", "asking", "going", "older", "on", "my", "beside", "evening,", "obvious", "what's", "and", "me", "one", "me.", "sadness,", "sister", "actually", "Vivian", "Noticing"],
      },
      {
        target: "I explain the whole confusing situation, admitting I still don't understand what triggered this sudden, painful distance between us.",
        jumbled: ["confusing", "I", "painful", "understand", "still", "explain", "between", "the", "situation,", "don't", "whole", "sudden,", "triggered", "what", "I", "us.", "admitting", "distance", "this"],
      },
      {
        target: "“Sometimes people pull away because they're struggling with something they're embarrassed to share, Nadia,” my sister suggests thoughtfully, drawing from her own past friendship experiences.",
        jumbled: ["thoughtfully,", "her", "away", "pull", "past", "struggling", "share,", "people", "from", "Nadia,”", "with", "embarrassed", "something", "experiences.", "to", "they're", "drawing", "own", "“Sometimes", "because", "suggests", "my", "they're", "sister", "friendship"],
      },
      {
        target: "This perspective hadn't genuinely occurred to me before, since I had mostly focused on feeling hurt rather than curious about Vivian's actual situation.",
        jumbled: ["before,", "me", "genuinely", "curious", "hurt", "feeling", "Vivian's", "since", "on", "perspective", "This", "I", "mostly", "hadn't", "about", "to", "situation.", "rather", "occurred", "focused", "than", "had", "actual"],
      },
      {
        target: "Maybe, I realize slowly, this isn't really about me at all.",
        jumbled: ["Maybe,", "at", "this", "about", "all.", "isn't", "me", "really", "slowly,", "I", "realize"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about advice that gave you a new perspective.",
    mySentenceExample: "My teacher's advice gave me a new perspective on handling stress.",
  },
  {
    number: 7,
    title: "Writing a Note",
    image: null,
    imageNote: "Nadia sitting at her desk late at night, carefully writing a note by hand, several crumpled paper attempts scattered around her.",
    story:
      "Inspired by my sister's words, I decide texting feels too impersonal for something this important, so I write Vivian an actual handwritten note instead. Several crumpled attempts later, I finally settle on something honest, admitting I miss her, I'm sorry for pushing too hard, and I genuinely want to understand whatever she's going through. I avoid demanding immediate answers, instead simply offering to listen whenever, if ever, she feels ready to share anything at all. “Just be honest, Nadia,” I tell myself, folding the note carefully as I slip it through the vents of her locker before first period, my heart pounding with vulnerable, uncertain hope.",
    questions: [
      { text: "Why does Nadia choose to write a note instead of texting?", answer: "Because texting feels too impersonal for something this important." },
      { text: "What does Nadia admit in the note?", answer: "That she misses Vivian and is sorry for pushing too hard." },
      { text: "Where does Nadia leave the note?", answer: "In the vents of Vivian's locker." },
    ],
    trueFalse: [
      { text: "Nadia decides texting feels too impersonal.", answer: true },
      { text: "Nadia demands immediate answers in the note.", answer: false },
      { text: "Nadia admits she misses Vivian in the note.", answer: true },
      { text: "Nadia leaves the note in Vivian's locker.", answer: true },
      { text: "Nadia feels completely calm slipping the note in.", answer: false },
    ],
    buildSentence: [
      {
        target: "Inspired by my sister's words, I decide texting feels too impersonal for something this important, so I write Vivian an actual handwritten note instead.",
        jumbled: ["important,", "an", "texting", "this", "my", "actual", "sister's", "feels", "words,", "I", "by", "impersonal", "note", "handwritten", "decide", "for", "Inspired", "instead.", "something", "write", "Vivian", "I", "too", "so"],
      },
      {
        target: "Several crumpled attempts later, I finally settle on something honest, admitting I miss her, I'm sorry for pushing too hard, and I genuinely want to understand whatever she's going through.",
        jumbled: ["I", "through.", "for", "finally", "honest,", "something", "understand", "going", "I", "miss", "admitting", "whatever", "pushing", "her,", "hard,", "and", "attempts", "Several", "genuinely", "on", "to", "want", "sorry", "I", "crumpled", "later,", "I'm", "she's", "settle", "too"],
      },
      {
        target: "I avoid demanding immediate answers, instead simply offering to listen whenever, if ever, she feels ready to share anything at all.",
        jumbled: ["demanding", "instead", "whenever,", "anything", "all.", "to", "share", "avoid", "ever,", "ready", "to", "at", "listen", "offering", "feels", "she", "immediate", "if", "I", "simply", "answers,"],
      },
      {
        target: "“Just be honest, Nadia,” I tell myself, folding the note carefully as I slip it through the vents of her locker before first period, my heart pounding with vulnerable, uncertain hope.",
        jumbled: ["it", "uncertain", "the", "as", "before", "locker", "note", "my", "carefully", "I", "myself,", "vulnerable,", "tell", "through", "period,", "with", "“Just", "slip", "of", "Nadia,”", "I", "her", "the", "pounding", "hope.", "first", "folding", "vents", "be", "heart", "honest,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching out to someone honestly after a disagreement.",
    mySentenceExample: "I reached out honestly to my friend after our small disagreement.",
  },
  {
    number: 8,
    title: "Meeting Again",
    image: null,
    imageNote: "Nadia and Vivian sitting together on a park bench after school, both looking nervous but hopeful, the folded note visible in Vivian's hand.",
    story:
      "The next afternoon, Vivian finds me by my locker, holding the folded note gently, her eyes noticeably softer than they've been in weeks. “Can we talk, Nadia? At the park, maybe?” she asks quietly, and relief floods through me instantly at this small but meaningful gesture. We walk together in slightly awkward silence toward our old favorite bench, the same spot where we shared secrets throughout middle school years ago. Sitting down, neither of us speaks immediately, both clearly nervous about finally addressing everything honestly after weeks of painful, confusing distance. Finally, Vivian takes a deep breath and begins speaking.",
    questions: [
      { text: "What does Vivian hold when she finds Nadia?", answer: "The folded note." },
      { text: "Where does Vivian suggest they talk?", answer: "At the park." },
      { text: "How do they both feel sitting on the bench?", answer: "Nervous." },
    ],
    trueFalse: [
      { text: "Vivian holds the folded note when she finds Nadia.", answer: true },
      { text: "Vivian suggests talking at the park.", answer: true },
      { text: "They walk together feeling completely relaxed.", answer: false },
      { text: "This bench is a spot from their middle school years.", answer: true },
      { text: "Vivian speaks immediately without any nervousness.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next afternoon, Vivian finds me by my locker, holding the folded note gently, her eyes noticeably softer than they've been in weeks.",
        jumbled: ["than", "noticeably", "softer", "her", "folded", "my", "The", "by", "been", "eyes", "Vivian", "in", "locker,", "the", "me", "afternoon,", "they've", "holding", "finds", "gently,", "next", "weeks.", "note"],
      },
      {
        target: "“Can we talk, Nadia? At the park, maybe?” she asks quietly, and relief floods through me instantly at this small but meaningful gesture.",
        jumbled: ["at", "this", "Nadia?", "floods", "asks", "meaningful", "gesture.", "small", "maybe?”", "At", "the", "me", "but", "instantly", "talk,", "quietly,", "relief", "through", "park,", "“Can", "we", "she", "and"],
      },
      {
        target: "We walk together in slightly awkward silence toward our old favorite bench, the same spot where we shared secrets throughout middle school years ago.",
        jumbled: ["shared", "bench,", "favorite", "silence", "slightly", "awkward", "secrets", "throughout", "the", "together", "middle", "spot", "our", "walk", "ago.", "years", "school", "same", "where", "we", "old", "toward", "We", "in"],
      },
      {
        target: "Sitting down, neither of us speaks immediately, both clearly nervous about finally addressing everything honestly after weeks of painful, confusing distance.",
        jumbled: ["about", "Sitting", "weeks", "addressing", "honestly", "finally", "us", "of", "down,", "speaks", "immediately,", "nervous", "both", "clearly", "of", "distance.", "neither", "confusing", "painful,", "after", "everything"],
      },
      {
        target: "Finally, Vivian takes a deep breath and begins speaking.",
        jumbled: ["deep", "takes", "a", "breath", "Finally,", "and", "Vivian", "begins", "speaking."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting someone to finally talk things through.",
    mySentenceExample: "I met my friend to finally talk things through after our fight.",
  },
  {
    number: 9,
    title: "Understanding Each Other",
    image: null,
    imageNote: "Vivian wiping away tears while talking, Nadia reaching out to hold her hand comfortingly, both sitting close together on the park bench.",
    story:
      "Vivian finally explains everything: her parents have been fighting constantly, and they recently announced plans to separate, something she felt too embarrassed and overwhelmed to share with anyone. “I didn't want you treating me differently, Nadia, feeling sorry for me,” she admits, tears welling up as months of pent-up stress finally surface. I feel a wave of guilt for pushing so hard without considering she might be struggling privately with something significant. Reaching over, I hold her hand gently, apologizing for not being more patient and understanding during everything she's clearly been going through alone. We both cry a little, releasing weeks of built-up tension together.",
    questions: [
      { text: "What has been happening with Vivian's parents?", answer: "They've been fighting and are planning to separate." },
      { text: "Why didn't Vivian want to share this?", answer: "She didn't want Nadia treating her differently or feeling sorry for her." },
      { text: "How does Nadia react to hearing this?", answer: "A wave of guilt -- she holds Vivian's hand and apologizes." },
    ],
    trueFalse: [
      { text: "Vivian's parents have been fighting and plan to separate.", answer: true },
      { text: "Vivian didn't want Nadia treating her differently.", answer: true },
      { text: "Nadia feels no guilt after hearing the truth.", answer: false },
      { text: "Nadia holds Vivian's hand comfortingly.", answer: true },
      { text: "They both stay completely composed without any tears.", answer: false },
    ],
    buildSentence: [
      {
        target: "Vivian finally explains everything: her parents have been fighting constantly, and they recently announced plans to separate, something she felt too embarrassed and overwhelmed to share with anyone.",
        jumbled: ["anyone.", "something", "share", "Vivian", "fighting", "recently", "constantly,", "overwhelmed", "explains", "plans", "to", "she", "announced", "been", "her", "and", "too", "parents", "finally", "everything:", "they", "felt", "to", "have", "embarrassed", "with", "and", "separate,"],
      },
      {
        target: "“I didn't want you treating me differently, Nadia, feeling sorry for me,” she admits, tears welling up as months of pent-up stress finally surface.",
        jumbled: ["me,”", "feeling", "pent-up", "admits,", "“I", "me", "you", "welling", "for", "didn't", "she", "up", "want", "sorry", "surface.", "treating", "Nadia,", "differently,", "tears", "months", "as", "of", "finally", "stress"],
      },
      {
        target: "I feel a wave of guilt for pushing so hard without considering she might be struggling privately with something significant.",
        jumbled: ["significant.", "so", "something", "feel", "privately", "guilt", "I", "wave", "of", "without", "she", "be", "struggling", "hard", "a", "with", "pushing", "considering", "for", "might"],
      },
      {
        target: "Reaching over, I hold her hand gently, apologizing for not being more patient and understanding during everything she's clearly been going through alone.",
        jumbled: ["alone.", "going", "more", "apologizing", "patient", "I", "through", "gently,", "hold", "her", "clearly", "understanding", "not", "everything", "been", "over,", "she's", "hand", "for", "and", "during", "Reaching", "being"],
      },
      {
        target: "We both cry a little, releasing weeks of built-up tension together.",
        jumbled: ["We", "both", "built-up", "weeks", "tension", "of", "releasing", "together.", "a", "little,", "cry"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's struggle after they finally shared it.",
    mySentenceExample: "I understood my friend's struggle after she finally shared it with me.",
  },
  {
    number: 10,
    title: "Stronger Than Before",
    image: null,
    imageNote: "Nadia and Vivian walking side by side, arms linked, both smiling and talking animatedly on the way home from the park.",
    story:
      "Walking home together afterward, our conversation flows naturally again, though it carries a new depth I hadn't noticed before this whole difficult experience. I promise Vivian she can always share hard things with me, even when it feels embarrassing or complicated to explain everything clearly. “I'm sorry too, Nadia, for pulling away,” she says, admitting she should have trusted our friendship enough to be honest from the very beginning. We both agree that avoiding problems only makes everything feel worse, while honest, uncomfortable conversations actually bring people genuinely closer together in the end. Our friendship feels different now, tested but undeniably stronger, built on something deeper than before.",
    questions: [
      { text: "What does Nadia promise Vivian?", answer: "That she can always share hard things with her." },
      { text: "What does Vivian apologize for?", answer: "Pulling away instead of trusting their friendship." },
      { text: "What do they both agree about avoiding problems?", answer: "That it only makes things worse, while honest conversation brings people closer." },
    ],
    trueFalse: [
      { text: "Nadia promises Vivian can always share hard things with her.", answer: true },
      { text: "Vivian apologizes for pulling away.", answer: true },
      { text: "They agree that avoiding problems makes things worse.", answer: true },
      { text: "Their friendship feels weaker after this experience.", answer: false },
      { text: "Nadia feels their friendship carries new depth now.", answer: true },
    ],
    buildSentence: [
      {
        target: "Walking home together afterward, our conversation flows naturally again, though it carries a new depth I hadn't noticed before this whole difficult experience.",
        jumbled: ["carries", "hadn't", "naturally", "noticed", "I", "experience.", "together", "it", "our", "before", "difficult", "flows", "though", "again,", "conversation", "a", "this", "depth", "afterward,", "new", "home", "Walking", "whole"],
      },
      {
        target: "I promise Vivian she can always share hard things with me, even when it feels embarrassing or complicated to explain everything clearly.",
        jumbled: ["hard", "I", "explain", "feels", "share", "clearly.", "Vivian", "it", "with", "things", "when", "everything", "complicated", "even", "or", "always", "can", "embarrassing", "to", "promise", "she", "me,"],
      },
      {
        target: "“I'm sorry too, Nadia, for pulling away,” she says, admitting she should have trusted our friendship enough to be honest from the very beginning.",
        jumbled: ["to", "be", "from", "friendship", "very", "too,", "beginning.", "Nadia,", "she", "admitting", "sorry", "pulling", "have", "enough", "away,”", "the", "“I'm", "she", "honest", "says,", "trusted", "for", "should", "our"],
      },
      {
        target: "We both agree that avoiding problems only makes everything feel worse, while honest, uncomfortable conversations actually bring people genuinely closer together in the end.",
        jumbled: ["feel", "actually", "end.", "agree", "avoiding", "We", "bring", "everything", "genuinely", "that", "both", "uncomfortable", "conversations", "closer", "together", "problems", "only", "worse,", "honest,", "people", "makes", "while", "the", "in"],
      },
      {
        target: "Our friendship feels different now, tested but undeniably stronger, built on something deeper than before.",
        jumbled: ["undeniably", "before.", "friendship", "feels", "on", "Our", "than", "built", "something", "stronger,", "different", "tested", "now,", "deeper", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friendship that became stronger after a hard moment.",
    mySentenceExample: "My friendship became stronger after we talked honestly about a hard moment.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
