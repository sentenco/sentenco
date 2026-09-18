import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import ProfileSettings from "./ProfileSettings.jsx";
import { supabase } from "./supabaseClient";
import { timeAgo } from "./slideDeckTypes";
import CurriculumRouter from "./CurriculumRouter";
import TrackLevelPage from "./TrackLevelPage";
import SparkHub from "./SparkHub";
import ArticleReader from "./ArticleReader.jsx";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import storybookCoverImg from "./assets/storybook/cover.jpeg";
import storybook2CoverImg from "./assets/storybook2/cover.png";
import storybook3CoverImg from "./assets/storybook3/cover.jpg";
import storybook4CoverImg from "./assets/storybook4/cover.jpg";
import storybook5CoverImg from "./assets/storybook5/cover.jpg";
import storybook6CoverImg from "./assets/storybook6/cover.jpg";
import storybook7CoverImg from "./assets/storybook7/cover.jpg";
import storybook8CoverImg from "./assets/storybook8/cover.jpg";
import storybook9CoverImg from "./assets/storybook9/cover.jpg";
import storybook10CoverImg from "./assets/storybook10/cover.jpg";
import storybook11CoverImg from "./assets/storybook11/cover.jpg";
import storybook12CoverImg from "./assets/storybook12/cover.jpg";
import storybook14CoverImg from "./assets/storybook14/cover.jpg";
import storybook15CoverImg from "./assets/storybook15/cover.jpg";
import storybook16CoverImg from "./assets/storybook16/cover.jpg";
import storybook17CoverImg from "./assets/storybook17/cover.jpg";
import storybook18CoverImg from "./assets/storybook18/cover.jpg";
import storybook19CoverImg from "./assets/storybook19/cover.jpg";
import storybook20CoverImg from "./assets/storybook20/cover.jpg";
import storybook23CoverImg from "./assets/storybook23/cover.jpg";
import storybook24CoverImg from "./assets/storybook24/cover.jpg";
import storybook25CoverImg from "./assets/storybook25/cover.jpg";
import storybook26CoverImg from "./assets/storybook26/cover.jpg";
import storybook27CoverImg from "./assets/storybook27/cover.jpg";
import storybook28CoverImg from "./assets/storybook28/cover.jpg";
import storybook29CoverImg from "./assets/storybook29/cover.jpg";
import storybook30CoverImg from "./assets/storybook30/cover.jpg";
import listeningLandscapeImg from "./assets/listening/landscape.jpg";
import listeningPortraitImg from "./assets/listening/portrait.jpg";
import listeningGistImg from "./assets/listening/gist.jpg";
import listeningNoteCompletionImg from "./assets/listening/note-completion.jpg";
import listeningSequencingImg from "./assets/listening/sequencing.jpg";
import listeningInferenceImg from "./assets/listening/inference.jpg";
import listeningFollowDirectionsImg from "./assets/listening/follow-directions.jpg";
import listeningWhichPictureImg from "./assets/listening/which-picture.jpg";
import listeningWhosWhoImg from "./assets/listening/whos-who.jpg";
import listeningFillScheduleImg from "./assets/listening/fill-schedule.jpg";
import listeningSpellItOutImg from "./assets/listening/spell-it-out.jpg";
import clinicLandscapeImg from "./assets/clinic/landscape.jpg";
import clinicPortraitImg from "./assets/clinic/portrait.jpg";
import gdnLandscapeImg from "./assets/grammar-garden/landscape.jpg";
import gdnPortraitImg from "./assets/grammar-garden/portrait.jpg";
import bkshfBgImg from "./assets/library-hub/bg.jpg";
import storybook13CoverImg from "./assets/storybook13/cover.jpg";
import storybook21CoverImg from "./assets/storybook21/cover.jpg";
import storybook22CoverImg from "./assets/storybook22/cover.jpg";
import storybook41CoverImg from "./assets/storybook41/cover.jpg";
import storybook42CoverImg from "./assets/storybook42/cover.jpg";
import storybook43CoverImg from "./assets/storybook43/cover.jpg";
import storybook44CoverImg from "./assets/storybook44/cover.jpg";
import storybook45CoverImg from "./assets/storybook45/cover.jpg";
import storybook46CoverImg from "./assets/storybook46/cover.jpg";
import storybook47CoverImg from "./assets/storybook47/cover.jpg";
import storybook48CoverImg from "./assets/storybook48/cover.jpg";
import storybook31CoverImg from "./assets/storybook31/cover.jpg";
import storybook32CoverImg from "./assets/storybook32/cover.jpg";
import storybook33CoverImg from "./assets/storybook33/cover.jpg";
import storybook34CoverImg from "./assets/storybook34/cover.jpg";
import storybook35CoverImg from "./assets/storybook35/cover.jpg";
import storybook36CoverImg from "./assets/storybook36/cover.jpg";
import storybook37CoverImg from "./assets/storybook37/cover.jpg";
import storybook38CoverImg from "./assets/storybook38/cover.jpg";
import storybook39CoverImg from "./assets/storybook39/cover.jpg";
import storybook40CoverImg from "./assets/storybook40/cover.jpg";
import storybook49CoverImg from "./assets/storybook49/cover.jpg";
import storybook50CoverImg from "./assets/storybook50/cover.jpg";
import storybook51CoverImg from "./assets/storybook51/cover.jpg";
import storybook52CoverImg from "./assets/storybook52/cover.jpg";
import storybook53CoverImg from "./assets/storybook53/cover.jpg";
import storybook54CoverImg from "./assets/storybook54/cover.jpg";
import storybook55CoverImg from "./assets/storybook55/cover.jpg";
import storybook56CoverImg from "./assets/storybook56/cover.jpg";
import storybook57CoverImg from "./assets/storybook57/cover.jpg";
import storybook58CoverImg from "./assets/storybook58/cover.jpg";
import storybook59CoverImg from "./assets/storybook59/cover.jpg";
import storybook60CoverImg from "./assets/storybook60/cover.jpg";
import storybook61CoverImg from "./assets/storybook61/cover.jpg";
import storybook62CoverImg from "./assets/storybook62/cover.jpg";
import storybook63CoverImg from "./assets/storybook63/cover.jpg";
import storybook64CoverImg from "./assets/storybook64/cover.jpg";
import storybook65CoverImg from "./assets/storybook65/cover.jpg";
import storybook66CoverImg from "./assets/storybook66/cover.jpg";
import storybook67CoverImg from "./assets/storybook67/cover.jpg";
import storybook68CoverImg from "./assets/storybook68/cover.jpg";
import storybook69CoverImg from "./assets/storybook69/cover.jpg";
import storybook70CoverImg from "./assets/storybook70/cover.jpg";
import storybook71CoverImg from "./assets/storybook71/cover.jpg";
import storybook72CoverImg from "./assets/storybook72/cover.jpg";
import storybook73CoverImg from "./assets/storybook73/cover.jpg";
import storybook74CoverImg from "./assets/storybook74/cover.jpg";
import storybook75CoverImg from "./assets/storybook75/cover.jpg";
import storybook76CoverImg from "./assets/storybook76/cover.jpg";
import storybook77CoverImg from "./assets/storybook77/cover.jpg";
import storybook78CoverImg from "./assets/storybook78/cover.jpg";
import storybook79CoverImg from "./assets/storybook79/cover.jpg";
import storybook80CoverImg from "./assets/storybook80/cover.jpg";
import forge1CoverImg from "./assets/forge/track1-cover.jpeg";
import todayWheelIcon from "./assets/today/icon-wheel.jpg";
import todayNotebookIcon from "./assets/today/icon-notebook.jpg";
import todayFeedbackIcon from "./assets/today/icon-feedback.jpg";
import todaySyllabusIcon from "./assets/today/icon-deck.jpg";
import todayQuoteBanner from "./assets/today/quote-banner.jpg";
import DAILY_CORRECTIONS from "./dailyCorrections";
import { ARTICLES, ARTICLE_TOPICS } from "./articlesData";
import VocabularyGames from "./VocabularyGames";
import WritingActivities from "./WritingActivities";
import CommunityFeed from "./CommunityFeed.jsx";
import FORGE_TRACKS from "./forgeTracks";
import SHIFT_TRACKS from "./shiftTracks";
import ASCEND_TRACKS from "./ascendTracks";
import RELAY_TRACKS from "./relayTracks";
import BRIDGE_TRACKS from "./bridgeTracks";
import DERIVE_TRACKS from "./deriveTracks";
import SEQUENCE_TRACKS from "./sequenceTracks";

const CATEGORIES = ["Articles", "Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening"];
const PRO_CATEGORIES = ["Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening", "Customized Lessons"];

// "Today" launch date -- the day count in the Today masthead (Vol. 1, No. X)
// counts up from here, like a real newspaper's running issue number.
const GAZETTE_LAUNCH = new Date(2026, 6, 22);

function daysSince(date) {
  const startOfToday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((startOfToday - GAZETTE_LAUNCH) / 86400000);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Deterministic "shuffle" -- steps through every index exactly once before
// repeating, so picks stay evenly spread without needing real randomness
// (which would make Today different per visitor instead of per day).
function pickDeterministic(total, seed, count) {
  if (total <= 0) return [];
  let step = 1;
  for (let s = 7; s < total + 7; s++) {
    if (gcd(s, total) === 1) { step = s; break; }
  }
  const out = [];
  let i = ((seed % total) + total) % total;
  for (let n = 0; n < total && out.length < count; n++) {
    i = (i + step) % total;
    out.push(i);
  }
  return out;
}

function CorrectionLine({ segments }) {
  return segments.map((seg, i) => {
    if ("wrong" in seg) return <span key={i} className="corr-wrong">{seg.wrong}</span>;
    if ("right" in seg) return <span key={i} className="corr-right">{seg.right}</span>;
    return <React.Fragment key={i}>{seg.text}</React.Fragment>;
  });
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 2 4 4-13 13H5v-4Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M6.8 9V6.3a3.2 3.2 0 0 1 6.4 0V9" />
    </svg>
  );
}

function CategoryLockedFeature({ category, navigate }) {
  return (
    <div className="cat-locked">
      <span className="cat-locked-icon"><LockIcon /></span>
      <p className="cat-locked-eyebrow">Pro feature</p>
      <h2 className="cat-locked-title">{category === "Customized Lessons" ? "Custom Lessons" : category} is part of Sentivo Pro</h2>
      <p className="cat-locked-desc">
        Upgrade to unlock every category, Speaking, Reading, Grammar, Vocabulary, Writing, and Listening, plus Teacher's Desk without the daily unlock.
      </p>
      <button type="button" className="cat-locked-cta" onClick={() => navigate("/library/subscription")}>Upgrade to Pro</button>
      <button type="button" className="cat-locked-link" onClick={() => navigate("/library/subscription")}>See all plans</button>
    </div>
  );
}

function CurriculumLockedFeature({ navigate }) {
  return (
    <div className="cat-locked">
      <span className="cat-locked-icon cat-locked-icon--navy"><LockIcon /></span>
      <p className="cat-locked-eyebrow cat-locked-eyebrow--navy">Pro+ feature</p>
      <h2 className="cat-locked-title">The full curriculum is part of Sentivo Pro+</h2>
      <p className="cat-locked-desc">
        Upgrade to Pro+ to unlock the full A1 and A2 curriculum, plus the AI-powered Dictionary, Grammar Checker, and Translator.
      </p>
      <button type="button" className="cat-locked-cta cat-locked-cta--navy" onClick={() => navigate("/library/subscription")}>Upgrade to Pro+</button>
      <button type="button" className="cat-locked-link" onClick={() => navigate("/library/subscription")}>See all plans</button>
    </div>
  );
}

function DigitalClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const h24 = now.getHours();
  const h12 = ((h24 + 11) % 12) + 1;
  const hh = String(h12).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const ampm = h24 >= 12 ? "PM" : "AM";
  let tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { /* unsupported */ }

  return (
    <div className="gc-clock">
      <div className="gc-clock-time">{hh}:{mm}<span className="gc-clock-sec">:{ss}</span></div>
      <div className="gc-clock-meta">
        <span>{ampm}</span>
        {tz && <span>{tz}</span>}
      </div>
    </div>
  );
}

function ArticlesFeature({ navigate, query }) {
  const [activeTopic, setActiveTopic] = useState("All");
  const q = query.trim().toLowerCase();
  const byTopic = activeTopic === "All" ? ARTICLES : ARTICLES.filter((a) => a.topicLabel === activeTopic);
  const filtered = q
    ? byTopic.filter((a) => a.title.toLowerCase().includes(q) || a.dek.toLowerCase().includes(q))
    : byTopic;
  // The lead is whichever article was added to ARTICLES most recently (the
  // last entry in the array), not whichever has the newest publishedAt --
  // those can diverge, since articles get inserted as they're written, not
  // strictly in date order.
  const lead = filtered.length ? filtered[filtered.length - 1] : null;
  const briefs = filtered.filter((a) => a !== lead);

  return (
    <div className="gaz-page">
      <div className="gaz-hero">
        <div className="gaz-hero-blob" />
        <div className="gaz-masthead">
          <div className="gaz-masthead-kicker-row">
            <span className="gaz-masthead-rule" />
            <span className="gaz-masthead-kicker">The Sentivo</span>
            <span className="gaz-masthead-rule" />
          </div>
          <h1 className="gaz-masthead-word">Gazette</h1>
          <div className="gaz-masthead-underline" />
          <div className="gaz-masthead-tagline">News, Ideas &amp; Perspectives</div>
        </div>
      </div>
      <nav className="gaz-topics">
        <button
          type="button"
          className={`gaz-topic ${activeTopic === "All" ? "is-active" : ""}`}
          onClick={() => setActiveTopic("All")}
        >
          All
        </button>
        {ARTICLE_TOPICS.map((t) => (
          <button
            key={t.label}
            type="button"
            className={`gaz-topic ${activeTopic === t.label ? "is-active" : ""}`}
            title={t.title}
            onClick={() => setActiveTopic(t.label)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {lead ? (
        <Link to={`/library/articles/${lead.slug}`} className="gaz-lead">
          <div>
            <div className="gaz-lead-kicker">{activeTopic === "All" ? "Lead Story · " : ""}{lead.topicTitle}</div>
            <h2 className="gaz-lead-title">{lead.title}</h2>
            <p className="gaz-lead-dek">{lead.dek}</p>
            <div className="gaz-lead-meta">
              <span className="gaz-byline">Sentivo Editorial</span>
              <span className="gaz-dot">·</span>
              <span className="gaz-editions">📚 3 Editions</span>
              <span className="gaz-dot">·</span>
              <span>{lead.editions.polished.readTime}</span>
            </div>
          </div>
          <div className="gaz-lead-art">
            {lead.image ? <img src={lead.image} alt="" /> : <span className="gaz-lead-art-emoji">{lead.emoji}</span>}
          </div>
        </Link>
      ) : (
        <p className="gaz-empty">{q ? `No articles match "${query.trim()}".` : "No articles in this category yet — check back soon."}</p>
      )}

      <div className="gaz-grid">
        {briefs.map((a) => {
          const body = (
            <>
              <div className={`gaz-thumb gaz-thumb--${a.variant}`}>
                {a.image ? <img src={a.image} alt="" /> : a.emoji}
              </div>
              <div className="gaz-story-body">
                <div className="gaz-story-kicker">{a.topicLabel}</div>
                <h3 className="gaz-story-title">{a.title}</h3>
                <div className="gaz-story-meta">
                  {a.ready ? <span className="gaz-editions">📚 3 Ed.</span> : <span className="gaz-soon">Coming soon</span>}
                </div>
              </div>
            </>
          );
          return a.ready ? (
            <Link key={a.slug} to={`/library/articles/${a.slug}`} className="gaz-story">
              {body}
            </Link>
          ) : (
            <div key={a.slug} className="gaz-story gaz-story--soon">
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CUSTOM_LESSONS = [
  {
    slug: "real-estate-vocabulary",
    title: "Real Estate Vocabulary",
    tag: "Vocabulary",
    level: "Comprehension: Intermediate · Production: Advanced Beginner",
    desc: "12 real estate words across People, Property, and Money, with a listening dialogue and simple-sentence practice.",
  },
  {
    slug: "be-verbs-and-will",
    title: "Be-verbs & Will",
    tag: "Grammar",
    level: "Beginner",
    desc: "Three core patterns in one sitting: be + adjective, be + v-ing, and will + v1, each with a rule box and fill-in-blank practice.",
  },
  {
    slug: "present-simple-vs-progressive",
    title: "Present Simple vs Progressive",
    tag: "Grammar",
    level: "Beginner to Elementary",
    desc: "Usage rules and signal words for both tenses, plus a mixed activity that combines them in the same set of sentences.",
  },
  {
    slug: "verb-tense-identification",
    title: "Verb Tense Identification",
    tag: "Grammar",
    level: "Intermediate to Advanced",
    desc: "24 real sentences across all 12 English tenses, two per tense, one at a time, choose the tense each sentence is written in.",
  },
];

function openCustomLessonPopup(path, name, w, h) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const width = Math.min(w, screenW - 40);
  const height = Math.min(h, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - width) / 2));
  const top = Math.max(0, Math.floor((screenH - height) / 2));
  window.open(
    path,
    name,
    `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

const GRAMMAR_MODULES = [
  { num: "BED 01", banner: "partsOfSpeech", title: "Parts of Speech", spec: "8 word classes across 6 topics. One Lesson, one Assessment each. A1–C2.", href: "/library/grammar/parts-of-speech", ready: true, hue: "leaf", tier: "foundation" },
  { num: "BED 02", banner: "verbTenses", title: "Verb Tenses", spec: "All 12 English tenses. One Discussion, one Test lesson each. A1–C2.", href: "/library/grammar/verb-tenses", ready: true, hue: "gold", tier: "foundation" },
  { num: "BED 03", banner: "sentenceStructure", title: "Sentence Patterns", spec: "The 7 core patterns — SV to SVOC — across 6 lessons, each with practice and a built-in assessment. A1–C2.", href: "/library/grammar/sentence-patterns", ready: true, hue: "soil", tier: "foundation" },
  { num: "BED 04", banner: "modals", title: "Modals", spec: "9 core modal verbs — can to shall — grouped by function across 7 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/modals", ready: true, hue: "sky", tier: "foundation" },
  { num: "BED 05", banner: "conditionals", title: "Conditionals", spec: "The 5 conditional types — Zero to Mixed — across 5 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/conditionals", ready: true, hue: "berry", tier: "foundation" },
  { num: "BED 06", banner: "passiveVoice", title: "Passive Voice", spec: "Present to future passive, modal passive, and the by-agent, across 6 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/passive-voice", ready: true, hue: "violet", tier: "foundation" },
  { num: "BED 07", banner: "questionFormation", title: "Question Formation", spec: "Yes/no questions, wh-questions, question tags, and indirect questions, across 4 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/question-formation", ready: true, hue: "teal", tier: "foundation" },
  { num: "BED 08", banner: "nounsArticlesQuantifiers", title: "Nouns, Articles & Quantifiers", spec: "Countable vs uncountable, a/an vs the, zero article, and precise quantifiers, across 5 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/nouns-articles-quantifiers", ready: true, hue: "coral", tier: "foundation" },
  { num: "BED 09", banner: "pronounsPossessives", title: "Pronouns & Possessives", spec: "Subject vs object pronouns, possessive adjectives vs pronouns, reflexive/intensive, demonstrative/indefinite, and possessive 's, across 5 lessons. A1–C2.", href: "/library/grammar/pronouns-possessives", ready: true, hue: "lime", tier: "foundation" },
  { num: "BED 10", banner: "comparativesSuperlatives", title: "Comparatives & Superlatives", spec: "Short and long adjectives, irregular forms, equal comparison, degree modifiers, and double comparatives, across 4 lessons. A1–C2.", href: "/library/grammar/comparatives-superlatives", ready: true, hue: "magenta", tier: "foundation" },
  { num: "BED 11", banner: "reportedSpeech", title: "Reported Speech", spec: "Backshift, say vs tell, time/place changes, reported questions, commands, and exceptions to backshift, across 5 lessons. A1–C2.", href: "/library/grammar/reported-speech", ready: true, hue: "navy", tier: "foundation" },
  { num: "BED 12", banner: "relativeClauses", title: "Relative Clauses", spec: "Who/which/that, whose/where/when, non-defining clauses, and reducing clauses to phrases, across 4 lessons. A1–C2.", href: "/library/grammar/relative-clauses", ready: true, hue: "slate", tier: "foundation" },
  { num: "BED 13", banner: "gerundsInfinitives", title: "Gerunds & Infinitives", spec: "Verbs that take a gerund, verbs that take an infinitive, verbs that take either, gerunds as nouns, and the infinitive of purpose, across 4 lessons. A1–C2.", href: "/library/grammar/gerunds-infinitives", ready: true, hue: "khaki", tier: "foundation" },
  { num: "BED 14", banner: "prepositions", title: "Prepositions", spec: "Place, time, movement, prepositions after verbs and adjectives, and by/with/without, across 6 lessons. A1–C2.", href: "/library/grammar/prepositions", ready: true, hue: "crimson", tier: "foundation" },
  { num: "BED 45", banner: "punctuationEssentials", title: "Punctuation Essentials", spec: "Commas, apostrophes, semicolons & colons, and quotation marks, across 5 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/punctuation-essentials", ready: true, hue: "leaf", tier: "foundation" },
  { num: "BED 15", banner: "conjunctions", title: "Conjunctions", spec: "Coordinating conjunctions (FANBOYS) join two equal ideas; subordinating conjunctions attach a dependent clause.", href: "/library/grammar/conjunctions", ready: true, hue: "leaf", icon: "🔗", tier: "extras" },
  { num: "BED 16", banner: "linkingWords", title: "Linking Words", spec: "However and therefore connect ideas across separate sentences, not within one — and need their own comma.", href: "/library/grammar/linking-words", ready: true, hue: "teal", icon: "🔀", tier: "extras" },
  { num: "BED 17", banner: "causativeVerbs", title: "Causative Verbs", spec: "Have/get + object + past participle for someone else doing it; make/let + person + verb for force vs permission.", href: "/library/grammar/causative-verbs", ready: true, hue: "gold", icon: "🔧", tier: "extras" },
  { num: "BED 18", banner: "wordOrder", title: "Word Order", spec: "OSASCOMP — Opinion, Size, Age, Shape, Color, Origin, Material, Purpose — the order adjectives stack before a noun.", href: "/library/grammar/word-order", ready: true, hue: "soil", icon: "🔤", tier: "extras" },
  { num: "BED 19", banner: "inversion", title: "Inversion", spec: "Never have I seen... — flipping word order for emphasis, and dropping if in formal conditionals.", href: "/library/grammar/inversion", ready: true, hue: "coral", icon: "🔃", tier: "extras" },
  { num: "BED 20", banner: "wishIfOnly", title: "Wish & If Only", spec: "Expressing regret or a desire for something different, related to but distinct from conditionals.", href: "/library/grammar/wish-if-only", ready: true, hue: "sky", icon: "🌠", tier: "extras" },
  { num: "BED 21", banner: "usedTo", title: "Used To / Be Used To / Get Used To", spec: "Three similar-looking structures with completely different meanings — past habit vs familiarity vs adjusting.", href: "/library/grammar/used-to", ready: true, hue: "berry", icon: "⏳", tier: "extras" },
  { num: "BED 22", banner: "tooEnough", title: "Too / Enough", spec: "Too goes before an adjective, enough goes after — a common position mix-up.", href: "/library/grammar/too-enough", ready: true, hue: "violet", icon: "⚖️", tier: "extras" },
  { num: "BED 23", banner: "soSuch", title: "So / Such", spec: "So + adjective vs such + a/an + adjective + noun — a classic emphasis mix-up.", href: "/library/grammar/so-such", ready: true, hue: "lime", icon: "💥", tier: "extras" },
  { num: "BED 24", banner: "phrasalVerbs", title: "Phrasal Verbs — Separable vs Inseparable", spec: "Whether the object can go between the verb and particle, like 'turn off the light' vs 'look after the kids'.", href: "/library/grammar/phrasal-verbs", ready: true, hue: "magenta", icon: "🧩", tier: "extras" },
  { num: "BED 25", banner: "exclamations", title: "Exclamations", spec: "What a beautiful day! / How beautiful! — a sentence type of its own.", href: "/library/grammar/exclamations", ready: true, hue: "navy", icon: "❗", tier: "extras" },
  { num: "BED 26", banner: "emphasisDo", title: "Emphasis with Do/Does/Did", spec: "'I DO like it!' — using do-support in affirmative sentences purely for emphasis.", href: "/library/grammar/emphasis-do", ready: true, hue: "slate", icon: "🔊", tier: "extras" },
  { num: "BED 27", banner: "subjectVerbAgreement", title: "Subject-Verb Agreement", spec: "5 real traps: compound subjects, or/nor, indefinite pronouns, and words that sneak between subject and verb.", href: "/library/grammar/subject-verb-agreement", ready: true, hue: "khaki", icon: "🤝", tier: "extras" },
  { num: "BED 28", banner: "directIndirectObjects", title: "Direct & Indirect Objects", spec: "'Give me the book' vs 'give the book to me' — and the verbs that only allow one order.", href: "/library/grammar/direct-indirect-objects", ready: true, hue: "crimson", icon: "🎁", tier: "extras" },
  { num: "BED 29", banner: "countableUncountableTraps", title: "Countable Nouns That Look Uncountable", spec: "News, advice, furniture never pluralize — but work and coffee sometimes do. A trap in both directions.", href: "/library/grammar/countable-uncountable-traps", ready: true, hue: "leaf", icon: "🪑", tier: "extras" },
  { num: "BED 30", banner: "wouldRatherHadBetter", title: "Would Rather / Had Better", spec: "A calm preference vs an urgent warning — two similar 'd + base verb structures with very different stakes.", href: "/library/grammar/would-rather-had-better", ready: true, hue: "gold", icon: "⚠️", tier: "extras" },
  { num: "BED 31", banner: "bothEitherNeither", title: "Both / Either / Neither", spec: "Both is always plural; either/neither are singular alone — until either...or/neither...nor agree with the nearer subject.", href: "/library/grammar/both-either-neither", ready: true, hue: "soil", icon: "🎯", tier: "extras" },
  { num: "BED 32", banner: "questionTagsModals", title: "Question Tags with Modals & Rare Auxiliaries", spec: "True modals tag with themselves; have to and used to borrow do/does/did instead.", href: "/library/grammar/question-tags-modals", ready: true, hue: "sky", icon: "❓", tier: "extras" },
  { num: "BED 33", banner: "fewLittleDeepDive", title: "A Few / Few / Little / A Little", spec: "The core flip, plus the idiom that breaks it — 'quite a few' actually means a lot.", href: "/library/grammar/few-little-deep-dive", ready: true, hue: "berry", icon: "🥄", tier: "extras" },
  { num: "BED 34", banner: "gerundsPrepositionsTime", title: "Gerunds vs Infinitives After Prepositions of Time", spec: "Before/after/since take a gerund, but 'to' meaning 'in order to' is a different animal — the infinitive of purpose.", href: "/library/grammar/gerunds-prepositions-time", ready: true, hue: "violet", icon: "⏰", tier: "extras" },
  { num: "BED 35", banner: "allWhole", title: "All / Whole", spec: "All sits before the article (all the day); whole sits after it (the whole day) — opposite sides of the same word.", href: "/library/grammar/all-whole", ready: true, hue: "teal", icon: "🍰", tier: "extras" },
  { num: "BED 36", banner: "evenThoughIfSo", title: "Even Though / Even If / Even So", spec: "A fact vs a hypothetical vs a standalone linking word that starts a brand new sentence.", href: "/library/grammar/even-though-if-so", ready: true, hue: "coral", icon: "☂️", tier: "extras" },
  { num: "BED 37", banner: "reflexiveVerbsNoSelf", title: "Reflexive Verbs That Don't Need \"-self\"", spec: "Concentrate, relax, wake up drop the reflexive in English — unlike hurt, introduce, and enjoy, which keep it.", href: "/library/grammar/reflexive-verbs-no-self", ready: true, hue: "lime", icon: "🪞", tier: "extras" },
  { num: "BED 38", banner: "cleftSentences", title: "Cleft Sentences", spec: "'It was Sarah who called' / 'What I need is sleep' — English's trick for spotlighting one word in a sentence.", href: "/library/grammar/cleft-sentences", ready: true, hue: "leaf", icon: "🔦", tier: "extras" },
  { num: "BED 39", banner: "getPassiveBePassive", title: "Get-Passive vs Be-Passive", spec: "'He got fired' (dramatic, casual) vs 'he was fired' (neutral) — same passive idea, totally different feel.", href: "/library/grammar/get-passive-be-passive", ready: true, hue: "gold", icon: "⚡", tier: "extras" },
  { num: "BED 40", banner: "irregularForeignPlurals", title: "Irregular & Foreign Plurals", spec: "Cactus/cacti, criterion/criteria, phenomenon/phenomena — even fluent speakers get these wrong.", href: "/library/grammar/irregular-foreign-plurals", ready: true, hue: "soil", icon: "🌵", tier: "extras" },
  { num: "BED 41", banner: "mandativeSubjunctive", title: "The Mandative Subjunctive", spec: "'I suggest he arrive early' — a verb form that quietly drops the -s and nobody notices.", href: "/library/grammar/mandative-subjunctive", ready: true, hue: "sky", icon: "📢", tier: "extras" },
  { num: "BED 42", banner: "whom", title: "Whom", spec: "Why English kept this fossil from Old English, and the practical rule for when you can just skip it.", href: "/library/grammar/whom", ready: true, hue: "berry", icon: "👻", tier: "extras" },
  { num: "BED 43", banner: "parallelStructure", title: "Parallel Structure", spec: "'I like swimming, running, and to bike' should be '...and biking' — keeping list and comparison items matching.", href: "/library/grammar/parallel-structure", ready: true, hue: "violet", icon: "📏", tier: "extras" },
  { num: "BED 44", banner: "nominalization", title: "Nominalization for Formal Writing", spec: "Decide becomes decision, different becomes difference — turning verbs and adjectives into nouns for a formal register.", href: "/library/grammar/nominalization", ready: true, hue: "teal", icon: "📜", tier: "extras" },
];

const SPEAKING_TRACKS = [
  { key: "forge", href: "/library/forge", hue: "forge", gap: "Limited working vocabulary", name: "Forge", desc: "Build real vocabulary through pictures, gaps, echoes, and question chains." },
  { key: "shift", href: "/library/shift", hue: "shift", gap: "Slips into the wrong tense", name: "Shift", desc: "Fast tense choice and self-repair under pressure, for students who already know the grammar." },
  { key: "ascend", href: "/library/ascend", hue: "ascend", gap: "Correct sentences, weak word choice", name: "Ascend", desc: "Push a plain-but-correct sentence toward a stronger one, built for the A2-B1 and B2-C1 transition points." },
  { key: "relay", href: "/library/relay", hue: "relay", gap: "Answers that end the conversation", name: "Relay", desc: "Turn short, complete answers into real exchanges — add reasons, details, and questions that keep the conversation moving." },
  { key: "derive", href: "/library/derive", hue: "derive", gap: "Picks the wrong word-family form", name: "Derive", desc: "Choose the right word-family member on demand, developing instead of development, decide instead of decision." },
  { key: "sequence", href: "/library/sequence", hue: "sequence", gap: "Words out of order", name: "Sequence", desc: "Take words a student already knows and put them in the order that actually makes a sentence." },
];

// Each modality is its own hub with its own set of tracks (Forge/Ascend/etc.
// all route to /library/{modality}/{trackId}), so a plain-text search has to
// flatten every modality's actual tracks into one list -- searching just the
// 7 top-level SPEAKING_TRACKS diagnosis cards above would never surface a
// real topic like "school" or "travel", since those words live one level
// down inside each modality's own track data, not in the diagnosis blurbs.
const SPEAKING_MODALITY_TRACKS = {
  forge: FORGE_TRACKS,
  shift: SHIFT_TRACKS,
  ascend: ASCEND_TRACKS,
  relay: RELAY_TRACKS,
  bridge: BRIDGE_TRACKS,
  derive: DERIVE_TRACKS,
  sequence: SEQUENCE_TRACKS,
};
const SPEAKING_SEARCH_INDEX = SPEAKING_TRACKS.flatMap((modality) =>
  (SPEAKING_MODALITY_TRACKS[modality.key] || []).map((track) => ({ modality, track }))
);

// The Listening category hub: nine activity types, each covering a
// different real listening sub-skill (gist, detail, order, tone, spatial,
// visual, spelling) rather than one multiple-choice format repeated.
const LISTENING_ACTIVITIES = [
  {
    key: "gist-mc",
    tag: "GIST",
    tagClass: "a",
    title: "Gist multiple choice",
    desc: "Play one short clip, ask one question, pick the right answer from three choices.",
    image: listeningGistImg,
  },
  {
    key: "note-completion",
    tag: "DETAIL",
    tagClass: "a",
    title: "Note completion",
    desc: "Play a longer clip, then fill in the exact word, number, or day you heard.",
    image: listeningNoteCompletionImg,
  },
  {
    key: "sequencing",
    tag: "ORDER",
    tagClass: "b",
    title: "Sequencing",
    desc: "Listen to a story or steps, then drag the events into the order they happened.",
    image: listeningSequencingImg,
  },
  {
    key: "inference",
    tag: "TONE",
    tagClass: "b",
    title: "Inference / feeling check",
    desc: "The words alone don't give it away. Guess how the speaker feels or what they really mean.",
    image: listeningInferenceImg,
  },
  {
    key: "follow-directions",
    tag: "SPATIAL",
    tagClass: "b",
    title: "Follow the directions",
    desc: "Hear directions from a starting point, then tap the correct place on a map.",
    image: listeningFollowDirectionsImg,
  },
  {
    key: "which-picture",
    tag: "VISUAL",
    tagClass: "b",
    title: "Which picture?",
    desc: "Three similar pictures, one clip describing details. Pick the one that matches.",
    image: listeningWhichPictureImg,
  },
  {
    key: "whos-who",
    tag: "VISUAL",
    tagClass: "b",
    title: "Who's who?",
    desc: "Hear someone describe a person in a group picture, then tap who they mean.",
    image: listeningWhosWhoImg,
  },
  {
    key: "fill-schedule",
    tag: "DETAIL",
    tagClass: "a",
    title: "Fill the schedule",
    desc: "Hear a timetable or price list read aloud, then fill each cell of the grid.",
    image: listeningFillScheduleImg,
  },
  {
    key: "spell-it-out",
    tag: "SPELLING",
    tagClass: "a",
    title: "Spell it out",
    desc: "Someone spells a name or reads a code aloud. Type exactly what you hear.",
    image: listeningSpellItOutImg,
  },
];

// Small medical-tool glyph per track, shown inside the pin badge on each
// Speaking card -- syringe/stethoscope/capsule rather than a generic
// pushpin dot, keeping the Fluency Clinic motif on the thumbnail itself.
const SPKLAB_PIN_ICONS = {
  forge: (
    <g transform="rotate(45 12 12)">
      <rect x="2" y="10.5" width="3" height="3" fill="#FFFFFF" />
      <rect x="5" y="9" width="10" height="6" rx="1.5" fill="#FFFFFF" />
      <rect x="15" y="10.5" width="3" height="3" fill="#FFFFFF" />
      <line x1="18" y1="12" x2="21.5" y2="12" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  ),
  shift: (
    <>
      <path d="M8 3 v5 a4 4 0 0 0 8 0 V3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="3" r="1.3" fill="#FFFFFF" />
      <circle cx="16" cy="3" r="1.3" fill="#FFFFFF" />
      <path d="M12 11 v3 a4 4 0 0 0 4 4 h1" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18.5" cy="19" r="2.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    </>
  ),
  ascend: (
    <g transform="rotate(-30 12 12)">
      <rect x="5" y="9" width="14" height="6" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
      <line x1="12" y1="9" x2="12" y2="15" stroke="#FFFFFF" strokeWidth="1.8" />
    </g>
  ),
  relay: (
    <path d="M2 13 H6 L8 7 L11 19 L13 8 L14.5 13 H22" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  bridge: (
    <g transform="rotate(45 12 12)">
      <rect x="4" y="9" width="16" height="6" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="9" cy="12" r="0.9" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="0.9" fill="#FFFFFF" />
      <circle cx="15" cy="12" r="0.9" fill="#FFFFFF" />
    </g>
  ),
  derive: (
    <g>
      <path d="M9 3 h6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 3 v11 a2 2 0 0 0 4 0 V3" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="10" x2="14" y2="10" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  ),
  sequence: (
    <g>
      <rect x="2.5" y="9" width="5" height="6" rx="1.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <rect x="9.5" y="9" width="5" height="6" rx="1.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <rect x="16.5" y="9" width="5" height="6" rx="1.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <line x1="7.5" y1="12" x2="9.5" y2="12" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14.5" y1="12" x2="16.5" y2="12" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
};

const GRAMMAR_TABS = [
  { key: "foundation", label: "Foundation" },
  { key: "extras", label: "Supplementary" },
];

// Supplementary topics are single lessons with no hub page, so they open
// straight into the same chrome-less popup player every other lesson uses.
function openSupplementaryLesson(href) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    href,
    "sentivoSupplementary",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

const SUPP_PAGE_SIZE = 10;

function GrammarFeature({ navigate, query }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(() => {
    const fromUrl = searchParams.get("gTab");
    return GRAMMAR_TABS.some((t) => t.key === fromUrl) ? fromUrl : "foundation";
  });
  const [suppPage, setSuppPage] = useState(() => Number(searchParams.get("gPage")) || 0);
  const q = query.trim().toLowerCase();
  const tierModules = GRAMMAR_MODULES.filter((m) => m.tier === tab);
  const modules = q
    ? tierModules.filter((m) => m.title.toLowerCase().includes(q) || m.spec.toLowerCase().includes(q))
    : tierModules;

  // Supplementary only -- Foundation's grid is small and fixed (14 modules),
  // but Supplementary keeps growing, so it gets paginated 10 at a time.
  // Pagination is skipped while searching so matches aren't hidden on page 2+.
  const isPaginated = tab === "extras" && !q;
  const suppPageCount = isPaginated ? Math.ceil(modules.length / SUPP_PAGE_SIZE) : 1;
  const currentSuppPage = Math.min(suppPage, Math.max(0, suppPageCount - 1));
  const pagedModules = isPaginated
    ? modules.slice(currentSuppPage * SUPP_PAGE_SIZE, currentSuppPage * SUPP_PAGE_SIZE + SUPP_PAGE_SIZE)
    : modules;

  function goToSuppPage(page) {
    setSuppPage(page);
    const next = new URLSearchParams(searchParams);
    if (page > 0) next.set("gPage", String(page));
    else next.delete("gPage");
    setSearchParams(next, { replace: true });
  }

  function selectTab(key) {
    setTab(key);
    setSuppPage(0);
    const next = new URLSearchParams(searchParams);
    next.set("gTab", key);
    next.delete("gPage");
    setSearchParams(next, { replace: true });
  }

  return (
    <div
      className="gdn-page"
      style={{ "--gdn-bg-landscape": `url(${gdnLandscapeImg})`, "--gdn-bg-portrait": `url(${gdnPortraitImg})` }}
    >
      <div className="gdn-masthead">
        <span className="gdn-eyebrow">Sentivo · Grammar</span>
        <span className="gdn-badge">Let's Grow!</span>
        <h1 className="gdn-nameplate">🌱 The Grammar Garden</h1>
        <p className="gdn-sub">Each module below focuses on one grammar rule at a time, from simple patterns to full sentences.</p>
      </div>

      <div className="gdn-tabs">
        {GRAMMAR_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`gdn-tab ${tab === t.key ? "is-active" : ""}`}
            onClick={() => selectTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="gdn-row"></div>

      {modules.length === 0 && (
        <p className="empty-msg">
          {q ? `No grammar modules match "${query.trim()}".` : "New modules are on the way — check back soon."}
        </p>
      )}
      {tab === "foundation" ? (
        <div className="gdn-beds">
          {modules.map((m) =>
            m.ready ? (
              <a
                key={m.num}
                href={m.href}
                className={`gdn-bed gdn-bed--${m.hue}`}
                onClick={(e) => { e.preventDefault(); navigate(m.href); }}
              >
                <h3 className="gdn-bed-title">{m.title}</h3>
                <span className="gdn-bed-cta">Open →</span>
              </a>
            ) : (
              <div key={m.num} className={`gdn-bed gdn-bed--${m.hue} gdn-bed--empty`}>
                <h3 className="gdn-bed-title">{m.title}</h3>
                <span className="gdn-bed-cta">Coming soon</span>
              </div>
            )
          )}
        </div>
      ) : (
        <>
          <div className="gdn-supp-list">
            {pagedModules.map((m) =>
              m.ready ? (
                <a
                  key={m.num}
                  href={m.href}
                  className="gdn-supp-row"
                  onClick={(e) => { e.preventDefault(); openSupplementaryLesson(m.href); }}
                >
                  <span className={`gdn-supp-icon gdn-supp-icon--${m.hue}`}>{m.icon}</span>
                  <span className="gdn-supp-text">
                    <h3 className="gdn-supp-title">{m.title}</h3>
                    <p className="gdn-supp-spec">{m.spec}</p>
                  </span>
                  <span className="gdn-supp-cta">Open →</span>
                </a>
              ) : (
                <div key={m.num} className="gdn-supp-row gdn-supp-row--empty">
                  <span className={`gdn-supp-icon gdn-supp-icon--${m.hue}`}>{m.icon}</span>
                  <span className="gdn-supp-text">
                    <h3 className="gdn-supp-title">{m.title}</h3>
                    <p className="gdn-supp-spec">{m.spec}</p>
                  </span>
                  <span className="gdn-supp-cta gdn-supp-cta--empty">Coming soon</span>
                </div>
              )
            )}
          </div>

          {isPaginated && suppPageCount > 1 && (
            <div className="gdn-supp-pager">
              <button
                type="button"
                className="gdn-supp-pager-btn"
                onClick={() => goToSuppPage(Math.max(0, currentSuppPage - 1))}
                disabled={currentSuppPage === 0}
              >
                ← Prev
              </button>
              <div className="gdn-supp-pager-dots">
                {Array.from({ length: suppPageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`gdn-supp-pager-dot ${i === currentSuppPage ? "is-active" : ""}`}
                    onClick={() => goToSuppPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="gdn-supp-pager-btn"
                onClick={() => goToSuppPage(Math.min(suppPageCount - 1, currentSuppPage + 1))}
                disabled={currentSuppPage === suppPageCount - 1}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const BOOK_MOTIF_COLORS = ["#E8A33D", "#16BFAE", "#7C5CFC", "#4C7FE0", "#E0637A", "#E89E2E", "#0F9E90", "#A9754D"];

// Age track per book -- local lookup since the Supabase "tools" row only
// carries CEFR level, not age. Books 1-6 are the Teens-narrator series
// (school friends), Books 7-12 are the Adults-narrator series (office,
// shop, health, free time, food). No Kids-track story exists yet.
export const BOOK_AGE_TRACK = {
  "storybook-13": "Kids",
  "storybook-14": "Kids",
  "storybook-15": "Kids",
  "storybook-16": "Kids",
  "storybook-17": "Kids",
  "storybook-18": "Kids",
  "storybook-19": "Kids",
  "storybook-20": "Kids",
  "storybook-21": "Teens",
  "storybook-22": "Teens",
  "storybook-23": "Kids",
  "storybook-24": "Kids",
  "storybook-25": "Kids",
  "storybook-26": "Kids",
  "storybook-27": "Kids",
  "storybook-28": "Kids",
  "storybook-29": "Kids",
  "storybook-30": "Kids",
  "storybook-31": "Teens",
  "storybook-32": "Teens",
  "storybook-33": "Teens",
  "storybook-34": "Teens",
  "storybook-35": "Teens",
  "storybook-36": "Teens",
  "storybook-37": "Teens",
  "storybook-38": "Teens",
  "storybook-39": "Adults",
  "storybook-40": "Adults",
  "storybook-41": "Adults",
  "storybook-42": "Adults",
  "storybook-43": "Adults",
  "storybook-44": "Adults",
  "storybook-45": "Adults",
  "storybook-46": "Adults",
  "storybook-47": "Adults",
  "storybook-48": "Adults",
  "storybook-49": "Teens",
  "storybook-50": "Teens",
  "storybook-51": "Teens",
  "storybook-52": "Teens",
  "storybook-53": "Teens",
  "storybook-54": "Teens",
  "storybook-55": "Teens",
  "storybook-56": "Teens",
  "storybook-57": "Adults",
  "storybook-58": "Adults",
  "storybook-59": "Adults",
  "storybook-60": "Adults",
  "storybook-61": "Adults",
  "storybook-62": "Adults",
  "storybook-63": "Adults",
  "storybook-64": "Adults",
  "storybook-65": "Teens",
  "storybook-66": "Teens",
  "storybook-67": "Teens",
  "storybook-68": "Teens",
  "storybook-69": "Teens",
  "storybook-70": "Teens",
  "storybook-71": "Teens",
  "storybook-72": "Teens",
  "storybook-73": "Adults",
  "storybook-74": "Adults",
  "storybook-75": "Adults",
  "storybook-76": "Adults",
  "storybook-77": "Adults",
  "storybook-78": "Adults",
  "storybook-79": "Adults",
  "storybook-80": "Adults",
  storybook: "Teens",
  "storybook-2": "Teens",
  "storybook-3": "Teens",
  "storybook-4": "Teens",
  "storybook-5": "Teens",
  "storybook-6": "Teens",
  "storybook-7": "Adults",
  "storybook-8": "Adults",
  "storybook-9": "Adults",
  "storybook-10": "Adults",
  "storybook-11": "Adults",
  "storybook-12": "Adults",
};
// Reading stops at B2 -- C1/C2 learners are expected to work on Speaking
// instead, so no story content will ever exist for those levels.
const READING_LEVELS = ["A1", "A2", "B1", "B2"];
const READING_AGE_TRACKS = ["Kids", "Teens", "Adults"];

const SEARCH_MODES = [
  { key: "dictionary", label: "Dictionary" },
  { key: "grammar", label: "Grammar Checker" },
  { key: "translator", label: "Translator" },
];

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModeIcon({ mode }) {
  if (mode === "dictionary") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5v-15Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </svg>
    );
  }
  if (mode === "grammar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 2 4 4-13 13H5v-4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  );
}

function BookshelfRows({ books, navigate, colorOffset }) {
  const rows = [];
  for (let i = 0; i < books.length; i += 4) rows.push(books.slice(i, i + 4));

  return rows.map((row, ri) => (
    <div key={ri} className="bkshf-shelf-group">
      <div className="bkshf-shelf-row">
        {row.map((c, i) => {
          const color = BOOK_MOTIF_COLORS[(colorOffset + ri * 4 + i) % BOOK_MOTIF_COLORS.length];
          const cover = STORY_COVERS[c.id];
          return (
            <a
              key={c.id}
              href={`/library/${c.id}`}
              className="bkshf-book"
              onClick={(e) => { e.preventDefault(); navigate(`/library/${c.id}`); }}
            >
              {cover ? (
                <>
                  <img className="bkshf-book-img" src={cover} alt={c.title} />
                  <div className="bkshf-book-scrim" />
                  <h3 className="bkshf-book-title bkshf-book-title--onimg">{c.title}</h3>
                </>
              ) : (
                <div className="bkshf-book-flat" style={{ background: `${color}26` }}>
                  <span className="bkshf-book-spine" style={{ background: color }} />
                  <span className="bkshf-ribbon" style={{ background: color }} />
                  <h3 className="bkshf-book-title">{c.title}</h3>
                </div>
              )}
            </a>
          );
        })}
      </div>
      <div className="bkshf-shelf-ledge" />
    </div>
  ));
}

function BookshelfFeature({ items, navigate, query }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [level, setLevel] = useState(() => {
    const fromUrl = searchParams.get("rLevel");
    return READING_LEVELS.includes(fromUrl) ? fromUrl : "A1";
  });
  const isSearching = query.trim().length > 0;

  function selectLevel(lvl) {
    setLevel(lvl);
    const next = new URLSearchParams(searchParams);
    next.set("rLevel", lvl);
    setSearchParams(next, { replace: true });
  }
  // A search should surface matches across every level, not just the
  // currently selected level tab, so the level filter is skipped while
  // `items` (already title-matched by the parent) has an active query.
  const levelItems = isSearching ? items : items.filter((c) => (c.level || "A1") === level);
  let colorOffset = 0;
  const groups = READING_AGE_TRACKS.map((track) => {
    const books = levelItems.filter((c) => (BOOK_AGE_TRACK[c.id] || "Teens") === track);
    const group = { track, books, colorOffset };
    colorOffset += books.length;
    return group;
  }).filter((g) => g.books.length > 0);

  return (
    <div className="bkshf-page" style={{ backgroundImage: `url(${bkshfBgImg})` }}>
      <div className="bkshf-masthead">
        <span className="bkshf-eyebrow">Sentivo · Reading</span>
        <h1 className="bkshf-nameplate">Library</h1>
        <p className="bkshf-tagline">Each book below is organized by CEFR level and age group, so you can read at the right difficulty.</p>
      </div>

      {!isSearching && (
        <div className="bkshf-level-tabs">
          {READING_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`bkshf-level-tab ${level === lvl ? "is-active" : ""}`}
              onClick={() => selectLevel(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
      )}

      <div className="bkshf-row"></div>

      {groups.length === 0 ? (
        <div className="bkshf-empty">
          <span className="bkshf-empty-icon">📚</span>
          <p className="bkshf-empty-title">{isSearching ? `No stories match "${query.trim()}"` : `No ${level} stories yet`}</p>
          <p className="bkshf-empty-desc">{isSearching ? "Try a different search term." : "Check back soon, more levels are on the way."}</p>
        </div>
      ) : (
        <div className="bkshf-shelves">
          {groups.map((g) => (
            <div key={g.track} className="bkshf-age-group">
              <div className="bkshf-age-label">{g.track}</div>
              <BookshelfRows books={g.books} navigate={navigate} colorOffset={g.colorOffset} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Opens the Spin the Wheel tool as a standalone popup -- matching the
// FORGE/ASCEND/Article Player chrome-less window.open pattern.
function openWheel() {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(980, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    "/library/wheel",
    "sentivoWheel",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Same popup pattern for the post-lesson Feedback Generator.
function openFeedbackGenerator() {
  window.open("/library/feedback", "_blank");
}

function TodayFeature({ navigate }) {
  const { user, plan } = useAuth();
  const [postCount, setPostCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!user) { setPostCount(0); setCommentCount(0); setLikeCount(0); return; }
    let cancelled = false;
    let timer;

    async function loadCounts() {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const [{ count: posts }, { count: comments }, { count: likes }] = await Promise.all([
        supabase.from("community_posts").select("id", { count: "exact", head: true }).eq("author_id", user.id).gte("created_at", startOfToday.toISOString()),
        supabase.from("community_comments").select("id", { count: "exact", head: true }).eq("author_id", user.id).gte("created_at", startOfToday.toISOString()),
        supabase.from("community_likes").select("id", { count: "exact", head: true }).eq("user_id", user.id).gte("created_at", startOfToday.toISOString()),
      ]);
      if (cancelled) return;
      setPostCount(posts || 0);
      setCommentCount(comments || 0);
      setLikeCount(likes || 0);
      scheduleNextRefresh();
    }

    // Re-fetch right at the next local midnight, then reschedule for the
    // one after that -- otherwise a tab left open across midnight keeps
    // showing yesterday's (now-expired) counts until someone reloads.
    function scheduleNextRefresh() {
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 5, 0);
      timer = setTimeout(loadCounts, nextMidnight.getTime() - Date.now());
    }

    loadCounts();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [user]);

  function handleCommunityActivity(kind) {
    if (kind === "post") setPostCount((c) => c + 1);
    else if (kind === "comment") setCommentCount((c) => c + 1);
    else if (kind === "like") setLikeCount((c) => c + 1);
  }

  // Teacher's Desk is free for everyone, but a free-plan teacher has to
  // participate in Homeroom *today* to unlock it for today -- resets daily,
  // paid plans skip this entirely. Any 3 posts/comments/likes combined
  // count, not 3 of the same type.
  const deskUnlocked = plan !== "free" || postCount + commentCount + likeCount >= 3;
  const deskProgress = postCount + commentCount + likeCount;

  const today = new Date();
  const dayIndex = daysSince(today);
  const total = DAILY_CORRECTIONS.length;
  const headlineIdx = ((dayIndex % total) + total) % total;
  const headline = DAILY_CORRECTIONS[headlineIdx];
  const briefIdxs = pickDeterministic(total, headlineIdx, 2);
  const briefs = briefIdxs.map((i) => DAILY_CORRECTIONS[i]);

  const deskLockTitle = deskUnlocked ? undefined : `Post, comment, or like 3 times in Homeroom today to unlock. You're at ${deskProgress}/3 today.`;

  const toolkit = (
    <>
      <div className="td-section-label">Teacher's Desk</div>

      {!deskUnlocked && (
        <p className="td-desk-lock-note">
          <LockIcon /> Post, comment, or like 3 times in Homeroom today to unlock. You're at {deskProgress}/3 today.
        </p>
      )}

      <div className={`td-actions-grid${deskUnlocked ? "" : " is-locked"}`}>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? openFeedbackGenerator : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayFeedbackIcon} alt="" /></div>
          <div className="td-action-title">Lesson Feedback</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? openWheel : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayWheelIcon} alt="" /></div>
          <div className="td-action-title">Spin the Wheel</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? () => navigate("/library/notebook") : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayNotebookIcon} alt="" /></div>
          <div className="td-action-title">Digital Notebook</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? () => navigate("/library/syllabus") : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todaySyllabusIcon} alt="" /></div>
          <div className="td-action-title">Syllabus Generator</div>
        </button>
      </div>
    </>
  );

  return (
    <div className="gc-dashboard">
      <div className="td-body">
      <div className="td-main">
        <CommunityFeed afterStats={toolkit} onActivity={handleCommunityActivity} />

        <div className="td-quote-banner">
          <img src={todayQuoteBanner} alt="Every lesson is a chance to make a difference." />
        </div>
      </div>

      <aside className="gc-sidebar">
        <div className="td-brief-panel">
          <div className="td-brief-clock">
            <DigitalClock />
          </div>

          <div className="td-brief-section">
            <div className="td-dc-label">
              <span className="td-dc-badge"><PencilIcon /></span>
              Daily Correction
            </div>
            <h2 className="td-dc-headline">
              <span className="td-dc-quote">&#10078;</span>
              <CorrectionLine segments={headline.sentence} />
            </h2>
            <div className="td-dc-why">
              {headline.explain.map((line, i) => (
                <p className="td-dc-explain" key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="td-brief-list">
            <div className="td-brief-list-label">More corrections today</div>
            {briefs.map((b) => (
              <div className={`td-brief-row hue-${b.hue === "grammar" ? "coral" : b.hue === "vocab" ? "gold" : "teal"}`} key={b.id}>
                <span className="td-brief-dot" />
                <div className="td-brief-row-body">
                  <div className="td-brief-label">{b.category}</div>
                  <p className="td-brief-line"><CorrectionLine segments={b.sentence} /></p>
                </div>
                <div className="td-brief-pop">
                  {b.explain.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      </div>
    </div>
  );
}

// Static story-cover lookup by tools.id -- stories are static content (like
// storybookData.js), not stored in Supabase, so their cover art is looked up
// locally here rather than via a DB column. Books without art yet fall back
// to an ImagePlaceholder in the card.
const STORY_COVERS = {
  storybook: storybookCoverImg,
  "storybook-2": storybook2CoverImg,
  "storybook-3": storybook3CoverImg,
  "storybook-4": storybook4CoverImg,
  "storybook-5": storybook5CoverImg,
  "storybook-6": storybook6CoverImg,
  "storybook-7": storybook7CoverImg,
  "storybook-8": storybook8CoverImg,
  "storybook-9": storybook9CoverImg,
  "storybook-10": storybook10CoverImg,
  "storybook-11": storybook11CoverImg,
  "storybook-12": storybook12CoverImg,
  "storybook-14": storybook14CoverImg,
  "storybook-15": storybook15CoverImg,
  "storybook-16": storybook16CoverImg,
  "storybook-17": storybook17CoverImg,
  "storybook-18": storybook18CoverImg,
  "storybook-19": storybook19CoverImg,
  "storybook-20": storybook20CoverImg,
  "storybook-23": storybook23CoverImg,
  "storybook-24": storybook24CoverImg,
  "storybook-25": storybook25CoverImg,
  "storybook-26": storybook26CoverImg,
  "storybook-27": storybook27CoverImg,
  "storybook-28": storybook28CoverImg,
  "storybook-29": storybook29CoverImg,
  "storybook-30": storybook30CoverImg,
  "storybook-13": storybook13CoverImg,
  "storybook-21": storybook21CoverImg,
  "storybook-22": storybook22CoverImg,
  "storybook-41": storybook41CoverImg,
  "storybook-42": storybook42CoverImg,
  "storybook-43": storybook43CoverImg,
  "storybook-44": storybook44CoverImg,
  "storybook-45": storybook45CoverImg,
  "storybook-46": storybook46CoverImg,
  "storybook-47": storybook47CoverImg,
  "storybook-48": storybook48CoverImg,
  "storybook-31": storybook31CoverImg,
  "storybook-32": storybook32CoverImg,
  "storybook-33": storybook33CoverImg,
  "storybook-34": storybook34CoverImg,
  "storybook-35": storybook35CoverImg,
  "storybook-36": storybook36CoverImg,
  "storybook-37": storybook37CoverImg,
  "storybook-38": storybook38CoverImg,
  "storybook-39": storybook39CoverImg,
  "storybook-40": storybook40CoverImg,
  "storybook-49": storybook49CoverImg,
  "storybook-50": storybook50CoverImg,
  "storybook-51": storybook51CoverImg,
  "storybook-52": storybook52CoverImg,
  "storybook-53": storybook53CoverImg,
  "storybook-54": storybook54CoverImg,
  "storybook-55": storybook55CoverImg,
  "storybook-56": storybook56CoverImg,
  "storybook-57": storybook57CoverImg,
  "storybook-58": storybook58CoverImg,
  "storybook-59": storybook59CoverImg,
  "storybook-60": storybook60CoverImg,
  "storybook-61": storybook61CoverImg,
  "storybook-62": storybook62CoverImg,
  "storybook-63": storybook63CoverImg,
  "storybook-64": storybook64CoverImg,
  "storybook-65": storybook65CoverImg,
  "storybook-66": storybook66CoverImg,
  "storybook-67": storybook67CoverImg,
  "storybook-68": storybook68CoverImg,
  "storybook-69": storybook69CoverImg,
  "storybook-70": storybook70CoverImg,
  "storybook-71": storybook71CoverImg,
  "storybook-72": storybook72CoverImg,
  "storybook-73": storybook73CoverImg,
  "storybook-74": storybook74CoverImg,
  "storybook-75": storybook75CoverImg,
  "storybook-76": storybook76CoverImg,
  "storybook-77": storybook77CoverImg,
  "storybook-78": storybook78CoverImg,
  "storybook-79": storybook79CoverImg,
  "storybook-80": storybook80CoverImg,
};

// Same idea for FORGE tracks -- each track (one card per learner profile)
// gets a real cover photo once generated; falls back to an ImagePlaceholder
// in the card until then. Portrait, same ~0.7 width:height ratio as every
// other card in the grid (see the ASPECT constant below).
const FORGE_COVERS = {
  "forge-1": forge1CoverImg,
};

const PER_PAGE = 8;

function Motif({ type }) {
  switch (type) {
    case "stress":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <text x="38" y="40" textAnchor="middle" className="motif-word motif-word--dim">re</text>
          <text x="68" y="40" textAnchor="middle" className="motif-word motif-word--bold">CORD</text>
          <circle cx="86" cy="14" r="5" className="motif-dot" />
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M20 55 L20 25 Q20 15 30 15 L70 15" className="motif-line" fill="none" />
          <circle cx="20" cy="55" r="4" className="motif-node" />
          <circle cx="70" cy="15" r="4" className="motif-node" />
          <path d="M20 55 L60 55" className="motif-line" fill="none" />
          <circle cx="60" cy="55" r="4" className="motif-node" />
        </svg>
      );
    case "waves":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M10 30 Q22 18 35 30 T60 30 T85 30" className="motif-line" fill="none" />
          <path d="M10 45 Q22 33 35 45 T60 45 T85 45" className="motif-line motif-line--dim" fill="none" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M30 25c-8 0-13 6-13 14s5 13 13 13c2-10 6-16 14-22" className="motif-line" fill="none" />
          <path d="M65 25c-8 0-13 6-13 14s5 13 13 13c2-10 6-16 14-22" className="motif-line" fill="none" />
        </svg>
      );
    case "letters":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <text x="38" y="46" textAnchor="middle" className="motif-word motif-word--bold" style={{ fontSize: 30 }}>A</text>
          <text x="68" y="46" textAnchor="middle" className="motif-word motif-word--dim" style={{ fontSize: 26 }}>a</text>
        </svg>
      );
    default:
      return null;
  }
}

// Bespoke per-tool icons for redesigned covers. Each one has a Fun (illustrated,
// colorful) version and a Pro (minimal line-art) version, switched by isPro.
function BespokeIcon({ type, isPro, style }) {
  if (isPro) {
    switch (type) {
      case "apple":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
            <path d="M30 50l16 -44 16 44" transform="translate(7,0)" />
            <path d="M38 30h16" transform="translate(7,0)" />
          </svg>
        );
      case "soundwave":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" style={style}>
            <path d="M22 42V30M34 46V24M46 48V20M58 44V28M70 38V34" />
          </svg>
        );
      case "headphones":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" style={style}>
            <path d="M28 38v-5a22 22 0 0 1 44 0v5" />
            <rect x="23" y="36" width="10" height="17" rx="5" />
            <rect x="67" y="36" width="10" height="17" rx="5" />
          </svg>
        );
      case "book":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
            <path d="M50 24c-9-5-21-5-30-2v28c9-3 21-3 30 2c9-5 21-5 30-2V22c-9-3-21-3-30 2z" />
            <path d="M50 24v28" />
          </svg>
        );
      default:
        return null;
    }
  }

  switch (type) {
    case "apple":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="20" ry="6" className="bespoke-shadow" />
          <g transform="translate(50,32)">
            <path d="M0 -24c-17 0 -23 15 -23 26c0 15 11 26 23 26s23 -11 23 -26c0 -11 -6 -26 -23 -26z" className="bespoke-apple-body" />
            <ellipse cx="-9" cy="-3" rx="5" ry="10" className="bespoke-apple-shine" />
            <path d="M0 -24q2 -7 7 -5" className="bespoke-apple-stem" />
            <path d="M4 -27c7 -3 11 3 8 8c-5 1 -11 -3 -8 -8z" className="bespoke-apple-leaf" />
          </g>
        </svg>
      );
    case "soundwave":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="22" ry="6" className="bespoke-shadow" />
          <path
            d="M19 22h60a7 7 0 0 1 7 7v18a7 7 0 0 1 -7 7h-35l-10 10v-10h-15a7 7 0 0 1 -7 -7v-18a7 7 0 0 1 7 -7z"
            className="bespoke-bubble"
          />
          <g className="bespoke-bars" strokeLinecap="round">
            <rect x="32" y="34" width="4" height="11" rx="2" />
            <rect x="40" y="30" width="4" height="19" rx="2" />
            <rect x="48" y="26" width="4" height="23" rx="2" />
            <rect x="56" y="32" width="4" height="15" rx="2" opacity="0.55" />
            <rect x="64" y="36" width="4" height="9" rx="2" opacity="0.4" />
          </g>
        </svg>
      );
    case "headphones":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="24" ry="6" className="bespoke-shadow" />
          <g className="bespoke-headphones" strokeLinecap="round" fill="none">
            <path d="M27 38v-6a23 23 0 0 1 46 0v6" strokeWidth="5" />
            <rect x="20" y="35" width="11" height="18" rx="5.5" />
            <rect x="69" y="35" width="11" height="18" rx="5.5" />
            <path d="M80 38q9 4 9 12" strokeWidth="2" opacity="0.55" />
            <path d="M85 35q13 4 11 17" strokeWidth="2" opacity="0.3" />
          </g>
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="54" rx="26" ry="6" className="bespoke-shadow" />
          <g>
            <path d="M50 20c-8-6-20-6-28-3v30c8-3 20-3 28 3z" className="bespoke-book-left" />
            <path d="M50 20c8-6 20-6 28-3v30c-8-3-20-3-28 3z" className="bespoke-book-right" />
            <path d="M50 20v30" className="bespoke-book-spine" />
            <path d="M27 24l16 2.5M27 31l16 2.5M27 38l14 2" className="bespoke-book-lines" />
            <path d="M73 24l-16 2.5M73 31l-16 2.5M73 38l-14 2" className="bespoke-book-lines" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export default function Library() {
  const isPro = true;
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(() => searchParams.get("cat") || "All");
  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);
  const [query, setQuery] = useState(() => searchParams.get("q") || "");
  const [clTab, setClTab] = useState(() => searchParams.get("clTab") || "All");
  const [clFormOpen, setClFormOpen] = useState(false);
  const [clStudentName, setClStudentName] = useState("");
  const [clLevel, setClLevel] = useState("A1");
  const [clAgeTrack, setClAgeTrack] = useState("Kids");
  const [clTopic, setClTopic] = useState("");
  const [clLanguage, setClLanguage] = useState("");
  const [clDuration, setClDuration] = useState("25");
  const [clNotes, setClNotes] = useState("");
  const [clCopied, setClCopied] = useState(false);
  const [clRequests, setClRequests] = useState([]);
  const [clRequestsLoading, setClRequestsLoading] = useState(false);
  const [showAllToday, setShowAllToday] = useState(false);
  const { user, plan, signOut } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === "caldrin1999@gmail.com";
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notifWrapRef = useRef(null);
  const unreadNotifCount = notifications.filter((n) => !n.read_at).length;
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [searchModeMenuOpen, setSearchModeMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(null);
  const [promptQuery, setPromptQuery] = useState("");
  const searchWrapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isCurriculum = location.pathname.startsWith("/library/curriculum");
  const isTeensCurriculum = location.pathname.startsWith("/library/curriculum/teens/");
  const isAdultsCurriculum = location.pathname.startsWith("/library/curriculum/adults/");
  const curriculumLevel = params.level || null;
  const curriculumTrack = params.track || null;
  const curriculumUnit = params.unitNum || null;
  const isSpark = location.pathname === "/library/spark";
  const isArticleReader = location.pathname.startsWith("/library/articles/") && !!params.slug;

  function goToSidebar(sidebar, level = null) {
    if (sidebar === "curriculum") {
      navigate(level ? `/library/curriculum/${level}` : "/library/curriculum");
    } else {
      navigate("/library");
    }
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setSearchModeMenuOpen(false);
      }
      if (notifWrapRef.current && !notifWrapRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!user) { setAvatarUrl(null); return; }
    supabase.from("profiles").select("avatar_url").eq("id", user.id).maybeSingle().then(({ data }) => {
      setAvatarUrl(data?.avatar_url || null);
    });
  }, [user]);

  useEffect(() => {
    if (!user) { setNotifications([]); return; }
    supabase
      .from("notifications")
      .select("id, type, actor_name, post_id, read_at, created_at")
      .eq("recipient_id", user.id)
      .order("created_at", { ascending: false })
      .limit(20)
      .then(({ data }) => setNotifications(data || []));
  }, [user]);

  useEffect(() => {
    if (!user || category !== "Customized Lessons") return;
    let isMounted = true;
    setClRequestsLoading(true);
    supabase
      .from("custom_lesson_requests")
      .select("id, student_name, level, age_track, language, duration, topic, notes, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (!isMounted) return;
        setClRequests(data || []);
        setClRequestsLoading(false);
      });
    return () => { isMounted = false; };
  }, [user, category]);

  useEffect(() => {
    if (!user) { setUnreadMessageCount(0); return; }
    async function loadUnreadMessages() {
      const { data: convos } = await supabase
        .from("conversations")
        .select("id")
        .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`);
      const ids = (convos || []).map((c) => c.id);
      if (!ids.length) { setUnreadMessageCount(0); return; }
      const { count } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .in("conversation_id", ids)
        .is("read_at", null)
        .neq("sender_id", user.id);
      setUnreadMessageCount(count || 0);
    }
    loadUnreadMessages();
    if (!user) return;
    const channel = supabase
      .channel(`unread-badge-${user.id}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, loadUnreadMessages)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, loadUnreadMessages)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  function openNotifPanel() {
    setNotifOpen((wasOpen) => {
      const nowOpen = !wasOpen;
      if (nowOpen && unreadNotifCount > 0) {
        const unreadIds = notifications.filter((n) => !n.read_at).map((n) => n.id);
        setNotifications((prev) => prev.map((n) => (n.read_at ? n : { ...n, read_at: new Date().toISOString() })));
        supabase.from("notifications").update({ read_at: new Date().toISOString() }).in("id", unreadIds);
      }
      return nowOpen;
    });
  }

  function goToNotification(n) {
    setNotifOpen(false);
    navigate(n.post_id ? `/library/community?post=${n.post_id}` : "/library/community");
  }

  function pickSearchMode(key) {
    setSearchModeMenuOpen(false);
    if (plan !== "pro_plus") {
      navigate("/library/subscription");
      return;
    }
    setSearchMode(key);
    setPromptQuery("");
  }

  function clearSearchMode() {
    setSearchMode(null);
    setPromptQuery("");
  }

  function submitSearchMode() {
    const q = promptQuery.trim();
    if (!q || !searchMode) return;
    navigate(`/library/search?mode=${searchMode}&q=${encodeURIComponent(q)}`);
    setPromptQuery("");
    setSearchMode(null);
  }

  const gridWrapRef = useRef(null);
  const [gridConfig, setGridConfig] = useState({ width: 160, height: 224, columns: 4 });

  const [tools, setTools] = useState([]);
  const [toolsLoading, setToolsLoading] = useState(true);
  const [toolsError, setToolsError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadTools() {
      setToolsLoading(true);
      setToolsError(null);
      const { data, error } = await supabase
        .from("tools")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!isMounted) return;
      if (error) {
        setToolsError(error.message);
        setTools([]);
      } else {
        setTools(data || []);
      }
      setToolsLoading(false);
    }
    loadTools();
    return () => { isMounted = false; };
  }, []);

  const filtered = tools.filter((t) => {
    const matchesCategory =
      category === "All"
        ? true
        : category === "Reading"
          ? t.category === "Reading" && t.content_type === "story"
          : t.category === category;
    const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  useEffect(() => {
    const ASPECT = 0.7; // width / height -> taller than wide, like a real book
    const GAP = 14;

    function recalc() {
      const el = gridWrapRef.current;
      if (!el) return;
      const W = el.clientWidth;
      const H = el.clientHeight;
      if (!W || !H) return;

      const count = pageItems.length || 1;
      const columns = Math.min(4, count);
      const rows = Math.max(1, Math.ceil(count / columns));

      const availW = (W - GAP * (columns - 1)) / columns;
      const availH = (H - GAP * (rows - 1)) / rows;

      let height = Math.min(availH, availW / ASPECT);
      height = Math.max(110, height);
      const width = height * ASPECT;

      setGridConfig({ width, height, columns });
    }

    recalc();

    const el = gridWrapRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", recalc);
      return () => window.removeEventListener("resize", recalc);
    }
    const observer = new ResizeObserver(recalc);
    observer.observe(el);
    return () => observer.disconnect();
  }, [pageItems.length, isPro]);

  function changeCategory(cat) {
    setCategory(cat);
    setPage(1);
    setShowAllToday(false);
    navigate(`/library?cat=${encodeURIComponent(cat)}`);
  }

  function buildCustomLessonRequestText() {
    const lines = [
      "Custom Lesson Request",
      `Student: ${clStudentName.trim() || "Not specified"}`,
      `Topic: ${clTopic.trim()}`,
      `Level: ${clLevel} · ${clAgeTrack}`,
      `Duration: ${clDuration} minutes`,
      `Student's language: ${clLanguage.trim()}`,
    ];
    if (clNotes.trim()) lines.push(`Notes: ${clNotes.trim()}`);
    lines.push("", "Sent at least 2 hours before the lesson.");
    return lines.join("\n");
  }

  async function handleCopyCustomLessonRequest() {
    const text = buildCustomLessonRequestText();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard access can fail (permissions, browser context); the
      // filled-in fields are still right there for a manual copy either way.
    }
    setClCopied(true);
    if (user) {
      const { data } = await supabase
        .from("custom_lesson_requests")
        .insert({
          user_id: user.id,
          student_name: clStudentName.trim() || null,
          level: clLevel,
          age_track: clAgeTrack,
          language: clLanguage.trim(),
          duration: Number(clDuration) || null,
          topic: clTopic.trim(),
          notes: clNotes.trim() || null,
        })
        .select()
        .single();
      if (data) setClRequests((prev) => [data, ...prev]);
    }
    window.setTimeout(() => {
      setClCopied(false);
      setClStudentName("");
      setClTopic("");
      setClLanguage("");
      setClNotes("");
      setClDuration("25");
      setClFormOpen(false);
    }, 1600);
  }

  async function markCustomLessonRequestReceived(requestId) {
    setClRequests((prev) => prev.map((r) => (r.id === requestId ? { ...r, status: "delivered" } : r)));
    await supabase.from("custom_lesson_requests").update({ status: "delivered" }).eq("id", requestId);
  }

  const genericContent = toolsLoading ? (
    <p className="empty-msg">Loading library…</p>
  ) : toolsError ? (
    <p className="empty-msg">Couldn't load the library right now. Please refresh.</p>
  ) : pageItems.length === 0 ? (
    <p className="empty-msg">No tools found. Try a different search or category.</p>
  ) : (
    <div
      className="cover-grid"
      style={{ gridTemplateColumns: `repeat(${gridConfig.columns}, ${gridConfig.width}px)` }}
    >
      {pageItems.map((c) => {
  const CoverTag = "a";
  const coverProps = { href: c.content_type === "forge-track" ? `/library/forge/${c.id}` : `/library/${c.id}` };
  return (
    <CoverTag
      key={c.id}
      {...coverProps}
      className={`cover cover--${c.palette} ${c.tagline ? "cover--redesigned" : ""} ${c.content_type === "story" ? "cover--story" : ""} ${c.content_type === "forge-track" ? "cover--forge-track" : ""}`}
      style={{ width: `${gridConfig.width}px`, height: `${gridConfig.height}px` }}
    >
                {c.access === "premium" && (
                  <span className="premium-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    Premium
                  </span>
                )}

                {c.content_type === "forge-track" ? (
                  <div className="story-card-content">
                    {FORGE_COVERS[c.id] ? (
                      <img className="story-card-cover-img" src={FORGE_COVERS[c.id]} alt={c.title} />
                    ) : (
                      <div className="story-card-cover-ph">
                        <ImagePlaceholder note="Track cover photo" compact />
                      </div>
                    )}
                    <span className="story-badge">🗣️ Speaking</span>
                    <div className="story-card-scrim" />
                    <div className="story-card-text">
                      <h3 className="story-card-title">{c.title}</h3>
                      <span className="story-card-sub">{c.sub}</span>
                    </div>
                  </div>
                ) : c.content_type === "story" ? (
                  <div className="story-card-content">
                    {STORY_COVERS[c.id] ? (
                      <img className="story-card-cover-img" src={STORY_COVERS[c.id]} alt={c.title} />
                    ) : (
                      <div className="story-card-cover-ph">
                        <ImagePlaceholder note="Book cover image" compact />
                      </div>
                    )}
                    <span className="story-badge">📖 Story</span>
                    <div className="story-card-scrim" />
                    <div className="story-card-text">
                      <h3 className="story-card-title">{c.title}</h3>
                      <span className="story-card-sub">{c.sub}</span>
                    </div>
                  </div>
                ) : c.tagline ? (
                  <div
                    className="bespoke-content"
                    style={{ gap: Math.max(4, gridConfig.height * 0.028) }}
                  >
                    <div
                      className="bespoke-icon-wrap"
                      style={{ maxHeight: gridConfig.height * 0.65 }}
                    >
                      <BespokeIcon
                        type={c.motif}
                        isPro={isPro}
                        style={{ width: gridConfig.width * 0.67, maxWidth: "none" }}
                      />
                    </div>
                    <p
                      className="bespoke-tagline"
                      style={{ fontSize: Math.max(10, gridConfig.height * 0.065), margin: 0 }}
                    >
                      {c.tagline}
                    </p>
                    <div
                      className="bespoke-divider"
                      style={{ width: gridConfig.width * 0.7 }}
                    />
                    <span
                      className="bespoke-label"
                      style={{ fontSize: Math.max(7, gridConfig.height * 0.038) }}
                    >
                      {c.title.toUpperCase()}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="cover-motif"><Motif type={c.motif} /></div>
                    <div className="cover-text">
                      <h3>{c.title}</h3>
                      <span className="cover-sub">{c.sub}</span>
                    </div>
                    <div className="cover-footer">
                      <span className="cover-level">{c.level}</span>
                    </div>
                  </>
                )}
                </CoverTag>
              );
            })}
    </div>
  );

  return (
    <>
    <div className={`page ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="gc-band">
        <div className="gc-topbar">
          <a
            href="/library"
            className="gc-header-brand"
            onClick={(e) => { e.preventDefault(); changeCategory("All"); }}
          >
            <img src="/logo-sentivo.png" alt="" className="gc-header-logo" />entivo
          </a>
          <div className="gc-topbar-actions">
            <div className={`gc-search ${searchMode ? "has-mode" : ""}`} ref={searchWrapRef}>
              <div className="gc-search-icon-wrap">
                <button
                  type="button"
                  className="gc-search-icon-btn"
                  onClick={() => setSearchModeMenuOpen((o) => !o)}
                  title="Dictionary, Grammar & Translator"
                  aria-label="Open Dictionary, Grammar & Translator"
                  aria-expanded={searchModeMenuOpen}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="9" cy="9" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="13.6" y1="13.6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                {searchModeMenuOpen && (
                  <div className="gc-search-mode-menu">
                    <div className="gc-search-mode-heading">Look something up</div>
                    {SEARCH_MODES.map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        className={`gc-search-mode-item gc-search-mode-item--${m.key}`}
                        onClick={() => pickSearchMode(m.key)}
                      >
                        <span className="gc-search-mode-icon"><ModeIcon mode={m.key} /></span>
                        {m.label}
                        {plan !== "pro_plus" && <span className="gc-search-mode-lock">Pro+</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {searchMode && (
                <span className={`gc-search-pill gc-search-pill--${searchMode}`}>
                  <ModeIcon mode={searchMode} />
                  {SEARCH_MODES.find((m) => m.key === searchMode)?.label}
                  <button type="button" className="gc-search-pill-x" onClick={clearSearchMode} aria-label="Clear mode">×</button>
                </span>
              )}
              <input
                type="text"
                placeholder={searchMode ? `Ask ${SEARCH_MODES.find((m) => m.key === searchMode)?.label}…` : "Search library…"}
                value={searchMode ? promptQuery : query}
                onChange={(e) => {
                  if (searchMode) {
                    setPromptQuery(e.target.value);
                  } else {
                    setQuery(e.target.value);
                    setPage(1);
                    if (isCurriculum) goToSidebar("library");
                  }
                }}
                onKeyDown={(e) => {
                  if (searchMode && e.key === "Enter") {
                    e.preventDefault();
                    submitSearchMode();
                  } else if (searchMode && e.key === "Escape") {
                    clearSearchMode();
                  }
                }}
              />
              {searchMode && (
                <button
                  type="button"
                  className="gc-search-send-btn"
                  onClick={submitSearchMode}
                  disabled={!promptQuery.trim()}
                  aria-label="Submit"
                >
                  <SendIcon />
                </button>
              )}
            </div>
            {!user ? (
              <>
                <button className="gc-btn" onClick={() => setAuthMode("login")}>Log in</button>
                <button className="gc-btn primary" onClick={() => setAuthMode("signup")}>Sign up</button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={`notif-btn${unreadMessageCount > 0 ? " has-unread" : ""}`}
                  onClick={() => navigate("/library/messages")}
                  aria-label="Convo"
                  title="Convo"
                >
                  <ChatIcon />
                  {unreadMessageCount > 0 && <span className="notif-dot" />}
                </button>
                <div className="notif-wrap" ref={notifWrapRef}>
                  <button
                    type="button"
                    className={`notif-btn${unreadNotifCount > 0 ? " has-unread" : ""}`}
                    onClick={openNotifPanel}
                    aria-label="Notifications"
                    aria-expanded={notifOpen}
                  >
                    <BellIcon />
                    {unreadNotifCount > 0 && <span className="notif-dot" />}
                  </button>
                  {notifOpen && (
                    <div className="notif-panel">
                      <div className="notif-panel-head">Notifications</div>
                      {notifications.length === 0 ? (
                        <div className="notif-empty">
                          <BellIcon />
                          <p>You're all caught up.</p>
                        </div>
                      ) : (
                        <div className="notif-list">
                          {notifications.map((n) => (
                            <button
                              type="button"
                              key={n.id}
                              className={`notif-item${n.read_at ? "" : " is-unread"}`}
                              onClick={() => goToNotification(n)}
                            >
                              <span className="notif-item-text">
                                <strong>{n.actor_name || "Someone"}</strong>{" "}
                                {n.type === "post_reply" ? "replied to your post" : "replied to your comment"}
                              </span>
                              <span className="notif-item-time">{timeAgo(n.created_at)}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="account-wrap">
                  <button className="avatar-btn" onClick={() => setMenuOpen((m) => !m)} aria-label="Account menu">
                    {avatarUrl ? <img src={avatarUrl} alt="" className="avatar-btn-img" /> : <UserIcon />}
                  </button>
                  {menuOpen && (
                    <div className="account-menu">
                      <button type="button" className="account-menu-link" onClick={() => { setProfileOpen(true); setMenuOpen(false); }}>Profile</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/files"); setMenuOpen(false); }}>File Cabinet</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/subscription"); setMenuOpen(false); }}>Subscription</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/mentors"); setMenuOpen(false); }}>Find a Mentor</button>
                      {isAdmin && (
                        <button type="button" className="account-menu-link" onClick={() => { navigate("/library/admin/mentors"); setMenuOpen(false); }}>Mentor Applications</button>
                      )}
                      {isAdmin && (
                        <button type="button" className="account-menu-link" onClick={() => { navigate("/library/admin/teachers"); setMenuOpen(false); }}>Teachers</button>
                      )}
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/legal/terms"); setMenuOpen(false); }}>Terms & Privacy</button>
                      <a href="mailto:hello@sentivo.com">Help &amp; Support</a>
                      <button className="logout-btn" onClick={() => { signOut(); setMenuOpen(false); }}>Log out</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="gc-navbar">
          <div className="gc-sections">
            <button
              className={`gc-sec-tab ${!isCurriculum && !isArticleReader && !isSpark && category === "All" ? "is-active" : ""}`}
              onClick={() => changeCategory("All")}
            >
              Homeroom
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`gc-sec-tab ${!isCurriculum && (isArticleReader ? cat === "Articles" : category === cat) ? "is-active" : ""}`}
                onClick={() => changeCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gc-nav-divider" />

          <div className="gc-editions">
            <a href="/library/spark" className={`gc-ed-spark ${isSpark ? "is-active" : ""}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>
              Spark Class
            </a>
            <span className="gc-editions-sep" />
            <button
              className={`gc-ed-curr ${isCurriculum && !curriculumLevel ? "is-active" : ""}`}
              onClick={() => goToSidebar("curriculum", null)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
              Curriculum
            </button>
            <div className="gc-editions-levels">
              {["A1", "A2"].map((lvl) => (
                <button
                  key={lvl}
                  className={`gc-ed-tab ${isCurriculum && !isTeensCurriculum && !isAdultsCurriculum && curriculumLevel === lvl ? "is-active" : ""}`}
                  onClick={() => goToSidebar("curriculum", lvl)}
                  title={{ "A1": "A1 — Beginner", "A2": "A2 — Elementary" }[lvl]}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <span className="gc-editions-sep" />
            <button
              className={`gc-ed-custom ${!isCurriculum && !isSpark && category === "Customized Lessons" ? "is-active" : ""}`}
              onClick={() => changeCategory("Customized Lessons")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" /></svg>
              Custom Lessons
            </button>
          </div>
        </div>
      </header>

      <div className="body-wrap">
      {isArticleReader ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          <ArticleReader />
        </div>
      ) : isSpark ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          <SparkHub />
        </div>
      ) : isTeensCurriculum || isAdultsCurriculum ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          {plan === "pro_plus" ? (
            <TrackLevelPage
              audience={isTeensCurriculum ? "teens" : "adults"}
              level={curriculumLevel}
              onBack={() => navigate("/library/curriculum")}
            />
          ) : (
            <CurriculumLockedFeature navigate={navigate} />
          )}
        </div>
      ) : isCurriculum ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          {plan === "pro_plus" ? (
            <CurriculumRouter
              isPro={isPro}
              level={curriculumLevel}
              track={curriculumTrack}
              unit={curriculumUnit}
            />
          ) : (
            <CurriculumLockedFeature navigate={navigate} />
          )}
        </div>
      ) : (
      <main className={`content ${category === "Articles" ? "content--wide" : ""}`}>
                <div className={`grid-wrap ${category === "All" && !query.trim() && !showAllToday ? "grid-wrap--today" : (category === "Articles" || category === "Grammar" || category === "Reading" || category === "Speaking" || category === "Vocabulary" || category === "Writing" || category === "Listening" || category === "Customized Lessons") ? "grid-wrap--top" : ""}`} ref={gridWrapRef}>
        {category === "All" && !query.trim() && !showAllToday ? (
          toolsLoading ? (
            <p className="empty-msg">Loading today's edition…</p>
          ) : (
            <TodayFeature navigate={navigate} />
          )
        ) : category === "Articles" ? (
          <ArticlesFeature navigate={navigate} query={query} />
        ) : PRO_CATEGORIES.includes(category) && plan === "free" ? (
          <CategoryLockedFeature category={category} navigate={navigate} />
        ) : category === "Grammar" ? (
          <GrammarFeature navigate={navigate} query={query} />
        ) : category === "Reading" ? (
          <BookshelfFeature items={filtered} navigate={navigate} query={query} />
        ) : category === "Speaking" ? (
          <div
            className="spklab-page"
            style={{ "--spklab-bg-landscape": `url(${clinicLandscapeImg})`, "--spklab-bg-portrait": `url(${clinicPortraitImg})` }}
          >
            <div className="spklab-hero">
              <span className="spklab-eyebrow">Sentivo · Speaking</span>
              <h1 className="spklab-title">The Fluency Clinic</h1>
              <p className="spklab-sub">Each modality below is designed to close a specific speaking gap.</p>
            </div>
            <svg className="spklab-lane" viewBox="0 0 520 20" preserveAspectRatio="none">
              <polyline points="0,10 150,10 165,10 174,3 183,17 192,10 200,10 320,10 335,10 344,3 353,17 362,10 370,10 520,10"
                fill="none" stroke="#2AA8AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            </svg>
            {(() => {
              const q = query.trim().toLowerCase();

              if (q) {
                // Search drills into every modality's actual tracks (not just
                // the 7 diagnosis cards) so a real topic like "school" or
                // "travel" can be found, matching the Vocabulary/Writing
                // pattern of flattening sub-navigation while searching.
                const results = SPEAKING_SEARCH_INDEX.filter(
                  ({ modality, track }) =>
                    track.title.toLowerCase().includes(q) ||
                    (track.blurb || "").toLowerCase().includes(q) ||
                    (track.category || track.theme || "").toLowerCase().includes(q) ||
                    modality.name.toLowerCase().includes(q)
                );
                return results.length === 0 ? (
                  <p className="empty-msg">No Speaking tracks match "{query.trim()}".</p>
                ) : (
                  <div className="spklab-grid">
                    {results.map(({ modality, track }) => (
                      <a key={`${modality.key}-${track.id}`} href={`${modality.href}/${track.id}`} className={`spklab-card spklab-card--${modality.hue}`}>
                        <div className="spklab-pin-wrap">
                          <div className="spklab-pin">
                            <svg width="20" height="20" viewBox="0 0 24 24">{SPKLAB_PIN_ICONS[modality.key]}</svg>
                          </div>
                        </div>
                        <div className="spklab-body">
                          <h3 className="spklab-name">{track.title}</h3>
                          <div className="spklab-label">{modality.name}{track.level ? ` · ${track.level}` : ""}</div>
                          <p className="spklab-gap">{track.blurb}</p>
                          <span className="spklab-cta">Open {modality.name} →</span>
                        </div>
                      </a>
                    ))}
                  </div>
                );
              }

              return (
                <div className="spklab-grid">
                  {SPEAKING_TRACKS.map((t) => {
                    const Tag = t.comingSoon ? "div" : "a";
                    return (
                      <Tag
                        key={t.key}
                        {...(t.comingSoon ? {} : { href: t.href })}
                        className={`spklab-card spklab-card--${t.hue}${t.comingSoon ? " spklab-card--soon" : ""}`}
                      >
                        <div className="spklab-pin-wrap">
                          <div className="spklab-pin">
                            <svg width="20" height="20" viewBox="0 0 24 24">{SPKLAB_PIN_ICONS[t.key]}</svg>
                          </div>
                        </div>
                        <div className="spklab-body">
                          <h3 className="spklab-name">{t.name}</h3>
                          <div className="spklab-label">Diagnosis</div>
                          <p className="spklab-gap">{t.gap}</p>
                          <span className="spklab-cta">{t.comingSoon ? "Coming soon" : `Open ${t.name} →`}</span>
                        </div>
                      </Tag>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        ) : category === "Vocabulary" ? (
          <VocabularyGames query={query} />
        ) : category === "Writing" ? (
          <WritingActivities query={query} />
        ) : category === "Listening" ? (
          <div
            className="lst-page"
            style={{ "--lst-bg-landscape": `url(${listeningLandscapeImg})`, "--lst-bg-portrait": `url(${listeningPortraitImg})` }}
          >
            <div className="lst-hero">
              <span className="lst-hero-eyebrow">Sentivo · Listening</span>
              <h1 className="lst-hero-title">Listen Up!</h1>
              <p className="lst-hero-sub">Each activity below focuses on a specific listening skill, from catching key details to following spoken directions.</p>
            </div>

            <div className="lst-grid">
              {LISTENING_ACTIVITIES.map((a) => {
                const isReady = a.key === "gist-mc";
                return (
                  <div
                    className={`lst-card ${isReady ? "lst-card--ready" : ""}`}
                    key={a.key}
                    role={isReady ? "button" : undefined}
                    tabIndex={isReady ? 0 : undefined}
                    onClick={isReady ? () => navigate("/library/listening/gist-multiple-choice") : undefined}
                    onKeyDown={isReady ? (e) => { if (e.key === "Enter" || e.key === " ") navigate("/library/listening/gist-multiple-choice"); } : undefined}
                  >
                    <div className="lst-card-art"><img src={a.image} alt={a.title} /></div>
                    <div className="lst-card-body">
                      <div className="lst-tag-row">
                        <span className={`lst-tag lst-tag--${a.tagClass}`}>{a.tag}</span>
                        {isReady ? <span className="lst-ready">Try it</span> : <span className="lst-soon">Coming soon</span>}
                      </div>
                      <p className="lst-title">{a.title}</p>
                      <p className="lst-desc">{a.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : category === "Customized Lessons" ? (
          <div className="cl-page">
            <div className="cl-hero">
              <div className="cl-hero-kicker-row">
                <span className="cl-hero-rule" />
                <span className="cl-hero-kicker">Sentivo &middot; Custom Lessons</span>
                <span className="cl-hero-rule" />
              </div>
              <h1 className="cl-title">Custom Lessons</h1>
              <p className="cl-sub">Sometimes a student needs something the library doesn't have yet, their job, their upcoming trip, the exact words they asked about. Tell us who it's for, and we'll build it around them.</p>
            </div>

            <div className="cl-req">
              <div className="cl-req-head">
                <div className="cl-req-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                </div>
                <div className="cl-req-head-text">
                  <h2 className="cl-req-title">Ask for one</h2>
                  <p className="cl-req-lead">A couple of details and we'll take it from there. It'll show up in the gallery below once it's ready.</p>
                </div>
                <button type="button" className="cl-req-toggle" onClick={() => setClFormOpen((o) => !o)}>
                  {clFormOpen ? "Close" : "Request"}
                  <svg className={`cl-req-chevron ${clFormOpen ? "is-open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {clFormOpen && (
                <div className="cl-req-body">
                  <p className="cl-req-timing">⏰ Send this at least 2 hours before the lesson.</p>

                  <div className="cl-req-grid">
                    <label className="cl-req-field">
                      Student name
                      <input
                        type="text"
                        className="cl-req-input"
                        value={clStudentName}
                        onChange={(e) => setClStudentName(e.target.value)}
                        placeholder="e.g. Priya"
                      />
                    </label>
                    <label className="cl-req-field">
                      Level
                      <select className="cl-req-input" value={clLevel} onChange={(e) => setClLevel(e.target.value)}>
                        {["A1", "A2", "B1", "B2", "C1", "C2"].map((lv) => <option key={lv} value={lv}>{lv}</option>)}
                      </select>
                    </label>
                    <label className="cl-req-field">
                      Age group
                      <select className="cl-req-input" value={clAgeTrack} onChange={(e) => setClAgeTrack(e.target.value)}>
                        {["Kids", "Teens", "Adults"].map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="cl-req-field">
                      Student's language
                      <input
                        type="text"
                        className="cl-req-input"
                        value={clLanguage}
                        onChange={(e) => setClLanguage(e.target.value)}
                        placeholder="e.g. Hebrew"
                      />
                    </label>
                    <label className="cl-req-field cl-req-field--narrow">
                      Duration (min)
                      <input
                        type="number"
                        min="5"
                        max="120"
                        className="cl-req-input"
                        value={clDuration}
                        onChange={(e) => setClDuration(e.target.value)}
                      />
                    </label>
                    <label className="cl-req-field cl-req-field--wide">
                      Topic
                      <textarea
                        className="cl-req-input cl-req-textarea"
                        rows={2}
                        value={clTopic}
                        onChange={(e) => setClTopic(e.target.value)}
                        placeholder="e.g. Real estate and sales, studying in the US"
                      />
                    </label>
                    <label className="cl-req-field cl-req-field--wide">
                      Notes <span className="cl-req-optional">(optional)</span>
                      <textarea
                        className="cl-req-input cl-req-textarea"
                        rows={2}
                        value={clNotes}
                        onChange={(e) => setClNotes(e.target.value)}
                        placeholder="Anything else worth knowing"
                      />
                    </label>
                  </div>

                  <button
                    type="button"
                    className="cl-req-btn"
                    onClick={handleCopyCustomLessonRequest}
                    disabled={!clTopic.trim() || !clLanguage.trim()}
                  >
                    {clCopied ? "✓ Copied, paste it into Messenger" : "Copy request"}
                  </button>
                  <p className="cl-req-hint">Paste this into Messenger to send it our way.</p>
                </div>
              )}
            </div>

            {user && clRequests.length > 0 && (
              <div className="cl-mine">
                <h2 className="cl-mine-hd">Your requests</h2>
                <div className="cl-mine-list">
                  {clRequests.map((r) => (
                    <div key={r.id} className="cl-mine-row">
                      <div className="cl-mine-info">
                        <span className="cl-mine-topic">{r.topic}</span>
                        <span className="cl-mine-meta">
                          {r.student_name ? `${r.student_name} · ` : ""}{r.level}{r.age_track ? ` · ${r.age_track}` : ""} · {new Date(r.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                        </span>
                      </div>
                      {r.status === "delivered" ? (
                        <span className="cl-mine-tag cl-mine-tag--done">Delivered</span>
                      ) : (
                        <>
                          <span className="cl-mine-tag cl-mine-tag--pending">Pending</span>
                          <button type="button" className="cl-mine-received" onClick={() => markCustomLessonRequestReceived(r.id)}>
                            Mark received
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="cl-gallery-hd-row">
              <h2 className="cl-gallery-hd">Published lessons</h2>
              <div className="cl-tabs">
                {["All", ...Array.from(new Set(CUSTOM_LESSONS.map((l) => l.tag)))].map((t) => (
                  <button key={t} type="button" className={`cl-tab ${clTab === t ? "is-active" : ""}`} onClick={() => { setClTab(t); const next = new URLSearchParams(searchParams); if (t === "All") next.delete("clTab"); else next.set("clTab", t); setSearchParams(next, { replace: true }); }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="cl-gallery-grid">
              {CUSTOM_LESSONS.filter((l) => clTab === "All" || l.tag === clTab).map((l) => {
                const path = `/library/customized-lessons/${l.slug}`;
                const accent = l.tag === "Vocabulary" ? "coral" : "navy";
                return (
                  <div key={l.slug} className={`cl-lesson-card cl-lesson-card--${accent}`}>
                    <span className="cl-lesson-watermark">{l.tag.charAt(0)}</span>
                    <div className="cl-lesson-body">
                      <span className="cl-lesson-tag">{l.tag}</span>
                      <h3 className="cl-lesson-title">{l.title}</h3>
                      <p className="cl-lesson-level">{l.level}</p>
                      <p className="cl-lesson-desc">{l.desc}</p>
                    </div>
                    <div className="cl-lesson-foot">
                      <button type="button" className="cl-lesson-open" onClick={() => openCustomLessonPopup(path, "sentivoCustomLesson", 840, 860)}>
                        Open
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          genericContent
        )}
        </div>

        {category !== "Speaking" && category !== "Grammar" && category !== "Articles" && category !== "Reading" && category !== "Vocabulary" && category !== "Writing" && category !== "Listening" && category !== "Customized Lessons" && !(category === "All" && !query.trim() && !showAllToday) && (
        <div className="pagination">
          <button disabled={safePage === 1} onClick={() => changePage(safePage - 1)}>&larr; Prev</button>
          <span className="page-indicator">Page {safePage} of {totalPages}</span>
          <button disabled={safePage === totalPages} onClick={() => changePage(safePage + 1)}>Next &rarr;</button>
        </div>
        )}
      </main>
      )}
      </div>
      </div>
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
      {profileOpen && (
        <ProfileSettings
          onClose={() => setProfileOpen(false)}
          onSaved={(newAvatarUrl) => setAvatarUrl(newAvatarUrl)}
        />
      )}
    </>
  );
}

export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;900&family=Bangers&family=Comic+Neue:wght@400;700&family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&family=Lilita+One&family=Nunito:wght@600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Luckiest+Guy&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }

.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.body-wrap {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.page {
  --ink: #2B2A4A;
  --paper: #FFFFFF;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --rust: #7C5CFC;
  --ochre: #FF8A4C;
  --dusk: #16BFAE;
  --marigold: #FFB648;
  --coral: #FF6B4A;
  --hair: rgba(43,42,74,0.11);
}
.theme-pro { background: var(--paper); color: var(--ink); }

/* ── Gazette masthead ── */
.gc-band {
  flex-shrink: 0;
  background: var(--card);
  border-bottom: 1px solid var(--hair);
}
.gc-topbar { display: flex; align-items: center; justify-content: space-between; padding: 9px 40px; font-family: 'Quicksand', sans-serif; }
.gc-header-brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.01em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0;
}
.gc-header-logo { height: 32px; width: auto; display: block; margin-right: -5px; }
.gc-topbar-actions { display: flex; align-items: center; gap: 12px; }
.gc-search {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid var(--hair);
  border-radius: 999px;
  background: var(--card);
  color: var(--muted);
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}
.gc-search:hover { border-color: rgba(43,42,74,0.2); }
.gc-search:focus-within { border-color: rgba(255,107,74,0.55); box-shadow: 0 0 0 4px rgba(255,107,74,0.1); background: #fff; }
.gc-search.has-mode { background: #fff; border-color: rgba(43,42,74,0.16); }
.gc-search svg { width: 14px; height: 14px; flex-shrink: 0; }
.gc-search-icon-wrap { position: relative; display: flex; flex-shrink: 0; }
.gc-search-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.15s, color 0.15s;
}
.gc-search-icon-btn:hover { color: var(--coral); background: rgba(255,107,74,0.1); }
.gc-search-mode-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: -6px;
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(43,42,74,0.16);
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-width: 190px;
  z-index: 40;
}
.gc-search-mode-heading {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 6px 10px 8px;
}
.gc-search-mode-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: var(--ink);
  background: none;
  border: none;
  border-radius: 10px;
  padding: 8px 10px;
  text-align: left;
  cursor: pointer;
}
.gc-search-mode-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  flex-shrink: 0;
}
.gc-search-mode-icon svg { width: 14px; height: 14px; }
.gc-search-mode-item--dictionary .gc-search-mode-icon { background: rgba(22,191,174,0.14); color: #16BFAE; }
.gc-search-mode-item--grammar .gc-search-mode-icon { background: rgba(124,92,252,0.14); color: #7C5CFC; }
.gc-search-mode-item--translator .gc-search-mode-icon { background: rgba(255,138,76,0.16); color: #FF8A4C; }
.gc-search-mode-item:hover { background: rgba(43,42,74,0.05); }
.gc-search-mode-item--dictionary:hover { color: #16BFAE; }
.gc-search-mode-item--grammar:hover { color: #7C5CFC; }
.gc-search-mode-item--translator:hover { color: #FF8A4C; }
.gc-search-mode-lock {
  margin-left: auto; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px;
  letter-spacing: 0.05em; color: #1B2A4A; background: #E9ECF3; padding: 2px 7px; border-radius: 999px;
  flex-shrink: 0;
}
.gc-search-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  background: var(--coral);
  border-radius: 999px;
  padding: 5px 6px 5px 11px;
}
.gc-search-pill svg { width: 11px; height: 11px; }
.gc-search-pill--dictionary { background: #16BFAE; }
.gc-search-pill--grammar { background: #7C5CFC; }
.gc-search-pill--translator { background: #FF8A4C; }
.gc-search-pill-x { border: none; background: none; color: #fff; opacity: 0.8; cursor: pointer; font-size: 13px; line-height: 1; padding: 2px 4px; }
.gc-search-pill-x:hover { opacity: 1; }
.gc-search-send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: var(--coral);
  color: #fff;
  cursor: pointer;
  transition: transform 0.1s, background 0.15s;
  padding: 0;
}
.gc-search-send-btn:hover:not(:disabled) { background: #E85436; }
.gc-search-send-btn:active:not(:disabled) { transform: scale(0.92); }
.gc-search-send-btn svg { width: 13px; height: 13px; }
.gc-search-send-btn:disabled { background: #E8C9BC; cursor: default; }
.gc-search input { border: none; background: transparent; outline: none; font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--ink); width: 220px; transition: width 0.15s; }
.gc-search.has-mode input { width: 170px; }
.gc-search input::placeholder { color: #9B9382; }
.gc-btn { font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; padding: 8px 18px; border-radius: 999px; border: 1.5px solid var(--ink); color: var(--ink); background: transparent; cursor: pointer; text-decoration: none; }
.gc-btn.primary { background: var(--ink); color: var(--card); }
.gc-navbar { display: flex; flex-direction: column; padding: 6px 40px; gap: 2px; border-bottom: 1px solid var(--hair); font-family: 'Quicksand', sans-serif; }

.gc-sections { display: flex; align-items: center; justify-content: center; gap: 0; overflow-x: auto; }
.gc-sec-tab {
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 6px 16px;
  color: var(--ink);
  border: none;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 999px;
}
.gc-sec-tab:hover { color: var(--coral); }
.gc-sec-tab.is-active { background: var(--ink); color: #FFFFFF; }

.gc-nav-divider { height: 1px; background: var(--hair); margin: 1px 0; }
.gc-sec-tab, .gc-ed-spark, .gc-ed-curr, .gc-ed-custom, .gc-ed-tab { outline: none; }
.gc-sec-tab:focus-visible, .gc-ed-spark:focus-visible, .gc-ed-curr:focus-visible, .gc-ed-custom:focus-visible, .gc-ed-tab:focus-visible { box-shadow: 0 0 0 2px rgba(255,107,74,0.35); }

.gc-editions { display: flex; align-items: center; justify-content: center; gap: 4px; padding: 4px 0 2px; flex-wrap: wrap; }
.gc-editions-sep { width: 1px; height: 18px; background: var(--hair); flex-shrink: 0; }
.gc-ed-spark {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 12px;
  border-radius: 999px; text-decoration: none;
  color: var(--muted); background: none;
}
.gc-ed-spark:hover { background: rgba(255,107,74,0.08); color: var(--coral); }
.gc-ed-spark.is-active { background: var(--coral); color: #fff; }
.gc-ed-curr {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 12px;
  border-radius: 999px; cursor: pointer;
  color: var(--muted); background: none; border: none;
}
.gc-ed-curr:hover { background: rgba(27,42,74,0.06); color: #1B2A4A; }
.gc-ed-curr.is-active { background: #1B2A4A; color: #fff; }
.gc-ed-custom {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 12px;
  border-radius: 999px; cursor: pointer;
  color: var(--muted); background: none; border: none;
}
.gc-ed-custom:hover { background: rgba(27,42,74,0.06); color: #1B2A4A; }
.gc-ed-custom.is-active { background: #1B2A4A; color: #fff; }
.gc-editions-levels { display: inline-flex; align-items: center; gap: 2px; background: rgba(27,42,74,0.045); border-radius: 999px; padding: 2px; }
.gc-ed-tab { font-size: 11px; font-weight: 800; letter-spacing: 0.02em; padding: 4px 11px; border-radius: 999px; color: var(--muted); background: none; border: none; cursor: pointer; }
.gc-ed-tab:hover { color: var(--coral); }
.gc-ed-tab.is-active { background: var(--card); color: var(--ink); box-shadow: 0 1px 3px rgba(27,42,74,0.12); }

/* ── Today: teacher dashboard ── */
.gc-dashboard {
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-soft: #5A6B92;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
}
.td-page { width: 100%; }
.td-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  align-items: start;
  gap: 24px;
}
.td-main { min-width: 0; display: flex; flex-direction: column; gap: 18px; }

.gc-sidebar { display: flex; flex-direction: column; position: sticky; top: 0; }

/* ── Today's Brief: one unified sidebar panel (clock + correction + more) ── */
.td-brief-panel {
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 22px;
  box-shadow: 0 14px 36px rgba(43,42,74,0.10);
}

.td-brief-clock {
  position: relative;
  background: linear-gradient(155deg, var(--navy) 0%, #24365E 100%);
  border-radius: 22px 22px 0 0;
  padding: 18px 20px 16px;
  text-align: center;
}
.td-brief-clock::after {
  content: ""; position: absolute; left: 20px; right: 20px; bottom: 0; height: 3px;
  background: var(--coral); border-radius: 2px 2px 0 0;
}
.gc-clock { text-align: center; }
.gc-clock-time { font-family: 'Fredoka', sans-serif; font-variant-numeric: tabular-nums; font-size: 27px; font-weight: 600; color: #fff; letter-spacing: 0.02em; }
.gc-clock-sec { font-size: 18px; color: rgba(255,255,255,0.5); font-weight: 500; }
.gc-clock-meta { display: flex; justify-content: center; gap: 8px; margin-top: 4px; font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.55); }

.td-brief-section { padding: 22px 20px 18px; }
.td-dc-label { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-family: 'Quicksand', sans-serif; font-size: 11.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--coral); }
.td-dc-badge { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: var(--coral-pale); color: var(--coral); flex-shrink: 0; }
.td-dc-badge svg { width: 11px; height: 11px; }
.td-dc-headline { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16.5px; line-height: 1.4; margin: 0 0 13px; color: var(--ink); text-wrap: balance; }
.td-dc-quote { color: var(--coral); margin-right: 5px; }
.corr-wrong { color: #9B9382; font-weight: 400; text-decoration: line-through; text-decoration-color: #B9AF9C; margin-right: 6px; }
.corr-right { color: var(--coral); font-weight: 700; }
.td-dc-why { background: var(--coral-pale); border-radius: 14px; padding: 11px 14px; }
.td-dc-explain { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.55; color: var(--ink-soft, #4C4A3E); margin: 0; }
.td-dc-explain + .td-dc-explain { margin-top: 4px; }

/* ── More corrections: a compact divided list instead of separate cards ── */
.td-brief-list { padding: 2px 20px 18px; border-top: 1px solid var(--hair); }
.td-brief-list-label { font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 15px 0 2px; }
.td-brief-row {
  position: relative; display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 0; cursor: default;
}
.td-brief-row + .td-brief-row { border-top: 1px solid var(--hair); }
.td-brief-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent, var(--coral)); flex-shrink: 0; margin-top: 6px; }
.td-brief-row.hue-coral { --accent: var(--coral); }
.td-brief-row.hue-gold { --accent: var(--marigold, var(--navy)); }
.td-brief-row.hue-teal { --accent: var(--dusk, var(--navy-soft)); }
.td-brief-row-body { min-width: 0; }
.td-brief-label { font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent, var(--coral)); margin-bottom: 3px; }
.td-brief-line { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.3; color: var(--ink); margin: 0; }
.td-brief-pop {
  position: absolute;
  top: calc(100% - 4px);
  left: 17px;
  right: 0;
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 12px 28px rgba(43,42,74,0.18);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
  z-index: 30;
  pointer-events: none;
}
.td-brief-pop p { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.4; color: #4C4A3E; margin: 0; }
.td-brief-pop p + p { margin-top: 4px; }
.td-brief-row:hover { z-index: 20; }
.td-brief-row:hover .td-brief-pop { opacity: 1; visibility: visible; transform: translateY(0); }

/* ── Toolkit ── */
.td-section-label { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.td-actions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.td-action-card {
  display: flex; align-items: center; gap: 12px;
  background: var(--card); border: none; border-radius: 18px; padding: 12px 14px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
  font: inherit; text-align: left; cursor: pointer; color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.td-action-card:not(.is-soon):hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(43,42,74,0.10); }
.td-action-icon { width: 40px; height: 40px; border-radius: 12px; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: #F5F6FA; }
.td-action-icon img { width: 100%; height: 100%; object-fit: contain; }
.td-action-title { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.25; color: var(--ink); }
.td-action-card.is-soon { opacity: 0.7; cursor: default; }
.td-action-card[aria-disabled="true"] { position: relative; opacity: 0.55; cursor: not-allowed; }
.td-action-card[aria-disabled="true"]:hover { transform: none; box-shadow: 0 8px 24px rgba(43,42,74,0.05); }
.td-action-lock {
  position: absolute; top: 8px; right: 8px; width: 20px; height: 20px; border-radius: 50%;
  background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center;
}
.td-action-lock svg { width: 10px; height: 10px; }

.td-actions-grid.is-locked { margin-top: 8px; }

.td-desk-lock-note {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--muted);
  margin: 0; line-height: 1.3;
}
.td-desk-lock-note svg { width: 13px; height: 13px; color: var(--coral); flex-shrink: 0; }

/* ── Quote banner ── */
.td-quote-banner { border-radius: 24px; overflow: hidden; line-height: 0; }
.td-quote-banner img { width: 100%; height: auto; display: block; }

/* ── Responsive: full sidebar vs. compact chips ── */
@media (max-width: 860px) {
  .td-body { grid-template-columns: 1fr; }
  .gc-sidebar { display: none; }
}
@media (max-width: 560px) {
  .td-actions-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .td-briefs { grid-template-columns: 1fr; }
}

/* ── Responsive: narrower / non-maximized browser windows ── */
@media (max-width: 1300px) {
  .gc-topbar, .gc-navbar { padding-left: 20px; padding-right: 20px; }
  .gc-dashboard { max-width: 720px; }
  .gc-sec-tab { font-size: 12px; letter-spacing: 0.03em; padding: 6px 12px; }
}
@media (max-width: 900px) {
  .gc-topbar, .gc-navbar { padding-left: 14px; padding-right: 14px; }
  .gc-search input { width: 130px; }
  .gc-sec-tab { font-size: 10.5px; letter-spacing: 0.02em; padding: 6px 8px; }
}

.notif-wrap { position: relative; }
.notif-btn {
  position: relative; width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--hair); background: none; color: var(--muted);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.notif-btn svg { width: 19px; height: 19px; }
.notif-btn:hover { color: var(--coral); border-color: var(--coral); background: rgba(255,107,74,0.08); }
.notif-btn.has-unread { color: #1B2A4A; border-color: #1B2A4A; }
.notif-dot {
  position: absolute; top: 6px; right: 6px; width: 9px; height: 9px; border-radius: 50%;
  background: var(--coral); border: 1.5px solid var(--card);
}
.notif-panel {
  position: absolute; top: 46px; right: 0; width: 300px; max-height: 360px; overflow-y: auto;
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px;
  box-shadow: 0 16px 32px rgba(43,42,74,0.16); padding: 6px; z-index: 20;
}
.notif-panel-head {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: var(--ink);
  padding: 10px 12px 8px;
}
.notif-empty {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 22px 16px 26px; color: var(--muted);
}
.notif-empty svg { width: 26px; height: 26px; opacity: 0.4; }
.notif-empty p { margin: 0; font-family: 'Quicksand', sans-serif; font-size: 12.5px; }
.notif-list { display: flex; flex-direction: column; gap: 2px; }
.notif-item {
  display: flex; flex-direction: column; gap: 3px; text-align: left;
  width: 100%; background: none; border: none; border-radius: 10px; cursor: pointer;
  padding: 9px 12px; font: inherit;
}
.notif-item:hover { background: rgba(27,42,74,0.05); }
.notif-item.is-unread { background: rgba(255,107,74,0.06); }
.notif-item.is-unread:hover { background: rgba(255,107,74,0.11); }
.notif-item-text { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--ink); line-height: 1.4; }
.notif-item-text strong { font-weight: 700; }
.notif-item-time { font-family: 'Quicksand', sans-serif; font-size: 10.5px; color: var(--muted); }

.account-wrap { position: relative; }
.avatar-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: #FF7A59;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.theme-pro .avatar-btn { border-radius: 4px; background: #1B2A4A; }
.avatar-btn-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
.theme-pro .avatar-btn-img { border-radius: 4px; }
.account-menu {
  position: absolute;
  top: 46px;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  z-index: 10;
}
.theme-pro .account-menu { border-radius: 6px; border: 1px solid #DEDAD0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.account-menu a, .account-menu .account-menu-link, .account-menu .logout-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 9px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #3D3552;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
}
.theme-pro .account-menu a, .theme-pro .account-menu .account-menu-link, .theme-pro .account-menu .logout-btn { font-family: 'Inter', sans-serif; color: #1B2A4A; border-radius: 4px; }
.account-menu a:hover, .account-menu .account-menu-link:hover, .account-menu .logout-btn:hover { background: #F4F0FF; }
.theme-pro .account-menu a:hover, .theme-pro .account-menu .account-menu-link:hover, .theme-pro .account-menu .logout-btn:hover { background: #F0EBDD; }
.account-menu .logout-btn { color: #B5483A; margin-top: 4px; border-top: 1px solid #eee; padding-top: 10px; }

.content {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(2px, 1vh, 8px) 40px clamp(6px, 2vh, 16px);
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content--wide { max-width: 1600px; }

.empty-msg { font-size: 14px; opacity: 0.6; padding: 30px 0; text-align: center; }

.cat-locked {
  max-width: 400px; margin: 64px auto; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.cat-locked-icon {
  width: 52px; height: 52px; border-radius: 50%; margin-bottom: 8px;
  background: #FDECE5; color: #FF6B4A;
  display: flex; align-items: center; justify-content: center;
}
.cat-locked-icon svg { width: 22px; height: 22px; }
.cat-locked-eyebrow {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: #FF6B4A; margin: 0;
}
.cat-locked-title {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; color: var(--ink); margin: 4px 0 0;
}
.cat-locked-desc {
  font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--muted); line-height: 1.6; margin: 4px 0 14px;
}
.cat-locked-cta {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  background: #FF6B4A; color: #fff; border: none; border-radius: 999px;
  padding: 10px 26px; cursor: pointer;
}
.cat-locked-cta:hover { filter: brightness(0.94); }
.cat-locked-icon--navy { background: #E9ECF3; color: #1B2A4A; }
.cat-locked-eyebrow--navy { color: #1B2A4A; }
.cat-locked-cta--navy { background: #1B2A4A; }
.cat-locked-cta--navy:hover { filter: brightness(1.25); }
.cat-locked-link {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
  background: none; border: none; cursor: pointer; padding: 8px 4px; text-decoration: underline;
}
.cat-locked-link:hover { color: var(--ink); }

.grid-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-wrap--today { align-items: flex-start; overflow-y: auto; }
.grid-wrap--top { align-items: flex-start; padding-top: clamp(0px, 0.5vh, 10px); overflow-y: auto; }

.cover-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 14px;
  width: 100%;
  height: 100%;
}

/* ---------- Vocabulary / Writing: dynamic catalog landing ---------- */
.dyn-landing {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  border-radius: 22px;
  padding: clamp(20px, 2.6vw, 32px) clamp(18px, 2.4vw, 28px) clamp(26px, 3vw, 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dyn-landing--vocab {
  background: linear-gradient(180deg, #FCF9F1 0%, #F5EDD8 100%);
}
.dyn-landing--writing {
  background: linear-gradient(180deg, #F3FAF8 0%, #E4F1EC 100%);
}
.dyn-landing-hero { text-align: center; }
.dyn-landing-eyebrow {
  display: block;
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.dyn-landing--vocab .dyn-landing-eyebrow { color: #96721B; }
.dyn-landing--writing .dyn-landing-eyebrow { color: #3F7A4E; }
.dyn-landing-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 2.4vw, 30px);
  letter-spacing: 0.04em;
  color: #2B2A4A;
  padding: 6px 22px 9px;
  border-radius: 999px;
}
.dyn-landing--vocab .dyn-landing-pill { background: rgba(184,140,26,0.16); }
.dyn-landing--writing .dyn-landing-pill { background: rgba(63,122,78,0.14); }
.dyn-landing-row { position: relative; height: 2px; width: 100%; max-width: 1040px; margin: clamp(22px, 2.8vw, 32px) 0; }
.dyn-landing--vocab .dyn-landing-row { background: #E8D6A0; }
.dyn-landing--writing .dyn-landing-row { background: #C3DCC0; }
.dyn-landing-row::before, .dyn-landing-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; }
.dyn-landing--vocab .dyn-landing-row::before, .dyn-landing--vocab .dyn-landing-row::after { background: #B88C1A; }
.dyn-landing--writing .dyn-landing-row::before, .dyn-landing--writing .dyn-landing-row::after { background: #3F7A4E; }
.dyn-landing-row::before { left: 0; }
.dyn-landing-row::after { right: 0; }
.dyn-landing .cover-grid { justify-content: center; }
.dyn-landing .empty-msg { color: #2B2A4A; }

.dyn-landing-soon { display: flex; flex-direction: column; align-items: center; text-align: center; padding: clamp(30px, 5vw, 54px) 20px; }
.dyn-landing-soon-icon { font-size: 40px; opacity: 0.5; margin-bottom: 14px; }
.dyn-landing-soon-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 20px; color: #2B2A4A; margin: 0 0 8px; }
.dyn-landing-soon-desc { font-family: 'Quicksand', sans-serif; font-size: 14px; color: #6B6580; margin: 0; }

/* ---------- Listening category hub: 9 activity types ---------- */
.lst-page {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: clamp(10px, 1.6vw, 18px) 0 40px;
  background-color: #FEF6E6;
  /* landscape art at full width; swapped for the taller portrait crop
     at 700px, same "half screen vs full screen" breakpoint used on
     the Fluency Clinic, Grammar Garden, and Word Bank pages */
  background-image: var(--lst-bg-landscape);
  background-position: center top;
  /* sized to width only, not "cover" -- cover scales against this
     container's full height (hero + all 9 cards), which shrinks or
     grows a lot as the grid reflows between 1/2/3 columns, blowing the
     corner illustrations up far too large on wide screens */
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 26px;
}
@media (max-width: 700px) {
  .lst-page { background-image: var(--lst-bg-portrait); }
}
/* top padding clears the headphone/soundwave art in the background
   image, which scales with container width -- no banner needed, the
   text just sits in the plain cream area below the illustration */
.lst-hero { position: relative; padding: 200px clamp(20px, 4vw, 40px) 6px; text-align: center; }
@media (max-width: 700px) {
  .lst-hero { padding-top: 190px; }
}
.lst-hero-eyebrow { font-family: 'SF Mono', 'Menlo', Consolas, monospace; font-weight: 700; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #B8791F; display: block; margin-bottom: 8px; }
.lst-hero-title { font-family: 'Luckiest Guy', cursive; font-weight: 400; letter-spacing: 0.02em; font-size: clamp(28px, 4.4vw, 42px); color: #3A2E1F; margin: 0 0 10px; }
.lst-hero-sub { font-family: 'Quicksand', sans-serif; font-size: 14.5px; color: #5C5142; max-width: 520px; margin: 0 auto; line-height: 1.6; }

.lst-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; width: 100%; padding: 22px clamp(16px, 3vw, 30px) 0; }
@media (max-width: 480px) { .lst-grid { grid-template-columns: 1fr; } }

.lst-card {
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 16px 32px rgba(58,46,31,0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.lst-card--ready { cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
.lst-card--ready:hover { transform: translateY(-3px); box-shadow: 0 20px 38px rgba(58,46,31,0.18); }
.lst-card-art { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #FBEBD3; }
.lst-card-art img { width: 100%; height: 100%; object-fit: cover; display: block; }
.lst-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px; text-align: left; }
.lst-tag-row { display: flex; align-items: center; justify-content: space-between; }
.lst-soon { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 10px; color: #A6987F; }
.lst-ready { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10px; color: #3F9B5D; background: #E1F3E6; padding: 2px 8px; border-radius: 999px; }
.lst-tag { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10px; letter-spacing: 0.08em; padding: 3px 9px; border-radius: 999px; }
.lst-tag--a { color: #B8791F; background: #FBEBD3; }
.lst-tag--b { color: #7D3868; background: #F5E3EF; }
.lst-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16.5px; color: #3A2E1F; margin: 0; }
.lst-desc { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.5; color: #7A6B54; margin: 0; }

/* ---------- Customized Lessons landing ---------- */
.cl-page { width: 100%; max-width: 1040px; margin: 0 auto; padding: clamp(10px, 1.6vw, 18px) 0 40px; }

.cl-hero {
  background: #FFE6DD; border-radius: 18px; padding: 30px 36px 26px; text-align: center;
  margin-bottom: 26px; position: relative; overflow: hidden;
}
.cl-hero::after {
  content: ""; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%); pointer-events: none;
}
.cl-hero-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 6px; position: relative; z-index: 1; }
.cl-hero-rule { flex: 0 1 48px; height: 1px; background: rgba(27,42,74,0.22); }
.cl-hero-kicker { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: #E0502F; }
.cl-title {
  font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(28px, 4vw, 36px);
  letter-spacing: 0.01em; text-transform: uppercase; color: #1B2A4A; margin: 6px 0 12px; line-height: 1;
  position: relative; z-index: 1;
}
.cl-sub { font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 500; color: #6B6E96; max-width: 520px; margin: 0 auto; line-height: 1.6; position: relative; z-index: 1; }

.cl-req {
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px; overflow: hidden;
  margin: 0 0 32px; box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
.cl-req-head {
  width: 100%; display: flex; align-items: flex-start; gap: 14px; padding: 20px 24px;
}
.cl-req-head-text { flex: 1; min-width: 0; }
.cl-req-icon {
  flex: 0 0 44px; width: 44px; height: 44px; border-radius: 12px; background: #1B2A4A;
  display: flex; align-items: center; justify-content: center; color: #fff;
}
.cl-req-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 17px; color: #1B2A4A; margin: 0 0 4px; }
.cl-req-lead { font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 500; color: #6B6E96; margin: 0; max-width: 480px; line-height: 1.55; }
.cl-req-toggle {
  flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; margin-top: 2px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13px; color: #fff;
  background: #FF6B4A; border: none; border-radius: 999px; padding: 9px 16px; cursor: pointer;
  box-shadow: 0 6px 16px rgba(255,107,74,0.28);
}
.cl-req-toggle:hover { background: #E0502F; }
.cl-req-chevron { flex-shrink: 0; transition: transform 0.18s ease; }
.cl-req-chevron.is-open { transform: rotate(180deg); }
.cl-req-body { padding: 0 24px 26px; }
.cl-req-timing { margin: 0 0 16px; font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 700; color: #E0502F; }
.cl-req-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 18px; }
.cl-req-field { display: flex; flex-direction: column; gap: 6px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; color: #1B2A4A; }
.cl-req-field--wide { grid-column: 1 / -1; }
.cl-req-field--narrow { grid-column: span 1; }
.cl-req-optional { font-weight: 500; color: #A6A2C0; text-transform: none; }
.cl-req-input {
  font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; color: #1B2A4A;
  background: #FBFAFD; border: 1.5px solid #EDE6F4; border-radius: 10px; padding: 9px 12px;
  outline: none; resize: vertical;
}
.cl-req-input:focus { border-color: #FF6B4A; }
.cl-req-textarea { font-family: 'Inter', sans-serif; }
.cl-req-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13px; color: #fff;
  background: #FF6B4A; border: none; border-radius: 999px; padding: 11px 22px; cursor: pointer;
  box-shadow: 0 6px 16px rgba(255,107,74,0.28);
}
.cl-req-btn:hover { background: #E0502F; }
.cl-req-btn:disabled { opacity: 0.5; cursor: default; box-shadow: none; }
.cl-req-hint { margin: 10px 0 0; font-family: 'Inter', sans-serif; font-size: 11.5px; font-weight: 500; color: #A6A2C0; }

.cl-mine { margin: 0 0 32px; }
.cl-mine-hd { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 15px; color: #1B2A4A; margin: 0 0 12px; }
.cl-mine-list { display: flex; flex-direction: column; gap: 8px; }
.cl-mine-row {
  display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid #EDE6F4; border-radius: 12px;
  padding: 12px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.05);
}
.cl-mine-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.cl-mine-topic { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; color: #1B2A4A; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cl-mine-meta { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 11.5px; color: #A6A2C0; }
.cl-mine-tag {
  flex-shrink: 0; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px; letter-spacing: 0.04em;
  text-transform: uppercase; border-radius: 999px; padding: 4px 10px;
}
.cl-mine-tag--pending { background: #FFF4D6; color: #8A6D1F; }
.cl-mine-tag--done { background: #E7F5EC; color: #2F9E58; }
.cl-mine-received {
  flex-shrink: 0; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 11.5px; color: #1B2A4A;
  background: #F1EEF9; border: none; border-radius: 999px; padding: 6px 12px; cursor: pointer;
}
.cl-mine-received:hover { background: #E7EAF3; }

.cl-gallery-hd-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 18px; }
.cl-gallery-hd { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 18px; color: #1B2A4A; margin: 0; }

.cl-tabs { display: inline-flex; flex-wrap: wrap; gap: 4px; background: rgba(27,42,74,0.045); border-radius: 999px; padding: 4px; }
.cl-tab {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12px; color: #6B6E96;
  background: none; border: none; border-radius: 999px; padding: 7px 15px; cursor: pointer;
}
.cl-tab:hover { color: #1B2A4A; }
.cl-tab.is-active { background: #fff; color: #1B2A4A; box-shadow: 0 1px 4px rgba(27,42,74,0.12); }

.cl-gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 18px; }
.cl-lesson-card {
  display: flex; flex-direction: column; background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  padding: 24px 22px 20px; position: relative; overflow: hidden;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}
.cl-lesson-card:hover { transform: translateY(-3px); box-shadow: 0 14px 28px rgba(27,42,74,0.1); }
.cl-lesson-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; }
.cl-lesson-card--coral::before { background: #FF6B4A; }
.cl-lesson-card--navy::before { background: #1B2A4A; }
.cl-lesson-watermark {
  position: absolute; top: -14px; right: -2px;
  font-family: 'Playfair Display', serif; font-weight: 900; font-size: 88px; line-height: 1;
  pointer-events: none; z-index: 0;
}
.cl-lesson-card--coral .cl-lesson-watermark { color: rgba(255,107,74,0.08); }
.cl-lesson-card--navy .cl-lesson-watermark { color: rgba(27,42,74,0.06); }
.cl-lesson-body { flex: 1; position: relative; z-index: 1; }
.cl-lesson-tag {
  display: inline-block; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px;
  letter-spacing: 0.06em; text-transform: uppercase; border-radius: 999px; padding: 4px 10px; margin-bottom: 12px;
}
.cl-lesson-card--coral .cl-lesson-tag { color: #E0502F; background: #FFE6DD; }
.cl-lesson-card--navy .cl-lesson-tag { color: #1B2A4A; background: #E7EAF3; }
.cl-lesson-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 17px; color: #1B2A4A; margin: 0 0 6px; }
.cl-lesson-level { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10.5px; color: #A6A2C0; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.03em; }
.cl-lesson-desc { font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 500; color: #6B6E96; line-height: 1.55; margin: 0; }
.cl-lesson-foot { position: relative; z-index: 1; margin-top: 18px; padding-top: 16px; border-top: 1px solid #EDE6F4; }
.cl-lesson-open {
  display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13px; color: #fff;
  background: #1B2A4A; border: none; border-radius: 999px; padding: 10px; cursor: pointer;
}
.cl-lesson-card--coral .cl-lesson-open { background: #FF6B4A; }
.cl-lesson-open:hover { opacity: 0.9; }

@media (max-width: 640px) {
  .cl-req-head { flex-wrap: wrap; }
  .cl-req-toggle { margin-left: 58px; }
  .cl-req-grid { grid-template-columns: 1fr; }
  .cl-req-field--narrow { grid-column: 1 / -1; }
  .cl-gallery-hd-row { flex-direction: column; align-items: flex-start; }
  .cl-mine-row { flex-wrap: wrap; }
}

/* ---------- Speaking: The Fluency Clinic ---------- */
/* "Clinical Chart" treatment (Mint) -- scoped entirely to .spklab-* below.
   Deliberately does NOT touch .gc-navbar/.gc-editions/.gc-sec-tab/.gc-ed-*
   (the shared app nav above this page) -- those stay exactly as they are. */
.spklab-page {
  width: 100%;
  max-width: 1080px;
  background-color: #E4F3F1;
  /* landscape art at full width; swapped for the taller portrait crop
     at the same 700px breakpoint the card grid collapses to 1 column,
     so the art always matches how tall the page actually is */
  background-image: var(--spklab-bg-landscape);
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 22px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px);
  position: relative;
  overflow: hidden;
}
@media (max-width: 700px) {
  .spklab-page { background-image: var(--spklab-bg-portrait); }
}
.spklab-hero { text-align: center; max-width: 560px; margin: 0 auto; position: relative; z-index: 1; padding-top: 18px; }
@media (max-width: 700px) {
  .spklab-hero { padding-top: 70px; }
}
.spklab-eyebrow {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #178A82;
}
.spklab-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: clamp(32px, 4.4vw, 46px);
  color: #10646B;
  margin: 8px 0 8px;
  line-height: 1.1;
  text-shadow: 0 1px 0 rgba(255,255,255,0.7), 0 2px 8px rgba(16,100,107,0.12);
}
.spklab-sub {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.55;
  color: #4B8B92;
  margin: 0 auto;
}
.spklab-lane { position: relative; display: block; margin: clamp(26px, 3vw, 36px) auto 0; z-index: 1; width: 100%; max-width: 520px; }

.spklab-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(14px, 1.8vw, 22px); position: relative; z-index: 1; }
.spklab-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  background: #FBF9F5;
  border-radius: 16px;
  overflow: visible;
  box-shadow: 0 2px 4px rgba(16,100,107,0.08), 0 20px 32px rgba(16,100,107,0.16), inset 0 1px 0 rgba(255,255,255,0.7);
  position: relative;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.spklab-card:hover { transform: translateY(-4px); box-shadow: 0 4px 8px rgba(16,100,107,0.12), 0 26px 40px rgba(16,100,107,0.22), inset 0 1px 0 rgba(255,255,255,0.7); }
.spklab-pin-wrap { position: absolute; top: -18px; left: 50%; transform: translateX(-50%); z-index: 2; }
.spklab-pin {
  width: 38px; height: 38px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow:
    inset 0 2px 2px rgba(255,255,255,0.55),
    inset 0 -4px 6px rgba(0,0,0,0.22),
    0 6px 12px rgba(16,100,107,0.28),
    0 0 0 4px #FBF9F5;
}
.spklab-card--forge .spklab-pin { background: radial-gradient(circle at 35% 30%, #F1857F, #E8544E 75%); }
.spklab-card--shift .spklab-pin { background: radial-gradient(circle at 35% 30%, #F3CC5A, #E8B400 75%); }
.spklab-card--ascend .spklab-pin { background: radial-gradient(circle at 35% 30%, #F6B36E, #F2994A 75%); }
.spklab-card--relay .spklab-pin { background: radial-gradient(circle at 35% 30%, #6FA3CC, #3E7CB1 75%); }
.spklab-card--bridge .spklab-pin { background: radial-gradient(circle at 35% 30%, #86D1A6, #4FAE7A 75%); }
.spklab-card--derive .spklab-pin { background: radial-gradient(circle at 35% 30%, #E67FB1, #D6478C 75%); }
.spklab-card--sequence .spklab-pin { background: radial-gradient(circle at 35% 30%, #8D98DB, #5C6BC0 75%); }

.spklab-body { padding: 32px 20px 22px; text-align: center; display: flex; flex-direction: column; align-items: center; flex: 1; width: 100%; }
.spklab-name { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: clamp(22px, 2.1vw, 26px); color: #10646B; margin: 0 0 10px; }
.spklab-label {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #E8544E;
  background: rgba(232,84,78,0.12);
  border-radius: 999px;
  padding: 3px 10px;
  margin-bottom: 8px;
}
.spklab-gap { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 13.5px; margin: 0 0 18px; color: #4E6B6D; }
.spklab-cta {
  display: block; text-align: center; margin-top: auto; width: 100%;
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 12.5px;
  color: #FFFFFF; border-radius: 8px; padding: 10px 0;
  box-shadow: 0 6px 14px rgba(16,100,107,0.22);
}
.spklab-card--forge .spklab-cta { background: #E8544E; }
.spklab-card--shift .spklab-cta { background: #E8B400; text-shadow: 0 1px 3px rgba(120,80,0,0.5); }
.spklab-card--ascend .spklab-cta { background: #D97D2E; }
.spklab-card--relay .spklab-cta { background: #3E7CB1; }
.spklab-card--bridge .spklab-cta { background: #4FAE7A; }
.spklab-card--derive .spklab-cta { background: #D6478C; }
.spklab-card--sequence .spklab-cta { background: #5C6BC0; }

.spklab-card--soon { cursor: default; }
.spklab-card--soon .spklab-cta { background: #C7DCDD; color: #4B8B92; box-shadow: none; }

@media (max-width: 700px) {
  .spklab-grid { grid-template-columns: 1fr; }
}

/* ---------- Articles: The Sentivo Gazette ---------- */
.gaz-page {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #FBF4F1;
  border-radius: 22px;
  padding: clamp(20px, 2.6vw, 32px) clamp(20px, 3.2vw, 40px) clamp(30px, 4vw, 52px);
}

.gaz-hero {
  background: #1B2A4A;
  border-radius: 22px;
  padding: clamp(24px, 3vw, 34px) clamp(20px, 3vw, 36px) clamp(20px, 2.6vw, 28px);
  margin-bottom: 18px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.gaz-hero-blob {
  position: absolute;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: #FF6B4A;
  opacity: 0.16;
  top: -100px; right: -80px;
  pointer-events: none;
}

.gaz-masthead { text-align: center; position: relative; }
.gaz-masthead-kicker-row { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 3px; }
.gaz-masthead-rule { flex: 0 1 64px; height: 1px; background: rgba(255,255,255,0.3); }
.gaz-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #B9C3DC;
}
.gaz-masthead-word {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(34px, 4.8vw, 48px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 1;
  margin: 3px 0 9px;
}
.gaz-masthead-underline { width: clamp(110px, 16%, 170px); height: 3px; background: #FF6B4A; margin: 0 auto 9px; }
.gaz-masthead-tagline {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #8894B5;
}

.gaz-topics { display: flex; justify-content: center; flex-wrap: wrap; padding: 4px 0 14px; border-bottom: 1px solid #EDE1DB; margin-bottom: 16px; }
.gaz-topic {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5A6B92;
  padding: 6px 16px;
  background: none;
  border: none;
  border-right: 1px solid #EDE1DB;
  cursor: pointer;
}
.gaz-topic:hover { color: #FF6B4A; }
.gaz-topic:last-child { border-right: none; }
.gaz-topic.is-active { color: #E0502F; }
.gaz-empty { font-family: 'Inter', sans-serif; font-size: 13px; color: #5A6B92; text-align: center; padding: 30px 0; }

.gaz-lead {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: clamp(22px, 2.6vw, 36px);
  align-items: center;
  padding: clamp(18px, 2vw, 26px);
  background: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 10px 26px rgba(27,42,74,0.08);
  border-left: 4px solid #FF6B4A;
  cursor: pointer;
  border-top: none; border-right: none; border-bottom: none;
  text-align: left;
  width: 100%;
  margin-bottom: 16px;
  text-decoration: none;
  color: inherit;
}
.gaz-lead-kicker { font-family: 'Inter', sans-serif; font-weight: 800; font-size: clamp(9.5px, 0.8vw, 11.5px); letter-spacing: 0.1em; text-transform: uppercase; color: #E0502F; margin-bottom: 8px; }
.gaz-lead-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(21px, 2.4vw, 32px); line-height: 1.2; margin: 0 0 10px; color: #1B2A4A; text-wrap: balance; }
.gaz-lead-dek {
  font-family: 'Inter', sans-serif;
  font-size: clamp(12.5px, 1.05vw, 15.5px);
  color: #5A6B92;
  line-height: 1.5;
  margin: 0 0 12px;
  max-width: 640px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.gaz-lead-meta { display: flex; align-items: center; gap: 7px; font-family: 'Inter', sans-serif; font-size: clamp(10.5px, 0.85vw, 12px); color: #5A6B92; }
.gaz-byline { font-weight: 700; color: #1B2A4A; }
.gaz-editions { color: #E0502F; font-weight: 700; }
.gaz-lead-art {
  aspect-ratio: 3 / 2;
  max-height: 260px;
  border-radius: 12px;
  background: linear-gradient(135deg, #FDECE5 0%, #FBF4F1 100%);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.gaz-lead-art img { width: 100%; height: 100%; object-fit: contain; }
.gaz-lead-art-emoji {
  width: clamp(80px, 9vw, 120px);
  height: clamp(80px, 9vw, 120px);
  border-radius: 50%;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 8px 20px rgba(27,42,74,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(36px, 4vw, 56px);
}

.gaz-grid { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: clamp(28px, 3.6vw, 52px); row-gap: 8px; }
.gaz-story {
  position: relative;
  display: flex;
  gap: clamp(14px, 1.6vw, 20px);
  padding: clamp(16px, 1.8vw, 22px) 0;
  border-top: 1px solid #EDE1DB;
  background: none;
  border-left: none; border-right: none; border-bottom: none;
  text-align: left;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-decoration: none;
}
.gaz-story:not(:nth-child(2n))::after {
  content: "";
  position: absolute;
  top: 14px; bottom: 14px; right: calc(clamp(28px, 3.6vw, 52px) / -2);
  width: 1px;
  background: #EDE1DB;
}
.gaz-story--soon { cursor: default; opacity: 0.55; }
.gaz-thumb { width: clamp(140px, 15vw, 200px); aspect-ratio: 3 / 2; flex-shrink: 0; align-self: flex-start; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: clamp(26px, 2.6vw, 36px); overflow: hidden; }
.gaz-thumb img { width: 100%; height: 100%; object-fit: contain; }
.gaz-thumb--tech { background: linear-gradient(135deg, rgba(27,42,74,0.16), transparent); }
.gaz-thumb--work { background: linear-gradient(135deg, rgba(90,107,146,0.18), transparent); }
.gaz-thumb--planet { background: linear-gradient(135deg, rgba(255,107,74,0.2), transparent); }
.gaz-thumb--daily { background: linear-gradient(135deg, rgba(224,80,47,0.18), transparent); }
.gaz-thumb--culture { background: linear-gradient(135deg, rgba(27,42,74,0.14), rgba(255,107,74,0.14)); }
.gaz-thumb--law { background: linear-gradient(135deg, rgba(27,42,74,0.26), rgba(90,107,146,0.12)); }
.gaz-story-body { min-width: 0; align-self: center; }
.gaz-story-kicker { font-family: 'Inter', sans-serif; font-weight: 800; font-size: clamp(10px, 0.9vw, 11.5px); letter-spacing: 0.07em; text-transform: uppercase; color: #E0502F; margin-bottom: 6px; }
.gaz-story-title {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.3;
  margin: 0 0 8px;
  color: #1B2A4A;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.gaz-story-meta { font-family: 'Inter', sans-serif; font-size: clamp(10.5px, 0.9vw, 12px); color: #5A6B92; }
.gaz-soon { font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; font-size: clamp(8.5px, 0.7vw, 10px); }

/* ---------- Grammar: The Grammar Garden (comic theme) ---------- */
.gdn-page {
  --leaf: #4C9A5D; --leaf-deep: #2E6E3D;
  --gold: #E3A73C; --gold-deep: #96631C;
  --soil: #8A6748; --soil-deep: #5C452F;
  --sky: #3E7CB8; --sky-deep: #275C8C;
  --berry: #C2255C; --berry-deep: #8A1A41;
  --violet: #6247AA; --violet-deep: #453177;
  --teal: #0E7C86; --teal-deep: #0A5B62;
  --coral: #E1592A; --coral-deep: #A73E1B;
  --lime: #6B9E1E; --lime-deep: #4E7414;
  --magenta: #A6238C; --magenta-deep: #781966;
  --navy: #2C4870; --navy-deep: #1C304E;
  --slate: #55707F; --slate-deep: #3C5158;
  --khaki: #96762B; --khaki-deep: #6E5A1F;
  --crimson: #B23A3A; --crimson-deep: #832929;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  background-color: #FFF6E9;
  /* landscape art at full width; swapped for the taller portrait crop
     at 700px, same "half screen vs full screen" breakpoint used on the
     Listening and Fluency Clinic pages */
  background-image: var(--gdn-bg-landscape);
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  border: 4px solid #1A1A1A;
  border-radius: 26px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px);
  box-shadow: 9px 9px 0 #1A1A1A;
}
@media (max-width: 700px) {
  .gdn-page { background-image: var(--gdn-bg-portrait); }
}
.gdn-masthead { text-align: center; padding-top: 30px; }
@media (max-width: 700px) {
  .gdn-masthead { padding-top: 88px; }
}
.gdn-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6B5B3D;
}
.gdn-badge {
  display: inline-block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: var(--leaf);
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 16px 5px;
  transform: rotate(-3deg);
  margin: 10px 0 8px;
}
.gdn-nameplate {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: clamp(32px, 4.2vw, 46px);
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1.05;
  text-shadow: 3px 3px 0 var(--gold);
}
.gdn-sub { font-family: 'Comic Neue', cursive, sans-serif; font-weight: 700; font-size: clamp(13px, 1.1vw, 15px); color: #3A3226; margin: 0 auto; max-width: 460px; }

.gdn-tabs { display: flex; justify-content: center; gap: 10px; margin-top: clamp(20px, 2.6vw, 28px); }
.gdn-tab {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 6px 22px 8px;
  cursor: pointer;
  box-shadow: 4px 4px 0 #1A1A1A;
  transition: transform 0.15s cubic-bezier(.34,1.56,.64,1), box-shadow 0.15s ease;
}
.gdn-tab:hover { transform: translate(-1px, -2px); box-shadow: 5px 6px 0 #1A1A1A; }
.gdn-tab:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #1A1A1A; }
.gdn-tab.is-active { background: var(--leaf); color: #FFFFFF; }

.gdn-row { position: relative; height: 0; border-top: 3px dashed #E4D5B0; margin: clamp(26px, 3vw, 36px) 0; }

.gdn-beds { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.gdn-bed {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  aspect-ratio: 1 / 1;
  border: 3.5px solid #1A1A1A;
  border-radius: 22px;
  padding: 28px 22px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 7px 7px 0 #1A1A1A;
  transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), box-shadow 0.18s ease;
}
.gdn-bed:hover { transform: translate(-2px, -4px) rotate(-1deg); box-shadow: 9px 11px 0 #1A1A1A; }
.gdn-bed:active { transform: translate(3px, 3px); box-shadow: 4px 4px 0 #1A1A1A; }

.gdn-bed--leaf { background: linear-gradient(155deg, #7BCB8C 0%, var(--leaf) 100%); }
.gdn-bed--gold { background: linear-gradient(155deg, #F3C878 0%, var(--gold) 100%); }
.gdn-bed--soil { background: linear-gradient(155deg, #B1875E 0%, var(--soil) 100%); }
.gdn-bed--sky { background: linear-gradient(155deg, #7FB3E0 0%, var(--sky) 100%); }
.gdn-bed--berry { background: linear-gradient(155deg, #EE7FA3 0%, var(--berry) 100%); }
.gdn-bed--violet { background: linear-gradient(155deg, #A78BFA 0%, var(--violet) 100%); }
.gdn-bed--teal { background: linear-gradient(155deg, #5FC4CC 0%, var(--teal) 100%); }
.gdn-bed--coral { background: linear-gradient(155deg, #F0916A 0%, var(--coral) 100%); }
.gdn-bed--lime { background: linear-gradient(155deg, #A6D14E 0%, var(--lime) 100%); }
.gdn-bed--magenta { background: linear-gradient(155deg, #D66BC0 0%, var(--magenta) 100%); }
.gdn-bed--navy { background: linear-gradient(155deg, #6E88AC 0%, var(--navy) 100%); }
.gdn-bed--slate { background: linear-gradient(155deg, #93ADB9 0%, var(--slate) 100%); }
.gdn-bed--khaki { background: linear-gradient(155deg, #D3B85E 0%, var(--khaki) 100%); }
.gdn-bed--crimson { background: linear-gradient(155deg, #E08A8A 0%, var(--crimson) 100%); }

.gdn-bed-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: clamp(22px, 2.6vw, 28px);
  letter-spacing: 0.3px;
  margin: 0;
  color: #FFFFFF;
  line-height: 1.15;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.18);
}
.gdn-bed-cta {
  display: inline-block;
  font-family: 'Comic Neue', cursive, sans-serif; font-size: 13.5px; font-weight: 700;
  color: #1A1A1A; background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 999px; padding: 7px 20px;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.gdn-bed--empty { cursor: default; opacity: 0.7; }
.gdn-bed--empty .gdn-bed-cta { color: #6B5C3E; }

@media (max-width: 900px) {
  .gdn-beds { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 620px) {
  .gdn-beds { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 420px) {
  .gdn-beds { grid-template-columns: 1fr; }
}

.gdn-supp-list { display: flex; flex-direction: column; gap: 12px; }
.gdn-supp-row {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #FFFFFF;
  border: 3px solid #1A1A1A;
  border-radius: 16px;
  padding: 14px 20px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 5px 5px 0 #1A1A1A;
  transition: transform 0.15s cubic-bezier(.34,1.56,.64,1), box-shadow 0.15s ease;
}
.gdn-supp-row:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 #1A1A1A; }
.gdn-supp-row:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #1A1A1A; }
.gdn-supp-row--empty { cursor: default; opacity: 0.65; }
.gdn-supp-row--empty:hover { transform: none; box-shadow: 5px 5px 0 #1A1A1A; }

.gdn-supp-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 22px;
  border: 2.5px solid #1A1A1A;
  background: #FFF6E9;
}
.gdn-supp-icon--leaf { background: color-mix(in srgb, var(--leaf) 22%, #FFF6E9); }
.gdn-supp-icon--gold { background: color-mix(in srgb, var(--gold) 22%, #FFF6E9); }
.gdn-supp-icon--soil { background: color-mix(in srgb, var(--soil) 22%, #FFF6E9); }
.gdn-supp-icon--sky { background: color-mix(in srgb, var(--sky) 22%, #FFF6E9); }
.gdn-supp-icon--berry { background: color-mix(in srgb, var(--berry) 22%, #FFF6E9); }
.gdn-supp-icon--violet { background: color-mix(in srgb, var(--violet) 22%, #FFF6E9); }
.gdn-supp-icon--teal { background: color-mix(in srgb, var(--teal) 22%, #FFF6E9); }
.gdn-supp-icon--coral { background: color-mix(in srgb, var(--coral) 22%, #FFF6E9); }
.gdn-supp-icon--lime { background: color-mix(in srgb, var(--lime) 22%, #FFF6E9); }
.gdn-supp-icon--magenta { background: color-mix(in srgb, var(--magenta) 22%, #FFF6E9); }
.gdn-supp-icon--navy { background: color-mix(in srgb, var(--navy) 22%, #FFF6E9); }
.gdn-supp-icon--slate { background: color-mix(in srgb, var(--slate) 22%, #FFF6E9); }
.gdn-supp-icon--khaki { background: color-mix(in srgb, var(--khaki) 22%, #FFF6E9); }
.gdn-supp-icon--crimson { background: color-mix(in srgb, var(--crimson) 22%, #FFF6E9); }

.gdn-supp-text { flex: 1; min-width: 0; text-align: left; }
.gdn-supp-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0 0 3px;
  line-height: 1.15;
}
.gdn-supp-spec {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #6B5B3D;
  margin: 0;
  line-height: 1.4;
}

.gdn-supp-cta {
  flex-shrink: 0;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #1A1A1A;
  background: #FFF6E9;
  border: 2px solid #1A1A1A;
  border-radius: 999px;
  padding: 6px 16px;
  white-space: nowrap;
}
.gdn-supp-cta--empty { color: #6B5C3E; }

@media (max-width: 560px) {
  .gdn-supp-row { flex-wrap: wrap; }
  .gdn-supp-cta { margin-left: 62px; }
}

.gdn-supp-pager { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 22px; }
.gdn-supp-pager-btn {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 10px;
  padding: 7px 16px;
  cursor: pointer;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.gdn-supp-pager-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.gdn-supp-pager-btn:disabled { opacity: 0.35; cursor: default; }
.gdn-supp-pager-dots { display: flex; gap: 6px; }
.gdn-supp-pager-dot {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 13px;
  color: #6B5C3E;
  background: #FFFFFF;
  border: 2px solid #1A1A1A;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.gdn-supp-pager-dot.is-active { background: var(--leaf); color: #FFFFFF; }

/* ---------- Reading: Bookshelf (Adventure Trail theme) ---------- */
.bkshf-page {
  width: 100%;
  max-width: 1320px;
  margin: -10px auto 0;
  /* matches the flat cream interior of bg.jpg exactly, so there's no
     visible seam once the page scrolls past where the image ends */
  background-color: #FDF9EA;
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 26px;
  position: relative;
  overflow: hidden;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px) clamp(30px, 4vw, 52px);
}

.bkshf-masthead { text-align: center; position: relative; z-index: 1; padding-top: 60px; }
@media (max-width: 700px) {
  .bkshf-masthead { padding-top: 46px; }
}
.bkshf-eyebrow {
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #14B8A6;
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 5px;
}
.bkshf-nameplate {
  font-family: 'Lilita One', cursive;
  font-weight: 400;
  font-size: clamp(40px, 4.6vw, 56px);
  letter-spacing: 0.01em;
  color: #1F3A5F;
  margin: 0;
  line-height: 1;
  text-shadow: 3px 3px 0 #FF6B5B;
  -webkit-text-stroke: 1.5px #1F3A5F;
}
.bkshf-tagline {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4E7099;
  max-width: 480px;
  margin: 5px auto 0;
}

.bkshf-row {
  position: relative;
  z-index: 1;
  height: 3px;
  background: repeating-linear-gradient(90deg, #4E7099 0, #4E7099 8px, transparent 8px, transparent 16px);
  opacity: 0.5;
  margin: clamp(26px, 3vw, 36px) 0;
}

.bkshf-level-tabs { position: relative; z-index: 1; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 18px; }
.bkshf-level-tab {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 13.5px;
  color: #1F3A5F;
  background: #FFFDF8;
  border: none;
  padding: 10px 20px 14px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 0 rgba(0,0,0,0.08);
  clip-path: polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.bkshf-level-tab:hover { transform: translateY(-1px); }
.bkshf-level-tab.is-active { background: #1F3A5F; color: #FFFDF8; box-shadow: 0 4px 0 rgba(0,0,0,0.14); }

.bkshf-empty { position: relative; z-index: 1; text-align: center; padding: 40px 20px 20px; }
.bkshf-empty-icon { font-size: 34px; display: block; margin-bottom: 10px; }
.bkshf-empty-title { font-family: 'Lilita One', cursive; font-weight: 400; font-size: 24px; color: #1F3A5F; margin: 0 0 4px; }
.bkshf-empty-desc { font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 14px; color: #4E7099; margin: 0; }

.bkshf-age-group { margin-bottom: clamp(20px, 2.6vw, 30px); }
.bkshf-age-group:last-child { margin-bottom: 0; }
.bkshf-age-label {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: clamp(15px, 1.4vw, 16px);
  color: #FFFFFF;
  background: #FF6B5B;
  text-align: center;
  margin-bottom: 18px;
  border-radius: 999px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 7px 22px;
}

.bkshf-shelves { position: relative; z-index: 1; padding: 0; }
.bkshf-shelf-group { width: fit-content; margin: 0 auto; }
.bkshf-shelf-row { display: flex; justify-content: center; align-items: flex-end; flex-wrap: nowrap; gap: 20px; }
.bkshf-book {
  position: relative;
  flex: 0 0 auto;
  width: clamp(110px, 19vw, 190px);
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  box-shadow: 0 8px 16px rgba(42,29,18,0.16);
  cursor: pointer;
  transform: rotate(var(--tilt, 0deg));
  transition: transform 0.2s cubic-bezier(.2,.8,.2,1), box-shadow 0.2s ease;
}
.bkshf-shelf-row .bkshf-book:nth-child(4n+1) { --tilt: -2deg; }
.bkshf-shelf-row .bkshf-book:nth-child(4n+3) { --tilt: 2deg; }
.bkshf-book:hover { transform: translateY(-5px) rotate(var(--tilt, 0deg)); box-shadow: 0 14px 24px rgba(42,29,18,0.24); }
.bkshf-book-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.bkshf-book-scrim { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(24,15,8,0.72) 0%, rgba(24,15,8,0) 55%); }
.bkshf-book-flat {
  position: relative;
  width: 100%; height: 100%;
  padding: 14px 12px 10px 16px;
  display: flex; flex-direction: column; justify-content: flex-end;
  overflow: hidden;
}
.bkshf-book-spine { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }
.bkshf-ribbon { position: absolute; top: 0; right: 14px; width: 11px; height: 20px; z-index: 1; clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%); opacity: 0.85; }
.bkshf-book-title {
  position: relative; z-index: 1;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: clamp(13px, 1.25vw, 15.5px);
  margin: 0;
  color: #2A1D12;
  line-height: 1.3;
}
.bkshf-book-title--onimg { position: absolute; z-index: 1; left: 10px; right: 10px; bottom: 9px; margin: 0; font-size: clamp(13px, 1.25vw, 15.5px); color: #FFF8ED; text-align: left; }

.bkshf-shelf-ledge {
  width: calc(100% + 40px);
  height: 13px;
  border-radius: 3px;
  margin: 0 0 14px -20px;
  background:
    repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px),
    linear-gradient(180deg, #CB9C64 0%, #A5763F 45%, #7C542C 100%);
  box-shadow: 0 8px 12px rgba(58,38,18,0.28), inset 0 -2px 3px rgba(0,0,0,0.18);
  position: relative;
}
.bkshf-shelf-ledge::after { content: ""; position: absolute; left: 4px; right: 4px; top: 1px; height: 1.5px; background: rgba(255,255,255,0.4); border-radius: 2px; }

.cover {
  flex-shrink: 0;
  border-radius: 14px;
  padding: clamp(8px, 1.6vh, 16px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 14px 24px rgba(0,0,0,0.10);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}
.theme-pro .cover { border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); }

.cover--coral { background: linear-gradient(160deg, #FFD9C7 0%, #FFB199 100%); }
.cover--teal { background: linear-gradient(160deg, #C9F0E2 0%, #8FDDC0 100%); }
.cover--lavender { background: linear-gradient(160deg, #E3DAFF 0%, #C2AEF5 100%); }
.cover--gold { background: linear-gradient(160deg, #FCE7BD 0%, #F3C871 100%); }
.cover--orange { background: linear-gradient(160deg, #FFD3AD 0%, #FF9A56 100%); }
.cover--aqua { background: linear-gradient(160deg, #C7F0F5 0%, #7FD6E3 100%); }
.cover--slate { background: linear-gradient(160deg, #D9E0EC 0%, #A6B4CE 100%); }
.cover--clay { background: linear-gradient(160deg, #F3D6C6 0%, #DE9C77 100%); }
.cover--mint { background: linear-gradient(160deg, #D3F0DE 0%, #93D8AE 100%); }
.cover--sky { background: linear-gradient(160deg, #D6E8FB 0%, #9EC3F0 100%); }
.cover--rose { background: linear-gradient(160deg, #F5D9DE 0%, #DFA0AE 100%); }
.cover--cinnamon { background: linear-gradient(160deg, #EAD2B8 0%, #C6935F 100%); }
.cover--sand { background: linear-gradient(160deg, #F2E6D3 0%, #D9BE93 100%); }
.cover--periwinkle { background: linear-gradient(160deg, #DCE0FB 0%, #ABB4F0 100%); }
.cover--butter { background: linear-gradient(160deg, #FBF1C7 0%, #EDD98A 100%); }
.cover--sage { background: linear-gradient(160deg, #E1EAD9 0%, #B9CDA6 100%); }
.cover--berry { background: linear-gradient(160deg, #FADCE3 0%, #E893A8 100%); }
.cover--orchid { background: linear-gradient(160deg, #EBDCF0 0%, #C9A0D9 100%); }
.cover--ocean { background: linear-gradient(160deg, #C9DDF5 0%, #7FA8E0 100%); }
.cover--honey { background: linear-gradient(160deg, #F7E3B5 0%, #E0B84D 100%); }
.cover--fern { background: linear-gradient(160deg, #DCEBD4 0%, #9FC488 100%); }
.cover--flamingo { background: linear-gradient(160deg, #FCDCE0 0%, #F0899E 100%); }
.cover--lilac { background: linear-gradient(160deg, #EDE0F7 0%, #B98CE0 100%); }
.cover--peach { background: linear-gradient(160deg, #FFE3D1 0%, #FFAE7A 100%); }
.cover--mango { background: linear-gradient(160deg, #FFEEB0 0%, #FFC233 100%); }
.cover--seafoam { background: linear-gradient(160deg, #D6F5EA 0%, #6FD9BB 100%); }
.cover--plum { background: linear-gradient(160deg, #E3CCF0 0%, #A855C9 100%); }
.cover--sunflower { background: linear-gradient(160deg, #FFF3B0 0%, #F0C020 100%); }
.cover--cocoa { background: linear-gradient(160deg, #E8D5C4 0%, #9C7148 100%); }
.cover--blush { background: linear-gradient(160deg, #FCE0E5 0%, #EF9DB0 100%); }
.cover--azure { background: linear-gradient(160deg, #D2E7FB 0%, #6FA8E0 100%); }
.cover--amber { background: linear-gradient(160deg, #FBE3B0 0%, #E8A020 100%); }
.cover--olive { background: linear-gradient(160deg, #E7EAC9 0%, #A6AD5C 100%); }
.cover--denim { background: linear-gradient(160deg, #D6DEEF 0%, #5F7CA8 100%); }
.cover--apricot { background: linear-gradient(160deg, #FFE0C2 0%, #F29B4F 100%); }
.cover--mauve { background: linear-gradient(160deg, #EAD9E5 0%, #B87FA6 100%); }
.cover--pistachio { background: linear-gradient(160deg, #DCEFCB 0%, #8FC46A 100%); }
.cover--terracotta { background: linear-gradient(160deg, #F2D3C0 0%, #C97355 100%); }
.cover--steel { background: linear-gradient(160deg, #DCE3E8 0%, #8FA3B0 100%); }
.cover--ivory { background: linear-gradient(160deg, #F5F0E1 0%, #D8C9A3 100%); }
.cover--cobalt { background: linear-gradient(160deg, #CDDCF7 0%, #5478C9 100%); }
.cover--rust { background: linear-gradient(160deg, #F0D2BE 0%, #B85E38 100%); }
.cover--champagne { background: linear-gradient(160deg, #F7EED9 0%, #DDC48F 100%); }
.cover--juniper { background: linear-gradient(160deg, #D7E9DD 0%, #6FA383 100%); }
.cover--sepia { background: linear-gradient(160deg, #E8DAC6 0%, #A67C4E 100%); }
.cover--wisteria { background: linear-gradient(160deg, #E3DCF2 0%, #9C8AD1 100%); }
.cover--marigold { background: linear-gradient(160deg, #FBE2AE 0%, #E8A324 100%); }
.cover--cream { background: linear-gradient(160deg, #FBF7EC 0%, #E5D9B6 100%); }
.cover--emerald { background: linear-gradient(160deg, #CDEEDA 0%, #34A66B 100%); }
.cover--burgundy { background: linear-gradient(160deg, #EAD0D6 0%, #8C3B4E 100%); }
.cover--turquoise { background: linear-gradient(160deg, #C8F0EC 0%, #2FA79A 100%); }
.cover--charcoal { background: linear-gradient(160deg, #DADCE0 0%, #5A6270 100%); }
.cover--goldenrod { background: linear-gradient(160deg, #F9E7AE 0%, #D8A423 100%); }
.cover--indigo { background: linear-gradient(160deg, #D8D6F5 0%, #5C50B0 100%); }
.cover--papaya { background: linear-gradient(160deg, #FFDCC0 0%, #F0813F 100%); }
.cover--linen { background: linear-gradient(160deg, #F7F1E6 0%, #D9C7A6 100%); }
.cover--cerulean { background: linear-gradient(160deg, #C7E4F5 0%, #2E86C1 100%); }
.cover--mahogany { background: linear-gradient(160deg, #E8C7BC 0%, #7A3B2E 100%); }
.cover--sienna { background: linear-gradient(160deg, #F0CBA8 0%, #A0522D 100%); }
.cover--moss { background: linear-gradient(160deg, #D9E4C0 0%, #6B7F3A 100%); }
.cover--copper { background: linear-gradient(160deg, #F0D3B8 0%, #B5651D 100%); }
.cover--saffron { background: linear-gradient(160deg, #FBE4A0 0%, #E8A317 100%); }
.cover--cerise { background: linear-gradient(160deg, #F5C6D9 0%, #C4185C 100%); }
.cover--taupe { background: linear-gradient(160deg, #E8DFD3 0%, #9C8878 100%); }
.cover--cardinal { background: linear-gradient(160deg, #F2C3C3 0%, #A61C1C 100%); }
.cover--citrine { background: linear-gradient(160deg, #F5E7A0 0%, #C9A227 100%); }
.cover--malachite { background: linear-gradient(160deg, #B8E0C8 0%, #1B7A43 100%); }
.cover--garnet { background: linear-gradient(160deg, #E8B8C0 0%, #7A1F35 100%); }
.cover--quartz { background: linear-gradient(160deg, #EDE6F0 0%, #A78BB5 100%); }
.cover--umber { background: linear-gradient(160deg, #DCC7B0 0%, #6B4A2F 100%); }
.cover--vermilion { background: linear-gradient(160deg, #F5C0A8 0%, #C6391E 100%); }
.cover--jade { background: linear-gradient(160deg, #B8E4D8 0%, #1F8067 100%); }
.cover--onyx { background: linear-gradient(160deg, #B0B0B8 0%, #201F26 100%); }
.cover--topaz { background: linear-gradient(160deg, #FCE4B0 0%, #D98E1E 100%); }
.cover--amethyst { background: linear-gradient(160deg, #DFC7EE 0%, #7C3FA0 100%); }
.cover--obsidian { background: linear-gradient(160deg, #8C8C96 0%, #17161C 100%); }
.cover--alabaster { background: linear-gradient(160deg, #FAF7F0 0%, #D8CFC0 100%); }
.cover--bronze { background: linear-gradient(160deg, #E0C09A 0%, #8C5A28 100%); }
.cover--pewter { background: linear-gradient(160deg, #D4D6D8 0%, #6E7276 100%); }
.cover--cinnabar { background: linear-gradient(160deg, #F5B8A0 0%, #B23A1E 100%); }

.theme-pro .cover--coral { background: #fff; border-top: 4px solid #D85A30; }
.theme-pro .cover--teal { background: #fff; border-top: 4px solid #0F6E56; }
.theme-pro .cover--lavender { background: #fff; border-top: 4px solid #534AB7; }
.theme-pro .cover--gold { background: #fff; border-top: 4px solid #B08D57; }
.theme-pro .cover--orange { background: #fff; border-top: 4px solid #D9722C; }
.theme-pro .cover--aqua { background: #fff; border-top: 4px solid #128A9E; }
.theme-pro .cover--slate { background: #fff; border-top: 4px solid #47597D; }
.theme-pro .cover--clay { background: #fff; border-top: 4px solid #B8623A; }
.theme-pro .cover--mint { background: #fff; border-top: 4px solid #2E9F62; }
.theme-pro .cover--sky { background: #fff; border-top: 4px solid #2E6FB8; }
.theme-pro .cover--rose { background: #fff; border-top: 4px solid #B85C6F; }
.theme-pro .cover--cinnamon { background: #fff; border-top: 4px solid #935E30; }
.theme-pro .cover--sand { background: #fff; border-top: 4px solid #A6813D; }
.theme-pro .cover--periwinkle { background: #fff; border-top: 4px solid #5B63C4; }
.theme-pro .cover--butter { background: #fff; border-top: 4px solid #B89A3A; }
.theme-pro .cover--sage { background: #fff; border-top: 4px solid #5E7D49; }
.theme-pro .cover--berry { background: #fff; border-top: 4px solid #C24F6B; }
.theme-pro .cover--orchid { background: #fff; border-top: 4px solid #9860B5; }
.theme-pro .cover--ocean { background: #fff; border-top: 4px solid #3E6FB0; }
.theme-pro .cover--honey { background: #fff; border-top: 4px solid #B8862E; }
.theme-pro .cover--fern { background: #fff; border-top: 4px solid #5C8A48; }
.theme-pro .cover--flamingo { background: #fff; border-top: 4px solid #D9556F; }
.theme-pro .cover--lilac { background: #fff; border-top: 4px solid #8B4FC7; }
.theme-pro .cover--peach { background: #fff; border-top: 4px solid #E07A3D; }
.theme-pro .cover--mango { background: #fff; border-top: 4px solid #C98A0A; }
.theme-pro .cover--seafoam { background: #fff; border-top: 4px solid #1E9C79; }
.theme-pro .cover--plum { background: #fff; border-top: 4px solid #8A2FAE; }
.theme-pro .cover--sunflower { background: #fff; border-top: 4px solid #B98A00; }
.theme-pro .cover--cocoa { background: #fff; border-top: 4px solid #6B4423; }
.theme-pro .cover--blush { background: #fff; border-top: 4px solid #C2607A; }
.theme-pro .cover--azure { background: #fff; border-top: 4px solid #3576C4; }
.theme-pro .cover--amber { background: #fff; border-top: 4px solid #B87A0E; }
.theme-pro .cover--olive { background: #fff; border-top: 4px solid #7A8138; }
.theme-pro .cover--denim { background: #fff; border-top: 4px solid #3E567F; }
.theme-pro .cover--apricot { background: #fff; border-top: 4px solid #D97A2E; }
.theme-pro .cover--mauve { background: #fff; border-top: 4px solid #935F80; }
.theme-pro .cover--pistachio { background: #fff; border-top: 4px solid #5E9A3E; }
.theme-pro .cover--terracotta { background: #fff; border-top: 4px solid #A6543A; }
.theme-pro .cover--steel { background: #fff; border-top: 4px solid #4E6577; }
.theme-pro .cover--ivory { background: #fff; border-top: 4px solid #A68B4F; }
.theme-pro .cover--cobalt { background: #fff; border-top: 4px solid #2F52A0; }
.theme-pro .cover--rust { background: #fff; border-top: 4px solid #954827; }
.theme-pro .cover--champagne { background: #fff; border-top: 4px solid #B4915A; }
.theme-pro .cover--juniper { background: #fff; border-top: 4px solid #47795C; }
.theme-pro .cover--sepia { background: #fff; border-top: 4px solid #7C5B33; }
.theme-pro .cover--wisteria { background: #fff; border-top: 4px solid #6E5BA8; }
.theme-pro .cover--marigold { background: #fff; border-top: 4px solid #B9800E; }
.theme-pro .cover--cream { background: #fff; border-top: 4px solid #A6935F; }
.theme-pro .cover--emerald { background: #fff; border-top: 4px solid #1F8552; }
.theme-pro .cover--burgundy { background: #fff; border-top: 4px solid #6B2938; }
.theme-pro .cover--turquoise { background: #fff; border-top: 4px solid #1F8479; }
.theme-pro .cover--charcoal { background: #fff; border-top: 4px solid #414753; }
.theme-pro .cover--goldenrod { background: #fff; border-top: 4px solid #A6820E; }
.theme-pro .cover--indigo { background: #fff; border-top: 4px solid #453A8F; }
.theme-pro .cover--papaya { background: #fff; border-top: 4px solid #C4611F; }
.theme-pro .cover--linen { background: #fff; border-top: 4px solid #A68B5C; }
.theme-pro .cover--cerulean { background: #fff; border-top: 4px solid #1F618D; }
.theme-pro .cover--mahogany { background: #fff; border-top: 4px solid #5C2C22; }
.theme-pro .cover--sienna { background: #fff; border-top: 4px solid #7C3F1F; }
.theme-pro .cover--moss { background: #fff; border-top: 4px solid #4E5C2A; }
.theme-pro .cover--copper { background: #fff; border-top: 4px solid #8C4C15; }
.theme-pro .cover--saffron { background: #fff; border-top: 4px solid #B37F10; }
.theme-pro .cover--cerise { background: #fff; border-top: 4px solid #93123F; }
.theme-pro .cover--taupe { background: #fff; border-top: 4px solid #756454; }
.theme-pro .cover--cardinal { background: #fff; border-top: 4px solid #8A1717; }
.theme-pro .cover--citrine { background: #fff; border-top: 4px solid #9C7E1E; }
.theme-pro .cover--malachite { background: #fff; border-top: 4px solid #145C33; }
.theme-pro .cover--garnet { background: #fff; border-top: 4px solid #5F1729; }
.theme-pro .cover--quartz { background: #fff; border-top: 4px solid #7E6690; }
.theme-pro .cover--umber { background: #fff; border-top: 4px solid #543A25; }
.theme-pro .cover--vermilion { background: #fff; border-top: 4px solid #9E2E17; }
.theme-pro .cover--jade { background: #fff; border-top: 4px solid #196651; }
.theme-pro .cover--onyx { background: #fff; border-top: 4px solid #201F26; }
.theme-pro .cover--topaz { background: #fff; border-top: 4px solid #B37619; }
.theme-pro .cover--amethyst { background: #fff; border-top: 4px solid #632F80; }
.theme-pro .cover--obsidian { background: #fff; border-top: 4px solid #17161C; }
.theme-pro .cover--alabaster { background: #fff; border-top: 4px solid #A69880; }
.theme-pro .cover--bronze { background: #fff; border-top: 4px solid #714822; }
.theme-pro .cover--pewter { background: #fff; border-top: 4px solid #575B5E; }
.theme-pro .cover--cinnabar { background: #fff; border-top: 4px solid #8F2C17; }

.premium-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.85);
  font-family: 'Quicksand', sans-serif;
  font-size: 8.5px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 999px;
  color: #6B4A2A;
}
.theme-pro .premium-badge { font-family: 'Inter', sans-serif; border-radius: 3px; background: #F0EBDD; color: #8A6A3A; }

.cover-motif { flex-grow: 1; display: flex; align-items: center; justify-content: center; }
.motif-svg { width: 100%; height: clamp(26px, 6vh, 56px); }
.motif-word { font-family: 'Fredoka', sans-serif; font-size: 13px; }
.theme-pro .motif-word { font-family: 'Source Serif 4', serif; font-weight: 600; }
.motif-word--dim { opacity: 0.4; fill: currentColor; }
.motif-word--bold { font-weight: 700; fill: currentColor; }
.motif-dot { fill: currentColor; opacity: 0.5; }
.motif-line { stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; opacity: 0.75; }
.motif-line--dim { opacity: 0.35; }
.motif-node { fill: currentColor; }

.cover-text h3 {
  font-family: 'Fredoka', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: #2B2330;
}
.theme-pro .cover-text h3 { font-family: 'Source Serif 4', serif; font-weight: 700; color: #1B2A4A; }
.cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-size: 9.5px;
  font-weight: 600;
  opacity: 0.65;
  color: #2B2330;
}
.theme-pro .cover-sub { font-family: 'Inter', sans-serif; color: #1B2A4A; }

.cover-footer { margin-top: 6px; }
.cover-level {
  font-family: 'Quicksand', sans-serif;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: rgba(255,255,255,0.6);
  padding: 3px 6px;
  border-radius: 999px;
  color: #2B2330;
}
.theme-pro .cover-level { font-family: 'Inter', sans-serif; background: #F0EBDD; border-radius: 3px; color: #6B5B45; }

/* Redesigned covers (Alphabet, Stress & Meaning, Minimal Pairs for now) */
.theme-pro .cover--redesigned {
  background: #FFFFFF !important;
  border: 1px solid #DEDAD0;
}

/* Story cards: a distinct "book" thumbnail, not a tool-deck card --
   the cover photo fills the whole card, so no extra background needed. */
.theme-pro .cover--story { border: 1px solid #DEDAD0; }

/* FORGE track cards: same full-bleed photo treatment as story cards, but
   tagged with an amber top border to read as Speaking, not Reading. */
.cover--forge-track { background: #1B1C22; }
.theme-pro .cover--forge-track { border: 1px solid #DEDAD0; border-top: 3px solid #F2A65A; }

/* Full-bleed cover art, ignoring the card's own padding, with the
   title stamped over the bottom like a real book jacket. */
.story-card-content { position: absolute; inset: 0; overflow: hidden; }
.story-card-cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
.story-card-cover-ph { position: absolute; inset: 0; }
.story-card-scrim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48%;
  background: linear-gradient(to top, rgba(20,15,10,0.85) 0%, rgba(20,15,10,0.4) 60%, rgba(20,15,10,0) 100%);
}
.story-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.85);
  font-family: 'Quicksand', sans-serif;
  font-size: 8.5px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 999px;
  color: #8A3A1F;
}
.theme-pro .story-badge { font-family: 'Inter', sans-serif; border-radius: 3px; background: #F0EBDD; color: #8A6A3A; }
.story-card-text { position: absolute; left: 14px; right: 14px; bottom: 12px; text-align: left; }
.story-card-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(13px, 1.8vw, 18px);
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.45);
  margin: 0;
}
.theme-pro .story-card-title { font-family: 'Source Serif 4', serif; }
.story-card-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  color: rgba(255,255,255,0.85);
  text-shadow: 0 1px 4px rgba(0,0,0,0.4);
}

.bespoke-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bespoke-icon-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}
.bespoke-icon { width: 56%; height: auto; color: #1B2A4A; }

.bespoke-tagline {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(11px, 1.6vw, 16px);
  font-weight: 700;
  text-align: center;
  color: #2B2330;
}
.theme-pro .bespoke-tagline { font-family: 'Source Serif 4', serif; color: #1B2A4A; font-weight: 600; }

.bespoke-divider { width: 78%; height: 1px; background: rgba(0,0,0,0.12); }

.bespoke-label {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(7px, 1vw, 10px);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  color: #6B5B95;
  opacity: 0.85;
}
.theme-pro .bespoke-label { font-family: 'Inter', sans-serif; color: #7A7666; }

/* Fun-theme illustrated icon colors */
.bespoke-shadow { fill: #000000; opacity: 0.1; }
.bespoke-apple-body { fill: #D5483C; }
.bespoke-apple-shine { fill: #FFFFFF; opacity: 0.22; }
.bespoke-apple-stem { stroke: #7A4A2C; stroke-width: 3; fill: none; stroke-linecap: round; }
.bespoke-apple-leaf { fill: #5C8A3A; }
.bespoke-bubble { fill: #FFFDF9; }
.bespoke-bars rect { fill: #C2452F; }
.bespoke-headphones path, .bespoke-headphones rect { stroke: #0E6F52; }
.bespoke-headphones rect { fill: #0E6F52; }
.bespoke-book-left { fill: #D85A30; }
.bespoke-book-right { fill: #E8734F; }
.bespoke-book-spine { stroke: #8A3A1F; stroke-width: 2; fill: none; }
.bespoke-book-lines { stroke: #FFFFFF; stroke-width: 1.4; stroke-linecap: round; opacity: 0.55; fill: none; }

.pagination { display: flex; align-items: center; justify-content: center; gap: 18px; flex-shrink: 0; }
.pagination button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: white;
  cursor: pointer;
  color: inherit;
}
.theme-pro .pagination button { font-family: 'Inter', sans-serif; border-radius: 4px; border: 1px solid #DEDAD0; }
.pagination button:disabled { opacity: 0.35; cursor: default; }
.page-indicator { font-family: 'Quicksand', sans-serif; font-size: 12.5px; opacity: 0.6; }
.theme-pro .page-indicator { font-family: 'Inter', sans-serif; }

`;