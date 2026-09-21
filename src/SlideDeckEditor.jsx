import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { newSlide, newTextElement, newImageElement } from "./slideDeckTypes";
import ConfirmDialog from "./ConfirmDialog";

const IMAGE_BUCKET = "slide-images";
const TEXT_COLORS = ["#1B2A4A", "#FF6B4A", "#5B6B85", "#1F9D6E", "#FFFFFF"];
const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32, 36, 44, 54, 64];

// Opens the read-only presenter as a standalone popup -- matching the
// FORGE/ASCEND/Notebook chrome-less window.open pattern.
function openPresenter(deckId) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1100, screenW - 40);
  const h = Math.min(720, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/slides/${deckId}/present`,
    "sentencoSlidePresent",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function SlideDeckEditor() {
  const { deckId } = useParams();
  const { user, loading: authLoading } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const [deckTitle, setDeckTitle] = useState("");
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(() => Number(searchParams.get("slide")) || 0);

  // Mirror the active slide into the URL so a refresh while editing lands
  // back on the same slide instead of the first one.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (activeIndex > 0) next.set("slide", String(activeIndex));
    else next.delete("slide");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
  const [deleteSlideIndex, setDeleteSlideIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [status, setStatus] = useState("saved");
  const [selectedId, setSelectedId] = useState(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryImages, setLibraryImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const saveTimer = useRef(null);
  const loadedRef = useRef(false);
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const fileInputRef = useRef(null);
  const newElementIdRef = useRef(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setLoading(false); return; }
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("slide_decks")
        .select("id, title, slides")
        .eq("id", deckId)
        .eq("user_id", user.id)
        .single();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setDeckTitle(data.title || "Untitled deck");
        setSlides(data.slides && data.slides.length ? data.slides : [newSlide()]);
        loadedRef.current = true;
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [deckId, user, authLoading]);

  useEffect(() => {
    if (!user) return;
    let isMounted = true;
    async function loadLibrary() {
      const { data, error } = await supabase.storage.from(IMAGE_BUCKET).list(user.id, { limit: 100, sortBy: { column: "created_at", order: "desc" } });
      if (!isMounted || error || !data) return;
      const images = data
        .filter((f) => f.name)
        .map((f) => {
          const path = `${user.id}/${f.name}`;
          const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
          return { name: f.name, url: pub.publicUrl };
        });
      setLibraryImages(images);
    }
    loadLibrary();
    return () => { isMounted = false; };
  }, [user]);

  const persist = useCallback((nextTitle, nextSlides) => {
    if (!loadedRef.current || !user) return;
    setStatus("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const { error } = await supabase
        .from("slide_decks")
        .update({ title: nextTitle, slides: nextSlides, updated_at: new Date().toISOString() })
        .eq("id", deckId)
        .eq("user_id", user.id);
      setStatus(error ? "error" : "saved");
    }, 700);
  }, [deckId, user]);

  function updateDeckTitle(value) {
    setDeckTitle(value);
    persist(value, slides);
  }

  // Ribbon buttons work even with nothing selected: resolve (and select) a
  // text target first -- the current text box, else the slide's first text
  // box, else a freshly created one -- so formatting always has somewhere to go.
  function ensureTextTarget() {
    const slide = slides[activeIndex];
    const current = slide?.elements.find((el) => el.id === selectedId);
    if (current && current.type === "text") return current;
    const existing = slide?.elements.find((el) => el.type === "text");
    if (existing) {
      setSelectedId(existing.id);
      return existing;
    }
    const el = newTextElement(30, 40);
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === activeIndex ? { ...s, elements: [...s.elements, el] } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(el.id);
    return el;
  }

  function updateElement(index, elementId, patch) {
    setSlides((prev) => {
      const next = prev.map((s, i) => {
        if (i !== index) return s;
        return { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, ...patch } : el)) };
      });
      persist(deckTitle, next);
      return next;
    });
  }

  function positionElement(elementId, pos, w) {
    const x = pos === "left" ? 3 : pos === "center" ? Math.max(0, (94 - w) / 2) : Math.max(0, 94 - w);
    updateElement(activeIndex, elementId, { x });
  }

  function deleteElement(index, elementId) {
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === index ? { ...s, elements: s.elements.filter((el) => el.id !== elementId) } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(null);
  }

  function addSlide() {
    setSlides((prev) => {
      const next = [...prev, newSlide()];
      persist(deckTitle, next);
      setActiveIndex(next.length - 1);
      return next;
    });
  }

  function deleteSlide(index) {
    if (slides.length <= 1) return;
    setSlides((prev) => {
      const next = prev.filter((_, i) => i !== index);
      persist(deckTitle, next);
      return next;
    });
    setActiveIndex((i) => Math.max(0, Math.min(i, slides.length - 2)));
  }

  function handleCanvasClick(e) {
    // A click that lands on a child (text/image element) is handled entirely
    // by that element's own onMouseDown -- don't undo its selection here.
    // Clicking empty canvas just deselects; use the "+ Add text box" button to write.
    if (e.target !== canvasRef.current) return;
    setSelectedId(null);
  }

  // Select immediately on press, and drag the moment the pointer moves past
  // a small threshold -- so dragging works from a press anywhere on the
  // element (not just a tiny handle), while a plain click/tap still just
  // selects it (and, for text, still places the cursor for editing).
  function startElementInteraction(e, elementId) {
    e.stopPropagation();
    setSelectedId(elementId);
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    dragRef.current = { elementId, rect, dragging: false };

    function onMove(ev) {
      const state = dragRef.current;
      if (!state) return;
      if (!state.dragging && (Math.abs(ev.clientX - startX) > 5 || Math.abs(ev.clientY - startY) > 5)) {
        state.dragging = true;
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      }
      if (!state.dragging) return;
      ev.preventDefault();
      const x = Math.min(92, Math.max(0, ((ev.clientX - rect.left) / rect.width) * 100));
      const y = Math.min(94, Math.max(0, ((ev.clientY - rect.top) / rect.height) * 100));
      setSlides((prev) => prev.map((s, i) => (i === activeIndex ? { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, x, y } : el)) } : s)));
    }
    function onUp() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      if (dragRef.current?.dragging) {
        setSlides((prev) => { persist(deckTitle, prev); return prev; });
      }
      dragRef.current = null;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  function addTextBox() {
    const el = newTextElement(30, 40);
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === activeIndex ? { ...s, elements: [...s.elements, el] } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(el.id);
    newElementIdRef.current = el.id;
  }

  async function handleUpload(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length || !user) return;
    setUploading(true);
    setUploadError(null);
    for (const file of files) {
      const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
      const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file);
      if (!error) {
        const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
        setLibraryImages((prev) => [{ name: path.split("/")[1], url: pub.publicUrl }, ...prev]);
      } else {
        console.error("Slide image upload failed:", error);
        setUploadError(error.message || "Upload failed.");
      }
    }
    setUploading(false);
    e.target.value = "";
  }

  function placeImage(url) {
    const el = newImageElement(url, 32, 32);
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === activeIndex ? { ...s, elements: [...s.elements, el] } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(el.id);
  }

  function startResize(e, elementId, currentW) {
    e.preventDefault();
    e.stopPropagation();
    const rect = canvasRef.current.getBoundingClientRect();
    function onMove(ev) {
      const w = Math.min(90, Math.max(8, ((ev.clientX - rect.left) / rect.width) * 100 - 0));
      setSlides((prev) => prev.map((s, i) => (i === activeIndex ? { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, w } : el)) } : s)));
    }
    function onUp() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      setSlides((prev) => { persist(deckTitle, prev); return prev; });
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  if (authLoading || loading) return <div className="sde-shell"><style>{CSS}</style></div>;

  if (!user) {
    return (
      <div className="sde-shell">
        <style>{CSS}</style>
        <div className="sde-missing">Log in from the Library to edit this deck.</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="sde-shell">
        <style>{CSS}</style>
        <div className="sde-missing">This deck wasn't found.</div>
      </div>
    );
  }

  const slide = slides[activeIndex] || slides[0];
  const n = slides.length;
  const selectedEl = slide.elements.find((el) => el.id === selectedId) || null;
  const selectedIsText = selectedEl && selectedEl.type === "text";

  return (
    <div className="sde-shell" onClick={() => setSelectedId(null)}>
      <style>{CSS}</style>

      <div className="sde-toolbar" onClick={(e) => e.stopPropagation()}>
        <input
          className="sde-deck-title"
          value={deckTitle}
          onChange={(e) => updateDeckTitle(e.target.value)}
          placeholder="Untitled deck"
        />
        <div className="sde-toolbar-right">
          <span className={`sde-status sde-status--${status}`}>
            {status === "saving" ? "Saving…" : status === "error" ? "Couldn't save" : "Saved"}
          </span>
          <button type="button" className="sde-tool-btn sde-tool-btn--primary" onClick={addTextBox}>+ Add text box</button>
          <button type="button" className="sde-tool-btn" onClick={() => setLibraryOpen((v) => !v)}>🖼️ Images</button>
          <button type="button" className="sde-present-btn" onClick={() => openPresenter(deckId)}>Present ▶</button>
        </div>
      </div>

      <div
        className="sde-format-bar"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => { if (e.target.tagName !== "SELECT") e.preventDefault(); }}
      >
        <span className="sde-format-label">Font size</span>
        <select
          className="sde-size-select"
          value={selectedIsText ? selectedEl.fontSize : 24}
          onChange={(e) => { const t = ensureTextTarget(); updateElement(activeIndex, t.id, { fontSize: Number(e.target.value) }); }}
        >
          {FONT_SIZES.map((sz) => (
            <option key={sz} value={sz}>{sz}px</option>
          ))}
        </select>
        <button type="button" className={`sde-bold-btn ${selectedIsText && selectedEl.bold ? "is-active" : ""}`} onClick={() => { const t = ensureTextTarget(); updateElement(activeIndex, t.id, { bold: !t.bold }); }} title="Bold">B</button>
        <button type="button" className={`sde-italic-btn ${selectedIsText && selectedEl.italic ? "is-active" : ""}`} onClick={() => { const t = ensureTextTarget(); updateElement(activeIndex, t.id, { italic: !t.italic }); }} title="Italic">I</button>
        <span className="sde-toolbar-divider" />
        <span className="sde-format-label">Text color</span>
        {TEXT_COLORS.map((c) => (
          <button
            key={c}
            type="button"
            className={`sde-color-swatch ${selectedIsText && selectedEl.color === c ? "is-active" : ""}`}
            style={{ background: c }}
            onClick={() => { const t = ensureTextTarget(); updateElement(activeIndex, t.id, { color: c }); }}
            title="Text color"
          />
        ))}
        <span className="sde-toolbar-divider" />
        <span className="sde-format-label">Align text</span>
        {["left", "center", "right"].map((a) => (
          <button key={a} type="button" className={selectedIsText && selectedEl.align === a ? "is-active" : ""} onClick={() => { const t = ensureTextTarget(); updateElement(activeIndex, t.id, { align: a }); }} title={`Align text ${a}`}>
            {a === "left" ? "⯇" : a === "center" ? "≡" : "⯈"}
          </button>
        ))}
        <span className="sde-toolbar-divider" />
        <span className="sde-format-label">Position on slide</span>
        {["left", "center", "right"].map((pos) => (
          <button key={pos} type="button" onClick={() => { const t = ensureTextTarget(); positionElement(t.id, pos, t.w); }} title={`Move box to ${pos} of slide`}>
            {pos === "left" ? "⇤" : pos === "center" ? "⇔" : "⇥"}
          </button>
        ))}
        {selectedEl && !selectedIsText && <span className="sde-format-hint">Image selected — drag it, resize from the corner, or delete it on the slide.</span>}
      </div>

      <div className="sde-frame">
        <div className="sde-canvas-wrap">
          <div className="sde-canvas-frame">
            <div className="sde-canvas-body" ref={canvasRef} onClick={handleCanvasClick}>
              {slide.elements.map((el) => (
                el.type === "text" ? (
                  <div
                    key={el.id}
                    className={`sde-el sde-el--text ${selectedId === el.id ? "is-selected" : ""}`}
                    style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%` }}
                    onPointerDown={(e) => startElementInteraction(e, el.id)}
                  >
                    {selectedId === el.id && (
                      <button type="button" className="sde-el-delete sde-el-delete--img" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); deleteElement(activeIndex, el.id); }}>×</button>
                    )}
                    <div
                      className="sde-el-text"
                      contentEditable
                      suppressContentEditableWarning
                      ref={(node) => {
                        if (node && newElementIdRef.current === el.id) {
                          node.focus();
                          newElementIdRef.current = null;
                        }
                      }}
                      style={{ fontSize: `${el.fontSize}px`, color: el.color, textAlign: el.align, fontWeight: el.bold ? 800 : 600, fontStyle: el.italic ? "italic" : "normal" }}
                      onBlur={(e) => {
                        const text = e.currentTarget.textContent;
                        if (!text || !text.trim()) deleteElement(activeIndex, el.id);
                        else updateElement(activeIndex, el.id, { text });
                      }}
                      data-placeholder="Type here…"
                    >
                      {el.text}
                    </div>
                  </div>
                ) : (
                  <div
                    key={el.id}
                    className={`sde-el sde-el--image ${selectedId === el.id ? "is-selected" : ""}`}
                    style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%` }}
                    onPointerDown={(e) => startElementInteraction(e, el.id)}
                  >
                    <img src={el.src} alt="" draggable={false} />
                    {selectedId === el.id && (
                      <>
                        <button type="button" className="sde-el-delete sde-el-delete--img" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); deleteElement(activeIndex, el.id); }}>×</button>
                        <span className="sde-resize-handle" onPointerDown={(e) => startResize(e, el.id, el.w)} />
                      </>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="sde-bottombar">
          <button type="button" className="sde-nav-btn" onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} disabled={activeIndex === 0}>← Previous</button>
          <div className="sde-dots">
            {slides.map((s, i) => (
              <span key={s.id} className="sde-dot-wrap">
                <span className={i === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(i)} />
                {n > 1 && (
                  <button type="button" className="sde-dot-delete" title="Delete slide" onClick={(e) => { e.stopPropagation(); if (slides.length > 1) setDeleteSlideIndex(i); }}>×</button>
                )}
              </span>
            ))}
          </div>
          <button type="button" className="sde-nav-btn" onClick={() => (activeIndex === n - 1 ? addSlide() : setActiveIndex((i) => i + 1))}>
            {activeIndex === n - 1 ? "+ Add slide" : "Next →"}
          </button>
        </div>
      </div>

      {libraryOpen && (
        <div className="sde-library" onClick={(e) => e.stopPropagation()}>
          <div className="sde-library-head">
            <span>Image library</span>
            <button type="button" onClick={() => setLibraryOpen(false)}>×</button>
          </div>
          <button type="button" className="sde-upload-btn" onClick={() => fileInputRef.current?.click()} disabled={uploading}>
            {uploading ? "Uploading…" : "+ Upload image"}
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" multiple hidden onChange={handleUpload} />
          {uploadError && <p className="sde-upload-error">Couldn't upload: {uploadError}</p>}
          <div className="sde-library-grid">
            {libraryImages.length === 0 && <p className="sde-library-empty">No images yet. Upload one to use it on any slide.</p>}
            {libraryImages.map((img) => (
              <button key={img.name} type="button" className="sde-library-thumb" onClick={() => placeImage(img.url)}>
                <img src={img.url} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}

      <ConfirmDialog
        open={deleteSlideIndex !== null}
        title="Delete this slide?"
        confirmLabel="Delete"
        onConfirm={() => { deleteSlide(deleteSlideIndex); setDeleteSlideIndex(null); }}
        onCancel={() => setDeleteSlideIndex(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

:root {
  --navy: #1B2A4A;
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --coral-tint: #FFE3D9;
}

.sde-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F2F0F4;
  font-family: 'Quicksand', sans-serif;
  color: #2B2A1E;
}
.sde-shell * { box-sizing: border-box; }

.sde-missing { padding: 60px; text-align: center; color: #9A8A73; }

.sde-toolbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  background: #FFFFFF;
  border-bottom: 1px solid #EAE7EF;
}
.sde-deck-title {
  flex: 1;
  min-width: 0;
  font-family: 'Fredoka', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--navy);
  background: none;
  border: none;
  outline: none;
  padding: 6px 8px;
  border-radius: 8px;
}
.sde-deck-title:focus { background: #F5F3FA; }
.sde-toolbar-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; flex-wrap: wrap; }
.sde-status { font-size: 11px; font-weight: 700; color: #9A93A8; margin-right: 4px; }
.sde-status--saving { color: #E5A83F; }
.sde-status--error { color: #D6392A; }
.sde-tool-btn {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
  background: #F1F0F6;
  border: none;
  border-radius: 8px;
  padding: 7px 11px;
  cursor: pointer;
}
.sde-tool-btn:disabled { opacity: 0.4; cursor: default; }
.sde-tool-btn--primary { color: var(--coral-dark); background: var(--coral-tint); }
.sde-present-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF9A6B 0%, var(--coral-dark) 100%);
  border: none;
  border-radius: 10px;
  padding: 9px 16px;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(229,80,47,0.28);
}

.sde-frame {
  max-width: 1040px;
  width: 100%;
  margin: 24px auto;
  padding: 0 20px;
}

.sde-canvas-wrap { margin-top: 4px; }
.sde-canvas-frame {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 24px 50px -14px rgba(27,42,74,0.24);
  overflow: hidden;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
}

.sde-canvas-body { position: relative; flex: 1; min-height: 0; }

.sde-el { position: absolute; }
.sde-el--text { cursor: text; }
.sde-el-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  line-height: 1.4;
  outline: none;
  min-width: 20px;
  min-height: 1.4em;
  cursor: text;
}
.sde-el-text:empty::before { content: attr(data-placeholder); opacity: 0.3; }
.sde-el.is-selected .sde-el-text { outline: 1.5px dashed var(--coral-tint); outline-offset: 4px; }

.sde-format-bar {
  flex-shrink: 0;
  max-width: 1040px;
  width: 100%;
  margin: 12px auto 0;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  background: #F3F2F6;
  border: 1px solid #E4E1EC;
  border-radius: 12px;
  min-height: 46px;
}
.sde-format-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #9A93A8; margin: 0 4px 0 6px; }
.sde-format-label:first-child { margin-left: 0; }
.sde-format-hint { flex-basis: 100%; font-size: 12.5px; color: #9A93A8; margin-top: 2px; }
.sde-format-bar button, .sde-size-select {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
  background: #FFFFFF;
  border: 1px solid #E4E1EC;
  border-radius: 6px;
  min-width: 26px;
  height: 28px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  padding: 0 7px;
}
.sde-size-select { padding: 0 4px; }
.sde-format-bar button.is-active { background: var(--coral); border-color: var(--coral); color: #FFFFFF; }
.sde-toolbar-divider { width: 1px; height: 20px; background: #EAE7EF; margin: 0 2px; }
.sde-color-swatch {
  width: 20px; height: 20px; min-width: 20px; border-radius: 50%;
  border: 1.5px solid #EAE7EF;
  padding: 0;
  cursor: pointer;
}
.sde-color-swatch.is-active { border-color: var(--coral); box-shadow: 0 0 0 2px rgba(255,107,74,0.22); }
.sde-el-delete { background: rgba(255,107,74,0.14) !important; color: var(--coral-dark) !important; padding: 0 12px; }

.sde-el--image { cursor: grab; }
.sde-el--image img { width: 100%; display: block; border-radius: 6px; pointer-events: none; }
.sde-el--image.is-selected img { outline: 2px solid var(--coral); outline-offset: 2px; }
.sde-el-delete--img {
  position: absolute; top: -10px; right: -10px;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--coral); color: #fff; border: 2px solid #fff;
  font-size: 12px; cursor: pointer;
}
.sde-resize-handle {
  position: absolute; bottom: -6px; right: -6px;
  width: 14px; height: 14px; border-radius: 50%;
  background: #FFFFFF; border: 2px solid var(--coral);
  cursor: nwse-resize;
}

.sde-bottombar { display: flex; align-items: center; justify-content: space-between; padding: 16px 2px 0; }
.sde-nav-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--coral); color: #FFFFFF; border: none;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px;
  padding: 11px 20px; border-radius: 14px;
  box-shadow: 0 4px 0 var(--coral-dark);
  cursor: pointer;
}
.sde-nav-btn:disabled { background: #EFEDF4; color: #C4BFD1; box-shadow: 0 4px 0 #E1DEE8; cursor: default; }
.sde-dots { display: flex; align-items: center; gap: 6px; }
.sde-dot-wrap { position: relative; display: inline-flex; align-items: center; padding-top: 14px; }
.sde-dot-wrap > span { display: block; width: 7px; height: 7px; border-radius: 50%; background: #DAD6E4; cursor: pointer; }
.sde-dot-wrap > span.is-active { width: 22px; border-radius: 4px; background: var(--coral); }
.sde-dot-delete {
  position: absolute; top: -2px; left: 50%; transform: translateX(-50%);
  width: 15px; height: 15px; border-radius: 50%;
  background: var(--coral); color: #fff; border: none;
  font-size: 10px; line-height: 1; cursor: pointer;
  display: none; align-items: center; justify-content: center; padding: 0;
}
.sde-dot-wrap:hover .sde-dot-delete { display: flex; }

.sde-library {
  position: fixed;
  top: 0; right: 0;
  width: 300px;
  height: 100vh;
  background: #FFFFFF;
  border-left: 1px solid #EAE7EF;
  box-shadow: -12px 0 30px rgba(27,42,74,0.14);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 50;
}
.sde-library-head { display: flex; align-items: center; justify-content: space-between; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; color: var(--navy); }
.sde-library-head button { background: none; border: none; font-size: 18px; cursor: pointer; color: #9A93A8; }
.sde-upload-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px;
  color: var(--coral); background: var(--coral-tint);
  border: 1px dashed var(--coral); border-radius: 10px;
  padding: 10px; cursor: pointer;
}
.sde-upload-btn:disabled { opacity: 0.6; cursor: default; }
.sde-upload-error { font-size: 11.5px; color: #D6392A; background: rgba(214,57,42,0.08); border-radius: 8px; padding: 8px 10px; line-height: 1.4; }
.sde-library-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; overflow-y: auto; }
.sde-library-empty { grid-column: 1/-1; font-size: 12px; color: #9A93A8; text-align: center; padding: 20px 0; }
.sde-library-thumb { padding: 0; border: 1px solid #EAE7EF; border-radius: 8px; overflow: hidden; cursor: pointer; aspect-ratio: 1; background: #F7F6FA; }
.sde-library-thumb img { width: 100%; height: 100%; object-fit: cover; }

@media (max-width: 720px) {
  .sde-toolbar { flex-wrap: wrap; }
  .sde-library { width: 100%; }
}
`;
