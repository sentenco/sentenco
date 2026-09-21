import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { timeAgo } from "./slideDeckTypes";
import ConfirmDialog from "./ConfirmDialog";

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const MAX_FILE_MB = 20;

const CATEGORIES = [
  {
    key: "credential",
    label: "Credentials",
    accent: "navy",
    tag: "Private",
    hint: "Certificates, diplomas, TESOL/CELTA, teaching IDs. Only you and Sentenco staff can ever see these.",
  },
  {
    key: "material",
    label: "Lesson Materials",
    accent: "coral",
    tag: "Shareable",
    hint: "Worksheets, slides, handouts, anything you use in class. Share any file to Homeroom when you want to.",
  },
];

function formatSize(bytes) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileExt(name) {
  const m = /\.([a-z0-9]+)$/i.exec(name || "");
  return m ? m[1].toUpperCase() : "FILE";
}

function VaultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4 5.8v6.1c0 5 3.4 8.2 8 9.6 4.6-1.4 8-4.6 8-9.6V5.8L12 2.5Z" />
      <circle cx="12" cy="11" r="2.4" />
      <path d="M12 13.4V16" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8A2 2 0 0 1 21 9.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 4h12M6.5 4V2.5h3V4M3.5 4l.6 9a1 1 0 0 0 1 .9h5.8a1 1 0 0 0 1-.9l.6-9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 6 8 9.5 11.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 14V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 8.5 10 4l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function FileCabinet() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [error, setError] = useState(null);
  const [sharingId, setSharingId] = useState(null);
  const [sharedIds, setSharedIds] = useState(new Set());
  const [shareTarget, setShareTarget] = useState(null);
  const [shareCaption, setShareCaption] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [ownerNames, setOwnerNames] = useState({});

  useEffect(() => {
    if (!user) { setFiles([]); setLoading(false); return; }
    loadFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function loadFiles() {
    setLoading(true);
    const { data, error: loadError } = await supabase
      .from("teacher_files")
      .select("id, owner_id, category, file_path, file_name, file_size, created_at")
      .order("created_at", { ascending: false });
    if (loadError) {
      console.error("loadFiles failed:", loadError);
      setError(loadError.message);
    } else {
      setFiles(data || []);
      if (isAdmin && data?.length) {
        const ownerIds = [...new Set(data.map((f) => f.owner_id))];
        const { data: owners } = await supabase.from("profiles").select("id, display_name").in("id", ownerIds);
        const names = {};
        (owners || []).forEach((o) => { names[o.id] = o.display_name; });
        setOwnerNames(names);
      }
    }
    setLoading(false);
  }

  async function handleUpload(e, category) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`That file is too big — keep it under ${MAX_FILE_MB}MB.`);
      return;
    }
    setError(null);
    setUploading(category);
    const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("teacher-files").upload(path, file);
    if (uploadError) {
      setUploading(null);
      setError(uploadError.message || "Upload failed.");
      return;
    }
    const { data, error: insertError } = await supabase
      .from("teacher_files")
      .insert({
        owner_id: user.id,
        category,
        file_path: path,
        file_name: file.name,
        file_size: file.size,
      })
      .select()
      .single();
    setUploading(null);
    if (insertError) {
      setError(insertError.message);
      return;
    }
    setFiles((prev) => [data, ...prev]);
  }

  async function handleOpen(f) {
    const { data, error: signError } = await supabase.storage.from("teacher-files").createSignedUrl(f.file_path, 60);
    if (signError || !data?.signedUrl) {
      setError("Couldn't open that file. Try again.");
      return;
    }
    window.open(data.signedUrl, "_blank");
  }

  async function handleDownload(f) {
    const { data, error: signError } = await supabase.storage.from("teacher-files").createSignedUrl(f.file_path, 60, { download: f.file_name });
    if (signError || !data?.signedUrl) {
      setError("Couldn't download that file. Try again.");
      return;
    }
    const a = document.createElement("a");
    a.href = data.signedUrl;
    a.download = f.file_name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function handleDelete(f) {
    const { error: storageError } = await supabase.storage.from("teacher-files").remove([f.file_path]);
    if (storageError) { setError(storageError.message); return; }
    const { error: rowError } = await supabase.from("teacher_files").delete().eq("id", f.id);
    if (rowError) { setError(rowError.message); return; }
    setFiles((prev) => prev.filter((x) => x.id !== f.id));
  }

  function openShareComposer(f) {
    setShareTarget(f);
    setShareCaption(`Sharing a resource: ${f.file_name}`);
  }

  function closeShareComposer() {
    setShareTarget(null);
    setShareCaption("");
  }

  async function confirmShare() {
    const f = shareTarget;
    const caption = shareCaption.trim();
    if (!f || !caption) return;
    setError(null);
    setSharingId(f.id);
    try {
      const { data: signed, error: signError } = await supabase.storage.from("teacher-files").createSignedUrl(f.file_path, 60);
      if (signError || !signed?.signedUrl) throw new Error("Couldn't read that file.");
      const blob = await (await fetch(signed.signedUrl)).blob();

      const publicPath = `${user.id}/${crypto.randomUUID()}-${f.file_name}`;
      const { error: uploadError } = await supabase.storage.from("community-uploads").upload(publicPath, blob);
      if (uploadError) throw uploadError;
      const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(publicPath);

      const { error: postError } = await supabase.from("community_posts").insert({
        author_id: user.id,
        author_email: user.email,
        content: caption,
        post_type: "resource",
        file_url: pub.publicUrl,
        file_name: f.file_name,
        status: "approved",
      });
      if (postError) throw postError;
      setSharedIds((prev) => new Set(prev).add(f.id));
      closeShareComposer();
    } catch (err) {
      setError(err.message || "Couldn't share that file.");
    } finally {
      setSharingId(null);
    }
  }

  if (authLoading) return null;

  return (
    <div className="fc-shell">
      <style>{CSS}</style>
      <div className="fc-topbar">
        <button type="button" className="fc-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="fc-brand-logo" />entenco
        </button>
        <h1 className="fc-topbar-title">File Cabinet</h1>
      </div>

      <div className="fc-page">
        {!user ? (
          <p className="fc-signin">Sign in to use the File Cabinet.</p>
        ) : (
          <>
            <div className="fc-hero">
              <p className="fc-eyebrow">Your storage</p>
              <h2 className="fc-heading">Everything's kept just for you</h2>
              <p className="fc-lede">Credentials stay private to you and Sentenco staff. Lesson materials are yours to keep, or share with the rest of Homeroom whenever you want.</p>
            </div>

            {isAdmin && <p className="fc-admin-note">You're viewing every teacher's files as admin.</p>}
            {error && (
              <div className="fc-error">
                {error}
                <button type="button" className="fc-error-close" onClick={() => setError(null)} aria-label="Dismiss">&times;</button>
              </div>
            )}

            {CATEGORIES.map((cat) => {
              const catFiles = files.filter((f) => f.category === cat.key && (isAdmin || f.owner_id === user.id));
              return (
                <section className={`fc-section fc-section--${cat.accent}`} key={cat.key}>
                  <div className="fc-section-head">
                    <span className="fc-section-icon">{cat.key === "credential" ? <VaultIcon /> : <FolderIcon />}</span>
                    <div className="fc-section-head-text">
                      <div className="fc-section-title-row">
                        <h2 className="fc-section-title">{cat.label}</h2>
                        <span className="fc-section-tag">{cat.tag}</span>
                        {catFiles.length > 0 && <span className="fc-section-count">{catFiles.length}</span>}
                      </div>
                      <p className="fc-section-hint">{cat.hint}</p>
                    </div>
                    <label className="fc-upload-btn">
                      <UploadIcon />
                      {uploading === cat.key ? "Uploading…" : "Upload"}
                      <input type="file" hidden onChange={(e) => handleUpload(e, cat.key)} disabled={uploading === cat.key} />
                    </label>
                  </div>

                  {loading ? (
                    <p className="fc-empty">Loading…</p>
                  ) : catFiles.length === 0 ? (
                    <div className="fc-empty-state">
                      {cat.key === "credential" ? <VaultIcon /> : <FolderIcon />}
                      <p>Nothing here yet.</p>
                    </div>
                  ) : (
                    <div className="fc-file-list">
                      {catFiles.map((f) => (
                        <div className="fc-file-row" key={f.id}>
                          <span className="fc-file-ext">{fileExt(f.file_name)}</span>
                          <button type="button" className="fc-file-name" onClick={() => handleOpen(f)} title="Open">
                            {f.file_name}
                            {isAdmin && <span className="fc-file-owner"> · {ownerNames[f.owner_id] || "Unknown teacher"}</span>}
                          </button>
                          <span className="fc-file-meta">{formatSize(f.file_size)} · {timeAgo(f.created_at)}</span>
                          {cat.key === "material" && (
                            <button
                              type="button"
                              className="fc-file-share"
                              onClick={() => openShareComposer(f)}
                              disabled={sharingId === f.id || sharedIds.has(f.id)}
                            >
                              {sharedIds.has(f.id) ? "Shared ✓" : sharingId === f.id ? "Sharing…" : "Share to Community"}
                            </button>
                          )}
                          <button type="button" className="fc-file-icon-btn" onClick={() => handleDownload(f)} title="Download" aria-label="Download">
                            <DownloadIcon />
                          </button>
                          <button type="button" className="fc-file-icon-btn" onClick={() => setDeleteTarget(f)} title="Delete" aria-label="Delete">
                            <TrashIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </>
        )}
      </div>

      {shareTarget && (
        <div className="fc-share-overlay" onClick={closeShareComposer}>
          <div className="fc-share-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="fc-share-title">Share to Community</h3>
            <p className="fc-share-file">
              <span className="fc-file-ext">{fileExt(shareTarget.file_name)}</span>
              {shareTarget.file_name}
            </p>
            <textarea
              className="fc-share-input"
              value={shareCaption}
              onChange={(e) => setShareCaption(e.target.value)}
              placeholder="Say something about this resource…"
              rows={3}
              autoFocus
            />
            <div className="fc-share-actions">
              <button type="button" className="fc-share-cancel" onClick={closeShareComposer}>Cancel</button>
              <button
                type="button"
                className="fc-share-confirm"
                onClick={confirmShare}
                disabled={!shareCaption.trim() || sharingId === shareTarget.id}
              >
                {sharingId === shareTarget.id ? "Sharing…" : "Share"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this file?"
        message={deleteTarget ? `"${deleteTarget.file_name}" will be gone for good.` : ""}
        confirmLabel="Delete"
        onConfirm={() => { handleDelete(deleteTarget); setDeleteTarget(null); }}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.fc-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.fc-shell * { box-sizing: border-box; }

.fc-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.fc-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.fc-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.fc-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.fc-page { max-width: 720px; margin: 0 auto; padding: 40px 24px 80px; }
.fc-signin { text-align: center; color: var(--muted); padding: 60px 0; }

.fc-hero { text-align: center; max-width: 52ch; margin: 0 auto 32px; }
.fc-eyebrow {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--coral); margin: 0 0 8px;
}
.fc-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 25px; margin: 0 0 10px; text-wrap: balance; }
.fc-lede { font-size: 13.5px; color: var(--muted); line-height: 1.65; margin: 0; }

.fc-admin-note {
  font-size: 12px; color: var(--navy); background: var(--navy-pale);
  border-radius: 10px; padding: 8px 14px; margin: 0 0 18px; text-align: center;
}
.fc-error {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  background: var(--coral-pale); color: var(--ink); border-radius: 12px; padding: 12px 16px;
  font-size: 13.5px; margin: 0 0 18px;
}
.fc-error-close { background: none; border: none; color: var(--muted); font-size: 18px; cursor: pointer; line-height: 1; padding: 0; }

.fc-section {
  --accent: var(--coral); --accent-pale: var(--coral-pale);
  background: var(--card); border: 1px solid var(--hair); border-top: 4px solid var(--accent);
  border-radius: 20px; padding: 22px 22px 20px; margin: 0 0 20px;
  box-shadow: 0 10px 28px rgba(43,42,74,0.05);
}
.fc-section--navy { --accent: var(--navy); --accent-pale: var(--navy-pale); }

.fc-section-head { display: flex; align-items: flex-start; gap: 14px; margin: 0 0 16px; }
.fc-section-icon {
  flex-shrink: 0; width: 42px; height: 42px; border-radius: 12px;
  background: var(--accent-pale); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
}
.fc-section-icon svg { width: 20px; height: 20px; }
.fc-section-head-text { flex: 1; min-width: 0; }
.fc-section-title-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.fc-section-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; margin: 0; }
.fc-section-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--accent); background: var(--accent-pale);
  padding: 3px 8px; border-radius: 999px;
}
.fc-section-count { font-size: 11.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
.fc-section-hint { font-size: 12px; color: var(--muted); margin: 4px 0 0; max-width: 46ch; line-height: 1.5; }

.fc-upload-btn {
  display: flex; align-items: center; gap: 6px; flex-shrink: 0;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px;
  background: var(--accent); color: #fff; border-radius: 999px; padding: 9px 16px; cursor: pointer;
}
.fc-upload-btn:hover { filter: brightness(0.94); }
.fc-upload-btn svg { width: 14px; height: 14px; }

.fc-empty { font-size: 13px; color: var(--muted); }
.fc-empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 30px; border: 1.5px dashed var(--hair); border-radius: 14px; color: var(--muted);
}
.fc-empty-state svg { width: 24px; height: 24px; opacity: 0.45; }
.fc-empty-state p { margin: 0; font-size: 12.5px; }

.fc-file-list { display: flex; flex-direction: column; gap: 8px; }
.fc-file-row {
  display: flex; align-items: center; gap: 12px;
  background: #FBFAF7; border: 1px solid var(--hair); border-left: 3px solid var(--accent);
  border-radius: 4px 12px 12px 4px; padding: 10px 12px;
}
.fc-file-ext {
  flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px;
  letter-spacing: 0.03em; color: var(--muted); background: var(--card); border: 1px solid var(--hair);
  border-radius: 6px; padding: 4px 6px; min-width: 34px; text-align: center;
}
.fc-file-name {
  flex: 1; min-width: 0; text-align: left; background: none; border: none; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.fc-file-name:hover { color: var(--accent); }
.fc-file-owner { color: var(--muted); font-weight: 600; }
.fc-file-meta { flex-shrink: 0; font-size: 11px; color: var(--muted); white-space: nowrap; }
.fc-file-share {
  flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--accent); background: var(--accent-pale); border: none; border-radius: 999px;
  padding: 5px 10px; cursor: pointer;
}
.fc-file-share:disabled { opacity: 0.6; cursor: default; }
.fc-file-icon-btn {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; border: none; background: none;
  color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.fc-file-icon-btn:hover { background: var(--accent-pale); color: var(--accent); }
.fc-file-icon-btn svg { width: 13px; height: 13px; }

@media (max-width: 560px) {
  .fc-section-head { flex-wrap: wrap; }
  .fc-upload-btn { margin-left: 56px; }
}

.fc-share-overlay {
  position: fixed; inset: 0; background: rgba(43,42,74,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
}
.fc-share-modal {
  background: var(--card); border-radius: 22px; border-top: 4px solid var(--coral);
  padding: 26px 26px 22px; max-width: 420px; width: 100%;
  box-shadow: 0 24px 60px rgba(43,42,74,0.25);
}
.fc-share-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0 0 14px; }
.fc-share-file {
  display: flex; align-items: center; gap: 8px; margin: 0 0 14px;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--ink);
}
.fc-share-input {
  display: block; width: 100%; resize: vertical; min-height: 76px;
  border: 1px solid var(--hair); border-radius: 14px; outline: none; padding: 12px 14px;
  font: inherit; font-size: 13.5px; color: var(--ink); background: #FBFAF7; margin: 0 0 16px;
}
.fc-share-input:focus { border-color: var(--coral); }
.fc-share-input::placeholder { color: var(--muted); }
.fc-share-actions { display: flex; justify-content: flex-end; gap: 10px; }
.fc-share-cancel {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--muted);
  background: none; border: none; cursor: pointer; padding: 9px 8px;
}
.fc-share-cancel:hover { color: var(--ink); }
.fc-share-confirm {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px;
  background: var(--coral); color: #fff; border: none; border-radius: 999px;
  padding: 9px 22px; cursor: pointer;
}
.fc-share-confirm:disabled { opacity: 0.5; cursor: default; }
.fc-share-confirm:not(:disabled):hover { filter: brightness(0.94); }
`;
