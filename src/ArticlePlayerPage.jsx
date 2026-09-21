import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];

// The card fills whatever size the (resizable) popup window is dragged to
// -- there's no fixed width/height anymore. PAGE_PADDING/COLUMN_GAP are
// layout constants (spacing), not size constants. FALLBACK_COLUMN_WIDTH is
// only a sane default for the very first paint, before the viewport ref is
// measured -- real column width is computed live in measureWidth() below
// and re-computed on every resize, so shrinking the window narrows the
// columns and pagination picks up the slack automatically.
const PAGE_PADDING = 36;
const COLUMN_GAP = 32;
const FALLBACK_COLUMN_WIDTH = (680 - PAGE_PADDING * 2 - COLUMN_GAP) / 2;

function Gloss({ word, pos, def, glossKey, openKey, setOpenKey }) {
  const isOpen = openKey === glossKey;
  return (
    <span
      className={`app-gloss ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenKey(isOpen ? null : glossKey);
      }}
    >
      {word}
      <span className="app-tip">
        <b>{word}</b>
        <span className="app-pos">{pos}</span>
        <br />
        {def}
      </span>
    </span>
  );
}

function renderParts(parts, blockIdx, openKey, setOpenKey) {
  return parts.map((part, i) => {
    if (part.g !== undefined) {
      return (
        <Gloss
          key={i}
          word={part.g}
          pos={part.pos}
          def={part.def}
          glossKey={`${blockIdx}-${i}`}
          openKey={openKey}
          setOpenKey={setOpenKey}
        />
      );
    }
    if (part.c !== undefined) {
      return null;
    }
    return <span key={i}>{part.t}</span>;
  });
}

function Paragraph({ parts, blockIdx, openKey, setOpenKey }) {
  return <p>{renderParts(parts, blockIdx, openKey, setOpenKey)}</p>;
}

// The opening paragraph gets a newspaper-style drop cap, sized to whatever
// letter the article actually starts with (not a fixed hardcoded letter).
function FirstParagraph({ parts, blockIdx, openKey, setOpenKey }) {
  const [first, ...rest] = parts;
  if (!first || first.t === undefined || !first.t.trim()) {
    return <Paragraph parts={parts} blockIdx={blockIdx} openKey={openKey} setOpenKey={setOpenKey} />;
  }
  const dropChar = first.t.charAt(0);
  const remainder = [{ t: first.t.slice(1) }, ...rest];
  return (
    <p className="app-first-p">
      <span className="app-dropcap">{dropChar}</span>
      {renderParts(remainder, blockIdx, openKey, setOpenKey)}
    </p>
  );
}

// Renders a title with the last word italicized, matching the reference
// magazine layout ("THE ART OF STYLE" -> "STYLE" in italic).
function StyledTitle({ title }) {
  const words = title.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
}

export default function ArticlePlayerPage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const [searchParams, setSearchParams] = useSearchParams();
  const editionParam = searchParams.get("edition");
  const [edition, setEdition] = useState(EDITION_KEYS.includes(editionParam) ? editionParam : "polished");
  const [openKey, setOpenKey] = useState(null);
  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 0);
  const [totalPages, setTotalPages] = useState(1);
  const [colWidth, setColWidth] = useState(FALLBACK_COLUMN_WIDTH);
  const viewportRef = useRef(null);
  const innerRef = useRef(null);

  // Book-style pagination, not shrink-to-fit: the inner content flows into
  // as many columns as it naturally needs at the current column width (no
  // column-count limit), and the viewport only ever shows exactly 2 of
  // them at once, sliding over by one full "spread" per page turn. This
  // guarantees "always 2 columns" and "content always fits" regardless of
  // how long a given edition's text is, and now also regardless of window
  // size -- a shrinking font has a floor and eventually fails for a long
  // article; this can't fail, it just adds another page.
  const measureWidth = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    // Not column-count -- that lets the browser auto-stretch each column
    // to fill leftover space, which drifts out of sync with the page-turn
    // math. Deriving column-width ourselves from the live viewport width
    // keeps the two in agreement at every size, not just the size this was
    // built at.
    setColWidth((viewport.clientWidth - COLUMN_GAP) / 2);
  }, []);

  const measurePages = useCallback(() => {
    const viewport = viewportRef.current;
    const inner = innerRef.current;
    if (!viewport || !inner) return;
    // The step between pages isn't the viewport width alone -- column-gap
    // applies uniformly between EVERY pair of adjacent columns, including
    // the seam between one page's 2nd column and the next page's 1st, so
    // that seam's gap has to be skipped too or every page after the first
    // lands slightly short and clips into the next column's text.
    const pageStep = viewport.clientWidth + COLUMN_GAP;
    const pages = Math.max(1, Math.ceil((inner.scrollWidth - 1) / pageStep));
    setTotalPages(pages);
    setPage((p) => Math.min(p, pages - 1));
  }, []);

  // Skip the page reset on the very first run so a page restored from the
  // URL (a refresh mid-article) survives -- only an actual edition switch
  // by the reader should jump back to page 1. Compares the previous VALUE
  // (not a boolean flag) so this stays correct under StrictMode's dev-only
  // double-invoke of effects, which would otherwise fire the reset once
  // "for free" on mount.
  const prevEditionRef = useRef(null);
  useLayoutEffect(() => {
    if (prevEditionRef.current !== null && prevEditionRef.current !== edition) {
      setPage(0);
    }
    prevEditionRef.current = edition;
    measureWidth();
  }, [edition, measureWidth]);

  // Mirror edition + page into the URL so a refresh lands back on the same
  // spread instead of the first page of the default edition.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    next.set("edition", edition);
    if (page > 0) next.set("page", String(page));
    else next.delete("page");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edition, page]);

  // Re-measure pages once colWidth has actually been applied to the DOM
  // (setColWidth in the effect above triggers this on the next render) --
  // measuring scrollWidth before the new column width lands would count
  // columns sized for the previous viewport, not this one.
  useLayoutEffect(() => {
    measurePages();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measurePages);
    }
  }, [colWidth, edition, measurePages]);

  useLayoutEffect(() => {
    function onResize() { measureWidth(); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureWidth]);

  function goToPage(next) {
    setPage((p) => Math.max(0, Math.min(next, totalPages - 1)));
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") goToPage(page + 1);
    if (e.key === "ArrowLeft") goToPage(page - 1);
  }

  if (!article || !article.ready) {
    return (
      <div className="app-shell">
        <style>{CSS}</style>
        <div className="app-card">
          <div className="app-missing">This article isn't published yet.</div>
        </div>
      </div>
    );
  }

  const ed = article.editions[edition];
  const publishedLabel = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })
    : null;
  const viewportWidth = viewportRef.current?.clientWidth || (FALLBACK_COLUMN_WIDTH * 2 + COLUMN_GAP);
  const pageStep = viewportWidth + COLUMN_GAP;

  return (
    <div className="app-shell" onClick={() => setOpenKey(null)} onKeyDown={handleKeyDown} tabIndex={-1}>
      <style>{CSS}</style>

      <div className="app-card">
        <div className="app-editions">
          {EDITION_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              className={`app-ed-btn ${edition === k ? "is-active" : ""}`}
              onClick={(e) => { e.stopPropagation(); setEdition(k); }}
            >
              {article.editions[k].label}
            </button>
          ))}
        </div>

        <div className="app-page">
          <div className="app-masthead">
            <div className="app-masthead-blob" />
            <div className="app-masthead-logo-chip">
              <img className="app-masthead-logo" src="/logo-sentivo.png" alt="" />
            </div>
            <div className="app-masthead-kicker-row">
              <span className="app-masthead-rule" />
              <span className="app-masthead-kicker">The Sentenco</span>
              <span className="app-masthead-rule" />
            </div>
            <div className="app-masthead-word">Gazette</div>
            <div className="app-masthead-underline" />
            <div className="app-masthead-tagline">News, Ideas &amp; Perspectives</div>
          </div>

          <h1 className="app-title"><StyledTitle title={article.title} /></h1>

          <div className="app-byline">
            {publishedLabel && (
              <span className="app-byline-item">
                <svg className="app-byline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
                {publishedLabel}
              </span>
            )}
            {publishedLabel && <span className="app-dot">·</span>}
            <span className="app-byline-item">
              <svg className="app-byline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 12.6 12.9 4.9A2 2 0 0 0 11.5 4.3H5a1 1 0 0 0-1 1v6.5c0 .5.2 1 .6 1.4l7.7 7.7a2 2 0 0 0 2.8 0l5.5-5.5a2 2 0 0 0 0-2.8Z" /><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /></svg>
              {article.topicTitle}
            </span>
          </div>

          <div className="app-columns" ref={viewportRef}>
            <div
              className="app-columns-inner"
              ref={innerRef}
              style={{ transform: `translateX(-${page * pageStep}px)`, columnWidth: `${colWidth}px` }}
            >
              {(() => {
                const firstParaIdx = ed.blocks.findIndex((b) => b.type !== "quote");
                return ed.blocks.map((block, i) =>
                  block.type === "quote" ? (
                    <blockquote key={i} className="app-pullquote">“{block.text}”</blockquote>
                  ) : i === firstParaIdx ? (
                    <FirstParagraph
                      key={i}
                      parts={block.parts}
                      blockIdx={i}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  ) : (
                    <Paragraph
                      key={i}
                      parts={block.parts}
                      blockIdx={i}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  )
                );
              })()}
            </div>
          </div>

          <div className="app-pager">
            <button
              type="button"
              className="app-pager-btn"
              onClick={(e) => { e.stopPropagation(); goToPage(page - 1); }}
              disabled={page === 0}
              aria-label="Previous page"
            >
              ‹
            </button>
            <span className="app-pager-count">Page {page + 1} of {totalPages}</span>
            <button
              type="button"
              className="app-pager-btn"
              onClick={(e) => { e.stopPropagation(); goToPage(page + 1); }}
              disabled={page >= totalPages - 1}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>

        <div className="app-footer">The Sentenco Gazette</div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

.app-shell {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #E4DED1;
  color: #171717;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.app-shell * { box-sizing: border-box; }

.app-card {
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 420px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
}

.app-missing { margin: auto; padding: 60px; text-align: center; font-family: 'Source Serif 4', serif; color: #8A8578; }

.app-editions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 13px 8px;
  background: #1B2A4A;
}
.app-ed-btn {
  position: relative;
  font-family: 'Source Serif 4', serif;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  background: none;
  border: none;
  padding: 6px 16px;
  cursor: pointer;
}
.app-ed-btn:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: rgba(255,255,255,0.18);
}
.app-ed-btn.is-active { color: #FFFFFF; }
.app-ed-btn.is-active::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%);
  width: 56%;
  height: 2px;
  background: #FF6B4A;
}

.app-page {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${PAGE_PADDING}px 10px;
  overflow: hidden;
}

.app-masthead {
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 16px 0 14px;
  margin: 0 -${PAGE_PADDING}px;
  background: #1B2A4A;
}
.app-masthead-blob {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #FF6B4A;
  opacity: 0.16;
  top: -90px;
  right: -60px;
  pointer-events: none;
}
.app-masthead-logo-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 5px 10px;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.18);
}
.app-masthead-logo { height: 15px; width: auto; display: block; }
.app-masthead-kicker-row { position: relative; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 1px; }
.app-masthead-rule { flex: 0 1 36px; height: 1px; background: rgba(255,255,255,0.4); }
.app-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 9.5px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.78);
}
.app-masthead-word {
  position: relative;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 1;
  margin: 1px 0 5px;
}
.app-masthead-underline { position: relative; width: 100px; height: 2px; background: #FF6B4A; margin: 0 auto 5px; }
.app-masthead-tagline {
  position: relative;
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 8.5px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
}

.app-title {
  flex-shrink: 0;
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.14;
  letter-spacing: 0;
  text-align: center;
  text-transform: none;
  color: #1B2A4A;
  margin: 14px 0 8px;
}
.app-title em { font-style: italic; font-weight: 700; color: #E0502F; }

.app-byline {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Source Serif 4', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A8578;
  text-align: center;
  margin: 0 0 14px;
}
.app-byline-item { display: inline-flex; align-items: center; gap: 5px; }
.app-byline-icon { width: 13px; height: 13px; flex-shrink: 0; color: #FF6B4A; }
.app-dot { margin: 0 10px; }

.app-columns {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
}
.app-columns-inner {
  height: 100%;
  font-family: 'Source Serif 4', serif;
  font-size: 17.5px;
  line-height: 1.5;
  color: #262626;
  column-gap: ${COLUMN_GAP}px;
  column-fill: auto;
  column-rule: 1px solid #E2DED5;
  text-align: justify;
  transition: transform 0.32s ease;
  will-change: transform;
}
.app-columns-inner p { margin: 0 0 12px; }

.app-first-p::after { content: ""; display: table; clear: both; }
.app-dropcap {
  float: left;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  line-height: 1;
  color: #FFFFFF;
  background: #1B2A4A;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  margin: 3px 10px 2px 0;
}

.app-pager {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px 0 4px;
}
.app-pager-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #E2DED5;
  background: #FFFFFF;
  color: #1B2A4A;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-pager-btn:hover:not(:disabled) { border-color: #FF6B4A; color: #E0502F; }
.app-pager-btn:disabled { opacity: 0.3; cursor: default; }
.app-pager-count {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8A8578;
}

.app-gloss {
  cursor: pointer;
  position: relative;
  font-weight: 800;
  color: #E0502F;
}
.app-tip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #171717;
  color: #FFFFFF;
  font-family: 'Source Serif 4', serif;
  font-size: 13px;
  line-height: 1.4;
  padding: 9px 12px;
  border-radius: 6px;
  width: 200px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
  z-index: 5;
}
.app-tip b { font-weight: 700; }
.app-pos { display: inline-block; font-style: italic; opacity: 0.65; margin-left: 4px; }
.app-gloss.is-open .app-tip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }

.app-pullquote {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.35;
  color: #E0502F;
  border-left: 3px solid #FF6B4A;
  padding-left: 12px;
  margin: 6px 0 20px;
  break-inside: avoid;
}

.app-footer {
  flex-shrink: 0;
  text-align: center;
  padding: 9px 12px;
  background: #1B2A4A;
  color: rgba(255,255,255,0.65);
  font-family: 'Source Serif 4', serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
}
`;
