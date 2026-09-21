import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const TRACK_META = {
  kids:   { label: "Kids",   color: "#D85A30", light: "#FAECE7", age: "Ages 6–12" },
  teens:  { label: "Teens",  color: "#534AB7", light: "#EEEDFE", age: "Ages 13–17" },
  adults: { label: "Adults", color: "#0F6E56", light: "#E1F5EE", age: "Ages 18+" },
};

const LEVEL_COLORS = {
  A1: { color: "#D85A30", light: "#FAECE7" },
  A2: { color: "#0F6E56", light: "#E1F5EE" },
  B1: { color: "#534AB7", light: "#EEEDFE" },
  B2: { color: "#BA7517", light: "#FAEEDA" },
  C1: { color: "#0F6E56", light: "#E1F5EE" },
  C2: { color: "#534AB7", light: "#EEEDFE" },
};

const UNIT_COLORS = ["coral", "teal", "lavender"];

function LessonCard({ lesson, levelColor, onOpen, onOpenTeacherGuide, isPro, thumbnail }) {
  const unitTier = Math.min(2, Math.floor((lesson.unit_number - 1) / 4));
  const palette = {
    coral:   { bg: "#FAECE7", accent: "#D85A30" },
    teal:    { bg: "#E1F5EE", accent: "#0F6E56" },
    lavender:{ bg: "#EEEDFE", accent: "#534AB7" },
  }[UNIT_COLORS[unitTier]];
  const isAdvancedTrack = lesson.level === "C1" || lesson.level === "C2";

  return (
    <div
      className={`lg-card${isPro ? " lg-card--pro" : ""}`}
      style={{ "--c-accent": palette.accent, "--c-bg": palette.bg }}
      onClick={() => onOpen(lesson)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(lesson)}
    >
      <div className="lg-card-top">
        <span className="lg-unit-badge">
          Unit {lesson.unit_number}{isAdvancedTrack ? ` · Lesson ${lesson.lesson_number}` : ""}
        </span>
        {isAdvancedTrack ? (
          <button
            className="lg-card-guide-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenTeacherGuide(lesson);
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Guide
          </button>
        ) : (
          <span className="lg-lesson-num">Lesson {lesson.lesson_number}</span>
        )}
      </div>
      <div className="lg-card-motif">
        {thumbnail ? (
          <img className="lg-card-thumb" src={thumbnail} alt="" />
        ) : (
          <svg viewBox="0 0 80 50" width="80" height="50" fill="none" aria-hidden="true">
            <rect x="8" y="10" width="64" height="30" rx="6" fill={palette.accent} opacity="0.12" />
            <rect x="16" y="18" width="30" height="3" rx="1.5" fill={palette.accent} opacity="0.5" />
            <rect x="16" y="25" width="48" height="3" rx="1.5" fill={palette.accent} opacity="0.35" />
            <rect x="16" y="32" width="38" height="3" rx="1.5" fill={palette.accent} opacity="0.25" />
          </svg>
        )}
      </div>
      <h3 className="lg-card-title">{lesson.title}</h3>
      <p className="lg-card-topic">{lesson.topic}</p>
      <div className="lg-card-footer">
        <span className="lg-card-meta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {/* Every lesson is a fixed 25 minutes regardless of what any
              individual row's duration_minutes says — matches the header's
              "25 minutes each" copy above instead of drifting from it. */}
          25 min
        </span>
        <span className="lg-card-meta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          {lesson.slide_count || "—"} slides
        </span>
        <button className="lg-start-btn">
          Start
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  );
}

function EmptyState({ level, track }) {
  const t = TRACK_META[track] || TRACK_META.kids;
  return (
    <div className="lg-empty">
      <div className="lg-empty-icon" style={{ background: t.light, color: t.color }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h3 className="lg-empty-title">No lessons yet</h3>
      <p className="lg-empty-sub">
        {level} {t.label} lessons are being built. Check back soon —<br/>
        we add new lessons every week.
      </p>
    </div>
  );
}

export default function LessonsGrid({ level = "A1", ageTrack = "kids", onBackToLevel, isPro = false }) {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeUnit, setActiveUnit] = useState("all");
  const [thumbnails, setThumbnails] = useState({});

  const track = TRACK_META[ageTrack] || TRACK_META.kids;
  const lv = LEVEL_COLORS[level] || LEVEL_COLORS.A1;

  useEffect(() => {
    async function fetchLessons() {
      setLoading(true);
      setError(null);
      try {
        const { data, error: err } = await supabase
          .from("lessons")
          .select("*")
          .eq("level", level)
          .eq("age_track", ageTrack)
          .eq("is_active", true)
          .order("unit_number", { ascending: true })
          .order("lesson_number", { ascending: true });
        if (err) throw err;
        setLessons(data || []);

        const ids = (data || []).map((l) => l.id);
        if (ids.length) {
          const { data: slideData } = await supabase
            .from("lesson_slides")
            .select("lesson_id, content")
            .in("lesson_id", ids)
            .eq("slide_number", 1);
          const map = {};
          (slideData || []).forEach((s) => {
            if (s.content?.image_url) map[s.lesson_id] = s.content.image_url;
          });
          setThumbnails(map);
        } else {
          setThumbnails({});
        }
      } catch (e) {
        setError(e.message);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLessons();
  }, [level, ageTrack]);

  const units = ["all", ...Array.from(new Set(lessons.map((l) => l.unit_number))).sort((a, b) => a - b)];
  const visible = activeUnit === "all" ? lessons : lessons.filter((l) => l.unit_number === activeUnit);

  // C1/C2 lessons open just the student deck when a card is clicked. The
  // teacher's guide is reached separately via the "Guide" tab in the unit
  // filter bar (see sql/lessons/README.md and TeacherGuide.jsx) — a
  // second automatic window.open() for a per-lesson teacher popup proved
  // unreliable in real use across two different attempts, so teacher
  // content now lives on its own page instead of a second popup.
  function openLesson(lesson) {
    const isAdvancedTrack = lesson.level === "C1" || lesson.level === "C2";

    if (!isAdvancedTrack) {
      window.open(
        `/lesson-player/${lesson.id}`,
        "sentencoLessonPlayer",
        "width=900,height=640,toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes"
      );
      return;
    }

    const screenW = window.screen.availWidth || 1600;
    const screenH = window.screen.availHeight || 900;
    const studentW = Math.min(860, screenW - 40);
    const studentH = Math.min(560, screenH - 80);
    const studentLeft = Math.max(0, Math.floor((screenW - studentW) / 2));
    const studentTop = Math.max(0, Math.floor((screenH - studentH) / 2));

    window.open(
      `/lesson-player/${lesson.id}?view=student`,
      "sentencoLessonPlayerStudent",
      `width=${studentW},height=${studentH},left=${studentLeft},top=${studentTop},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
    );
  }

  // Opens the guide page scoped to just this one lesson — see
  // TeacherGuide.jsx, which renders only the matching lesson when both
  // ?unit= and ?lesson= are present instead of the whole unit's list.
  function openTeacherGuideForLesson(lesson) {
    const url = `/teacher-guide/${level}/${ageTrack}?unit=${lesson.unit_number}&lesson=${lesson.lesson_number}`;
    window.open(url, "_blank", "noopener");
  }

  useEffect(() => {
    const styleId = "lg-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = styles;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className={`lg-wrap${isPro ? " lg-pro" : ""}`}>
      {/* ── Top bar ── */}
      <div className="lg-topbar">
        <div className="lg-breadcrumb">
          Curriculum &rsaquo;{" "}
          <button className="lg-breadcrumb-btn" onClick={onBackToLevel} style={{ color: lv.color }}>
            {level}
          </button>{" "}
          &rsaquo; <span style={{ color: track.color }}>{track.label}</span>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="lg-header" style={{ "--lv-color": lv.color, "--lv-light": lv.light, "--tr-color": track.color, "--tr-light": track.light }}>
        <div className="lg-header-left">
          <div className="lg-header-badges">
            <span className="lg-badge" style={{ background: lv.light, color: lv.color }}>{level}</span>
            <span className="lg-badge" style={{ background: track.light, color: track.color }}>{track.label}</span>
            <span className="lg-badge-muted">{track.age}</span>
          </div>
          <h1 className="lg-header-title">
            {level} {track.label} Lessons
          </h1>
          <p className="lg-header-sub">
            {loading
              ? "Loading lessons…"
              : `${lessons.length} lesson${lessons.length !== 1 ? "s" : ""} available · 25 minutes each`}
          </p>
        </div>
        <div className="lg-header-right">
          <div className="lg-stat">
            <span className="lg-stat-num">{lessons.length}</span>
            <span className="lg-stat-label">Lessons</span>
          </div>
          <div className="lg-stat-divider" />
          <div className="lg-stat">
            <span className="lg-stat-num">{units.filter((u) => u !== "all").length}</span>
            <span className="lg-stat-label">Units</span>
          </div>
        </div>
      </div>

      {/* ── Unit filter ── */}
      {!loading && lessons.length > 0 && (
        <div className="lg-filter-bar">
          {units.map((u) => (
            <button
              key={u}
              className={`lg-filter-pill${activeUnit === u ? " lg-filter-pill--active" : ""}`}
              style={activeUnit === u ? { background: track.color, color: "#fff", borderColor: track.color } : {}}
              onClick={() => setActiveUnit(u)}
            >
              {u === "all" ? "All units" : `Unit ${u}`}
            </button>
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="lg-content">
        {loading && (
          <div className="lg-loading">
            <div className="lg-spinner" style={{ borderTopColor: track.color }} />
            <span>Loading lessons…</span>
          </div>
        )}
        {!loading && error && (
          <div className="lg-error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D85A30" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Could not load lessons. Please check your connection and try again.
          </div>
        )}
        {!loading && !error && lessons.length === 0 && (
          <EmptyState level={level} track={ageTrack} />
        )}
        {!loading && !error && lessons.length > 0 && (
          <div className="lg-grid">
            {visible.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                levelColor={lv.color}
                onOpen={openLesson}
                onOpenTeacherGuide={openTeacherGuideForLesson}
                isPro={isPro}
                thumbnail={thumbnails[lesson.id]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.lg-wrap {
  min-height: 100%;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
}
.lg-pro { background: #F7F5EF; }

.lg-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(8px);
  flex-shrink: 0;
}
.lg-pro .lg-topbar { background: rgba(247,245,239,0.8); }

.lg-breadcrumb { font-size: 12px; font-weight: 600; color: #8A7B8A; }
.lg-breadcrumb-btn { background: none; border: none; cursor: pointer; font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 700; padding: 0; }
.lg-breadcrumb-btn:hover { text-decoration: underline; }

.lg-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  flex-shrink: 0;
}

.lg-header-left { display: flex; flex-direction: column; gap: 4px; }
.lg-header-badges { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.lg-badge {
  font-size: 11px; font-weight: 700; padding: 4px 10px;
  border-radius: 999px; letter-spacing: 0.04em;
}
.lg-pro .lg-badge { border-radius: 3px; }
.lg-badge-muted {
  font-size: 11px; font-weight: 600; color: #8A7B8A;
  background: rgba(255,255,255,0.65); border: 1px solid rgba(0,0,0,0.07);
  padding: 3px 10px; border-radius: 999px;
}
.lg-pro .lg-badge-muted { border-radius: 3px; background: #fff; border-color: #DEDAD0; }

.lg-header-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px; font-weight: 700; color: #2B2330;
  /* Overrides the global h1 { letter-spacing: -1.68px } (tuned for a
     56px hero elsewhere) which crushes text illegibly at this size. */
  letter-spacing: normal;
}
.lg-pro .lg-header-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.lg-header-sub { font-size: 13px; font-weight: 500; color: #8A7B8A; }
.lg-pro .lg-header-sub { color: #8A8070; }

.lg-header-right { display: flex; align-items: center; gap: 20px; }
.lg-stat { text-align: center; }
.lg-stat-num {
  display: block; font-family: 'Fredoka', sans-serif;
  font-size: 24px; font-weight: 700; color: var(--tr-color); line-height: 1;
}
.lg-stat-label { font-size: 11px; font-weight: 700; color: #A89BAA; text-transform: uppercase; letter-spacing: 0.06em; }
.lg-stat-divider { width: 1px; height: 28px; background: rgba(0,0,0,0.08); }

.lg-filter-bar {
  display: flex; gap: 8px; padding: 10px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  overflow-x: auto; flex-shrink: 0;
  background: rgba(255,255,255,0.35);
}
.lg-filter-pill {
  font-family: 'Quicksand', sans-serif; font-size: 13px; font-weight: 600;
  padding: 7px 16px; border-radius: 999px; border: 1.5px solid rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.7); cursor: pointer; white-space: nowrap;
  color: #5A4E6A; transition: all 0.15s ease;
}
.lg-pro .lg-filter-pill { border-radius: 4px; background: #fff; border-color: #DEDAD0; color: #6B6458; }
.lg-filter-pill:hover { border-color: currentColor; }

.lg-content { flex: 1; padding: 18px 48px 60px; overflow-y: auto; }

.lg-loading {
  display: flex; align-items: center; justify-content: center;
  gap: 12px; height: 200px; color: #8A7B8A; font-size: 14px; font-weight: 600;
}
.lg-spinner {
  width: 22px; height: 22px; border: 2.5px solid rgba(0,0,0,0.08);
  border-radius: 50%; animation: lg-spin 0.8s linear infinite;
}
@keyframes lg-spin { to { transform: rotate(360deg); } }

.lg-error {
  display: flex; align-items: center; justify-content: center;
  gap: 10px; height: 200px; color: #D85A30;
  font-size: 14px; font-weight: 600;
}

.lg-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 280px; gap: 14px; text-align: center;
}
.lg-empty-icon {
  width: 64px; height: 64px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
}
.lg-empty-title {
  font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 700; color: #2B2330;
}
.lg-pro .lg-empty-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.lg-empty-sub { font-size: 13px; font-weight: 500; color: #8A7B8A; line-height: 1.65; }

.lg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
/* Full-width desktop: lock to exactly 5 wider cards per row instead of
   auto-fill cramming in 6-7 narrow ones. */
@media (min-width: 1080px) {
  .lg-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.lg-card {
  background: #fff;
  border-radius: 14px;
  padding: clamp(14px,1.8vh,18px);
  display: flex; flex-direction: column; gap: 8px;
  cursor: pointer;
  border: 1.5px solid rgba(0,0,0,0.06);
  box-shadow: 0 8px 0 rgba(0,0,0,0.05), 0 14px 24px rgba(0,0,0,0.08);
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  outline: none;
}
.lg-card:hover {
  transform: translateY(-3px);
  border-color: var(--c-accent);
  box-shadow: 0 12px 0 rgba(0,0,0,0.06), 0 20px 36px rgba(0,0,0,0.12);
}
.lg-card:focus-visible { box-shadow: 0 0 0 3px var(--c-accent); }
.lg-card--pro { border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #DEDAD0; }
.lg-card--pro:hover { border-color: var(--c-accent); box-shadow: 0 4px 14px rgba(0,0,0,0.1); }

.lg-card-top {
  display: flex; align-items: center; justify-content: space-between;
}
.lg-unit-badge {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  background: var(--c-bg); color: var(--c-accent);
  padding: 3px 8px; border-radius: 999px;
}
.lg-card--pro .lg-unit-badge { border-radius: 3px; }
.lg-lesson-num { font-size: 10px; font-weight: 600; color: #A89BAA; }

.lg-card-guide-btn {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Quicksand', sans-serif; font-size: 10.5px; font-weight: 700;
  color: var(--c-accent); background: #fff; border: 1.5px solid var(--c-accent);
  border-radius: 999px; padding: 3px 9px; cursor: pointer; transition: opacity 0.15s;
}
.lg-card-guide-btn:hover { opacity: 0.75; }
.lg-card--pro .lg-card-guide-btn { border-radius: 3px; }

.lg-card-motif {
  display: flex; align-items: center; justify-content: center;
  padding: 10px 0 4px;
}
.lg-card-thumb {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
}

.lg-card-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 16px; font-weight: 700; color: #2B2330; line-height: 1.25;
}
.lg-card--pro .lg-card-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.lg-card-topic {
  font-size: 11px; font-weight: 600; color: #8A7B8A; line-height: 1.4;
}

.lg-card-footer {
  display: flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 8px;
  border-top: 1px solid rgba(0,0,0,0.06);
}
.lg-card-meta {
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; font-weight: 600; color: #A89BAA;
}
.lg-start-btn {
  margin-left: auto;
  display: flex; align-items: center; gap: 5px;
  font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 700;
  background: var(--c-accent); color: #fff; border: none; border-radius: 999px;
  padding: 5px 12px; cursor: pointer; transition: opacity 0.15s;
}
.lg-start-btn:hover { opacity: 0.88; }
.lg-card--pro .lg-start-btn { border-radius: 4px; }
`;
