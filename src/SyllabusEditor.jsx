import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import {
  SYLLABUS_LEVELS,
  SYLLABUS_AGE_TRACKS,
  SYLLABUS_GOAL_OPTIONS,
  SYLLABUS_CONTEXT_OPTIONS,
  WEAK_SKILL_OPTIONS,
  CYCLE_LENGTH,
  SESSION_DURATION_MIN,
  newSession,
  generateSyllabusSessions,
  offsetsForFollowUp,
  buildRationale,
  goalLabel,
  weakSkillLabel,
  contextLabel,
  nextLevel,
} from "./syllabusTypes";
import ConfirmDialog from "./ConfirmDialog";

// Curriculum lessons (Kids Discover, Teens Ignite, Adults Sprout) are
// built to run as a centered popup window and self-resize to fit their own
// content once opened (see any of those lesson files' window.opener effect)
// -- opening them as a plain new tab strands them at browser-window size
// instead. Every other skill (Grammar, Vocabulary, Speaking, Writing,
// Reading, Articles) is a regular full-page app route with no such popup
// behavior built in, so those stay a normal link.
function openCurriculumPopup(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(820, screenW - 40);
  const h = Math.min(860, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  window.open(
    path,
    "sentencoLessonPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

const SKILL_LABELS = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
  articles: "Articles",
  listening: "Listening",
  curriculum: "Curriculum",
};

const SKILL_COLORS = {
  grammar: "#3550B0",
  vocabulary: "#B0355C",
  speaking: "#B0791F",
  reading: "#1F8A5B",
  writing: "#6B5CE0",
  articles: "#1F6FB0",
  listening: "#8A5A2A",
  curriculum: "#0E8074",
};

export default function SyllabusEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState("Untitled syllabus");
  const [level, setLevel] = useState("A1");
  const [ageTrack, setAgeTrack] = useState("kids");
  const [sessions, setSessions] = useState([]);
  const [offsets, setOffsets] = useState({});
  const [cycleNumber, setCycleNumber] = useState(1);
  const [previousSyllabusId, setPreviousSyllabusId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  // Student profile -- this is what makes the generated syllabus actually
  // personalized instead of a generic level-appropriate mix. See
  // buildRationale() in syllabusTypes.js for how these turn into the
  // one-line "why" the teacher sees above the session list.
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [goalKey, setGoalKey] = useState("conversational");
  const [goalOther, setGoalOther] = useState("");
  const [needKey, setNeedKey] = useState("");
  const [needOther, setNeedOther] = useState("");
  const [examName, setExamName] = useState("");
  const [weakSkill, setWeakSkill] = useState("");
  const [interests, setInterests] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [studentNotes, setStudentNotes] = useState("");

  // Once a syllabus has real sessions, the profile locks to a read-only
  // summary -- it's the thing this syllabus was built around, not a form to
  // leave open every time the page loads. "Edit profile" snapshots the
  // current values so "Cancel" can restore them without a network round trip.
  const [profileEditing, setProfileEditing] = useState(true);
  const [profileSnapshot, setProfileSnapshot] = useState(null);

  const [genCount, setGenCount] = useState(CYCLE_LENGTH);
  const [generating, setGenerating] = useState(false);
  const [confirmRegenerate, setConfirmRegenerate] = useState(false);

  const [nextCyclePanelOpen, setNextCyclePanelOpen] = useState(false);
  const [nextCycleLevel, setNextCycleLevel] = useState(level);
  const [nextCycleWeakSkill, setNextCycleWeakSkill] = useState("");
  const [startingNextCycle, setStartingNextCycle] = useState(false);

  useEffect(() => {
    if (!user) return;
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("syllabi")
        .select("id, title, level, age_track, sessions, offsets, student_name, student_age, student_goal, student_goal_other, student_need, student_need_other, exam_name, weak_skill, interests, native_language, student_notes, cycle_number, previous_syllabus_id")
        .eq("id", id)
        .eq("user_id", user.id)
        .maybeSingle();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setTitle(data.title || "Untitled syllabus");
        setLevel(data.level || "A1");
        setNextCycleLevel(data.level || "A1");
        setAgeTrack(data.age_track || "kids");
        const loadedSessions = data.sessions && data.sessions.length > 0 ? data.sessions : [newSession()];
        setSessions(loadedSessions);
        setOffsets(data.offsets || {});
        setStudentName(data.student_name || "");
        setStudentAge(data.student_age != null ? String(data.student_age) : "");
        setGoalKey(data.student_goal || "conversational");
        setGoalOther(data.student_goal_other || "");
        setNeedKey(data.student_need || "");
        setNeedOther(data.student_need_other || "");
        setExamName(data.exam_name || "");
        setWeakSkill(data.weak_skill || "");
        setNextCycleWeakSkill(data.weak_skill || "");
        setInterests(data.interests || "");
        setNativeLanguage(data.native_language || "");
        setStudentNotes(data.student_notes || "");
        setCycleNumber(data.cycle_number || 1);
        setPreviousSyllabusId(data.previous_syllabus_id || null);
        const hasContent = loadedSessions.some((s) => s.title.trim() || s.notes.trim());
        setProfileEditing(!hasContent);
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [id, user]);

  async function save() {
    if (!user || saving) return;
    setSaving(true);
    const { error } = await supabase
      .from("syllabi")
      .update({
        title, level, age_track: ageTrack, sessions, offsets,
        student_name: studentName, student_age: studentAge.trim() ? Number(studentAge) : null,
        student_goal: goalKey, student_goal_other: goalOther,
        student_need: needKey, student_need_other: needOther, exam_name: examName,
        weak_skill: weakSkill, interests, native_language: nativeLanguage, student_notes: studentNotes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .eq("user_id", user.id);
    setSaving(false);
    if (!error) setSavedAt(Date.now());
  }

  async function runGenerate() {
    setGenerating(true);
    const result = await generateSyllabusSessions({
      level,
      ageTrack,
      count: genCount,
      focusKey: weakSkill || "balanced",
    });
    setGenerating(false);
    if (result.sessions.length === 0) {
      window.alert(`Couldn't generate anything for ${level} ${ageTrack}. Add sessions manually below instead.`);
      return;
    }
    setSessions(result.sessions);
    setOffsets(result.offsets);
    if (studentName.trim()) setTitle(`${studentName.trim()} · Cycle ${cycleNumber}`);
    setProfileEditing(false);
  }

  function handleGenerateClick() {
    if (!studentName.trim()) {
      window.alert("Add the student's name first, that's what this syllabus is built around.");
      return;
    }
    const hasRealContent = sessions.some((s) => s.title.trim() || s.notes.trim());
    if (hasRealContent) {
      setConfirmRegenerate(true);
    } else {
      runGenerate();
    }
  }

  function startEditProfile() {
    setProfileSnapshot({
      studentName, studentAge, goalKey, goalOther, needKey, needOther, examName,
      weakSkill, interests, nativeLanguage, studentNotes,
    });
    setProfileEditing(true);
  }

  function cancelEditProfile() {
    if (profileSnapshot) {
      setStudentName(profileSnapshot.studentName);
      setStudentAge(profileSnapshot.studentAge);
      setGoalKey(profileSnapshot.goalKey);
      setGoalOther(profileSnapshot.goalOther);
      setNeedKey(profileSnapshot.needKey);
      setNeedOther(profileSnapshot.needOther);
      setExamName(profileSnapshot.examName);
      setWeakSkill(profileSnapshot.weakSkill);
      setInterests(profileSnapshot.interests);
      setNativeLanguage(profileSnapshot.nativeLanguage);
      setStudentNotes(profileSnapshot.studentNotes);
    }
    setProfileEditing(false);
  }

  async function createNextCycle() {
    if (!user || startingNextCycle) return;
    setStartingNextCycle(true);
    const startOffsets = offsetsForFollowUp(offsets, level, nextCycleLevel, ageTrack);
    const nextCycleNumber = cycleNumber + 1;
    const result = await generateSyllabusSessions({
      level: nextCycleLevel,
      ageTrack,
      count: sessions.length || CYCLE_LENGTH,
      focusKey: nextCycleWeakSkill || "balanced",
      startOffsets,
    });
    const { data, error } = await supabase
      .from("syllabi")
      .insert({
        user_id: user.id,
        title: `${studentName.trim() || title} · Cycle ${nextCycleNumber}`,
        level: nextCycleLevel,
        age_track: ageTrack,
        sessions: result.sessions,
        offsets: result.offsets,
        student_name: studentName,
        student_age: studentAge.trim() ? Number(studentAge) : null,
        student_goal: goalKey,
        student_goal_other: goalOther,
        student_need: needKey,
        student_need_other: needOther,
        exam_name: examName,
        weak_skill: nextCycleWeakSkill,
        interests,
        native_language: nativeLanguage,
        student_notes: studentNotes,
        cycle_number: nextCycleNumber,
        previous_syllabus_id: id,
      })
      .select()
      .single();
    setStartingNextCycle(false);
    setNextCyclePanelOpen(false);
    if (!error && data) navigate(`/library/syllabus/${data.id}/edit`);
  }

  function updateSession(sid, field, value) {
    setSessions((prev) => prev.map((s) => (s.id === sid ? { ...s, [field]: value } : s)));
  }

  function addSession() {
    setSessions((prev) => [...prev, newSession()]);
  }

  if (authLoading || (user && loading)) return null;
  if (!user) return <p className="syl-signin">Sign in to edit this syllabus.</p>;
  if (notFound) return <p className="syl-signin">Syllabus not found.</p>;

  const higherLevel = nextLevel(level);
  const hasRealContent = sessions.some((s) => s.title.trim() || s.notes.trim());
  const rationale = hasRealContent
    ? buildRationale({ studentName, goalKey, goalOther, weakSkillKey: weakSkill, level, needKey, needOther, examName })
    : null;
  const ageTrackLabel = SYLLABUS_AGE_TRACKS.find((t) => t.key === ageTrack)?.label || "";
  const context = contextLabel(needKey, needOther);
  const initial = (studentName.trim()[0] || "?").toUpperCase();

  return (
    <div className="syl-shell">
      <style>{CSS}</style>

      <div className="syl-frame no-print">
        <div className="syl-topbar">
          <button type="button" className="syl-brand" onClick={() => navigate("/library/syllabus")} title="Back to your syllabi">
            <img src="/logo-sentenco.png" alt="" className="syl-brand-logo" />entenco
          </button>
          <div className="syl-topbar-actions">
            <span className="syl-saved-note">{saving ? "Saving…" : savedAt ? "Saved" : ""}</span>
            {hasRealContent && (
              <button type="button" className="syl-btn syl-btn--ghost" onClick={() => setNextCyclePanelOpen((o) => !o)}>Start next cycle</button>
            )}
            <button type="button" className="syl-btn syl-btn--ghost" onClick={() => window.print()}>Print</button>
            <button type="button" className="syl-btn syl-btn--primary" onClick={save} disabled={saving}>Save</button>
          </div>
        </div>

        <div className="syl-header">
          <div className="syl-header-blob" />
          <div className="syl-header-content">
            <input
              className="syl-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled syllabus"
            />
            <div className="syl-meta-row">
              <select className="syl-pill-select" value={level} onChange={(e) => { setLevel(e.target.value); setNextCycleLevel(e.target.value); }}>
                {SYLLABUS_LEVELS.map((lv) => <option key={lv} value={lv}>{lv}</option>)}
              </select>
              <select className="syl-pill-select" value={ageTrack} onChange={(e) => setAgeTrack(e.target.value)}>
                {SYLLABUS_AGE_TRACKS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
              </select>
              <span className="syl-pill-static">Cycle {cycleNumber}</span>
              {sessions.length > 0 && (
                <span className="syl-pill-static">{sessions.length} sessions · {SESSION_DURATION_MIN} min each</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="syl-meta-print print-only">
        {title} — {level} · {ageTrackLabel}
      </div>

      {nextCyclePanelOpen && (
        <div className="syl-followup-bar no-print">
          <span className="syl-followup-label">Next cycle</span>
          <select className="syl-select" value={nextCycleLevel} onChange={(e) => setNextCycleLevel(e.target.value)}>
            <option value={level}>{level} (same level)</option>
            {higherLevel && <option value={higherLevel}>{higherLevel} (level up)</option>}
          </select>
          <select className="syl-select" value={nextCycleWeakSkill} onChange={(e) => setNextCycleWeakSkill(e.target.value)}>
            <option value="">Balanced (no particular weak spot)</option>
            {WEAK_SKILL_OPTIONS.map((w) => <option key={w.key} value={w.key}>Still weak: {w.label}</option>)}
          </select>
          <button type="button" className="syl-btn syl-btn--primary" onClick={createNextCycle} disabled={startingNextCycle}>
            {startingNextCycle ? "Creating…" : `Create Cycle ${cycleNumber + 1}`}
          </button>
          <p className="syl-followup-hint">
            Carries the student's profile forward, and picks up Grammar/Vocabulary/Writing/Articles where this cycle left off.
          </p>
        </div>
      )}

      <div className="syl-page">
        <div className="syl-stage">

          {profileEditing ? (
            <div className="syl-profile no-print">
              <div className="syl-who">
                <div className="syl-avatar">{initial}</div>
                <div className="syl-who-fields">
                  <span className="syl-who-label">Student</span>
                  <input
                    className="syl-who-input"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Miguel"
                  />
                </div>
                <label className="syl-age-field">
                  Age
                  <input
                    type="number"
                    min="3"
                    max="99"
                    className="syl-age-input"
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    placeholder="Age"
                  />
                </label>
              </div>

              <div className="syl-section">
                <div className="syl-section-head">
                  <span className="syl-section-bar" style={{ background: "#FF6B4A" }} />
                  <span className="syl-section-title">Goal &amp; context</span>
                </div>
                <div className="syl-profile-grid">
                  <label className="syl-profile-field">
                    Main goal
                    <select className="syl-profile-input" value={goalKey} onChange={(e) => setGoalKey(e.target.value)}>
                      {SYLLABUS_GOAL_OPTIONS.map((g) => <option key={g.key} value={g.key}>{g.label}</option>)}
                    </select>
                  </label>
                  <label className="syl-profile-field">
                    Where they'll use it
                    <select className="syl-profile-input" value={needKey} onChange={(e) => setNeedKey(e.target.value)}>
                      <option value="">Not specified</option>
                      {SYLLABUS_CONTEXT_OPTIONS.map((n) => <option key={n.key} value={n.key}>{n.label}</option>)}
                    </select>
                  </label>
                  {goalKey === "other" && (
                    <label className="syl-profile-field">
                      Goal, in your own words
                      <input
                        type="text"
                        className="syl-profile-input"
                        value={goalOther}
                        onChange={(e) => setGoalOther(e.target.value)}
                        placeholder="e.g. Passing a citizenship interview"
                      />
                    </label>
                  )}
                  {needKey === "other" && (
                    <label className="syl-profile-field">
                      Context, in your own words
                      <input
                        type="text"
                        className="syl-profile-input"
                        value={needOther}
                        onChange={(e) => setNeedOther(e.target.value)}
                        placeholder="e.g. Volunteering abroad"
                      />
                    </label>
                  )}
                  {goalKey === "exam" && (
                    <label className="syl-profile-field syl-profile-field--wide">
                      Which exam
                      <input
                        type="text"
                        className="syl-profile-input"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        placeholder="e.g. IELTS, TOEFL, Cambridge B2"
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="syl-section">
                <div className="syl-section-head">
                  <span className="syl-section-bar" style={{ background: "#1B2A4A" }} />
                  <span className="syl-section-title">Diagnosis</span>
                </div>
                <label className="syl-profile-field">
                  Weakest area right now
                  <select className="syl-profile-input" value={weakSkill} onChange={(e) => setWeakSkill(e.target.value)}>
                    <option value="">Balanced (no particular weak spot)</option>
                    {WEAK_SKILL_OPTIONS.map((w) => <option key={w.key} value={w.key}>{w.label}</option>)}
                  </select>
                </label>
              </div>

              <div className="syl-section">
                <div className="syl-section-head">
                  <span className="syl-section-bar" style={{ background: "#FF6B4A" }} />
                  <span className="syl-section-title">Personalization</span>
                </div>
                <div className="syl-profile-grid">
                  <label className="syl-profile-field">
                    Interests <span className="syl-profile-optional">(for your own reference)</span>
                    <input
                      type="text"
                      className="syl-profile-input"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      placeholder="e.g. basketball, cooking, K-dramas"
                    />
                  </label>
                  <label className="syl-profile-field">
                    Native language <span className="syl-profile-optional">(for your own reference)</span>
                    <input
                      type="text"
                      className="syl-profile-input"
                      value={nativeLanguage}
                      onChange={(e) => setNativeLanguage(e.target.value)}
                      placeholder="e.g. Hebrew"
                    />
                  </label>
                  <label className="syl-profile-field syl-profile-field--wide">
                    Notes for next cycle <span className="syl-profile-optional">(optional)</span>
                    <textarea
                      className="syl-profile-input syl-profile-textarea"
                      rows={2}
                      value={studentNotes}
                      onChange={(e) => setStudentNotes(e.target.value)}
                      placeholder="Anything worth remembering when you plan what's next"
                    />
                  </label>
                </div>
              </div>

              <div className="syl-profile-divider" />

              <div className="syl-profile-actions">
                <label className="syl-profile-count">
                  Sessions
                  <input
                    type="number"
                    min="1"
                    max="30"
                    className="syl-gen-input"
                    value={genCount}
                    onChange={(e) => setGenCount(Math.max(1, Number(e.target.value) || 1))}
                  />
                </label>
                <div className="syl-profile-actions-btns">
                  {hasRealContent && (
                    <button type="button" className="syl-btn syl-btn--ghost" onClick={cancelEditProfile}>Cancel</button>
                  )}
                  <button type="button" className="syl-btn syl-btn--primary" onClick={handleGenerateClick} disabled={generating}>
                    {generating ? "Generating…" : hasRealContent ? "Regenerate this cycle" : "Generate syllabus"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="syl-summary no-print">
              <div className="syl-summary-top">
                <div className="syl-avatar">{initial}</div>
                <div className="syl-summary-name">
                  {studentName || "This student"}
                  <span className="syl-summary-sub">{level} · {ageTrackLabel}{studentAge ? ` · Age ${studentAge}` : ""} · Cycle {cycleNumber}</span>
                </div>
                <button type="button" className="syl-edit-btn" onClick={startEditProfile}>Edit profile</button>
              </div>
              <div className="syl-stat-strip">
                <div className="syl-stat">
                  <div className="syl-stat-label">Goal</div>
                  <div className="syl-stat-value">{goalLabel(goalKey, goalOther)}</div>
                </div>
                <div className="syl-stat">
                  <div className="syl-stat-label">Context</div>
                  <div className="syl-stat-value">{context || "Not specified"}</div>
                </div>
                <div className="syl-stat">
                  <div className="syl-stat-label">Weakest area</div>
                  <div className="syl-stat-value">{weakSkillLabel(weakSkill) || "Balanced"}</div>
                </div>
                <div className="syl-stat">
                  <div className="syl-stat-label">Interests</div>
                  <div className="syl-stat-value">{interests || "Not specified"}</div>
                </div>
              </div>
              {(nativeLanguage || (goalKey === "exam" && examName) || studentNotes) && (
                <div className="syl-stat-strip syl-stat-strip--secondary">
                  {nativeLanguage && (
                    <div className="syl-stat">
                      <div className="syl-stat-label">Native language</div>
                      <div className="syl-stat-value">{nativeLanguage}</div>
                    </div>
                  )}
                  {goalKey === "exam" && examName && (
                    <div className="syl-stat">
                      <div className="syl-stat-label">Exam</div>
                      <div className="syl-stat-value">{examName}</div>
                    </div>
                  )}
                  {studentNotes && (
                    <div className="syl-stat syl-stat--wide">
                      <div className="syl-stat-label">Notes</div>
                      <div className="syl-stat-value">{studentNotes}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {rationale && <div className="syl-rationale no-print">{rationale}</div>}

          <div className="syl-timeline">
            {sessions.map((s, i) => (
              <div className={`syl-t-row${s.completed ? " syl-t-row--done" : ""}`} key={s.id}>
                <span className="syl-t-dot" style={{ background: SKILL_COLORS[s.skill] || "#5A6B92" }}>{s.completed ? "✓" : i + 1}</span>
                <div className="syl-t-body">
                  <div className="syl-t-tags">
                    <span className="syl-session-of">Session {i + 1} of {sessions.length}</span>
                    {s.skill && s.skill !== "custom" && (
                      <span className={`syl-skill-tag syl-skill-tag--${s.skill}`}>{SKILL_LABELS[s.skill] || s.skill}</span>
                    )}
                    {s.requested && <span className="syl-pending-tag">⏳ Awaiting delivery</span>}
                    {s.completed && <span className="syl-done-tag">Completed</span>}
                  </div>
                  <input
                    className="syl-session-title"
                    value={s.title}
                    onChange={(e) => updateSession(s.id, "title", e.target.value)}
                    placeholder="Session title"
                  />
                  <input
                    className="syl-session-notes"
                    value={s.notes}
                    onChange={(e) => updateSession(s.id, "notes", e.target.value)}
                    placeholder="Notes (optional)"
                  />
                </div>
                <div className="syl-session-actions no-print">
                  {s.requested && (
                    <button
                      type="button"
                      className="syl-icon-btn syl-icon-btn--delivered"
                      onClick={() => updateSession(s.id, "requested", false)}
                      aria-label="Mark as delivered"
                      title="Mark as delivered"
                    >
                      📥
                    </button>
                  )}
                  {s.href ? (
                    s.skill === "curriculum" ? (
                      <button type="button" className="syl-open-btn" onClick={() => openCurriculumPopup(s.href)}>
                        Open →
                      </button>
                    ) : (
                      <a className="syl-open-btn" href={s.href} target="_blank" rel="noreferrer">
                        Open →
                      </a>
                    )
                  ) : (
                    <span className="syl-open-btn syl-open-btn--off" title="No linked lesson yet">Open →</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="syl-add-btn no-print" onClick={addSession}>+ Add session</button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmRegenerate}
        title="Replace current sessions?"
        message="Generating a new draft will replace everything in the session list below. This can't be undone unless you've already saved a version you want to keep."
        confirmLabel="Replace"
        onConfirm={() => { setConfirmRegenerate(false); runGenerate(); }}
        onCancel={() => setConfirmRegenerate(false)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.syl-shell { min-height: 100vh; background: #FBF4F1; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.syl-shell * { box-sizing: border-box; }
.syl-signin { text-align: center; margin-top: 80px; color: #5A6B92; font-family: 'Inter', sans-serif; }

.syl-frame { max-width: 900px; margin: 0 auto; padding: 24px 24px 0; }

.syl-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.syl-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'Inter', sans-serif; font-weight: 800; font-size: 18px;
  color: #1B2A4A; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
}
.syl-brand-logo { height: 26px; width: auto; display: block; margin-right: -4px; }
.syl-topbar-actions { display: flex; align-items: center; gap: 8px; }
.syl-saved-note { font-size: 12px; color: #5A6B92; font-weight: 700; }

.syl-header {
  background: #1B2A4A; border-radius: 22px; padding: 28px 30px 30px; color: #FFFFFF;
  position: relative; overflow: hidden; box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.syl-header-blob {
  position: absolute; width: 220px; height: 220px; border-radius: 50%;
  background: #FF6B4A; opacity: 0.16; top: -90px; right: -70px; pointer-events: none;
}
.syl-header-content { position: relative; }

.syl-btn { font-weight: 700; font-size: 13px; border-radius: 999px; padding: 9px 18px; cursor: pointer; border: none; white-space: nowrap; }
.syl-btn--primary { background: #FF6B4A; color: #FFFFFF; }
.syl-btn--primary:disabled { opacity: 0.6; cursor: default; }
.syl-btn--ghost { background: #FDECE5; color: #E0502F; border: none; }

.syl-title-input {
  width: 100%; border: none; outline: none; background: transparent;
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 32px; color: #FFFFFF;
  margin-bottom: 14px; padding: 0; letter-spacing: -0.01em;
}
.syl-title-input::placeholder { color: rgba(255,255,255,0.4); }

.syl-meta-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.syl-meta-print { display: none; }
.syl-pill-select {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #FFFFFF;
  background: rgba(255,255,255,0.16); border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer;
}
.syl-pill-static { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #B9C3DC; padding: 6px 4px; }

.syl-select {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; color: #1B2A4A;
  background: #FBF4F1; border: 1.5px solid #EDE1DB; border-radius: 10px; padding: 8px 12px; cursor: pointer;
}

.syl-followup-bar {
  max-width: 760px; margin: 20px auto 0; background: #FFFFFF; border-radius: 14px; padding: 16px 20px;
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap; box-shadow: 0 8px 18px rgba(27,42,74,0.06);
}
.syl-followup-label { font-size: 13px; font-weight: 800; color: #1B2A4A; }
.syl-followup-hint { flex-basis: 100%; font-size: 12px; color: #5A6B92; margin: 0; }

.syl-page { padding: 28px 20px 60px; }
.syl-stage { max-width: 760px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; padding: 30px 32px 34px; box-shadow: 0 10px 30px rgba(27,42,74,0.08); }

.syl-profile, .syl-summary { background: #FBF4F1; border-radius: 16px; padding: 22px 24px; margin-bottom: 18px; }

.syl-avatar {
  width: 48px; height: 48px; border-radius: 50%; background: #FF6B4A; color: #FFFFFF; flex-shrink: 0;
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(224,80,47,0.3);
}

.syl-who { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; flex-wrap: wrap; }
.syl-who-fields { flex: 1 1 140px; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.syl-who-label { font-size: 10.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #5A6B92; }
.syl-who-input {
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: #1B2A4A;
  border: none; background: transparent; outline: none; padding: 2px 0; width: 100%;
  border-bottom: 2px solid transparent; transition: border-color 0.15s;
}
.syl-who-input:focus { border-bottom-color: #FF6B4A; }
.syl-age-field { display: flex; flex-direction: column; gap: 4px; font-size: 10.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #5A6B92; flex-shrink: 0; }
.syl-age-input {
  width: 56px; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; color: #1B2A4A;
  background: #FFFFFF; border: 1.5px solid #EDE1DB; border-radius: 10px; padding: 8px 10px; outline: none; text-align: center;
}
.syl-age-input:focus { border-color: #FF6B4A; }

.syl-section { margin-bottom: 20px; }
.syl-section:last-of-type { margin-bottom: 0; }
.syl-section-head { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.syl-section-bar { width: 4px; height: 14px; border-radius: 2px; }
.syl-section-title { font-size: 11px; font-weight: 800; letter-spacing: 0.09em; text-transform: uppercase; color: #5A6B92; }

.syl-profile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.syl-profile-field { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; font-weight: 700; color: #1B2A4A; }
.syl-profile-field--wide { grid-column: 1 / -1; }
.syl-profile-optional { font-weight: 500; color: #9A93A6; text-transform: none; letter-spacing: 0; }
.syl-profile-input {
  font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13.5px; color: #1B2A4A;
  background: #FFFFFF; border: 1.5px solid #EDE1DB; border-radius: 10px; padding: 9px 12px; outline: none;
}
.syl-profile-input:focus { border-color: #FF6B4A; }
.syl-profile-textarea { resize: vertical; font-family: 'Inter', sans-serif; }
.syl-profile-divider { height: 1px; background: #EDE1DB; margin: 4px 0 18px; }
.syl-profile-actions { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.syl-profile-actions-btns { display: flex; align-items: center; gap: 10px; }
.syl-profile-count { display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 700; color: #1B2A4A; }

.syl-summary-top { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; flex-wrap: wrap; }
.syl-summary-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: #1B2A4A; flex: 1 1 140px; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.syl-summary-sub { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 11.5px; color: #5A6B92; }
.syl-edit-btn { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #E0502F; background: #FDECE5; border: none; border-radius: 999px; padding: 8px 16px; cursor: pointer; white-space: nowrap; flex-shrink: 0; }

.syl-stat-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; background: #FFFFFF; border-radius: 12px; border: 1.5px solid #EDE1DB; overflow: hidden; }
.syl-stat-strip--secondary { margin-top: 10px; }
.syl-stat { padding: 12px 14px; border-right: 1px solid #EDE1DB; min-width: 0; }
.syl-stat:last-child { border-right: none; }
.syl-stat--wide { grid-column: span 2; }
.syl-stat-label { font-size: 9.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A6B92; margin-bottom: 4px; }
.syl-stat-value { font-size: 13px; font-weight: 700; color: #1B2A4A; line-height: 1.35; overflow-wrap: break-word; }

.syl-rationale {
  font-family: 'Fraunces', serif; font-weight: 500; font-style: italic; font-size: 14.5px; color: #1B2A4A;
  background: #FDECE5; border-left: 4px solid #FF6B4A; border-radius: 0 12px 12px 0; padding: 12px 16px 12px 18px; margin-bottom: 18px; line-height: 1.5;
}

.syl-gen-input { width: 60px; padding: 7px 10px; border-radius: 8px; border: 1.5px solid #EDE1DB; font-family: 'Inter', sans-serif; font-weight: 700; }

.syl-timeline { position: relative; }
.syl-timeline::before { content: ""; position: absolute; left: 15px; top: 8px; bottom: 8px; width: 2px; background: #EDE1DB; }
.syl-t-row { position: relative; display: flex; align-items: flex-start; gap: 14px; padding: 7px 0; }
.syl-t-dot {
  position: relative; z-index: 1; flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%;
  color: #FFFFFF; font-weight: 800; font-size: 12px;
  display: flex; align-items: center; justify-content: center; margin-top: 2px;
}
.syl-t-body { flex: 1; min-width: 0; background: #FBF4F1; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 2px; }
.syl-t-tags { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; flex-wrap: wrap; }
.syl-session-of { font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #A79A92; }
.syl-skill-tag {
  font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;
  border-radius: 999px; padding: 2px 8px;
}
.syl-skill-tag--grammar { background: #E7ECFB; color: #3550B0; }
.syl-skill-tag--vocabulary { background: #FBEAF0; color: #B0355C; }
.syl-skill-tag--speaking { background: #FDF1DE; color: #B0791F; }
.syl-skill-tag--reading { background: #E4F6EE; color: #1F8A5B; }
.syl-skill-tag--writing { background: #EFEBFB; color: #6B5CE0; }
.syl-skill-tag--articles { background: #E9F3FB; color: #1F6FB0; }
.syl-skill-tag--listening { background: #F4EDE3; color: #8A5A2A; }
.syl-skill-tag--curriculum { background: #DDF3EF; color: #0E8074; }
.syl-done-tag { font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 999px; padding: 2px 8px; background: #E7F5EC; color: #2F9E58; }
.syl-pending-tag { font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 999px; padding: 2px 8px; background: #FFF4D6; color: #8A6D1F; }
.syl-t-row--done .syl-t-body { opacity: 0.6; }
.syl-t-row--done .syl-session-title { text-decoration: line-through; }
.syl-session-title, .syl-session-notes {
  border: none; outline: none; background: transparent; font-family: 'Inter', sans-serif; width: 100%; padding: 2px 0;
}
.syl-session-title { font-weight: 700; font-size: 14.5px; color: #1B2A4A; }
.syl-session-notes { font-size: 12.5px; color: #5A6B92; }
.syl-session-title::placeholder, .syl-session-notes::placeholder { color: #C7B7AE; }

.syl-session-actions { flex-shrink: 0; display: flex; align-items: center; gap: 6px; margin-top: 2px; }
.syl-icon-btn {
  width: 26px; height: 26px; border-radius: 8px; border: none; background: #FDECE5; color: #E0502F;
  cursor: pointer; font-size: 13px; font-weight: 800;
}
.syl-icon-btn--delivered { background: #FFF4D6; }
.syl-open-btn {
  display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #FFFFFF;
  background: #0E8074; border: none; border-radius: 999px; padding: 8px 14px; text-decoration: none; cursor: pointer;
}
.syl-open-btn--off { background: #E5E0DC; color: #9A93A6; cursor: default; }

.syl-add-btn {
  margin-top: 14px; align-self: flex-start; background: none; border: 1.5px dashed #EDE1DB;
  color: #E0502F; font-weight: 700; font-size: 13.5px; border-radius: 10px; padding: 10px 16px; cursor: pointer;
}

.print-only { display: none; }

@media print {
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  .syl-shell { background: #FFFFFF; }
  .syl-page { padding: 0; }
  .syl-stage { box-shadow: none; max-width: 100%; padding: 0; }
  .syl-meta-print { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: #1B2A4A; margin: 24px 20px 18px; }
  .syl-t-body { background: none; border-bottom: 1px solid #EDE1DB; border-radius: 0; padding: 10px 0; }
  .syl-timeline::before { display: none; }
}

@media (max-width: 640px) {
  .syl-profile-grid { grid-template-columns: 1fr; }
  .syl-stat-strip { grid-template-columns: repeat(2, 1fr); }
  .syl-stat { border-bottom: 1px solid #EDE1DB; }
  .syl-stat:nth-child(2n) { border-right: none; }
  .syl-stat--wide { grid-column: span 2; }
}
`;
