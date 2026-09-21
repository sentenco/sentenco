import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

const MODES = [
  { key: "dictionary", label: "Dictionary", placeholder: "Type a word…", multiline: false, color: "#16BFAE" },
  { key: "grammar", label: "Grammar Checker", placeholder: "Paste a sentence or paragraph to check…", multiline: true, color: "#7C5CFC" },
  { key: "translator", label: "Translator", placeholder: "Type text to translate…", multiline: true, color: "#FF8A4C" },
];

const TRANSLATE_LANGUAGES = ["Filipino", "English", "Spanish", "Chinese", "Japanese", "Korean", "Vietnamese", "Polish", "Hebrew"];
const SOURCE_LANG_STORAGE_KEY = "sentenco_translate_source_lang";
const LANG_STORAGE_KEY = "sentenco_translate_target_lang";
const HISTORY_STORAGE_KEY = "sentenco_lookup_history";
const MAX_HISTORY = 30;

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

function ResultCard({ entry, onReverse }) {
  const modeInfo = MODES.find((m) => m.key === entry.mode);
  const [copied, setCopied] = useState(false);

  function copyTranslation() {
    if (!entry.data?.translation) return;
    navigator.clipboard.writeText(entry.data.translation);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className={`sl-card sl-card--${entry.mode}`}>
      <div className="sl-card-head">
        <span className={`sl-card-tag sl-card-tag--${entry.mode}`}>
          <ModeIcon mode={entry.mode} />
          {modeInfo.label}
        </span>
        <span className="sl-card-query">{entry.query}</span>
      </div>
      {entry.status === "loading" && <div className="sl-card-status"><span className="sl-spinner" />Working…</div>}
      {entry.status === "error" && <div className="sl-card-status sl-card-status--error">{entry.error}</div>}
      {entry.status === "done" && entry.mode === "dictionary" && (
        <div className="sl-card-body">
          {entry.data.meanings.map((m, i) => (
            <div className="sl-meaning" key={i}>
              <span className="sl-meaning-pos">{m.pos}</span>
              {m.def && <span className="sl-meaning-def">{m.def}</span>}
            </div>
          ))}
        </div>
      )}
      {entry.status === "done" && entry.mode === "grammar" && (
        entry.data.corrections.length === 0 ? (
          <div className="sl-card-body sl-clean">✓ No issues found — looks good.</div>
        ) : (
          <div className="sl-card-body">
            {entry.data.corrections.map((c, i) => (
              <div className="sl-correction" key={i}>
                <div className="sl-correction-diff">
                  <span className="sl-wrong">{c.original}</span>
                  <span className="sl-arrow">→</span>
                  <span className="sl-right">{c.corrected}</span>
                </div>
                {c.explanation && <p className="sl-explain">{c.explanation}</p>}
              </div>
            ))}
          </div>
        )
      )}
      {entry.status === "done" && entry.mode === "translator" && (
        <div className="sl-card-body">
          <div className="sl-translation-row">
            <div className="sl-translation">{entry.data.translation}</div>
            <div className="sl-translation-actions">
              {entry.sourceLang && (
                <button
                  type="button"
                  className="sl-reverse-btn"
                  onClick={() => onReverse(entry)}
                  title={`Translate back to ${entry.sourceLang}`}
                  aria-label="Reverse translation"
                >
                  ⇄
                </button>
              )}
              <button
                type="button"
                className="sl-copy-btn"
                onClick={copyTranslation}
                title="Copy translation"
                aria-label="Copy translation"
              >
                {copied ? "✓" : "⧉"}
              </button>
            </div>
          </div>
          <div className="sl-translation-meta">
            {entry.sourceLang && <span>{entry.sourceLang} → </span>}
            <span>{entry.targetLang}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchLookup() {
  const navigate = useNavigate();
  const { plan } = useAuth();
  const [searchParams] = useSearchParams();
  const requestedMode = searchParams.get("mode");
  const initialQuery = searchParams.get("q") || "";
  const [mode, setMode] = useState(
    MODES.some((m) => m.key === requestedMode) ? requestedMode : "dictionary"
  );
  const [inputText, setInputText] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [sourceLang, setSourceLang] = useState(() => localStorage.getItem(SOURCE_LANG_STORAGE_KEY) || "English");
  const [targetLang, setTargetLang] = useState(() => localStorage.getItem(LANG_STORAGE_KEY) || "Filipino");
  const [history, setHistory] = useState(loadHistory);
  const idRef = useRef(0);
  const inputRef = useRef(null);
  const autoRanRef = useRef(false);

  useEffect(() => {
    localStorage.setItem(SOURCE_LANG_STORAGE_KEY, sourceLang);
  }, [sourceLang]);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, targetLang);
  }, [targetLang]);

  function swapLanguages() {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [mode]);

  const activeMode = MODES.find((m) => m.key === mode);

  function persistHistory(list) {
    const trimmed = list.filter((e) => e.status !== "loading").slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmed));
  }

  function updateEntry(id, patch) {
    setHistory((h) => {
      const next = h.map((e) => (e.id === id ? { ...e, ...patch } : e));
      persistHistory(next);
      return next;
    });
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  }

  function handleReverse(entry) {
    if (!entry.sourceLang || !entry.targetLang) return;
    const newSource = entry.targetLang;
    const newTarget = entry.sourceLang;
    setSourceLang(newSource);
    setTargetLang(newTarget);
    setMode("translator");
    runQuery("translator", entry.data.translation, newSource, newTarget);
  }

  async function authHeaders() {
    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    return token
      ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      : { "Content-Type": "application/json" };
  }

  async function runQuery(runMode, rawQuery, srcLang, tgtLang) {
    const trimmed = rawQuery.trim();
    if (!trimmed) return;
    const id = ++idRef.current;
    setHistory((h) => [
      {
        id,
        mode: runMode,
        query: trimmed,
        sourceLang: runMode === "translator" ? srcLang : null,
        targetLang: runMode === "translator" ? tgtLang : null,
        status: "loading",
        data: null,
        error: "",
      },
      ...h,
    ]);

    try {
      const headers = await authHeaders();
      if (runMode === "dictionary") {
        const res = await fetch("/api/dictionary-lookup", {
          method: "POST",
          headers,
          body: JSON.stringify({ word: trimmed }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.meanings?.length) throw new Error(data?.error || `No results for "${trimmed}".`);
        updateEntry(id, { status: "done", data: { word: data.word || trimmed, meanings: data.meanings } });
      } else if (runMode === "grammar") {
        const res = await fetch("/api/grammar-check", {
          method: "POST",
          headers,
          body: JSON.stringify({ text: trimmed }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok) throw new Error(data?.error || "Something went wrong.");
        updateEntry(id, { status: "done", data: { corrections: Array.isArray(data?.corrections) ? data.corrections : [] } });
      } else {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers,
          body: JSON.stringify({ text: trimmed, sourceLang: srcLang, targetLang: tgtLang }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.translation) throw new Error(data?.error || "Translation failed.");
        updateEntry(id, { status: "done", data: { translation: data.translation } });
      }
    } catch (err) {
      updateEntry(id, { status: "error", error: err.message || "Something went wrong." });
    }
  }

  // Auto-run the query that arrived via URL params from the homepage search
  // bar (?mode=&q=), then strip q from the URL so a reload doesn't resubmit it.
  useEffect(() => {
    if (autoRanRef.current) return;
    if (!initialQuery || plan !== "pro_plus") return;
    autoRanRef.current = true;
    runQuery(mode, initialQuery, sourceLang, targetLang);
    navigate(`/library/search?mode=${mode}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText.trim()) return;
    runQuery(mode, inputText, sourceLang, targetLang);
    setInputText("");
  }

  function handleTextareaKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="sl-shell">
      <style>{CSS}</style>
      <div className="sl-topbar">
        <button type="button" className="sl-nav-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentenco.png" alt="" className="sl-brand-logo" />entenco
        </button>
      </div>

      <div className="sl-hero">
        <span className="sl-eyebrow">Teacher Toolkit</span>
        <h1 className="sl-heading">Look something up</h1>
        <p className="sl-subheading">Check a word, fix a sentence, or translate for your students.</p>
      </div>

      {plan !== "pro_plus" ? (
        <div className="sl-locked">
          <span className="sl-locked-icon"><LockIcon /></span>
          <p className="sl-locked-eyebrow">Pro+ feature</p>
          <h2 className="sl-locked-title">The Teacher Toolkit is part of Sentenco Pro+</h2>
          <p className="sl-locked-desc">Upgrade to Pro+ to unlock the AI-powered Dictionary, Grammar Checker, and Translator, plus every CEFR level.</p>
          <button type="button" className="sl-locked-cta" onClick={() => navigate("/library/subscription")}>Upgrade to Pro+</button>
        </div>
      ) : (
      <>
      <div className="sl-panel">
        <div className="sl-modes" role="tablist">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              role="tab"
              aria-selected={mode === m.key}
              className={`sl-mode-btn sl-mode-btn--${m.key} ${mode === m.key ? "is-active" : ""}`}
              onClick={() => setMode(m.key)}
            >
              <ModeIcon mode={m.key} />
              {m.label}
            </button>
          ))}
        </div>

        {mode === "translator" && (
          <div className="sl-lang-pair">
            <label className="sl-lang-col">
              <span className="sl-lang-label">From</span>
              <span className="sl-lang-select-wrap">
                <select className="sl-lang-select" value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
                  {TRANSLATE_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </span>
            </label>
            <button type="button" className="sl-lang-swap" onClick={swapLanguages} title="Swap languages" aria-label="Swap languages">
              ⇄
            </button>
            <label className="sl-lang-col">
              <span className="sl-lang-label">To</span>
              <span className="sl-lang-select-wrap">
                <select className="sl-lang-select" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
                  {TRANSLATE_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </span>
            </label>
          </div>
        )}

        <form className={`sl-query-form sl-query-form--${mode}`} onSubmit={handleSubmit}>
          {activeMode.multiline ? (
            <textarea
              ref={inputRef}
              className="sl-query-input sl-query-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder={activeMode.placeholder}
              rows={3}
            />
          ) : (
            <input
              ref={inputRef}
              type="text"
              className="sl-query-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={activeMode.placeholder}
            />
          )}
          <button type="submit" className={`sl-submit-btn sl-submit-btn--${mode}`} disabled={!inputText.trim()} aria-label="Send">
            <SendIcon />
          </button>
        </form>
      </div>

      <div className="sl-history">
        <div className="sl-history-head">
          <button
            type="button"
            className={`sl-history-toggle ${historyOpen ? "is-open" : ""}`}
            onClick={() => setHistoryOpen((o) => !o)}
            aria-expanded={historyOpen}
          >
            <ChevronIcon />
            Recent lookups{history.length > 0 ? ` · ${history.length}` : ""}
          </button>
          {history.length > 0 && (
            <button type="button" className="sl-clear-history" onClick={clearHistory}>Clear</button>
          )}
        </div>
        {historyOpen && (
          history.length === 0 ? (
            <div className="sl-empty">
              <span className={`sl-empty-icon sl-empty-icon--${mode}`}><ModeIcon mode={mode} /></span>
              <p>Your {activeMode.label.toLowerCase()} results will show up here.</p>
            </div>
          ) : (
            history.map((entry) => <ResultCard key={entry.id} entry={entry} onReverse={handleReverse} />)
          )
        )}
      </div>
      </>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.sl-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(640px 420px at 12% -8%, rgba(255,107,74,0.07), transparent 60%),
    radial-gradient(520px 420px at 104% 6%, rgba(124,92,252,0.05), transparent 60%),
    radial-gradient(560px 480px at 50% 106%, rgba(22,191,174,0.05), transparent 60%),
    #FFFDFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
.sl-shell * { box-sizing: border-box; }

.sl-topbar {
  width: 100%;
  max-width: 640px;
  padding: 22px 24px 0;
}
.sl-nav-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-brand-logo { height: 32px; width: auto; display: block; margin-right: -5px; }

.sl-hero {
  width: 100%;
  max-width: 640px;
  padding: 30px 24px 6px;
  text-align: center;
}
.sl-eyebrow {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #FF6B4A;
  background: rgba(255,107,74,0.09);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}
.sl-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #2B2A4A;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}
.sl-subheading {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #8B84A3;
  margin: 0;
}

.sl-locked {
  width: 100%;
  max-width: 400px;
  margin: 20px auto 60px;
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.sl-locked-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: 8px;
  background: #E9ECF3;
  color: #1B2A4A;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sl-locked-icon svg { width: 22px; height: 22px; }
.sl-locked-eyebrow {
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1B2A4A;
  margin: 0;
}
.sl-locked-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 21px;
  color: #2B2A4A;
  margin: 4px 0 0;
}
.sl-locked-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  color: #8B84A3;
  line-height: 1.6;
  margin: 4px 0 14px;
}
.sl-locked-cta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  background: #1B2A4A;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 10px 26px;
  cursor: pointer;
}
.sl-locked-cta:hover { filter: brightness(1.25); }

.sl-panel {
  width: 100%;
  max-width: 640px;
  padding: 26px 24px 0;
}

.sl-modes {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
}
.sl-mode-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s;
}
.sl-mode-btn svg { width: 14px; height: 14px; }
.sl-mode-btn:hover:not(.is-active) { border-color: rgba(43,42,74,0.24); }
.sl-mode-btn--dictionary.is-active { background: #16BFAE; color: #fff; border-color: #16BFAE; }
.sl-mode-btn--grammar.is-active { background: #7C5CFC; color: #fff; border-color: #7C5CFC; }
.sl-mode-btn--translator.is-active { background: #FF8A4C; color: #fff; border-color: #FF8A4C; }

.sl-lang-pair {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 10px;
  max-width: 440px;
  margin: 0 auto 14px;
}
.sl-lang-col {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.sl-lang-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #8B84A3;
}
.sl-lang-swap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: 1.5px solid rgba(255,138,76,0.35);
  border-radius: 50%;
  background: #fff;
  color: #FF8A4C;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.sl-lang-swap:hover { background: rgba(255,138,76,0.1); }
.sl-lang-swap:active { transform: rotate(180deg); }
.sl-lang-select-wrap { position: relative; display: flex; width: 100%; }
.sl-lang-select {
  appearance: none;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23FF8A4C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 8 4 4 4-4'/%3E%3C/svg%3E") no-repeat right 10px center;
  background-size: 12px;
  border: 1.5px solid rgba(255,138,76,0.35);
  border-radius: 999px;
  padding: 7px 30px 7px 14px;
  cursor: pointer;
}
.sl-lang-select:hover { border-color: rgba(255,138,76,0.6); }

.sl-query-form {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-top: 3px solid #2B2A4A;
  border-radius: 18px;
  padding: 12px 12px 12px 18px;
  box-shadow: 0 10px 28px rgba(43,42,74,0.07);
  transition: border-top-color 0.15s;
}
.sl-query-form--dictionary { border-top-color: #16BFAE; }
.sl-query-form--grammar { border-top-color: #7C5CFC; }
.sl-query-form--translator { border-top-color: #FF8A4C; }
.sl-query-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #2B2A4A;
  resize: none;
}
.sl-query-input::placeholder { color: #8B84A3; }
.sl-query-textarea { line-height: 1.5; padding-top: 6px; }
.sl-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  color: #fff;
  background: #2B2A4A;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}
.sl-submit-btn--dictionary:not(:disabled) { background: #16BFAE; }
.sl-submit-btn--grammar:not(:disabled) { background: #7C5CFC; }
.sl-submit-btn--translator:not(:disabled) { background: #FF8A4C; }
.sl-submit-btn:hover:not(:disabled) { filter: brightness(0.92); }
.sl-submit-btn:active:not(:disabled) { transform: scale(0.92); }
.sl-submit-btn svg { width: 17px; height: 17px; }
.sl-submit-btn:disabled { background: #EFE9E5; color: #B9AF9C; cursor: default; }

.sl-history {
  width: 100%;
  max-width: 640px;
  padding: 30px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sl-history-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(43,42,74,0.11);
}
.sl-history-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #8B84A3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-history-toggle:hover { color: #2B2A4A; }
.sl-history-toggle svg { width: 13px; height: 13px; transition: transform 0.15s; }
.sl-history-toggle.is-open svg { transform: rotate(180deg); }
.sl-clear-history {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #8B84A3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-clear-history:hover { color: #FF6B4A; }

.sl-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  color: #8B84A3;
  font-size: 13.5px;
  padding: 34px 20px;
  border: 1.5px dashed rgba(43,42,74,0.14);
  border-radius: 18px;
}
.sl-empty p { margin: 0; }
.sl-empty-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.sl-empty-icon svg { width: 20px; height: 20px; }
.sl-empty-icon--dictionary { background: rgba(22,191,174,0.12); color: #16BFAE; }
.sl-empty-icon--grammar { background: rgba(124,92,252,0.12); color: #7C5CFC; }
.sl-empty-icon--translator { background: rgba(255,138,76,0.14); color: #FF8A4C; }

.sl-card {
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-left: 4px solid #2B2A4A;
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
}
.sl-card--dictionary { border-left-color: #16BFAE; }
.sl-card--grammar { border-left-color: #7C5CFC; }
.sl-card--translator { border-left-color: #FF8A4C; }
.sl-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.sl-card-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
  background: #2B2A4A;
  border-radius: 999px;
  padding: 3px 10px 3px 8px;
}
.sl-card-tag svg { width: 10px; height: 10px; }
.sl-card-tag--dictionary { background: #16BFAE; }
.sl-card-tag--grammar { background: #7C5CFC; }
.sl-card-tag--translator { background: #FF8A4C; }
.sl-card-query {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #2B2A4A;
}
.sl-card-status { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #8B84A3; }
.sl-card-status--error { color: #C24E3A; }
.sl-spinner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(43,42,74,0.15);
  border-top-color: #8B84A3;
  animation: sl-spin 0.7s linear infinite;
}
@keyframes sl-spin { to { transform: rotate(360deg); } }

.sl-card-body { display: flex; flex-direction: column; gap: 10px; }
.sl-clean { color: #16BFAE; font-weight: 600; font-size: 13.5px; }

.sl-meaning { display: flex; gap: 8px; align-items: baseline; font-size: 13.5px; }
.sl-meaning-pos {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #16BFAE;
  text-transform: lowercase;
  flex-shrink: 0;
}
.sl-meaning-def { color: #2B2A4A; }

.sl-correction { border-left: 3px solid #7C5CFC; padding-left: 12px; }
.sl-correction-diff { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 13.5px; }
.sl-wrong { color: #C24E3A; text-decoration: line-through; }
.sl-arrow { color: #8B84A3; }
.sl-right { color: #16BFAE; font-weight: 600; }
.sl-explain { margin: 4px 0 0; font-size: 12.5px; color: #6B7280; }

.sl-translation-row { display: flex; align-items: flex-start; gap: 10px; }
.sl-translation { flex: 1; font-size: 15px; color: #2B2A4A; font-weight: 600; line-height: 1.5; }
.sl-translation-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.sl-copy-btn, .sl-reverse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border: 1px solid rgba(255,138,76,0.3);
  border-radius: 50%;
  background: rgba(255,138,76,0.08);
  color: #FF8A4C;
  font-size: 13px;
  cursor: pointer;
}
.sl-copy-btn:hover, .sl-reverse-btn:hover { background: rgba(255,138,76,0.16); }
.sl-translation-meta { margin-top: 6px; font-size: 12px; color: #8B84A3; }

@media (max-width: 640px) {
  .sl-topbar, .sl-hero, .sl-panel, .sl-history { padding-left: 16px; padding-right: 16px; }
  .sl-heading { font-size: 25px; }
  .sl-modes { flex-wrap: wrap; }
}
`;
