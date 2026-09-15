// B2 Teens digital storybook, Book 72: "Deciding What to Share Online"
// Static content -- no Supabase. Eighth and final book in the B2
// Teens batch (65-72). Personal-vulnerability/privacy decision,
// distinct from Book 49 "Taking a Break from Social Media" (digital
// wellbeing/usage habits) and Book 53 "Standing Up to a Bully
// Online" (direct bullying) -- this one weighs whether to post
// something personally vulnerable, consulting friends' differing
// opinions, matching the B2 spec's mediation/perspective-weighing
// focus. Teens-track shape: 3 questions, 5 True/False, 5 Build-a-
// Sentence per chapter. Chapter images not generated yet -- image
// left null per chapter.
import coverImg from "./assets/storybook72/cover.jpg";

export const STORYBOOK_TITLE = "Deciding What to Share Online";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Farah sitting cross-legged on her bed, phone in hand, staring at an unsent draft post, expression torn between hope and hesitation.";

export const CHARACTERS = [
  { name: "Farah", role: "The narrator, considering whether to post something personal online", look: "Thoughtful, usually private, has been quietly struggling with anxiety." },
  { name: "Dahlia", role: "Farah's friend who encourages sharing openly", look: "Outgoing, believes vulnerability online can genuinely help others." },
  { name: "Colin", role: "Farah's friend who values privacy more", look: "Reserved, cautious about oversharing, protective of Farah." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Draft I Haven't Sent",
    image: null,
    imageNote: "Farah sitting on her bed, phone screen showing a long typed post with the cursor blinking, thumb hovering over 'Post.'",
    story:
      "I've been drafting a post about my anxiety for nearly a week now, rewriting it more times than I can count. Part of me genuinely wants to share it, hoping it might help someone else feeling similarly isolated and misunderstood. However, another part of me worries about how classmates, teachers, or even future employers might eventually perceive this vulnerability. I've read that authentic posts like this can genuinely resonate, though I've also seen people mocked for sharing something too personal online. Come on, Farah, just decide already, I think, thumb hovering over the screen. Staring at the unsent draft, I realize I genuinely don't know which instinct I should actually trust here.",
    questions: [
      { text: "What has Farah been drafting for nearly a week?", answer: "A post about her anxiety." },
      { text: "Why does part of Farah want to share it?", answer: "Hoping it might help someone else feeling isolated." },
      { text: "What does another part of Farah worry about?", answer: "How classmates, teachers, or employers might perceive it." },
    ],
    trueFalse: [
      { text: "Farah has been drafting a post about her anxiety.", answer: true },
      { text: "Part of Farah hopes it might help someone else feel less alone.", answer: true },
      { text: "Farah has no worries at all about sharing this.", answer: false },
      { text: "Farah worries about how classmates or employers might perceive it.", answer: true },
      { text: "Farah doesn't know which instinct she should trust.", answer: true },
    ],
    buildSentence: [
      {
        target: "I've been drafting a post about my anxiety for nearly a week now, rewriting it more times than I can count.",
        jumbled: ["times", "can", "for", "rewriting", "nearly", "a", "than", "a", "post", "anxiety", "been", "it", "count.", "more", "about", "drafting", "my", "I", "week", "I've", "now,"],
      },
      {
        target: "Part of me genuinely wants to share it, hoping it might help someone else feeling similarly isolated and misunderstood.",
        jumbled: ["Part", "it", "to", "else", "isolated", "feeling", "might", "hoping", "share", "someone", "of", "and", "wants", "genuinely", "misunderstood.", "it,", "help", "similarly", "me"],
      },
      {
        target: "However, another part of me worries about how classmates, teachers, or even future employers might eventually perceive this vulnerability.",
        jumbled: ["might", "how", "perceive", "part", "teachers,", "this", "about", "me", "future", "or", "classmates,", "employers", "another", "of", "even", "eventually", "vulnerability.", "However,", "worries"],
      },
      {
        target: "I've read that authentic posts like this can genuinely resonate, though I've also seen people mocked for sharing something too personal online.",
        jumbled: ["resonate,", "sharing", "too", "read", "can", "genuinely", "though", "mocked", "posts", "people", "personal", "online.", "for", "something", "I've", "seen", "that", "also", "I've", "this", "like", "authentic"],
      },
      {
        target: "Staring at the unsent draft, I realize I genuinely don't know which instinct I should actually trust here.",
        jumbled: ["here.", "at", "instinct", "Staring", "genuinely", "should", "unsent", "draft,", "I", "realize", "trust", "actually", "I", "the", "know", "which", "don't", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being torn between wanting to share something personal and worrying about the consequences.",
    mySentenceExample: "I felt torn between sharing something personal and worrying about consequences.",
  },
  {
    number: 2,
    title: "Talking to Dahlia",
    image: null,
    imageNote: "Farah showing her phone screen to Dahlia in a coffee shop, Dahlia reading with an encouraging expression.",
    story:
      "I show the draft to Dahlia, curious what she'll think, given how openly she shares her own experiences online generally. She reads it carefully, then tells me honestly that this could genuinely help someone struggling silently, exactly like I'd hoped. She mentions that when she'd shared her own difficult experience last year, several classmates had reached out privately, saying it helped them feel less alone. “You should really consider it, Farah,” she says. Dahlia argues that staying silent out of fear only reinforces the stigma surrounding mental health that we're supposedly trying to fight. Her encouragement feels genuine, though I notice she doesn't fully address my worry about long-term consequences.",
    questions: [
      { text: "What does Farah show Dahlia?", answer: "The draft." },
      { text: "What does Dahlia say happened when she shared her own experience last year?", answer: "Several classmates reached out privately, saying it helped." },
      { text: "What does Dahlia argue about staying silent out of fear?", answer: "That it only reinforces the stigma." },
    ],
    trueFalse: [
      { text: "Farah shows the draft to Dahlia.", answer: true },
      { text: "Several classmates reached out to Dahlia after she shared her experience.", answer: true },
      { text: "Dahlia argues staying silent reinforces stigma around mental health.", answer: true },
      { text: "Dahlia fully addresses Farah's worry about long-term consequences.", answer: false },
      { text: "Farah notices Dahlia's encouragement feels genuine.", answer: true },
    ],
    buildSentence: [
      {
        target: "I show the draft to Dahlia, curious what she'll think, given how openly she shares her own experiences online generally.",
        jumbled: ["openly", "her", "experiences", "show", "draft", "to", "own", "she'll", "think,", "curious", "shares", "Dahlia,", "what", "the", "how", "online", "I", "given", "generally.", "she"],
      },
      {
        target: "She reads it carefully, then tells me honestly that this could genuinely help someone struggling silently, exactly like I'd hoped.",
        jumbled: ["tells", "help", "then", "someone", "honestly", "this", "could", "genuinely", "carefully,", "exactly", "I'd", "struggling", "it", "hoped.", "like", "me", "reads", "that", "She", "silently,"],
      },
      {
        target: "She mentions that when she'd shared her own difficult experience last year, several classmates had reached out privately, saying it helped them feel less alone.",
        jumbled: ["out", "feel", "last", "helped", "them", "she'd", "reached", "year,", "saying", "when", "her", "that", "own", "She", "experience", "shared", "classmates", "mentions", "several", "privately,", "less", "had", "difficult", "alone.", "it"],
      },
      {
        target: "“You should really consider it, Farah,” she says.",
        jumbled: ["really", "consider", "“You", "says.", "Farah,”", "it,", "she", "should"],
      },
      {
        target: "Dahlia argues that staying silent out of fear only reinforces the stigma surrounding mental health that we're supposedly trying to fight.",
        jumbled: ["trying", "to", "silent", "supposedly", "out", "we're", "fight.", "the", "fear", "mental", "surrounding", "health", "Dahlia", "only", "staying", "that", "argues", "stigma", "that", "of", "reinforces"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend encouraging you to share something you were nervous about.",
    mySentenceExample: "My friend encouraged me to share something I was nervous about.",
  },
  {
    number: 3,
    title: "Talking to Colin",
    image: null,
    imageNote: "Farah and Colin sitting on a park bench, Colin looking thoughtful and slightly concerned as he reads the draft.",
    story:
      "I show the same draft to Colin, curious whether his more cautious perspective might reveal something Dahlia's enthusiasm had missed. He reads it slowly, then admits he worries about permanence: once posted, this becomes searchable and screenshot-able indefinitely, regardless of future regret. He mentions a cousin who'd shared something vulnerable years ago, only to have it resurface unexpectedly during a college application process later. “Just think it through carefully, Farah,” he says. Colin isn't against sharing exactly, but he questions whether a public post is genuinely necessary compared to more private, controlled alternatives. His caution feels valid too, though I sense he's perhaps overestimating how likely negative consequences actually are.",
    questions: [
      { text: "What does Colin worry about regarding permanence?", answer: "That once posted, it's searchable and screenshot-able indefinitely." },
      { text: "What does Colin mention about his cousin?", answer: "That something vulnerable resurfaced during a college application." },
      { text: "What does Colin question about a public post?", answer: "Whether it's genuinely necessary compared to private alternatives." },
    ],
    trueFalse: [
      { text: "Colin worries about permanence once something is posted.", answer: true },
      { text: "Colin's cousin had something resurface during a college application.", answer: true },
      { text: "Colin is completely against Farah sharing anything at all.", answer: false },
      { text: "Colin questions whether a public post is genuinely necessary.", answer: true },
      { text: "Farah senses Colin might be overestimating the risk somewhat.", answer: true },
    ],
    buildSentence: [
      {
        target: "I show the same draft to Colin, curious whether his more cautious perspective might reveal something Dahlia's enthusiasm had missed.",
        jumbled: ["to", "show", "I", "Dahlia's", "had", "enthusiasm", "draft", "whether", "his", "reveal", "the", "something", "cautious", "Colin,", "missed.", "curious", "more", "might", "same", "perspective"],
      },
      {
        target: "He reads it slowly, then admits he worries about permanence: once posted, this becomes searchable and screenshot-able indefinitely, regardless of future regret.",
        jumbled: ["slowly,", "searchable", "of", "posted,", "admits", "regret.", "about", "once", "He", "this", "he", "future", "permanence:", "regardless", "reads", "becomes", "it", "and", "screenshot-able", "indefinitely,", "then", "worries"],
      },
      {
        target: "He mentions a cousin who'd shared something vulnerable years ago, only to have it resurface unexpectedly during a college application process later.",
        jumbled: ["only", "vulnerable", "have", "it", "during", "to", "process", "a", "ago,", "who'd", "He", "years", "cousin", "resurface", "college", "later.", "mentions", "unexpectedly", "shared", "a", "something", "application"],
      },
      {
        target: "“Just think it through carefully, Farah,” he says.",
        jumbled: ["“Just", "he", "think", "carefully,", "says.", "Farah,”", "it", "through"],
      },
      {
        target: "Colin isn't against sharing exactly, but he questions whether a public post is genuinely necessary compared to more private, controlled alternatives.",
        jumbled: ["alternatives.", "public", "isn't", "but", "to", "sharing", "genuinely", "private,", "more", "he", "questions", "a", "necessary", "Colin", "controlled", "whether", "compared", "is", "exactly,", "against", "post"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend raising a valid concern that made you think more carefully.",
    mySentenceExample: "My friend raised a valid concern that made me think more carefully.",
  },
  {
    number: 4,
    title: "Two Valid Concerns",
    image: null,
    imageNote: "Farah sitting alone at her desk, writing both perspectives in a notebook, phone with the draft still open nearby.",
    story:
      "Thinking through both conversations, I realize Dahlia and Colin aren't actually disagreeing about whether my experience matters, but about risk and audience. Dahlia's perspective centers on potential benefit: helping others and reducing stigma through visible, authentic sharing of real struggles. Colin's perspective centers on potential harm: protecting my future self from consequences I can't fully predict or control right now. Neither perspective feels wrong exactly, which means the real question isn't which friend is right, but which risk I'm personally willing to accept. Okay, Farah, it's not about who's right, I think, underlining the word “risk” in my notes. This reframing, given how stuck I'd felt, actually helps me think about this more clearly.",
    questions: [
      { text: "What does Farah realize Dahlia and Colin aren't actually disagreeing about?", answer: "Whether her experience matters." },
      { text: "What does Dahlia's perspective center on?", answer: "Potential benefit -- helping others and reducing stigma." },
      { text: "What does Colin's perspective center on?", answer: "Potential harm -- protecting her future self." },
    ],
    trueFalse: [
      { text: "Farah realizes they aren't disagreeing about whether her experience matters.", answer: true },
      { text: "Dahlia's perspective centers on potential benefit and reducing stigma.", answer: true },
      { text: "Colin's perspective centers on protecting Farah's future self.", answer: true },
      { text: "Farah decides one friend is clearly right and the other wrong.", answer: false },
      { text: "This reframing helps Farah think about this more clearly.", answer: true },
    ],
    buildSentence: [
      {
        target: "Thinking through both conversations, I realize Dahlia and Colin aren't actually disagreeing about whether my experience matters, but about risk and audience.",
        jumbled: ["both", "conversations,", "audience.", "Colin", "disagreeing", "actually", "I", "matters,", "aren't", "Thinking", "Dahlia", "about", "about", "realize", "and", "through", "experience", "whether", "but", "and", "risk", "my"],
      },
      {
        target: "Dahlia's perspective centers on potential benefit: helping others and reducing stigma through visible, authentic sharing of real struggles.",
        jumbled: ["centers", "reducing", "of", "on", "perspective", "authentic", "helping", "stigma", "others", "benefit:", "through", "sharing", "struggles.", "Dahlia's", "potential", "and", "visible,", "real"],
      },
      {
        target: "Colin's perspective centers on potential harm: protecting my future self from consequences I can't fully predict or control right now.",
        jumbled: ["Colin's", "can't", "I", "or", "protecting", "control", "harm:", "from", "my", "on", "future", "right", "consequences", "now.", "predict", "perspective", "centers", "potential", "self", "fully"],
      },
      {
        target: "Neither perspective feels wrong exactly, which means the real question isn't which friend is right, but which risk I'm personally willing to accept.",
        jumbled: ["to", "feels", "accept.", "Neither", "willing", "is", "which", "question", "risk", "real", "I'm", "right,", "exactly,", "personally", "perspective", "but", "wrong", "means", "friend", "which", "the", "isn't", "which"],
      },
      {
        target: "Okay, Farah, it's not about who's right, I think, underlining the word “risk” in my notes.",
        jumbled: ["the", "Okay,", "about", "I", "underlining", "in", "think,", "word", "“risk”", "right,", "notes.", "it's", "my", "who's", "Farah,", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two friends' different opinions weren't actually contradicting each other.",
    mySentenceExample: "I realized two friends' opinions weren't actually contradicting each other.",
  },
  {
    number: 5,
    title: "Researching Middle Grounds",
    image: null,
    imageNote: "Farah scrolling through her phone's privacy settings, exploring a 'close friends' feature option.",
    story:
      "Rather than choosing entirely public or entirely private, I research whether some middle ground might actually address both concerns simultaneously. I discover a feature allowing posts visible only to a smaller, selected group rather than my entire public follower list. This way, I could share with people I trust, potentially helping someone specific, without the permanence Colin worried about affecting strangers. I also consider writing anonymously on a mental health forum instead, separating the content from my actual identity entirely. Maybe this is the answer, Farah, I think, scrolling through the settings again. Given these options, I realize the choice isn't simply share or don't share, but how and with whom.",
    questions: [
      { text: "What does Farah research instead of choosing entirely public or private?", answer: "A middle ground." },
      { text: "What feature does Farah discover?", answer: "Posts visible only to a smaller, selected group." },
      { text: "What alternative does Farah also consider?", answer: "Writing anonymously on a mental health forum." },
    ],
    trueFalse: [
      { text: "Farah researches whether a middle ground might exist.", answer: true },
      { text: "Farah discovers a feature for a smaller, selected group of viewers.", answer: true },
      { text: "Farah considers writing anonymously on a mental health forum.", answer: true },
      { text: "Farah decides the choice is simply share or don't share.", answer: false },
      { text: "Farah realizes the choice is about how and with whom.", answer: true },
    ],
    buildSentence: [
      {
        target: "Rather than choosing entirely public or entirely private, I research whether some middle ground might actually address both concerns simultaneously.",
        jumbled: ["actually", "private,", "research", "than", "simultaneously.", "whether", "public", "or", "I", "entirely", "choosing", "middle", "both", "might", "some", "Rather", "address", "ground", "concerns", "entirely"],
      },
      {
        target: "I discover a feature allowing posts visible only to a smaller, selected group rather than my entire public follower list.",
        jumbled: ["group", "public", "allowing", "feature", "list.", "follower", "than", "smaller,", "posts", "a", "visible", "only", "I", "rather", "my", "to", "a", "discover", "entire", "selected"],
      },
      {
        target: "This way, I could share with people I trust, potentially helping someone specific, without the permanence Colin worried about affecting strangers.",
        jumbled: ["permanence", "about", "This", "potentially", "Colin", "someone", "with", "affecting", "specific,", "the", "way,", "worried", "without", "could", "helping", "I", "trust,", "share", "strangers.", "I", "people"],
      },
      {
        target: "I also consider writing anonymously on a mental health forum instead, separating the content from my actual identity entirely.",
        jumbled: ["I", "from", "actual", "identity", "my", "the", "forum", "also", "instead,", "a", "anonymously", "entirely.", "health", "mental", "content", "writing", "consider", "on", "separating"],
      },
      {
        target: "Given these options, I realize the choice isn't simply share or don't share, but how and with whom.",
        jumbled: ["Given", "but", "isn't", "choice", "don't", "realize", "how", "these", "the", "share", "with", "and", "or", "share,", "simply", "I", "options,", "whom."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding a middle-ground solution instead of choosing between two extremes.",
    mySentenceExample: "I found a middle-ground solution instead of choosing between two extremes.",
  },
  {
    number: 6,
    title: "Sharing the Middle Ground",
    image: null,
    imageNote: "Farah showing her revised plan to both Dahlia and Colin together, both looking thoughtfully at her phone.",
    story:
      "I bring my middle-ground idea to Dahlia and Colin together, curious whether this compromise might satisfy both of their concerns reasonably. Dahlia admits that a smaller, trusted audience could still genuinely help, even if it reaches fewer people than a fully public post. Colin agrees that this significantly reduces the permanence risk he'd worried about, since screenshots within trusted circles feel less threatening. “This could work, Farah,” Colin says, managing a small smile. Neither seems entirely thrilled, exactly, but both acknowledge this addresses their core concern reasonably well. Watching them both nod, even hesitantly, I feel like I've finally found something workable rather than choosing between two extremes.",
    questions: [
      { text: "What does Farah bring to Dahlia and Colin together?", answer: "Her middle-ground idea." },
      { text: "What does Dahlia admit about a smaller, trusted audience?", answer: "That it could still genuinely help." },
      { text: "What does Colin agree this significantly reduces?", answer: "The permanence risk." },
    ],
    trueFalse: [
      { text: "Farah brings her middle-ground idea to both friends together.", answer: true },
      { text: "Dahlia admits a smaller audience could still genuinely help.", answer: true },
      { text: "Colin agrees this significantly reduces the permanence risk.", answer: true },
      { text: "Both friends are completely thrilled with this exact plan.", answer: false },
      { text: "Farah feels she's found something workable.", answer: true },
    ],
    buildSentence: [
      {
        target: "I bring my middle-ground idea to Dahlia and Colin together, curious whether this compromise might satisfy both of their concerns reasonably.",
        jumbled: ["of", "and", "concerns", "reasonably.", "this", "their", "I", "my", "middle-ground", "whether", "idea", "both", "curious", "Dahlia", "to", "might", "Colin", "together,", "satisfy", "compromise", "bring"],
      },
      {
        target: "Dahlia admits that a smaller, trusted audience could still genuinely help, even if it reaches fewer people than a fully public post.",
        jumbled: ["a", "post.", "reaches", "admits", "smaller,", "Dahlia", "that", "a", "still", "people", "genuinely", "even", "fully", "than", "trusted", "if", "audience", "it", "help,", "public", "fewer", "could"],
      },
      {
        target: "Colin agrees that this significantly reduces the permanence risk he'd worried about, since screenshots within trusted circles feel less threatening.",
        jumbled: ["permanence", "threatening.", "this", "agrees", "feel", "significantly", "risk", "that", "since", "trusted", "the", "Colin", "he'd", "circles", "screenshots", "worried", "about,", "reduces", "less", "within"],
      },
      {
        target: "“This could work, Farah,” Colin says, managing a small smile.",
        jumbled: ["Colin", "says,", "work,", "could", "managing", "small", "a", "Farah,”", "“This", "smile."],
      },
      {
        target: "Watching them both nod, even hesitantly, I feel like I've finally found something workable rather than choosing between two extremes.",
        jumbled: ["extremes.", "I've", "rather", "I", "nod,", "choosing", "hesitantly,", "found", "two", "feel", "even", "workable", "Watching", "something", "between", "like", "both", "finally", "than", "them"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a compromise that partly satisfied two people with different concerns.",
    mySentenceExample: "I presented a compromise that partly satisfied two people's concerns.",
  },
  {
    number: 7,
    title: "Posting It",
    image: null,
    imageNote: "Farah sitting on her bed, finger hovering over the post button, then finally tapping it, exhaling with relief.",
    story:
      "That evening, I finalize the post, adjusting the audience setting to my smaller, trusted circle rather than fully public visibility. My finger hovers over the button longer than I expected, given how much thought had already gone into this decision. Okay, Farah, this is it, I think, thumb hovering over the button. Taking a breath, I finally post it, immediately feeling an odd mixture of relief and lingering vulnerability simultaneously. Within minutes, a few close friends respond supportively, one even sharing that they'd been struggling with something similar themselves recently. I close my phone, deciding I'll check responses again tomorrow rather than obsessively refreshing throughout the night.",
    questions: [
      { text: "What does Farah adjust before posting?", answer: "The audience setting to her smaller, trusted circle." },
      { text: "How does Farah feel immediately after posting?", answer: "A mix of relief and lingering vulnerability." },
      { text: "What does one close friend share in response?", answer: "That they'd been struggling with something similar." },
    ],
    trueFalse: [
      { text: "Farah adjusts the audience to her smaller, trusted circle.", answer: true },
      { text: "Farah feels only relief with no lingering vulnerability at all.", answer: false },
      { text: "A few close friends respond supportively within minutes.", answer: true },
      { text: "One friend shares they'd been struggling with something similar.", answer: true },
      { text: "Farah decides to check responses again tomorrow.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I finalize the post, adjusting the audience setting to my smaller, trusted circle rather than fully public visibility.",
        jumbled: ["I", "fully", "adjusting", "the", "to", "audience", "visibility.", "rather", "post,", "trusted", "setting", "public", "evening,", "smaller,", "the", "than", "my", "circle", "That", "finalize"],
      },
      {
        target: "My finger hovers over the button longer than I expected, given how much thought had already gone into this decision.",
        jumbled: ["button", "already", "the", "expected,", "this", "longer", "than", "given", "much", "finger", "how", "had", "decision.", "gone", "My", "thought", "I", "hovers", "into", "over"],
      },
      {
        target: "Okay, Farah, this is it, I think, thumb hovering over the button.",
        jumbled: ["Okay,", "Farah,", "thumb", "think,", "over", "I", "is", "it,", "button.", "hovering", "this", "the"],
      },
      {
        target: "Taking a breath, I finally post it, immediately feeling an odd mixture of relief and lingering vulnerability simultaneously.",
        jumbled: ["breath,", "simultaneously.", "and", "I", "lingering", "relief", "a", "mixture", "Taking", "immediately", "an", "it,", "finally", "odd", "vulnerability", "post", "feeling", "of"],
      },
      {
        target: "Within minutes, a few close friends respond supportively, one even sharing that they'd been struggling with something similar themselves recently.",
        jumbled: ["minutes,", "themselves", "sharing", "a", "friends", "struggling", "similar", "supportively,", "something", "recently.", "one", "respond", "few", "even", "with", "close", "Within", "they'd", "been", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally taking an action you'd been nervous about for a long time.",
    mySentenceExample: "I finally took an action I'd been nervous about for a long time.",
  },
  {
    number: 8,
    title: "Unexpected Responses",
    image: null,
    imageNote: "Farah reading messages on her phone the next day, a mixture of emotions on her face as she scrolls through replies.",
    story:
      "The next morning, I check my phone and find more responses than I'd honestly expected from such a small audience. Most messages are supportive, though one classmate seems slightly awkward afterward, unsure how to respond directly in person. This mild awkwardness stings briefly, though it's nowhere near the harsh reaction Colin had worried about beforehand. On the other hand, a friend I hadn't been particularly close with reaches out, saying this helped her feel comfortable sharing her own struggle. Okay, Farah, this is more complicated than either of them predicted, I think. Weighing these mixed responses together, I realize both Dahlia's hope and Colin's caution had been partially, reasonably correct.",
    questions: [
      { text: "What does Farah find the next morning?", answer: "More responses than expected." },
      { text: "How does one classmate seem afterward?", answer: "Slightly awkward." },
      { text: "What does a friend Farah wasn't particularly close with say?", answer: "That it helped her feel comfortable sharing her own struggle." },
    ],
    trueFalse: [
      { text: "Farah finds more responses than she expected.", answer: true },
      { text: "One classmate seems slightly awkward afterward.", answer: true },
      { text: "This awkwardness is exactly as harsh as Colin had worried.", answer: false },
      { text: "A friend says this helped her feel comfortable sharing too.", answer: true },
      { text: "Farah realizes both Dahlia's hope and Colin's caution were partially correct.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next morning, I check my phone and find more responses than I'd honestly expected from such a small audience.",
        jumbled: ["check", "I", "and", "my", "phone", "The", "responses", "more", "audience.", "expected", "I'd", "such", "morning,", "next", "small", "than", "honestly", "from", "a", "find"],
      },
      {
        target: "Most messages are supportive, though one classmate seems slightly awkward afterward, unsure how to respond directly in person.",
        jumbled: ["unsure", "person.", "are", "how", "supportive,", "to", "one", "though", "awkward", "messages", "slightly", "directly", "afterward,", "classmate", "Most", "in", "respond", "seems"],
      },
      {
        target: "This mild awkwardness stings briefly, though it's nowhere near the harsh reaction Colin had worried about beforehand.",
        jumbled: ["This", "near", "the", "about", "it's", "nowhere", "worried", "mild", "reaction", "harsh", "beforehand.", "awkwardness", "briefly,", "stings", "had", "Colin", "though"],
      },
      {
        target: "On the other hand, a friend I hadn't been particularly close with reaches out, saying this helped her feel comfortable sharing her own struggle.",
        jumbled: ["hand,", "reaches", "struggle.", "saying", "her", "her", "sharing", "own", "out,", "the", "a", "close", "hadn't", "feel", "been", "particularly", "with", "On", "I", "comfortable", "this", "helped", "other", "friend"],
      },
      {
        target: "Weighing these mixed responses together, I realize both Dahlia's hope and Colin's caution had been partially, reasonably correct.",
        jumbled: ["had", "partially,", "Colin's", "caution", "Weighing", "both", "been", "Dahlia's", "correct.", "these", "hope", "mixed", "reasonably", "responses", "together,", "and", "realize", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving mixed reactions after sharing something personal.",
    mySentenceExample: "I received mixed reactions after sharing something personal online.",
  },
  {
    number: 9,
    title: "Telling Dahlia and Colin",
    image: null,
    imageNote: "Farah sitting with Dahlia and Colin together again, showing them the responses, all three talking openly.",
    story:
      "I tell Dahlia and Colin how things turned out, sharing both the supportive messages and the mildly awkward moment afterward. Dahlia seems pleased that her encouragement led somewhere positive, though she acknowledges Colin's caution about permanence remains genuinely valid. Colin admits that seeing the actual outcome, rather than just imagining worst-case scenarios, shifts his perspective somewhat toward Dahlia's optimism. “I'm glad you told us, Farah,” he adds. Neither fully abandons their original view, but both seem more willing to hold space for the other's perspective now. I feel grateful that consulting both of them, rather than just one, led me toward a more balanced decision.",
    questions: [
      { text: "What does Farah tell Dahlia and Colin?", answer: "How things turned out -- both the support and the awkward moment." },
      { text: "How does Dahlia react to hearing the outcome?", answer: "Pleased, though she acknowledges Colin's caution remains valid." },
      { text: "How does Colin's perspective shift?", answer: "Toward Dahlia's optimism." },
    ],
    trueFalse: [
      { text: "Farah tells them both the supportive and awkward moments.", answer: true },
      { text: "Dahlia acknowledges Colin's caution about permanence remains valid.", answer: true },
      { text: "Colin's perspective shifts somewhat toward Dahlia's optimism.", answer: true },
      { text: "Both fully abandon their original views completely.", answer: false },
      { text: "Farah feels grateful she consulted both of them.", answer: true },
    ],
    buildSentence: [
      {
        target: "I tell Dahlia and Colin how things turned out, sharing both the supportive messages and the mildly awkward moment afterward.",
        jumbled: ["supportive", "out,", "and", "and", "the", "the", "messages", "moment", "awkward", "mildly", "tell", "both", "afterward.", "I", "how", "turned", "Colin", "Dahlia", "sharing", "things"],
      },
      {
        target: "Dahlia seems pleased that her encouragement led somewhere positive, though she acknowledges Colin's caution about permanence remains genuinely valid.",
        jumbled: ["acknowledges", "genuinely", "Colin's", "she", "Dahlia", "valid.", "permanence", "though", "seems", "somewhere", "encouragement", "positive,", "about", "that", "pleased", "her", "remains", "led", "caution"],
      },
      {
        target: "Colin admits that seeing the actual outcome, rather than just imagining worst-case scenarios, shifts his perspective somewhat toward Dahlia's optimism.",
        jumbled: ["than", "the", "that", "rather", "Colin", "somewhat", "perspective", "admits", "actual", "shifts", "worst-case", "Dahlia's", "toward", "just", "scenarios,", "optimism.", "imagining", "seeing", "outcome,", "his"],
      },
      {
        target: "“I'm glad you told us, Farah,” he adds.",
        jumbled: ["you", "Farah,”", "told", "“I'm", "adds.", "us,", "glad", "he"],
      },
      {
        target: "Neither fully abandons their original view, but both seem more willing to hold space for the other's perspective now.",
        jumbled: ["hold", "fully", "perspective", "willing", "abandons", "Neither", "to", "original", "their", "the", "but", "more", "seem", "for", "both", "now.", "view,", "other's", "space"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about two friends with different views both softening their positions slightly.",
    mySentenceExample: "Two friends with different views both softened their positions slightly.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Farah sitting on her bed, laptop open showing the original post, reflecting quietly with a calm expression.",
    story:
      "Looking back on the whole decision, I realize how differently things might have gone had I simply followed one friend's advice exclusively. You made the right call, Farah, I think, closing the laptop gently. If I had listened only to Dahlia, I might have overlooked genuine risks Colin had reasonably identified beforehand. Had I listened only to Colin, I likely would have stayed silent, missing a connection that genuinely mattered to someone else. Instead, weighing both perspectives carefully allowed me to find an approach that honored both benefit and caution simultaneously. In the end, this experience taught me that difficult decisions often benefit more from synthesis than from choosing a single, simple answer.",
    questions: [
      { text: "What does Farah realize looking back on this decision?", answer: "How differently things might have gone had she followed one friend's advice exclusively." },
      { text: "What might have happened if she had listened only to Dahlia?", answer: "She might have overlooked genuine risks." },
      { text: "What has Farah learned about difficult decisions?", answer: "That they often benefit more from synthesis than a single simple answer." },
    ],
    trueFalse: [
      { text: "Farah realizes things might have gone differently with one exclusive view.", answer: true },
      { text: "Listening only to Dahlia might have overlooked genuine risks.", answer: true },
      { text: "Farah believes difficult decisions always have one simple answer.", answer: false },
      { text: "Farah learns difficult decisions often benefit from synthesis.", answer: true },
      { text: "Weighing both perspectives helped her honor benefit and caution together.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the whole decision, I realize how differently things might have gone had I simply followed one friend's advice exclusively.",
        jumbled: ["differently", "back", "followed", "Looking", "exclusively.", "things", "realize", "I", "gone", "on", "have", "simply", "decision,", "how", "advice", "whole", "had", "might", "I", "friend's", "the", "one"],
      },
      {
        target: "You made the right call, Farah, I think, closing the laptop gently.",
        jumbled: ["Farah,", "the", "the", "made", "gently.", "call,", "I", "right", "closing", "laptop", "think,", "You"],
      },
      {
        target: "I might have overlooked genuine risks Colin had reasonably identified beforehand.",
        jumbled: ["Colin", "beforehand.", "overlooked", "have", "risks", "identified", "I", "had", "reasonably", "genuine", "might"],
      },
      {
        target: "Had I listened only to Colin, I likely would have stayed silent, missing a connection that genuinely mattered to someone else.",
        jumbled: ["likely", "I", "someone", "silent,", "only", "that", "stayed", "Had", "connection", "I", "else.", "to", "genuinely", "would", "have", "a", "missing", "Colin,", "listened", "to", "mattered"],
      },
      {
        target: "In the end, this experience taught me that difficult decisions often benefit more from synthesis than from choosing a single, simple answer.",
        jumbled: ["decisions", "me", "than", "a", "taught", "benefit", "end,", "simple", "In", "difficult", "often", "choosing", "experience", "answer.", "the", "from", "from", "single,", "more", "synthesis", "that", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from weighing two friends' different advice before deciding.",
    mySentenceExample: "I learned that weighing different advice leads to better decisions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
