import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];

// Opens the clean, student-facing reading view as a standalone popup --
// matching the FORGE/ASCEND/Verb Tenses chrome-less window.open pattern.
// This page (ArticleReader) stays the teacher's reference copy, with the
// discussion guide and citations; the popup is what gets shared on screen.
// Portrait size is just a starting default -- the window is resizable, and
// the player itself reflows its columns/pagination to whatever size it's
// dragged to.
function openPlayer(slug, edition) {
  const w = 680;
  const h = 960;
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/articles/${slug}/player?edition=${edition}`,
    "sentencoArticlePlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function Gloss({ word, pos, def, glossKey, openKey, setOpenKey }) {
  const isOpen = openKey === glossKey;
  return (
    <span
      className={`ar-gloss ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenKey(isOpen ? null : glossKey);
      }}
    >
      {word}
      <span className="ar-tip">
        <b>{word}</b>
        <span className="ar-pos">{pos}</span>
        <br />
        {def}
      </span>
    </span>
  );
}

function Paragraph({ parts, blockIdx, openKey, setOpenKey, references, year, onCiteClick }) {
  return (
    <p>
      {parts.map((part, i) => {
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
          const ref = references[part.c - 1];
          if (!ref) return null;
          return (
            <span key={i} className="ar-cite" onClick={(e) => { e.stopPropagation(); onCiteClick(part.c); }}>
              ({ref.name}{year ? `, ${year}` : ""})
            </span>
          );
        }
        return <span key={i}>{part.t}</span>;
      })}
    </p>
  );
}

export default function ArticleReader() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const [searchParams, setSearchParams] = useSearchParams();
  const [edition, setEdition] = useState(() => {
    const fromUrl = searchParams.get("edition");
    return EDITION_KEYS.includes(fromUrl) ? fromUrl : "polished";
  });
  const [openKey, setOpenKey] = useState(null);

  function selectEdition(key) {
    setEdition(key);
    const next = new URLSearchParams(searchParams);
    next.set("edition", key);
    setSearchParams(next, { replace: true });
  }

  if (!article || !article.ready) {
    return (
      <div className="ar-shell">
        <style>{CSS}</style>
        <div className="ar-missing">
          <p>This article isn't published yet.</p>
        </div>
      </div>
    );
  }

  const ed = article.editions[edition];
  const publishedLabel = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })
    : null;
  const publishedYear = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`).getFullYear()
    : null;

  function scrollToRef(n) {
    const el = document.getElementById(`ar-ref-${n}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="ar-shell" onClick={() => setOpenKey(null)}>
      <style>{CSS}</style>

      <div className="ar-article">
        <div className="ar-hero">
          <div className="ar-hero-blob" />
          <div className="ar-masthead">
            <div className="ar-masthead-kicker-row">
              <span className="ar-masthead-rule" />
              <span className="ar-masthead-kicker">The Sentenco</span>
              <span className="ar-masthead-rule" />
            </div>
            <div className="ar-masthead-word">Gazette</div>
            <div className="ar-masthead-underline" />
            <div className="ar-masthead-tagline">News, Ideas &amp; Perspectives</div>
          </div>
        </div>

        <div className="ar-cover-card">
          <h1 className="ar-title">{article.title}</h1>

          <div className="ar-cover-art">
            {article.image ? <img src={article.image} alt="" /> : <span className="ar-cover-art-emoji">{article.emoji}</span>}
          </div>

          <p className="ar-dek">{article.dek}</p>

          <div className="ar-switch">
            {EDITION_KEYS.map((k) => (
              <button
                key={k}
                type="button"
                className={`ar-ed-btn ${edition === k ? "is-active" : ""}`}
                onClick={() => selectEdition(k)}
              >
                <span className="ar-ed-name">{article.editions[k].label.replace(/ Edition$/, "")}</span>
                <span className="ar-ed-range">{article.editions[k].range}</span>
              </button>
            ))}
          </div>
          <p className="ar-ed-hint">Same story, three reading levels. Switch editions to match your class.</p>
        </div>

        <div className="ar-body-card">
          <div className="ar-meta-row">
            <span>{article.topicTitle}</span>
            <span className="ar-dot">·</span>
            <span>{ed.readTime} · {ed.wordCount} words</span>
            {publishedLabel && <span className="ar-dot">·</span>}
            {publishedLabel && <span>Published {publishedLabel}</span>}
          </div>

          <button type="button" className="ar-present-btn" onClick={() => openPlayer(article.slug, edition)}>
            🖥️ Open Editorial View
          </button>

          <div className="ar-body">
            {ed.blocks.map((block, i) =>
              block.type === "quote" ? (
                <blockquote key={i} className="ar-pullquote">“{block.text}”</blockquote>
              ) : (
                <Paragraph
                  key={i}
                  parts={block.parts}
                  blockIdx={i}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                  references={article.references}
                  year={publishedYear}
                  onCiteClick={scrollToRef}
                />
              )
            )}

            <div className="ar-references">
              <div className="ar-refs-title">References</div>
              {article.references.map((r, i) => (
                <p className="ar-ref-row" id={`ar-ref-${i + 1}`} key={i}>
                  {r.name}.{publishedYear ? ` (${publishedYear}).` : ""} {r.headline}.
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="ar-teacher">
          <div className="ar-teacher-eyebrow">For the teacher</div>
          <h3 className="ar-teacher-title">Discussion guide</h3>
          {article.discussionGuide.map((item, i) => (
            <div className="ar-tq-item" key={i}>
              <p className="ar-tq-main"><span className="ar-tq-num">{i + 1}.</span><span>{item.q}</span></p>
              {item.follow.map((f, j) => (
                <p className="ar-tq-follow" key={j}>{f}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Playfair+Display:wght@700;900&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap');

.ar-shell {
  --ink: #1B2A4A;
  --paper: #FBF4F1;
  --card: #FFFFFF;
  --ink-soft: #4A5578;
  --muted: #7A84A0;
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --coral-pale: #FDECE5;
  --coral-soft: rgba(255,107,74,0.12);
  --navy-soft: rgba(27,42,74,0.07);
  --hair: rgba(27,42,74,0.12);
  --line: #EDE1DB;
  --content-w: min(92vw, 1200px);
  width: 100%;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  box-sizing: border-box;
}
.ar-shell * { box-sizing: border-box; }

.ar-missing { max-width: 640px; margin: 60px auto; text-align: center; color: var(--muted); font-family: 'Quicksand', sans-serif; }

.ar-hero {
  max-width: var(--content-w);
  margin: 0 auto 18px;
  background: var(--ink);
  border-radius: 22px;
  padding: clamp(24px, 3vw, 34px) 24px clamp(20px, 2.6vw, 28px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.ar-hero-blob {
  position: absolute;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: var(--coral);
  opacity: 0.16;
  top: -100px; right: -80px;
  pointer-events: none;
}
.ar-masthead { text-align: center; position: relative; }
.ar-masthead-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 3px; }
.ar-masthead-rule { flex: 0 1 56px; height: 1px; background: rgba(255,255,255,0.3); }
.ar-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #B9C3DC;
}
.ar-masthead-word {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(32px, 4.5vw, 46px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 1;
  margin: 2px 0 8px;
}
.ar-masthead-underline { width: clamp(110px, 16%, 170px); height: 3px; background: var(--coral); margin: 0 auto 8px; }
.ar-masthead-tagline {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #8894B5;
}

.ar-article { max-width: var(--content-w); margin: 0 auto; padding: 26px 24px 60px; }

.ar-cover-card, .ar-body-card {
  background: var(--card);
  border-radius: 18px;
  padding: clamp(22px, 2.8vw, 32px) clamp(20px, 2.6vw, 30px);
  box-shadow: 0 10px 26px rgba(27,42,74,0.08);
  margin-bottom: 18px;
}
.ar-cover-card { text-align: center; border-top: 4px solid var(--coral); }

.ar-title {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.22;
  margin: 0 auto 22px;
  max-width: 680px;
  text-align: center;
  text-wrap: balance;
}

.ar-cover-art {
  aspect-ratio: 3 / 2;
  max-height: 340px;
  max-width: 520px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--coral-pale) 0%, var(--paper) 100%);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 22px;
  overflow: hidden;
}
.ar-cover-art img { width: 100%; height: 100%; object-fit: contain; }
.ar-cover-art-emoji {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 10px 24px rgba(27,42,74,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 58px;
}

.ar-dek {
  font-family: 'Quicksand', sans-serif;
  font-size: 16.5px;
  color: var(--ink-soft);
  line-height: 1.5;
  margin: 0 auto 26px;
  max-width: 560px;
  text-align: center;
}

.ar-switch {
  display: flex;
  justify-content: center;
  gap: 4px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 4px;
  margin: 0 auto 8px;
  max-width: fit-content;
}
.ar-ed-btn {
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 18px;
  border-radius: 10px;
  transition: background .15s ease;
}
.ar-ed-btn:hover { background: var(--hair); }
.ar-ed-name { font-weight: 800; font-size: 13px; color: var(--ink-soft); }
.ar-ed-range { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; color: var(--muted); }
.ar-ed-btn.is-active { background: var(--coral); }
.ar-ed-btn.is-active .ar-ed-name { color: #fff; }
.ar-ed-btn.is-active .ar-ed-range { color: rgba(255,255,255,0.75); }
.ar-ed-hint { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--muted); text-align: center; margin: 0 0 18px; }

.ar-meta-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--muted);
  text-align: center;
  margin: 0 0 20px;
}
.ar-dot { color: var(--hair); }

.ar-present-btn {
  display: block;
  margin: 0 auto 34px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #FFFFFF;
  background: var(--coral);
  border: none;
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
}

.ar-body {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 18px;
  line-height: 1.72;
  color: var(--ink);
  text-align: justify;
  padding-top: 22px;
  border-top: 1px solid var(--hair);
}
.ar-body p { margin: 0 0 20px; }

.ar-gloss {
  cursor: pointer;
  position: relative;
  font-weight: 800;
}
.ar-tip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--ink);
  color: #FFFFFF;
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  line-height: 1.4;
  padding: 9px 12px;
  border-radius: 9px;
  width: 220px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
  z-index: 5;
  box-shadow: 0 10px 24px rgba(27,42,74,0.28);
}
.ar-tip b { font-weight: 800; }
.ar-pos { display: inline-block; font-style: italic; font-weight: 600; opacity: 0.65; margin-left: 4px; }
.ar-gloss.is-open .ar-tip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }

.ar-cite {
  font-family: 'Quicksand', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--coral-dark);
  cursor: pointer;
  white-space: nowrap;
  margin-left: 4px;
}

.ar-pullquote {
  font-family: 'Source Serif 4', Georgia, serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.45;
  color: var(--coral-dark);
  border-left: 3px solid var(--coral);
  padding: 2px 0 2px 20px;
  margin: 30px 0;
}

.ar-references { margin-top: 34px; padding-top: 20px; border-top: 1px solid var(--hair); font-family: 'Quicksand', sans-serif; }
.ar-refs-title { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 0 0 12px; }
.ar-ref-row {
  font-size: 13px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0 0 8px;
  padding-left: 20px;
  text-indent: -20px;
}

.ar-teacher {
  max-width: 100%;
  margin-top: 0;
  background: var(--coral-pale);
  border-left: 4px solid var(--coral);
  border-radius: 14px;
  padding: 20px 24px;
  font-family: 'Quicksand', sans-serif;
}
.ar-teacher-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-dark); margin-bottom: 4px; }
.ar-teacher-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; margin: 0 0 16px; color: var(--ink); }
.ar-tq-item { margin-bottom: 16px; }
.ar-tq-item:last-child { margin-bottom: 0; }
.ar-tq-main { display: flex; gap: 8px; font-weight: 700; font-size: 14.5px; line-height: 1.45; margin: 0 0 6px; }
.ar-tq-num { color: var(--coral-dark); flex-shrink: 0; }
.ar-tq-follow { font-size: 13px; color: var(--ink-soft); line-height: 1.4; padding-left: 22px; margin: 4px 0 0; position: relative; }
.ar-tq-follow::before { content: "↳"; color: var(--muted); position: absolute; left: 0; }

@media (max-width: 640px) {
  .ar-title { font-size: 26px; }
  .ar-article { padding: 20px 18px 40px; }
}
`;
