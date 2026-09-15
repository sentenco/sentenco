// B1 Adults digital storybook, Book 62: "A Billing Dispute"
// Static content -- no Supabase. Sixth book in the B1 Adults batch
// (57-64). Phone-call/customer-service scenario, matching the B1
// Adults spec's explicit "short phone calls / problem explanations"
// skill target and complaint-handling vocabulary. Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook62/cover.jpg";

export const STORYBOOK_TITLE = "A Billing Dispute";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Tobias sitting on his couch, phone to his ear, looking at a printed utility bill with a circled charge, one hand on his forehead.";

export const CHARACTERS = [
  { name: "Tobias", role: "The narrator, an adult reviewing his monthly bills", look: "Casual home clothes, reading glasses, stack of mail on the coffee table." },
  { name: "Renata", role: "A customer service representative at the utility company", look: "Speaks through a headset, friendly and methodical, clearly experienced." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Unusual Charge",
    image: null,
    imageNote: "Tobias sitting on his couch, sorting through mail, stopping to look closely at one bill with a furrowed brow.",
    story:
      "Sorting through this month's mail, I open the envelope addressed to Tobias, my utility bill, out of habit, expecting the usual, fairly predictable amount. Instead, the total is nearly double what I normally pay, which immediately catches my attention rather sharply. Scanning the itemized list, I notice an unfamiliar charge labeled simply as a “service adjustment fee.” I don't recall requesting any special service recently, so this label makes very little sense to me. Setting the bill aside for a moment, I decide I'll need to call and ask about this before simply paying it.",
    questions: [
      { text: "What does Tobias open out of habit?", answer: "His utility bill." },
      { text: "How does the total compare to what he normally pays?", answer: "Nearly double." },
      { text: "What does Tobias decide he needs to do?", answer: "Call and ask about it before paying." },
    ],
    trueFalse: [
      { text: "Tobias opens his utility bill out of habit.", answer: true },
      { text: "The total is nearly double what he normally pays.", answer: true },
      { text: "Tobias immediately recognizes the unfamiliar charge.", answer: false },
      { text: "The charge is labeled a 'service adjustment fee.'", answer: true },
      { text: "Tobias decides to call and ask about the charge.", answer: true },
    ],
    buildSentence: [
      {
        target: "Sorting through this month's mail, I open the envelope addressed to Tobias, my utility bill, out of habit, expecting the usual, fairly predictable amount.",
        jumbled: ["predictable", "fairly", "envelope", "I", "amount.", "usual,", "Sorting", "my", "expecting", "the", "bill,", "Tobias,", "month's", "open", "through", "mail,", "out", "this", "utility", "addressed", "to", "of", "habit,", "the"],
      },
      {
        target: "Instead, the total is nearly double what I normally pay, which immediately catches my attention rather sharply.",
        jumbled: ["is", "the", "double", "total", "pay,", "what", "Instead,", "rather", "I", "catches", "normally", "which", "my", "attention", "sharply.", "immediately", "nearly"],
      },
      {
        target: "Scanning the itemized list, I notice an unfamiliar charge labeled simply as a “service adjustment fee.”",
        jumbled: ["charge", "adjustment", "simply", "a", "notice", "labeled", "the", "as", "“service", "list,", "itemized", "fee.”", "I", "unfamiliar", "an", "Scanning"],
      },
      {
        target: "I don't recall requesting any special service recently, so this label makes very little sense to me.",
        jumbled: ["this", "service", "label", "makes", "me.", "I", "recently,", "little", "so", "sense", "very", "recall", "any", "special", "don't", "to", "requesting"],
      },
      {
        target: "Setting the bill aside for a moment, I decide I'll need to call and ask about this before simply paying it.",
        jumbled: ["moment,", "Setting", "a", "I'll", "it.", "for", "to", "this", "before", "aside", "about", "the", "paying", "and", "need", "bill", "I", "ask", "simply", "call", "decide"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something unusual on a bill.",
    mySentenceExample: "I noticed something unusual on my monthly bill.",
  },
  {
    number: 2,
    title: "Making the Call",
    image: null,
    imageNote: "Tobias sitting on the couch with the bill on his lap, phone to his ear, listening to a hold message.",
    story:
      "I find the customer service number printed at the bottom of the bill and dial it, expecting a fairly long wait. A recorded message thanks me for calling and explains that all representatives are currently busy helping other customers. I settle in, putting the call on speaker while I gather the bill and a pen for notes. After roughly ten minutes, a friendly voice finally answers, introducing herself as Renata from billing support. She asks for my name, and I tell her, “Tobias,” before explaining briefly that I'm calling about an unfamiliar charge on this month's statement.",
    questions: [
      { text: "Where does Tobias find the customer service number?", answer: "Printed at the bottom of the bill." },
      { text: "What does the recorded message explain?", answer: "That all representatives are busy." },
      { text: "Who answers the call?", answer: "Renata, from billing support." },
    ],
    trueFalse: [
      { text: "Tobias finds the number printed at the bottom of the bill.", answer: true },
      { text: "A recorded message says all representatives are busy.", answer: true },
      { text: "Tobias waits roughly ten minutes before someone answers.", answer: true },
      { text: "Renata introduces herself from billing support.", answer: true },
      { text: "Tobias hangs up before anyone answers.", answer: false },
    ],
    buildSentence: [
      {
        target: "I find the customer service number printed at the bottom of the bill and dial it, expecting a fairly long wait.",
        jumbled: ["printed", "number", "of", "the", "find", "the", "expecting", "dial", "the", "customer", "fairly", "bottom", "bill", "service", "at", "wait.", "it,", "long", "I", "a", "and"],
      },
      {
        target: "A recorded message thanks me for calling and explains that all representatives are currently busy helping other customers.",
        jumbled: ["all", "helping", "message", "that", "calling", "A", "customers.", "representatives", "explains", "busy", "are", "and", "me", "thanks", "currently", "recorded", "other", "for"],
      },
      {
        target: "I settle in, putting the call on speaker while I gather the bill and a pen for notes.",
        jumbled: ["on", "the", "pen", "gather", "in,", "speaker", "putting", "bill", "settle", "a", "I", "I", "while", "the", "and", "for", "call", "notes."],
      },
      {
        target: "A friendly voice finally answers, introducing herself as Renata from billing support.",
        jumbled: ["from", "finally", "A", "support.", "Renata", "billing", "introducing", "friendly", "herself", "as", "voice", "answers,"],
      },
      {
        target: "She asks for my name, and I tell her, “Tobias,” before explaining briefly that I'm calling about an unfamiliar charge on this month's statement.",
        jumbled: ["“Tobias,”", "that", "unfamiliar", "this", "tell", "her,", "I'm", "I", "She", "calling", "charge", "and", "before", "month's", "briefly", "name,", "my", "for", "explaining", "statement.", "on", "asks", "an", "about"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting on hold before speaking to customer service.",
    mySentenceExample: "I waited on hold before speaking to customer service.",
  },
  {
    number: 3,
    title: "Explaining the Problem",
    image: null,
    imageNote: "Tobias reading numbers off the bill to Renata over the phone, tracing his finger down the itemized list.",
    story:
      "Renata asks for my account number, then patiently waits while I read the unfamiliar charge and its exact amount aloud. “I see the charge you're referring to, Tobias. Let me look into what generated this on our end,” she says calmly. While she checks, I mention that I haven't requested any additional services or changes recently, as far as I remember. She thanks me for the clarification, explaining that this detail will help her narrow down what actually happened. I appreciate that she doesn't sound defensive, treating my concern instead as something reasonable worth properly investigating.",
    questions: [
      { text: "What does Renata ask Tobias for?", answer: "His account number." },
      { text: "What does Renata say she will do?", answer: "Look into what generated the charge." },
      { text: "What does Tobias mention while she checks?", answer: "That he hasn't requested any additional services recently." },
    ],
    trueFalse: [
      { text: "Renata asks for Tobias's account number.", answer: true },
      { text: "Renata says she'll look into what generated the charge.", answer: true },
      { text: "Tobias mentions he hasn't requested any additional services.", answer: true },
      { text: "Renata sounds defensive about Tobias's concern.", answer: false },
      { text: "Tobias refuses to explain the charge clearly.", answer: false },
    ],
    buildSentence: [
      {
        target: "Renata asks for my account number, then patiently waits while I read the unfamiliar charge and its exact amount aloud.",
        jumbled: ["the", "for", "asks", "Renata", "patiently", "its", "while", "amount", "aloud.", "charge", "I", "and", "unfamiliar", "account", "read", "then", "waits", "number,", "my", "exact"],
      },
      {
        target: "“I see the charge you're referring to, Tobias. Let me look into what generated this on our end,” she says calmly.",
        jumbled: ["into", "see", "on", "generated", "the", "you're", "me", "end,”", "Let", "charge", "this", "“I", "our", "what", "referring", "to,", "she", "Tobias.", "look", "calmly.", "says"],
      },
      {
        target: "I mention that I haven't requested any additional services or changes recently, as far as I remember.",
        jumbled: ["as", "mention", "far", "changes", "or", "I", "remember.", "services", "any", "as", "requested", "I", "recently,", "additional", "that", "haven't", "I"],
      },
      {
        target: "She thanks me for the clarification, explaining that this detail will help her narrow down what actually happened.",
        jumbled: ["clarification,", "She", "what", "me", "the", "will", "narrow", "this", "that", "happened.", "for", "down", "explaining", "detail", "thanks", "her", "actually", "help"],
      },
      {
        target: "I appreciate that she doesn't sound defensive, treating my concern instead as something reasonable worth properly investigating.",
        jumbled: ["instead", "investigating.", "defensive,", "sound", "something", "I", "concern", "appreciate", "as", "worth", "reasonable", "my", "she", "properly", "that", "doesn't", "treating"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a billing problem clearly on the phone.",
    mySentenceExample: "I explained the billing problem clearly on the phone.",
  },
  {
    number: 4,
    title: "Finding the Cause",
    image: null,
    imageNote: "Renata's side of the call, sitting at a headset desk, looking at her own computer screen while speaking.",
    story:
      "After a couple of minutes, Renata returns with an explanation, though it's honestly not quite what I expected to hear. Apparently, a technician had visited my address last month, and a routine equipment check was mistakenly billed as an extra service. “This shouldn't have been charged at all, Tobias, and I sincerely apologize for the confusion,” she explains directly. I ask whether this means the entire charge will simply be removed from my account completely. She confirms that yes, she can reverse it immediately, and my next bill will reflect the corrected amount.",
    questions: [
      { text: "What does Renata explain after checking?", answer: "That a technician's routine equipment check was mistakenly billed as an extra service." },
      { text: "What was mistakenly billed as an extra service?", answer: "A routine equipment check." },
      { text: "What does Renata confirm she can do?", answer: "Reverse the charge immediately." },
    ],
    trueFalse: [
      { text: "A technician had visited Tobias's address last month.", answer: true },
      { text: "A routine equipment check was mistakenly billed as extra service.", answer: true },
      { text: "Renata says the charge was correct after all.", answer: false },
      { text: "Renata confirms she can reverse the charge immediately.", answer: true },
      { text: "Tobias asks if the charge will simply be removed.", answer: true },
    ],
    buildSentence: [
      {
        target: "Renata returns with an explanation, though it's honestly not quite what I expected to hear.",
        jumbled: ["an", "to", "hear.", "it's", "what", "I", "explanation,", "honestly", "expected", "Renata", "with", "returns", "though", "quite", "not"],
      },
      {
        target: "Apparently, a technician had visited my address last month, and a routine equipment check was mistakenly billed as an extra service.",
        jumbled: ["service.", "routine", "visited", "address", "month,", "billed", "technician", "as", "a", "a", "had", "was", "my", "Apparently,", "extra", "last", "an", "mistakenly", "and", "equipment", "check"],
      },
      {
        target: "“This shouldn't have been charged at all, Tobias, and I sincerely apologize for the confusion,” she explains directly.",
        jumbled: ["she", "have", "explains", "charged", "been", "the", "shouldn't", "at", "all,", "confusion,”", "I", "Tobias,", "sincerely", "apologize", "and", "“This", "directly.", "for"],
      },
      {
        target: "I ask whether this means the entire charge will simply be removed from my account completely.",
        jumbled: ["ask", "from", "charge", "be", "entire", "this", "removed", "I", "will", "completely.", "my", "means", "the", "whether", "simply", "account"],
      },
      {
        target: "She confirms that yes, she can reverse it immediately, and my next bill will reflect the corrected amount.",
        jumbled: ["next", "she", "reflect", "and", "bill", "it", "the", "yes,", "She", "can", "will", "that", "immediately,", "corrected", "amount.", "confirms", "reverse", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding out the real cause of a billing mistake.",
    mySentenceExample: "I found out the real cause of the billing mistake.",
  },
  {
    number: 5,
    title: "Confirming the Details",
    image: null,
    imageNote: "Tobias writing down a confirmation number on a notepad while still holding the phone to his ear.",
    story:
      "Before ending the call, I ask Renata for a confirmation number, just in case I need proof this conversation actually happened. She provides one immediately, along with a brief written summary that she says will also be emailed to me shortly. “Is there anything else I can help clarify about your account today, Tobias?” she asks politely before we finish. I mention that everything else on the bill looks correct, so this was genuinely the only issue I had. She thanks me for calling in and confirms the correction should appear within one to two billing cycles.",
    questions: [
      { text: "What does Tobias ask Renata for before ending the call?", answer: "A confirmation number." },
      { text: "What does Renata say will also be emailed to him?", answer: "A brief written summary." },
      { text: "How long does Renata say the correction will take?", answer: "One to two billing cycles." },
    ],
    trueFalse: [
      { text: "Tobias asks Renata for a confirmation number.", answer: true },
      { text: "Renata says a written summary will be emailed to him.", answer: true },
      { text: "Tobias says other charges on the bill also looked wrong.", answer: false },
      { text: "Renata asks if there's anything else she can help clarify.", answer: true },
      { text: "The correction should appear within one to two billing cycles.", answer: true },
    ],
    buildSentence: [
      {
        target: "I ask Renata for a confirmation number, just in case I need proof this conversation actually happened.",
        jumbled: ["this", "conversation", "I", "in", "proof", "I", "a", "actually", "ask", "for", "Renata", "need", "number,", "happened.", "just", "case", "confirmation"],
      },
      {
        target: "She provides one immediately, along with a brief written summary that she says will also be emailed to me shortly.",
        jumbled: ["summary", "me", "She", "along", "one", "with", "also", "says", "will", "written", "immediately,", "be", "provides", "shortly.", "she", "emailed", "a", "brief", "to", "that"],
      },
      {
        target: "“Is there anything else I can help clarify about your account today, Tobias?” she asks politely before we finish.",
        jumbled: ["“Is", "finish.", "today,", "there", "I", "clarify", "asks", "account", "we", "before", "she", "can", "anything", "help", "about", "else", "Tobias?”", "your", "politely"],
      },
      {
        target: "I mention that everything else on the bill looks correct, so this was genuinely the only issue I had.",
        jumbled: ["issue", "had.", "I", "so", "only", "genuinely", "correct,", "on", "I", "the", "the", "mention", "looks", "that", "else", "bill", "everything", "was", "this"],
      },
      {
        target: "She thanks me for calling in and confirms the correction should appear within one to two billing cycles.",
        jumbled: ["in", "and", "thanks", "confirms", "correction", "billing", "calling", "to", "cycles.", "the", "should", "within", "one", "for", "two", "me", "She", "appear"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking for confirmation before ending an important phone call.",
    mySentenceExample: "I asked for confirmation before ending the important call.",
  },
  {
    number: 6,
    title: "A Written Follow-Up",
    image: null,
    imageNote: "Tobias checking his email on his laptop, reading a confirmation message from the utility company.",
    story:
      "Later that evening, exactly as promised, an email arrives, opening simply with “Dear Tobias,” confirming everything Renata explained during our phone call. The message includes the confirmation number, a brief explanation of the error, and the corrected amount going forward. I appreciate having this in writing, especially in case any question comes up again regarding this specific charge later. I forward the email to myself with a clear subject line, filing it carefully alongside my other important documents. Having everything documented properly gives me a sense of security I honestly hadn't expected from a simple phone call.",
    questions: [
      { text: "What arrives later that evening?", answer: "An email confirming everything Renata explained." },
      { text: "What does the email include?", answer: "The confirmation number, explanation, and corrected amount." },
      { text: "What does Tobias do with the email?", answer: "Forwards it to himself and files it." },
    ],
    trueFalse: [
      { text: "An email arrives confirming everything Renata explained.", answer: true },
      { text: "The email includes the confirmation number and explanation.", answer: true },
      { text: "Tobias deletes the email without reading it.", answer: false },
      { text: "Tobias files the email carefully with other documents.", answer: true },
      { text: "Tobias feels no security from having this documented.", answer: false },
    ],
    buildSentence: [
      {
        target: "Later that evening, exactly as promised, an email arrives, opening simply with “Dear Tobias,” confirming everything Renata explained during our phone call.",
        jumbled: ["evening,", "as", "explained", "Tobias,”", "opening", "call.", "“Dear", "during", "arrives,", "everything", "simply", "our", "confirming", "email", "Later", "promised,", "Renata", "exactly", "that", "phone", "an", "with"],
      },
      {
        target: "The message includes the confirmation number, a brief explanation of the error, and the corrected amount going forward.",
        jumbled: ["includes", "number,", "corrected", "message", "the", "and", "the", "the", "going", "error,", "confirmation", "The", "of", "forward.", "a", "explanation", "amount", "brief"],
      },
      {
        target: "I appreciate having this in writing, especially in case any question comes up again regarding this specific charge later.",
        jumbled: ["this", "comes", "I", "this", "specific", "in", "charge", "case", "again", "question", "later.", "appreciate", "any", "regarding", "writing,", "in", "up", "especially", "having"],
      },
      {
        target: "I forward the email to myself with a clear subject line, filing it carefully alongside my other important documents.",
        jumbled: ["clear", "line,", "a", "documents.", "my", "it", "alongside", "with", "subject", "carefully", "filing", "myself", "forward", "I", "to", "email", "other", "the", "important"],
      },
      {
        target: "Having everything documented properly gives me a sense of security I honestly hadn't expected from a simple phone call.",
        jumbled: ["expected", "a", "simple", "hadn't", "security", "Having", "everything", "I", "of", "honestly", "documented", "phone", "a", "from", "me", "call.", "gives", "sense", "properly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about keeping written proof of something important.",
    mySentenceExample: "I kept written proof of the important phone call.",
  },
  {
    number: 7,
    title: "Checking the Next Bill",
    image: null,
    imageNote: "Tobias opening his mailbox a month later, pulling out a new bill and opening it right there on the porch.",
    story:
      "A month later, my next bill arrives, and I open it immediately, curious whether the correction was actually applied properly. Scanning the total, I feel relief seeing it matches what I would normally expect to pay each month. The itemized section confirms the service adjustment fee has been completely removed, my account name, Tobias, printed clearly beside the total, exactly as Renata had promised. There's also a small note referencing the confirmation number, which reassures me this wasn't simply forgotten or overlooked somehow. Seeing everything corrected properly makes the entire earlier hassle feel considerably less frustrating in hindsight.",
    questions: [
      { text: "What does Tobias do when his next bill arrives?", answer: "Opens it immediately to check the correction." },
      { text: "What does Tobias feel seeing the total?", answer: "Relief." },
      { text: "What does the itemized section confirm?", answer: "That the service adjustment fee has been removed." },
    ],
    trueFalse: [
      { text: "Tobias opens his next bill immediately, curious about the correction.", answer: true },
      { text: "The total matches what he would normally expect to pay.", answer: true },
      { text: "The service adjustment fee has been completely removed.", answer: true },
      { text: "There is no reference to the confirmation number at all.", answer: false },
      { text: "Tobias feels the earlier hassle was completely pointless.", answer: false },
    ],
    buildSentence: [
      {
        target: "A month later, my next bill arrives, and I open it immediately, curious whether the correction was actually applied properly.",
        jumbled: ["open", "next", "month", "later,", "applied", "actually", "A", "was", "the", "curious", "and", "properly.", "it", "I", "immediately,", "arrives,", "correction", "my", "whether", "bill"],
      },
      {
        target: "Scanning the total, I feel relief seeing it matches what I would normally expect to pay each month.",
        jumbled: ["to", "expect", "month.", "I", "pay", "seeing", "each", "the", "feel", "relief", "normally", "matches", "would", "what", "Scanning", "total,", "it", "I"],
      },
      {
        target: "The itemized section confirms the service adjustment fee has been completely removed, my account name, Tobias, printed clearly beside the total, exactly as Renata had promised.",
        jumbled: ["been", "adjustment", "promised.", "removed,", "fee", "itemized", "my", "completely", "account", "clearly", "exactly", "has", "beside", "as", "had", "name,", "total,", "Tobias,", "The", "printed", "confirms", "the", "section", "the", "Renata", "service"],
      },
      {
        target: "There's also a small note referencing the confirmation number, which reassures me this wasn't simply forgotten or overlooked somehow.",
        jumbled: ["also", "this", "a", "wasn't", "number,", "small", "referencing", "There's", "overlooked", "reassures", "confirmation", "which", "me", "the", "forgotten", "or", "somehow.", "simply", "note"],
      },
      {
        target: "Seeing everything corrected properly makes the entire earlier hassle feel considerably less frustrating in hindsight.",
        jumbled: ["considerably", "feel", "earlier", "the", "entire", "properly", "everything", "frustrating", "Seeing", "in", "less", "corrected", "makes", "hassle", "hindsight."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about checking that a promised correction actually happened.",
    mySentenceExample: "I checked that the promised correction actually happened.",
  },
  {
    number: 8,
    title: "Mentioning It to a Friend",
    image: null,
    imageNote: "Tobias chatting with a friend at a casual dinner table, gesturing while telling the story of the billing dispute.",
    story:
      "Over dinner with a friend, I mention the whole billing situation, partly amused now that it's fully resolved. She admits she usually just pays whatever a bill says, rarely questioning charges even when something looks slightly off. I explain that, in my experience, companies generally want to fix genuine mistakes once they're clearly pointed out. On the other hand, staying silent usually just means quietly overpaying for something that was never actually correct. “Well, Tobias, at least you got your money back,” she laughs, saying she'll probably start double-checking her own bills a little more carefully from now on.",
    questions: [
      { text: "Who does Tobias mention the situation to?", answer: "A friend, over dinner." },
      { text: "What does the friend admit about her own habits?", answer: "That she usually just pays whatever the bill says." },
      { text: "What does Tobias explain about companies?", answer: "That they generally want to fix genuine mistakes once pointed out." },
    ],
    trueFalse: [
      { text: "Tobias mentions the situation to a friend over dinner.", answer: true },
      { text: "The friend admits she usually pays whatever a bill says.", answer: true },
      { text: "Tobias explains companies generally want to fix genuine mistakes.", answer: true },
      { text: "The friend says she'll never check her bills again.", answer: false },
      { text: "Staying silent usually means quietly overpaying, Tobias explains.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over dinner with a friend, I mention the whole billing situation, partly amused now that it's fully resolved.",
        jumbled: ["it's", "partly", "mention", "dinner", "a", "amused", "I", "resolved.", "whole", "fully", "now", "billing", "situation,", "the", "Over", "with", "that", "friend,"],
      },
      {
        target: "She admits she usually just pays whatever a bill says, rarely questioning charges even when something looks slightly off.",
        jumbled: ["she", "a", "says,", "whatever", "something", "usually", "slightly", "She", "even", "off.", "charges", "just", "pays", "rarely", "looks", "questioning", "bill", "when", "admits"],
      },
      {
        target: "I explain that, in my experience, companies generally want to fix genuine mistakes once they're clearly pointed out.",
        jumbled: ["genuine", "out.", "in", "they're", "clearly", "once", "pointed", "explain", "generally", "mistakes", "my", "that,", "I", "fix", "experience,", "want", "to", "companies"],
      },
      {
        target: "On the other hand, staying silent usually just means quietly overpaying for something that was never actually correct.",
        jumbled: ["the", "quietly", "that", "never", "for", "means", "was", "other", "something", "correct.", "staying", "just", "silent", "On", "hand,", "overpaying", "actually", "usually"],
      },
      {
        target: "“Well, Tobias, at least you got your money back,” she laughs, saying she'll probably start double-checking her own bills a little more carefully from now on.",
        jumbled: ["more", "bills", "least", "got", "probably", "own", "money", "start", "her", "back,”", "“Well,", "at", "a", "she", "now", "little", "double-checking", "carefully", "you", "your", "laughs,", "Tobias,", "saying", "from", "she'll", "on."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging someone to question a bill that looks wrong.",
    mySentenceExample: "I encouraged my friend to question bills that look wrong.",
  },
  {
    number: 9,
    title: "A Habit Worth Keeping",
    image: null,
    imageNote: "Tobias sitting at his kitchen table with a small folder labeled 'Bills,' organizing recent statements.",
    story:
      "Since this experience, I've started a small habit of reviewing every bill line by line before simply setting it aside. It takes only a couple of extra minutes each month, though it genuinely gives me more confidence about my finances overall. I've created a simple folder, labeled “Tobias — Bills,” where I keep confirmation numbers and emails, just in case something similar happens again. Although most months nothing unusual ever appears, having the habit itself feels reassuring rather than tedious or unnecessary. This small routine, born from one frustrating phone call, has quietly become something I genuinely value now.",
    questions: [
      { text: "What habit has Tobias started since this experience?", answer: "Reviewing every bill line by line." },
      { text: "How long does this habit take each month?", answer: "A couple of extra minutes." },
      { text: "What has Tobias created to keep records?", answer: "A simple folder for confirmation numbers and emails." },
    ],
    trueFalse: [
      { text: "Tobias has started reviewing every bill line by line.", answer: true },
      { text: "This habit takes only a couple of extra minutes.", answer: true },
      { text: "Tobias created a folder for confirmation numbers and emails.", answer: true },
      { text: "Tobias finds this habit tedious and unnecessary.", answer: false },
      { text: "Tobias now genuinely values this small routine.", answer: true },
    ],
    buildSentence: [
      {
        target: "I've started a small habit of reviewing every bill line by line before simply setting it aside.",
        jumbled: ["a", "by", "I've", "aside.", "line", "bill", "small", "it", "started", "every", "reviewing", "of", "line", "before", "habit", "setting", "simply"],
      },
      {
        target: "It takes only a couple of extra minutes each month, though it genuinely gives me more confidence about my finances overall.",
        jumbled: ["takes", "extra", "though", "more", "It", "about", "each", "gives", "of", "my", "overall.", "finances", "minutes", "genuinely", "only", "confidence", "couple", "month,", "it", "me", "a"],
      },
      {
        target: "I've created a simple folder, labeled “Tobias — Bills,” where I keep confirmation numbers and emails, just in case something similar happens again.",
        jumbled: ["Bills,”", "labeled", "“Tobias", "where", "folder,", "case", "I've", "I", "simple", "again.", "—", "similar", "numbers", "emails,", "in", "just", "happens", "keep", "confirmation", "created", "something", "a", "and"],
      },
      {
        target: "Having the habit itself feels reassuring rather than tedious or unnecessary.",
        jumbled: ["reassuring", "feels", "or", "than", "Having", "rather", "the", "tedious", "itself", "unnecessary.", "habit"],
      },
      {
        target: "This small routine, born from one frustrating phone call, has quietly become something I genuinely value now.",
        jumbled: ["has", "phone", "something", "small", "from", "call,", "I", "become", "routine,", "frustrating", "This", "quietly", "value", "now.", "born", "genuinely", "one"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small habit that gives you more confidence about your finances.",
    mySentenceExample: "Checking my bills gives me more confidence about my finances.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Tobias sitting comfortably on his couch, calmly reviewing a bill, relaxed and unbothered this time.",
    story:
      "Looking back on the entire situation, I add one more note inside the folder, “Tobias: always ask,” and realize how easily I could have simply paid the incorrect charge without questioning it at all. If I had assumed the bill was automatically correct, I would have quietly overpaid for a mistake that wasn't even mine. Instead, staying curious and calling to ask calmly allowed Renata to actually investigate and fix the real problem. I've learned that questioning an unfamiliar charge politely is always worth the extra ten minutes it takes. In the end, this small dispute taught me something genuinely useful about paying closer attention to my own finances.",
    questions: [
      { text: "What does Tobias realize looking back on this situation?", answer: "How easily he could have just paid the incorrect charge." },
      { text: "What might have happened if he had assumed the bill was correct?", answer: "He would have quietly overpaid." },
      { text: "What has Tobias learned about questioning unfamiliar charges?", answer: "That it's always worth the extra ten minutes." },
    ],
    trueFalse: [
      { text: "Tobias realizes he could have simply paid the wrong charge.", answer: true },
      { text: "Assuming the bill was correct would have meant overpaying.", answer: true },
      { text: "Tobias believes questioning a charge politely is worth the time.", answer: true },
      { text: "Tobias feels he learned nothing useful from this dispute.", answer: false },
      { text: "Staying curious allowed Renata to fix the real problem.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire situation, I add one more note inside the folder, “Tobias: always ask,” and realize how easily I could have simply paid the incorrect charge without questioning it at all.",
        jumbled: ["charge", "back", "without", "I", "the", "“Tobias:", "and", "it", "more", "folder,", "entire", "easily", "how", "have", "note", "the", "could", "always", "questioning", "all.", "ask,”", "paid", "incorrect", "situation,", "I", "on", "Looking", "add", "the", "at", "simply", "inside", "one", "realize"],
      },
      {
        target: "I would have quietly overpaid for a mistake that wasn't even mine.",
        jumbled: ["a", "even", "I", "that", "mine.", "mistake", "wasn't", "have", "would", "quietly", "overpaid", "for"],
      },
      {
        target: "Instead, staying curious and calling to ask calmly allowed Renata to actually investigate and fix the real problem.",
        jumbled: ["Renata", "fix", "to", "calling", "curious", "staying", "allowed", "problem.", "the", "Instead,", "calmly", "investigate", "ask", "actually", "to", "and", "real", "and"],
      },
      {
        target: "I've learned that questioning an unfamiliar charge politely is always worth the extra ten minutes it takes.",
        jumbled: ["is", "the", "worth", "ten", "an", "minutes", "that", "always", "takes.", "I've", "extra", "unfamiliar", "charge", "politely", "learned", "it", "questioning"],
      },
      {
        target: "In the end, this small dispute taught me something genuinely useful about paying closer attention to my own finances.",
        jumbled: ["genuinely", "finances.", "dispute", "my", "the", "useful", "small", "taught", "about", "to", "own", "something", "paying", "this", "closer", "In", "end,", "me", "attention"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from questioning a mistake on a bill.",
    mySentenceExample: "I learned that questioning bill mistakes politely usually pays off.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
