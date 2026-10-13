import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { teachingBadge } from "./ProfileSettings.jsx";
import CommunityFeed from "./CommunityFeed.jsx";
import AvatarCropper from "./AvatarCropper.jsx";
import { ageYearsLine } from "./profileFields.js";
import { blockUser, unblockUser, useBlocked } from "./safetyApi.js";
import ReportDialog from "./ReportDialog.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import { getNetworkState, getNetworkCounts, followUser, unfollowUser, requestConnection, removeConnection, respondConnection } from "./networkApi.js";

function initialsOf(name) {
  const parts = (name || "Teacher").split(" ").filter(Boolean);
  return ((parts[0]?.[0] || "T") + (parts[1]?.[0] || "")).toUpperCase();
}

const AGE_GROUPS = [["kids", "Kids"], ["teens", "Teens"], ["adults", "Adults"]];
const EXPERTISE = ["Grammar", "Speaking", "Vocabulary", "Writing", "Reading", "Listening", "Pronunciation", "Exam prep", "Business English"];
const sameList = (a, b) => JSON.stringify([...(a || [])].sort()) === JSON.stringify([...(b || [])].sort());

function yearsText(years) {
  if (years === null || years === undefined || years === "") return "";
  return Number(years) < 1 ? "New to teaching" : `${years} ${Number(years) === 1 ? "year" : "years"} teaching`;
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.8a1.5 1.5 0 0 1 1.5-1.5h1.3l.9-1.5h5.6l.9 1.5H14a1.5 1.5 0 0 1 1.5 1.5v6.7a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5Z" />
      <circle cx="9" cy="10" r="2.8" />
    </svg>
  );
}

function HlIcon({ name }) {
  const paths = {
    all: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
    tip: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" /></>,
    question: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
    resource: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></>,
    lesson: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const HIGHLIGHTS = [
  { key: "all", label: "All" },
  { key: "tip", label: "Tips" },
  { key: "question", label: "Questions" },
  { key: "resource", label: "Resources" },
  { key: "lesson", label: "Lessons" },
];

function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
    </svg>
  );
}

function NetIcon({ name }) {
  const paths = {
    plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    clock: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></>,
    eye: <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.5 3.5 16 7l-8.5 8.5-4 1 1-4Z" />
    </svg>
  );
}

export default function TeacherProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [postCount, setPostCount] = useState(null);
  const [counts, setCounts] = useState(null);
  const [filter, setFilter] = useState("all");
  const [net, setNet] = useState(null);           // my follow / connect state with this teacher
  const [netCounts, setNetCounts] = useState(null); // { followers, following, connections }
  const [netBusy, setNetBusy] = useState(false);
  const { hidden: hiddenIds, mine: myBlocks, refresh: refreshBlocked } = useBlocked();
  const [moreOpen, setMoreOpen] = useState(false);
  const [reportTarget, setReportTarget] = useState(null);
  const [confirmBlock, setConfirmBlock] = useState(false);
  const iBlocked = myBlocks.includes(id);
  const blockedMe = hiddenIds.includes(id) && !iBlocked;

  // Editing in place, your own profile only.
  const isSelf = !!user && user.id === id;
  const [editing, setEditing] = useState(false);
  const canEdit = isSelf && editing;
  const [draft, setDraft] = useState(null);       // { name, country, years, avatar_url, cover_url }
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState(null);     // { kind: "ok" | "error", text }
  const [cropper, setCropper] = useState(null);   // { kind: "avatar" | "cover", src }
  const [uploading, setUploading] = useState(false);
  const avatarInput = useRef(null);
  const coverInput = useRef(null);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    setDraft(null);
    setEditing(false);
    setFilter("all");
    (async () => {
      const base = "id, display_name, avatar_url, country, years_teaching, is_mentor, mentor_specialty, mentor_format, mentor_price_type, mentor_price_amount, mentor_bio";
      // cover_url / age / teaches_ages / expertise exist once their SQL has been run; fall back step by step until then.
      let { data, error } = await supabase.from("profiles").select(`${base}, cover_url, age, teaches_ages, expertise, companies(name)`).eq("id", id).maybeSingle();
      if (error) ({ data, error } = await supabase.from("profiles").select(`${base}, cover_url`).eq("id", id).maybeSingle());
      if (error) ({ data } = await supabase.from("profiles").select(base).eq("id", id).maybeSingle());
      if (!data) setNotFound(true);
      setProfile(data);
      setLoading(false);
    })();
  }, [id]);

  async function refreshNetwork() {
    if (!id) return;
    const [counts, state] = await Promise.all([getNetworkCounts(id), user && user.id !== id ? getNetworkState(user.id, id) : Promise.resolve(null)]);
    setNetCounts(counts);
    setNet(state);
  }

  useEffect(() => {
    setNet(null);
    setNetCounts(null);
    refreshNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user?.id]);

  async function netAct(fn) {
    if (netBusy) return;
    setNetBusy(true);
    const { error } = (await fn()) || {};
    if (error) setNotice({ kind: "error", text: /blocked/i.test(error.message || "") ? "You cannot do that with this teacher." : "That did not go through. Please try again." });
    await refreshNetwork();
    setNetBusy(false);
  }
  const onFollow = () => netAct(() => (net?.following ? unfollowUser(id) : followUser(id)));
  const onConnect = () => netAct(() => requestConnection(id));
  const onCancelRequest = () => netAct(() => removeConnection(id));
  const onDisconnect = () => {
    if (window.confirm(`Remove ${shown.name} from your connections?`)) netAct(() => removeConnection(id));
  };
  async function doBlock() {
    setConfirmBlock(false);
    setMoreOpen(false);
    await blockUser(id);
    await Promise.all([refreshBlocked(), refreshNetwork()]);
  }
  async function doUnblock() {
    await unblockUser(id);
    await Promise.all([refreshBlocked(), refreshNetwork()]);
  }
  const onAccept = () => netAct(() => respondConnection(id, true));
  const onDecline = () => netAct(() => respondConnection(id, false));

  // Start (or restart) the editable copy once the profile is loaded and it is yours.
  useEffect(() => {
    if (!profile || !isSelf) { setDraft(null); return; }
    setDraft({
      name: profile.display_name || localStorage.getItem("sentenco_teacher_name") || "",
      age: profile.age ?? "",
      years: profile.years_teaching ?? "",
      teaches: profile.teaches_ages || [],
      expertise: profile.expertise || [],
      avatar_url: profile.avatar_url || null,
      cover_url: profile.cover_url || null,
    });
  }, [profile, isSelf]);

  const shown = canEdit && draft ? {
    name: draft.name, age: draft.age, years: draft.years, teaches: draft.teaches, expertise: draft.expertise,
    avatar_url: draft.avatar_url, cover_url: draft.cover_url,
  } : {
    name: profile?.display_name || "Teacher", age: profile?.age ?? "", years: profile?.years_teaching ?? "",
    teaches: profile?.teaches_ages || [], expertise: profile?.expertise || [],
    avatar_url: profile?.avatar_url || null, cover_url: profile?.cover_url || null,
  };

  const dirty = !!(isSelf && draft && profile && (
    draft.name !== (profile.display_name || localStorage.getItem("sentenco_teacher_name") || "")
    || String(draft.age) !== String(profile.age ?? "")
    || String(draft.years) !== String(profile.years_teaching ?? "")
    || !sameList(draft.teaches, profile.teaches_ages)
    || !sameList(draft.expertise, profile.expertise)
    || (draft.avatar_url || null) !== (profile.avatar_url || null)
    || (draft.cover_url || null) !== (profile.cover_url || null)
  ));

  function set(field, value) {
    setNotice(null);
    setDraft((d) => ({ ...d, [field]: value }));
  }

  function stepAge(delta) {
    const cur = draft.age === "" ? 24 : Number(draft.age);
    set("age", Math.max(18, Math.min(99, cur + delta)));
  }

  function toggleIn(field, value) {
    setNotice(null);
    setDraft((d) => ({ ...d, [field]: d[field].includes(value) ? d[field].filter((x) => x !== value) : [...d[field], value] }));
  }

  function stepYears(delta) {
    const cur = draft.years === "" ? 0 : Number(draft.years);
    set("years", Math.max(0, Math.min(60, cur + delta)));
  }

  function pickFile(kind, e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setNotice(null);
    setCropper({ kind, src: URL.createObjectURL(file) });
  }

  function closeCropper() {
    if (cropper) URL.revokeObjectURL(cropper.src);
    setCropper(null);
  }

  async function cropDone(blob) {
    const kind = cropper.kind;
    closeCropper();
    setUploading(true);
    const path = `${user.id}/${kind}-${crypto.randomUUID()}.jpg`;
    const { error } = await supabase.storage.from("community-uploads").upload(path, blob, { contentType: "image/jpeg" });
    setUploading(false);
    if (error) { setNotice({ kind: "error", text: error.message || "Photo upload failed." }); return; }
    const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(path);
    set(kind === "cover" ? "cover_url" : "avatar_url", pub.publicUrl);
  }

  function cancelEdit() {
    setNotice(null);
    setEditing(false);
    setProfile((p) => ({ ...p }));   // re-runs the effect that resets the editable copy
  }

  async function save() {
    if (saving) return;
    if (!dirty) { setEditing(false); return; }
    setSaving(true);
    setNotice(null);
    const name = draft.name.trim();
    const payload = {
      display_name: name || null,
      avatar_url: draft.avatar_url,
      years_teaching: draft.years === "" ? null : Number(draft.years),
    };
    const extra = { age: draft.age === "" ? null : Number(draft.age), teaches_ages: draft.teaches, expertise: draft.expertise };
    const coverChanged = (draft.cover_url || null) !== (profile.cover_url || null);
    const withCover = coverChanged ? { cover_url: draft.cover_url } : {};
    const attempt = async (body) => {
      // update-then-insert-if-missing avoids the combined insert+update RLS check upsert needs
      const { data: updated, error: updateError } = await supabase.from("profiles").update(body).eq("id", user.id).select("id");
      if (updateError) return updateError;
      if (!updated || updated.length === 0) {
        const { error: insertError } = await supabase.from("profiles").insert({ id: user.id, ...body });
        return insertError;
      }
      return null;
    };
    let err = await attempt({ ...payload, ...extra, ...withCover });
    let extraSkipped = false;
    let coverSkipped = false;
    if (err) {
      err = await attempt({ ...payload, ...withCover });
      extraSkipped = !err;
      if (err && coverChanged) { err = await attempt(payload); extraSkipped = !err; coverSkipped = !err; }
    }
    setSaving(false);
    if (err) { setNotice({ kind: "error", text: err.message || "Couldn't save your profile." }); return; }
    localStorage.setItem("sentenco_teacher_name", name);
    setProfile((p) => ({
      ...p,
      display_name: name || null, avatar_url: draft.avatar_url, years_teaching: payload.years_teaching,
      ...(extraSkipped ? {} : { age: extra.age, teaches_ages: extra.teaches_ages, expertise: extra.expertise }),
      cover_url: coverSkipped ? p.cover_url : (draft.cover_url || null),
    }));
    setEditing(false);
    setNotice(extraSkipped || coverSkipped
      ? { kind: "error", text: `Saved, but ${extraSkipped ? "age, age groups and expertise" : "the cover photo"} need a database update first (sql/add_profile_chips.sql).` }
      : { kind: "ok", text: "Profile saved" });
    if (!extraSkipped && !coverSkipped) setTimeout(() => setNotice((n) => (n?.kind === "ok" ? null : n)), 2500);
  }

  const badge = teachingBadge(shown.years === "" ? null : shown.years);
  const sub = ageYearsLine(shown.age, shown.years);
  const schoolName = profile?.companies?.name || null;

  return (
    <div className="tp-shell">
      <style>{CSS}</style>
      <div className="tp-page">
        {loading ? (
          <p className="tp-status">Loading…</p>
        ) : notFound ? (
          <p className="tp-status">Couldn't find that teacher.</p>
        ) : !isSelf && (iBlocked || blockedMe) ? (
          <div className="tp-blocked">
            {iBlocked ? (
              <>
                <h2>You blocked {shown.name}</h2>
                <p>They cannot message you, follow you or connect with you, and you will not see their posts.</p>
                <button type="button" className="tp-nbtn tp-nbtn--coral" onClick={doUnblock}>Unblock</button>
              </>
            ) : (
              <>
                <h2>This profile is not available</h2>
                <p>You cannot view this teacher right now.</p>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="tp-card">
              <div className={`tp-cover${shown.cover_url ? " has-img" : ""}`}>
                {shown.cover_url && <img src={shown.cover_url} alt="" />}
                {canEdit && (
                  <button type="button" className="tp-cover-btn" onClick={() => coverInput.current?.click()}>
                    <CameraIcon />{shown.cover_url ? "Change cover" : "Add a cover photo"}
                  </button>
                )}
              </div>
              <div className="tp-head">
                <span className="tp-avatar">
                  {shown.avatar_url ? <img src={shown.avatar_url} alt="" /> : initialsOf(shown.name)}
                  {canEdit && (
                    <button type="button" className="tp-avatar-cam" onClick={() => avatarInput.current?.click()} aria-label="Change photo" title="Change photo">
                      <CameraIcon />
                    </button>
                  )}
                </span>
                <div className="tp-head-text">
                  {canEdit && draft ? (
                    <>
                      <label className="tp-ghost">
                        <input
                          className="tp-ghost-name"
                          value={draft.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="Your name"
                          maxLength={60}
                          aria-label="Name"
                        />
                        <PenIcon />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="tp-name-row">
                        <h2 className="tp-name">{shown.name}</h2>
                        {badge && <img className="tp-badge" src={badge.img} alt={badge.label} title={badge.label} />}
                      </div>
                      <p className="tp-country">{sub || (isSelf ? "Add your age and years teaching" : "")}</p>
                      <div className="tp-chips">
                        {profile.is_mentor && <span className="tp-chip tp-chip--mentor">Mentor</span>}
                        {AGE_GROUPS.filter(([k]) => shown.teaches.includes(k)).map(([k, label]) => <span key={k} className={`tp-chip tp-chip--${k}`}>{label}</span>)}
                        {EXPERTISE.filter((x) => shown.expertise.includes(x)).map((x) => <span key={x} className="tp-chip tp-chip--skill">{x}</span>)}
                        {schoolName && <span className="tp-chip tp-chip--school">{schoolName}</span>}
                      </div>
                    </>
                  )}
                </div>
                {user && (
                  <div className="tp-actions">
                    {!isSelf ? (
                      <div className="tp-net-actions">
                        {net?.available && (
                          <>
                            {net.conn === "none" && <button type="button" className="tp-nbtn tp-nbtn--coral" onClick={onConnect} disabled={netBusy}><NetIcon name="plus" />Connect</button>}
                            {net.conn === "pending_out" && <button type="button" className="tp-nbtn tp-nbtn--pend" onClick={onCancelRequest} disabled={netBusy} title="Click to cancel the request"><NetIcon name="clock" />Request sent</button>}
                            {net.conn === "connected" && <button type="button" className="tp-nbtn tp-nbtn--done" onClick={onDisconnect} disabled={netBusy} title="Click to disconnect"><NetIcon name="check" />Connected</button>}
                            {net.conn === "pending_in" && (
                              <>
                                <button type="button" className="tp-nbtn tp-nbtn--coral" onClick={onAccept} disabled={netBusy}>Accept</button>
                                <button type="button" className="tp-nbtn tp-nbtn--soft" onClick={onDecline} disabled={netBusy}>Decline</button>
                              </>
                            )}
                            {net.following
                              ? <button type="button" className="tp-nbtn tp-nbtn--soft" onClick={onFollow} disabled={netBusy} title="Click to unfollow"><NetIcon name="check" />Following</button>
                              : <button type="button" className="tp-nbtn tp-nbtn--line" onClick={onFollow} disabled={netBusy}><NetIcon name="eye" />Follow</button>}
                          </>
                        )}
                        <button type="button" className="tp-msg-btn" onClick={() => navigate(`/library/messages?to=${id}`)} aria-label="Message" title="Message"><ChatBubbleIcon /></button>
                        <div className="tp-more-wrap">
                          <button type="button" className="tp-msg-btn" onClick={() => setMoreOpen((o) => !o)} aria-label="More options" aria-expanded={moreOpen} title="More"><MoreIcon /></button>
                          {moreOpen && (
                            <div className="tp-more-menu" role="menu">
                              <button type="button" role="menuitem" onClick={() => { setMoreOpen(false); setReportTarget({ type: "profile", id, userId: id, name: shown.name }); }}>Report</button>
                              <button type="button" role="menuitem" className="is-danger" onClick={() => { setMoreOpen(false); setConfirmBlock(true); }}>Block</button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : editing ? (
                      <div className="tp-edit-actions">
                        <button type="button" className="tp-btn tp-btn--ghost" onClick={cancelEdit} disabled={saving}>Cancel</button>
                        <button type="button" className="tp-btn" onClick={save} disabled={saving || uploading}>{saving ? "Saving…" : "Save"}</button>
                      </div>
                    ) : (
                      <button type="button" className="tp-icon-btn" onClick={() => { setNotice(null); setEditing(true); }} aria-label="Edit profile" title="Edit profile"><PenIcon /></button>
                    )}
                  </div>
                )}
              </div>

              {canEdit && draft && (
                <div className="tp-cbody">
                  <div className="tp-steps">
                    <div>
                      <div className="tp-lbl">Age</div>
                      <div className="tp-step">
                        <button type="button" onClick={() => stepAge(-1)} aria-label="Younger">&minus;</button>
                        <output>{draft.age === "" ? "Not set" : `${draft.age} years old`}</output>
                        <button type="button" onClick={() => stepAge(1)} aria-label="Older">+</button>
                      </div>
                    </div>
                    <div>
                      <div className="tp-lbl">Years teaching</div>
                      <div className="tp-step">
                        <button type="button" onClick={() => stepYears(-1)} aria-label="Fewer years">&minus;</button>
                        <output>{draft.years === "" ? "Not set" : Number(draft.years) < 1 ? "Less than 1" : `${draft.years} ${Number(draft.years) === 1 ? "year" : "years"}`}</output>
                        <button type="button" onClick={() => stepYears(1)} aria-label="More years">+</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="tp-lbl">I teach</div>
                    <div className="tp-ticks">
                      {AGE_GROUPS.map(([k, label]) => (
                        <button type="button" key={k} className={`tp-tick${draft.teaches.includes(k) ? " is-on" : ""}`} aria-pressed={draft.teaches.includes(k)} onClick={() => toggleIn("teaches", k)}>
                          <span className="tp-tick-box">{draft.teaches.includes(k) ? "\u2713" : ""}</span>{label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="tp-lbl">My expertise</div>
                    <div className="tp-ticks">
                      {EXPERTISE.map((x) => (
                        <button type="button" key={x} className={`tp-tick${draft.expertise.includes(x) ? " is-on" : ""}`} aria-pressed={draft.expertise.includes(x)} onClick={() => toggleIn("expertise", x)}>
                          <span className="tp-tick-box">{draft.expertise.includes(x) ? "\u2713" : ""}</span>{x}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {profile.is_mentor && (
                <div className="tp-mentor-block">
                  <span className="tp-mentor-specialty">{profile.mentor_specialty}</span>
                  {profile.mentor_bio && <p className="tp-mentor-bio">{profile.mentor_bio}</p>}
                  <div className="tp-mentor-tags">
                    <span className="tp-tag">{profile.mentor_format === "1:1" ? "1:1" : profile.mentor_format === "group" ? "Group" : "1:1 & Group"}</span>
                    <span className="tp-tag">{profile.mentor_price_type === "free" ? "Free" : `₱${profile.mentor_price_amount}/session`}</span>
                  </div>
                </div>
              )}
              {netCounts && (
                <div className="tp-net">
                  {[["followers", "Followers", netCounts.followers], ["following", "Following", netCounts.following], ["connections", "Connections", netCounts.connections]].map(([k, label, n]) => (
                    isSelf
                      ? <button type="button" key={k} className="tp-net-stat is-link" onClick={() => navigate(`/library/network?tab=${k}`)}><b>{n}</b><small>{label}</small></button>
                      : <div key={k} className="tp-net-stat"><b>{n}</b><small>{label}</small></div>
                  ))}
                </div>
              )}
            </div>

            {user && (
              <div className="tp-hl" role="tablist" aria-label="Filter posts">
                {HIGHLIGHTS.map((h) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={filter === h.key}
                    key={h.key}
                    className={`tp-hl-btn tp-hl-btn--${h.key}${filter === h.key ? " is-on" : ""}`}
                    onClick={() => setFilter(h.key)}
                  >
                    <span className="tp-hl-circle">
                      <HlIcon name={h.key} />
                      <em>{counts ? counts[h.key] : "–"}</em>
                    </span>
                    <span className="tp-hl-label">{h.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="tp-bar">
              <h3 className="tp-h3">{HIGHLIGHTS.find((h) => h.key === filter)?.label === "All" ? "Posts" : HIGHLIGHTS.find((h) => h.key === filter)?.label}</h3>
              {counts && <span className="tp-bar-count">{counts[filter]} shown</span>}
            </div>
            {!user ? (
              <p className="tp-status">Sign in to see posts.</p>
            ) : (
              <CommunityFeed authorId={id} hideComposer typeFilter={filter} onStats={(st) => { setPostCount(st.postCount); setCounts(st.counts); }} />
            )}
          </>
        )}
      </div>

      <ReportDialog target={reportTarget} onClose={() => setReportTarget(null)} onBlocked={() => { refreshBlocked(); refreshNetwork(); }} />
      <ConfirmDialog
        open={confirmBlock}
        title={`Block ${shown.name}?`}
        message="They will not be able to message you, follow you or connect with you, and you will not see each other's posts. They are not told. You can unblock them any time from Your network."
        confirmLabel="Block"
        onConfirm={doBlock}
        onCancel={() => setConfirmBlock(false)}
      />
      <input ref={avatarInput} type="file" accept="image/*" hidden onChange={(e) => pickFile("avatar", e)} />
      <input ref={coverInput} type="file" accept="image/*" hidden onChange={(e) => pickFile("cover", e)} />

      {cropper && (
        <AvatarCropper
          modal
          src={cropper.src}
          aspect={cropper.kind === "cover" ? 4 : 1}
          shape={cropper.kind === "cover" ? "rect" : "circle"}
          outWidth={cropper.kind === "cover" ? 1600 : 512}
          onCancel={closeCropper}
          onDone={cropDone}
        />
      )}

      {(notice || uploading) && (
        <div className={`tp-toast${notice?.kind === "error" ? " is-error" : ""}`} role="status">
          {uploading ? "Uploading photo…" : notice.text}
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.tp-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --soft: #E7EAF2;
  --hair: rgba(43,42,74,0.09);
  min-height: 100%;
  background: #F1F3F8;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.tp-shell * { box-sizing: border-box; }

.tp-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.tp-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.tp-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.tp-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.tp-page { max-width: 1280px; margin: 0 auto; padding: 28px 32px 120px; }
.tp-status { text-align: center; color: var(--muted); padding: 40px 0; }

.tp-card {
  background: var(--card); border-radius: 28px; overflow: hidden; margin-bottom: 8px;
  box-shadow: 0 1px 2px rgba(27,42,74,0.05), 0 18px 40px -22px rgba(27,42,74,0.28); padding-bottom: 8px;
}
.tp-cover { position: relative; aspect-ratio: 4 / 1; min-height: 110px; background: radial-gradient(circle at 12% 30%, #FFC9B8 0, transparent 46%), radial-gradient(circle at 88% 15%, #C7D8F2 0, transparent 46%), linear-gradient(120deg, #FDECE5, #E9ECF3); overflow: hidden; }
.tp-cover:not(.has-img)::after { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(27,42,74,0.1) 1.2px, transparent 1.2px); background-size: 18px 18px; opacity: 0.55; pointer-events: none; }
.tp-cover::before { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 40%; background: linear-gradient(transparent, rgba(255,255,255,0.5)); pointer-events: none; z-index: 1; }
.tp-cover-btn { z-index: 2; }
.tp-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
.tp-cover-btn {
  position: absolute; top: 12px; right: 12px; display: flex; align-items: center; gap: 6px; border: none; cursor: pointer;
  background: rgba(255,255,255,0.92); color: var(--ink); border-radius: 999px; padding: 8px 14px;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; box-shadow: 0 2px 8px rgba(27,42,74,0.18);
}
.tp-cover-btn:hover { background: #fff; color: #E0502F; }
.tp-cover-btn svg { width: 16px; height: 16px; }

.tp-head { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; column-gap: 18px; align-items: start; padding: 0 28px; margin-top: -56px; position: relative; z-index: 2; }
.tp-avatar {
  position: relative; width: 112px; height: 112px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 36px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 6px var(--card), 0 14px 26px -10px rgba(27,42,74,0.5);
}
.tp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.tp-avatar-cam {
  position: absolute; inset: 0; border: none; border-radius: 50%; cursor: pointer; color: #fff;
  background: rgba(27,42,74,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.15s;
}
.tp-avatar:hover .tp-avatar-cam, .tp-avatar-cam:focus-visible { opacity: 1; }
.tp-avatar-cam svg { width: 24px; height: 24px; }
.tp-avatar { grid-column: 1; grid-row: 1 / span 3; }
.tp-head-text { display: contents; }
.tp-head-text > :first-child { grid-column: 2; grid-row: 1; margin-top: 66px; min-width: 0; }
.tp-head-text > .tp-country { grid-column: 2; grid-row: 2; }
.tp-head-text > .tp-chips { grid-column: 2 / -1; grid-row: 3; }
.tp-actions { grid-column: 3; grid-row: 1 / span 2; padding-top: 62px; }
.tp-edit-actions { display: flex; gap: 8px; }
.tp-btn--ghost { background: var(--soft); color: var(--ink); }
.tp-btn--ghost:hover { background: #dde1ec; }
.tp-btn:disabled { opacity: 0.55; cursor: default; }
.tp-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; background: var(--coral); color: #fff;
  border: none; border-radius: 999px; padding: 10px 22px; cursor: pointer;
}
.tp-btn:hover { background: #E0502F; }
.tp-net-actions { display: flex; align-items: center; gap: 8px; }
.tp-nbtn { display: inline-flex; align-items: center; gap: 7px; border: none; border-radius: 999px; padding: 10px 20px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: background 0.15s, box-shadow 0.15s; }
.tp-nbtn svg { width: 16px; height: 16px; }
.tp-nbtn:disabled { opacity: 0.6; cursor: default; }
.tp-nbtn--coral { background: var(--coral); color: #fff; box-shadow: 0 8px 18px -8px rgba(255,107,74,0.7); }
.tp-nbtn--coral:hover:not(:disabled) { background: #E0502F; }
.tp-nbtn--line { background: #fff; color: var(--ink); box-shadow: inset 0 0 0 1.5px var(--hair); }
.tp-nbtn--line:hover:not(:disabled) { box-shadow: inset 0 0 0 1.5px var(--coral); color: #E0502F; }
.tp-nbtn--pend { background: #FFF8F5; color: #E0502F; box-shadow: inset 0 0 0 1.5px #F5C7B8; }
.tp-nbtn--done { background: #E4F3EA; color: #1F6B45; }
.tp-nbtn--soft { background: #F1F3F8; color: var(--ink); }
.tp-nbtn--soft:hover:not(:disabled) { background: var(--soft); }
.tp-nbtn:focus-visible, .tp-msg-btn:focus-visible, .tp-net-stat:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.tp-msg-btn { width: 42px; height: 42px; border-radius: 50%; border: none; background: #F1F3F8; color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center; }
.tp-msg-btn:hover { background: var(--soft); }
.tp-msg-btn svg { width: 18px; height: 18px; }
.tp-more-wrap { position: relative; }
.tp-more-menu { position: absolute; top: calc(100% + 6px); right: 0; z-index: 30; min-width: 150px; background: #fff; border-radius: 16px; padding: 6px; box-shadow: 0 12px 34px rgba(43,42,74,0.2), 0 0 0 1px var(--hair); }
.tp-more-menu button { display: block; width: 100%; text-align: left; border: none; background: none; border-radius: 10px; padding: 10px 12px; font-family: 'Quicksand', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); cursor: pointer; }
.tp-more-menu button:hover { background: #F1F3F8; }
.tp-more-menu button.is-danger { color: #B3261E; }
.tp-more-menu button:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.tp-blocked { background: #fff; border-radius: 28px; padding: 44px 28px; text-align: center; box-shadow: 0 1px 2px rgba(27,42,74,0.05), 0 18px 40px -22px rgba(27,42,74,0.28); }
.tp-blocked h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; margin: 0 0 8px; }
.tp-blocked p { margin: 0 auto 18px; max-width: 46ch; font-size: 14.5px; font-weight: 600; line-height: 1.55; color: var(--muted); }
.tp-net { display: flex; border-top: 1px solid var(--hair); margin-top: 6px; }
.tp-net-stat { flex: 1; border: none; background: none; padding: 14px 8px 8px; text-align: center; font-family: 'Quicksand', sans-serif; color: var(--ink); }
.tp-net-stat + .tp-net-stat { border-left: 1px solid var(--hair); }
.tp-net-stat b { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; line-height: 1.1; }
.tp-net-stat small { font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.04em; text-transform: uppercase; }
.tp-net-stat.is-link { cursor: pointer; }
.tp-net-stat.is-link:hover b { color: #E0502F; }
.tp-icon-btn { width: 44px; height: 44px; border-radius: 50%; border: none; background: var(--coral); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 18px -6px rgba(255,107,74,0.7); transition: background 0.15s, transform 0.1s; }
.tp-icon-btn:hover { background: #E0502F; transform: scale(1.05); }
.tp-icon-btn svg { width: 20px; height: 20px; }

.tp-name-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.tp-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0; }
.tp-badge { height: 24px; width: auto; }
.tp-mentor-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 10px; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--navy); background: var(--navy-pale); padding: 3px 9px; border-radius: 999px;
}
.tp-country { font-size: 14px; font-weight: 600; color: var(--muted); margin: 4px 0 0; }

.tp-ghost { display: flex; max-width: 420px; align-items: center; gap: 8px; border: 1.5px dashed transparent; border-radius: 12px; padding: 3px 8px; margin-left: -8px; cursor: text; }
.tp-ghost:hover, .tp-ghost:focus-within { border-color: var(--coral); background: #fff; }
.tp-ghost input { border: none; outline: none; background: none; width: 100%; color: var(--ink); padding: 2px 0; min-width: 0; }
.tp-ghost-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; }
.tp-ghost--small input { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: var(--muted); }
.tp-ghost svg { width: 15px; height: 15px; color: var(--muted); opacity: 0.6; flex-shrink: 0; }

.tp-cbody { display: flex; flex-direction: column; gap: 16px; padding: 18px 28px 6px; }
.tp-steps { display: flex; gap: 24px; flex-wrap: wrap; }
.tp-ticks { display: flex; flex-wrap: wrap; gap: 8px; }
.tp-tick { display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid var(--hair); background: #fff; border-radius: 999px; padding: 7px 14px; font-family: 'Quicksand', sans-serif; font-size: 13px; font-weight: 700; color: var(--ink); cursor: pointer; }
.tp-tick:hover { border-color: var(--coral); }
.tp-tick.is-on { border-color: var(--coral); background: var(--coral-pale); }
.tp-tick-box { width: 18px; height: 18px; border-radius: 6px; border: 2px solid var(--hair); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: 800; }
.tp-tick.is-on .tp-tick-box { background: var(--coral); border-color: var(--coral); }
.tp-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.tp-chips:empty { display: none; }
.tp-chip { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 5px 12px; font-size: 12.5px; font-weight: 700; background: #F1F3F8; color: var(--ink); }
.tp-chip::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; opacity: 0.55; }
.tp-chip--mentor { background: var(--navy-pale); color: var(--navy); }
.tp-chip--kids { background: #FFF4D6; color: #7A5C0C; }
.tp-chip--teens { background: #E3F0FB; color: #1B4F7A; }
.tp-chip--adults { background: #EDE6F7; color: #5B3F82; }
.tp-chip--skill { background: #F1F3F8; color: var(--ink); }
.tp-chip--school { background: #E4F3EA; color: #1F6B45; }
.tp-lbl { font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 700; margin-bottom: 6px; }
.tp-step { display: inline-flex; align-items: center; gap: 4px; background: var(--soft); border-radius: 999px; padding: 4px; }
.tp-step button {
  width: 38px; height: 38px; border-radius: 50%; border: none; background: #fff; cursor: pointer; color: var(--ink);
  font-size: 20px; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 1px var(--hair);
}
.tp-step button:hover { color: #E0502F; }
.tp-step output { min-width: 108px; text-align: center; font-weight: 700; font-size: 15px; font-variant-numeric: tabular-nums; }
.tp-years-read { font-weight: 700; font-size: 15px; }
.tp-stats { display: flex; gap: 28px; }
.tp-stat { display: flex; flex-direction: column; }
.tp-stat strong { font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 600; }
.tp-stat span { font-size: 12px; color: var(--muted); font-weight: 700; }

.tp-mentor-block { margin: 6px 28px 14px; padding-top: 16px; border-top: 1px solid var(--hair); text-align: left; }
.tp-mentor-specialty { font-size: 11.5px; font-weight: 800; color: var(--coral); text-transform: uppercase; letter-spacing: 0.05em; }
.tp-mentor-bio { font-size: 13px; color: var(--ink); line-height: 1.55; margin: 8px 0 12px; }
.tp-mentor-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tp-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: var(--navy);
  background: var(--navy-pale); border-radius: 999px; padding: 3px 9px;
}
.tp-hl { display: flex; gap: 18px; margin-top: 0; padding: 10px 12px 2px; overflow-x: auto; scrollbar-width: none; }
.tp-hl::-webkit-scrollbar { display: none; }
.tp-hl > :first-child { margin-left: auto; }
.tp-hl > :last-child { margin-right: auto; }
.tp-hl-btn { --m: #E7EAF2; --k: #1B2A4A; border: none; background: none; text-align: center; flex-shrink: 0; cursor: pointer; font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 700; color: var(--muted); padding: 0; }
.tp-hl-circle {
  position: relative; width: 54px; height: 54px; border-radius: 50%; margin: 0 auto 6px; display: flex; align-items: center; justify-content: center;
  color: var(--k); background: var(--m); box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--hair); transition: box-shadow 0.15s, transform 0.15s;
}
.tp-hl-circle svg { width: 22px; height: 22px; }
.tp-hl-circle em {
  position: absolute; top: -4px; right: -6px; min-width: 21px; height: 21px; padding: 0 5px; border-radius: 999px; background: #fff; color: var(--ink);
  font-style: normal; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(27,42,74,0.18);
}
.tp-hl-btn:hover .tp-hl-circle { transform: translateY(-1px); }
.tp-hl-btn.is-on { color: var(--ink); }
.tp-hl-btn.is-on .tp-hl-circle { box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--coral); }
.tp-hl-btn:focus-visible { outline: 3px solid var(--navy); outline-offset: 4px; border-radius: 16px; }
.tp-hl-btn--tip { --m: #FFF4D6; --k: #7A5C0C; }
.tp-hl-btn--question { --m: #E3F0FB; --k: #1B4F7A; }
.tp-hl-btn--resource { --m: #FDECE5; --k: #C2411F; }
.tp-hl-btn--lesson { --m: #E4F3EA; --k: #1F6B45; }
.tp-bar { display: flex; align-items: center; justify-content: space-between; margin: 0 6px 8px; }
.tp-h3 { font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 600; color: var(--ink); margin: 0; }
.tp-bar-count { font-size: 13px; font-weight: 700; color: var(--muted); }
.tp-shell .cm-post { border-radius: 24px; padding: 18px 22px 12px; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 28px -20px rgba(27,42,74,0.3); }
.tp-shell .cm-post-lesson { background: #E4F3EA; box-shadow: none; border-radius: 18px; padding: 12px 14px; }
.tp-shell .cm-post-lesson-kicker { color: #1F6B45; opacity: 0.85; }
.tp-shell .cm-post-actions { padding-top: 8px; }
.tp-shell .cm-action-btn:hover { background: #F1F3F8; }

.tp-toast {
  position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); z-index: 50; background: var(--navy); color: #fff;
  border-radius: 999px; padding: 11px 20px; font-weight: 700; font-size: 13.5px; box-shadow: 0 16px 40px -12px rgba(27,42,74,0.55);
  max-width: calc(100% - 32px);
}
.tp-toast.is-error { background: #8E2B1F; }
@media (max-width: 640px) {
  .tp-head { display: flex; flex-direction: column; align-items: flex-start; gap: 0; }
  .tp-head-text { display: block; padding-top: 12px; min-width: 0; width: 100%; }
  .tp-head-text > :first-child { margin-top: 0; }
  .tp-actions { position: absolute; top: 70px; right: 18px; padding-top: 0; }
  .tp-nbtn { padding: 9px 14px; font-size: 13px; }
  .tp-hl { padding: 10px 18px 2px; gap: 14px; }
}
@media (max-width: 560px) {
  .tp-head { padding: 0 18px; }
  .tp-cbody { padding: 16px 18px 12px; }
}
`;
