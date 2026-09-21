import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";
import { GROUPS, SAMPLE_ITEMS, blankItems, levelStatus, normalizeItems, openLetterBoard } from "./letterBoardData";

// Letter Board hub (inside the Library nav chrome): the sample set, the
// teacher's saved sets, and the editor for writing a set of 20 items.

const OPTION_LETTERS = ["A", "B", "C"];

function cloneItems(items) {
  return items.map((it) => ({ ...it, options: it.options.slice() }));
}

function SetCard({ title, items, badge, onPlay, onEdit, onDelete, editLabel = "Edit" }) {
  const { counts } = levelStatus(items);
  return (
    <div className="lbh-card">
      <div className="lbh-card-top">
        <h3 className="lbh-card-title">{title}</h3>
        {badge && <span className="lbh-badge">{badge}</span>}
      </div>
      <div className="lbh-chips">
        {GROUPS.map((gr) => (
          <span key={gr.key} className={`lbh-chip ${gr.key}${counts[gr.key] === gr.to - gr.from ? " full" : ""}`}>
            {gr.label} {counts[gr.key]}/{gr.to - gr.from}
          </span>
        ))}
      </div>
      <div className="lbh-card-actions">
        <button type="button" className="lbh-btn primary" onClick={onPlay}>Play</button>
        {onEdit && <button type="button" className="lbh-btn" onClick={onEdit}>{editLabel}</button>}
        {onDelete && <button type="button" className="lbh-btn danger" onClick={onDelete}>Delete</button>}
      </div>
    </div>
  );
}

function ItemEditor({ index, item, onChange }) {
  const set = (patch) => onChange({ ...item, ...patch });
  const setOption = (k, value) => {
    const options = item.options.slice();
    options[k] = value;
    set({ options });
  };
  return (
    <div className="lbh-item">
      <div className="lbh-item-head">
        <span className="lbh-item-num">{index + 1}</span>
        <div className="lbh-seg" role="group" aria-label={`Item ${index + 1} type`}>
          <button type="button" className={item.kind === "choice" ? "on" : ""} onClick={() => set({ kind: "choice" })}>Choice</button>
          <button type="button" className={item.kind === "open" ? "on" : ""} onClick={() => set({ kind: "open" })}>Open answer</button>
        </div>
      </div>
      <textarea
        className="lbh-input"
        rows={2}
        placeholder={item.kind === "choice" ? "Question, for example: She ___ to school every day." : "Question the student answers out loud or in the chat"}
        value={item.q}
        onChange={(e) => set({ q: e.target.value })}
      />
      {item.kind === "choice" ? (
        <div className="lbh-opts">
          {item.options.map((o, k) => (
            <label key={k} className={`lbh-opt${item.correct === k ? " correct" : ""}`}>
              <input type="radio" name={`correct-${index}`} checked={item.correct === k} onChange={() => set({ correct: k })} aria-label={`Option ${OPTION_LETTERS[k]} is correct`} />
              <span className="lbh-opt-l">{OPTION_LETTERS[k]}</span>
              <input className="lbh-input" placeholder={`Option ${OPTION_LETTERS[k]}`} value={o} onChange={(e) => setOption(k, e.target.value)} />
            </label>
          ))}
          <p className="lbh-hint">Tick the correct option.</p>
        </div>
      ) : (
        <input
          className="lbh-input"
          placeholder="Sample answer (optional, only you see it)"
          value={item.sample}
          onChange={(e) => set({ sample: e.target.value })}
        />
      )}
    </div>
  );
}

export default function LetterBoardHub() {
  const { user } = useAuth();
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [editing, setEditing] = useState(null); // { id, title, items }
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  async function load() {
    if (!user) { setSets([]); return; }
    setLoading(true);
    setLoadError("");
    const { data, error } = await supabase
      .from("letter_board_sets")
      .select("id, title, items, updated_at")
      .eq("owner_id", user.id)
      .order("updated_at", { ascending: false });
    setLoading(false);
    if (error) {
      setLoadError("We couldn't load your sets right now. The sample set still works.");
      return;
    }
    setSets((data || []).map((s) => ({ ...s, items: normalizeItems(s.items) })));
  }

  useEffect(() => { load(); }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  async function save() {
    if (!editing) return;
    const title = editing.title.trim();
    if (!title) { setSaveError("Give your set a name first."); return; }
    setSaving(true);
    setSaveError("");
    const payload = { title, items: editing.items, updated_at: new Date().toISOString() };
    const { error } = editing.id
      ? await supabase.from("letter_board_sets").update(payload).eq("id", editing.id)
      : await supabase.from("letter_board_sets").insert({ ...payload, owner_id: user.id });
    setSaving(false);
    if (error) {
      setSaveError("We couldn't save this set. Check your connection and try again.");
      return;
    }
    setEditing(null);
    load();
  }

  async function confirmDelete() {
    const target = deleteTarget;
    setDeleteTarget(null);
    if (!target) return;
    await supabase.from("letter_board_sets").delete().eq("id", target.id);
    load();
  }

  const startNew = () => { setSaveError(""); setEditing({ id: null, title: "", items: blankItems() }); window.scrollTo?.(0, 0); };
  const startCopy = () => { setSaveError(""); setEditing({ id: null, title: "My copy of the sample", items: cloneItems(SAMPLE_ITEMS) }); };
  const startEdit = (s) => { setSaveError(""); setEditing({ id: s.id, title: s.title, items: cloneItems(s.items) }); };

  if (editing) {
    const status = levelStatus(editing.items);
    return (
      <div className="lbh-page">
        <style>{CSS}</style>
        <div className="lbh-wrap">
          <button type="button" className="lbh-back" onClick={() => setEditing(null)}>&larr; Back to your sets</button>
          <p className="lbh-eyebrow">Letter Board</p>
          <h1 className="lbh-h1">{editing.id ? "Edit set" : "New set"}</h1>
          <p className="lbh-lead">Write 20 items: 9 easy, 6 average and 5 difficult. Each item is a choice question with three options, or an open question you mark yourself. You can save a draft and finish later. A difficulty level unlocks when all of its items are filled in.</p>

          <label className="lbh-label" htmlFor="lbh-title">Set name</label>
          <input id="lbh-title" className="lbh-input lbh-title-input" placeholder="For example: Past simple, Unit 4 review" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />

          {GROUPS.map((gr) => (
            <section key={gr.key} className="lbh-group">
              <div className="lbh-group-head">
                <h2 className={`lbh-group-title ${gr.key}`}>{gr.label}</h2>
                <span className="lbh-group-count">{status.counts[gr.key]} of {gr.to - gr.from} ready</span>
              </div>
              {editing.items.slice(gr.from, gr.to).map((it, k) => {
                const i = gr.from + k;
                return (
                  <ItemEditor
                    key={i}
                    index={i}
                    item={it}
                    onChange={(next) => {
                      const items = editing.items.slice();
                      items[i] = next;
                      setEditing({ ...editing, items });
                    }}
                  />
                );
              })}
            </section>
          ))}

          <div className="lbh-savebar">
            {saveError && <span className="lbh-error">{saveError}</span>}
            <button type="button" className="lbh-btn" onClick={() => setEditing(null)}>Cancel</button>
            <button type="button" className="lbh-btn primary" disabled={saving} onClick={save}>{saving ? "Saving..." : "Save set"}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lbh-page">
      <style>{CSS}</style>
      <div className="lbh-wrap">
        <p className="lbh-eyebrow">One-to-one game</p>
        <h1 className="lbh-h1">Letter Board</h1>
        <p className="lbh-lead">Your student picks a letter, the tile flips, and every answer wins or loses coins. You choose the difficulty and the board fills with that many items. Answers to choice questions are checked for you, and you mark the open ones.</p>

        <div className="lbh-toolbar">
          <button type="button" className="lbh-btn primary big" onClick={() => openLetterBoard("sample")}>Play the sample</button>
          {user && <button type="button" className="lbh-btn big" onClick={startNew}>New set</button>}
        </div>

        <h2 className="lbh-h2">Sets</h2>
        {loadError && <p className="lbh-error">{loadError}</p>}
        <div className="lbh-grid">
          <SetCard title="Sample set" badge="Sample" items={SAMPLE_ITEMS} onPlay={() => openLetterBoard("sample")} onEdit={user ? startCopy : null} editLabel="Copy to edit" />
          {sets.map((s) => (
            <SetCard
              key={s.id}
              title={s.title}
              items={s.items}
              onPlay={() => openLetterBoard(s.id)}
              onEdit={() => startEdit(s)}
              onDelete={() => setDeleteTarget(s)}
            />
          ))}
        </div>
        {!user && <p className="lbh-hint">Log in to write and save your own sets.</p>}
        {user && loading && sets.length === 0 && <p className="lbh-hint">Loading your sets...</p>}
        {user && !loading && !loadError && sets.length === 0 && <p className="lbh-hint">You haven't made a set yet. Start with New set, or copy the sample and change it.</p>}
      </div>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this set?"
        message={deleteTarget ? `"${deleteTarget.title}" will be gone for good.` : ""}
        confirmLabel="Delete"
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
.lbh-page { min-height: 100%; background: #FBF4F1; font-family: 'Inter', sans-serif; color: #1B2A4A; padding: 34px 20px 80px; box-sizing: border-box; }
.lbh-page *, .lbh-page *::before, .lbh-page *::after { box-sizing: border-box; }
.lbh-wrap { max-width: 900px; margin: 0 auto; }
.lbh-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #F2593A; margin: 0; }
.lbh-h1 { font-family: 'Fraunces', Georgia, serif; font-size: 44px; font-weight: 600; margin: 4px 0 10px; line-height: 1.1; }
.lbh-h2 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 600; margin: 34px 0 12px; }
.lbh-lead { font-size: 16px; line-height: 1.6; color: #4A5878; max-width: 680px; margin: 0 0 22px; }
.lbh-toolbar { display: flex; gap: 10px; flex-wrap: wrap; }
.lbh-btn { font-family: inherit; font-size: 14px; font-weight: 700; border: 2px solid #EBD8CE; background: #fff; color: #1B2A4A; border-radius: 12px; padding: 9px 16px; cursor: pointer; }
.lbh-btn:hover:not(:disabled) { border-color: #1B2A4A; }
.lbh-btn.primary { background: #F2593A; border-color: #F2593A; border-bottom: 4px solid #B5391D; color: #fff; }
.lbh-btn.primary:hover:not(:disabled) { background: #E44C2D; border-color: #E44C2D; border-bottom-color: #B5391D; }
.lbh-btn.danger { color: #A32D2D; }
.lbh-btn.big { font-size: 16px; padding: 12px 22px; }
.lbh-btn:disabled { opacity: .6; cursor: not-allowed; }
.lbh-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 14px; }
.lbh-card { background: #fff; border-radius: 18px; padding: 18px; border-bottom: 5px solid #1B2A4A; display: flex; flex-direction: column; gap: 12px; }
.lbh-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.lbh-card-title { font-family: 'Fraunces', Georgia, serif; font-size: 21px; font-weight: 600; margin: 0; line-height: 1.2; }
.lbh-badge { font-size: 11px; font-weight: 700; background: #FFE2D8; color: #7A2410; border-radius: 999px; padding: 3px 10px; flex: none; }
.lbh-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.lbh-chip { font-size: 12px; font-weight: 600; border-radius: 999px; padding: 3px 10px; background: #F4ECE6; color: #7A5A4E; }
.lbh-chip.full.easy { background: #FFE2D8; color: #7A2410; }
.lbh-chip.full.avg { background: #F2593A; color: #fff; }
.lbh-chip.full.hard { background: #1B2A4A; color: #FBF4F1; }
.lbh-card-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.lbh-hint { font-size: 13px; color: #7A5A4E; margin: 12px 0 0; }
.lbh-error { font-size: 14px; color: #A32D2D; margin: 0 0 10px; }
.lbh-back { background: none; border: none; font: inherit; font-size: 14px; font-weight: 600; color: #7A5A4E; cursor: pointer; padding: 0; margin-bottom: 18px; }
.lbh-back:hover { color: #1B2A4A; }
.lbh-label { display: block; font-size: 13px; font-weight: 700; margin: 6px 0 6px; }
.lbh-input { width: 100%; font-family: inherit; font-size: 15px; color: #1B2A4A; background: #fff; border: 1.5px solid #E3D3C9; border-radius: 10px; padding: 9px 12px; resize: vertical; }
.lbh-input:focus { outline: none; border-color: #F2593A; box-shadow: 0 0 0 3px rgba(242,89,58,.18); }
.lbh-title-input { font-size: 18px; font-weight: 600; max-width: 520px; }
.lbh-group { margin-top: 30px; }
.lbh-group-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 12px; }
.lbh-group-title { font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 600; margin: 0; padding: 2px 14px; border-radius: 999px; }
.lbh-group-title.easy { background: #FFE2D8; color: #7A2410; }
.lbh-group-title.avg { background: #F2593A; color: #fff; }
.lbh-group-title.hard { background: #1B2A4A; color: #FBF4F1; }
.lbh-group-count { font-size: 13px; color: #7A5A4E; }
.lbh-item { background: #fff; border-radius: 16px; padding: 14px 16px 16px; margin-bottom: 10px; display: flex; flex-direction: column; gap: 10px; }
.lbh-item-head { display: flex; align-items: center; gap: 12px; }
.lbh-item-num { width: 30px; height: 30px; border-radius: 8px; background: #1B2A4A; color: #FBF4F1; font-family: 'Fraunces', Georgia, serif; font-size: 16px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
.lbh-seg { display: inline-flex; border: 1.5px solid #E3D3C9; border-radius: 10px; overflow: hidden; }
.lbh-seg button { font-family: inherit; font-size: 13px; font-weight: 600; background: #fff; color: #7A5A4E; border: none; padding: 6px 14px; cursor: pointer; }
.lbh-seg button.on { background: #1B2A4A; color: #FBF4F1; }
.lbh-opts { display: flex; flex-direction: column; gap: 8px; }
.lbh-opt { display: flex; align-items: center; gap: 10px; }
.lbh-opt input[type="radio"] { width: 18px; height: 18px; accent-color: #F2593A; flex: none; margin: 0; }
.lbh-opt-l { width: 24px; height: 24px; border-radius: 50%; background: #F4ECE6; color: #1B2A4A; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex: none; }
.lbh-opt.correct .lbh-opt-l { background: #3DAA4A; color: #fff; }
.lbh-savebar { position: sticky; bottom: 0; margin-top: 24px; display: flex; justify-content: flex-end; align-items: center; gap: 10px; background: #FBF4F1; border-top: 1px solid #EBD8CE; padding: 12px 0; }
@media (max-width: 640px) { .lbh-h1 { font-size: 34px; } }
`;
