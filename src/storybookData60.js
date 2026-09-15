// B1 Adults digital storybook, Book 60: "A Delayed Flight"
// Static content -- no Supabase. Fourth book in the B1 Adults batch
// (57-64). Travel-disruption scenario, matching the B1 Adults spec's
// emphasis on negotiation, rebooking, and communicating with staff
// under pressure. First air-travel story in the whole feature.
// Adults-track shape: 3 questions, 5 True/False, 5 Build-a-Sentence
// per chapter. Chapter images not generated yet -- image null per chapter.
import coverImg from "./assets/storybook60/cover.jpg";

export const STORYBOOK_TITLE = "A Delayed Flight";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Daniel standing at an airport gate, looking up at a departures board showing a delayed flight, suitcase beside him.";

export const CHARACTERS = [
  { name: "Daniel", role: "The narrator, an adult traveling for a family event", look: "Travel jacket, backpack, boarding pass in hand." },
  { name: "Ms. Kwan", role: "The airline's gate agent", look: "Airline uniform, headset, calm and efficient under pressure." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Waiting at the Gate",
    image: null,
    imageNote: "Daniel sitting near an airport gate, checking his watch and glancing at the departures board nearby.",
    story:
      "I arrive at the airport with plenty of time, hoping to relax a little before my flight to my sister's wedding this weekend. Boarding is supposed to begin in forty minutes, so I find a seat near the gate, my boarding pass with my name, Daniel, still tucked in my jacket pocket, and settle in comfortably. Glancing occasionally at the departures board, everything still appears completely normal, with my flight listed as on time. I use the extra time to reply to a few messages and grab a quick coffee from a nearby kiosk. Little do I know, this peaceful waiting period is about to be interrupted rather suddenly.",
    questions: [
      { text: "Why is Daniel traveling this weekend?", answer: "For his sister's wedding." },
      { text: "How much time does Daniel have before boarding?", answer: "Forty minutes." },
      { text: "What does Daniel do while he waits?", answer: "Replies to messages and grabs a coffee." },
    ],
    trueFalse: [
      { text: "Daniel is traveling for his sister's wedding.", answer: true },
      { text: "Boarding is supposed to begin in forty minutes.", answer: true },
      { text: "The departures board shows his flight is delayed already.", answer: false },
      { text: "Daniel uses the time to reply to messages and get coffee.", answer: true },
      { text: "Daniel expects his peaceful waiting to be interrupted soon.", answer: false },
    ],
    buildSentence: [
      {
        target: "I arrive at the airport with plenty of time, hoping to relax a little before my flight to my sister's wedding this weekend.",
        jumbled: ["airport", "little", "with", "a", "time,", "flight", "my", "wedding", "this", "arrive", "to", "my", "of", "at", "I", "relax", "to", "sister's", "before", "weekend.", "hoping", "the", "plenty"],
      },
      {
        target: "Boarding is supposed to begin in forty minutes, so I find a seat near the gate, my boarding pass with my name, Daniel, still tucked in my jacket pocket, and settle in comfortably.",
        jumbled: ["still", "gate,", "to", "and", "a", "comfortably.", "Boarding", "my", "my", "pocket,", "name,", "in", "near", "the", "my", "in", "Daniel,", "in", "with", "jacket", "pass", "begin", "find", "seat", "settle", "supposed", "I", "so", "tucked", "forty", "boarding", "is", "minutes,"],
      },
      {
        target: "Glancing occasionally at the departures board, everything still appears completely normal, with my flight listed as on time.",
        jumbled: ["at", "time.", "as", "the", "Glancing", "completely", "occasionally", "normal,", "departures", "with", "everything", "still", "listed", "on", "my", "board,", "flight", "appears"],
      },
      {
        target: "I use the extra time to reply to a few messages and grab a quick coffee from a nearby kiosk.",
        jumbled: ["kiosk.", "from", "use", "extra", "and", "grab", "to", "I", "time", "a", "coffee", "nearby", "quick", "the", "few", "a", "messages", "to", "a", "reply"],
      },
      {
        target: "Little do I know, this peaceful waiting period is about to be interrupted rather suddenly.",
        jumbled: ["I", "is", "to", "period", "about", "interrupted", "rather", "waiting", "do", "this", "suddenly.", "Little", "know,", "peaceful", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting calmly at an airport before a flight.",
    mySentenceExample: "I waited calmly at the airport before my flight.",
  },
  {
    number: 2,
    title: "An Announcement",
    image: null,
    imageNote: "Daniel looking up from his phone as an overhead announcement plays, other passengers around him reacting too.",
    story:
      "Suddenly, an announcement crackles over the speakers, and I catch the word “delay” before fully understanding the rest. My phone buzzes with an alert from the airline's app: “Daniel, your flight status has changed.” Looking up at the departures board, I notice my flight's status has changed from on time to a new, later departure. Around me, other passengers groan quietly, some immediately pulling out their phones to check connecting flights or plans. My own heart sinks slightly, since I specifically need to arrive in time for tonight's rehearsal dinner. I approach the nearest gate agent, hoping to understand exactly how long this delay might actually last.",
    questions: [
      { text: "What word does Daniel catch in the announcement?", answer: "Delay." },
      { text: "What does Daniel notice on the departures board?", answer: "His flight's status changed to a later departure." },
      { text: "Why does Daniel's heart sink slightly?", answer: "He needs to arrive in time for the rehearsal dinner." },
    ],
    trueFalse: [
      { text: "Daniel catches the word 'delay' in the announcement.", answer: true },
      { text: "The departures board now shows a later departure time.", answer: true },
      { text: "Other passengers seem completely unbothered by the news.", answer: false },
      { text: "Daniel needs to arrive in time for the rehearsal dinner.", answer: true },
      { text: "Daniel approaches a gate agent to ask about the delay.", answer: true },
    ],
    buildSentence: [
      {
        target: "Suddenly, an announcement crackles over the speakers, and I catch the word “delay” before fully understanding the rest.",
        jumbled: ["catch", "over", "crackles", "the", "and", "fully", "announcement", "an", "before", "the", "“delay”", "rest.", "word", "speakers,", "I", "understanding", "the", "Suddenly,"],
      },
      {
        target: "My phone buzzes with an alert from the airline's app: “Daniel, your flight status has changed.”",
        jumbled: ["changed.”", "app:", "phone", "flight", "alert", "with", "buzzes", "an", "My", "airline's", "your", "status", "the", "has", "“Daniel,", "from"],
      },
      {
        target: "Looking up at the departures board, I notice my flight's status has changed from on time to a new, later departure.",
        jumbled: ["I", "at", "from", "a", "later", "time", "status", "on", "departures", "Looking", "has", "to", "board,", "departure.", "my", "notice", "changed", "up", "flight's", "the", "new,"],
      },
      {
        target: "Around me, other passengers groan quietly, some immediately pulling out their phones to check connecting flights or plans.",
        jumbled: ["some", "check", "pulling", "immediately", "out", "Around", "connecting", "flights", "to", "me,", "quietly,", "passengers", "plans.", "groan", "phones", "their", "or", "other"],
      },
      {
        target: "My own heart sinks slightly, since I specifically need to arrive in time for tonight's rehearsal dinner.",
        jumbled: ["need", "tonight's", "in", "own", "I", "since", "slightly,", "specifically", "to", "arrive", "sinks", "heart", "My", "time", "dinner.", "rehearsal", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about hearing unexpected news that changed your plans.",
    mySentenceExample: "I heard unexpected news that changed my travel plans.",
  },
  {
    number: 3,
    title: "Asking for Details",
    image: null,
    imageNote: "Daniel speaking politely with Ms. Kwan at the gate desk, other worried passengers forming a small line behind him.",
    story:
      "Ms. Kwan, the gate agent, greets me calmly despite what must already be a stressful shift for her. I explain that I have an important event tonight and ask whether she could tell me more about the reason for this delay. “I'm sorry, Daniel, it's a mechanical issue our maintenance crew is checking right now,” she explains. “Would it be possible to know roughly how long this might take?” I ask, trying to sound polite despite my growing worry. She mentions it's currently estimated at two hours, though she admits that number could still change slightly.",
    questions: [
      { text: "Who does Daniel speak with about the delay?", answer: "Ms. Kwan, the gate agent." },
      { text: "What is causing the delay, according to Ms. Kwan?", answer: "A mechanical issue being checked by the maintenance crew." },
      { text: "How long is the delay currently estimated to be?", answer: "Two hours." },
    ],
    trueFalse: [
      { text: "Ms. Kwan greets Daniel calmly despite a stressful shift.", answer: true },
      { text: "The delay is due to a mechanical issue being checked.", answer: true },
      { text: "Daniel asks how long the delay might take.", answer: true },
      { text: "The delay is currently estimated at two hours.", answer: true },
      { text: "Ms. Kwan guarantees the estimate will not change.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Kwan, the gate agent, greets me calmly despite what must already be a stressful shift for her.",
        jumbled: ["be", "shift", "what", "stressful", "for", "already", "gate", "must", "the", "agent,", "me", "Ms.", "calmly", "greets", "Kwan,", "despite", "a", "her."],
      },
      {
        target: "I explain that I have an important event tonight and ask whether she could tell me more about the reason for this delay.",
        jumbled: ["more", "could", "about", "this", "I", "an", "that", "delay.", "and", "me", "event", "she", "the", "important", "explain", "ask", "whether", "for", "I", "have", "tonight", "tell", "reason"],
      },
      {
        target: "“I'm sorry, Daniel, it's a mechanical issue our maintenance crew is checking right now,” she explains.",
        jumbled: ["our", "is", "it's", "sorry,", "Daniel,", "right", "mechanical", "explains.", "issue", "a", "crew", "she", "maintenance", "now,”", "“I'm", "checking"],
      },
      {
        target: "“Would it be possible to know roughly how long this might take?” I ask, trying to sound polite despite my growing worry.",
        jumbled: ["“Would", "my", "know", "this", "how", "take?”", "long", "despite", "trying", "possible", "to", "polite", "might", "it", "to", "I", "roughly", "worry.", "ask,", "growing", "sound", "be"],
      },
      {
        target: "She mentions it's currently estimated at two hours, though she admits that number could still change slightly.",
        jumbled: ["change", "estimated", "slightly.", "hours,", "it's", "She", "still", "at", "number", "could", "mentions", "currently", "she", "two", "admits", "though", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking politely for more information during a problem.",
    mySentenceExample: "I asked politely for more information about the delay.",
  },
  {
    number: 4,
    title: "Doing the Math",
    image: null,
    imageNote: "Daniel sitting back down, phone in hand, calculating times on a notes app, a worried expression on his face.",
    story:
      "Sitting back down, I quickly calculate whether a two-hour delay would still allow me to reach the dinner on time. Even in the best case, I would land only about an hour before the event actually starts, without accounting for traffic. If the delay grows any longer, however, missing the rehearsal dinner entirely becomes a genuine possibility. I text my sister, explaining the situation honestly rather than promising something I'm not actually certain I can deliver. “Don't stress, Daniel, family will understand if you're a little late,” she replies quickly.",
    questions: [
      { text: "What does Daniel calculate while sitting back down?", answer: "Whether the delay still allows him to reach the dinner on time." },
      { text: "What happens in the best-case scenario?", answer: "He'd land only about an hour before the event." },
      { text: "How does Daniel's sister respond to his text?", answer: "Reassures him not to stress." },
    ],
    trueFalse: [
      { text: "Daniel calculates whether he can still reach the dinner on time.", answer: true },
      { text: "In the best case, he would land an hour before the event.", answer: true },
      { text: "Daniel promises his sister he'll definitely arrive on time.", answer: false },
      { text: "Missing the dinner entirely becomes a genuine possibility.", answer: true },
      { text: "His sister reassures him not to stress about it.", answer: true },
    ],
    buildSentence: [
      {
        target: "Sitting back down, I quickly calculate whether a two-hour delay would still allow me to reach the dinner on time.",
        jumbled: ["whether", "down,", "would", "reach", "back", "Sitting", "calculate", "allow", "to", "delay", "me", "still", "time.", "dinner", "I", "on", "quickly", "two-hour", "a", "the"],
      },
      {
        target: "Even in the best case, I would land only about an hour before the event actually starts, without accounting for traffic.",
        jumbled: ["only", "would", "an", "without", "land", "hour", "case,", "best", "about", "before", "in", "Even", "the", "actually", "I", "the", "starts,", "traffic.", "for", "accounting", "event"],
      },
      {
        target: "However, missing the rehearsal dinner entirely becomes a genuine possibility.",
        jumbled: ["a", "missing", "becomes", "rehearsal", "dinner", "However,", "entirely", "the", "possibility.", "genuine"],
      },
      {
        target: "I text my sister, explaining the situation honestly rather than promising something I'm not actually certain I can deliver.",
        jumbled: ["situation", "my", "certain", "than", "explaining", "deliver.", "text", "I'm", "not", "honestly", "the", "sister,", "promising", "actually", "I", "rather", "something", "I", "can"],
      },
      {
        target: "“Don't stress, Daniel, family will understand if you're a little late,” she replies quickly.",
        jumbled: ["will", "she", "Daniel,", "replies", "“Don't", "family", "a", "understand", "quickly.", "little", "late,”", "if", "stress,", "you're"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining an honest situation instead of making an uncertain promise.",
    mySentenceExample: "I explained the honest situation instead of an uncertain promise.",
  },
  {
    number: 5,
    title: "A Longer Wait",
    image: null,
    imageNote: "The departures board now showing an even later time, Daniel standing and looking at it with a frustrated but composed expression.",
    story:
      "An hour later, another announcement extends the delay further, and my stomach tightens as I glance up at the board. The new estimate now shows an additional ninety minutes, considerably longer than what was originally suggested earlier. Frustration builds inside me, though I remind myself that getting upset with the staff certainly wouldn't fix the mechanical issue itself. Instead, I walk over calmly and ask Ms. Kwan whether there are any alternative flights I could possibly be rebooked onto. “Let me check for you, Daniel, one moment,” she says, checking her system thoroughly and mentioning that one earlier connecting option might actually still be available.",
    questions: [
      { text: "What happens an hour later?", answer: "The delay is extended further." },
      { text: "How much longer does the new estimate add?", answer: "An additional ninety minutes." },
      { text: "What does Daniel ask Ms. Kwan?", answer: "Whether there are any alternative flights he could be rebooked onto." },
    ],
    trueFalse: [
      { text: "Another announcement extends the delay further.", answer: true },
      { text: "The new estimate adds an additional ninety minutes.", answer: true },
      { text: "Daniel decides getting upset with staff would fix the issue.", answer: false },
      { text: "Daniel asks about alternative flights he could be rebooked onto.", answer: true },
      { text: "Ms. Kwan says no other options exist at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "An hour later, another announcement extends the delay further, and my stomach tightens as I glance up at the board.",
        jumbled: ["and", "hour", "later,", "An", "the", "I", "the", "board.", "announcement", "at", "extends", "as", "further,", "another", "tightens", "my", "delay", "up", "stomach", "glance"],
      },
      {
        target: "The new estimate now shows an additional ninety minutes, considerably longer than what was originally suggested earlier.",
        jumbled: ["new", "estimate", "now", "longer", "than", "minutes,", "additional", "shows", "was", "an", "considerably", "what", "originally", "ninety", "suggested", "earlier.", "The"],
      },
      {
        target: "Frustration builds inside me, though I remind myself that getting upset with the staff certainly wouldn't fix the mechanical issue itself.",
        jumbled: ["itself.", "that", "the", "me,", "mechanical", "getting", "myself", "fix", "issue", "upset", "remind", "certainly", "though", "staff", "inside", "I", "wouldn't", "Frustration", "builds", "with", "the"],
      },
      {
        target: "Instead, I walk over calmly and ask Ms. Kwan whether there are any alternative flights I could possibly be rebooked onto.",
        jumbled: ["and", "over", "could", "flights", "are", "I", "walk", "Kwan", "I", "there", "ask", "Ms.", "be", "possibly", "rebooked", "onto.", "alternative", "any", "whether", "calmly", "Instead,"],
      },
      {
        target: "“Let me check for you, Daniel, one moment,” she says, checking her system thoroughly and mentioning that one earlier connecting option might actually still be available.",
        jumbled: ["might", "option", "mentioning", "available.", "“Let", "that", "she", "one", "and", "check", "her", "moment,”", "you,", "one", "thoroughly", "be", "earlier", "for", "checking", "connecting", "me", "Daniel,", "says,", "still", "actually", "system"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm even when frustrated by a longer wait.",
    mySentenceExample: "I stayed calm even though the longer wait frustrated me.",
  },
  {
    number: 6,
    title: "An Alternative Option",
    image: null,
    imageNote: "Ms. Kwan pointing at her screen, explaining a rebooking option to Daniel, who leans in to look carefully.",
    story:
      "Ms. Kwan explains that a flight leaving from a nearby gate departs sooner and could actually get me there in time. However, it would involve a layover, which means slightly more walking and one additional security check along the way. “If you're comfortable with that, Daniel, I could rebook you right now before the seats fill up,” she offers helpfully. Weighing my options quickly, I decide the layover route sounds considerably better than possibly missing tonight's dinner altogether. I thank her sincerely and agree to the change, relieved that a workable solution actually exists after all.",
    questions: [
      { text: "What does Ms. Kwan explain about the alternative flight?", answer: "That it departs sooner and could get him there in time." },
      { text: "What would the alternative flight involve?", answer: "A layover and an additional security check." },
      { text: "What does Daniel decide to do?", answer: "Accept the rebooking." },
    ],
    trueFalse: [
      { text: "The alternative flight departs from a nearby gate sooner.", answer: true },
      { text: "The alternative flight involves a layover.", answer: true },
      { text: "Daniel decides the layover route sounds better than missing dinner.", answer: true },
      { text: "Daniel refuses the rebooking offer immediately.", answer: false },
      { text: "Daniel feels relieved a workable solution exists.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Kwan explains that a flight leaving from a nearby gate departs sooner and could actually get me there in time.",
        jumbled: ["leaving", "nearby", "that", "flight", "time.", "Kwan", "explains", "actually", "there", "departs", "sooner", "a", "and", "Ms.", "me", "from", "a", "get", "gate", "could", "in"],
      },
      {
        target: "However, it would involve a layover, which means slightly more walking and one additional security check along the way.",
        jumbled: ["layover,", "along", "a", "check", "slightly", "security", "and", "involve", "more", "one", "would", "additional", "the", "way.", "which", "walking", "means", "However,", "it"],
      },
      {
        target: "“If you're comfortable with that, Daniel, I could rebook you right now before the seats fill up,” she offers helpfully.",
        jumbled: ["could", "comfortable", "that,", "before", "helpfully.", "now", "“If", "I", "you're", "rebook", "right", "you", "Daniel,", "offers", "up,”", "with", "fill", "she", "the", "seats"],
      },
      {
        target: "Weighing my options quickly, I decide the layover route sounds considerably better than possibly missing tonight's dinner altogether.",
        jumbled: ["than", "dinner", "the", "better", "possibly", "route", "altogether.", "decide", "Weighing", "tonight's", "layover", "missing", "options", "sounds", "quickly,", "considerably", "I", "my"],
      },
      {
        target: "I thank her sincerely and agree to the change, relieved that a workable solution actually exists after all.",
        jumbled: ["after", "change,", "sincerely", "relieved", "her", "thank", "that", "I", "to", "workable", "a", "all.", "the", "and", "actually", "solution", "exists", "agree"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about choosing a practical solution instead of waiting for a perfect one.",
    mySentenceExample: "I chose a practical solution instead of waiting for a perfect one.",
  },
  {
    number: 7,
    title: "Rushing to the Gate",
    image: null,
    imageNote: "Daniel walking quickly through the airport terminal, boarding pass in hand, glancing at signs overhead.",
    story:
      "With my new boarding pass printed, I hurry through the terminal, weaving carefully between other travelers along the way. The layover gate is farther than I expected, so I pick up my pace, watching the time remaining before boarding closes. Along the way, I pass through the additional security check quickly, thankful the line isn't as long as it could have been. Arriving at the gate slightly out of breath, I hear my name over the speaker, “Daniel, final boarding call,” which means I made it with time to spare. Settling into my seat moments later, I finally allow myself to relax just a little.",
    questions: [
      { text: "What does Daniel do once his new boarding pass is printed?", answer: "Hurries through the terminal." },
      { text: "What does Daniel pass through along the way?", answer: "An additional security check." },
      { text: "What does Daniel find when he arrives at the gate?", answer: "Boarding has just begun." },
    ],
    trueFalse: [
      { text: "Daniel hurries through the terminal with his new boarding pass.", answer: true },
      { text: "The layover gate turns out closer than expected.", answer: false },
      { text: "Daniel passes through an additional security check.", answer: true },
      { text: "Daniel finds boarding has just begun when he arrives.", answer: true },
      { text: "Daniel misses the flight despite rushing.", answer: false },
    ],
    buildSentence: [
      {
        target: "With my new boarding pass printed, I hurry through the terminal, weaving carefully between other travelers along the way.",
        jumbled: ["the", "With", "my", "I", "weaving", "pass", "printed,", "carefully", "through", "hurry", "way.", "boarding", "between", "new", "the", "along", "terminal,", "travelers", "other"],
      },
      {
        target: "The layover gate is farther than I expected, so I pick up my pace, watching the time remaining before boarding closes.",
        jumbled: ["remaining", "I", "farther", "is", "my", "boarding", "watching", "pick", "before", "than", "I", "up", "The", "gate", "so", "time", "pace,", "expected,", "closes.", "layover", "the"],
      },
      {
        target: "Along the way, I pass through the additional security check quickly, thankful the line isn't as long as it could have been.",
        jumbled: ["check", "could", "security", "been.", "quickly,", "the", "the", "thankful", "it", "additional", "through", "as", "isn't", "pass", "have", "way,", "Along", "long", "as", "I", "line", "the"],
      },
      {
        target: "Arriving at the gate slightly out of breath, I hear my name over the speaker, “Daniel, final boarding call,” which means I made it with time to spare.",
        jumbled: ["“Daniel,", "which", "hear", "name", "the", "with", "final", "spare.", "it", "to", "my", "Arriving", "means", "I", "call,”", "boarding", "the", "made", "slightly", "over", "I", "at", "breath,", "speaker,", "gate", "time", "out", "of"],
      },
      {
        target: "Settling into my seat moments later, I finally allow myself to relax just a little.",
        jumbled: ["into", "I", "relax", "to", "myself", "Settling", "my", "moments", "allow", "just", "finally", "a", "little.", "seat", "later,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rushing to make it somewhere just in time.",
    mySentenceExample: "I rushed to make it to the gate just in time.",
  },
  {
    number: 8,
    title: "A Quick Message",
    image: null,
    imageNote: "Daniel sitting in his airplane seat, phone in hand, typing a quick message before the flight departs.",
    story:
      "Before the plane doors close, I quickly text my sister, updating her on my new flight and revised arrival time. “Perfect timing, Daniel, see you soon!” she replies, saying the timing should now work out perfectly for the rehearsal dinner. I put my phone away as the flight attendants begin their final safety announcements before departure. Looking out the window, I feel a mix of exhaustion and relief after an unexpectedly stressful few hours at the airport. Whatever happens with the layover, at least I'm finally moving in the right direction now.",
    questions: [
      { text: "What does Daniel do before the plane doors close?", answer: "Texts his sister with his new flight and arrival time." },
      { text: "How does his sister respond to the update?", answer: "With relief, saying the timing should work out." },
      { text: "How does Daniel feel looking out the window?", answer: "A mix of exhaustion and relief." },
    ],
    trueFalse: [
      { text: "Daniel texts his sister before the plane doors close.", answer: true },
      { text: "His sister responds saying the timing should work out.", answer: true },
      { text: "Daniel feels only exhaustion and no relief at all.", answer: false },
      { text: "Flight attendants begin final safety announcements.", answer: true },
      { text: "Daniel feels he is finally moving in the right direction.", answer: true },
    ],
    buildSentence: [
      {
        target: "I quickly text my sister, updating her on my new flight and revised arrival time.",
        jumbled: ["new", "revised", "time.", "text", "my", "flight", "sister,", "arrival", "quickly", "my", "her", "I", "updating", "on", "and"],
      },
      {
        target: "“Perfect timing, Daniel, see you soon!” she replies, saying the timing should now work out perfectly for the rehearsal dinner.",
        jumbled: ["the", "see", "soon!”", "dinner.", "she", "should", "rehearsal", "timing", "the", "Daniel,", "now", "saying", "for", "replies,", "perfectly", "“Perfect", "timing,", "you", "work", "out"],
      },
      {
        target: "I put my phone away as the flight attendants begin their final safety announcements before departure.",
        jumbled: ["put", "as", "their", "away", "attendants", "flight", "safety", "departure.", "I", "phone", "begin", "my", "final", "announcements", "before", "the"],
      },
      {
        target: "Looking out the window, I feel a mix of exhaustion and relief after an unexpectedly stressful few hours at the airport.",
        jumbled: ["window,", "out", "and", "hours", "mix", "the", "unexpectedly", "a", "feel", "Looking", "of", "an", "at", "airport.", "after", "exhaustion", "few", "the", "I", "stressful", "relief"],
      },
      {
        target: "Whatever happens with the layover, at least I'm finally moving in the right direction now.",
        jumbled: ["layover,", "at", "in", "now.", "Whatever", "moving", "the", "I'm", "least", "right", "direction", "with", "the", "finally", "happens"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relief after a stressful situation finally starts improving.",
    mySentenceExample: "I felt relief after the stressful delay finally improved.",
  },
  {
    number: 9,
    title: "Arriving at the Dinner",
    image: null,
    imageNote: "Daniel walking into a warmly lit restaurant, still in travel clothes, being hugged by his sister at the entrance.",
    story:
      "After landing and a short taxi ride, I arrive at the restaurant just as the rehearsal dinner is getting underway. My sister spots me immediately, rushing over with a relieved hug, clearly happy I made it despite everything. “I can't believe you actually made it, Daniel! I was honestly a little worried,” she admits, laughing with relief. I explain the whole delay, rebooking, and rushing through the airport, and she just shakes her head, amused. Sitting down at the table finally, exhausted but present, I realize the stressful journey was completely worth it in the end.",
    questions: [
      { text: "When does Daniel arrive at the restaurant?", answer: "Just as the rehearsal dinner is getting underway." },
      { text: "How does his sister react when she sees him?", answer: "She rushes over with a relieved hug." },
      { text: "How does Daniel feel sitting down at the table?", answer: "Exhausted but present -- it was worth it." },
    ],
    trueFalse: [
      { text: "Daniel arrives just as the rehearsal dinner is getting underway.", answer: true },
      { text: "His sister rushes over with a relieved hug.", answer: true },
      { text: "His sister says she wasn't worried at all.", answer: false },
      { text: "Daniel explains the whole delay and rebooking story.", answer: true },
      { text: "Daniel feels the journey was completely worth it.", answer: true },
    ],
    buildSentence: [
      {
        target: "I arrive at the restaurant just as the rehearsal dinner is getting underway.",
        jumbled: ["the", "I", "arrive", "rehearsal", "restaurant", "at", "dinner", "is", "underway.", "the", "just", "as", "getting"],
      },
      {
        target: "My sister spots me immediately, rushing over with a relieved hug, clearly happy I made it despite everything.",
        jumbled: ["spots", "over", "with", "immediately,", "clearly", "happy", "made", "rushing", "My", "sister", "a", "I", "relieved", "hug,", "it", "me", "everything.", "despite"],
      },
      {
        target: "“I can't believe you actually made it, Daniel! I was honestly a little worried,” she admits, laughing with relief.",
        jumbled: ["“I", "was", "laughing", "believe", "made", "admits,", "a", "relief.", "you", "it,", "worried,”", "Daniel!", "can't", "little", "I", "she", "with", "honestly", "actually"],
      },
      {
        target: "I explain the whole delay, rebooking, and rushing through the airport, and she just shakes her head, amused.",
        jumbled: ["airport,", "shakes", "and", "the", "just", "she", "through", "the", "delay,", "head,", "and", "rebooking,", "amused.", "her", "explain", "rushing", "whole", "I"],
      },
      {
        target: "Sitting down at the table finally, exhausted but present, I realize the stressful journey was completely worth it in the end.",
        jumbled: ["Sitting", "but", "down", "the", "it", "the", "completely", "journey", "the", "realize", "was", "stressful", "I", "end.", "table", "worth", "at", "in", "present,", "finally,", "exhausted"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally arriving somewhere important after a stressful journey.",
    mySentenceExample: "I finally arrived at the dinner after a stressful journey.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Daniel sitting at the dinner table later that night, relaxed and smiling, looking back on the day with quiet satisfaction.",
    story:
      "Later that night, I save a quick note in my phone, “Daniel: always ask, don't assume,” and reflect on how differently the entire day could have gone without a bit of flexibility. If I had insisted on waiting for my original flight stubbornly, I might have genuinely missed tonight's dinner entirely. Instead, staying calm, asking clear questions, and accepting a reasonable alternative got me here in time after all. I've learned that travel disruptions, however stressful in the moment, usually have some workable solution if you look for one. In the end, what could have been a disappointing story became instead a memorable one worth telling for years.",
    questions: [
      { text: "What does Daniel reflect on later that night?", answer: "How differently things could have gone without flexibility." },
      { text: "What might have happened if he had insisted on waiting?", answer: "He might have missed the dinner entirely." },
      { text: "What has Daniel learned about travel disruptions?", answer: "That they usually have some workable solution if you look for one." },
    ],
    trueFalse: [
      { text: "Daniel reflects on the entire day later that night.", answer: true },
      { text: "Insisting on the original flight might have made him miss dinner.", answer: true },
      { text: "Daniel believes travel disruptions usually have no solution.", answer: false },
      { text: "Staying calm and asking questions got him there in time.", answer: true },
      { text: "Daniel feels this became a memorable story worth telling.", answer: true },
    ],
    buildSentence: [
      {
        target: "Later that night, I save a quick note in my phone, “Daniel: always ask, don't assume,” and reflect on how differently the entire day could have gone without a bit of flexibility.",
        jumbled: ["my", "could", "how", "I", "night,", "differently", "note", "bit", "ask,", "reflect", "don't", "day", "quick", "gone", "entire", "a", "and", "always", "phone,", "of", "without", "the", "assume,”", "in", "flexibility.", "on", "“Daniel:", "save", "have", "a", "Later", "that"],
      },
      {
        target: "I might have genuinely missed tonight's dinner entirely.",
        jumbled: ["dinner", "tonight's", "I", "genuinely", "entirely.", "have", "missed", "might"],
      },
      {
        target: "Instead, staying calm, asking clear questions, and accepting a reasonable alternative got me here in time after all.",
        jumbled: ["asking", "after", "reasonable", "clear", "in", "here", "calm,", "accepting", "Instead,", "alternative", "a", "questions,", "staying", "me", "time", "got", "and", "all."],
      },
      {
        target: "I've learned that travel disruptions, however stressful in the moment, usually have some workable solution if you look for one.",
        jumbled: ["have", "however", "I've", "moment,", "some", "you", "the", "for", "in", "travel", "one.", "stressful", "if", "workable", "usually", "solution", "learned", "look", "that", "disruptions,"],
      },
      {
        target: "In the end, what could have been a disappointing story became instead a memorable one worth telling for years.",
        jumbled: ["years.", "been", "what", "memorable", "In", "a", "instead", "could", "became", "have", "one", "telling", "worth", "story", "a", "the", "disappointing", "end,", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from handling a travel disruption calmly.",
    mySentenceExample: "I learned that staying flexible helps during travel disruptions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
