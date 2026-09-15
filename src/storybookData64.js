// B1 Adults digital storybook, Book 64: "A Noisy New Neighbor"
// Static content -- no Supabase. Eighth and final book in the B1
// Adults batch (57-64). Interpersonal/complaint scenario, distinct
// from Book 39's "Moving into My First Apartment" (a friendly,
// settling-in neighbor arc) -- this one centers on a noise conflict
// and diplomatic resolution, matching the B1 Adults spec's complaint-
// handling and linking-device targets. Adults-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook64/cover.jpg";

export const STORYBOOK_TITLE = "A Noisy New Neighbor";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Amara standing in her apartment hallway at night, hand raised near a neighbor's door, looking hesitant but determined.";

export const CHARACTERS = [
  { name: "Amara", role: "The narrator, an adult renting an apartment", look: "Robe over pajamas, hair tied back, tired but composed expression." },
  { name: "Théo", role: "The new neighbor in the apartment upstairs", look: "Casual clothes, headphones often around his neck, friendly once approached." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Neighbor Moves In",
    image: null,
    imageNote: "Amara watching from her doorway as movers carry boxes and furniture into the apartment upstairs.",
    story:
      "Over the weekend, I notice movers carrying boxes and furniture into the previously empty apartment directly above mine. “I'm Amara, I live right below you,” I say, introducing myself briefly in the hallway to the new tenant, a friendly young man named Théo who seems genuinely pleasant. We exchange a few polite words about the building, and he mentions he's just moved here for a new job downtown. Everything seems perfectly normal for the first couple of days, with only the usual sounds of someone settling in. However, by midweek, I start noticing something considerably louder than typical everyday apartment noise.",
    questions: [
      { text: "What does Amara notice over the weekend?", answer: "Movers carrying boxes into the apartment above hers." },
      { text: "Who does Amara meet in the hallway?", answer: "Théo, the new tenant." },
      { text: "What does Amara start noticing by midweek?", answer: "Noise louder than typical apartment sounds." },
    ],
    trueFalse: [
      { text: "Amara notices movers carrying boxes upstairs.", answer: true },
      { text: "The new tenant's name is Théo.", answer: true },
      { text: "Théo seems unfriendly when they first meet.", answer: false },
      { text: "Théo mentions he moved for a new job downtown.", answer: true },
      { text: "By midweek, Amara notices something considerably louder.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the weekend, I notice movers carrying boxes and furniture into the previously empty apartment directly above mine.",
        jumbled: ["the", "and", "I", "boxes", "Over", "previously", "mine.", "above", "directly", "apartment", "weekend,", "movers", "furniture", "into", "notice", "empty", "carrying", "the"],
      },
      {
        target: "“I'm Amara, I live right below you,” I say, introducing myself briefly in the hallway to the new tenant, a friendly young man named Théo who seems genuinely pleasant.",
        jumbled: ["a", "live", "pleasant.", "myself", "hallway", "to", "you,”", "the", "I", "below", "briefly", "the", "new", "right", "named", "genuinely", "young", "Théo", "Amara,", "in", "tenant,", "seems", "introducing", "friendly", "who", "say,", "“I'm", "I", "man"],
      },
      {
        target: "We exchange a few polite words about the building, and he mentions he's just moved here for a new job downtown.",
        jumbled: ["polite", "just", "We", "he's", "about", "words", "mentions", "for", "a", "downtown.", "the", "new", "moved", "a", "few", "and", "exchange", "job", "he", "building,", "here"],
      },
      {
        target: "Everything seems perfectly normal for the first couple of days, with only the usual sounds of someone settling in.",
        jumbled: ["sounds", "first", "the", "only", "of", "for", "usual", "someone", "in.", "settling", "days,", "seems", "the", "Everything", "with", "couple", "normal", "of", "perfectly"],
      },
      {
        target: "However, by midweek, I start noticing something considerably louder than typical everyday apartment noise.",
        jumbled: ["noticing", "midweek,", "everyday", "apartment", "noise.", "than", "However,", "start", "something", "typical", "I", "louder", "considerably", "by"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a new neighbor for the first time.",
    mySentenceExample: "I met a new neighbor for the first time last week.",
  },
  {
    number: 2,
    title: "Late-Night Noise",
    image: null,
    imageNote: "Amara lying awake in bed at night, looking up at the ceiling as muffled music and footsteps sound from above.",
    story:
      "Around midnight, muffled music and what sounds like furniture being dragged across the floor wake me from a light sleep. I lie there for a while, hoping it's simply a one-time thing related to unpacking or rearranging furniture. However, the noise continues steadily for nearly an hour, making it genuinely difficult to fall back asleep comfortably. I check my phone repeatedly, its lock screen reading “Amara's alarm: 6:30 AM,” growing increasingly frustrated as tomorrow's early work meeting looms uncomfortably close. Eventually, exhaustion outweighs my frustration, and I manage to drift into an uneasy, restless sleep.",
    questions: [
      { text: "What wakes Amara around midnight?", answer: "Muffled music and furniture being dragged." },
      { text: "How long does the noise continue?", answer: "Nearly an hour." },
      { text: "What does Amara keep checking repeatedly?", answer: "The time." },
    ],
    trueFalse: [
      { text: "Muffled music and dragging furniture wake Amara around midnight.", answer: true },
      { text: "Amara hopes it's simply a one-time thing at first.", answer: true },
      { text: "The noise continues for nearly an hour.", answer: true },
      { text: "Amara falls back asleep easily and quickly.", answer: false },
      { text: "Amara has an early work meeting tomorrow.", answer: true },
    ],
    buildSentence: [
      {
        target: "Around midnight, muffled music and what sounds like furniture being dragged across the floor wake me from a light sleep.",
        jumbled: ["a", "across", "dragged", "what", "sounds", "wake", "the", "music", "and", "furniture", "from", "light", "muffled", "being", "sleep.", "like", "me", "Around", "midnight,", "floor"],
      },
      {
        target: "I lie there for a while, hoping it's simply a one-time thing related to unpacking or rearranging furniture.",
        jumbled: ["lie", "a", "related", "rearranging", "for", "I", "to", "thing", "simply", "a", "one-time", "there", "while,", "furniture.", "unpacking", "hoping", "it's", "or"],
      },
      {
        target: "However, the noise continues steadily for nearly an hour, making it genuinely difficult to fall back asleep comfortably.",
        jumbled: ["steadily", "continues", "However,", "nearly", "noise", "fall", "genuinely", "asleep", "to", "an", "the", "hour,", "for", "it", "back", "comfortably.", "making", "difficult"],
      },
      {
        target: "I check my phone repeatedly, its lock screen reading “Amara's alarm: 6:30 AM,” growing increasingly frustrated as tomorrow's early work meeting looms uncomfortably close.",
        jumbled: ["“Amara's", "close.", "frustrated", "work", "reading", "lock", "my", "growing", "as", "increasingly", "check", "uncomfortably", "screen", "its", "I", "meeting", "looms", "repeatedly,", "early", "AM,”", "6:30", "tomorrow's", "alarm:", "phone"],
      },
      {
        target: "Eventually, exhaustion outweighs my frustration, and I manage to drift into an uneasy, restless sleep.",
        jumbled: ["my", "manage", "drift", "and", "sleep.", "an", "Eventually,", "exhaustion", "I", "restless", "frustration,", "into", "uneasy,", "to", "outweighs"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being kept awake by noise at night.",
    mySentenceExample: "I was kept awake by loud noise at night.",
  },
  {
    number: 3,
    title: "A Pattern Emerges",
    image: null,
    imageNote: "Amara sitting at her kitchen table the next morning, tired, looking up at the ceiling with a frustrated expression.",
    story:
      "The following few nights bring more of the same, with loud music and heavy footsteps becoming an unwelcome nightly routine. I try being patient at first, reminding myself that Théo is still new and perhaps unaware of how sound travels here. However, after nearly a week of interrupted sleep, my patience has genuinely started wearing thin considerably. I mention the situation briefly to another neighbor. “You're not imagining it, Amara, I've heard it too, though not as loud,” she admits. Realizing this isn't simply my imagination reassures me slightly, though it doesn't actually solve the underlying problem.",
    questions: [
      { text: "What becomes an unwelcome nightly routine?", answer: "Loud music and heavy footsteps." },
      { text: "What does Amara try being at first?", answer: "Patient." },
      { text: "What does another neighbor admit?", answer: "That she's noticed the noise too." },
    ],
    trueFalse: [
      { text: "Loud music and footsteps become an unwelcome nightly routine.", answer: true },
      { text: "Amara tries being patient at first.", answer: true },
      { text: "Amara's patience has genuinely started wearing thin.", answer: true },
      { text: "Another neighbor says she's noticed nothing unusual at all.", answer: false },
      { text: "Amara realizes this isn't simply her imagination.", answer: true },
    ],
    buildSentence: [
      {
        target: "The following few nights bring more of the same, with loud music and heavy footsteps becoming an unwelcome nightly routine.",
        jumbled: ["The", "with", "few", "and", "loud", "routine.", "same,", "becoming", "an", "music", "nightly", "more", "unwelcome", "following", "nights", "of", "bring", "heavy", "footsteps", "the"],
      },
      {
        target: "I try being patient at first, reminding myself that Théo is still new and perhaps unaware of how sound travels here.",
        jumbled: ["I", "sound", "at", "being", "try", "travels", "here.", "myself", "perhaps", "new", "and", "first,", "patient", "unaware", "is", "that", "still", "Théo", "reminding", "how", "of"],
      },
      {
        target: "However, after nearly a week of interrupted sleep, my patience has genuinely started wearing thin considerably.",
        jumbled: ["sleep,", "has", "interrupted", "patience", "genuinely", "However,", "week", "considerably.", "nearly", "thin", "started", "of", "after", "my", "wearing", "a"],
      },
      {
        target: "I mention the situation briefly to another neighbor.",
        jumbled: ["I", "situation", "briefly", "to", "another", "mention", "the", "neighbor."],
      },
      {
        target: "Realizing this isn't simply my imagination reassures me slightly, though it doesn't actually solve the underlying problem.",
        jumbled: ["doesn't", "slightly,", "isn't", "actually", "it", "the", "problem.", "simply", "imagination", "me", "underlying", "reassures", "Realizing", "solve", "though", "this", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a problem happening repeatedly, not just once.",
    mySentenceExample: "I noticed the noise problem happening repeatedly, not just once.",
  },
  {
    number: 4,
    title: "Deciding What to Do",
    image: null,
    imageNote: "Amara sitting at her kitchen table, weighing two pieces of paper: one labeled 'Talk directly' and one labeled 'Contact management.'",
    story:
      "Exhausted and increasingly frustrated, I write “Amara's Plan” at the top of a notepad page and consider two possible approaches: speaking with Théo directly or contacting building management instead. On the other hand, going straight to management feels slightly excessive for what could still be an easily fixable misunderstanding. I decide that approaching Théo calmly and directly seems like the more reasonable first step to take. If that conversation doesn't actually improve anything, I can always escalate the situation through official channels later. Feeling somewhat more decisive now, I plan to knock on his door sometime after work today.",
    questions: [
      { text: "What two approaches does Amara consider?", answer: "Speaking with Théo directly or contacting building management." },
      { text: "Why does going straight to management feel excessive?", answer: "Because it could still be an easily fixable misunderstanding." },
      { text: "What does Amara decide to do first?", answer: "Approach Théo calmly and directly." },
    ],
    trueFalse: [
      { text: "Amara considers speaking with Théo or contacting management.", answer: true },
      { text: "Amara feels going straight to management feels excessive.", answer: true },
      { text: "Amara decides to approach Théo calmly and directly first.", answer: true },
      { text: "Amara plans to never speak to Théo about this.", answer: false },
      { text: "Amara can still escalate this later if needed.", answer: true },
    ],
    buildSentence: [
      {
        target: "Exhausted and increasingly frustrated, I write “Amara's Plan” at the top of a notepad page and consider two possible approaches: speaking with Théo directly or contacting building management instead.",
        jumbled: ["at", "building", "approaches:", "and", "directly", "Théo", "with", "possible", "of", "contacting", "page", "management", "consider", "write", "“Amara's", "notepad", "a", "I", "Exhausted", "the", "frustrated,", "two", "increasingly", "instead.", "or", "and", "top", "speaking", "Plan”"],
      },
      {
        target: "On the other hand, going straight to management feels slightly excessive for what could still be an easily fixable misunderstanding.",
        jumbled: ["feels", "slightly", "going", "easily", "the", "could", "an", "excessive", "for", "On", "fixable", "straight", "be", "misunderstanding.", "management", "hand,", "to", "still", "other", "what"],
      },
      {
        target: "I decide that approaching Théo calmly and directly seems like the more reasonable first step to take.",
        jumbled: ["seems", "calmly", "Théo", "like", "to", "first", "directly", "approaching", "that", "the", "decide", "reasonable", "more", "and", "step", "take.", "I"],
      },
      {
        target: "I can always escalate the situation through official channels later.",
        jumbled: ["I", "situation", "through", "the", "can", "always", "channels", "later.", "official", "escalate"],
      },
      {
        target: "Feeling somewhat more decisive now, I plan to knock on his door sometime after work today.",
        jumbled: ["somewhat", "on", "plan", "knock", "after", "sometime", "Feeling", "door", "work", "today.", "decisive", "more", "I", "to", "his", "now,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about deciding on the best way to handle a conflict calmly.",
    mySentenceExample: "I decided on the best way to handle the conflict calmly.",
  },
  {
    number: 5,
    title: "A Difficult Knock",
    image: null,
    imageNote: "Amara standing outside Théo's apartment door, hand raised to knock, taking a deep breath before doing so.",
    story:
      "Standing outside Théo's door that evening, I take a deep breath, reminding myself to stay calm and specifically friendly. He opens the door, looking mildly surprised but greeting me warmly, clearly not expecting a serious conversation. I explain gently that the noise, particularly late at night, has been making it difficult for me to sleep well. “I had honestly no idea it was traveling that clearly, Amara. I'm really sorry about that,” he responds immediately, sounding genuinely embarrassed. His reaction reassures me considerably, since I had quietly worried this conversation might become awkward or tense instead.",
    questions: [
      { text: "What does Amara remind herself to do before knocking?", answer: "Stay calm and friendly." },
      { text: "How does Théo react when he opens the door?", answer: "Mildly surprised, greeting her warmly." },
      { text: "What does Théo say in response to Amara's explanation?", answer: "That he had no idea the noise was traveling, and he's sorry." },
    ],
    trueFalse: [
      { text: "Amara reminds herself to stay calm and friendly.", answer: true },
      { text: "Théo greets her warmly, not expecting a serious conversation.", answer: true },
      { text: "Théo responds by getting defensive and annoyed.", answer: false },
      { text: "Théo says he had no idea the noise was traveling clearly.", answer: true },
      { text: "Amara feels reassured by his reaction.", answer: true },
    ],
    buildSentence: [
      {
        target: "Standing outside Théo's door that evening, I take a deep breath, reminding myself to stay calm and specifically friendly.",
        jumbled: ["evening,", "outside", "stay", "Théo's", "reminding", "calm", "take", "breath,", "and", "myself", "friendly.", "that", "door", "a", "I", "deep", "Standing", "specifically", "to"],
      },
      {
        target: "He opens the door, looking mildly surprised but greeting me warmly, clearly not expecting a serious conversation.",
        jumbled: ["me", "mildly", "greeting", "the", "clearly", "conversation.", "looking", "expecting", "serious", "but", "door,", "opens", "not", "warmly,", "a", "surprised", "He"],
      },
      {
        target: "I explain gently that the noise, particularly late at night, has been making it difficult for me to sleep well.",
        jumbled: ["been", "noise,", "that", "has", "night,", "to", "making", "at", "late", "difficult", "the", "particularly", "it", "gently", "me", "for", "sleep", "explain", "I", "well."],
      },
      {
        target: "“I had honestly no idea it was traveling that clearly, Amara. I'm really sorry about that,” he responds immediately, sounding genuinely embarrassed.",
        jumbled: ["he", "embarrassed.", "had", "genuinely", "clearly,", "immediately,", "I'm", "that", "about", "no", "traveling", "idea", "sounding", "that,”", "honestly", "was", "Amara.", "it", "responds", "sorry", "really", "“I"],
      },
      {
        target: "His reaction reassures me considerably, since I had quietly worried this conversation might become awkward or tense instead.",
        jumbled: ["this", "since", "awkward", "His", "conversation", "me", "reaction", "or", "reassures", "instead.", "worried", "become", "had", "tense", "quietly", "considerably,", "I", "might"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about approaching a difficult conversation calmly and honestly.",
    mySentenceExample: "I approached the difficult conversation calmly and honestly.",
  },
  {
    number: 6,
    title: "Finding a Solution",
    image: null,
    imageNote: "Amara and Théo standing in the doorway, both talking casually, Théo gesturing as he suggests an idea.",
    story:
      "Théo explains that he'd been rearranging furniture and occasionally listening to music while unpacking boxes late at night. He suggests wearing headphones during late hours and finishing any heavy furniture moving considerably earlier in the evening. “Would it help if I also put down a rug under my speakers, Amara?” he asks thoughtfully, clearly wanting to actually fix this properly. I appreciate his willingness to problem-solve rather than simply apologizing without offering any real changes. We agree that if anything comes up again, I'll simply mention it directly rather than letting frustration build silently.",
    questions: [
      { text: "What does Théo explain he'd been doing at night?", answer: "Rearranging furniture and listening to music while unpacking." },
      { text: "What does Théo suggest doing during late hours?", answer: "Wearing headphones and finishing heavy furniture moving earlier." },
      { text: "What do Amara and Théo agree about future issues?", answer: "That Amara will mention it directly instead of letting frustration build." },
    ],
    trueFalse: [
      { text: "Théo explains he'd been rearranging furniture and listening to music.", answer: true },
      { text: "Théo suggests wearing headphones during late hours.", answer: true },
      { text: "Théo refuses to offer any actual changes.", answer: false },
      { text: "Théo suggests putting a rug under his speakers.", answer: true },
      { text: "They agree Amara will mention future issues directly.", answer: true },
    ],
    buildSentence: [
      {
        target: "Théo explains that he'd been rearranging furniture and occasionally listening to music while unpacking boxes late at night.",
        jumbled: ["listening", "and", "furniture", "night.", "to", "been", "music", "explains", "Théo", "unpacking", "rearranging", "at", "that", "while", "occasionally", "late", "boxes", "he'd"],
      },
      {
        target: "He suggests wearing headphones during late hours and finishing any heavy furniture moving considerably earlier in the evening.",
        jumbled: ["late", "considerably", "hours", "heavy", "in", "wearing", "furniture", "headphones", "finishing", "moving", "any", "during", "earlier", "evening.", "He", "the", "suggests", "and"],
      },
      {
        target: "“Would it help if I also put down a rug under my speakers, Amara?” he asks thoughtfully, clearly wanting to actually fix this properly.",
        jumbled: ["he", "put", "also", "under", "my", "rug", "it", "if", "properly.", "wanting", "clearly", "actually", "I", "asks", "help", "speakers,", "to", "fix", "a", "this", "Amara?”", "thoughtfully,", "down", "“Would"],
      },
      {
        target: "I appreciate his willingness to problem-solve rather than simply apologizing without offering any real changes.",
        jumbled: ["simply", "any", "I", "willingness", "offering", "real", "than", "changes.", "apologizing", "rather", "appreciate", "without", "his", "to", "problem-solve"],
      },
      {
        target: "We agree that if anything comes up again, I'll simply mention it directly rather than letting frustration build silently.",
        jumbled: ["comes", "simply", "than", "silently.", "build", "up", "frustration", "if", "mention", "We", "rather", "directly", "that", "it", "I'll", "anything", "again,", "agree", "letting"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about two people working together to solve a problem fairly.",
    mySentenceExample: "We worked together to solve the noise problem fairly.",
  },
  {
    number: 7,
    title: "A Quieter Week",
    image: null,
    imageNote: "Amara lying peacefully in bed at night, the ceiling above quiet and dark, a small smile on her sleeping face.",
    story:
      "That night, and for several nights afterward, my apartment stays noticeably quieter than it had been throughout the entire previous week. I sleep considerably better, and my morning routine feels less rushed without the exhaustion I'd been carrying around constantly. I run into Théo briefly in the hallway a few days later. “Hey Amara, has it gotten better since we talked?” he asks. I confirm honestly that yes, it's been considerably better, and I genuinely appreciate him taking my concern seriously. He seems relieved to hear this, mentioning he'd felt slightly guilty since our initial conversation that evening.",
    questions: [
      { text: "How does Amara's apartment stay that night?", answer: "Noticeably quieter." },
      { text: "How does Amara sleep afterward?", answer: "Considerably better." },
      { text: "What does Théo ask when they run into each other?", answer: "Whether things have improved." },
    ],
    trueFalse: [
      { text: "Amara's apartment stays noticeably quieter afterward.", answer: true },
      { text: "Amara sleeps considerably better afterward.", answer: true },
      { text: "Théo asks whether things have improved since their talk.", answer: true },
      { text: "Amara says nothing has changed at all.", answer: false },
      { text: "Théo mentions feeling slightly guilty since their talk.", answer: true },
    ],
    buildSentence: [
      {
        target: "That night, and for several nights afterward, my apartment stays noticeably quieter than it had been throughout the entire previous week.",
        jumbled: ["it", "night,", "been", "apartment", "throughout", "for", "noticeably", "quieter", "than", "week.", "the", "several", "my", "afterward,", "previous", "and", "stays", "entire", "That", "nights", "had"],
      },
      {
        target: "I sleep considerably better, and my morning routine feels less rushed without the exhaustion I'd been carrying around constantly.",
        jumbled: ["been", "feels", "constantly.", "exhaustion", "less", "better,", "rushed", "around", "routine", "the", "my", "carrying", "I'd", "considerably", "without", "I", "and", "sleep", "morning"],
      },
      {
        target: "I run into Théo briefly in the hallway a few days later.",
        jumbled: ["few", "Théo", "the", "I", "a", "into", "later.", "hallway", "briefly", "in", "days", "run"],
      },
      {
        target: "“Hey Amara, has it gotten better since we talked?” he asks.",
        jumbled: ["since", "it", "has", "we", "“Hey", "gotten", "Amara,", "talked?”", "he", "better", "asks."],
      },
      {
        target: "I confirm honestly that yes, it's been considerably better, and I genuinely appreciate him taking my concern seriously.",
        jumbled: ["I", "that", "appreciate", "better,", "and", "it's", "been", "I", "considerably", "my", "taking", "him", "honestly", "confirm", "seriously.", "yes,", "genuinely", "concern"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing life feels better after a problem gets resolved.",
    mySentenceExample: "Life felt better after the noise problem got resolved.",
  },
  {
    number: 8,
    title: "Talking to the Other Neighbor",
    image: null,
    imageNote: "Amara chatting with the neighbor from before in the building's shared laundry room, both folding laundry casually.",
    story:
      "In the laundry room, I mention to the other neighbor that the noise situation with Théo has genuinely improved considerably since our conversation. “Really, Amara? I assumed you'd have to get management involved,” she says, pleasantly surprised. I explain that, in my experience, approaching someone directly and calmly often works better than escalating things immediately. On the other hand, I acknowledge that a direct conversation isn't always possible or appropriate, depending on the actual situation. She agrees, saying she'll consider a similar approach if something ever bothers her about another neighbor.",
    questions: [
      { text: "What does Amara mention to the other neighbor?", answer: "That the noise situation has genuinely improved." },
      { text: "What does the other neighbor seem surprised by?", answer: "That it didn't require involving management." },
      { text: "What does Amara explain about approaching someone directly?", answer: "That it often works better than escalating immediately." },
    ],
    trueFalse: [
      { text: "Amara mentions the noise situation has genuinely improved.", answer: true },
      { text: "The other neighbor assumed this required involving management.", answer: true },
      { text: "Amara explains approaching someone directly often works better.", answer: true },
      { text: "Amara insists a direct conversation is always the right choice.", answer: false },
      { text: "The other neighbor agrees to consider a similar approach.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the laundry room, I mention to the other neighbor that the noise situation with Théo has genuinely improved considerably since our conversation.",
        jumbled: ["to", "improved", "conversation.", "neighbor", "other", "has", "I", "the", "that", "with", "room,", "genuinely", "the", "Théo", "since", "our", "situation", "mention", "noise", "considerably", "laundry", "In", "the"],
      },
      {
        target: "“Really, Amara? I assumed you'd have to get management involved,” she says, pleasantly surprised.",
        jumbled: ["assumed", "I", "says,", "“Really,", "Amara?", "management", "get", "involved,”", "have", "pleasantly", "to", "she", "surprised.", "you'd"],
      },
      {
        target: "I explain that, in my experience, approaching someone directly and calmly often works better than escalating things immediately.",
        jumbled: ["better", "often", "I", "immediately.", "experience,", "someone", "in", "explain", "escalating", "my", "than", "calmly", "that,", "and", "things", "works", "directly", "approaching"],
      },
      {
        target: "On the other hand, I acknowledge that a direct conversation isn't always possible or appropriate, depending on the actual situation.",
        jumbled: ["isn't", "the", "I", "direct", "on", "On", "depending", "conversation", "or", "other", "acknowledge", "appropriate,", "actual", "that", "situation.", "hand,", "the", "possible", "always", "a"],
      },
      {
        target: "She agrees, saying she'll consider a similar approach if something ever bothers her about another neighbor.",
        jumbled: ["ever", "if", "a", "about", "another", "She", "agrees,", "bothers", "her", "saying", "approach", "something", "consider", "neighbor.", "she'll", "similar"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sharing advice with someone based on your own experience.",
    mySentenceExample: "I shared advice with my neighbor based on my own experience.",
  },
  {
    number: 9,
    title: "A Small Gesture",
    image: null,
    imageNote: "Théo knocking on Amara's door holding a small potted plant, both smiling in the doorway.",
    story:
      "A few days later, Théo knocks on my door, holding a small potted plant he says he thought I might genuinely like. “This is just a small thank-you, Amara, for handling everything so kindly instead of getting angry,” he explains, smiling warmly. I'm pleasantly surprised, accepting the gift while telling him honestly that it really wasn't necessary at all. He insists it is, mentioning that my patience made an awkward situation considerably easier for him to navigate. This small, unexpected gesture makes me feel genuinely glad I chose conversation over silent frustration or formal complaints.",
    questions: [
      { text: "What does Théo bring to Amara's door?", answer: "A small potted plant." },
      { text: "What does Théo say the gift is for?", answer: "A thank-you for handling everything kindly instead of getting angry." },
      { text: "How does Amara feel about this gesture?", answer: "Genuinely glad she chose conversation over silent frustration." },
    ],
    trueFalse: [
      { text: "Théo brings a small potted plant to Amara's door.", answer: true },
      { text: "Théo says this is a thank-you for handling things kindly.", answer: true },
      { text: "Amara refuses to accept the gift at all.", answer: false },
      { text: "Théo says her patience made the situation easier for him.", answer: true },
      { text: "Amara feels genuinely glad she chose conversation over silence.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few days later, Théo knocks on my door, holding a small potted plant he says he thought I might genuinely like.",
        jumbled: ["small", "knocks", "genuinely", "door,", "he", "he", "potted", "thought", "later,", "I", "plant", "my", "a", "on", "Théo", "might", "holding", "says", "like.", "days", "A", "few"],
      },
      {
        target: "“This is just a small thank-you, Amara, for handling everything so kindly instead of getting angry,” he explains, smiling warmly.",
        jumbled: ["instead", "is", "“This", "explains,", "warmly.", "small", "everything", "Amara,", "he", "handling", "of", "getting", "thank-you,", "smiling", "just", "a", "so", "kindly", "angry,”", "for"],
      },
      {
        target: "I'm pleasantly surprised, accepting the gift while telling him honestly that it really wasn't necessary at all.",
        jumbled: ["all.", "accepting", "while", "surprised,", "I'm", "gift", "that", "telling", "necessary", "wasn't", "it", "pleasantly", "really", "at", "the", "him", "honestly"],
      },
      {
        target: "He insists it is, mentioning that my patience made an awkward situation considerably easier for him to navigate.",
        jumbled: ["that", "considerably", "patience", "easier", "an", "navigate.", "made", "awkward", "for", "him", "mentioning", "situation", "is,", "to", "insists", "He", "my", "it"],
      },
      {
        target: "This small, unexpected gesture makes me feel genuinely glad I chose conversation over silent frustration or formal complaints.",
        jumbled: ["formal", "unexpected", "I", "frustration", "chose", "silent", "me", "or", "glad", "small,", "genuinely", "gesture", "over", "This", "makes", "feel", "conversation", "complaints."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving an unexpected thank-you gesture from someone.",
    mySentenceExample: "I received an unexpected thank-you gesture from my neighbor.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Amara sitting comfortably in her apartment with the small plant now on her windowsill, relaxed and content.",
    story:
      "Looking back on the entire situation, I write one line in my journal, “Amara: talk first, escalate later,” and realize how easily this could have escalated into something far more tense and unpleasant. If I had complained to management immediately, without speaking to Théo directly first, our relationship might have started off poorly. Instead, staying calm and approaching the conversation kindly allowed us to actually resolve things quickly and fairly. I've learned that most conflicts between neighbors can be solved through simple, honest communication rather than avoidance or escalation. In the end, this small noise dispute unexpectedly became the beginning of a genuinely friendly neighborly relationship.",
    questions: [
      { text: "What does Amara realize looking back on this situation?", answer: "How easily it could have escalated into something tense." },
      { text: "What might have happened if she had gone straight to management?", answer: "Their relationship might have started off poorly." },
      { text: "What has Amara learned about conflicts between neighbors?", answer: "That most can be solved through simple, honest communication." },
    ],
    trueFalse: [
      { text: "Amara realizes this could have escalated into something tense.", answer: true },
      { text: "Going straight to management might have started things off poorly.", answer: true },
      { text: "Amara believes most conflicts can be solved through honest communication.", answer: true },
      { text: "Amara wishes she had avoided speaking to Théo entirely.", answer: false },
      { text: "This dispute became the start of a friendly relationship.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire situation, I write one line in my journal, “Amara: talk first, escalate later,” and realize how easily this could have escalated into something far more tense and unpleasant.",
        jumbled: ["line", "one", "tense", "situation,", "on", "far", "first,", "escalated", "this", "have", "later,”", "realize", "and", "my", "how", "journal,", "could", "entire", "back", "I", "the", "unpleasant.", "in", "write", "easily", "escalate", "into", "and", "“Amara:", "talk", "something", "Looking", "more"],
      },
      {
        target: "Without speaking to Théo directly first, our relationship might have started off poorly.",
        jumbled: ["to", "directly", "speaking", "might", "off", "Théo", "started", "poorly.", "our", "have", "first,", "Without", "relationship"],
      },
      {
        target: "Instead, staying calm and approaching the conversation kindly allowed us to actually resolve things quickly and fairly.",
        jumbled: ["things", "quickly", "and", "the", "calm", "conversation", "Instead,", "and", "to", "us", "kindly", "fairly.", "actually", "staying", "resolve", "approaching", "allowed"],
      },
      {
        target: "I've learned that most conflicts between neighbors can be solved through simple, honest communication rather than avoidance or escalation.",
        jumbled: ["neighbors", "I've", "avoidance", "through", "simple,", "or", "solved", "conflicts", "escalation.", "rather", "between", "that", "than", "be", "can", "most", "honest", "learned", "communication"],
      },
      {
        target: "In the end, this small noise dispute unexpectedly became the beginning of a genuinely friendly neighborly relationship.",
        jumbled: ["the", "dispute", "neighborly", "beginning", "the", "genuinely", "friendly", "end,", "of", "unexpectedly", "In", "small", "noise", "became", "a", "this", "relationship."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from resolving a conflict calmly and kindly.",
    mySentenceExample: "I learned that resolving conflicts calmly builds better relationships.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
