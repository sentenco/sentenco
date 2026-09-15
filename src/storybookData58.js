// B1 Adults digital storybook, Book 58: "A Problem with My Paycheck"
// Static content -- no Supabase. Second book in the B1 Adults batch
// (57-64). Calibrated to the sourced B1 Adults spec: workplace
// incident requiring problem-solving, modals for politeness, relative
// clauses and linking devices, specialized payroll/HR vocabulary and
// multi-word verbs (look into, sort out, follow up). Adults-track
// shape: 3 questions, 5 True/False, 5 Build-a-Sentence per chapter,
// shortest-to-longest. Chapter images not generated yet -- image left
// null per chapter so StoryBook.jsx's ImagePlaceholder fallback renders.
import coverImg from "./assets/storybook58/cover.jpg";

export const STORYBOOK_TITLE = "A Problem with My Paycheck";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Marcus sitting at his kitchen table, laptop open showing a payslip, one hand on his forehead, looking concerned.";

export const CHARACTERS = [
  { name: "Marcus", role: "The narrator, an adult office worker", look: "Casual work clothes, glasses, laptop always nearby." },
  { name: "Ms. Alvarez", role: "The company's HR and payroll coordinator", look: "Organized, patient, speaks in a reassuring but professional tone." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Checking My Payslip",
    image: null,
    imageNote: "Marcus at his kitchen table late in the evening, staring at his laptop screen with a confused expression.",
    story:
      "On Friday evening, I sit down to review my monthly budget, which usually starts with a quick glance at my payslip, my name, Marcus, printed at the top as always. Something looks off immediately, though it takes me a moment to figure out exactly what. Comparing this month's number with last month's, I notice my pay is considerably lower than it should be. At first, I assume I'm simply misreading something, so I check the numbers twice more, carefully. Unfortunately, the difference is real, and now I have to figure out what actually happened and who I should contact about it.",
    questions: [
      { text: "What does Marcus usually start his budget review with?", answer: "A glance at his payslip." },
      { text: "What does Marcus notice about this month's pay?", answer: "It's considerably lower than it should be." },
      { text: "What does Marcus do after noticing the difference?", answer: "Checks the numbers twice more." },
    ],
    trueFalse: [
      { text: "Marcus reviews his budget on Friday evening.", answer: true },
      { text: "Marcus notices his pay is considerably lower than usual.", answer: true },
      { text: "Marcus assumes nothing is wrong at first.", answer: false },
      { text: "Marcus checks the numbers only once.", answer: false },
      { text: "The difference in pay turns out to be real.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Friday evening, I sit down to review my monthly budget, which usually starts with a quick glance at my payslip, my name, Marcus, printed at the top as always.",
        jumbled: ["with", "at", "Friday", "budget,", "review", "payslip,", "printed", "my", "top", "at", "sit", "down", "evening,", "monthly", "the", "my", "On", "Marcus,", "name,", "to", "I", "which", "starts", "always.", "usually", "quick", "my", "a", "glance", "as"],
      },
      {
        target: "Something looks off immediately, though it takes me a moment to figure out exactly what.",
        jumbled: ["what.", "Something", "it", "figure", "looks", "exactly", "takes", "moment", "to", "though", "me", "out", "a", "immediately,", "off"],
      },
      {
        target: "Comparing this month's number with last month's, I notice my pay is considerably lower than it should be.",
        jumbled: ["this", "I", "notice", "number", "be.", "my", "considerably", "lower", "month's,", "with", "Comparing", "than", "month's", "should", "pay", "it", "last", "is"],
      },
      {
        target: "At first, I assume I'm simply misreading something, so I check the numbers twice more, carefully.",
        jumbled: ["numbers", "carefully.", "misreading", "I", "I", "twice", "At", "so", "assume", "check", "something,", "more,", "simply", "the", "first,", "I'm"],
      },
      {
        target: "Unfortunately, the difference is real, and now I have to figure out what actually happened and who I should contact about it.",
        jumbled: ["figure", "it.", "I", "real,", "have", "Unfortunately,", "what", "and", "out", "and", "contact", "the", "who", "should", "happened", "actually", "now", "about", "is", "to", "I", "difference"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something wrong with a bill or payment.",
    mySentenceExample: "I noticed something wrong with my payment last week.",
  },
  {
    number: 2,
    title: "Looking Into It",
    image: null,
    imageNote: "Marcus scrolling through his email inbox, comparing two payslip PDFs side by side on his laptop screen.",
    story:
      "Before contacting anyone, I decide to look into this myself first, opening the two PDFs, both still named “Marcus_Payslip,” and comparing them line by line. I find that my usual monthly bonus, which normally appears automatically, is completely missing from this particular payslip. This has never happened before in my three years at the company, which makes the situation slightly more concerning. I wonder whether this was simply a one-time mistake or possibly a sign of a larger, ongoing problem. Either way, I know I'll need to follow up with someone in payroll first thing on Monday morning.",
    questions: [
      { text: "What does Marcus do before contacting anyone?", answer: "Looks into it himself, comparing payslips line by line." },
      { text: "What does Marcus find missing from his payslip?", answer: "His usual monthly bonus." },
      { text: "How long has Marcus worked at the company?", answer: "Three years." },
    ],
    trueFalse: [
      { text: "Marcus compares both payslips line by line.", answer: true },
      { text: "Marcus finds his usual monthly bonus is missing.", answer: true },
      { text: "This has happened many times before.", answer: false },
      { text: "Marcus has worked at the company for three years.", answer: true },
      { text: "Marcus decides to ignore the problem completely.", answer: false },
    ],
    buildSentence: [
      {
        target: "I decide to look into this myself first, opening the two PDFs, both still named “Marcus_Payslip,” and comparing them line by line.",
        jumbled: ["comparing", "look", "by", "opening", "this", "named", "decide", "the", "I", "them", "myself", "line.", "first,", "both", "line", "PDFs,", "into", "two", "and", "still", "to", "“Marcus_Payslip,”"],
      },
      {
        target: "I find that my usual monthly bonus, which normally appears automatically, is completely missing from this particular payslip.",
        jumbled: ["completely", "payslip.", "is", "find", "appears", "bonus,", "monthly", "I", "usual", "normally", "automatically,", "this", "particular", "that", "from", "missing", "my", "which"],
      },
      {
        target: "This has never happened before in my three years at the company, which makes the situation slightly more concerning.",
        jumbled: ["the", "has", "at", "company,", "before", "happened", "This", "my", "which", "in", "slightly", "years", "makes", "the", "three", "concerning.", "more", "never", "situation"],
      },
      {
        target: "I wonder whether this was simply a one-time mistake or possibly a sign of a larger, ongoing problem.",
        jumbled: ["ongoing", "this", "whether", "was", "I", "simply", "sign", "a", "one-time", "of", "or", "a", "problem.", "mistake", "larger,", "possibly", "wonder", "a"],
      },
      {
        target: "Either way, I know I'll need to follow up with someone in payroll first thing on Monday morning.",
        jumbled: ["someone", "first", "follow", "I", "with", "Either", "in", "know", "to", "I'll", "on", "payroll", "thing", "up", "way,", "morning.", "Monday", "need"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about investigating a problem yourself before asking for help.",
    mySentenceExample: "I investigated the problem myself before asking for help.",
  },
  {
    number: 3,
    title: "Contacting HR",
    image: null,
    imageNote: "Marcus sitting at his office desk on Monday morning, typing a polite email to HR, coffee cup beside his keyboard.",
    story:
      "On Monday morning, I write a polite but clear email to Ms. Alvarez in HR, explaining exactly what I noticed. I attach both payslips, highlighting the missing bonus amount so she can see the difference immediately. In my message, I ask whether this could be looked into as soon as possible, since it affects my monthly budget directly. I try to keep my tone professional and calm, even though I'm honestly a little frustrated underneath. Within an hour, I receive a reply. “Thanks for flagging this, Marcus, I'll check the payroll system and get back to you by the end of the day,” she writes.",
    questions: [
      { text: "Who does Marcus write an email to?", answer: "Ms. Alvarez in HR." },
      { text: "What does Marcus attach to the email?", answer: "Both payslips, highlighting the missing bonus." },
      { text: "How quickly does Marcus receive a reply?", answer: "Within an hour." },
    ],
    trueFalse: [
      { text: "Marcus writes a polite but clear email to Ms. Alvarez.", answer: true },
      { text: "Marcus attaches both payslips to the email.", answer: true },
      { text: "Marcus writes the email in an angry tone.", answer: false },
      { text: "Marcus receives a reply within an hour.", answer: true },
      { text: "Ms. Alvarez says she will check the payroll system.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Monday morning, I write a polite but clear email to Ms. Alvarez in HR, explaining exactly what I noticed.",
        jumbled: ["Ms.", "in", "exactly", "morning,", "clear", "a", "I", "On", "what", "write", "HR,", "Alvarez", "Monday", "explaining", "noticed.", "polite", "I", "to", "but", "email"],
      },
      {
        target: "I attach both payslips, highlighting the missing bonus amount so she can see the difference immediately.",
        jumbled: ["the", "attach", "the", "payslips,", "missing", "she", "amount", "I", "difference", "both", "highlighting", "see", "bonus", "can", "so", "immediately."],
      },
      {
        target: "In my message, I ask whether this could be looked into as soon as possible, since it affects my monthly budget directly.",
        jumbled: ["budget", "as", "directly.", "I", "since", "my", "as", "my", "be", "into", "this", "ask", "In", "monthly", "could", "soon", "affects", "it", "possible,", "looked", "message,", "whether"],
      },
      {
        target: "I try to keep my tone professional and calm, even though I'm honestly a little frustrated underneath.",
        jumbled: ["little", "my", "keep", "underneath.", "a", "even", "I'm", "honestly", "though", "try", "tone", "calm,", "I", "frustrated", "and", "to", "professional"],
      },
      {
        target: "“Thanks for flagging this, Marcus, I'll check the payroll system and get back to you by the end of the day,” she writes.",
        jumbled: ["of", "system", "she", "the", "“Thanks", "payroll", "by", "get", "day,”", "this,", "writes.", "the", "Marcus,", "and", "flagging", "I'll", "you", "end", "for", "to", "back", "check", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a professional email to solve a problem.",
    mySentenceExample: "I wrote a professional email to solve the billing problem.",
  },
  {
    number: 4,
    title: "Waiting for an Answer",
    image: null,
    imageNote: "Marcus at his desk trying to focus on other work, occasionally glancing at his phone for a notification.",
    story:
      "The rest of the workday passes slowly, since part of my mind keeps wondering what Ms. Alvarez will eventually find. I try to focus on my regular tasks, though I check my email more often than I probably should. Around four in the afternoon, a message finally arrives, and my heart skips slightly as I open it. “Hi Marcus, I found the issue,” it begins. She explains that there was, in fact, a system error affecting several employees' bonuses this month, not just mine. Although knowing it wasn't personal makes me feel somewhat better, I'm still curious exactly when this will be corrected.",
    questions: [
      { text: "How does Marcus feel during the workday?", answer: "Distracted, checking his email often." },
      { text: "When does a message finally arrive?", answer: "Around four in the afternoon." },
      { text: "What does Ms. Alvarez explain caused the error?", answer: "A system error affecting several employees' bonuses." },
    ],
    trueFalse: [
      { text: "The workday passes slowly for Marcus.", answer: true },
      { text: "A message arrives around four in the afternoon.", answer: true },
      { text: "The error only affected Marcus's paycheck.", answer: false },
      { text: "Ms. Alvarez explains it was a system error.", answer: true },
      { text: "Marcus feels no curiosity about when this will be fixed.", answer: false },
    ],
    buildSentence: [
      {
        target: "The rest of the workday passes slowly, since part of my mind keeps wondering what Ms. Alvarez will eventually find.",
        jumbled: ["eventually", "of", "keeps", "Alvarez", "find.", "will", "my", "passes", "the", "workday", "part", "Ms.", "since", "mind", "what", "rest", "slowly,", "The", "wondering", "of"],
      },
      {
        target: "I try to focus on my regular tasks, though I check my email more often than I probably should.",
        jumbled: ["to", "I", "than", "regular", "more", "try", "I", "should.", "focus", "on", "often", "probably", "my", "tasks,", "email", "I", "check", "my", "though"],
      },
      {
        target: "Around four in the afternoon, a message finally arrives, and my heart skips slightly as I open it.",
        jumbled: ["and", "afternoon,", "a", "message", "heart", "in", "the", "slightly", "skips", "it.", "as", "I", "Around", "four", "arrives,", "my", "finally", "open"],
      },
      {
        target: "“Hi Marcus, I found the issue,” it begins.",
        jumbled: ["“Hi", "issue,”", "begins.", "Marcus,", "I", "it", "found", "the"],
      },
      {
        target: "She explains that there was, in fact, a system error affecting several employees' bonuses this month, not just mine.",
        jumbled: ["fact,", "a", "affecting", "this", "there", "was,", "month,", "just", "She", "system", "several", "explains", "in", "that", "mine.", "bonuses", "not", "employees'", "error"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting anxiously for an answer to a problem.",
    mySentenceExample: "I waited anxiously for an answer to my complaint.",
  },
  {
    number: 5,
    title: "A Clear Explanation",
    image: null,
    imageNote: "Marcus on a video call with Ms. Alvarez, both looking at shared screens showing payroll spreadsheets.",
    story:
      "Ms. Alvarez suggests a short video call so she can walk me through exactly what went wrong, step by step. During the call, she shares her screen, showing a spreadsheet where a formula had apparently calculated bonuses incorrectly for a specific group. “This should have been caught earlier, Marcus, and I sincerely apologize for the stress this caused you,” she says honestly. I appreciate her transparency, especially since she could have simply given a vague, generic answer instead. She explains that the finance team is already working on a fix, which should be resolved within the next two business days.",
    questions: [
      { text: "What does Ms. Alvarez suggest?", answer: "A short video call to walk through what went wrong." },
      { text: "What does the spreadsheet show went wrong?", answer: "A formula had calculated bonuses incorrectly for a specific group." },
      { text: "How long will the fix take, according to Ms. Alvarez?", answer: "Within the next two business days." },
    ],
    trueFalse: [
      { text: "Ms. Alvarez suggests a short video call.", answer: true },
      { text: "A formula had calculated bonuses incorrectly for a group.", answer: true },
      { text: "Ms. Alvarez gives a vague, generic answer.", answer: false },
      { text: "Marcus appreciates her transparency about the issue.", answer: true },
      { text: "The fix should be resolved within two business days.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Alvarez suggests a short video call so she can walk me through exactly what went wrong, step by step.",
        jumbled: ["video", "Ms.", "what", "Alvarez", "walk", "wrong,", "me", "a", "call", "by", "can", "through", "went", "exactly", "step.", "step", "short", "so", "she", "suggests"],
      },
      {
        target: "During the call, she shares her screen, showing a spreadsheet where a formula had apparently calculated bonuses incorrectly for a specific group.",
        jumbled: ["formula", "specific", "had", "for", "spreadsheet", "her", "apparently", "calculated", "she", "a", "a", "bonuses", "the", "call,", "a", "group.", "During", "where", "showing", "screen,", "incorrectly", "shares"],
      },
      {
        target: "“This should have been caught earlier, Marcus, and I sincerely apologize for the stress this caused you,” she says honestly.",
        jumbled: ["stress", "says", "caused", "“This", "for", "earlier,", "have", "sincerely", "should", "I", "the", "you,”", "she", "honestly.", "caught", "been", "Marcus,", "this", "and", "apologize"],
      },
      {
        target: "I appreciate her transparency, especially since she could have simply given a vague, generic answer instead.",
        jumbled: ["a", "could", "since", "vague,", "especially", "given", "transparency,", "appreciate", "instead.", "answer", "have", "her", "she", "I", "simply", "generic"],
      },
      {
        target: "She explains that the finance team is already working on a fix, which should be resolved within the next two business days.",
        jumbled: ["a", "within", "team", "already", "on", "finance", "the", "explains", "She", "the", "fix,", "days.", "next", "business", "is", "should", "two", "resolved", "working", "which", "be", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone explaining a mistake honestly and clearly.",
    mySentenceExample: "My manager explained the mistake honestly and clearly.",
  },
  {
    number: 6,
    title: "A Small Delay",
    image: null,
    imageNote: "Marcus checking his banking app on his phone, a slightly impatient but understanding expression on his face.",
    story:
      "Two days pass, and although the finance team said the fix would come by now, my account still shows no change. I decide to send a brief, friendly follow-up email rather than assuming the worst has happened. Ms. Alvarez responds quickly, explaining that the correction is being processed but might take one more business day to reflect. On the other hand, she offers to send me written confirmation of the exact amount owed. “I'll get that to you today, Marcus, just in case you need it for your own records,” she adds. I thank her, appreciating that she's keeping me informed rather than leaving me wondering silently.",
    questions: [
      { text: "What does Marcus notice after two days?", answer: "His account still shows no change." },
      { text: "What does Marcus decide to send?", answer: "A brief, friendly follow-up email." },
      { text: "What does Ms. Alvarez offer to send Marcus?", answer: "Written confirmation of the exact amount owed." },
    ],
    trueFalse: [
      { text: "Marcus's account shows no change after two days.", answer: true },
      { text: "Marcus sends a brief, friendly follow-up email.", answer: true },
      { text: "Ms. Alvarez ignores Marcus's follow-up email.", answer: false },
      { text: "The correction might take one more business day.", answer: true },
      { text: "Ms. Alvarez offers written confirmation of the amount owed.", answer: true },
    ],
    buildSentence: [
      {
        target: "Two days pass, and although the finance team said the fix would come by now, my account still shows no change.",
        jumbled: ["would", "fix", "and", "by", "come", "although", "shows", "change.", "account", "the", "my", "still", "pass,", "now,", "no", "team", "Two", "said", "the", "days", "finance"],
      },
      {
        target: "I decide to send a brief, friendly follow-up email rather than assuming the worst has happened.",
        jumbled: ["friendly", "email", "send", "happened.", "follow-up", "a", "assuming", "I", "brief,", "rather", "than", "has", "decide", "the", "to", "worst"],
      },
      {
        target: "Ms. Alvarez responds quickly, explaining that the correction is being processed but might take one more business day to reflect.",
        jumbled: ["Alvarez", "reflect.", "explaining", "being", "Ms.", "processed", "responds", "is", "business", "one", "might", "more", "the", "quickly,", "correction", "take", "to", "but", "day", "that"],
      },
      {
        target: "On the other hand, she offers to send me written confirmation of the exact amount owed.",
        jumbled: ["other", "send", "hand,", "of", "confirmation", "me", "amount", "the", "owed.", "written", "the", "offers", "to", "On", "exact", "she"],
      },
      {
        target: "“I'll get that to you today, Marcus, just in case you need it for your own records,” she adds.",
        jumbled: ["adds.", "just", "for", "it", "that", "records,”", "in", "she", "own", "today,", "get", "you", "your", "to", "you", "case", "“I'll", "Marcus,", "need"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about following up politely on an unresolved problem.",
    mySentenceExample: "I followed up politely on my unresolved refund request.",
  },
  {
    number: 7,
    title: "The Correction Arrives",
    image: null,
    imageNote: "Marcus checking his phone at home, smiling with relief as he sees the corrected deposit notification.",
    story:
      "The following morning, I receive a notification from my bank showing an unexpected deposit had arrived overnight. Opening the app immediately, I confirm that the missing bonus amount has finally been added to my account correctly. Relief spreads through me instantly, followed quickly by genuine appreciation for how the entire situation was ultimately handled. Ms. Alvarez even sends a short message confirming the correction. “All fixed on our end, Marcus,” she writes, along with a brief written explanation for my personal records. I reply thanking her for the update, adding that I appreciated how clearly everything had been communicated throughout.",
    questions: [
      { text: "What does Marcus receive the following morning?", answer: "A notification of an unexpected deposit." },
      { text: "What does Marcus confirm in the banking app?", answer: "That the missing bonus has been added correctly." },
      { text: "What does Ms. Alvarez send along with the correction?", answer: "A short message with a written explanation." },
    ],
    trueFalse: [
      { text: "Marcus receives a notification about an unexpected deposit.", answer: true },
      { text: "The missing bonus amount has been added correctly.", answer: true },
      { text: "Marcus feels no relief about this outcome.", answer: false },
      { text: "Ms. Alvarez sends a written explanation for his records.", answer: true },
      { text: "Marcus never replies to Ms. Alvarez's message.", answer: false },
    ],
    buildSentence: [
      {
        target: "The following morning, I receive a notification from my bank showing an unexpected deposit had arrived overnight.",
        jumbled: ["bank", "my", "The", "morning,", "I", "overnight.", "receive", "had", "a", "from", "following", "unexpected", "an", "deposit", "arrived", "showing", "notification"],
      },
      {
        target: "Opening the app immediately, I confirm that the missing bonus amount has finally been added to my account correctly.",
        jumbled: ["immediately,", "finally", "to", "that", "confirm", "my", "correctly.", "bonus", "I", "app", "missing", "has", "amount", "the", "account", "added", "the", "been", "Opening"],
      },
      {
        target: "Relief spreads through me instantly, followed quickly by genuine appreciation for how the entire situation was ultimately handled.",
        jumbled: ["by", "me", "instantly,", "ultimately", "situation", "quickly", "spreads", "appreciation", "genuine", "Relief", "through", "the", "followed", "how", "was", "entire", "for", "handled."],
      },
      {
        target: "Ms. Alvarez even sends a short message confirming the correction.",
        jumbled: ["Alvarez", "sends", "confirming", "short", "a", "Ms.", "correction.", "message", "the", "even"],
      },
      {
        target: "“All fixed on our end, Marcus,” she writes, along with a brief written explanation for my personal records.",
        jumbled: ["written", "end,", "for", "she", "fixed", "our", "writes,", "“All", "a", "my", "explanation", "records.", "brief", "with", "Marcus,”", "on", "personal", "along"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a problem finally gets fixed.",
    mySentenceExample: "I felt relieved when my refund finally arrived correctly.",
  },
  {
    number: 8,
    title: "Talking It Over",
    image: null,
    imageNote: "Marcus chatting with a coworker in a break room, both holding coffee mugs, discussing the situation casually.",
    story:
      "During lunch, I mention the whole situation to a coworker, curious whether her paycheck was affected as well. “Same thing happened to me, Marcus,” she confirms, adding that she'd also contacted HR separately about it. We compare notes, agreeing that Ms. Alvarez handled everything professionally, despite the initial inconvenience it caused everyone involved. My coworker jokes that at least now we know payroll actually double-checks these situations carefully when something goes wrong. Although the mistake itself was frustrating, in the end, the company's response genuinely reassured both of us about how future issues might be handled.",
    questions: [
      { text: "Who does Marcus mention the situation to during lunch?", answer: "A coworker." },
      { text: "What does the coworker confirm about her own paycheck?", answer: "That she had the exact same issue." },
      { text: "What do Marcus and his coworker agree about Ms. Alvarez?", answer: "That she handled everything professionally." },
    ],
    trueFalse: [
      { text: "Marcus mentions the situation to a coworker during lunch.", answer: true },
      { text: "The coworker's paycheck had the exact same issue.", answer: true },
      { text: "They agree Ms. Alvarez handled things unprofessionally.", answer: false },
      { text: "The coworker also contacted HR separately.", answer: true },
      { text: "The company's response reassured them about future issues.", answer: true },
    ],
    buildSentence: [
      {
        target: "During lunch, I mention the whole situation to a coworker, curious whether her paycheck was affected as well.",
        jumbled: ["the", "curious", "was", "as", "I", "well.", "whole", "whether", "paycheck", "a", "affected", "mention", "During", "her", "situation", "to", "coworker,", "lunch,"],
      },
      {
        target: "“Same thing happened to me, Marcus,” she confirms, adding that she'd also contacted HR separately about it.",
        jumbled: ["confirms,", "separately", "also", "she'd", "she", "contacted", "it.", "“Same", "adding", "Marcus,”", "happened", "HR", "that", "me,", "about", "to", "thing"],
      },
      {
        target: "We compare notes, agreeing that Ms. Alvarez handled everything professionally, despite the initial inconvenience it caused everyone involved.",
        jumbled: ["compare", "everything", "agreeing", "Ms.", "notes,", "involved.", "Alvarez", "caused", "despite", "that", "it", "professionally,", "everyone", "the", "inconvenience", "handled", "initial", "We"],
      },
      {
        target: "My coworker jokes that at least now we know payroll actually double-checks these situations carefully when something goes wrong.",
        jumbled: ["we", "now", "coworker", "know", "when", "these", "payroll", "at", "carefully", "goes", "double-checks", "wrong.", "least", "situations", "actually", "My", "something", "jokes", "that"],
      },
      {
        target: "In the end, the company's response genuinely reassured both of us about how future issues might be handled.",
        jumbled: ["us", "might", "In", "be", "how", "reassured", "end,", "handled.", "of", "response", "genuinely", "the", "about", "both", "issues", "future", "the", "company's"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about discovering a coworker had the same problem as you.",
    mySentenceExample: "I discovered my coworker had the same billing problem too.",
  },
  {
    number: 9,
    title: "A Better System",
    image: null,
    imageNote: "Ms. Alvarez presenting a short update in a company-wide email or memo about a new payroll checking process.",
    story:
      "A week later, the company sends a short memo explaining new steps being added to prevent similar payroll errors going forward. I forward it to myself with a quick note, “Marcus — worth remembering for next year.” According to the memo, an additional review step will now be required before any bonus calculations are finalized each month. I appreciate that the company didn't just fix my individual issue quietly but addressed the underlying cause for everyone. This kind of response, in my opinion, says a lot about how seriously an organization takes its employees' trust. Whatever caused the original error, at least something genuinely useful came out of the whole experience.",
    questions: [
      { text: "What does the company send a week later?", answer: "A memo about new steps to prevent payroll errors." },
      { text: "What new step will be added to payroll calculations?", answer: "An additional review step." },
      { text: "What does Marcus appreciate about the company's response?", answer: "That they addressed the underlying cause for everyone." },
    ],
    trueFalse: [
      { text: "The company sends a memo about new payroll steps.", answer: true },
      { text: "An additional review step will now be required.", answer: true },
      { text: "The company only fixed Marcus's individual issue quietly.", answer: false },
      { text: "Marcus feels this response says something positive about the company.", answer: true },
      { text: "Marcus feels nothing useful came from this experience.", answer: false },
    ],
    buildSentence: [
      {
        target: "A week later, the company sends a short memo explaining new steps being added to prevent similar payroll errors going forward.",
        jumbled: ["added", "later,", "similar", "the", "prevent", "company", "memo", "explaining", "a", "forward.", "sends", "short", "A", "being", "going", "week", "payroll", "errors", "new", "steps", "to"],
      },
      {
        target: "I forward it to myself with a quick note, “Marcus — worth remembering for next year.”",
        jumbled: ["next", "—", "“Marcus", "I", "a", "quick", "note,", "with", "for", "remembering", "forward", "it", "myself", "worth", "to", "year.”"],
      },
      {
        target: "According to the memo, an additional review step will now be required before any bonus calculations are finalized each month.",
        jumbled: ["required", "review", "bonus", "additional", "step", "be", "any", "will", "calculations", "to", "According", "finalized", "are", "memo,", "month.", "now", "before", "each", "an", "the"],
      },
      {
        target: "I appreciate that the company didn't just fix my individual issue quietly but addressed the underlying cause for everyone.",
        jumbled: ["quietly", "the", "the", "addressed", "company", "issue", "that", "underlying", "but", "fix", "cause", "appreciate", "for", "just", "I", "didn't", "individual", "my", "everyone."],
      },
      {
        target: "This kind of response, in my opinion, says a lot about how seriously an organization takes its employees' trust.",
        jumbled: ["seriously", "a", "This", "organization", "lot", "about", "of", "opinion,", "my", "how", "kind", "employees'", "takes", "response,", "an", "in", "its", "trust.", "says"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a company or organization fixing a problem for everyone, not just you.",
    mySentenceExample: "The company fixed the problem for everyone, not just me.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Marcus sitting comfortably at his kitchen table again, calmly reviewing his payslip, relaxed this time.",
    story:
      "Looking back on the whole experience, I jot a quick note in my planner, “Lesson for Marcus: stay calm, follow up in writing,” and realize how differently things could have gone if I had reacted with anger instead of patience. Had I sent an angry, accusatory email that first Monday, the entire process might have felt more tense for everyone involved. Instead, staying calm and communicating clearly allowed Ms. Alvarez to actually help me efficiently and honestly. I've also learned to check my payslip more carefully each month, rather than only glancing at the final total. In the end, this small workplace hiccup taught me something genuinely useful about handling problems calmly and professionally.",
    questions: [
      { text: "What does Marcus realize looking back on the experience?", answer: "How differently things could have gone if he'd reacted with anger." },
      { text: "What has Marcus learned to do each month?", answer: "Check his payslip more carefully." },
      { text: "What does Marcus feel this experience taught him?", answer: "Something useful about handling problems calmly and professionally." },
    ],
    trueFalse: [
      { text: "Marcus realizes staying calm helped the situation go smoothly.", answer: true },
      { text: "Marcus wishes he had sent an angry email instead.", answer: false },
      { text: "Marcus now checks his payslip more carefully each month.", answer: true },
      { text: "Marcus feels he learned nothing useful from this.", answer: false },
      { text: "Marcus believes staying calm helped resolve things efficiently.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the whole experience, I jot a quick note in my planner, “Lesson for Marcus: stay calm, follow up in writing,” and realize how differently things could have gone if I had reacted with anger instead of patience.",
        jumbled: ["had", "planner,", "follow", "in", "things", "my", "have", "of", "note", "in", "Marcus:", "writing,”", "reacted", "patience.", "whole", "up", "gone", "how", "for", "anger", "with", "instead", "back", "quick", "stay", "realize", "a", "on", "jot", "I", "Looking", "could", "experience,", "if", "and", "calm,", "differently", "“Lesson", "I", "the"],
      },
      {
        target: "Had I sent an angry, accusatory email that first Monday, the entire process might have felt more tense for everyone involved.",
        jumbled: ["sent", "email", "process", "that", "involved.", "for", "accusatory", "the", "felt", "more", "an", "Had", "everyone", "angry,", "I", "have", "entire", "tense", "first", "might", "Monday,"],
      },
      {
        target: "Instead, staying calm and communicating clearly allowed Ms. Alvarez to actually help me efficiently and honestly.",
        jumbled: ["me", "Ms.", "efficiently", "staying", "allowed", "clearly", "and", "Alvarez", "communicating", "and", "help", "to", "Instead,", "actually", "calm", "honestly."],
      },
      {
        target: "I've also learned to check my payslip more carefully each month, rather than only glancing at the final total.",
        jumbled: ["rather", "total.", "check", "learned", "carefully", "I've", "glancing", "more", "the", "only", "also", "each", "month,", "at", "my", "payslip", "than", "final", "to"],
      },
      {
        target: "In the end, this small workplace hiccup taught me something genuinely useful about handling problems calmly and professionally.",
        jumbled: ["about", "hiccup", "handling", "workplace", "end,", "genuinely", "this", "useful", "the", "small", "In", "me", "taught", "calmly", "professionally.", "problems", "something", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from handling a workplace problem calmly.",
    mySentenceExample: "I learned that handling workplace problems calmly gets better results.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
