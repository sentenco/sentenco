// B2 Teens digital storybook, Book 71: "When My Two Best Friends Stopped Talking"
// Static content -- no Supabase. Seventh book in the B2 Teens batch
// (65-72). Triangulated-friendship mediation, distinct from Book 37
// "A Broken Friendship" (a direct one-on-one break between the
// narrator and one friend) -- here the narrator is a THIRD party
// mediating between two OTHER close friends, matching the B2 spec's
// mediation focus. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Chapter images not generated yet --
// image left null per chapter.
import coverImg from "./assets/storybook71/cover.jpg";

export const STORYBOOK_TITLE = "When My Two Best Friends Stopped Talking";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Amara standing between two friends, Lucia and Ben, who are seated at opposite ends of a lunch table, both avoiding eye contact.";

export const CHARACTERS = [
  { name: "Amara", role: "The narrator, close friends with both Lucia and Ben", look: "Observant, patient, often the one who notices tension first." },
  { name: "Lucia", role: "One of Amara's two close friends", look: "Direct, values honesty, sometimes comes across as blunt." },
  { name: "Ben", role: "Amara's other close friend", look: "Sensitive, avoids confrontation, tends to withdraw when hurt." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something's Wrong",
    image: null,
    imageNote: "Amara sitting at a lunch table between two empty chairs on opposite sides, looking concerned as she checks her phone.",
    story:
      "At lunch, I notice Lucia and Ben sitting at opposite ends of our usual table, neither one acknowledging the other directly. This silence feels unusual, given how close the three of us have been since freshman year without any real conflict. I ask Lucia casually what's going on, and she simply shrugs, saying Ben knows exactly what he did. “Ask him, Amara,” is all she says. Ben, when I ask him separately, insists he doesn't actually know what Lucia is upset about at all. Caught between two conflicting accounts, I realize I might need to understand this more carefully before choosing any side.",
    questions: [
      { text: "What does Amara notice at lunch?", answer: "Lucia and Ben sitting at opposite ends of the table, not acknowledging each other." },
      { text: "What does Lucia say when Amara asks what's going on?", answer: "That Ben knows exactly what he did." },
      { text: "What does Ben say when Amara asks him separately?", answer: "That he doesn't know what Lucia is upset about." },
    ],
    trueFalse: [
      { text: "Lucia and Ben are sitting at opposite ends of the table.", answer: true },
      { text: "This silence feels unusual given their close friendship.", answer: true },
      { text: "Lucia says Ben knows exactly what he did.", answer: true },
      { text: "Ben immediately admits exactly what he did wrong.", answer: false },
      { text: "Amara realizes she needs to understand this more carefully.", answer: true },
    ],
    buildSentence: [
      {
        target: "At lunch, I notice Lucia and Ben sitting at opposite ends of our usual table, neither one acknowledging the other directly.",
        jumbled: ["neither", "other", "ends", "At", "notice", "of", "lunch,", "I", "Lucia", "opposite", "at", "usual", "the", "sitting", "acknowledging", "table,", "Ben", "our", "one", "and", "directly."],
      },
      {
        target: "This silence feels unusual, given how close the three of us have been since freshman year without any real conflict.",
        jumbled: ["conflict.", "have", "us", "freshman", "without", "three", "any", "feels", "year", "how", "close", "silence", "since", "the", "of", "been", "unusual,", "given", "This", "real"],
      },
      {
        target: "I ask Lucia casually what's going on, and she simply shrugs, saying Ben knows exactly what he did.",
        jumbled: ["casually", "saying", "he", "she", "Ben", "I", "ask", "exactly", "shrugs,", "and", "simply", "what's", "going", "did.", "what", "on,", "knows", "Lucia"],
      },
      {
        target: "“Ask him, Amara,” is all she says.",
        jumbled: ["all", "Amara,”", "“Ask", "says.", "him,", "is", "she"],
      },
      {
        target: "Caught between two conflicting accounts, I realize I might need to understand this more carefully before choosing any side.",
        jumbled: ["side.", "conflicting", "carefully", "I", "might", "this", "choosing", "need", "between", "understand", "Caught", "more", "any", "two", "accounts,", "I", "realize", "before", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing tension between two friends without knowing the reason.",
    mySentenceExample: "I noticed tension between two friends without knowing the reason.",
  },
  {
    number: 2,
    title: "Lucia's Side",
    image: null,
    imageNote: "Amara and Lucia sitting on a bench outside school, Lucia explaining something with a frustrated expression.",
    story:
      "After school, I catch Lucia alone and ask her to explain what actually happened between her and Ben. She tells me that Ben had promised to help her prepare for a big presentation, then simply never showed up without any explanation. Worse, she says, he hadn't even apologized afterward, acting as though nothing significant had actually occurred at all. Lucia admits she feels genuinely hurt, not just inconvenienced, since this touches on a pattern she's noticed before. “It's not just this one time, Amara,” she says quietly. I listen carefully, recognizing that her frustration seems to stem from something deeper than this single incident alone.",
    questions: [
      { text: "What does Amara ask Lucia to explain?", answer: "What actually happened between her and Ben." },
      { text: "What had Ben promised, according to Lucia?", answer: "To help her prepare for a big presentation." },
      { text: "What does Lucia admit she feels?", answer: "Genuinely hurt, not just inconvenienced." },
    ],
    trueFalse: [
      { text: "Amara catches Lucia alone after school.", answer: true },
      { text: "Ben had promised to help Lucia prepare for a presentation.", answer: true },
      { text: "Ben apologized immediately afterward, according to Lucia.", answer: false },
      { text: "Lucia admits she feels genuinely hurt, not just inconvenienced.", answer: true },
      { text: "Amara recognizes this seems to stem from something deeper.", answer: true },
    ],
    buildSentence: [
      {
        target: "I catch Lucia alone and ask her to explain what actually happened between her and Ben.",
        jumbled: ["alone", "and", "explain", "between", "I", "Lucia", "actually", "to", "her", "ask", "her", "catch", "what", "Ben.", "happened", "and"],
      },
      {
        target: "She tells me that Ben had promised to help her prepare for a big presentation, then simply never showed up without any explanation.",
        jumbled: ["any", "then", "explanation.", "tells", "big", "never", "a", "for", "had", "up", "simply", "Ben", "promised", "her", "without", "that", "showed", "prepare", "presentation,", "me", "help", "She", "to"],
      },
      {
        target: "Worse, she says, he hadn't even apologized afterward, acting as though nothing significant had actually occurred at all.",
        jumbled: ["as", "though", "had", "occurred", "actually", "even", "hadn't", "significant", "says,", "Worse,", "he", "afterward,", "all.", "she", "nothing", "at", "acting", "apologized"],
      },
      {
        target: "Lucia admits she feels genuinely hurt, not just inconvenienced, since this touches on a pattern she's noticed before.",
        jumbled: ["Lucia", "she's", "pattern", "touches", "since", "she", "on", "before.", "just", "feels", "genuinely", "inconvenienced,", "noticed", "hurt,", "admits", "this", "a", "not"],
      },
      {
        target: "I listen carefully, recognizing that her frustration seems to stem from something deeper than this single incident alone.",
        jumbled: ["alone.", "recognizing", "seems", "deeper", "this", "single", "something", "than", "her", "frustration", "I", "from", "that", "stem", "listen", "carefully,", "incident", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about listening to a friend explain why they feel genuinely hurt.",
    mySentenceExample: "I listened to my friend explain why she felt genuinely hurt.",
  },
  {
    number: 3,
    title: "Ben's Side",
    image: null,
    imageNote: "Amara and Ben walking together after school, Ben looking down, hands in his pockets as he speaks.",
    story:
      "The next day, I find a moment to talk with Ben, curious to hear his perspective on the same situation. He explains that he'd genuinely forgotten about their study session, since he'd been dealing with a family emergency that same evening. He admits he should have texted Lucia immediately, but he'd felt too overwhelmed to explain everything at the time. Moreover, he says, whenever Lucia gets upset, he tends to withdraw rather than confront the situation directly, which he recognizes isn't ideal. “I don't know how to fix that, Amara,” he admits. Hearing this, I realize both Ben's silence and Lucia's hurt stem from genuinely understandable, if conflicting, reactions.",
    questions: [
      { text: "What does Ben explain about forgetting the study session?", answer: "That he'd been dealing with a family emergency that evening." },
      { text: "What does Ben admit he should have done?", answer: "Texted Lucia immediately." },
      { text: "What does Ben say he tends to do when Lucia gets upset?", answer: "Withdraw rather than confront the situation." },
    ],
    trueFalse: [
      { text: "Ben had a family emergency that same evening.", answer: true },
      { text: "Ben admits he should have texted Lucia immediately.", answer: true },
      { text: "Ben says he confronts situations directly when Lucia gets upset.", answer: false },
      { text: "Ben tends to withdraw rather than confront situations.", answer: true },
      { text: "Amara realizes both reactions are genuinely understandable.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, I find a moment to talk with Ben, curious to hear his perspective on the same situation.",
        jumbled: ["day,", "Ben,", "I", "a", "moment", "talk", "the", "to", "on", "with", "hear", "to", "same", "perspective", "situation.", "his", "find", "curious", "next", "The"],
      },
      {
        target: "He explains that he'd genuinely forgotten about their study session, since he'd been dealing with a family emergency that same evening.",
        jumbled: ["explains", "he'd", "He", "their", "forgotten", "evening.", "family", "same", "dealing", "since", "been", "study", "about", "a", "that", "with", "session,", "emergency", "genuinely", "that", "he'd"],
      },
      {
        target: "He admits he should have texted Lucia immediately, but he'd felt too overwhelmed to explain everything at the time.",
        jumbled: ["explain", "everything", "He", "have", "immediately,", "overwhelmed", "he", "to", "admits", "the", "at", "felt", "texted", "but", "time.", "he'd", "too", "Lucia", "should"],
      },
      {
        target: "Moreover, he says, whenever Lucia gets upset, he tends to withdraw rather than confront the situation directly, which he recognizes isn't ideal.",
        jumbled: ["directly,", "Moreover,", "the", "isn't", "he", "which", "to", "rather", "upset,", "withdraw", "tends", "confront", "he", "ideal.", "gets", "says,", "recognizes", "Lucia", "he", "than", "situation", "whenever"],
      },
      {
        target: "Hearing this, I realize both Ben's silence and Lucia's hurt stem from genuinely understandable, if conflicting, reactions.",
        jumbled: ["stem", "genuinely", "Ben's", "and", "I", "understandable,", "conflicting,", "hurt", "Lucia's", "both", "reactions.", "from", "this,", "if", "realize", "Hearing", "silence"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's behavior better after hearing their full explanation.",
    mySentenceExample: "I understood his behavior better after hearing his full explanation.",
  },
  {
    number: 4,
    title: "Two Understandable Reactions",
    image: null,
    imageNote: "Amara sitting alone at home, notebook open, writing down both perspectives side by side.",
    story:
      "That evening, I think through both perspectives carefully, trying to understand why this small incident escalated so significantly. Lucia's hurt makes sense, given that reliability clearly matters deeply to her, especially regarding something as important as a presentation. Ben's withdrawal also makes sense, given that confrontation genuinely overwhelms him, particularly during an already stressful, emotional evening. Neither of them is being unreasonable exactly, though their different ways of handling stress collided badly this particular time. Okay, Amara, you can't just tell them to make up, I think, closing my notebook. I realize that helping them reconnect will require each of them understanding the other's perspective, not just apologizing.",
    questions: [
      { text: "What does Amara think through that evening?", answer: "Both perspectives, trying to understand the escalation." },
      { text: "Why does Lucia's hurt make sense to Amara?", answer: "Because reliability matters deeply to her." },
      { text: "Why does Ben's withdrawal make sense to Amara?", answer: "Because confrontation genuinely overwhelms him." },
    ],
    trueFalse: [
      { text: "Amara thinks through both perspectives carefully that evening.", answer: true },
      { text: "Lucia's hurt makes sense because reliability matters deeply to her.", answer: true },
      { text: "Ben's withdrawal makes sense because confrontation overwhelms him.", answer: true },
      { text: "Amara decides one of them is clearly being unreasonable.", answer: false },
      { text: "Amara realizes reconnecting requires understanding, not just apologizing.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I think through both perspectives carefully, trying to understand why this small incident escalated so significantly.",
        jumbled: ["to", "That", "so", "incident", "escalated", "understand", "this", "significantly.", "through", "perspectives", "evening,", "why", "I", "small", "think", "both", "carefully,", "trying"],
      },
      {
        target: "Lucia's hurt makes sense, given that reliability clearly matters deeply to her, especially regarding something as important as a presentation.",
        jumbled: ["as", "her,", "makes", "given", "something", "Lucia's", "sense,", "presentation.", "a", "regarding", "clearly", "matters", "to", "deeply", "that", "hurt", "especially", "important", "reliability", "as"],
      },
      {
        target: "Ben's withdrawal also makes sense, given that confrontation genuinely overwhelms him, particularly during an already stressful, emotional evening.",
        jumbled: ["particularly", "confrontation", "stressful,", "also", "emotional", "him,", "already", "that", "evening.", "overwhelms", "given", "sense,", "during", "genuinely", "Ben's", "withdrawal", "makes", "an"],
      },
      {
        target: "Neither of them is being unreasonable exactly, though their different ways of handling stress collided badly this particular time.",
        jumbled: ["being", "handling", "them", "this", "particular", "different", "Neither", "of", "collided", "time.", "exactly,", "unreasonable", "stress", "ways", "badly", "though", "is", "their", "of"],
      },
      {
        target: "I realize that helping them reconnect will require each of them understanding the other's perspective, not just apologizing.",
        jumbled: ["reconnect", "realize", "each", "helping", "will", "apologizing.", "require", "of", "not", "understanding", "that", "other's", "them", "I", "the", "just", "perspective,", "them"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two people's reactions both made sense, even though they clashed.",
    mySentenceExample: "I realized two people's reactions both made sense, even though they clashed.",
  },
  {
    number: 5,
    title: "Approaching Lucia",
    image: null,
    imageNote: "Amara and Lucia sitting together again, Amara speaking gently while Lucia listens with a softening expression.",
    story:
      "I approach Lucia carefully, mentioning that Ben had actually been dealing with a family emergency that same evening. Her expression shifts slightly, though she admits this doesn't fully excuse him not communicating anything at all. “Okay, Amara, I hear you,” she says, still a little guarded. I explain that Ben tends to withdraw under stress, not because he doesn't care, but because confrontation genuinely overwhelms him. Lucia considers this, admitting she hadn't realized how differently they each process difficult emotions and situations. She agrees that, given this context, she'd be willing to hear him out properly before deciding how she feels.",
    questions: [
      { text: "What does Amara mention to Lucia?", answer: "That Ben had been dealing with a family emergency." },
      { text: "What does Lucia admit this doesn't fully excuse?", answer: "Him not communicating anything at all." },
      { text: "What does Lucia agree to do?", answer: "Hear him out properly." },
    ],
    trueFalse: [
      { text: "Amara mentions Ben's family emergency to Lucia.", answer: true },
      { text: "Lucia says this fully excuses him not communicating.", answer: false },
      { text: "Amara explains that Ben withdraws under stress, not because he doesn't care.", answer: true },
      { text: "Lucia admits she hadn't realized how differently they process emotions.", answer: true },
      { text: "Lucia agrees to hear Ben out properly.", answer: true },
    ],
    buildSentence: [
      {
        target: "I approach Lucia carefully, mentioning that Ben had actually been dealing with a family emergency that same evening.",
        jumbled: ["been", "Ben", "family", "carefully,", "mentioning", "same", "I", "that", "approach", "had", "emergency", "with", "dealing", "actually", "Lucia", "evening.", "a", "that"],
      },
      {
        target: "Her expression shifts slightly, though she admits this doesn't fully excuse him not communicating anything at all.",
        jumbled: ["him", "though", "doesn't", "fully", "excuse", "communicating", "anything", "slightly,", "at", "this", "expression", "admits", "she", "shifts", "not", "Her", "all."],
      },
      {
        target: "“Okay, Amara, I hear you,” she says, still a little guarded.",
        jumbled: ["little", "hear", "guarded.", "I", "still", "“Okay,", "says,", "a", "she", "you,”", "Amara,"],
      },
      {
        target: "I explain that Ben tends to withdraw under stress, not because he doesn't care, but because confrontation genuinely overwhelms him.",
        jumbled: ["he", "not", "genuinely", "him.", "tends", "explain", "stress,", "withdraw", "to", "care,", "I", "because", "because", "but", "that", "doesn't", "overwhelms", "confrontation", "Ben", "under"],
      },
      {
        target: "She agrees that, given this context, she'd be willing to hear him out properly before deciding how she feels.",
        jumbled: ["that,", "how", "him", "this", "properly", "be", "agrees", "context,", "deciding", "she'd", "to", "she", "hear", "out", "before", "She", "feels.", "willing", "given"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining someone's behavior to a friend without excusing it completely.",
    mySentenceExample: "I explained his behavior without excusing it completely.",
  },
  {
    number: 6,
    title: "Approaching Ben",
    image: null,
    imageNote: "Amara and Ben sitting together, Amara speaking encouragingly while Ben looks nervous but attentive.",
    story:
      "I approach Ben separately, explaining that Lucia's hurt runs deeper than just the missed study session itself. I tell him that reliability seems to matter enormously to her, and his silence afterward may have felt like confirmation of a pattern she fears. Ben looks visibly uncomfortable, admitting he hadn't considered how his silence might be interpreted, rather than simply forgotten and moved past. “I really didn't mean it that way, Amara,” he says. I encourage him gently, suggesting that even a brief, honest explanation would likely mean more to Lucia than he assumes. He agrees, though he admits reaching out directly still feels genuinely intimidating to him.",
    questions: [
      { text: "What does Amara tell Ben about Lucia's hurt?", answer: "That reliability matters enormously to her." },
      { text: "How does Ben look when he hears this?", answer: "Visibly uncomfortable." },
      { text: "What does Amara encourage Ben to do?", answer: "Reach out with a brief, honest explanation." },
    ],
    trueFalse: [
      { text: "Amara explains that Lucia's hurt runs deeper than the missed session.", answer: true },
      { text: "Ben looks visibly uncomfortable hearing this.", answer: true },
      { text: "Ben says he had already fully considered how his silence looked.", answer: false },
      { text: "Amara encourages Ben to offer a brief, honest explanation.", answer: true },
      { text: "Ben admits reaching out directly still feels intimidating.", answer: true },
    ],
    buildSentence: [
      {
        target: "I approach Ben separately, explaining that Lucia's hurt runs deeper than just the missed study session itself.",
        jumbled: ["than", "Lucia's", "I", "that", "session", "just", "Ben", "runs", "itself.", "hurt", "deeper", "separately,", "study", "the", "approach", "missed", "explaining"],
      },
      {
        target: "I tell him that reliability seems to matter enormously to her, and his silence afterward may have felt like confirmation of a pattern she fears.",
        jumbled: ["silence", "confirmation", "him", "his", "enormously", "fears.", "to", "and", "I", "of", "like", "her,", "a", "matter", "have", "afterward", "that", "tell", "she", "to", "pattern", "reliability", "may", "seems", "felt"],
      },
      {
        target: "Ben looks visibly uncomfortable, admitting he hadn't considered how his silence might be interpreted, rather than simply forgotten and moved past.",
        jumbled: ["his", "and", "moved", "be", "how", "might", "simply", "hadn't", "rather", "past.", "interpreted,", "uncomfortable,", "forgotten", "silence", "he", "admitting", "considered", "looks", "Ben", "than", "visibly"],
      },
      {
        target: "“I really didn't mean it that way, Amara,” he says.",
        jumbled: ["that", "he", "didn't", "Amara,”", "mean", "really", "“I", "says.", "way,", "it"],
      },
      {
        target: "I encourage him gently, suggesting that even a brief, honest explanation would likely mean more to Lucia than he assumes.",
        jumbled: ["I", "than", "assumes.", "he", "likely", "explanation", "that", "Lucia", "mean", "suggesting", "to", "honest", "brief,", "gently,", "him", "encourage", "even", "more", "a", "would"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging someone to be honest even though it feels intimidating.",
    mySentenceExample: "I encouraged him to be honest even though it felt intimidating.",
  },
  {
    number: 7,
    title: "A Conversation, Finally",
    image: null,
    imageNote: "Lucia and Ben sitting together at the lunch table again, talking directly to each other, Amara sitting a little further away.",
    story:
      "The next day, I notice Lucia and Ben sitting together, actually talking rather than avoiding each other's eyes across the table. Okay, Amara, let them handle this one, I remind myself, staying seated. I keep some distance, sensing this conversation needs to happen between them directly, not with me mediating every word. Later, Ben tells me that he'd explained the family emergency, and Lucia had genuinely apologized for assuming the worst about him. Lucia, separately, mentions that Ben had promised to communicate better going forward, rather than withdrawing silently whenever things felt overwhelming. Hearing both accounts align this time, rather than conflict, I feel genuine relief that they'd worked through it themselves.",
    questions: [
      { text: "What does Amara notice the next day?", answer: "Lucia and Ben sitting together, actually talking." },
      { text: "Why does Amara keep some distance?", answer: "Because the conversation needs to happen between them directly." },
      { text: "What does Lucia mention Ben promised?", answer: "To communicate better going forward." },
    ],
    trueFalse: [
      { text: "Amara notices Lucia and Ben talking together the next day.", answer: true },
      { text: "Amara keeps distance, sensing they need to talk directly.", answer: true },
      { text: "Lucia says Ben promised to communicate better going forward.", answer: true },
      { text: "Both accounts conflict with each other this time.", answer: false },
      { text: "Amara feels genuine relief they'd worked through it themselves.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, I notice Lucia and Ben sitting together, actually talking rather than avoiding each other's eyes across the table.",
        jumbled: ["talking", "than", "actually", "other's", "and", "table.", "sitting", "rather", "the", "next", "notice", "day,", "avoiding", "The", "Lucia", "each", "I", "Ben", "together,", "eyes", "across"],
      },
      {
        target: "Okay, Amara, let them handle this one, I remind myself, staying seated.",
        jumbled: ["staying", "this", "them", "remind", "I", "seated.", "myself,", "Amara,", "handle", "Okay,", "let", "one,"],
      },
      {
        target: "I keep some distance, sensing this conversation needs to happen between them directly, not with me mediating every word.",
        jumbled: ["me", "some", "between", "every", "to", "not", "I", "distance,", "them", "with", "sensing", "directly,", "mediating", "this", "needs", "word.", "keep", "happen", "conversation"],
      },
      {
        target: "Later, Ben tells me that he'd explained the family emergency, and Lucia had genuinely apologized for assuming the worst about him.",
        jumbled: ["and", "him.", "me", "the", "worst", "about", "Lucia", "emergency,", "had", "family", "tells", "the", "he'd", "assuming", "apologized", "for", "explained", "Later,", "Ben", "genuinely", "that"],
      },
      {
        target: "Lucia, separately, mentions that Ben had promised to communicate better going forward, rather than withdrawing silently whenever things felt overwhelming.",
        jumbled: ["Lucia,", "forward,", "had", "withdrawing", "things", "felt", "rather", "silently", "whenever", "mentions", "Ben", "that", "communicate", "than", "promised", "to", "going", "overwhelming.", "separately,", "better"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about stepping back and letting two people work through a conflict themselves.",
    mySentenceExample: "I stepped back and let them work through the conflict themselves.",
  },
  {
    number: 8,
    title: "Back to Normal, Mostly",
    image: null,
    imageNote: "Amara, Lucia, and Ben sitting together at lunch, all three laughing at something, the earlier tension gone.",
    story:
      "By the following week, the three of us sit together at lunch again, the earlier tension seemingly resolved between them. Things aren't exactly identical to before, though; both Lucia and Ben seem more mindful now about communicating directly. Lucia mentions she's trying not to assume the worst immediately, giving people a chance to explain before reacting strongly. Ben, meanwhile, admits he's practicing sending even a short message rather than going completely silent when overwhelmed. You helped make this happen, Amara, I think, watching them both laugh. Watching this small but genuine growth in both of them, I feel proud our friendship survived something that could have ended it.",
    questions: [
      { text: "What happens by the following week?", answer: "The three of them sit together at lunch again." },
      { text: "What is Lucia mentioning she's trying not to do?", answer: "Assume the worst immediately." },
      { text: "What is Ben practicing?", answer: "Sending a short message rather than going silent." },
    ],
    trueFalse: [
      { text: "The three of them sit together at lunch again.", answer: true },
      { text: "Lucia is trying not to assume the worst immediately.", answer: true },
      { text: "Ben is practicing going completely silent when overwhelmed.", answer: false },
      { text: "Ben is practicing sending a short message instead of going silent.", answer: true },
      { text: "Amara feels proud their friendship survived this.", answer: true },
    ],
    buildSentence: [
      {
        target: "By the following week, the three of us sit together at lunch again, the earlier tension seemingly resolved between them.",
        jumbled: ["following", "the", "tension", "three", "again,", "lunch", "together", "between", "seemingly", "us", "them.", "at", "of", "resolved", "week,", "sit", "By", "the", "earlier", "the"],
      },
      {
        target: "Things aren't exactly identical to before, though; both Lucia and Ben seem more mindful now about communicating directly.",
        jumbled: ["and", "now", "Lucia", "Things", "aren't", "both", "before,", "more", "directly.", "Ben", "mindful", "though;", "about", "identical", "exactly", "to", "communicating", "seem"],
      },
      {
        target: "Lucia mentions she's trying not to assume the worst immediately, giving people a chance to explain before reacting strongly.",
        jumbled: ["giving", "mentions", "Lucia", "people", "worst", "immediately,", "a", "chance", "assume", "explain", "reacting", "the", "strongly.", "she's", "trying", "not", "before", "to", "to"],
      },
      {
        target: "Ben, meanwhile, admits he's practicing sending even a short message rather than going completely silent when overwhelmed.",
        jumbled: ["short", "even", "practicing", "completely", "he's", "than", "meanwhile,", "sending", "rather", "overwhelmed.", "going", "a", "Ben,", "silent", "admits", "when", "message"],
      },
      {
        target: "Watching this small but genuine growth in both of them, I feel proud our friendship survived something that could have ended it.",
        jumbled: ["something", "both", "them,", "have", "genuine", "feel", "of", "small", "Watching", "survived", "ended", "friendship", "but", "growth", "could", "proud", "I", "our", "it.", "this", "in", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about watching two friends grow after working through a conflict.",
    mySentenceExample: "I watched two friends grow after working through their conflict.",
  },
  {
    number: 9,
    title: "A Conversation with Both of Them",
    image: null,
    imageNote: "Amara, Lucia, and Ben sitting together outside school, talking openly about what happened, all relaxed now.",
    story:
      "A few weeks later, the three of us talk openly about what had happened, something I hadn't expected to become a comfortable topic. Lucia admits that hearing Ben's side, rather than just assuming intent, genuinely changed how she reacts to disappointment now. Ben admits that seeing how much his silence had hurt Lucia motivated him more than any lecture could have. Both thank me for not simply taking a side, but instead helping them actually understand each other properly. “Seriously, thank you, Amara,” Lucia says, and Ben nods in agreement. I explain that I hadn't done much beyond listening carefully and trusting they could work it out themselves.",
    questions: [
      { text: "What do the three of them do a few weeks later?", answer: "Talk openly about what happened." },
      { text: "What does Lucia admit changed how she reacts to disappointment?", answer: "Hearing Ben's side instead of assuming intent." },
      { text: "What do both Lucia and Ben thank Amara for?", answer: "Not simply taking a side, but helping them understand each other." },
    ],
    trueFalse: [
      { text: "The three of them talk openly about what happened.", answer: true },
      { text: "Lucia admits hearing Ben's side changed how she reacts to disappointment.", answer: true },
      { text: "Ben says seeing Lucia's hurt motivated him more than any lecture.", answer: true },
      { text: "Both thank Amara for simply taking Lucia's side.", answer: false },
      { text: "Amara says she trusted they could work it out themselves.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few weeks later, the three of us talk openly about what had happened, something I hadn't expected to become a comfortable topic.",
        jumbled: ["what", "weeks", "had", "a", "comfortable", "of", "topic.", "openly", "to", "us", "the", "happened,", "A", "about", "something", "become", "three", "later,", "few", "expected", "talk", "hadn't", "I"],
      },
      {
        target: "Lucia admits that hearing Ben's side, rather than just assuming intent, genuinely changed how she reacts to disappointment now.",
        jumbled: ["that", "changed", "Lucia", "she", "just", "Ben's", "hearing", "than", "assuming", "to", "side,", "how", "reacts", "now.", "genuinely", "intent,", "rather", "admits", "disappointment"],
      },
      {
        target: "Ben admits that seeing how much his silence had hurt Lucia motivated him more than any lecture could have.",
        jumbled: ["Ben", "his", "than", "have.", "had", "more", "silence", "him", "that", "lecture", "Lucia", "how", "much", "hurt", "motivated", "any", "could", "admits", "seeing"],
      },
      {
        target: "Both thank me for not simply taking a side, but instead helping them actually understand each other properly.",
        jumbled: ["for", "other", "properly.", "each", "simply", "helping", "Both", "understand", "side,", "actually", "thank", "them", "not", "a", "instead", "me", "taking", "but"],
      },
      {
        target: "I explain that I hadn't done much beyond listening carefully and trusting they could work it out themselves.",
        jumbled: ["much", "listening", "that", "explain", "it", "could", "themselves.", "beyond", "trusting", "work", "out", "they", "hadn't", "I", "I", "done", "carefully", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping two people understand each other rather than choosing a side.",
    mySentenceExample: "I helped two people understand each other rather than choosing a side.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Amara sitting alone at home that evening, reflecting quietly in her journal, a small smile on her face.",
    story:
      "Looking back on the whole situation, I realize how differently things might have gone had I simply chosen one friend's side immediately. You did the right thing, Amara, I think, closing my journal for the night. If I had sided with Lucia without hearing Ben, or with Ben without acknowledging Lucia's hurt, I likely would have lost one friendship trying to protect the other. Instead, patiently understanding both perspectives allowed me to help them actually reconnect rather than simply picking a winner. I've learned that being a good friend to two people sometimes means resisting the urge to choose sides at all. In the end, this experience taught me that genuine mediation requires trusting people to grow, not just fixing things for them.",
    questions: [
      { text: "What does Amara realize looking back on the situation?", answer: "How differently things might have gone had she chosen a side immediately." },
      { text: "What might have happened if she had chosen one friend's side?", answer: "She likely would have lost one friendship trying to protect the other." },
      { text: "What has Amara learned about being a good friend to two people?", answer: "That it sometimes means resisting the urge to choose sides." },
    ],
    trueFalse: [
      { text: "Amara realizes things might have gone differently with quick sides.", answer: true },
      { text: "Choosing one side might have cost her one friendship entirely.", answer: true },
      { text: "Amara believes mediation means fixing things for people, not trusting them.", answer: false },
      { text: "Amara learns being a good friend sometimes means resisting choosing sides.", answer: true },
      { text: "Patient understanding allowed them to reconnect rather than pick a winner.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the whole situation, I realize how differently things might have gone had I simply chosen one friend's side immediately.",
        jumbled: ["things", "I", "differently", "Looking", "immediately.", "on", "the", "whole", "had", "back", "have", "how", "chosen", "simply", "realize", "situation,", "might", "one", "friend's", "I", "side", "gone"],
      },
      {
        target: "You did the right thing, Amara, I think, closing my journal for the night.",
        jumbled: ["night.", "closing", "for", "journal", "Amara,", "my", "I", "did", "the", "the", "right", "thing,", "You", "think,"],
      },
      {
        target: "I likely would have lost one friendship trying to protect the other.",
        jumbled: ["I", "protect", "the", "to", "trying", "other.", "friendship", "would", "one", "lost", "likely", "have"],
      },
      {
        target: "Instead, patiently understanding both perspectives allowed me to help them actually reconnect rather than simply picking a winner.",
        jumbled: ["simply", "Instead,", "reconnect", "perspectives", "actually", "allowed", "to", "rather", "me", "understanding", "both", "patiently", "help", "than", "picking", "a", "them", "winner."],
      },
      {
        target: "In the end, this experience taught me that genuine mediation requires trusting people to grow, not just fixing things for them.",
        jumbled: ["for", "grow,", "genuine", "end,", "taught", "mediation", "just", "trusting", "the", "things", "to", "that", "me", "fixing", "this", "requires", "In", "them.", "not", "experience", "people"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from helping two friends reconnect instead of choosing a side.",
    mySentenceExample: "I learned that helping friends reconnect matters more than choosing sides.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
