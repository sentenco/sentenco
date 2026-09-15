// B1 Teens digital storybook, Book 53: "Standing Up to a Bully Online"
// Static content -- no Supabase. Fifth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook53/cover.jpg";

export const STORYBOOK_TITLE = "Standing Up to a Bully Online";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ethan sitting at his desk at night, staring at his phone screen with a troubled expression, a group chat visible with several unkind messages.";

export const CHARACTERS = [
  { name: "Ethan", role: "The narrator, a teenager", look: "Glasses, plain hoodie, quiet but principled." },
  { name: "Nina", role: "A classmate being targeted online", look: "Curly hair, art-themed backpack, quiet and increasingly withdrawn." },
  { name: "Marcus", role: "A classmate who posts unkind comments", look: "Letterman jacket, confident posture, dismissive of consequences." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something Doesn't Feel Right",
    image: null,
    imageNote: "Ethan scrolling through his phone at his desk, a concerned expression as he reads comments on a classmate's post.",
    story:
      "Scrolling through my phone before bed, I notice several unkind comments underneath a photo Nina posted earlier today. Marcus and a few others are mocking her artwork, using words that feel deliberately cruel rather than simply teasing. I've known Nina since elementary school, and seeing this makes something uncomfortable twist inside my chest. Part of me wants to scroll past quickly, pretending I never saw it at all. However, another part of me knows that staying silent feels almost like agreeing with what's happening here. \"You should say something, Ethan,\" I think quietly, but I close the app without commenting, and the guilty feeling lingers long after I put my phone down.",
    questions: [
      { text: "What does Ethan notice while scrolling that night?", answer: "Unkind comments mocking Nina's artwork." },
      { text: "Who is being mocked, and by whom?", answer: "Nina, by Marcus and others." },
      { text: "How does Ethan feel about this situation?", answer: "Uncomfortable, torn about staying silent." },
    ],
    trueFalse: [
      { text: "Ethan notices unkind comments under Nina's photo.", answer: true },
      { text: "Marcus and others are mocking Nina's artwork.", answer: true },
      { text: "Ethan feels nothing uncomfortable about this at all.", answer: false },
      { text: "Ethan comments immediately to defend Nina.", answer: false },
      { text: "The guilty feeling lingers after Ethan closes the app.", answer: true },
    ],
    buildSentence: [
      {
        target: "Scrolling through my phone before bed, I notice several unkind comments underneath a photo Nina posted earlier today.",
        jumbled: ["photo", "a", "earlier", "comments", "Scrolling", "before", "today.", "bed,", "posted", "unkind", "through", "several", "notice", "underneath", "Nina", "phone", "my", "I"],
      },
      {
        target: "Marcus and a few others are mocking her artwork, using words that feel deliberately cruel rather than simply teasing.",
        jumbled: ["artwork,", "cruel", "simply", "others", "Marcus", "teasing.", "are", "and", "mocking", "her", "words", "rather", "few", "deliberately", "feel", "that", "a", "than", "using"],
      },
      {
        target: "I've known Nina since elementary school, and seeing this makes something uncomfortable twist inside my chest.",
        jumbled: ["Nina", "makes", "since", "and", "something", "I've", "twist", "uncomfortable", "known", "chest.", "elementary", "school,", "inside", "this", "my", "seeing"],
      },
      {
        target: "Part of me wants to scroll past quickly, pretending I never saw it at all.",
        jumbled: ["wants", "of", "it", "Part", "at", "saw", "to", "scroll", "all.", "me", "past", "quickly,", "pretending", "I", "never"],
      },
      {
        target: "\"You should say something, Ethan,\" I think quietly, but I close the app without commenting, and the guilty feeling lingers long after I put my phone down.",
        jumbled: ["my", "put", "app", "feeling", "something,", "the", "close", "I", "lingers", "think", "long", "after", "Ethan,\"", "but", "phone", "\"You", "quietly,", "down.", "should", "I", "without", "say", "commenting,", "I", "and", "guilty", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something unfair that bothered you.",
    mySentenceExample: "I noticed something unfair when a classmate was excluded from a game.",
  },
  {
    number: 2,
    title: "It Keeps Happening",
    image: null,
    imageNote: "Ethan sitting in class, glancing at Nina across the room as she stares down at her desk, visibly withdrawn from classmates.",
    story:
      "Over the next few days, I notice the comments continuing, growing gradually meaner with each new post Nina shares. In class, Nina seems quieter than usual, keeping her head down and avoiding eye contact with almost everyone. During lunch, I overhear two classmates whispering about the situation, treating it more like entertainment than something serious. If nobody says anything, this will probably just keep escalating until it becomes something much worse. I feel torn between wanting to help and worrying about becoming a target myself if I speak up. \"This isn't right, Ethan,\" I think to myself. Watching Nina retreat further into herself each day makes ignoring this feel increasingly impossible.",
    questions: [
      { text: "What does Ethan notice about the comments over the next few days?", answer: "They keep growing meaner." },
      { text: "How does Nina seem in class?", answer: "Quieter, avoiding eye contact." },
      { text: "What does Ethan overhear during lunch?", answer: "Classmates treating it like entertainment." },
    ],
    trueFalse: [
      { text: "The comments continue and grow meaner.", answer: true },
      { text: "Nina seems energetic and talkative in class.", answer: false },
      { text: "Ethan overhears classmates treating this like entertainment.", answer: true },
      { text: "Ethan feels torn between helping and staying safe.", answer: true },
      { text: "Ethan finds it easy to keep ignoring this.", answer: false },
    ],
    buildSentence: [
      {
        target: "Over the next few days, I notice the comments continuing, growing gradually meaner with each new post Nina shares.",
        jumbled: ["shares.", "meaner", "notice", "growing", "days,", "gradually", "comments", "Nina", "the", "Over", "continuing,", "each", "post", "new", "next", "the", "few", "I", "with"],
      },
      {
        target: "In class, Nina seems quieter than usual, keeping her head down and avoiding eye contact with almost everyone.",
        jumbled: ["Nina", "contact", "with", "In", "keeping", "down", "avoiding", "than", "everyone.", "head", "class,", "almost", "and", "quieter", "usual,", "seems", "her", "eye"],
      },
      {
        target: "During lunch, I overhear two classmates whispering about the situation, treating it more like entertainment than something serious.",
        jumbled: ["two", "more", "lunch,", "something", "than", "entertainment", "treating", "it", "the", "whispering", "situation,", "During", "serious.", "about", "like", "overhear", "I", "classmates"],
      },
      {
        target: "I feel torn between wanting to help and worrying about becoming a target myself if I speak up.",
        jumbled: ["myself", "becoming", "I", "a", "to", "wanting", "between", "speak", "worrying", "target", "and", "help", "I", "up.", "about", "torn", "if", "feel"],
      },
      {
        target: "Watching Nina retreat further into herself each day makes ignoring this feel increasingly impossible.",
        jumbled: ["ignoring", "makes", "retreat", "this", "feel", "further", "day", "Nina", "herself", "each", "Watching", "into", "increasingly", "impossible."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a problem that kept getting worse.",
    mySentenceExample: "I noticed a problem at school that kept getting worse over time.",
  },
  {
    number: 3,
    title: "A Difficult Decision",
    image: null,
    imageNote: "Ethan sitting alone in his room, staring at his phone, weighing his options, a troubled but determined expression forming.",
    story:
      "That night, I sit in my room, weighing what would actually happen if I said something publicly online. Marcus is popular, and speaking against him could easily make me a target for the same treatment. Although this fear feels legitimate, I keep thinking about how alone Nina must feel right now, facing this without support. If I were in her position, I would desperately want at least one person to acknowledge what's happening. I remember something my dad once told me: doing the right thing rarely feels comfortable or convenient in the moment. \"Time to stop pretending, Ethan,\" I tell myself. Slowly, I decide that staying silent isn't actually the safe choice I've been telling myself it was.",
    questions: [
      { text: "What does Ethan weigh that night?", answer: "What would happen if he said something publicly." },
      { text: "What could speaking against Marcus risk for Ethan?", answer: "Becoming a target himself." },
      { text: "What does Ethan remember his dad telling him?", answer: "That doing the right thing rarely feels comfortable." },
    ],
    trueFalse: [
      { text: "Ethan weighs what would happen if he said something.", answer: true },
      { text: "Speaking against Marcus carries no risk for Ethan.", answer: false },
      { text: "Ethan thinks about how alone Nina must feel.", answer: true },
      { text: "Ethan's dad once told him doing right feels comfortable.", answer: false },
      { text: "Ethan decides staying silent isn't actually safe.", answer: true },
    ],
    buildSentence: [
      {
        target: "That night, I sit in my room, weighing what would actually happen if I said something publicly online.",
        jumbled: ["if", "That", "sit", "actually", "weighing", "my", "night,", "I", "said", "room,", "I", "publicly", "in", "what", "happen", "would", "something", "online."],
      },
      {
        target: "Marcus is popular, and speaking against him could easily make me a target for the same treatment.",
        jumbled: ["is", "the", "easily", "for", "me", "against", "speaking", "target", "could", "same", "a", "make", "him", "popular,", "and", "Marcus", "treatment."],
      },
      {
        target: "I keep thinking about how alone Nina must feel right now, facing this without support.",
        jumbled: ["support.", "feel", "keep", "right", "I", "facing", "must", "how", "now,", "about", "Nina", "without", "this", "alone", "thinking"],
      },
      {
        target: "I remember something my dad once told me: doing the right thing rarely feels comfortable or convenient in the moment.",
        jumbled: ["comfortable", "the", "me:", "remember", "something", "feels", "thing", "rarely", "right", "my", "or", "the", "in", "I", "once", "moment.", "dad", "doing", "convenient", "told"],
      },
      {
        target: "Slowly, I decide that staying silent isn't actually the safe choice I've been telling myself it was.",
        jumbled: ["it", "that", "been", "telling", "was.", "decide", "myself", "actually", "the", "choice", "silent", "Slowly,", "I", "I've", "safe", "isn't", "staying"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult decision you made even though it felt risky.",
    mySentenceExample: "I made a difficult decision to speak up even though it felt risky.",
  },
  {
    number: 4,
    title: "Reaching Out to Nina",
    image: null,
    imageNote: "Ethan sitting beside Nina at a quiet lunch table, talking gently while she listens with a surprised but grateful expression.",
    story:
      "The next day, instead of confronting Marcus immediately, I decide to reach out to Nina privately first. I find her sitting alone at lunch and ask quietly if I can join her, which clearly surprises her. “I've seen the comments,” I say gently, watching her expression shift from guarded to visibly relieved. She admits she's been struggling with feeling embarrassed and unsure whether anyone even noticed what was happening. I tell her honestly that I noticed, and that what's happening to her isn't acceptable at all. “Thank you for saying that, Ethan,” she replies quietly. For the first time in days, Nina's shoulders relax slightly, like she's carrying a little less weight now.",
    questions: [
      { text: "What does Ethan decide to do first?", answer: "Reach out to Nina privately." },
      { text: "What does Ethan tell Nina he's seen?", answer: "The comments." },
      { text: "How does Nina react to Ethan's words?", answer: "Her shoulders relax slightly, relieved." },
    ],
    trueFalse: [
      { text: "Ethan decides to reach out to Nina first.", answer: true },
      { text: "Nina refuses to let Ethan sit with her.", answer: false },
      { text: "Nina admits she's been struggling with embarrassment.", answer: true },
      { text: "Ethan tells Nina what's happening isn't acceptable.", answer: true },
      { text: "Nina's shoulders tense up more after talking.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, instead of confronting Marcus immediately, I decide to reach out to Nina privately first.",
        jumbled: ["instead", "Marcus", "reach", "confronting", "first.", "I", "to", "next", "immediately,", "privately", "of", "to", "Nina", "out", "The", "day,", "decide"],
      },
      {
        target: "I find her sitting alone at lunch and ask quietly if I can join her, which clearly surprises her.",
        jumbled: ["quietly", "sitting", "alone", "at", "can", "if", "and", "her,", "surprises", "clearly", "ask", "I", "join", "lunch", "which", "her.", "I", "her", "find"],
      },
      {
        target: "She admits she's been struggling with feeling embarrassed and unsure whether anyone even noticed what was happening.",
        jumbled: ["noticed", "she's", "was", "admits", "even", "whether", "embarrassed", "with", "struggling", "anyone", "been", "feeling", "what", "and", "She", "unsure", "happening."],
      },
      {
        target: "I tell her honestly that I noticed, and that what's happening to her isn't acceptable at all.",
        jumbled: ["tell", "noticed,", "that", "I", "I", "happening", "her", "that", "all.", "at", "what's", "acceptable", "to", "honestly", "her", "isn't", "and"],
      },
      {
        target: "For the first time in days, Nina's shoulders relax slightly, like she's carrying a little less weight now.",
        jumbled: ["Nina's", "shoulders", "a", "carrying", "little", "For", "slightly,", "now.", "days,", "first", "time", "the", "weight", "in", "like", "she's", "relax", "less"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching out to someone who seemed to be struggling.",
    mySentenceExample: "I reached out to a classmate who seemed to be struggling quietly.",
  },
  {
    number: 5,
    title: "Speaking Up",
    image: null,
    imageNote: "Ethan typing a comment on his phone, his expression steady and determined, the group chat visible on his screen.",
    story:
      "That evening, I open the group chat where the unkind comments have been posted most frequently. My hands feel slightly shaky as I type a message defending Nina's artwork and calling out the mocking directly. Before sending it, I read it three times, worried about how Marcus and others might react to this. Although deleting the message feels tempting, I remind myself why I'm doing this in the first place. \"Send it, Ethan,\" I tell myself, and I press send. Immediately, my phone buzzes with several new notifications appearing rapidly one after another. Whatever happens next, at least Nina will know that someone was willing to speak up for her.",
    questions: [
      { text: "Where does Ethan post his message that evening?", answer: "The group chat." },
      { text: "How do Ethan's hands feel while typing?", answer: "Slightly shaky." },
      { text: "What does Ethan do before sending the message?", answer: "Reads it three times." },
    ],
    trueFalse: [
      { text: "Ethan posts his message in the group chat.", answer: true },
      { text: "Ethan's hands feel completely steady while typing.", answer: false },
      { text: "Ethan reads his message three times before sending.", answer: true },
      { text: "Ethan deletes the message before sending it.", answer: false },
      { text: "Ethan's phone buzzes with notifications after he sends it.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I open the group chat where the unkind comments have been posted most frequently.",
        jumbled: ["comments", "That", "evening,", "been", "most", "where", "have", "frequently.", "I", "group", "the", "chat", "unkind", "the", "posted", "open"],
      },
      {
        target: "My hands feel slightly shaky as I type a message defending Nina's artwork and calling out the mocking directly.",
        jumbled: ["hands", "artwork", "defending", "type", "I", "out", "Nina's", "My", "calling", "shaky", "as", "directly.", "slightly", "mocking", "and", "feel", "a", "message", "the"],
      },
      {
        target: "I read it three times, worried about how Marcus and others might react to this.",
        jumbled: ["others", "how", "might", "this.", "react", "I", "it", "read", "worried", "to", "three", "Marcus", "about", "times,", "and"],
      },
      {
        target: "\"Send it, Ethan,\" I tell myself, and I press send.",
        jumbled: ["I", "press", "and", "Ethan,\"", "it,", "send.", "tell", "myself,", "I", "\"Send"],
      },
      {
        target: "Whatever happens next, at least Nina will know that someone was willing to speak up for her.",
        jumbled: ["at", "Whatever", "her.", "willing", "speak", "Nina", "least", "up", "that", "will", "for", "happens", "next,", "to", "know", "someone", "was"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about speaking up even though it felt scary.",
    mySentenceExample: "I spoke up in class even though it felt scary at first.",
  },
  {
    number: 6,
    title: "The Backlash",
    image: null,
    imageNote: "Ethan looking at his phone with a tense expression as several critical replies and messages appear on his screen.",
    story:
      "Within minutes, Marcus replies defensively, accusing me of overreacting and telling me to mind my own business instead. A few of his friends pile on too, and my phone buzzes constantly with notifications that feel increasingly hostile. My stomach tightens reading each new message, and I briefly wonder if I made a serious mistake speaking up. \"You did the right thing, Ethan,\" I remind myself. However, I also notice something unexpected: two other classmates message me privately, thanking me quietly for saying something. They admit they had noticed the comments too but felt too afraid to say anything themselves. Even though the group chat feels tense right now, I don't regret sending that message.",
    questions: [
      { text: "How does Marcus reply to Ethan's message?", answer: "Defensively, accusing him of overreacting." },
      { text: "How does Ethan's stomach feel reading the responses?", answer: "Tight." },
      { text: "What do two other classmates do?", answer: "Message him privately, thanking him." },
    ],
    trueFalse: [
      { text: "Marcus replies defensively, accusing Ethan of overreacting.", answer: true },
      { text: "Ethan's stomach feels completely calm reading the responses.", answer: false },
      { text: "Two classmates message Ethan privately to thank him.", answer: true },
      { text: "Those classmates say they never noticed the comments.", answer: false },
      { text: "Ethan regrets sending the message.", answer: false },
    ],
    buildSentence: [
      {
        target: "Within minutes, Marcus replies defensively, accusing me of overreacting and telling me to mind my own business instead.",
        jumbled: ["minutes,", "my", "own", "instead.", "accusing", "to", "Within", "Marcus", "defensively,", "me", "of", "and", "replies", "business", "telling", "overreacting", "mind", "me"],
      },
      {
        target: "A few of his friends pile on too, and my phone buzzes constantly with notifications that feel increasingly hostile.",
        jumbled: ["too,", "few", "of", "phone", "hostile.", "A", "buzzes", "that", "constantly", "his", "notifications", "on", "and", "friends", "my", "feel", "with", "pile", "increasingly"],
      },
      {
        target: "My stomach tightens reading each new message, and I briefly wonder if I made a serious mistake speaking up.",
        jumbled: ["and", "wonder", "I", "message,", "a", "if", "tightens", "stomach", "each", "My", "I", "mistake", "up.", "new", "speaking", "made", "serious", "briefly", "reading"],
      },
      {
        target: "However, I also notice something unexpected: two other classmates message me privately, thanking me quietly for saying something.",
        jumbled: ["other", "two", "unexpected:", "me", "message", "I", "classmates", "However,", "thanking", "quietly", "me", "for", "notice", "saying", "also", "something", "something.", "privately,"],
      },
      {
        target: "They admit they had noticed the comments too but felt too afraid to say anything themselves.",
        jumbled: ["but", "afraid", "had", "too", "felt", "admit", "comments", "They", "they", "too", "to", "themselves.", "say", "noticed", "the", "anything"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about facing criticism after standing up for what you believed.",
    mySentenceExample: "I faced criticism after standing up for what I believed was right.",
  },
  {
    number: 7,
    title: "Talking to a Teacher",
    image: null,
    imageNote: "Ethan sitting across from a school counselor, explaining the situation while the counselor listens and takes careful notes.",
    story:
      "The next morning, I decide the situation needs more than just a message in a group chat. I visit our school counselor, Ms. Delgado, and explain everything that's been happening to Nina online. She listens carefully, asking thoughtful questions rather than jumping immediately to conclusions or punishments. “Thank you for trusting me with this, Ethan. You did the right thing bringing it forward,” she says sincerely. She explains the school has clear policies about online harassment, even when it happens outside school hours. Although I feel nervous about what happens next, I also feel relieved that this isn't only my responsibility anymore.",
    questions: [
      { text: "Who does Ethan visit the next morning?", answer: "The school counselor, Ms. Delgado." },
      { text: "What does Ms. Delgado do while Ethan explains?", answer: "Listens carefully, asking thoughtful questions." },
      { text: "What does Ms. Delgado say about the school's policies?", answer: "That there are clear policies about online harassment, even outside school hours." },
    ],
    trueFalse: [
      { text: "Ethan visits the school counselor, Ms. Delgado.", answer: true },
      { text: "Ms. Delgado listens carefully and asks thoughtful questions.", answer: true },
      { text: "Ms. Delgado says the school has no policies about this.", answer: false },
      { text: "Ethan feels relieved this isn't only his responsibility now.", answer: true },
      { text: "Ethan feels this decision was completely unnecessary.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next morning, I decide the situation needs more than just a message in a group chat.",
        jumbled: ["just", "more", "needs", "morning,", "The", "the", "a", "situation", "in", "a", "decide", "message", "chat.", "than", "I", "next", "group"],
      },
      {
        target: "I visit our school counselor, Ms. Delgado, and explain everything that's been happening to Nina online.",
        jumbled: ["online.", "our", "I", "been", "Nina", "school", "Delgado,", "and", "that's", "counselor,", "everything", "explain", "happening", "visit", "to", "Ms."],
      },
      {
        target: "She listens carefully, asking thoughtful questions rather than jumping immediately to conclusions or punishments.",
        jumbled: ["thoughtful", "conclusions", "punishments.", "immediately", "asking", "or", "carefully,", "than", "to", "jumping", "listens", "She", "questions", "rather"],
      },
      {
        target: "“Thank you for trusting me with this, Ethan. You did the right thing bringing it forward,” she says sincerely.",
        jumbled: ["did", "the", "me", "with", "thing", "sincerely.", "bringing", "says", "trusting", "this,", "“Thank", "she", "right", "for", "you", "Ethan.", "forward,”", "it", "You"],
      },
      {
        target: "I also feel relieved that this isn't only my responsibility anymore.",
        jumbled: ["relieved", "also", "isn't", "my", "anymore.", "this", "I", "responsibility", "feel", "that", "only"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking an adult for help with a difficult situation.",
    mySentenceExample: "I asked a teacher for help with a difficult situation at school.",
  },
  {
    number: 8,
    title: "Consequences and Conversations",
    image: null,
    imageNote: "Marcus sitting in the school office looking uncomfortable while a school administrator speaks to him calmly but firmly.",
    story:
      "Over the following days, the school addresses the situation directly, meeting separately with Marcus and the other students involved. I don't know exactly what was said in those meetings, but Marcus's public comments about Nina noticeably stop appearing. Surprisingly, Marcus approaches me in the hallway a few days later, looking uncomfortable but clearly wanting to say something. “I didn't think about how that would actually affect her, Ethan,” he admits, avoiding direct eye contact throughout. I don't fully forgive him immediately, but I appreciate that he's at least acknowledging the harm he caused. Change doesn't happen instantly, but this conversation feels like a genuinely important first step.",
    questions: [
      { text: "What does the school do over the following days?", answer: "Meets separately with Marcus and the other students." },
      { text: "What happens to Marcus's public comments about Nina?", answer: "They stop appearing." },
      { text: "What does Marcus admit to Ethan in the hallway?", answer: "That he didn't think about how it would affect her." },
    ],
    trueFalse: [
      { text: "The school addresses the situation directly.", answer: true },
      { text: "Marcus's comments about Nina continue as before.", answer: false },
      { text: "Marcus approaches Ethan in the hallway later.", answer: true },
      { text: "Marcus admits he didn't think about how it affected her.", answer: true },
      { text: "Ethan feels this conversation means nothing at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Over the following days, the school addresses the situation directly, meeting separately with Marcus and the other students involved.",
        jumbled: ["Marcus", "involved.", "the", "school", "with", "meeting", "days,", "the", "Over", "students", "the", "following", "separately", "other", "and", "directly,", "addresses", "situation", "the"],
      },
      {
        target: "I don't know exactly what was said in those meetings, but Marcus's public comments about Nina noticeably stop appearing.",
        jumbled: ["about", "stop", "was", "know", "Nina", "public", "don't", "appearing.", "in", "but", "Marcus's", "comments", "said", "exactly", "I", "those", "noticeably", "what", "meetings,"],
      },
      {
        target: "Surprisingly, Marcus approaches me in the hallway a few days later, looking uncomfortable but clearly wanting to say something.",
        jumbled: ["approaches", "uncomfortable", "few", "Marcus", "later,", "days", "to", "looking", "hallway", "a", "me", "but", "clearly", "the", "wanting", "in", "Surprisingly,", "say", "something."],
      },
      {
        target: "“I didn't think about how that would actually affect her, Ethan,” he admits, avoiding direct eye contact throughout.",
        jumbled: ["contact", "actually", "Ethan,”", "about", "would", "how", "he", "that", "think", "admits,", "avoiding", "eye", "her,", "direct", "“I", "didn't", "affect", "throughout."],
      },
      {
        target: "I don't fully forgive him immediately, but I appreciate that he's at least acknowledging the harm he caused.",
        jumbled: ["acknowledging", "fully", "don't", "immediately,", "caused.", "I", "that", "him", "forgive", "harm", "I", "at", "he", "but", "he's", "the", "least", "appreciate"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about seeing someone acknowledge a mistake they made.",
    mySentenceExample: "I saw my friend acknowledge a mistake and apologize sincerely.",
  },
  {
    number: 9,
    title: "Nina's Recovery",
    image: null,
    imageNote: "Nina sitting with Ethan and a small group of friends at lunch, laughing genuinely, her artwork visible in a sketchbook on the table.",
    story:
      "Weeks later, I notice Nina gradually returning to her normal, confident self during lunch and class discussions. She starts sharing her artwork more openly again, no longer hesitant about posting new pieces online. One afternoon, she thanks me specifically for what I did, admitting it meant more to her than I probably realized. “Having someone actually say something made me feel less invisible, Ethan,” she explains honestly, her voice steady now. I tell her I simply couldn't watch it continue without saying anything, that it genuinely wasn't a difficult choice morally. Watching her laugh freely again with our small friend group feels like real, meaningful progress.",
    questions: [
      { text: "What does Ethan notice about Nina weeks later?", answer: "That she's gradually returning to her confident self." },
      { text: "What does Nina start doing again?", answer: "Sharing her artwork openly." },
      { text: "What does Nina thank Ethan for?", answer: "Speaking up, making her feel less invisible." },
    ],
    trueFalse: [
      { text: "Ethan notices Nina returning to her confident self.", answer: true },
      { text: "Nina stops sharing her artwork completely.", answer: false },
      { text: "Nina thanks Ethan specifically for what he did.", answer: true },
      { text: "Nina says speaking up made her feel less invisible.", answer: true },
      { text: "Ethan feels this progress means nothing to him.", answer: false },
    ],
    buildSentence: [
      {
        target: "Weeks later, I notice Nina gradually returning to her normal, confident self during lunch and class discussions.",
        jumbled: ["returning", "class", "confident", "during", "normal,", "notice", "later,", "I", "gradually", "self", "her", "and", "to", "Weeks", "discussions.", "lunch", "Nina"],
      },
      {
        target: "She starts sharing her artwork more openly again, no longer hesitant about posting new pieces online.",
        jumbled: ["again,", "no", "sharing", "about", "pieces", "new", "posting", "more", "hesitant", "She", "starts", "online.", "her", "longer", "artwork", "openly"],
      },
      {
        target: "One afternoon, she thanks me specifically for what I did, admitting it meant more to her than I probably realized.",
        jumbled: ["for", "realized.", "did,", "to", "it", "specifically", "she", "I", "meant", "I", "admitting", "thanks", "afternoon,", "what", "her", "than", "One", "probably", "more", "me"],
      },
      {
        target: "“Having someone actually say something made me feel less invisible, Ethan,” she explains honestly, her voice steady now.",
        jumbled: ["invisible,", "steady", "me", "“Having", "her", "Ethan,”", "she", "something", "feel", "voice", "explains", "made", "actually", "less", "now.", "honestly,", "say", "someone"],
      },
      {
        target: "I tell her I simply couldn't watch it continue without saying anything, that it genuinely wasn't a difficult choice morally.",
        jumbled: ["watch", "continue", "couldn't", "simply", "difficult", "choice", "I", "that", "her", "a", "tell", "wasn't", "without", "morally.", "saying", "genuinely", "it", "I", "it", "anything,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about seeing a positive change after helping someone.",
    mySentenceExample: "I saw a positive change in my friend after I helped her through a hard time.",
  },
  {
    number: 10,
    title: "What I Learned",
    image: null,
    imageNote: "Ethan sitting at his desk that evening, writing in a notebook, a small reflective smile on his face, his phone resting quietly nearby.",
    story:
      "Looking back on everything that happened, I realize how close I came to staying silent that very first night. If I had scrolled past without saying anything, Nina's situation might have continued getting worse indefinitely. I learned that speaking up doesn't require being fearless, only being willing to act despite feeling genuinely afraid. The backlash from Marcus's friends was uncomfortable, but it faded far quicker than I had originally worried it would. What mattered more, ultimately, was that Nina knew she wasn't facing this completely alone. \"You learned something important, Ethan,\" I think, closing my notebook. I now understand that staying silent isn't neutral at all; sometimes, silence quietly takes a side too.",
    questions: [
      { text: "What does Ethan realize looking back on everything?", answer: "How close he came to staying silent that first night." },
      { text: "What did Ethan learn about speaking up?", answer: "That it doesn't require being fearless, only acting despite fear." },
      { text: "What does Ethan now understand about staying silent?", answer: "That it isn't neutral -- it takes a side too." },
    ],
    trueFalse: [
      { text: "Ethan realizes how close he came to staying silent.", answer: true },
      { text: "Ethan learned speaking up requires being completely fearless.", answer: false },
      { text: "The backlash faded quicker than Ethan expected.", answer: true },
      { text: "Ethan understands that staying silent isn't neutral.", answer: true },
      { text: "Ethan believes what he did didn't matter at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Looking back on everything that happened, I realize how close I came to staying silent that very first night.",
        jumbled: ["happened,", "how", "to", "everything", "realize", "that", "close", "I", "on", "first", "back", "staying", "silent", "came", "that", "very", "I", "night.", "Looking"],
      },
      {
        target: "Nina's situation might have continued getting worse indefinitely.",
        jumbled: ["worse", "have", "Nina's", "might", "situation", "getting", "indefinitely.", "continued"],
      },
      {
        target: "The backlash from Marcus's friends was uncomfortable, but it faded far quicker than I had originally worried it would.",
        jumbled: ["from", "Marcus's", "would.", "originally", "it", "I", "than", "faded", "worried", "friends", "had", "uncomfortable,", "quicker", "backlash", "it", "but", "was", "far", "The"],
      },
      {
        target: "What mattered more, ultimately, was that Nina knew she wasn't facing this completely alone.",
        jumbled: ["wasn't", "What", "alone.", "mattered", "more,", "was", "knew", "that", "she", "completely", "ultimately,", "Nina", "facing", "this"],
      },
      {
        target: "I now understand that staying silent isn't neutral at all; sometimes, silence quietly takes a side too.",
        jumbled: ["staying", "takes", "too.", "now", "a", "neutral", "at", "I", "silence", "side", "isn't", "understand", "silent", "sometimes,", "all;", "quietly", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something important you learned from standing up for someone.",
    mySentenceExample: "I learned that even small actions can make a real difference for someone.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
