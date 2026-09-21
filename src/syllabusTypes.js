import { supabase } from "./supabaseClient";
import { VOCAB_LESSONS } from "./VocabularyGames";
import { ACTIVITY_TYPES } from "./WritingActivities";
import { ARTICLES } from "./articlesData";
import { BOOK_AGE_TRACK } from "./Library";
import RELAY_TRACKS from "./relayTracks";
import ASCEND_TRACKS from "./ascendTracks";
import SHIFT_TRACKS from "./shiftTracks";
import { UNITS as KIDS_UNITS } from "./kidsCurriculumData";
import { TEENS_UNITS } from "./teensCurriculumData";
import { ADULTS_UNITS } from "./adultsCurriculumData";
import { READY_LESSONS as KIDS_READY_LESSONS } from "./LevelPage";
import { READY_LESSONS as TRACK_READY_LESSONS } from "./TrackLevelPage";
import VT_TENSES from "./vtTracks";
import POS_TOPICS from "./posTracks";
import SP_LESSONS from "./spTracks";
import MD_LESSONS from "./mdTracks";
import CND_LESSONS from "./cndTracks";
import PV_LESSONS from "./pvTracks";
import QF_LESSONS from "./qfTracks";
import NAQ_LESSONS from "./naqTracks";
import PP_LESSONS from "./ppTracks";
import CS_LESSONS from "./csTracks";
import RS_LESSONS from "./rsTracks";
import RC_LESSONS from "./rcTracks";
import GI_LESSONS from "./giTracks";
import PR_LESSONS from "./prTracks";
import PE_LESSONS from "./peTracks";

export const SYLLABUS_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const SYLLABUS_AGE_TRACKS = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

// A default-size cycle: enough sessions to make real progress on a goal
// without asking the teacher to plan further ahead than they can predict a
// student's pace. A cycle is a fixed block -- see CYCLE_LENGTH below -- not
// an open-ended course, so the number is deliberately not "however many you
// want" the way the old generator's raw count field was.
export const CYCLE_LENGTH = 12;
export const SESSION_DURATION_MIN = 25;

// What the syllabus is actually FOR -- this is what makes two students at
// the same level get different syllabi, per the personalized-syllabus spec.
// "other" pairs with a free-text field (student_goal_other) rather than
// forcing every real reason into one of these buckets.
export const SYLLABUS_GOAL_OPTIONS = [
  { key: "conversational", label: "Become conversational" },
  { key: "workplace", label: "Improve workplace English" },
  { key: "interview", label: "Prepare for an interview" },
  { key: "academic", label: "Study abroad / academic English" },
  { key: "exam", label: "Pass an English exam" },
  { key: "travel", label: "Travel" },
  { key: "social", label: "Social and daily life" },
  { key: "customer_service", label: "Customer service / clients" },
  { key: "other", label: "Other" },
];

// Reuses the same categories as SYLLABUS_FOCUS_OPTIONS minus "balanced" --
// a weak skill IS a focus, just framed as a teacher's observation about the
// student rather than an abstract lesson-mix preference.
export const WEAK_SKILL_OPTIONS = [
  { key: "grammar", label: "Grammar" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "speaking", label: "Speaking" },
  { key: "reading", label: "Reading" },
  { key: "writing", label: "Writing" },
  { key: "articles", label: "Reading comprehension (articles)" },
];

// Separate from the Goal -- Goal is the outcome the student wants, this is
// WHERE they'll actually use English day to day. Two students who both want
// to "become conversational" but need it for work vs. travel are still
// different students, worth capturing even though (like Interests) it's
// reference-only until the content library is tagged by real-life context.
export const SYLLABUS_CONTEXT_OPTIONS = [
  { key: "work", label: "Work" },
  { key: "travel", label: "Travel" },
  { key: "social", label: "Social and daily life" },
  { key: "academic", label: "Academic" },
  { key: "exam", label: "Exam" },
  { key: "customer_service", label: "Customer service / clients" },
  { key: "other", label: "Other" },
];

export function goalLabel(goalKey, goalOther) {
  if (goalKey === "other") return (goalOther || "").trim() || "their own goal";
  return SYLLABUS_GOAL_OPTIONS.find((g) => g.key === goalKey)?.label || "their own goal";
}

export function weakSkillLabel(weakSkillKey) {
  return WEAK_SKILL_OPTIONS.find((w) => w.key === weakSkillKey)?.label || null;
}

export function contextLabel(needKey, needOther) {
  if (!needKey) return null;
  if (needKey === "other") return (needOther || "").trim() || null;
  return SYLLABUS_CONTEXT_OPTIONS.find((n) => n.key === needKey)?.label || null;
}

// A one-line reason the teacher can read at a glance -- the "why" behind
// this specific session mix, so the syllabus doesn't just look like a random
// lesson list. Deliberately plain: this describes the SKILL WEIGHTING the
// generator actually applied (weak-skill focus + grammar/vocab floor), not
// a claim that individual lessons were hand-picked for the student's exact
// real-life scenario -- the underlying content library isn't tagged by
// context (work/travel/social), native language, or exam format yet, so
// overpromising there would be misleading. See project_syllabus_maker_idea
// memory for that gap.
export function buildRationale({ studentName, goalKey, goalOther, weakSkillKey, level, needKey, needOther, examName }) {
  const name = (studentName || "").trim() || "This student";
  const goal = goalLabel(goalKey, goalOther);
  const weakLabel = weakSkillLabel(weakSkillKey);
  const context = contextLabel(needKey, needOther);
  let line = `Built for ${name}. Goal: ${goal}`;
  line += context ? `, mainly for ${context.toLowerCase()}.` : ".";
  if (goalKey === "exam" && (examName || "").trim()) {
    line += ` Preparing for ${examName.trim()}.`;
  }
  if (level === "A1") {
    line += " Starts with real beginner curriculum lessons where they're available, before moving into the standard mix.";
  }
  if (weakLabel) {
    line += ` Extra ${weakLabel.toLowerCase()} practice is mixed in since that's the area flagged as needing the most work.`;
  }
  return line;
}

// One choice per real content category, plus Balanced. No "Mostly" prefix
// on the labels -- picking a category as the focus already implies "mostly
// this one." Grammar/Vocabulary can be picked as a focus too, on top of
// their non-negotiable floor below, not instead of it.
export const SYLLABUS_FOCUS_OPTIONS = [
  { key: "balanced", label: "Balanced" },
  { key: "grammar", label: "Grammar" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "speaking", label: "Speaking" },
  { key: "reading", label: "Reading" },
  { key: "writing", label: "Writing" },
  { key: "articles", label: "Articles" },
];

const FOCUS_POOL = ["grammar", "vocabulary", "speaking", "reading", "writing", "articles"];

// Grammar + Vocabulary are the non-negotiable floor -- this fraction of the
// total sessions is grammar/vocab no matter what focus is picked. It
// shrinks as level rises (more foundation needed early, less later) but
// never hits zero, even a C2 student still needs precision-level grammar.
// Picking "Grammar" or "Vocabulary" as the focus adds MORE on top of this
// floor, it never reduces it.
const LEVEL_FLOOR = {
  A1: 0.55,
  A2: 0.50,
  B1: 0.35,
  B2: 0.30,
  C1: 0.20,
  C2: 0.15,
};

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
export function nextLevel(level) {
  const i = LEVEL_ORDER.indexOf(level);
  return i >= 0 && i < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[i + 1] : null;
}

export function newSession(overrides = {}) {
  return {
    id: crypto.randomUUID(),
    title: "",
    notes: "",
    skill: "custom",
    source: "custom",
    href: "",
    completed: false,
    requested: false,
    ...overrides,
  };
}

export function newSyllabusSessions() {
  return [newSession()];
}

function emptyOffsets() {
  return { grammar: 0, vocabulary: 0, writing: 0, articles: 0, reading: 0, curriculum: 0, speakingSystem: null, speakingTrackIdx: 0, speakingLessonIdx: 0 };
}

// ---------- Grammar (Foundation modules, fixed pedagogical order) ----------
// Mirrors the BED-numbered module list in Library.jsx's Grammar Garden --
// foundation tier first (the 14 core modules), supplementary after, so a
// syllabus always teaches the core grammar points before the deep cuts.
// Not level-specific (the modules themselves span A1-C2), so this list
// carries over unchanged across a follow-up syllabus at any level.
const GRAMMAR_MODULES = [
  { title: "Parts of Speech", href: "/library/grammar/parts-of-speech", tier: "foundation" },
  { title: "Verb Tenses", href: "/library/grammar/verb-tenses", tier: "foundation" },
  { title: "Sentence Patterns", href: "/library/grammar/sentence-patterns", tier: "foundation" },
  { title: "Modals", href: "/library/grammar/modals", tier: "foundation" },
  { title: "Conditionals", href: "/library/grammar/conditionals", tier: "foundation" },
  { title: "Passive Voice", href: "/library/grammar/passive-voice", tier: "foundation" },
  { title: "Question Formation", href: "/library/grammar/question-formation", tier: "foundation" },
  { title: "Nouns, Articles & Quantifiers", href: "/library/grammar/nouns-articles-quantifiers", tier: "foundation" },
  { title: "Pronouns & Possessives", href: "/library/grammar/pronouns-possessives", tier: "foundation" },
  { title: "Comparatives & Superlatives", href: "/library/grammar/comparatives-superlatives", tier: "foundation" },
  { title: "Reported Speech", href: "/library/grammar/reported-speech", tier: "foundation" },
  { title: "Relative Clauses", href: "/library/grammar/relative-clauses", tier: "foundation" },
  { title: "Gerunds & Infinitives", href: "/library/grammar/gerunds-infinitives", tier: "foundation" },
  { title: "Prepositions", href: "/library/grammar/prepositions", tier: "foundation" },
  { title: "Punctuation Essentials", href: "/library/grammar/punctuation-essentials", tier: "supplementary" },
  { title: "Conjunctions", href: "/library/grammar/conjunctions", tier: "supplementary" },
  { title: "Linking Words", href: "/library/grammar/linking-words", tier: "supplementary" },
  { title: "Word Order", href: "/library/grammar/word-order", tier: "supplementary" },
  { title: "Subject-Verb Agreement", href: "/library/grammar/subject-verb-agreement", tier: "supplementary" },
];

// Each Foundation-tier module is actually a multi-lesson hub (a tense, a
// modal function, a conditional type, etc. per lesson, at /:code under the
// module's own route) -- a syllabus session naming just the hub ("Verb
// Tenses") isn't specific enough to teach from and doesn't point anywhere
// useful. This flattens every module down to its real individual lessons,
// each with the exact route to open. Verb Tenses and Parts of Speech pair
// each topic with a Discussion (A) and Test (B) lesson -- the syllabus uses
// the Discussion lesson, since that's what actually introduces the
// language point. Modules with no registry here (Conjunctions, Linking
// Words, Word Order, Subject-Verb Agreement) are already a single specific
// lesson, so the module entry itself is used unchanged.
const GRAMMAR_LESSON_POOLS = {
  "verb-tenses": VT_TENSES.map((t) => ({ title: t.tenseName, href: `/library/grammar/verb-tenses/${t.lessonA.code}` })),
  "parts-of-speech": POS_TOPICS.map((t) => ({ title: t.topicName, href: `/library/grammar/parts-of-speech/${t.lessonA.code}` })),
  "sentence-patterns": SP_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/sentence-patterns/${l.code}` })),
  "modals": MD_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/modals/${l.code}` })),
  "conditionals": CND_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/conditionals/${l.code}` })),
  "passive-voice": PV_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/passive-voice/${l.code}` })),
  "question-formation": QF_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/question-formation/${l.code}` })),
  "nouns-articles-quantifiers": NAQ_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/nouns-articles-quantifiers/${l.code}` })),
  "pronouns-possessives": PP_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/pronouns-possessives/${l.code}` })),
  "comparatives-superlatives": CS_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/comparatives-superlatives/${l.code}` })),
  "reported-speech": RS_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/reported-speech/${l.code}` })),
  "relative-clauses": RC_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/relative-clauses/${l.code}` })),
  "gerunds-infinitives": GI_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/gerunds-infinitives/${l.code}` })),
  "prepositions": PR_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/prepositions/${l.code}` })),
  "punctuation-essentials": PE_LESSONS.map((l) => ({ title: l.title, href: `/library/grammar/punctuation-essentials/${l.code}` })),
};

const GRAMMAR_LESSON_LIST = GRAMMAR_MODULES.flatMap((mod) => {
  const slug = mod.href.split("/").pop();
  const pool = GRAMMAR_LESSON_POOLS[slug];
  return pool && pool.length > 0 ? pool : [{ title: mod.title, href: mod.href }];
});

function buildGrammarSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const item = GRAMMAR_LESSON_LIST[(startIndex + i) % GRAMMAR_LESSON_LIST.length];
    return newSession({ title: item.title, notes: "", href: item.href, skill: "grammar", source: "grammar" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Vocabulary (Word Bank lessons, fixed order) ----------
function buildVocabSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const lesson = VOCAB_LESSONS[(startIndex + i) % VOCAB_LESSONS.length];
    return newSession({ title: lesson.title, notes: lesson.blurb || "", href: lesson.href || "", skill: "vocabulary", source: "vocabulary" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Speaking (Relay/Shift/Ascend, picked by level) ----------
// Forge is deliberately excluded -- its content is mid-rebuild as of
// 2026-08-25, see project_speaking_trio_rebuild_plan.md. Re-add once the
// new lessons land.
function speakingSystemForLevel(level, ageTrack) {
  if (level === "A2") return { tracks: RELAY_TRACKS.filter((t) => t.audience === ageTrack), system: "Relay" };
  if (level === "B1" || level === "B2") return { tracks: SHIFT_TRACKS, system: "Shift" };
  if (level === "C1" || level === "C2") {
    // Ascend's C1-C2 tracks (Business + AI, Law & Advocacy, Corporate
    // Governance & Risk) are adult-professional content by subject matter,
    // not appropriate for Kids/Teens even though the track data itself
    // has no age field. Kids/Teens at C1-C2 get the honest placeholder
    // instead of business/law material.
    if (ageTrack !== "adults") return { tracks: [], system: null };
    return { tracks: ASCEND_TRACKS, system: "Ascend" };
  }
  return { tracks: [], system: null };
}

function buildSpeakingSessions(count, level, ageTrack, startTrackIdx, startLessonIdx) {
  const { tracks, system } = speakingSystemForLevel(level, ageTrack);
  if (tracks.length === 0 || count === 0) {
    const sessions = Array.from({ length: count }, () => newSession({
      title: "No structured speaking track for this level yet",
      notes: "Fill in with your own speaking practice, or check Forge/Relay/Shift/Ascend directly for what's closest.",
      skill: "speaking",
      source: "placeholder",
    }));
    return { sessions, system, trackIdx: startTrackIdx, lessonIdx: startLessonIdx };
  }
  const sessions = [];
  let trackIdx = startTrackIdx % tracks.length;
  let lessonIdx = startLessonIdx;
  let guard = 0;
  while (sessions.length < count && guard < tracks.length * 30) {
    const track = tracks[trackIdx];
    const lesson = track.lessons[lessonIdx];
    if (lesson) {
      sessions.push(newSession({
        title: `${system}: ${track.title} — ${lesson.title}`,
        notes: lesson.subtitle || "",
        href: `/library/${system.toLowerCase()}/${track.id}/${lessonIdx + 1}`,
        skill: "speaking",
        source: "speaking",
      }));
    }
    lessonIdx += 1;
    if (lessonIdx >= track.lessons.length) {
      lessonIdx = 0;
      trackIdx = (trackIdx + 1) % tracks.length;
    }
    guard += 1;
  }
  return { sessions, system, trackIdx, lessonIdx };
}

// ---------- Reading (storybooks from the `tools` table, content_type='story') ----------
// Level-specific pool, so the offset only carries over between two
// syllabi generated at the SAME level -- see resetOffsetsForLevel below.
async function buildReadingSessions(count, level, ageTrack, startIndex) {
  if (count === 0) return { sessions: [], endIndex: startIndex };
  const { data, error } = await supabase
    .from("tools")
    .select("id, title, level, tagline, content_type, category")
    .eq("category", "Reading")
    .eq("content_type", "story")
    .eq("level", level);

  if (error || !data || data.length === 0) {
    return {
      sessions: Array.from({ length: count }, () => newSession({
        title: "No storybooks found at this level yet",
        notes: "Pick a title from the Reading library manually.",
        skill: "reading",
        source: "placeholder",
      })),
      endIndex: startIndex,
    };
  }

  // Storybooks have an age track (Kids/Teens/Adults, title case) even
  // though the `tools` table itself doesn't store it -- prefer books that
  // actually match this syllabus's age track, falling back to the full
  // same-level list only if none match, rather than an empty placeholder
  // when perfectly good same-level content exists for a different age.
  const ageLabel = SYLLABUS_AGE_TRACKS.find((t) => t.key === ageTrack)?.label || "Teens";
  const ageMatched = data.filter((book) => (BOOK_AGE_TRACK[book.id] || "Teens") === ageLabel);
  const pool = ageMatched.length > 0 ? ageMatched : data;

  const sessions = Array.from({ length: count }, (_, i) => {
    const book = pool[(startIndex + i) % pool.length];
    return newSession({ title: `Read: ${book.title}`, notes: book.tagline || "", href: `/library/${book.id}`, skill: "reading", source: "reading" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Writing (Scrapbook Studio activity types, round robin) ----------
// Each activity type's own item set is level-banded (cefrGroup: A1-A2 /
// B1-B2 / C1-C2, 10 items per band), so a session doesn't just name the
// activity type, it picks a specific level-appropriate item within it.
function cefrGroupForLevel(level) {
  if (level === "A1" || level === "A2") return "A1-A2";
  if (level === "B1" || level === "B2") return "B1-B2";
  return "C1-C2";
}

function buildWritingSessions(count, level, startIndex) {
  const group = cefrGroupForLevel(level);
  const sessions = [];
  for (let i = 0; i < count; i++) {
    const idx = startIndex + i;
    const activity = ACTIVITY_TYPES[idx % ACTIVITY_TYPES.length];
    const items = (activity.sets || []).filter((s) => s.cefrGroup === group);
    const item = items.length > 0 ? items[Math.floor(idx / ACTIVITY_TYPES.length) % items.length] : null;
    sessions.push(newSession({
      title: item ? `${activity.title}: ${item.title}` : activity.title,
      notes: (item && item.focus) || activity.blurb || "",
      href: item ? `/library/writing/${activity.key}/${item.key}/player` : "",
      skill: "writing",
      source: "writing",
    }));
  }
  return { sessions, endIndex: startIndex + count };
}

// ---------- Articles (Sentenco Gazette, chronological order) ----------
// Not level-specific -- each article has its own Plain/Polished/Precise
// editions, so the syllabus just names the article and the teacher picks
// the right edition when they actually run the session.
function buildArticleSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const article = ARTICLES[(startIndex + i) % ARTICLES.length];
    return newSession({ title: `Article: ${article.title}`, notes: article.dek || "", href: `/library/articles/${article.slug}/player`, skill: "articles", source: "articles" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Curriculum (real Discover/Ignite/Sprout lessons, A1 only) ----------
// "Recommended for beginners": at A1 there's real, sequenced, age-matched
// curriculum content (Kids Discover, Teens Ignite, Adults Sprout)
// that's a better fit for a true beginner than the generic Grammar/Vocab
// pool -- so A1 syllabi pull from it first. Filters through each track's
// own READY_LESSONS map (the same one its curriculum page uses to decide
// what shows an "Open" button vs "Coming soon"), so this only ever
// recommends lessons that actually exist -- and automatically recommends
// MORE as each track's still-unbuilt lessons get filled in later, with no
// code change needed here.
function readyCurriculumLessons(ageTrack) {
  if (ageTrack === "kids") {
    const ready = KIDS_READY_LESSONS.A1 || {};
    return (KIDS_UNITS.A1 || []).flatMap((u) =>
      (u.lessons || [])
        .filter((l) => !l.isTest && (ready[u.num] || []).includes(l.num))
        .map((l) => ({
          title: l.title,
          notes: l.focus || "",
          href: `/library/curriculum/A1/unit/${u.num}/lesson/${l.num}`,
        }))
    );
  }
  const unitsSource = ageTrack === "teens" ? TEENS_UNITS : ageTrack === "adults" ? ADULTS_UNITS : null;
  if (!unitsSource) return [];
  const ready = (TRACK_READY_LESSONS[ageTrack] || {}).A1 || {};
  return (unitsSource.A1 || []).flatMap((u) =>
    (u.lessons || [])
      .filter((l) => !l.isTest && (ready[u.num] || []).includes(l.num))
      .map((l) => ({
        title: l.title,
        notes: l.focus || "",
        href: `/library/curriculum/${ageTrack}/A1/unit/${u.num}/lesson/${l.num}`,
      }))
  );
}

function buildCurriculumSessions(count, startIndex, ageTrack) {
  const pool = readyCurriculumLessons(ageTrack);
  if (pool.length === 0 || count === 0) return { sessions: [], endIndex: startIndex };
  const sessions = Array.from({ length: count }, (_, i) => {
    const item = pool[(startIndex + i) % pool.length];
    return newSession({ title: item.title, notes: item.notes, href: item.href, skill: "curriculum", source: "curriculum" });
  });
  return { sessions, endIndex: startIndex + count };
}

function computeCounts(count, level, focusKey) {
  const floorPct = LEVEL_FLOOR[level] ?? 0.35;
  const floorTotal = Math.round(count * floorPct);
  const floorGrammar = Math.ceil(floorTotal * 0.6);
  const floorVocab = Math.max(0, floorTotal - floorGrammar);
  const remainder = Math.max(0, count - floorGrammar - floorVocab);

  const weights = {};
  if (FOCUS_POOL.includes(focusKey)) {
    FOCUS_POOL.forEach((k) => { weights[k] = k === focusKey ? 4 : 1; });
  } else {
    // balanced: grammar/vocabulary already have their floor, no extra share
    FOCUS_POOL.forEach((k) => { weights[k] = (k === "grammar" || k === "vocabulary") ? 0 : 1; });
  }
  const weightSum = FOCUS_POOL.reduce((s, k) => s + weights[k], 0) || 1;

  // Process highest-weight categories first, so the focused category
  // always gets its full rounded share -- otherwise several low-weight
  // categories each rounding 0.5 up to 1 could consume the whole budget
  // before the actual focus (processed last in a fixed order) got a turn,
  // leaving it at zero despite having the highest weight.
  const processOrder = [...FOCUS_POOL].sort((a, b) => weights[b] - weights[a]);
  const remainderCounts = {};
  let allocated = 0;
  processOrder.forEach((k, i) => {
    if (i === processOrder.length - 1) {
      remainderCounts[k] = Math.max(0, remainder - allocated);
    } else {
      // Clamp each share so independent rounding can't push the running
      // total past `remainder` -- otherwise several 0.5-rounds-up shares
      // can each round up and the total overshoots the requested count.
      const raw = Math.round((remainder * weights[k]) / weightSum);
      const c = Math.max(0, Math.min(raw, remainder - allocated));
      remainderCounts[k] = c;
      allocated += c;
    }
  });

  return {
    grammar: floorGrammar + remainderCounts.grammar,
    vocabulary: floorVocab + remainderCounts.vocabulary,
    speaking: remainderCounts.speaking,
    reading: remainderCounts.reading,
    writing: remainderCounts.writing,
    articles: remainderCounts.articles,
  };
}

// Evenly interleaves session groups by skill so the syllabus rotates
// through skills instead of running one skill in a solid block, most
// frequent skill first so it sets the base rhythm and rarer skills slot
// into the remaining gaps.
function interleave(groups) {
  const order = ["grammar", "vocabulary", "speaking", "reading", "writing", "articles"];
  const total = order.reduce((sum, key) => sum + (groups[key]?.length || 0), 0);
  const result = new Array(total).fill(null);
  const filled = new Array(total).fill(false);
  const bySkill = order
    .filter((key) => (groups[key]?.length || 0) > 0)
    .sort((a, b) => groups[b].length - groups[a].length);

  for (const key of bySkill) {
    const items = groups[key];
    const emptyIdx = [];
    for (let i = 0; i < total; i++) if (!filled[i]) emptyIdx.push(i);
    items.forEach((item, k) => {
      const pos = Math.floor((k * emptyIdx.length) / items.length);
      const idx = emptyIdx[pos];
      result[idx] = item;
      filled[idx] = true;
    });
  }
  return result.filter(Boolean);
}

// If the level changes between a syllabus and its follow-up, the
// level-specific pools (Reading's storybooks, Speaking's track system)
// can't sensibly continue from where they left off -- Grammar/Vocabulary/
// Writing/Articles are level-agnostic continuous courses and DO carry
// over.
export function offsetsForFollowUp(parentOffsets, parentLevel, newLevel, ageTrack) {
  const base = parentOffsets || emptyOffsets();
  if (newLevel === parentLevel) return { ...base };
  // Ascend eligibility depends on ageTrack (adults only) as well as level,
  // so the real ageTrack has to be passed through here, not a placeholder.
  const { system: newSystemName } = speakingSystemForLevel(newLevel, ageTrack);
  const sameSpeakingSystem = newSystemName && newSystemName === base.speakingSystem;
  return {
    ...base,
    reading: 0,
    curriculum: 0,
    speakingTrackIdx: sameSpeakingSystem ? base.speakingTrackIdx : 0,
    speakingLessonIdx: sameSpeakingSystem ? base.speakingLessonIdx : 0,
    speakingSystem: sameSpeakingSystem ? base.speakingSystem : null,
  };
}

// The generic content-pool generator (Grammar/Vocabulary/Speaking/Reading/
// Writing/Articles) -- this is what generateSyllabusSessions below falls
// back to once any A1 curriculum recommendation has claimed its slots.
async function generateSyllabusSessionsCore({ level, ageTrack, count, focusKey, offsets }) {
  const counts = computeCounts(count, level, focusKey);

  const grammarResult = buildGrammarSessions(counts.grammar, offsets.grammar);
  const vocabResult = buildVocabSessions(counts.vocabulary, offsets.vocabulary);
  const writingResult = buildWritingSessions(counts.writing, level, offsets.writing);
  const articlesResult = buildArticleSessions(counts.articles, offsets.articles);
  const readingResult = await buildReadingSessions(counts.reading, level, ageTrack, offsets.reading);
  const speakingResult = buildSpeakingSessions(counts.speaking, level, ageTrack, offsets.speakingTrackIdx, offsets.speakingLessonIdx);

  const groups = {
    grammar: grammarResult.sessions,
    vocabulary: vocabResult.sessions,
    speaking: speakingResult.sessions,
    reading: readingResult.sessions,
    writing: writingResult.sessions,
    articles: articlesResult.sessions,
  };

  const endOffsets = {
    grammar: grammarResult.endIndex,
    vocabulary: vocabResult.endIndex,
    writing: writingResult.endIndex,
    articles: articlesResult.endIndex,
    reading: readingResult.endIndex,
    curriculum: offsets.curriculum,
    speakingSystem: speakingResult.system,
    speakingTrackIdx: speakingResult.trackIdx,
    speakingLessonIdx: speakingResult.lessonIdx,
  };

  return { sessions: interleave(groups), offsets: endOffsets };
}

// The one place the generator talks to content. Given level + age track +
// a total session count + a focus category (one of SYLLABUS_FOCUS_OPTIONS)
// + starting offsets (for a follow-up syllabus, so it continues instead of
// repeating), returns the ordered session list plus the offsets to store
// for whatever follow-up comes after THIS one.
//
// At A1 ("zero beginner and beginners"), real curriculum content is
// recommended first -- see readyCurriculumLessons() above. Kids A1 has a
// full 72-lesson pool (more than any one cycle needs), so it replaces the
// generic mix entirely, round-robining across cycles. Teens/Adults A1
// currently have only one real lesson each, so it's surfaced once as a
// recommended opener and the rest of the cycle falls back to the generic
// pool -- once a track's pool is exhausted (already recommended in an
// earlier cycle), later cycles fall back to the generic pool too, until
// more real lessons are built and the pool has something new again.
export async function generateSyllabusSessions({ level, ageTrack, count, focusKey = "balanced", startOffsets = null }) {
  const offsets = startOffsets || emptyOffsets();

  if (level === "A1") {
    const pool = readyCurriculumLessons(ageTrack);
    const remainingNew = Math.max(0, pool.length - (offsets.curriculum || 0));
    const curriculumCount = pool.length >= count ? count : Math.min(count, remainingNew);

    if (curriculumCount > 0) {
      const curriculumResult = buildCurriculumSessions(curriculumCount, offsets.curriculum || 0, ageTrack);
      const restCount = count - curriculumResult.sessions.length;
      if (restCount === 0) {
        return { sessions: curriculumResult.sessions, offsets: { ...offsets, curriculum: curriculumResult.endIndex } };
      }
      const restResult = await generateSyllabusSessionsCore({
        level, ageTrack, count: restCount, focusKey,
        offsets: { ...offsets, curriculum: curriculumResult.endIndex },
      });
      return {
        sessions: [...curriculumResult.sessions, ...restResult.sessions],
        offsets: { ...restResult.offsets, curriculum: curriculumResult.endIndex },
      };
    }
  }

  return generateSyllabusSessionsCore({ level, ageTrack, count, focusKey, offsets });
}

export function timeAgo(iso) {
  const then = new Date(iso).getTime();
  const diffSec = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 30) return `${diffDay}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}
