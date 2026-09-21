import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { teachingBadge } from "./ProfileSettings.jsx";
import { timeAgo } from "./slideDeckTypes";
import communityBannerImg from "./assets/community/banner.jpg";
import ConfirmDialog from "./ConfirmDialog";

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const AVATAR_HUES = ["#FF6B4A", "#7C5CFC", "#16BFAE", "#E0A72E", "#FF8A4C"];

// "Day streak" = consecutive days with at least one post, counting back from
// today; if nobody has posted yet today, still counts back from yesterday
// so the streak doesn't zero out until the day is fully over.
function computeDayStreak(posts) {
  if (!posts.length) return 0;
  const days = new Set(posts.map((p) => new Date(p.created_at).toDateString()));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function avatarHue(email) {
  if (!email) return AVATAR_HUES[0];
  let hash = 0;
  for (let i = 0; i < email.length; i++) hash = (hash * 31 + email.charCodeAt(i)) >>> 0;
  return AVATAR_HUES[hash % AVATAR_HUES.length];
}

function displayName(name, email) {
  if (name && name.trim()) return name.trim();
  if (!email) return "Teacher";
  const raw = email.split("@")[0].replace(/[._-]+/g, " ").trim();
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(name, email) {
  const full = displayName(name, email);
  const parts = full.split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4.5h11" />
      <path d="M5.5 4.5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.5" />
      <path d="M6 7.5v4M10 7.5v4" />
      <path d="M3.5 4.5 4.1 13a1 1 0 0 0 1 .9h5.8a1 1 0 0 0 1-.9l0.6-8.5" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3.8A1.5 1.5 0 0 1 3.5 2.3h9A1.5 1.5 0 0 1 14 3.8v5.2a1.5 1.5 0 0 1-1.5 1.5H6.5l-2.8 2.4V10.5h-0.2A1.5 1.5 0 0 1 2 9V3.8Z" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17.2s-6.6-4.1-8.6-8.1C.3 6.4 1.7 3.4 4.6 2.7c1.8-.4 3.6.4 4.6 2 .9-1.6 2.8-2.4 4.6-2 2.9.7 4.3 3.7 3.2 6.4-2 4-8.6 8.1-8.6 8.1Z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 9.8c0-3.9 3.4-7 7.5-7s7.5 3.1 7.5 7-3.4 7-7.5 7c-.9 0-1.7-.1-2.5-.4L3.3 17l1-3.2c-1.1-1.1-1.8-2.5-1.8-4Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.3" cy="6.8" r="3" />
      <path d="M1.8 17c0-3.1 2.4-5.2 5.5-5.2s5.5 2.1 5.5 5.2" />
      <path d="M13 12.2c2.4.3 4.2 2.2 4.2 4.8" />
      <circle cx="14.2" cy="7.3" r="2.1" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.3a5.4 5.4 0 0 0-3 9.9c.6.4 1 1.2 1 1.9v.4h4v-.4c0-.7.4-1.5 1-1.9a5.4 5.4 0 0 0-3-9.9Z" />
      <path d="M8 17.7h4M8.7 15.2h2.6" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.2s3.3 3.5 3.3 6.8c0 1-.3 1.8-.8 2.5.9-.4 1.7-1.2 2-2.2.9 1.4 1.4 3 1.4 4.3a5.9 5.9 0 0 1-11.8 0c0-2.2 1-4.1 2.3-5.7-.1.6-.1 1.3.1 1.9.4-3.9 2-6.9 3.5-7.6Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.4 7.3a2.6 2.6 0 1 1 3.9 2.3c-.8.5-1.3 1-1.3 1.9v.3" />
      <circle cx="10" cy="14.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.3 11.7a3 3 0 0 0 4.2 0l2.2-2.2a3 3 0 0 0-4.2-4.2l-1 1" />
      <path d="M11.7 8.3a3 3 0 0 0-4.2 0L5.3 10.5a3 3 0 0 0 4.2 4.2l1-1" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.3" y="3.5" width="15.4" height="13" rx="2" />
      <circle cx="7" cy="8" r="1.3" />
      <path d="M3 14.5l4.3-4.3 3 3 2-2 4.7 4.7" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.3 2.5h6l3.4 3.4v11.1a1 1 0 0 1-1 1H5.3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
      <path d="M11.3 2.5v3.4h3.4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

const POST_TYPES = [
  { key: "tip", label: "Tip", Icon: BulbIcon },
  { key: "question", label: "Question", Icon: QuestionIcon },
  { key: "resource", label: "Resource", Icon: LinkIcon },
];

function postTypeMeta(key) {
  return POST_TYPES.find((t) => t.key === key) || null;
}

function Avatar({ name, email, size }) {
  return (
    <div className={`cm-avatar${size ? ` cm-avatar--${size}` : ""}`} style={{ background: avatarHue(email) }}>
      {initials(name, email)}
    </div>
  );
}

// Self-contained Community feed (banner, stats, composer, posts) -- shared by
// the dedicated /library/community page and the Today page, which now
// embeds this directly in place of the old greeting hero.
export default function CommunityFeed({ afterStats, focusPostId, onActivity } = {}) {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [myName] = useState(() => localStorage.getItem("sentenco_teacher_name") || "");

  const [profile, setProfile] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [scope, setScope] = useState("universal");

  const [authMode, setAuthMode] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [draft, setDraft] = useState("");
  const [postType, setPostType] = useState(null);
  const [posting, setPosting] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  function closeComposer() {
    setDraft("");
    setPostType(null);
    setUploadedImage(null);
    setUploadedFile(null);
    setUploadError(null);
  }

  const [expanded, setExpanded] = useState(new Set());
  const [commentsByPost, setCommentsByPost] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [commentDrafts, setCommentDrafts] = useState({});
  const [commentErrors, setCommentErrors] = useState({});

  const [likeCounts, setLikeCounts] = useState({});
  const [likedByMe, setLikedByMe] = useState(new Set());

  const realPosts = posts.filter((p) => p.author_id);
  const [totalTeachers, setTotalTeachers] = useState(null);
  const tipsShared = posts.filter((p) => p.post_type === "tip").length;
  const dayStreak = computeDayStreak(realPosts);

  // Real total signup count, independent of login state -- unlike posts,
  // likes, and comments below, this must be visible to logged-out
  // visitors too, so it doesn't gate on `user`. See get_teacher_count()
  // (sql/add_teacher_count_rpc.sql), a SECURITY DEFINER RPC that returns
  // just the count without exposing any profile row data.
  useEffect(() => {
    let cancelled = false;
    supabase.rpc("get_teacher_count").then(({ data, error }) => {
      if (!cancelled && !error) setTotalTeachers(data);
    });
    return () => { cancelled = true; };
  }, []);

  async function loadPosts() {
    setLoadingPosts(true);
    let query = supabase
      .from("community_posts")
      .select("id, author_id, author_email, author_name, content, post_type, prompt_date, company_id, author_years_teaching, author_is_mentor, image_url, file_url, file_name, created_at")
      .order("created_at", { ascending: false });
    query = scope === "company" && profile?.company_id
      ? query.eq("company_id", profile.company_id)
      : query.is("company_id", null);
    const { data, error } = await query;
    const rows = error ? [] : data || [];
    setPosts(rows);
    setLoadingPosts(false);
    return rows;
  }

  async function loadCommentCounts() {
    const { data } = await supabase.from("community_comments").select("post_id");
    const counts = {};
    (data || []).forEach((c) => { counts[c.post_id] = (counts[c.post_id] || 0) + 1; });
    setCommentCounts(counts);
  }

  async function loadLikes() {
    const { data } = await supabase.from("community_likes").select("post_id, user_id");
    const counts = {};
    const mine = new Set();
    (data || []).forEach((l) => {
      counts[l.post_id] = (counts[l.post_id] || 0) + 1;
      if (l.user_id === user?.id) mine.add(l.post_id);
    });
    setLikeCounts(counts);
    setLikedByMe(mine);
  }

  useEffect(() => {
    if (!user) { setPosts([]); setLoadingPosts(false); setProfile(null); setScope("universal"); return; }
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("company_id, years_teaching, is_mentor, companies(name)")
        .eq("id", user.id)
        .maybeSingle();
      setProfile(data || null);
    })();
    loadCommentCounts();
    loadLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user) return;
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, scope, profile]);

  useEffect(() => {
    if (!focusPostId || !posts.some((p) => p.id === focusPostId)) return;
    setExpanded((prev) => (prev.has(focusPostId) ? prev : new Set(prev).add(focusPostId)));
    if (!commentsByPost[focusPostId]) loadComments(focusPostId);
    const el = document.getElementById(`cm-post-${focusPostId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusPostId, posts]);

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    setUploadError(null);
    setUploadingImage(true);
    const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
    const { error } = await supabase.storage.from("community-uploads").upload(path, file);
    setUploadingImage(false);
    if (error) { setUploadError(error.message || "Image upload failed."); return; }
    const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(path);
    setUploadedImage({ url: pub.publicUrl });
  }

  async function handleFileUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    setUploadError(null);
    setUploadingFile(true);
    const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
    const { error } = await supabase.storage.from("community-uploads").upload(path, file);
    setUploadingFile(false);
    if (error) { setUploadError(error.message || "File upload failed."); return; }
    const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(path);
    setUploadedFile({ url: pub.publicUrl, name: file.name });
  }

  async function submitPost() {
    const content = draft.trim();
    if (!content || !user || posting) return;
    setPosting(true);
    const { data, error } = await supabase
      .from("community_posts")
      .insert({
        author_id: user.id,
        author_email: user.email,
        author_name: myName.trim() || null,
        content,
        post_type: postType,
        company_id: scope === "company" ? profile?.company_id || null : null,
        author_years_teaching: profile?.years_teaching ?? null,
        author_is_mentor: !!profile?.is_mentor,
        image_url: uploadedImage?.url || null,
        file_url: uploadedFile?.url || null,
        file_name: uploadedFile?.name || null,
        status: "approved",
      })
      .select()
      .single();
    setPosting(false);
    if (!error && data) {
      closeComposer();
      setPosts((prev) => [data, ...prev]);
      onActivity?.("post");
    }
  }

  async function deletePost(id) {
    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (!error) setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function toggleLike(postId) {
    if (!user) return;
    const alreadyLiked = likedByMe.has(postId);
    setLikedByMe((prev) => {
      const next = new Set(prev);
      alreadyLiked ? next.delete(postId) : next.add(postId);
      return next;
    });
    setLikeCounts((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + (alreadyLiked ? -1 : 1) }));
    if (alreadyLiked) {
      await supabase.from("community_likes").delete().eq("post_id", postId).eq("user_id", user.id);
    } else {
      await supabase.from("community_likes").insert({ post_id: postId, user_id: user.id });
      onActivity?.("like");
    }
  }

  async function loadComments(postId) {
    const { data, error } = await supabase
      .from("community_comments")
      .select("id, post_id, author_id, author_email, author_name, author_years_teaching, author_is_mentor, content, created_at")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });
    if (error) console.error("loadComments failed:", error);
    setCommentsByPost((prev) => ({ ...prev, [postId]: error ? [] : data || [] }));
    setCommentErrors((prev) => ({ ...prev, [postId]: error ? error.message : null }));
  }

  function toggleExpand(postId) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
        if (!commentsByPost[postId]) loadComments(postId);
      }
      return next;
    });
  }

  async function notifyOnComment(postId, newComment) {
    const post = posts.find((p) => p.id === postId);
    if (!post) return;
    const actorName = displayName(newComment.author_name, newComment.author_email);
    const recipients = new Map();
    if (post.author_id && post.author_id !== user.id) {
      recipients.set(post.author_id, "post_reply");
    }
    (commentsByPost[postId] || []).forEach((c) => {
      if (c.author_id && c.author_id !== user.id && !recipients.has(c.author_id)) {
        recipients.set(c.author_id, "comment_reply");
      }
    });
    if (!recipients.size) return;
    const rows = [...recipients.entries()].map(([recipient_id, type]) => ({
      recipient_id,
      actor_id: user.id,
      actor_name: actorName,
      type,
      post_id: postId,
      comment_id: newComment.id,
    }));
    const { error } = await supabase.from("notifications").insert(rows);
    if (error) console.error("notifyOnComment failed:", error);
  }

  async function submitComment(postId) {
    const content = (commentDrafts[postId] || "").trim();
    if (!content || !user) return;
    setCommentErrors((prev) => ({ ...prev, [postId]: null }));
    const { data, error } = await supabase
      .from("community_comments")
      .insert({
        post_id: postId,
        author_id: user.id,
        author_email: user.email,
        author_name: myName.trim() || null,
        author_years_teaching: profile?.years_teaching ?? null,
        author_is_mentor: !!profile?.is_mentor,
        content,
        status: "approved",
      })
      .select()
      .single();
    if (!error && data) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: [...(prev[postId] || []), data] }));
      setCommentDrafts((prev) => ({ ...prev, [postId]: "" }));
      setCommentCounts((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }));
      notifyOnComment(postId, data);
      onActivity?.("comment");
    } else if (error) {
      console.error("submitComment failed:", error);
      setCommentErrors((prev) => ({ ...prev, [postId]: error.message }));
    }
  }

  async function deleteComment(id, postId) {
    const { error } = await supabase.from("community_comments").delete().eq("id", id);
    if (!error) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: (prev[postId] || []).filter((c) => c.id !== id) }));
      setCommentCounts((prev) => ({ ...prev, [postId]: Math.max(0, (prev[postId] || 1) - 1) }));
    }
  }

  return (
    <div className="cmf-shell">
      <style>{CSS}</style>
      <div className="cm-banner-block">
        <img
          className="cm-banner-img"
          src={communityBannerImg}
          alt="Illustration of teachers around the world connecting over Sentenco"
        />
        <div className="cm-stats">
          <div className="cm-stat">
            <PeopleIcon />
            <span className="cm-stat-text"><strong>{totalTeachers ?? "—"}</strong> Teachers</span>
          </div>
          <div className="cm-stat">
            <BulbIcon />
            <span className="cm-stat-text"><strong>{tipsShared}</strong> Tips Shared</span>
          </div>
          <div className="cm-stat">
            <FlameIcon />
            <span className="cm-stat-text"><strong>{dayStreak}</strong> Day Streak</span>
          </div>
        </div>
      </div>

      {profile?.company_id && (
        <div className="cm-scope-switch">
          <button
            type="button"
            className={`cm-scope-pill${scope === "universal" ? " is-active" : ""}`}
            onClick={() => setScope("universal")}
          >
            Universal
          </button>
          <button
            type="button"
            className={`cm-scope-pill${scope === "company" ? " is-active" : ""}`}
            onClick={() => setScope("company")}
          >
            {profile.companies?.name || "My Company"}
          </button>
        </div>
      )}

      {afterStats}

      {authLoading ? null : !user ? (
        <div className="cm-signin-card">
          <p>Sign in to post and comment.</p>
          <button type="button" className="cm-btn" onClick={() => setAuthMode("login")}>Log in</button>
        </div>
      ) : (
        <div className="cm-composer">
          <div className="cm-composer-head">
            <Avatar name={myName} email={user.email} />
            <div className="cm-composer-head-text">
              <p className="cm-composer-greeting">What's on your mind{myName ? `, ${myName}` : ""}?</p>
              <div className="cm-type-picker">
                {POST_TYPES.map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    type="button"
                    className={`cm-type-pill${postType === key ? " is-active" : ""}`}
                    onClick={() => setPostType(postType === key ? null : key)}
                  >
                    <Icon />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <textarea
            className="cm-composer-input"
            placeholder="Share a tip, ask a question, or add a resource…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={3}
            maxLength={2000}
          />

          <div className="cm-composer-foot">
            {uploadedImage && (
              <div className="cm-attach-preview">
                <img src={uploadedImage.url} alt="" />
                <button type="button" className="cm-attach-remove" title="Remove image" onClick={() => setUploadedImage(null)}>
                  <CloseIcon />
                </button>
              </div>
            )}
            {uploadedFile && (
              <div className="cm-attach-file-chip">
                <FileIcon />
                <span>{uploadedFile.name}</span>
                <button type="button" className="cm-attach-remove" title="Remove file" onClick={() => setUploadedFile(null)}>
                  <CloseIcon />
                </button>
              </div>
            )}
            {uploadError && <p className="cm-upload-error">{uploadError}</p>}

            <div className="cm-composer-row">
              <div className="cm-composer-attach-btns">
                <label className="cm-attach-btn" title="Add an image">
                  <ImageIcon />
                  <input type="file" accept="image/*" hidden onChange={handleImageUpload} disabled={uploadingImage} />
                </label>
                {postType === "resource" && (
                  <label className="cm-attach-btn" title="Add a file">
                    <FileIcon />
                    <input type="file" hidden onChange={handleFileUpload} disabled={uploadingFile} />
                  </label>
                )}
                {(uploadingImage || uploadingFile) && <span className="cm-uploading-hint">Uploading…</span>}
              </div>
              <div className="cm-composer-actions">
                <button type="button" className="cm-composer-cancel" onClick={closeComposer}>Cancel</button>
                <button type="button" className="cm-btn" disabled={!draft.trim() || posting} onClick={submitPost}>
                  {posting ? "Posting…" : "Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="cm-feed">
        {loadingPosts ? (
          <p className="cm-empty">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="cm-empty">
            No posts yet{profile?.company_id ? ` in ${scope === "company" ? (profile.companies?.name || "your company") : "Universal"}` : ""}. Be the first to share something!
          </p>
        ) : (
          posts.map((p) => {
            const isOpen = expanded.has(p.id);
            const comments = commentsByPost[p.id] || [];
            const canManage = user && (p.author_id === user.id || isAdmin);
            const liked = likedByMe.has(p.id);
            const likeCount = likeCounts[p.id] || 0;
            const commentCount = commentCounts[p.id] || 0;
            const type = postTypeMeta(p.post_type);
            const badge = teachingBadge(p.author_years_teaching);
            return (
              <div className={`cm-post${p.id === focusPostId ? " is-focused" : ""}`} id={`cm-post-${p.id}`} key={p.id}>
                <div className="cm-post-head">
                  <Avatar name={p.author_name} email={p.author_email} size="sm" />
                  <div className="cm-post-headline">
                    {p.author_id ? (
                      <button type="button" className="cm-post-author cm-post-author--link" onClick={() => navigate(`/library/teacher/${p.author_id}`)}>
                        {displayName(p.author_name, p.author_email)}
                      </button>
                    ) : (
                      <span className="cm-post-author">{displayName(p.author_name, p.author_email)}</span>
                    )}
                    {badge && (
                      <img className="cm-badge-icon" src={badge.img} alt={badge.label} title={badge.label} />
                    )}
                    {p.author_is_mentor && <span className="cm-mentor-tag">Mentor</span>}
                    <span className="cm-post-dot">·</span>
                    <span className="cm-post-time">{timeAgo(p.created_at)}</span>
                    {type && (
                      <span className={`cm-post-tag cm-post-tag--${type.key}`}>
                        <type.Icon />
                        {type.label}
                      </span>
                    )}
                  </div>
                  {user && p.author_id && p.author_id !== user.id && (
                    <button type="button" className="cm-icon-btn" title="Message" onClick={() => navigate(`/library/messages?to=${p.author_id}`)}>
                      <MessageIcon />
                    </button>
                  )}
                  {canManage && (
                    <button type="button" className="cm-icon-btn" title="Delete post" onClick={() => setDeleteTarget({ type: "post", id: p.id })}>
                      <TrashIcon />
                    </button>
                  )}
                </div>
                <p className="cm-post-text">{p.content}</p>
                {p.image_url && (
                  <a href={p.image_url} target="_blank" rel="noreferrer" className="cm-post-image-link">
                    <img src={p.image_url} alt="" className="cm-post-image" />
                  </a>
                )}
                {p.file_url && (
                  <a href={p.file_url} target="_blank" rel="noreferrer" className="cm-post-file">
                    <FileIcon />
                    <span>{p.file_name || "Attached file"}</span>
                  </a>
                )}
                <div className="cm-post-actions">
                  <button type="button" className={`cm-action-btn${liked ? " is-liked" : ""}`} onClick={() => toggleLike(p.id)}>
                    <HeartIcon filled={liked} />
                    {likeCount > 0 && <span>{likeCount}</span>}
                  </button>
                  <button type="button" className="cm-action-btn cm-action-btn--comment" onClick={() => toggleExpand(p.id)}>
                    <CommentIcon />
                    {commentCount > 0 && <span>{commentCount}</span>}
                  </button>
                </div>

                {isOpen && (
                  <div className="cm-comments">
                    {comments.map((c) => {
                      const commentBadge = teachingBadge(c.author_years_teaching);
                      return (
                      <div className="cm-comment" key={c.id}>
                        <Avatar name={c.author_name} email={c.author_email} size="xs" />
                        <div className="cm-comment-body">
                          <div className="cm-comment-meta">
                            {c.author_id ? (
                              <button type="button" className="cm-comment-author cm-comment-author--link" onClick={() => navigate(`/library/teacher/${c.author_id}`)}>
                                {displayName(c.author_name, c.author_email)}
                              </button>
                            ) : (
                              <span className="cm-comment-author">{displayName(c.author_name, c.author_email)}</span>
                            )}
                            {commentBadge && (
                              <img className="cm-badge-icon cm-badge-icon--xs" src={commentBadge.img} alt={commentBadge.label} title={commentBadge.label} />
                            )}
                            {c.author_is_mentor && <span className="cm-mentor-tag cm-mentor-tag--xs">Mentor</span>}
                            <span className="cm-comment-time">{timeAgo(c.created_at)}</span>
                          </div>
                          <p className="cm-comment-text">{c.content}</p>
                        </div>
                        {user && (c.author_id === user.id || isAdmin) && (
                          <button type="button" className="cm-icon-btn cm-icon-btn--xs" title="Delete comment" onClick={() => setDeleteTarget({ type: "comment", id: c.id, postId: p.id })}>
                            <TrashIcon />
                          </button>
                        )}
                      </div>
                      );
                    })}
                    {commentErrors[p.id] && <p className="cm-upload-error">{commentErrors[p.id]}</p>}
                    {user && (
                      <div className="cm-comment-composer">
                        <input
                          type="text"
                          className="cm-comment-input"
                          placeholder="Write a comment…"
                          value={commentDrafts[p.id] || ""}
                          onChange={(e) => setCommentDrafts((prev) => ({ ...prev, [p.id]: e.target.value }))}
                          onKeyDown={(e) => { if (e.key === "Enter") submitComment(p.id); }}
                          maxLength={600}
                        />
                        <button
                          type="button"
                          className="cm-btn cm-btn--sm"
                          disabled={!(commentDrafts[p.id] || "").trim()}
                          onClick={() => submitComment(p.id)}
                        >
                          Reply
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}

      <ConfirmDialog
        open={!!deleteTarget}
        title={deleteTarget?.type === "post" ? "Delete this post?" : "Delete this comment?"}
        message="This can't be undone."
        confirmLabel="Delete"
        onConfirm={() => {
          if (deleteTarget.type === "post") deletePost(deleteTarget.id);
          else deleteComment(deleteTarget.id, deleteTarget.postId);
          setDeleteTarget(null);
        }}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.cmf-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-dark: #12203B;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  width: 100%;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cmf-shell * { box-sizing: border-box; }

.cm-banner-block {
  border-radius: 16px; overflow: hidden; border: 1px solid var(--hair);
  box-shadow: 0 4px 14px rgba(43,42,74,0.04);
}
.cm-banner-img { width: 100%; aspect-ratio: 3 / 1; object-fit: cover; display: block; }

.cm-stats { display: flex; background: var(--card); border-top: 1px solid var(--hair); }
.cm-stat { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 9px 4px; min-width: 0; }
.cm-stat + .cm-stat { border-left: 1px solid var(--hair); }
.cm-stat svg { width: 14px; height: 14px; color: var(--coral); flex-shrink: 0; }
.cm-stat-text { font-family: 'Quicksand', sans-serif; font-size: 11px; color: var(--muted); line-height: 1.25; }
.cm-stat-text strong { font-family: 'Fredoka', sans-serif; font-weight: 700; color: var(--ink); font-variant-numeric: tabular-nums; margin-right: 2px; }

.cm-scope-switch {
  display: flex; gap: 6px; background: var(--card); border: 1px solid var(--hair);
  border-radius: 999px; padding: 4px; width: fit-content;
}
.cm-scope-pill {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
  background: none; border: none; border-radius: 999px; padding: 7px 16px; cursor: pointer;
}
.cm-scope-pill:hover { color: var(--ink); }
.cm-scope-pill.is-active { background: var(--ink); color: #fff; }

.cm-signin-card {
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px;
  padding: 20px; text-align: center; display: flex; flex-direction: column; gap: 12px; align-items: center;
  font-size: 14px; color: var(--muted);
}

.cm-composer {
  position: relative;
  width: 100%; background: var(--card); border: 1px solid var(--hair); border-radius: 20px;
  overflow: hidden; box-shadow: 0 8px 22px rgba(43,42,74,0.06);
}
.cm-composer::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: linear-gradient(90deg, var(--coral) 0%, var(--navy) 100%);
}
.cm-composer-head {
  display: flex; align-items: center; gap: 12px;
  background: linear-gradient(155deg, var(--coral-pale) 0%, var(--navy-pale) 100%);
  padding: 16px 18px;
}
.cm-composer-head-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
.cm-composer-greeting {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; color: var(--ink); margin: 0;
}
.cm-composer-input {
  display: block; width: 100%; resize: vertical; min-height: 76px;
  border: none; outline: none; padding: 16px 18px;
  font: inherit; font-size: 14.5px; color: var(--ink); background: transparent;
}
.cm-composer-input::placeholder { color: var(--muted); }
.cm-composer-foot { padding: 0 18px 16px; display: flex; flex-direction: column; gap: 10px; }
.cm-composer-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; border-top: 1px solid var(--hair); padding-top: 12px; }
.cm-composer-actions { display: flex; align-items: center; gap: 10px; }
.cm-composer-cancel {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--muted);
  background: none; border: none; cursor: pointer; padding: 6px 4px;
}
.cm-composer-cancel:hover { color: var(--ink); }

.cm-composer-attach-btns { display: flex; align-items: center; gap: 6px; }
.cm-attach-btn {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 10px; cursor: pointer;
  color: var(--muted); border: 1px solid var(--hair);
}
.cm-attach-btn:hover { color: var(--navy); border-color: var(--navy); }
.cm-attach-btn svg { width: 16px; height: 16px; }
.cm-uploading-hint { font-family: 'Quicksand', sans-serif; font-size: 11px; color: var(--muted); }

.cm-attach-preview { position: relative; width: fit-content; }
.cm-attach-preview img { max-width: 160px; max-height: 120px; border-radius: 10px; display: block; object-fit: cover; }
.cm-attach-file-chip {
  position: relative; display: flex; align-items: center; gap: 8px; width: fit-content;
  background: #FDFCFA; border: 1px solid var(--hair); border-radius: 10px; padding: 8px 30px 8px 10px;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--ink);
}
.cm-attach-file-chip svg { width: 15px; height: 15px; color: var(--muted); flex-shrink: 0; }
.cm-attach-remove {
  position: absolute; top: -6px; right: -6px; width: 20px; height: 20px; border-radius: 50%;
  background: var(--ink); color: #fff; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.cm-attach-remove svg { width: 10px; height: 10px; }
.cm-upload-error { font-family: 'Quicksand', sans-serif; font-size: 11.5px; color: #C0392B; margin: 0; }

.cm-type-picker { display: flex; flex-wrap: wrap; gap: 8px; }
.cm-type-pill {
  display: flex; align-items: center; gap: 6px;
  background: #FDFCFA; border: 1px solid var(--hair); border-radius: 999px;
  padding: 6px 12px 6px 10px; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: var(--muted);
}
.cm-type-pill svg { width: 14px; height: 14px; }
.cm-type-pill:hover { border-color: var(--coral); color: var(--coral); }
.cm-type-pill.is-active { background: var(--coral); border-color: var(--coral); color: #fff; }

.cm-avatar {
  flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%;
  color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.cm-avatar--sm { width: 34px; height: 34px; font-size: 12.5px; }
.cm-avatar--xs { width: 26px; height: 26px; font-size: 10.5px; }

.cm-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  color: #fff; background: var(--coral); border: none; border-radius: 999px;
  padding: 9px 20px; cursor: pointer; white-space: nowrap;
}
.cm-btn:disabled { opacity: 0.45; cursor: default; }
.cm-btn--sm { padding: 6px 14px; font-size: 12.5px; }
.cm-composer-actions .cm-btn { background: var(--navy); }
.cm-composer-actions .cm-btn:not(:disabled):hover { background: var(--navy-dark); }

.cm-feed { display: flex; flex-direction: column; gap: 12px; }
.cm-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 20px 0; }

.cm-post {
  background: var(--card); border: 1px solid var(--hair); border-left: 3px solid var(--coral);
  border-radius: 4px 16px 16px 4px; padding: 16px;
  box-shadow: 0 4px 14px rgba(27,42,74,0.05);
  transition: box-shadow 0.4s, border-color 0.4s;
}
.cm-post.is-focused { border-color: var(--navy); box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.cm-post-head { display: flex; align-items: center; gap: 10px; }
.cm-post-headline { display: flex; align-items: center; flex-wrap: wrap; row-gap: 4px; gap: 6px; min-width: 0; }
.cm-post-author { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cm-post-author--link { background: none; border: none; padding: 0; cursor: pointer; }
.cm-post-author--link:hover { color: var(--coral); text-decoration: underline; }
.cm-post-dot { color: var(--muted); font-size: 12px; }
.cm-post-time { font-size: 12px; color: var(--muted); white-space: nowrap; }
.cm-post-text { font-size: 14.5px; line-height: 1.6; color: var(--ink); margin: 10px 0 10px; white-space: pre-wrap; }

.cm-post-image-link { display: block; margin: 0 0 10px; }
.cm-post-image { width: 100%; max-height: 320px; object-fit: cover; border-radius: 12px; display: block; }
.cm-post-file {
  display: flex; align-items: center; gap: 8px; width: fit-content;
  background: var(--coral-pale); border-radius: 10px; padding: 8px 12px; margin: 0 0 10px;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 700; color: var(--coral); text-decoration: none;
}
.cm-post-file svg { width: 15px; height: 15px; }

.cm-post-tag {
  display: flex; align-items: center; gap: 4px;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px;
  border-radius: 999px; padding: 2px 9px 2px 7px; margin-left: 2px;
}
.cm-post-tag svg { width: 11px; height: 11px; }
.cm-post-tag--tip { background: var(--coral-pale); color: var(--coral); }
.cm-post-tag--question { background: var(--navy-pale); color: var(--navy); }
.cm-post-tag--resource { background: var(--coral-pale); color: var(--coral); }

.cm-badge-icon { height: 22px; width: auto; display: block; }
.cm-badge-icon--xs { height: 16px; }
.cm-mentor-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px; letter-spacing: 0.04em;
  text-transform: uppercase; color: var(--navy); background: var(--navy-pale);
  padding: 2px 7px; border-radius: 999px;
}
.cm-mentor-tag--xs { font-size: 8.5px; padding: 1px 6px; }

.cm-post-actions { display: flex; align-items: center; gap: 4px; }
.cm-action-btn {
  display: flex; align-items: center; gap: 6px;
  background: none; border: none; padding: 6px 10px; margin-left: -10px; border-radius: 10px; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
}
.cm-action-btn svg { width: 17px; height: 17px; }
.cm-action-btn:hover { background: var(--coral-pale); color: var(--coral); }
.cm-action-btn.is-liked { color: var(--coral); }
.cm-action-btn--comment:hover { background: var(--navy-pale); color: var(--navy); }

.cm-icon-btn {
  margin-left: auto; flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
  border: none; background: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.cm-icon-btn:hover { background: var(--coral-pale); color: var(--coral); }
.cm-icon-btn svg { width: 14px; height: 14px; }
.cm-icon-btn--xs { width: 22px; height: 22px; }
.cm-icon-btn--xs svg { width: 12px; height: 12px; }

.cm-comments { margin-top: 6px; padding-top: 12px; border-top: 1px solid var(--hair); display: flex; flex-direction: column; gap: 10px; }
.cm-comment { display: flex; align-items: flex-start; gap: 8px; }
.cm-comment-body { flex: 1; }
.cm-comment-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
.cm-comment-author { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px; color: var(--ink); }
.cm-comment-author--link { background: none; border: none; padding: 0; cursor: pointer; }
.cm-comment-author--link:hover { color: var(--coral); text-decoration: underline; }
.cm-comment-time { font-size: 10.5px; color: var(--muted); }
.cm-comment-text { font-size: 13px; line-height: 1.45; color: var(--ink); margin: 0; }
.cm-comment-composer { display: flex; gap: 8px; align-items: center; margin-top: 4px; }
.cm-comment-input {
  flex: 1; border: 1px solid var(--hair); border-radius: 999px; padding: 8px 14px;
  font: inherit; font-size: 12.5px; color: var(--ink); background: #FDFCFA;
}
.cm-comment-input:focus { outline: none; border-color: var(--coral); }
`;
