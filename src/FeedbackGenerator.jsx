import { useState } from "react";

const TEACHER_NAME_KEY = "sentivo_teacher_name";

const ICON_PROPS = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

function GrammarIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="3" width="12" height="18" rx="2" />
      <line x1="7" y1="8" x2="13" y2="8" />
      <line x1="7" y1="12" x2="11" y2="12" />
      <path d="m14 15 2 2 4-4" />
    </svg>
  );
}

function VocabularyIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 5c2-1 5-1 7 .5v13c-2-1.5-5-1.5-7-.5V5Z" />
      <path d="M17 5c-2-1-5-1-7 .5v13c2-1.5 5-1.5 7-.5V5Z" />
    </svg>
  );
}

function FluencyIcon() {
  return (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="10" x2="3" y2="14" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="11" y1="4" x2="11" y2="20" />
      <line x1="15" y1="7" x2="15" y2="17" />
      <line x1="19" y1="10" x2="19" y2="14" />
    </svg>
  );
}

function ListeningIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="4" height="6" rx="1.5" />
      <rect x="18" y="14" width="4" height="6" rx="1.5" />
    </svg>
  );
}

function ParticipationIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M8 13V6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M11 11V4a1.5 1.5 0 0 1 3 0v7" />
      <path d="M14 11.5V6a1.5 1.5 0 0 1 3 0v8" />
      <path d="M8 13c-1-1-3-1-3 1 0 3 2 7 7 7h2c4 0 6-3 6-6v-3" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 21V4" />
      <path d="M6 4h11l-3 4 3 4H6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

const CATEGORY_ICONS = {
  grammar: GrammarIcon,
  vocabulary: VocabularyIcon,
  fluency: FluencyIcon,
  listening: ListeningIcon,
  participation: ParticipationIcon,
};

const LEVELS = [
  { code: "A1", label: "A1", name: "Beginner" },
  { code: "A2", label: "A2", name: "Elementary" },
  { code: "B1", label: "B1", name: "Intermediate" },
  { code: "B2", label: "B2", name: "Upper-Int." },
  { code: "C1", label: "C1", name: "Advanced" },
  { code: "C2", label: "C2", name: "Proficient" },
];

const CATEGORIES = [
  {
    key: "grammar",
    label: "Grammar",
    levels: {
      A1: {
        strengths: [
          "used basic present tense correctly (am / is / are)",
          "used simple plural forms correctly",
          "asked simple yes/no questions",
          "used this/that/these/those correctly",
          "put words in the right basic order",
          "used simple possessives (my/your/his/her)",
        ],
        improvements: [
          "review am/is/are forms",
          "practice basic plural endings",
          "work on simple word order",
          "review this/that/these/those",
          "practice basic question forms",
          "review simple possessive pronouns",
        ],
      },
      A2: {
        strengths: [
          "used past simple tense correctly",
          "used \"going to\" for future plans",
          "used comparative adjectives correctly",
          "used basic connectors (and, but, because)",
          "used simple prepositions of time and place",
          "formed questions in the past tense",
        ],
        improvements: [
          "review past simple verb forms",
          "practice \"going to\" for future plans",
          "work on comparative adjectives",
          "review prepositions of time and place",
          "practice forming past tense questions",
          "review basic connectors (and, but, because)",
        ],
      },
      B1: {
        strengths: [
          "used the present perfect correctly",
          "used first conditional sentences well",
          "used modal verbs like should and must appropriately",
          "reported what someone said accurately",
          "used a good range of linking words",
          "used past continuous alongside past simple",
        ],
        improvements: [
          "review present perfect usage",
          "practice first conditional sentences",
          "work on modal verbs (should, must, have to)",
          "review reported speech basics",
          "practice linking ideas with more variety",
          "review past continuous vs. past simple",
        ],
      },
      B2: {
        strengths: [
          "used second and third conditionals accurately",
          "used passive voice naturally",
          "used relative clauses to add detail",
          "used a wide range of modal verbs for nuance",
          "structured complex sentences clearly",
          "used a variety of tenses accurately in one passage",
        ],
        improvements: [
          "review second and third conditionals",
          "practice passive voice constructions",
          "work on relative clauses",
          "review modal verbs for speculation and deduction",
          "practice combining ideas into complex sentences",
          "review tense consistency across longer passages",
        ],
      },
      C1: {
        strengths: [
          "used mixed conditionals with precision",
          "used advanced passive constructions naturally",
          "used inversion for emphasis effectively",
          "handled complex subordinate clauses accurately",
          "used a sophisticated range of grammatical structures",
          "self-corrected minor errors while speaking",
        ],
        improvements: [
          "review mixed conditional forms",
          "practice advanced passive constructions",
          "work on inversion for emphasis",
          "review complex subordinate clauses",
          "practice varying sentence structure for style",
          "reduce minor slips in longer, complex sentences",
        ],
      },
      C2: {
        strengths: [
          "used nuanced grammatical structures with near-native accuracy",
          "controlled register through grammar choices effectively",
          "used rare and complex structures naturally",
          "maintained flawless accuracy across long, complex speech",
          "used subtle grammatical nuance to convey precise meaning",
          "adapted grammar fluidly to different contexts and registers",
        ],
        improvements: [
          "refine control of rare, complex structures",
          "polish register-appropriate grammar choices",
          "review subtle nuances in advanced structures",
          "maintain accuracy over very long, complex speech",
          "fine-tune stylistic grammar choices",
          "review the few remaining native-like subtleties",
        ],
      },
    },
  },
  {
    key: "vocabulary",
    label: "Vocabulary",
    levels: {
      A1: {
        strengths: [
          "used basic everyday words correctly",
          "used numbers and colors correctly",
          "named family members correctly",
          "used simple greetings appropriately",
          "used basic classroom and object vocabulary",
          "used simple adjectives (big, small, happy, sad)",
        ],
        improvements: [
          "review basic everyday vocabulary",
          "practice numbers and colors",
          "review family member vocabulary",
          "practice simple greetings",
          "review basic object vocabulary",
          "practice simple adjectives",
        ],
      },
      A2: {
        strengths: [
          "used everyday topic vocabulary (food, travel, shopping)",
          "used basic adjectives to describe things",
          "used simple time expressions correctly",
          "used vocabulary for daily routines",
          "used basic weather vocabulary",
          "used simple vocabulary to describe people",
        ],
        improvements: [
          "expand everyday topic vocabulary",
          "practice describing things with adjectives",
          "review time expressions",
          "expand daily routine vocabulary",
          "practice weather vocabulary",
          "expand vocabulary for describing people",
        ],
      },
      B1: {
        strengths: [
          "used vocabulary to express opinions clearly",
          "used feelings and emotions vocabulary well",
          "used topic-specific vocabulary (work, hobbies, health)",
          "used a good variety of everyday expressions",
          "used vocabulary to describe past experiences",
          "used simple idiomatic expressions naturally",
        ],
        improvements: [
          "expand vocabulary for expressing opinions",
          "practice feelings and emotions vocabulary",
          "expand topic-specific vocabulary",
          "reduce repetition by varying word choice",
          "practice vocabulary for describing experiences",
          "practice simple idiomatic expressions",
        ],
      },
      B2: {
        strengths: [
          "used abstract vocabulary confidently",
          "used idiomatic expressions naturally",
          "varied word choice to avoid repetition",
          "used precise vocabulary for nuanced meaning",
          "used vocabulary to discuss current events and issues",
          "used collocations correctly (make a decision, take a risk)",
        ],
        improvements: [
          "expand abstract vocabulary range",
          "practice using idiomatic expressions naturally",
          "work on varying word choice",
          "practice using more precise vocabulary",
          "expand vocabulary around current events and issues",
          "review common collocations",
        ],
      },
      C1: {
        strengths: [
          "used sophisticated, precise vocabulary",
          "used nuanced word choice to convey subtle meaning",
          "used academic vocabulary appropriately",
          "used a wide range of idiomatic and figurative language",
          "paraphrased effectively using varied vocabulary",
          "used vocabulary to convey tone and attitude",
        ],
        improvements: [
          "refine precision in advanced vocabulary",
          "practice conveying subtle shades of meaning",
          "expand academic vocabulary range",
          "practice varied idiomatic and figurative language",
          "practice paraphrasing with more variety",
          "fine-tune vocabulary for tone and attitude",
        ],
      },
      C2: {
        strengths: [
          "used vocabulary with near-native precision",
          "showed strong awareness of connotation and nuance",
          "used rare and formal vocabulary appropriately",
          "adapted vocabulary fluidly across registers",
          "used sophisticated wordplay and stylistic variety",
          "conveyed subtle, precise meaning effortlessly",
        ],
        improvements: [
          "refine subtle connotations in rare vocabulary",
          "polish register-appropriate word choice",
          "continue building highly specialized vocabulary",
          "fine-tune the last few native-like nuances",
          "review rare stylistic and idiomatic choices",
          "maintain precision in very long, complex discourse",
        ],
      },
    },
  },
  {
    key: "fluency",
    label: "Pronunciation & Fluency",
    levels: {
      A1: {
        strengths: [
          "pronounced basic sounds clearly",
          "said simple words and phrases understandably",
          "copied model pronunciation well",
          "spoke slowly but clearly",
          "pronounced familiar words correctly",
          "attempted new sounds with effort",
        ],
        improvements: [
          "practice basic sound pronunciation",
          "work on saying simple words clearly",
          "practice repeating model pronunciation",
          "build confidence speaking slowly and clearly",
          "review pronunciation of familiar words",
          "keep practicing new, unfamiliar sounds",
        ],
      },
      A2: {
        strengths: [
          "spoke short sentences with reasonable rhythm",
          "used basic word stress correctly",
          "spoke with growing confidence",
          "pronounced everyday vocabulary clearly",
          "read short texts aloud clearly",
          "used rising and falling intonation for questions",
        ],
        improvements: [
          "practice rhythm in short sentences",
          "work on basic word stress",
          "build more speaking confidence",
          "practice pronunciation of everyday vocabulary",
          "practice reading aloud clearly",
          "practice intonation for questions",
        ],
      },
      B1: {
        strengths: [
          "spoke in connected, flowing sentences",
          "used sentence stress to highlight key words",
          "spoke with fewer unnatural pauses",
          "maintained a steady pace in longer answers",
          "pronounced multi-syllable words correctly",
          "linked words smoothly in speech",
        ],
        improvements: [
          "practice connecting ideas smoothly in speech",
          "work on sentence stress for key words",
          "reduce hesitation in longer answers",
          "practice maintaining a steady speaking pace",
          "practice multi-syllable word stress",
          "practice linking words in connected speech",
        ],
      },
      B2: {
        strengths: [
          "used natural rhythm in extended speech",
          "used intonation to convey meaning and attitude",
          "spoke fluently with very few pauses",
          "pronounced complex vocabulary accurately",
          "adjusted pace naturally for emphasis",
          "sounded confident in extended discussion",
        ],
        improvements: [
          "refine rhythm in extended speech",
          "practice using intonation to convey attitude",
          "reduce remaining hesitation in discussion",
          "practice pronunciation of complex vocabulary",
          "work on natural pacing for emphasis",
          "build more confidence in extended discussion",
        ],
      },
      C1: {
        strengths: [
          "used near-native intonation patterns",
          "used stress and pausing for emphasis effectively",
          "spoke fluently and effortlessly for extended periods",
          "handled complex vocabulary with clear pronunciation",
          "adapted tone naturally to context",
          "sounded highly natural in spontaneous speech",
        ],
        improvements: [
          "refine intonation for subtle emphasis",
          "polish pausing and stress patterns",
          "maintain fluency over very long stretches",
          "fine-tune pronunciation of rare vocabulary",
          "practice adapting tone across contexts",
          "reduce the last traces of hesitation",
        ],
      },
      C2: {
        strengths: [
          "spoke with fully natural, native-like fluency",
          "used prosody with sophisticated precision",
          "conveyed subtle meaning through intonation alone",
          "sounded completely natural in any speaking context",
          "handled rapid, spontaneous speech effortlessly",
          "used stylistic variation in tone skillfully",
        ],
        improvements: [
          "refine the subtlest native-like prosody cues",
          "polish stylistic tone variation",
          "continue building effortless spontaneity",
          "maintain precision in very rapid speech",
          "fine-tune the last nuances of natural rhythm",
          "review rare stress patterns in complex speech",
        ],
      },
    },
  },
  {
    key: "listening",
    label: "Listening & Comprehension",
    levels: {
      A1: {
        strengths: [
          "understood simple classroom instructions",
          "recognized familiar words when heard",
          "understood basic greetings and questions",
          "followed short, simple audio with support",
          "matched spoken words to pictures correctly",
          "understood numbers and letters when spoken",
        ],
        improvements: [
          "practice following simple instructions",
          "review recognizing familiar words by ear",
          "practice understanding basic greetings and questions",
          "build listening stamina with short audio",
          "practice matching spoken words to meaning",
          "practice recognizing numbers and letters by ear",
        ],
      },
      A2: {
        strengths: [
          "understood short, simple conversations",
          "followed instructions with more than one step",
          "understood familiar topics when spoken slowly",
          "picked out key words in short audio",
          "understood simple questions without repetition",
          "followed short stories with visual support",
        ],
        improvements: [
          "practice understanding short conversations",
          "work on following multi-step instructions",
          "practice listening at a natural pace",
          "practice picking out key words",
          "reduce need for repeated questions",
          "practice following short stories by ear",
        ],
      },
      B1: {
        strengths: [
          "understood everyday conversations at normal speed",
          "followed the main idea of longer audio",
          "understood conversations on familiar topics",
          "picked up key details in spoken passages",
          "followed simple opinions and viewpoints",
          "understood most of a short talk or podcast",
        ],
        improvements: [
          "practice understanding conversations at natural speed",
          "work on following longer audio for main ideas",
          "practice listening for key details",
          "practice following spoken opinions and viewpoints",
          "build stamina with longer listening passages",
          "practice summarizing what was heard",
        ],
      },
      B2: {
        strengths: [
          "followed extended discussions on familiar topics",
          "understood implied meaning in conversations",
          "followed unfamiliar topics with general understanding",
          "understood different accents reasonably well",
          "picked up on tone and attitude when listening",
          "followed fast-paced natural conversation",
        ],
        improvements: [
          "practice following extended discussions",
          "work on understanding implied meaning",
          "build comprehension of unfamiliar topics",
          "practice listening to different accents",
          "practice picking up on tone and attitude",
          "build stamina with fast-paced conversation",
        ],
      },
      C1: {
        strengths: [
          "understood fast, natural speech easily",
          "followed nuanced arguments in spoken discussion",
          "understood implicit meaning and subtext",
          "followed a wide range of accents confidently",
          "understood humor and wordplay when spoken",
          "followed complex, abstract discussions",
        ],
        improvements: [
          "refine understanding of very fast natural speech",
          "practice following nuanced spoken arguments",
          "practice picking up on implicit meaning",
          "build confidence with less familiar accents",
          "practice understanding humor and wordplay",
          "practice following complex, abstract discussions",
        ],
      },
      C2: {
        strengths: [
          "understood any spoken content with near-native ease",
          "caught subtle humor, irony, and nuance effortlessly",
          "followed rapid, unscripted speech with full comprehension",
          "understood specialized or technical spoken content",
          "picked up on the finest shades of meaning",
          "followed native speakers across all accents and registers",
        ],
        improvements: [
          "maintain precision with highly specialized content",
          "continue refining awareness of the subtlest nuance",
          "build familiarity with less common accents",
          "review comprehension in noisy or difficult conditions",
          "maintain focus during very long native-paced discussion",
          "keep sharpening perception of rare idiomatic speech",
        ],
      },
    },
  },
  {
    key: "participation",
    label: "Participation & Effort",
    levels: {
      A1: {
        strengths: [
          "tried to speak even with very basic words",
          "stayed engaged during simple activities",
          "copied and repeated words bravely",
          "followed along with simple classroom routines",
          "stayed positive when learning something new",
          "used gestures to communicate when needed",
        ],
        improvements: [
          "encourage more attempts to speak, even with mistakes",
          "build comfort repeating new words aloud",
          "encourage staying focused during activities",
          "build confidence following classroom routines",
          "encourage a positive attitude toward mistakes",
          "encourage using words instead of gestures when possible",
        ],
      },
      A2: {
        strengths: [
          "attempted full sentences during practice",
          "asked simple questions when confused",
          "stayed engaged for the whole lesson",
          "tried new words without being asked",
          "worked well with a partner or in a group",
          "showed enthusiasm for the topic",
        ],
        improvements: [
          "encourage attempting full sentences more often",
          "build confidence asking questions when confused",
          "encourage staying engaged throughout",
          "encourage trying new vocabulary independently",
          "build confidence working with a partner or group",
          "encourage more enthusiasm for new topics",
        ],
      },
      B1: {
        strengths: [
          "shared personal opinions during discussion",
          "asked follow-up questions to clarify",
          "stayed engaged throughout longer activities",
          "volunteered answers without being asked",
          "helped classmates during group work",
          "took initiative to practice outside class",
        ],
        improvements: [
          "encourage sharing opinions more confidently",
          "encourage asking clarifying questions",
          "build stamina for longer activities",
          "encourage volunteering answers more often",
          "encourage supporting classmates during group work",
          "encourage practicing more outside class",
        ],
      },
      B2: {
        strengths: [
          "contributed thoughtful ideas to discussions",
          "debated respectfully and persuasively",
          "took a leadership role in group work",
          "gave constructive feedback to classmates",
          "stayed engaged even during challenging topics",
          "showed initiative in choosing what to discuss",
        ],
        improvements: [
          "encourage contributing more thoughtful ideas",
          "build confidence debating and persuading",
          "encourage taking initiative in group settings",
          "encourage giving more constructive feedback",
          "build resilience with challenging topics",
          "encourage more initiative in class discussions",
        ],
      },
      C1: {
        strengths: [
          "contributed sophisticated arguments in discussion",
          "facilitated discussion among classmates",
          "challenged ideas constructively and respectfully",
          "brought fresh perspectives to the topic",
          "engaged critically with complex material",
          "supported less confident classmates",
        ],
        improvements: [
          "encourage even deeper critical engagement",
          "build confidence facilitating group discussion",
          "encourage constructive challenge of others' ideas",
          "encourage bringing more original perspectives",
          "encourage more consistent critical engagement",
          "encourage more mentoring of classmates",
        ],
      },
      C2: {
        strengths: [
          "led sophisticated discussions with ease",
          "engaged with nuance and intellectual depth",
          "balanced confidence with openness to other views",
          "brought expert-level insight to discussions",
          "adapted communication style skillfully to the audience",
          "modeled excellent participation for the class",
        ],
        improvements: [
          "continue refining discussion leadership",
          "maintain openness to differing perspectives",
          "continue bringing expert-level insight",
          "keep adapting style to different audiences",
          "maintain the consistently high level of engagement",
          "continue modeling strong participation",
        ],
      },
    },
  },
];

function greetingPool(name) {
  return [
    `Hi ${name}, great class today!`,
    `Hello ${name}! Here's a quick note about today's lesson.`,
    `Nice work today, ${name}!`,
    `Hi ${name}, thanks for a wonderful lesson today.`,
    `Hey ${name}, here's how today's class went.`,
  ];
}

function closingPool(name) {
  return [
    `Keep up the great work, ${name}!`,
    `You're making excellent progress — well done!`,
    `Great effort today — see you next class!`,
    `Awesome job today, ${name}! Keep it up.`,
    `You should be proud of your progress — nice work!`,
    `Fantastic effort today — keep pushing forward!`,
    `Really solid lesson, ${name} — great job!`,
  ];
}

const TRANSITIONS = [
  "Here's a focus area for next time.",
  "One thing to keep working on:",
  "A good next step for next class:",
  "Going forward, keep an eye on this:",
  "Something worth practicing before next time:",
];

const STRENGTH_TEMPLATES = [
  (label, items) => `${label} was a strength — you ${items}.`,
  (label, items) => `In terms of ${label.toLowerCase()}, you ${items}.`,
  (label, items) => `When it comes to ${label.toLowerCase()}, you ${items}.`,
  (label, items) => `On the ${label.toLowerCase()} side, you ${items}.`,
  (label, items) => `For ${label.toLowerCase()}, you ${items}.`,
];

const IMPROVE_TEMPLATES = [
  (label, items) => `For ${label.toLowerCase()}, try to ${items}.`,
  (label, items) => `With ${label.toLowerCase()}, it would help to ${items}.`,
  (label, items) => `A good focus for ${label.toLowerCase()} is to ${items}.`,
  (label, items) => `On the ${label.toLowerCase()} side, aim to ${items}.`,
  (label, items) => `Let's work on ${label.toLowerCase()} — try to ${items}.`,
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function joinList(items) {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function itemKey(catKey, item) {
  return `${catKey}::${item}`;
}

function teacherDisplayName(rawName) {
  const trimmed = (rawName || "").trim();
  if (!trimmed) return "";
  return `Teacher ${trimmed.replace(/^teacher\s+/i, "")}`;
}

function levelItems(cat, level) {
  return (level && cat.levels[level]) || { strengths: [], improvements: [] };
}

function categoryHasInput(cat, level, selectedStrengths, selectedImprovements) {
  const { strengths, improvements } = levelItems(cat, level);
  return (
    strengths.some((item) => selectedStrengths.has(itemKey(cat.key, item))) ||
    improvements.some((item) => selectedImprovements.has(itemKey(cat.key, item)))
  );
}

function buildFeedback({ studentName, teacherName, level, selectedStrengths, selectedImprovements }) {
  const name = studentName.trim() || "there";
  const greeting = pickRandom(greetingPool(name));
  const closing = pickRandom(closingPool(name));

  const strengthTemplates = shuffle(STRENGTH_TEMPLATES);
  const improveTemplates = shuffle(IMPROVE_TEMPLATES);
  let sIdx = 0;
  let iIdx = 0;

  const strengthSentences = [];
  const improvementSentences = [];

  CATEGORIES.forEach((cat) => {
    const { strengths, improvements } = levelItems(cat, level);
    const pickedS = strengths.filter((item) => selectedStrengths.has(itemKey(cat.key, item)));
    const pickedI = improvements.filter((item) => selectedImprovements.has(itemKey(cat.key, item)));

    if (pickedS.length) {
      const template = strengthTemplates[sIdx % strengthTemplates.length];
      sIdx++;
      strengthSentences.push(template(cat.label, joinList(pickedS)));
    }

    if (pickedI.length) {
      const template = improveTemplates[iIdx % improveTemplates.length];
      iIdx++;
      improvementSentences.push(template(cat.label, joinList(pickedI)));
    }
  });

  const paragraphs = [greeting];

  paragraphs.push(
    strengthSentences.length
      ? strengthSentences.join(" ")
      : "You worked hard and stayed engaged throughout the lesson."
  );

  if (improvementSentences.length) {
    paragraphs.push(`${pickRandom(TRANSITIONS)} ${improvementSentences.join(" ")}`);
  }

  paragraphs.push(closing);

  const signature = teacherDisplayName(teacherName);
  if (signature) paragraphs.push(`— ${signature}`);

  return paragraphs.join("\n\n");
}

function ChipList({ catKey, items, selected, onToggle, tone }) {
  return (
    <div className="fbg-chip-row">
      {items.map((item) => {
        const key = itemKey(catKey, item);
        const active = selected.has(key);
        return (
          <button
            key={key}
            type="button"
            className={`fbg-chip fbg-chip--${tone}${active ? " is-active" : ""}`}
            onClick={() => onToggle(key)}
            aria-pressed={active}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default function FeedbackGenerator() {
  const [teacherName, setTeacherName] = useState(() => localStorage.getItem(TEACHER_NAME_KEY) || "");
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState(() => new Set());
  const [selectedImprovements, setSelectedImprovements] = useState(() => new Set());
  const [step, setStep] = useState(0);
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);

  const totalCategorySteps = CATEGORIES.length;
  const reviewStep = totalCategorySteps + 1;
  const isNamesStep = step === 0;
  const isReviewStep = step === reviewStep;
  const currentCategory = !isNamesStep && !isReviewStep ? CATEGORIES[step - 1] : null;
  const CurrentCategoryIcon = currentCategory ? CATEGORY_ICONS[currentCategory.key] : null;
  const currentLevelItems = currentCategory ? levelItems(currentCategory, level) : null;

  function toggleStrength(key) {
    setSelectedStrengths((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function toggleImprovement(key) {
    setSelectedImprovements((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function handleSelectLevel(code) {
    if (code !== level) {
      setSelectedStrengths(new Set());
      setSelectedImprovements(new Set());
    }
    setLevel(code);
  }

  function goNext() {
    if (isNamesStep && !level) return;
    setStep((s) => Math.min(s + 1, reviewStep));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleGenerate() {
    const text = buildFeedback({ studentName, teacherName, level, selectedStrengths, selectedImprovements });
    setGeneratedText(text);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleRestart() {
    setSelectedStrengths(new Set());
    setSelectedImprovements(new Set());
    setStudentName("");
    setLevel("");
    setGeneratedText("");
    setCopied(false);
    setStep(0);
  }

  const studentTrimmed = studentName.trim();
  const teacherDisplay = teacherDisplayName(teacherName);
  const currentSatisfied = currentCategory
    ? categoryHasInput(currentCategory, level, selectedStrengths, selectedImprovements)
    : true;

  return (
    <div className="fbg-shell">
      <style>{CSS}</style>
      <div className="fbg-wizard">
        <div className="fbg-header">
          <div className="fbg-header-blob" />
          <div className="fbg-hero">
            <span className="fbg-eyebrow">Sentenco · Homeroom</span>
            <h1 className="fbg-title">Lesson Feedback</h1>
            <p className="fbg-sub">One category at a time — pick what applies.</p>
          </div>
        </div>

        {step > 0 && (
          <div className="fbg-stepper">
            {CATEGORIES.map((cat, idx) => {
              const nodeStep = idx + 1;
              const complete = categoryHasInput(cat, level, selectedStrengths, selectedImprovements);
              const isCurrent = step === nodeStep;
              const CatIcon = CATEGORY_ICONS[cat.key];
              return (
                <button
                  type="button"
                  key={cat.key}
                  className={`fbg-step-node${isCurrent ? " is-current" : ""}${complete ? " is-complete" : ""}`}
                  onClick={() => setStep(nodeStep)}
                >
                  <span className="fbg-step-circle">{complete && !isCurrent ? <CheckIcon /> : <CatIcon />}</span>
                  <span className="fbg-step-node-label">{cat.label.split(" ")[0]}</span>
                </button>
              );
            })}
            <div className={`fbg-step-node${isReviewStep ? " is-current" : ""}`}>
              <span className="fbg-step-circle"><ReviewIcon /></span>
              <span className="fbg-step-node-label">Review</span>
            </div>
          </div>
        )}

        <div className="fbg-step-card">
          {isNamesStep && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon">👋</span>
                <div className="fbg-step-heading-text">
                  <h2>Let's get started</h2>
                  <p>Who is this feedback for?</p>
                </div>
              </div>
              <div className="fbg-names">
                <label className="fbg-field">
                  <span className="fbg-label">Your name</span>
                  <input
                    type="text"
                    className="fbg-input"
                    value={teacherName}
                    onChange={(e) => { setTeacherName(e.target.value); localStorage.setItem(TEACHER_NAME_KEY, e.target.value); }}
                    onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
                    placeholder="Teacher name"
                  />
                </label>
                <label className="fbg-field">
                  <span className="fbg-label">Student name</span>
                  <input
                    type="text"
                    className="fbg-input"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
                    placeholder="Who was this lesson for?"
                  />
                </label>
                <div className="fbg-field">
                  <span className="fbg-label">Student level</span>
                  <div className="fbg-level-row">
                    {LEVELS.map((lvl) => (
                      <button
                        type="button"
                        key={lvl.code}
                        className={`fbg-level-chip${level === lvl.code ? " is-active" : ""}`}
                        onClick={() => handleSelectLevel(lvl.code)}
                      >
                        <span className="fbg-level-code">{lvl.label}</span>
                        <span className="fbg-level-name">{lvl.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`fbg-step-hint${level ? " is-satisfied" : ""}`}>
                {level ? "✓ Nice — ready to continue" : "Pick the student's level to continue"}
              </div>
              <div className="fbg-step-nav">
                <span />
                <button type="button" className="fbg-btn-next" onClick={goNext} disabled={!level}>Continue →</button>
              </div>
            </>
          )}

          {currentCategory && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon"><CurrentCategoryIcon /></span>
                <div className="fbg-step-heading-text">
                  <h2>{currentCategory.label} <span className="fbg-step-heading-level">{level}</span></h2>
                  <p>Pick anything that applies.</p>
                </div>
              </div>

              <div className="fbg-cols-head">
                <span className="fbg-cols-head-item fbg-cols-head-item--strength">✓ What went well</span>
                <span className="fbg-cols-head-item fbg-cols-head-item--improve">→ What to work on</span>
              </div>
              <div className="fbg-cat-cols">
                <ChipList catKey={currentCategory.key} items={currentLevelItems.strengths} selected={selectedStrengths} onToggle={toggleStrength} tone="strength" />
                <ChipList catKey={currentCategory.key} items={currentLevelItems.improvements} selected={selectedImprovements} onToggle={toggleImprovement} tone="improve" />
              </div>

              <div className={`fbg-step-hint${currentSatisfied ? " is-satisfied" : ""}`}>
                {currentSatisfied ? "✓ Nice — ready for the next category" : "Pick at least one quality above"}
              </div>

              <div className="fbg-step-nav">
                <button type="button" className="fbg-btn-back" onClick={goBack}>← Back</button>
                <button type="button" className="fbg-btn-next" onClick={goNext} disabled={!currentSatisfied}>
                  {step === totalCategorySteps ? "Review →" : "Next →"}
                </button>
              </div>
            </>
          )}

          {isReviewStep && !generatedText && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon"><ReviewIcon /></span>
                <div className="fbg-step-heading-text">
                  <h2>Ready to generate</h2>
                  <p>Here's a quick summary — tap Edit to change anything.</p>
                </div>
              </div>
              <div className="fbg-review-list">
                {CATEGORIES.map((cat, idx) => {
                  const { strengths, improvements } = levelItems(cat, level);
                  const stCount = strengths.filter((item) => selectedStrengths.has(itemKey(cat.key, item))).length;
                  const imCount = improvements.filter((item) => selectedImprovements.has(itemKey(cat.key, item))).length;
                  const RowIcon = CATEGORY_ICONS[cat.key];
                  return (
                    <div className="fbg-review-row" key={cat.key}>
                      <div className="fbg-review-row-main">
                        <span className="fbg-cat-icon" aria-hidden="true"><RowIcon /></span>
                        <span className="fbg-review-row-label">{cat.label}</span>
                        <span className="fbg-review-row-counts">
                          {stCount} went well · {imCount} to work on
                        </span>
                      </div>
                      <button type="button" className="fbg-review-edit" onClick={() => setStep(idx + 1)}>Edit</button>
                    </div>
                  );
                })}
              </div>
              <div className="fbg-step-nav">
                <button type="button" className="fbg-btn-back" onClick={goBack}>← Back</button>
                <button type="button" className="fbg-generate-btn" onClick={handleGenerate}>✨ Generate feedback</button>
              </div>
            </>
          )}

          {isReviewStep && generatedText && (
            <div className="fbg-preview-card">
              <div className="fbg-preview-accent" />
              <div className="fbg-preview-head">
                <span className="fbg-preview-label">Preview</span>
                <div className="fbg-preview-actions">
                  <button type="button" className="fbg-generate-btn" onClick={handleGenerate}>🔁 Regenerate</button>
                  <button type="button" className="fbg-copy-btn" onClick={handleCopy}>{copied ? "✓ Copied" : "⧉ Copy"}</button>
                </div>
              </div>
              {(studentTrimmed || teacherDisplay || level) && (
                <div className="fbg-preview-meta">
                  {studentTrimmed && <span>To {studentTrimmed}</span>}
                  {studentTrimmed && teacherDisplay && <span className="fbg-preview-meta-sep">·</span>}
                  {teacherDisplay && <span>From {teacherDisplay}</span>}
                  {(studentTrimmed || teacherDisplay) && level && <span className="fbg-preview-meta-sep">·</span>}
                  {level && <span>Level {level}</span>}
                </div>
              )}
              <pre className="fbg-preview">{generatedText}</pre>
              <div className="fbg-preview-footer">
                <button type="button" className="fbg-edit-answers-btn" onClick={() => setGeneratedText("")}>← Edit answers</button>
                <button type="button" className="fbg-restart-btn" onClick={handleRestart}>↺ Start over</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.fbg-shell {
  min-height: 100vh;
  background: #FBF4F1;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  padding: 28px 20px;
}
.fbg-shell * { box-sizing: border-box; }

.fbg-wizard { max-width: 640px; margin: 0 auto; }

.fbg-header {
  background: #1B2A4A; border-radius: 22px; padding: 26px 24px 28px; margin-bottom: 22px;
  position: relative; overflow: hidden; box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.fbg-header-blob {
  position: absolute; width: 200px; height: 200px; border-radius: 50%;
  background: #FF6B4A; opacity: 0.16; top: -80px; right: -60px; pointer-events: none;
}
.fbg-hero { position: relative; }
.fbg-eyebrow {
  display: inline-block; font-weight: 700; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #FF6B4A; background: rgba(255,107,74,0.18); border-radius: 999px; padding: 4px 12px; margin-bottom: 10px;
}
.fbg-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 600; margin: 0 0 5px; letter-spacing: -0.01em; color: #FFFFFF; }
.fbg-sub { font-size: 13px; color: #B9C3DC; margin: 0; }

.fbg-stepper { display: flex; align-items: flex-start; justify-content: center; gap: 0; margin-bottom: 20px; }
.fbg-step-node {
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  position: relative; flex: 1; background: none; border: none; cursor: pointer; padding: 0;
}
.fbg-step-node:not(:last-child)::after {
  content: ""; position: absolute; top: 17px; left: 50%; width: 100%; height: 2px;
  background: #EDE1DB; z-index: 0;
}
.fbg-step-node.is-complete:not(:last-child)::after { background: #2FA66B; }
.fbg-step-circle {
  position: relative; z-index: 1; width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  background: #fff; border: 2px solid #EDE1DB; color: #5A6B92;
  transition: all 0.15s;
}
.fbg-step-circle svg { width: 16px; height: 16px; }
.fbg-step-node.is-current .fbg-step-circle {
  border-color: #FF6B4A;
  background: #FF6B4A;
  color: #fff;
  box-shadow: 0 4px 12px rgba(255,107,74,0.35);
  transform: scale(1.08);
}
.fbg-step-node.is-complete .fbg-step-circle { border-color: #2FA66B; background: rgba(47,166,107,0.12); color: #1F7A4C; }
.fbg-step-node-label { font-size: 10px; font-weight: 700; color: #5A6B92; text-align: center; }
.fbg-step-node.is-current .fbg-step-node-label { color: #FF6B4A; }

.fbg-step-card {
  background: #fff;
  border: 1px solid #EDE1DB;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(27,42,74,0.08);
  min-height: 380px;
  display: flex;
  flex-direction: column;
}

.fbg-step-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
.fbg-step-heading-icon {
  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 21px;
  background: #FDECE5; color: #FF6B4A;
}
.fbg-step-heading-icon svg { width: 22px; height: 22px; }
.fbg-step-heading-text h2 { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 8px; color: #1B2A4A; }
.fbg-step-heading-level {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700;
  color: #E0502F; background: #FDECE5; border-radius: 999px;
  padding: 2px 9px;
}
.fbg-step-heading-text p { font-size: 12.5px; color: #5A6B92; margin: 2px 0 0; }

.fbg-names { display: flex; flex-direction: column; gap: 14px; }
.fbg-field { display: flex; flex-direction: column; gap: 5px; }
.fbg-label { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12px; color: #5A6B92; }
.fbg-input {
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: #1B2A4A;
  background: #FBF4F1;
  border: 1.5px solid #EDE1DB;
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
}
.fbg-input:focus { border-color: #FF6B4A; }
.fbg-input::placeholder { color: #A8A0B0; }

.fbg-level-row { display: flex; flex-wrap: wrap; gap: 8px; }
.fbg-level-chip {
  display: flex; flex-direction: column; align-items: flex-start; gap: 1px;
  font-family: 'Inter', sans-serif;
  background: #FBF4F1;
  border: 1.5px solid #EDE1DB;
  border-radius: 12px;
  padding: 7px 12px;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, box-shadow 0.12s, transform 0.12s;
}
.fbg-level-chip:hover { border-color: #D8C7BC; transform: translateY(-1px); }
.fbg-level-code { font-weight: 700; font-size: 13px; color: #1B2A4A; }
.fbg-level-name { font-weight: 600; font-size: 10.5px; color: #5A6B92; }
.fbg-level-chip.is-active {
  background: #FDECE5;
  border-color: #FF6B4A;
  box-shadow: 0 3px 10px rgba(255,107,74,0.18);
}
.fbg-level-chip.is-active .fbg-level-code { color: #E0502F; }
.fbg-level-chip.is-active .fbg-level-name { color: #E0502F; }

.fbg-cols-head { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 10px; }
.fbg-cols-head-item {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px;
  padding: 7px 13px; border-radius: 999px; width: fit-content;
}
.fbg-cols-head-item--strength { background: rgba(47,166,107,0.11); color: #1F7A4C; }
.fbg-cols-head-item--improve { background: rgba(224,138,60,0.11); color: #A8611E; }

.fbg-cat-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; margin-bottom: 16px; }
.fbg-chip-row { display: flex; flex-wrap: wrap; align-content: flex-start; gap: 6px; }
.fbg-cat-icon { display: inline-flex; color: #5A6B92; }
.fbg-cat-icon svg { width: 15px; height: 15px; }

.fbg-chip {
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #5A6B92;
  background: #FBF4F1;
  border: 1.5px solid #EDE1DB;
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, color 0.12s, box-shadow 0.12s, transform 0.12s;
}
.fbg-chip:hover { border-color: #D8C7BC; transform: translateY(-1px); box-shadow: 0 4px 10px rgba(27,42,74,0.08); }
.fbg-chip--strength.is-active {
  background: rgba(47,166,107,0.14);
  border-color: #2FA66B; color: #1F7A4C;
  box-shadow: 0 3px 10px rgba(47,166,107,0.16);
}
.fbg-chip--improve.is-active {
  background: rgba(224,138,60,0.14);
  border-color: #E08A3C; color: #A8611E;
  box-shadow: 0 3px 10px rgba(224,138,60,0.16);
}
.fbg-chip--strength.is-active::before { content: "✓ "; }
.fbg-chip--improve.is-active::before { content: "→ "; }

.fbg-step-hint { font-size: 12px; font-weight: 600; color: #C24E3A; margin-bottom: 4px; }
.fbg-step-hint.is-satisfied { color: #2FA66B; }

.fbg-step-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 16px; }
.fbg-btn-back {
  background: none; border: 1.5px solid #EDE1DB; color: #5A6B92;
  border-radius: 999px; padding: 9px 18px; font-weight: 700; font-size: 12.5px;
  font-family: 'Inter', sans-serif; cursor: pointer; transition: border-color 0.15s;
}
.fbg-btn-back:hover { border-color: #D8C7BC; }
.fbg-btn-next {
  background: #FF6B4A; color: #fff; border: none;
  border-radius: 999px; padding: 9px 22px; font-weight: 700; font-size: 12.5px;
  font-family: 'Inter', sans-serif; cursor: pointer;
  box-shadow: 0 6px 16px rgba(255,107,74,0.28);
  transition: filter 0.15s, transform 0.15s, opacity 0.15s, box-shadow 0.15s;
}
.fbg-btn-next:hover:not(:disabled) { filter: brightness(0.95); transform: translateY(-1px); }
.fbg-btn-next:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }

.fbg-review-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
.fbg-review-row {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: #FBF4F1; border: 1px solid #EDE1DB; border-radius: 14px;
  padding: 10px 14px;
}
.fbg-review-row-main { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.fbg-review-row-label { font-family: 'Fraunces', serif; font-weight: 600; font-size: 13px; color: #1B2A4A; }
.fbg-review-row-counts { font-size: 11.5px; color: #5A6B92; font-weight: 600; }
.fbg-review-edit {
  background: none; border: none; color: #FF6B4A; font-weight: 700; font-size: 12px;
  cursor: pointer; font-family: 'Inter', sans-serif; padding: 4px 8px; flex-shrink: 0;
}
.fbg-review-edit:hover { text-decoration: underline; }

.fbg-preview-card { position: relative; overflow: hidden; }
.fbg-preview-accent {
  position: absolute; top: -24px; left: -24px; right: -24px; height: 5px;
  background: #FF6B4A;
}
.fbg-preview-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
.fbg-preview-label {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12px;
  letter-spacing: 0.06em; text-transform: uppercase; color: #5A6B92;
}
.fbg-preview-actions { display: flex; gap: 8px; }
.fbg-generate-btn, .fbg-copy-btn {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff;
  border: none; border-radius: 999px; padding: 9px 16px; cursor: pointer;
  transition: filter 0.15s, transform 0.15s; white-space: nowrap;
}
.fbg-generate-btn { background: #FF6B4A; box-shadow: 0 6px 16px rgba(255,107,74,0.28); }
.fbg-copy-btn { background: #1B2A4A; }
.fbg-generate-btn:hover, .fbg-copy-btn:hover { filter: brightness(0.95); transform: translateY(-1px); }

.fbg-preview-meta { font-size: 12px; font-weight: 600; color: #5A6B92; display: flex; gap: 6px; margin-top: 10px; }
.fbg-preview-meta-sep { color: #D8C7BC; }

.fbg-preview {
  margin: 12px 0 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  line-height: 1.7;
  color: #1B2A4A;
  background: #FBF4F1;
  border: 1px solid #EDE1DB;
  border-radius: 14px;
  padding: 16px 18px;
  min-height: 220px;
}
.fbg-preview-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.fbg-edit-answers-btn {
  background: none; border: none; color: #5A6B92; font-weight: 700; font-size: 12px;
  cursor: pointer; font-family: 'Inter', sans-serif; padding: 0;
}
.fbg-edit-answers-btn:hover { color: #FF6B4A; }
.fbg-restart-btn {
  background: none; border: none; color: #5A6B92; font-weight: 700; font-size: 12px;
  cursor: pointer; font-family: 'Inter', sans-serif; padding: 0; white-space: nowrap;
}
.fbg-restart-btn:hover { color: #C24E3A; }

@media (max-width: 600px) {
  .fbg-names, .fbg-cat-cols, .fbg-cols-head { grid-template-columns: 1fr; }
  .fbg-step-node-label { display: none; }
}
`;
