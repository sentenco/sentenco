import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";
import { GROUPS, SAMPLE_ITEMS, SAMPLE_STORY, SAMPLE_STORY_ITEMS, TASKS, blankItems, blankStory, fileToSmallImage, hasStory, levelStatus, normalizeItems, normalizeStory, openLetterBoard } from "./letterBoardData";

// Letter Board hub (inside the Library nav chrome): the sample set, the
// teacher's saved sets, and the editor for writing a set of 20 items.

const OPTION_LETTERS = ["A", "B", "C"];

function cloneItems(items) {
  return items.map((it) => ({ ...it, options: it.options.slice() }));
}

// Image picker used for story and picture tasks: shrinks the picture and stores it inside the set.
function ImageField({ value, onChange, label }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  async function pick(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setErr("");
    try { onChange(await fileToSmallImage(file)); } catch (x) { setErr("We couldn't read that picture. Try a JPG or PNG."); }
    setBusy(false);
  }
  return (
    <div className="lbh-img">
      {value ? <img src={value} alt="" /> : <div className="lbh-img-empty">No picture yet</div>}
      <div className="lbh-img-actions">
        <label className="lbh-btn lbh-file">
          {busy ? "Adding..." : value ? `Change ${label}` : `Add ${label}`}
          <input type="file" accept="image/*" onChange={pick} hidden />
        </label>
        {value && <button type="button" className="lbh-btn danger" onClick={() => onChange("")}>Remove</button>}
        {err && <span className="lbh-error">{err}</span>}
      </div>
    </div>
  );
}

function SetRow({ n, title, items, badge, hasStoryFlag, onPlay, onEdit, onDelete, editLabel = "Edit" }) {
  const { counts } = levelStatus(items);
  return (
    <div className="lbh-row">
      <span className="lbh-row-n" aria-hidden="true">{n}</span>
      <div className="lbh-row-main">
        <div className="lbh-row-top">
          <h3 className="lbh-row-title">{title}</h3>
          {badge && <span className="lbh-badge">{badge}</span>}
          {hasStoryFlag && <span className="lbh-badge lbh-badge-story">Story</span>}
        </div>
        <div className="lbh-chips">
          {GROUPS.map((gr) => (
            <span key={gr.key} className={`lbh-chip ${gr.key}${counts[gr.key] === gr.to - gr.from ? " full" : ""}`}>
              {gr.label} {counts[gr.key]}/{gr.to - gr.from}
            </span>
          ))}
        </div>
      </div>
      <div className="lbh-row-actions">
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
          <button type="button" className={item.kind === "choice" ? "on" : ""} disabled={item.task === "retell"} onClick={() => set({ kind: "choice" })}>Choice</button>
          <button type="button" className={item.kind === "open" ? "on" : ""} onClick={() => set({ kind: "open" })}>Open answer</button>
        </div>
        <select className="lbh-task" value={item.task || ""} aria-label={`Item ${index + 1} task`} onChange={(e) => set(e.target.value === "retell" ? { task: "retell", kind: "open" } : { task: e.target.value })}>
          {TASKS.map((t) => <option key={t.key} value={t.key}>{t.key ? `Task: ${t.label}` : "Task: General"}</option>)}
        </select>
      </div>
      {item.task === "picture" && <ImageField value={item.image} onChange={(image) => set({ image })} label="picture" />}
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
      .select("*")
      .eq("owner_id", user.id)
      .order("updated_at", { ascending: false });
    setLoading(false);
    if (error) {
      setLoadError("We couldn't load your sets right now. The sample set still works.");
      return;
    }
    setSets((data || []).map((s) => ({ ...s, items: normalizeItems(s.items), story: normalizeStory(s.story) })));
  }

  useEffect(() => { load(); }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  async function save() {
    if (!editing) return;
    const title = editing.title.trim();
    if (!title) { setSaveError("Give your set a name first."); return; }
    setSaving(true);
    setSaveError("");
    const payload = { title, items: editing.items, updated_at: new Date().toISOString() };
    // Only touch the story column when this set has (or had) a story, so plain sets save even before the SQL is run.
    if (hasStory(editing.story)) payload.story = { title: editing.story.title.trim(), text: editing.story.text.trim(), image: editing.story.image || "" };
    else if (editing.hadStory) payload.story = null;
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

  const startNew = () => { setSaveError(""); setEditing({ id: null, title: "", items: blankItems(), story: blankStory(), hadStory: false }); window.scrollTo?.(0, 0); };
  const startCopy = () => { setSaveError(""); setEditing({ id: null, title: "My copy of the sample", items: cloneItems(SAMPLE_ITEMS), story: blankStory(), hadStory: false }); };
  const startCopyStory = () => { setSaveError(""); setEditing({ id: null, title: "My copy of The Lost Cat", items: cloneItems(SAMPLE_STORY_ITEMS), story: { ...SAMPLE_STORY }, hadStory: false }); window.scrollTo?.(0, 0); };
  const startEdit = (s) => { setSaveError(""); setEditing({ id: s.id, title: s.title, items: cloneItems(s.items), story: s.story || blankStory(), hadStory: hasStory(s.story) }); };

  if (editing) {
    const status = levelStatus(editing.items);
    return (
      <div className="lbh-page">
        <style>{CSS}</style>
        <div className="lbh-wrap">
          <button type="button" className="lbh-back" onClick={() => setEditing(null)}>&larr; Back to your sets</button>
          <p className="lbh-eyebrow">Letter Board</p>
          <h1 className="lbh-h1">{editing.id ? "Edit set" : "New set"}</h1>
          <p className="lbh-lead">Write 20 items: 9 easy, 6 average and 5 difficult. Each item is a choice question with three options, or an open question you mark yourself. Give an item a task (story question, grammar check, picture or retell) and the card shows it. You can save a draft and finish later. A difficulty level unlocks when all of its items are filled in.</p>

          <label className="lbh-label" htmlFor="lbh-title">Set name</label>
          <input id="lbh-title" className="lbh-input lbh-title-input" placeholder="For example: Past simple, Unit 4 review" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />

          <section className="lbh-story">
            <div className="lbh-group-head">
              <h2 className="lbh-group-title">Story (optional)</h2>
              <span className="lbh-group-count">{hasStory(editing.story) ? "This set is built around a story" : "Leave empty for a plain set"}</span>
            </div>
            <p className="lbh-hint">Write or paste one short standalone story. The student reads it before the board opens, and a Story button shows it again during the game. Then write items about it: questions, grammar checks on its verbs, pictures from it, or retell tasks. Use a blank line between paragraphs.</p>
            <input className="lbh-input" placeholder="Story title, for example: The Lost Cat" value={editing.story.title} onChange={(e) => setEditing({ ...editing, story: { ...editing.story, title: e.target.value } })} />
            <textarea className="lbh-input lbh-story-text" rows={9} placeholder="Write the story here..." value={editing.story.text} onChange={(e) => setEditing({ ...editing, story: { ...editing.story, text: e.target.value } })} />
            <ImageField value={editing.story.image} onChange={(image) => setEditing({ ...editing, story: { ...editing.story, image } })} label="story picture" />
          </section>

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
        <section className="lbh-stage">
          <h1 className="lbh-h1 lbh-title-tiles" aria-label="Letter Board">
            <span className="lbh-word" aria-hidden="true">{"LETTER".split("").map((c, i) => <span key={i} className="lbh-tile">{c}</span>)}</span>
            <span className="lbh-word" aria-hidden="true">{"BOARD".split("").map((c, i) => <span key={i} className="lbh-tile hot">{c}</span>)}</span>
          </h1>
          <p className="lbh-lead">Your student picks a letter and the tile flips. You choose the difficulty, and you mark the open answers.</p>
          <div className="lbh-toolbar">
            <button type="button" className="lbh-btn primary big" onClick={() => openLetterBoard("sample")}>Play the sample</button>
            <button type="button" className="lbh-btn big" onClick={() => openLetterBoard("sample-story")}>Play the story sample</button>
            {user && <button type="button" className="lbh-btn big" onClick={startNew}>New set</button>}
          </div>
        </section>

        <div className="lbh-rules">
          <div className="lbh-rule"><span className="lbh-coin">+</span><div><span className="lbh-rule-k">Right answer</span><span className="lbh-rule-v">Win coins</span></div></div>
          <div className="lbh-rule"><span className="lbh-coin lose">&minus;</span><div><span className="lbh-rule-k">Wrong answer</span><span className="lbh-rule-v">Lose coins</span></div></div>
          <div className="lbh-rule"><span className="lbh-coin board">20</span><div><span className="lbh-rule-k">Per board</span><span className="lbh-rule-v">Up to 20 tiles</span></div></div>
        </div>

        <h2 className="lbh-h2">Sets</h2>
        {loadError && <p className="lbh-error">{loadError}</p>}
        <div className="lbh-rows">
          <SetRow n={1} title="Sample set" badge="Sample" items={SAMPLE_ITEMS} onPlay={() => openLetterBoard("sample")} onEdit={user ? startCopy : null} editLabel="Copy to edit" />
          <SetRow n={2} title="The Lost Cat" badge="Sample" hasStoryFlag items={SAMPLE_STORY_ITEMS} onPlay={() => openLetterBoard("sample-story")} onEdit={user ? startCopyStory : null} editLabel="Copy to edit" />
          {sets.map((s, i) => (
            <SetRow
              key={s.id}
              n={i + 3}
              title={s.title}
              items={s.items}
              hasStoryFlag={hasStory(s.story)}
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
.lbh-badge-story { background: #E4E9F5; color: #1B2A4A; margin-left: 6px; }
.lbh-task { height: 32px; font-size: 13px; font-weight: 600; border: 1.5px solid #E3D3C9; border-radius: 8px; padding: 0 8px; background: #fff; color: #1B2A4A; margin-left: auto; }
.lbh-story { background: #fff; border: 1px solid #EBD8CE; border-radius: 16px; padding: 16px 18px 18px; margin: 18px 0 8px; display: grid; gap: 10px; }
.lbh-story-text { min-height: 170px; font-family: inherit; line-height: 1.55; }
.lbh-img { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin: 4px 0; }
.lbh-img img { height: 96px; max-width: 160px; object-fit: contain; border-radius: 10px; border: 1.5px solid #EBD8CE; background: #fff; }
.lbh-img-empty { height: 60px; min-width: 120px; display: flex; align-items: center; justify-content: center; border: 1.5px dashed #D9C3B8; border-radius: 10px; color: #8A6D63; font-size: 12px; padding: 0 12px; }
.lbh-img-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.lbh-file { cursor: pointer; display: inline-flex; align-items: center; }

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
.lbh-stage { background: #fff; border: 2px solid #EBD8CE; border-radius: 20px; padding: 30px 24px 28px; text-align: center; }
.lbh-stage .lbh-lead { margin: 0 auto 20px; max-width: 460px; }
.lbh-stage .lbh-toolbar { justify-content: center; }
.lbh-title-tiles { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px 22px; margin: 0 0 14px; }
.lbh-word { display: inline-flex; gap: 6px; }
.lbh-tile { width: 46px; height: 46px; border-radius: 9px; background: #1B2A4A; color: #FBF4F1; font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
.lbh-tile.hot { background: #F2593A; }
.lbh-rules { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 14px 0 0; }
.lbh-rule { background: #fff; border: 2px solid #EBD8CE; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; }
.lbh-rule-k { display: block; font-size: 12px; color: #7A5A4E; }
.lbh-rule-v { display: block; font-size: 15px; font-weight: 700; }
.lbh-coin { width: 32px; height: 32px; border-radius: 50%; flex: none; background: #F6C453; border: 2px solid #D9A62E; color: #6B4A00; font-size: 16px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.lbh-coin.lose { background: #1B2A4A; border-color: #1B2A4A; color: #FBF4F1; }
.lbh-coin.board { background: #F2593A; border-color: #F2593A; color: #fff; font-size: 13px; }
.lbh-rows { display: flex; flex-direction: column; gap: 10px; }
.lbh-row { background: #fff; border: 2px solid #EBD8CE; border-radius: 16px; padding: 14px 18px; display: flex; align-items: center; gap: 16px; }
.lbh-row-n { font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 600; color: #F2593A; width: 28px; flex: none; text-align: center; }
.lbh-row-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
.lbh-row-title { font-family: 'Fraunces', Georgia, serif; font-size: 20px; font-weight: 600; margin: 0 6px 0 0; line-height: 1.2; }
.lbh-row-top { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.lbh-row-actions { display: flex; gap: 8px; flex-wrap: wrap; flex: none; }
.lbh-badge { font-size: 11px; font-weight: 700; background: #FFE2D8; color: #7A2410; border-radius: 999px; padding: 3px 10px; flex: none; }
.lbh-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.lbh-chip { font-size: 12px; font-weight: 600; border-radius: 999px; padding: 3px 10px; background: #F4ECE6; color: #7A5A4E; }
.lbh-chip.full.easy { background: #FFE2D8; color: #7A2410; }
.lbh-chip.full.avg { background: #F2593A; color: #fff; }
.lbh-chip.full.hard { background: #1B2A4A; color: #FBF4F1; }
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
@media (max-width: 640px) { .lbh-h1 { font-size: 34px; } .lbh-tile { width: 38px; height: 38px; font-size: 20px; } .lbh-rules { grid-template-columns: 1fr; } .lbh-row { flex-wrap: wrap; } .lbh-row-actions { width: 100%; padding-left: 44px; } }
`;
