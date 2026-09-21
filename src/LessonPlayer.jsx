import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import SlideTitle from "./slides/SlideTitle";
import SlideWarmup from "./slides/SlideWarmup";
import SlideVocabulary from "./slides/SlideVocabulary";
import SlidePhrases from "./slides/SlidePhrases";
import SlideActivity from "./slides/SlideActivity";
import SlidePractice from "./slides/SlidePractice";
import SlidePerform from "./slides/SlidePerform";
import SlideSpeaking from "./slides/SlideSpeaking";
import SlideReading from "./slides/SlideReading";
import SlideWriting from "./slides/SlideWriting";
import SlideReview from "./slides/SlideReview";
import SlideCloser from "./slides/SlideCloser";
import SlideAdvTitle from "./slides/SlideAdvTitle";
import SlideEngage from "./slides/SlideEngage";
import SlideStudy from "./slides/SlideStudy";
import SlideActivate from "./slides/SlideActivate";
import SlideWrapUp from "./slides/SlideWrapUp";
import SlideTeacherGuide from "./slides/SlideTeacherGuide";

const SLIDE_COMPONENTS = {
  title: SlideTitle,
  warmup: SlideWarmup,
  vocabulary: SlideVocabulary,
  phrases: SlidePhrases,
  activity: SlideActivity,
  // A1 Kids new 9-slide architecture (docs/curriculum/sentenco_curriculum_master
  // -for-claude.md): "phrases" doubles as Highlight, "activity" stays reserved
  // for Teens/Adults' existing blank-drill content. Kids gets two new roles:
  // practice (the Match/Sort/Order/Choice/Blank mechanics, guided/controlled)
  // and perform (freer performance: role-play/talk/interview/choose).
  practice: SlidePractice,
  perform: SlidePerform,
  speaking: SlideSpeaking,
  reading: SlideReading,
  writing: SlideWriting,
  review: SlideReview,
  closer: SlideCloser,
  // C1/C2 advanced-track slide types — student flow (Title/Engage/Study/
  // Activate/Wrap-up, 5-7 slides depending on mode) plus a single-sheet
  // teacher guide. See project_c1_c2_lesson_redesign memory for the full
  // design; this replaces the earlier scenario/diagnosis/upgrade/transfer
  // 4-slide-type design entirely.
  advtitle: SlideAdvTitle,
  engage: SlideEngage,
  study: SlideStudy,
  activate: SlideActivate,
  wrapup: SlideWrapUp,
  teacherguide: SlideTeacherGuide,
};

const SLIDE_TYPE_LABELS = {
  title: "Title",
  warmup: "Warm-up",
  vocabulary: "Vocabulary",
  phrases: "Key Phrases",
  activity: "Activity",
  practice: "Practice",
  perform: "Activity",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
  review: "Review",
  closer: "Wrap-up",
  advtitle: "Title",
  engage: "Engage",
  study: "Study",
  activate: "Activate",
  wrapup: "Wrap-up",
  teacherguide: "Teacher Guide",
};

// The teacher guide is teacher-only coaching content — never shown to the
// student. Opening a C1/C2 lesson launches two separate LessonPlayer
// windows: one at ?view=student (default) that only ever shows the
// student-flow slide types, and one at ?view=teacher that shows this one
// single-sheet slide (not paginated — it's one continuous scrollable
// document, see SlideTeacherGuide). See LessonsGrid.jsx's openLesson()
// and sql/lessons/README.md.
const TEACHER_ONLY_TYPES = new Set(["teacherguide"]);

export default function LessonPlayer({ lessonId: lessonIdProp }) {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const lessonId = lessonIdProp || params.id;
  const requestedView = searchParams.get("view") === "teacher" ? "teacher" : "student";

  const [lesson, setLesson] = useState(null);
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [lessonRes, slidesRes] = await Promise.all([
          supabase.from("lessons").select("*").eq("id", lessonId).limit(1),
          supabase
            .from("lesson_slides")
            .select("*")
            .eq("lesson_id", lessonId)
            .eq("is_active", true)
            .order("slide_number", { ascending: true }),
        ]);
        if (lessonRes.error) throw lessonRes.error;
        if (slidesRes.error) throw slidesRes.error;
        if (cancelled) return;
        setLesson(lessonRes.data[0]);
        setSlides(slidesRes.data || []);
        setCurrent(0);
      } catch (e) {
        if (!cancelled) setError(e.message || "Could not load this lesson.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (lessonId) load();
    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  const teacherSlides = slides.filter((s) => TEACHER_ONLY_TYPES.has(s.slide_type));
  const studentSlides = slides.filter((s) => !TEACHER_ONLY_TYPES.has(s.slide_type));
  // Fall back to the student slides if ?view=teacher is requested on a
  // lesson with no teacher-only content (e.g. an A1-B2 lesson) instead of
  // rendering an empty screen.
  const isTeacherView = requestedView === "teacher" && teacherSlides.length > 0;
  const activeSlides = isTeacherView ? teacherSlides : studentSlides;

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(0, c - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(activeSlides.length - 1, c + 1));
  }, [activeSlides.length]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  const shellStatePortraitClass = requestedView === "teacher" ? "lp-shell--portrait" : "";
  const isAdult = lesson?.age_track === "adults";
  const isKids = lesson?.age_track === "kids";
  const isTeens = lesson?.age_track === "teens";
  // Palette rotates every 4 units -- matching the Foundation (1-4) /
  // Combination (5-8) / Bridge (9-12) tiers -- as a visible sign of
  // progress. Adults is untouched -- the kt-N/tt-N vars are only ever
  // read by CSS scoped under .is-kids / .is-teens respectively, so the
  // two tracks can share the same variable names without colliding.
  const kidsThemeIndex = isKids
    ? Math.min(2, Math.floor(((lesson?.unit_number || 1) - 1) / 4))
    : 0;
  const kidsThemeClass = isKids ? `is-kids kt-${kidsThemeIndex}` : "";
  const teensThemeIndex = isTeens
    ? Math.min(2, Math.floor(((lesson?.unit_number || 1) - 1) / 4))
    : 0;
  const teensThemeClass = isTeens ? `is-teens tt-${teensThemeIndex}` : "";

  if (loading) {
    return (
      <div className={`lp-shell lp-shell--state ${shellStatePortraitClass}`}>
        <style>{CSS}</style>
        <div className="lp-status">Loading lesson…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`lp-shell lp-shell--state ${shellStatePortraitClass}`}>
        <style>{CSS}</style>
        <div className="lp-status lp-status--error">
          Couldn't load this lesson.
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!activeSlides.length) {
    return (
      <div className={`lp-shell lp-shell--state ${shellStatePortraitClass}`}>
        <style>{CSS}</style>
        <div className="lp-status">This lesson doesn't have any slides yet.</div>
      </div>
    );
  }

  const slide = activeSlides[current];
  const SlideComponent = SLIDE_COMPONENTS[slide.slide_type];
  const progress = ((current + 1) / activeSlides.length) * 100;

  // The teacher guide is a single continuous scrollable sheet, not
  // paginated slides — it has its own internal header/footer (see
  // SlideTeacherGuide), so skip the normal lp-header/lp-nav chrome
  // entirely for this view.
  if (isTeacherView) {
    return (
      <div className="lp-shell lp-shell--portrait lp-shell--sheet">
        <style>{CSS}</style>
        <div className="lp-slide-area">
          {SlideComponent ? (
            <SlideComponent content={slide.content || {}} lesson={lesson} />
          ) : (
            <div className="lp-status lp-status--error">
              Unknown slide type: {slide.slide_type}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`lp-shell ${isAdult ? "is-adult" : ""} ${kidsThemeClass} ${teensThemeClass}`}>
      <style>{CSS}</style>

      <div className="lp-header">
        <div className="lp-wordmark">
          sentenco{!isAdult && <span className="lp-dot">•</span>}
        </div>
        <div className="lp-slide-type">
          {SLIDE_TYPE_LABELS[slide.slide_type] || slide.slide_type}
        </div>
        <div className="lp-counter">
          {current + 1} / {activeSlides.length}
        </div>
      </div>

      <div className="lp-progress-track">
        <div className="lp-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="lp-slide-area">
        {SlideComponent ? (
          <SlideComponent content={slide.content || {}} lesson={lesson} />
        ) : (
          <div className="lp-status lp-status--error">
            Unknown slide type: {slide.slide_type}
          </div>
        )}
      </div>

      <div className="lp-nav">
        <button className="lp-btn" onClick={goPrev} disabled={current === 0}>
          <span aria-hidden="true">←</span> Previous
        </button>

        <div className="lp-dots">
          {activeSlides.map((s, i) => (
            <button
              key={s.id ?? i}
              type="button"
              className={`lp-dot ${i === current ? "is-active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="lp-btn"
          onClick={goNext}
          disabled={current === activeSlides.length - 1}
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap');

.lp-shell {
  width: 780px;
  height: 440px;
  background: #fff;
  border-radius: 16px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
}
.lp-shell * { box-sizing: border-box; }

/* Teacher windows are portrait — narrower and taller, built for reading
   notes slide-by-slide rather than sharing/projecting to a class. */
.lp-shell--portrait {
  width: 460px;
  height: 760px;
}

.lp-shell--state { align-items: center; justify-content: center; }
.lp-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #1B2A4A;
  font-size: 16px;
  text-align: center;
  padding: 0 40px;
}
.lp-status span { font-size: 13px; font-weight: 500; color: #94A0B8; }
.lp-status--error { color: #C2452F; }

.lp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 8px;
  flex-shrink: 0;
}
.lp-wordmark {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1B2A4A;
}
.lp-dot { color: var(--k-accent, #FF7A59); }
.lp-slide-type {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #A6ADC1;
}
.lp-counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #7C8598;
}
.lp-progress-track {
  height: 3px;
  background: #EFEFF2;
  flex-shrink: 0;
}
.lp-progress-fill {
  height: 100%;
  background: var(--k-accent, #FF7A59);
  transition: width 0.25s ease;
}

.lp-slide-area {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
}

.lp-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  flex-shrink: 0;
}
.lp-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--k-accent, #FF7A59);
  color: var(--k-btn-text, #fff);
  border: none;
  border-radius: 8px;
  box-shadow: 0 3px 0 var(--k-accent-dark, #C2452F);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  padding: 9px 16px;
  cursor: pointer;
}
.lp-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--k-accent-dark, #C2452F); }
.lp-btn:disabled { opacity: 0.3; cursor: default; box-shadow: 0 3px 0 var(--k-accent-dark, #C2452F); pointer-events: none; }

.lp-dots { display: flex; align-items: center; gap: 6px; }
.lp-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #DADCE3;
  border: none;
  padding: 0;
  cursor: pointer;
}
.lp-dot.is-active { width: 20px; background: var(--k-accent, #FF7A59); }

/* ── Kids palette: back to the original coral + navy identity, still
   rotating every 4 units so the app doesn't look identical unit after
   unit. --k-btn-text is the constant navy ink (#1B2A4A) reused from the
   very first Sunshine theme -- every tier's majority color stays light
   enough for navy to read clearly on it. Slide components opt in via
   var(--k-*, <fallback>) so Teens (no .is-kids class, no vars defined)
   render pixel-identical to before. ── */
.lp-shell.is-kids.kt-0 {
  /* Units 1-4: Sunshine -- coral (majority) shading down to pale peach */
  --k-accent: #FF7A59;
  --k-accent-dark: #E8623D;
  --k-secondary: #FFC9B8;
  --k-secondary-dark: #FF9F80;
  --k-pop: #FFAB91;
  --k-btn-text: #1B2A4A;
  --k-bg: #FDF8F0;
  --k-bg-cool: #FFE4DA;
  --k-tint: #FFEDE5;
  --k-motif: "☀";
}
.lp-shell.is-kids.kt-1 {
  /* Units 5-8: Meadow -- emerald (majority) shading down to pale mint,
     matching the teal used for Unit 2 in the curriculum grid */
  --k-accent: #2FA37D;
  --k-accent-dark: #1E8B6B;
  --k-secondary: #CFEFE0;
  --k-secondary-dark: #9AD9BE;
  --k-pop: #7FCDAA;
  --k-btn-text: #1B2A4A;
  --k-bg: #F4FBF8;
  --k-bg-cool: #E1F5EE;
  --k-tint: #DFF4EB;
  --k-motif: "🌿";
}
.lp-shell.is-kids.kt-2 {
  /* Units 9-12: Twilight -- periwinkle violet (majority) shading down to
     pale lavender, matching the purple used for Unit 11 in the curriculum
     grid. Kept lighter than that card's deep indigo so navy ink still
     reads clearly on it. */
  --k-accent: #8B80E8;
  --k-accent-dark: #7A6EDE;
  --k-secondary: #DEDBFB;
  --k-secondary-dark: #C2BBF7;
  --k-pop: #B3A8F5;
  --k-btn-text: #1B2A4A;
  --k-bg: #F8F7FE;
  --k-bg-cool: #EEEDFE;
  --k-tint: #ECEAFC;
  --k-motif: "✨";
}
.lp-shell.is-kids .lp-wordmark::after {
  content: var(--k-motif, "🌱");
  margin-left: 5px;
  font-size: 12px;
  vertical-align: 1px;
}

/* ── Teens palette: identical hex values to the Kids kt-0/1/2 tiers
   (same every-4-units rotation), scoped under .is-teens so the two
   tracks' CSS never collides even though the colors match. Only the
   wordmark motif differs, as a small track-level tell. ── */
.lp-shell.is-teens.tt-0 {
  /* Units 1-4: Sunshine -- coral (majority) shading down to pale peach */
  --k-accent: #FF7A59;
  --k-accent-dark: #E8623D;
  --k-secondary: #FFC9B8;
  --k-secondary-dark: #FF9F80;
  --k-pop: #FFAB91;
  --k-btn-text: #1B2A4A;
  --k-bg: #FDF8F0;
  --k-bg-cool: #FFE4DA;
  --k-tint: #FFEDE5;
  --k-motif: "⚡";
}
.lp-shell.is-teens.tt-1 {
  /* Units 5-8: Meadow -- emerald (majority) shading down to pale mint */
  --k-accent: #2FA37D;
  --k-accent-dark: #1E8B6B;
  --k-secondary: #CFEFE0;
  --k-secondary-dark: #9AD9BE;
  --k-pop: #7FCDAA;
  --k-btn-text: #1B2A4A;
  --k-bg: #F4FBF8;
  --k-bg-cool: #E1F5EE;
  --k-tint: #DFF4EB;
  --k-motif: "🎧";
}
.lp-shell.is-teens.tt-2 {
  /* Units 9-12: Twilight -- periwinkle violet (majority) shading down to
     pale lavender */
  --k-accent: #8B80E8;
  --k-accent-dark: #7A6EDE;
  --k-secondary: #DEDBFB;
  --k-secondary-dark: #C2BBF7;
  --k-pop: #B3A8F5;
  --k-btn-text: #1B2A4A;
  --k-bg: #F8F7FE;
  --k-bg-cool: #EEEDFE;
  --k-tint: #ECEAFC;
  --k-motif: "🏅";
}
.lp-shell.is-teens .lp-wordmark::after {
  content: var(--k-motif, "⚡");
  margin-left: 5px;
  font-size: 12px;
  vertical-align: 1px;
}

/* ── Adults theme: editorial, muted, no bounce ── */
.lp-shell.is-adult {
  background: #F7F5EF;
  border: 1px solid #DEDAD0;
  border-radius: 6px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
  font-family: 'Inter', sans-serif;
}
.lp-shell.is-adult .lp-wordmark {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #1B2A4A;
}
.lp-shell.is-adult .lp-slide-type {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #B7ADA0;
}
.lp-shell.is-adult .lp-counter {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #8A8272;
}
.lp-shell.is-adult .lp-progress-track { background: #EDEAE2; }
.lp-shell.is-adult .lp-progress-fill { background: #B5502E; }
.lp-shell.is-adult .lp-btn {
  background: #1B2A4A;
  border-radius: 4px;
  box-shadow: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
}
.lp-shell.is-adult .lp-btn:active { transform: none; box-shadow: none; }
.lp-shell.is-adult .lp-btn:disabled { box-shadow: none; }
.lp-shell.is-adult .lp-dot {
  border-radius: 2px;
  width: 12px;
  height: 3px;
  background: #DEDAD0;
}
.lp-shell.is-adult .lp-dot.is-active { width: 22px; background: #1B2A4A; }
`;
