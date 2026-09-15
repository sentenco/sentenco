import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import defaultBook from "./storybookData";

// Page count per chapter varies by book -- Kids stories use 3 Build-a-Sentence
// items, Teens/Adults use 5 -- so the page list is derived from each chapter's
// actual buildSentence length rather than a fixed constant.
function getPageTypes(chapter) {
  // Chapters with no real image (every book except Books 1 and 2) skip the
  // intro page entirely -- with the image gone (see ChapterIntroPage) it was
  // just a bare "Chapter N" + title screen, and the Story page immediately
  // after already shows that same chapter number and title above the text.
  const types = chapter.image
    ? ["intro", "story", "questions", "truefalse"]
    : ["story", "questions", "truefalse"];
  chapter.buildSentence.forEach((_, i) => types.push(`build${i}`));
  types.push("mysentence");
  return types;
}
const PAGE_LABELS = {
  intro: "Chapter",
  story: "Story",
  questions: "Questions",
  truefalse: "True or False",
  build0: "Build-a-Sentence",
  build1: "Build-a-Sentence",
  build2: "Build-a-Sentence",
  build3: "Build-a-Sentence",
  build4: "Build-a-Sentence",
  mysentence: "My Sentence",
};

// Card-header stage label -- pairs the brand with whichever page/slide type
// is currently showing, using the same vocabulary as PAGE_LABELS above.
function getStageLabel(view, pageType) {
  if (view === "toc") return "Contents";
  if (view === "chapter") return PAGE_LABELS[pageType] || "";
  return "";
}

function BookHeader({ stage }) {
  return (
    <div className="sb-book-header">
      <span className="sb-book-brand">
        <span className="sb-book-brand-chip">
          <img src="/logo-sentivo.png" alt="" className="sb-book-brand-logo" />
        </span>
        Sentivo
      </span>
      {stage && <span className="sb-book-stage">{stage}</span>}
    </div>
  );
}

// A tile's id is always its real target position (assigned once when the
// tray is built from words.map((text, i) => ({ text, id: i }))), so a run
// of built[i].id === i is a genuinely correct prefix -- reliable even when
// the sentence repeats a word, unlike comparing built[i].text directly.
function correctPrefixLength(built) {
  let i = 0;
  while (i < built.length && built[i].id === i) i++;
  return i;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ChapterIntroPage({ chapter, imageAspect }) {
  return (
    <div className="sb-page sb-page--intro">
      {chapter.image && (
        <div className="sb-intro-image" style={imageAspect ? { aspectRatio: imageAspect } : undefined}>
          <img src={chapter.image} alt={chapter.title} />
        </div>
      )}
      <span className="sb-chapter-num">Chapter {chapter.number}</span>
      <h2 className="sb-chapter-title">{chapter.title}</h2>
    </div>
  );
}

function StoryPage({ chapter }) {
  return (
    <div className="sb-page sb-page--story">
      <span className="sb-chapter-num">Chapter {chapter.number}</span>
      <h2 className="sb-chapter-title">{chapter.title}</h2>
      <p className="sb-story-text">{chapter.story}</p>
    </div>
  );
}

// Questions are plain strings in every book authored so far -- support an
// optional { text, answer } shape too, so a future book can add an answer
// without a data migration, and the "Show answer" button just doesn't
// render for a question that doesn't have one.
function QuestionsPage({ chapter }) {
  const [revealed, setRevealed] = useState(() => new Set());

  function toggle(i) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">Comprehension Questions</h3>
      <p className="sb-page-hint">Talk about the story with your teacher.</p>
      <div className="sb-qcards">
        {chapter.questions.map((q, i) => {
          const text = typeof q === "string" ? q : q.text;
          const answer = typeof q === "string" ? undefined : q.answer;
          const isOpen = revealed.has(i);
          return (
            <div key={i} className="sb-qcard">
              <div className="sb-qcard-top">
                <span className="sb-qnum">{i + 1}</span>
                <span className="sb-qtext">{text}</span>
                {answer && (
                  <button type="button" className="sb-qreveal-btn" onClick={() => toggle(i)}>
                    {isOpen ? "Hide answer" : "Show answer"}
                  </button>
                )}
              </div>
              {answer && isOpen && <p className="sb-qanswer">{answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TrueFalsePage({ chapter }) {
  const [picks, setPicks] = useState({});

  function pick(i, value) {
    setPicks((prev) => ({ ...prev, [i]: value }));
  }

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">True or False</h3>
      <div className="sb-tf-grid">
        {chapter.trueFalse.map((item, i) => {
          const picked = picks[i];
          const isCorrect = picked !== undefined && picked === item.answer;
          const isWrong = picked !== undefined && picked !== item.answer;
          return (
            <div key={i} className={`sb-tf-card ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}`}>
              <span className="sb-tf-text">{item.text}</span>
              <div className="sb-tf-buttons">
                <button
                  type="button"
                  className={`sb-tf-btn ${picked === true ? "is-picked" : ""}`}
                  onClick={() => pick(i, true)}
                >
                  True
                </button>
                <button
                  type="button"
                  className={`sb-tf-btn ${picked === false ? "is-picked" : ""}`}
                  onClick={() => pick(i, false)}
                >
                  False
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BuildSentencePage({ chapter, index }) {
  const sentence = chapter.buildSentence[index];
  const words = useMemo(() => sentence.target.split(" "), [sentence]);

  const [tray, setTray] = useState(() => shuffle(words.map((text, i) => ({ text, id: i }))));
  const [built, setBuilt] = useState([]);
  const [copied, setCopied] = useState(false);
  const [hintedId, setHintedId] = useState(null);
  // popup: { kind: "hint", word } | { kind: "check", correct: true }
  //       | { kind: "check", correct: false, correctText, keptBuilt, wrongTail }
  const [popup, setPopup] = useState(null);

  const correctLen = correctPrefixLength(built);
  const isComplete = built.length === words.length && correctLen === words.length;
  const isWrong = popup?.kind === "check" && !popup.correct && popup.wrongTail.length > 0;

  async function copySentence() {
    try {
      await navigator.clipboard.writeText(built.map((w) => w.text).join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable -- silently ignore, teacher can select+copy manually
    }
  }

  function tapTray(word) {
    setTray((prev) => prev.filter((w) => w.id !== word.id));
    setBuilt((prev) => [...prev, word]);
    if (hintedId === word.id) setHintedId(null);
  }

  function tapBuilt(word) {
    setBuilt((prev) => prev.filter((w) => w.id !== word.id));
    setTray((prev) => [...prev, word]);
  }

  function reset() {
    setTray(shuffle(words.map((text, i) => ({ text, id: i }))));
    setBuilt([]);
    setHintedId(null);
    setPopup(null);
  }

  // Hint trims off anything the student built out of order, then tells the
  // student (via popup) which word comes next -- it doesn't place it for
  // them, they still have to find and tap that word themselves. The tile
  // gets a highlight in the tray as a visual assist.
  function giveHint() {
    if (correctLen >= words.length) return;
    const wrongTail = built.slice(correctLen);
    const keptBuilt = built.slice(0, correctLen);
    const nextId = correctLen;
    const hintTile = wrongTail.find((w) => w.id === nextId) || tray.find((w) => w.id === nextId);
    if (!hintTile) return;
    setBuilt(keptBuilt);
    setTray((prev) => {
      const withoutHintTile = prev.filter((w) => w.id !== nextId);
      const returningWrong = wrongTail.filter((w) => w.id !== nextId);
      return [...withoutHintTile, ...returningWrong, hintTile];
    });
    setHintedId(nextId);
    setPopup({ kind: "hint", word: hintTile.text });
  }

  // Check shows the verdict first; the wrong tail is only actually removed
  // once the student closes the popup, so they see the popup as the
  // moment their mistake gets cleared, not something that already
  // happened underneath it.
  function handleCheck() {
    if (isComplete) {
      setPopup({ kind: "check", correct: true });
      return;
    }
    const keptBuilt = built.slice(0, correctLen);
    const wrongTail = built.slice(correctLen);
    setPopup({
      kind: "check",
      correct: false,
      correctText: keptBuilt.map((w) => w.text).join(" "),
      keptBuilt,
      wrongTail,
    });
  }

  function closePopup() {
    if (popup?.kind === "check" && !popup.correct) {
      setBuilt(popup.keptBuilt);
      setTray((prev) => [...prev, ...popup.wrongTail]);
    }
    setPopup(null);
  }

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">
        Build-a-Sentence <span className="sb-page-title-sub">({index + 1} of {chapter.buildSentence.length})</span>
      </h3>
      <p className="sb-page-hint">Tap the words in the correct order to build a sentence from the story.</p>
      <div className={`sb-build-row ${isComplete ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}`}>
        {built.length === 0 && <span className="sb-build-empty">Tap words below to start building…</span>}
        {built.map((w) => (
          <button type="button" key={w.id} className="sb-word-chip sb-word-chip--built" onClick={() => tapBuilt(w)}>
            {w.text}
          </button>
        ))}
        <button
          type="button"
          className="sb-build-copy-btn"
          disabled={built.length === 0}
          onClick={copySentence}
          title="Copy sentence"
          aria-label="Copy sentence"
        >
          {copied ? "✓" : "⧉"}
        </button>
      </div>
      <div className="sb-bank-label">🧺 Word bank</div>
      <div className="sb-word-tray">
        {tray.map((w) => (
          <button
            type="button"
            key={w.id}
            className={`sb-word-chip ${w.id === hintedId ? "sb-word-chip--hinted" : ""}`}
            onClick={() => tapTray(w)}
          >
            {w.text}
          </button>
        ))}
      </div>
      <div className="sb-build-check-row">
        <button type="button" className="sb-check-btn" onClick={handleCheck}>
          ✓ Check
        </button>
        <button type="button" className="sb-hint-btn" disabled={correctLen >= words.length} onClick={giveHint}>
          💡 Hint
        </button>
        <button type="button" className="sb-retry-btn" disabled={built.length === 0} onClick={reset}>
          ↻ Restart
        </button>
      </div>

      {popup && (
        <div className="sb-popup-overlay">
          <div className="sb-popup-card">
            {popup.kind === "hint" && (
              <>
                <span className="sb-popup-icon">💡</span>
                <h4 className="sb-popup-title">Hint</h4>
                <p className="sb-popup-text">The next word is:</p>
                <span className="sb-popup-word">{popup.word}</span>
              </>
            )}
            {popup.kind === "check" && popup.correct && (
              <>
                <span className="sb-popup-icon">🎉</span>
                <h4 className="sb-popup-title">Perfect!</h4>
                <p className="sb-popup-text">That's the sentence exactly right.</p>
              </>
            )}
            {popup.kind === "check" && !popup.correct && (
              <>
                <span className="sb-popup-icon">🤔</span>
                <h4 className="sb-popup-title">Not quite</h4>
                <p className="sb-popup-text">
                  {popup.correctText
                    ? <>This much of your answer is correct:<br /><span className="sb-popup-word">{popup.correctText}</span></>
                    : "You haven't placed any words yet."}
                </p>
              </>
            )}
            <button type="button" className="sb-popup-ok-btn" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

function MySentencePage({ chapter }) {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  async function copySentence() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable -- silently ignore, teacher can select+copy manually
    }
  }

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">My Sentence</h3>
      <p className="sb-page-hint">{chapter.mySentencePrompt}</p>
      <p className="sb-example">
        <em>Example: {chapter.mySentenceExample}</em>
      </p>
      <textarea
        className="sb-my-sentence-input"
        placeholder="Write your sentence here…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
      />
      <div className="sb-my-sentence-foot">
        <span className="sb-my-sentence-note">For the teacher: copy the student's sentence to save or check it.</span>
        <button type="button" className="sb-copy-btn" disabled={!value.trim()} onClick={copySentence}>
          {copied ? "✓ Copied" : "⧉ Copy sentence"}
        </button>
      </div>
    </div>
  );
}

function renderPage(pageType, chapter, imageAspect) {
  switch (pageType) {
    case "intro":
      return <ChapterIntroPage chapter={chapter} imageAspect={imageAspect} />;
    case "story":
      return <StoryPage chapter={chapter} />;
    case "questions":
      return <QuestionsPage chapter={chapter} />;
    case "truefalse":
      return <TrueFalsePage chapter={chapter} />;
    case "build0":
      return <BuildSentencePage chapter={chapter} index={0} />;
    case "build1":
      return <BuildSentencePage chapter={chapter} index={1} />;
    case "build2":
      return <BuildSentencePage chapter={chapter} index={2} />;
    case "build3":
      return <BuildSentencePage chapter={chapter} index={3} />;
    case "build4":
      return <BuildSentencePage chapter={chapter} index={4} />;
    case "mysentence":
      return <MySentencePage chapter={chapter} />;
    default:
      return null;
  }
}

export default function StoryBook({ book = defaultBook }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const CHAPTERS = book.chapters;

  // Restore whichever chapter/page a refresh finds in the URL, instead of
  // always bouncing back to the cover -- see the sync effect below.
  const [view, setView] = useState(() => {
    const v = searchParams.get("view");
    return v === "toc" || v === "chapter" ? v : "cover";
  }); // cover | toc | chapter
  const [chapterIdx, setChapterIdx] = useState(() => {
    const n = Number(searchParams.get("ch"));
    return Number.isInteger(n) && n >= 0 && n < CHAPTERS.length ? n : 0;
  });
  const [pageIdx, setPageIdx] = useState(() => {
    const n = Number(searchParams.get("pg"));
    return Number.isInteger(n) && n >= 0 ? n : 0;
  });

  const chapter = CHAPTERS[chapterIdx];
  const pageTypes = useMemo(() => getPageTypes(chapter), [chapter]);
  const pageType = pageTypes[pageIdx];
  const totalPages = pageTypes.length;
  const isFirstPage = chapterIdx === 0 && pageIdx === 0;
  const isLastPage = chapterIdx === CHAPTERS.length - 1 && pageIdx === totalPages - 1;

  // Real book-style page numbers, counted across the whole book (not reset
  // per chapter) so the Table of Contents can say which page a chapter
  // actually starts on, the same way a printed book's contents page does.
  const chapterPageCounts = useMemo(() => CHAPTERS.map((c) => getPageTypes(c).length), [CHAPTERS]);
  const bookTotalPages = useMemo(() => chapterPageCounts.reduce((a, b) => a + b, 0), [chapterPageCounts]);
  const chapterStartPage = useMemo(() => {
    const starts = [];
    let running = 1;
    chapterPageCounts.forEach((count) => {
      starts.push(running);
      running += count;
    });
    return starts;
  }, [chapterPageCounts]);
  const currentBookPage = chapterStartPage[chapterIdx] + pageIdx;

  // Mirror view/chapter/page into the URL so a refresh lands back on the
  // same page instead of resetting to the cover.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    next.set("view", view);
    if (view === "chapter") {
      next.set("ch", String(chapterIdx));
      next.set("pg", String(pageIdx));
    } else {
      next.delete("ch");
      next.delete("pg");
    }
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, chapterIdx, pageIdx]);

  function openChapter(idx) {
    setChapterIdx(idx);
    setPageIdx(0);
    setView("chapter");
  }

  function goNext() {
    if (pageIdx < totalPages - 1) {
      setPageIdx((p) => p + 1);
    } else if (chapterIdx < CHAPTERS.length - 1) {
      setChapterIdx((c) => c + 1);
      setPageIdx(0);
    }
  }

  function goPrev() {
    if (pageIdx > 0) {
      setPageIdx((p) => p - 1);
    } else if (chapterIdx > 0) {
      setChapterIdx((c) => c - 1);
      setPageIdx(totalPages - 1);
    }
  }

  return (
    <div className="sb-shell">
      <style>{CSS}</style>
      <header className="sb-topbar">
        <button type="button" className="sb-nav-back" onClick={() => navigate("/library")} title="Back to Library">
          ‹ Library
        </button>
        <button type="button" className="sb-topbar-title" onClick={() => setView("cover")}>
          {book.title}
        </button>
        <button type="button" className="sb-toc-link" onClick={() => setView("toc")}>
          Contents
        </button>
      </header>

      <div className="sb-stage">
        {view === "cover" && (
          <button
            type="button"
            className="sb-cover-card"
            onClick={() => setView("toc")}
          >
            {book.coverImage ? (
              <img className="sb-cover-card-img" src={book.coverImage} alt={book.title} />
            ) : (
              <div className="sb-cover-card-ph">
                <ImagePlaceholder note={book.coverImageNote} />
              </div>
            )}
            <div className="sb-cover-card-scrim" />
            <h1 className="sb-cover-card-title">{book.title}</h1>
          </button>
        )}

        {view === "toc" && (
          <div className="sb-book sb-toc">
            <BookHeader stage={getStageLabel("toc")} />
            <h2 className="sb-toc-heading">Table of Contents</h2>
            <ol className="sb-toc-list">
              {CHAPTERS.map((c) => {
                const idx = c.number - 1;
                return (
                  <li key={c.number} className="sb-toc-item">
                    <button type="button" className="sb-toc-btn" onClick={() => openChapter(idx)}>
                      <span className="sb-toc-num">{c.number}</span>
                      <span className="sb-toc-title">{c.title}</span>
                      <span className="sb-toc-page">Page {chapterStartPage[idx]}</span>
                      <span className="sb-toc-arrow">→</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="sb-toc-footer">{book.title}</div>
          </div>
        )}

        {view === "chapter" && (
          <div className="sb-book">
            <BookHeader stage={getStageLabel("chapter", pageType)} />
            <div className="sb-page-header">
              <span className="sb-page-header-counter">Chapter {chapter.number} of {CHAPTERS.length}</span>
              <span className="sb-page-header-pagenum">Page {currentBookPage} of {bookTotalPages}</span>
            </div>
            <div className="sb-progress-track">
              <div
                className="sb-progress-fill"
                style={{ width: `${((pageIdx + 1) / totalPages) * 100}%` }}
              />
            </div>
            <div className="sb-page-body" key={`${chapterIdx}-${pageIdx}`}>
              {renderPage(pageType, chapter, book.chapterImageAspect)}
            </div>
            <div className="sb-nav-row">
              <button type="button" className="sb-nav-btn" onClick={goPrev} disabled={isFirstPage}>
                ← Previous
              </button>
              <div className="sb-nav-dots">
                {pageTypes.map((_, i) => (
                  <span key={i} className={`sb-nav-dot ${i === pageIdx ? "is-active" : ""}`} />
                ))}
              </div>
              <button type="button" className="sb-nav-btn sb-nav-btn--primary" onClick={goNext} disabled={isLastPage}>
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.sb-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.sb-shell * { box-sizing: border-box; }

.sb-topbar {
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.sb-nav-back {
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #7C8598;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sb-nav-back:hover { color: #1B2A4A; }
.sb-toc-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.sb-toc-link { background: #D85A30; color: #fff; border-color: #D85A30; }
.sb-topbar-title {
  background: none;
  border: none;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #1B2A4A;
  text-align: center;
  flex: 1;
  padding: 0 16px;
  cursor: pointer;
}
.sb-topbar-title:hover { text-decoration: underline; }

.sb-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 36px 24px 60px;
}

/* ── Book card header: brand on the left, current page/stage on the
   right. First thing inside the card so the Sentivo identity travels
   with the book rather than living in the outer topbar. ── */
.sb-book-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -30px -36px 18px;
  padding: 16px 36px;
  background: #1B2A4A;
  flex-shrink: 0;
}
.sb-book-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}
.sb-book-brand-chip {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  flex-shrink: 0;
}
.sb-book-brand-logo { height: 15px; width: auto; display: block; }
.sb-book-stage {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
}

/* Landscape book card -- every page (cover, contents, chapter pages)
   shares this exact size so the book never resizes as you flip through it,
   and is tall enough that a chapter's content fits without scrolling
   (overflow is hidden, not auto -- content is sized to fit, not clipped
   away, see the page-type rules below). */
.sb-book {
  width: 860px;
  max-width: 100%;
  height: 820px;
  background: #FFFDF7;
  border-radius: 18px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  padding: 30px 36px;
  overflow: hidden;
  animation: sb-page-in 0.28s ease;
}
@keyframes sb-page-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Cover: its own portrait book jacket, separate from the landscape
   .sb-book frame used by Contents/chapter pages -- full-bleed art with the
   title stamped over a bottom scrim, like printed cover type, rather than
   sitting beside the art. Sized to the art's native 2:3 ratio so the whole
   illustration shows, nothing cropped. ── */
.sb-cover-card {
  position: relative;
  width: 440px;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 18px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  overflow: hidden;
  padding: 0;
  background: #FFFDF7;
  display: block;
  cursor: pointer;
  font: inherit;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  animation: sb-page-in 0.28s ease;
}
.sb-cover-card:hover { transform: translateY(-2px); box-shadow: 0 26px 56px rgba(0,0,0,0.24); }
.sb-cover-card-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; display: block; }
.sb-cover-card-ph { position: absolute; inset: 0; }
.sb-cover-card-scrim {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 42%;
  background: linear-gradient(to top, rgba(14,18,32,0.88) 0%, rgba(14,18,32,0.5) 55%, rgba(14,18,32,0) 100%);
}
.sb-cover-card-title {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 26px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  margin: 0;
  text-align: left;
}

/* ── Table of contents ── */
.sb-toc-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #1B2A4A;
  margin: 0 0 10px;
}
.sb-toc-list { flex: 1; min-height: 0; overflow: hidden; list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.sb-toc-footer {
  flex-shrink: 0;
  margin: 18px -36px -30px;
  padding: 14px 36px;
  background: #1B2A4A;
  color: rgba(255,255,255,0.6);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.sb-toc-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #FAF7EF;
  border: none;
  border-radius: 10px;
  padding: 8px 13px;
  cursor: pointer;
  text-align: left;
  transition: background 0.12s ease, transform 0.12s ease;
}
.sb-toc-btn:hover { background: #FAECE7; transform: translateX(2px); }
.sb-toc-num {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: #D85A30;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
}
.sb-toc-title {
  flex: 1;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1B2A4A;
}
.sb-toc-page {
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #94A0B8;
}
.sb-toc-arrow { color: #D85A30; font-weight: 700; }

/* ── Chapter page chrome ── */
.sb-page-header { display: flex; align-items: center; justify-content: space-between; }
.sb-page-header-counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #94A0B8;
}
.sb-page-header-pagenum {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #D85A30;
}
.sb-progress-track { height: 3px; background: #EFEAE0; border-radius: 999px; margin: 9px 0 18px; overflow: hidden; flex-shrink: 0; }
.sb-progress-fill { height: 100%; background: #D85A30; transition: width 0.2s ease; }

.sb-page-body { flex: 1; min-height: 0; overflow: hidden; }
.sb-page { position: relative; display: flex; flex-direction: column; gap: 10px; }
.sb-page-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 23px; color: #1B2A4A; margin: 0; }
.sb-page-title-sub { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #94A0B8; }
.sb-page-hint { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 16px; color: #7C8598; margin: -4px 0 4px; }

/* ── Chapter intro: full-page image + title, nothing else. Container is
   square to match the source art's native 1:1 ratio -- nothing cropped. ── */
.sb-page--intro { flex: 1; min-height: 0; align-items: center; justify-content: center; text-align: center; gap: 8px; }
.sb-intro-image { height: 480px; width: auto; max-width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; margin: 0 auto 8px; }
.sb-intro-image .img-ph { border-radius: 12px; }
.sb-intro-image img { width: 100%; height: 100%; object-fit: contain; display: block; }
.sb-page--intro .sb-chapter-title { text-align: center; }

/* ── Story: centered in the frame instead of pinned to the top, so a
   short chapter doesn't read as floating above empty space. Kept simple
   on purpose -- no image, just the text. ── */
.sb-page--story { flex: 1; min-height: 0; justify-content: center; align-items: center; text-align: center; }
.sb-page--story .sb-chapter-title { text-align: center; }
.sb-page--story .sb-story-text { max-width: 640px; text-align: justify; }

.sb-chapter-num {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #D85A30;
}
.sb-chapter-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 34px; color: #1B2A4A; margin: 3px 0 12px; }
.sb-story-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 1.75;
  color: #1B2A4A;
  margin: 0;
  text-align: justify;
  text-indent: 32px;
}

/* ── Questions ── */
.sb-qcards { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 16px; justify-content: center; overflow: hidden; }
.sb-qcard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #FAF7EF;
  border-left: 5px solid #D85A30;
  border-radius: 14px;
  padding: 16px 20px;
}
.sb-qcard-top { display: flex; align-items: center; gap: 14px; }
.sb-qnum {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FFF6E0;
  color: #A9720C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
}
.sb-qtext { flex: 1; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 17px; color: #1B2A4A; line-height: 1.4; }
.sb-qreveal-btn {
  flex-shrink: 0;
  background: #fff;
  color: #D85A30;
  border: 2px solid #F2D2C4;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.sb-qreveal-btn:hover { background: #FDECE5; }
.sb-qanswer {
  margin: 0 0 0 44px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #2C6B4F;
  background: #E4F6EC;
  border-radius: 10px;
  padding: 9px 14px;
}

/* ── True/False: a grid instead of one tall stacked column, so 4-5 items
   use the width of the page too, not just its height. An odd item count
   (Kids-track books use 3) just leaves the grid's last cell empty, which
   is fine. ── */
.sb-tf-grid { flex: 1; min-height: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-content: center; overflow: hidden; }
.sb-tf-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  background: #FAF7EF;
  border-radius: 14px;
  padding: 18px 18px 16px;
  transition: background 0.15s ease;
}
.sb-tf-card.is-correct { background: #E4F6EC; }
.sb-tf-card.is-wrong { background: #FDEBEF; }
.sb-tf-text { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 17px; color: #1B2A4A; line-height: 1.4; }
.sb-tf-buttons { display: flex; gap: 8px; flex-shrink: 0; }
.sb-tf-btn {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 7px 17px;
  border-radius: 999px;
  cursor: pointer;
}
.sb-tf-btn.is-picked { background: #D85A30; border-color: #D85A30; color: #fff; }

/* ── Build-a-sentence ── */
.sb-build-row {
  position: relative;
  min-height: 44px;
  border: 3px dashed #DADCE3;
  border-radius: 12px;
  padding: 8px 40px 8px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.sb-build-row.is-correct { border-color: #3B9A6B; border-style: solid; background: #E4F6EC; }
.sb-build-row.is-wrong { border-color: #E0637A; border-style: solid; background: #FDEBEF; }
.sb-build-copy-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #fff;
  border: 1.5px solid #DADCE3;
  color: #1B2A4A;
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}
.sb-build-copy-btn:disabled { opacity: 0.35; cursor: default; }
.sb-build-empty { font-family: 'Quicksand', sans-serif; font-size: 15px; color: #C2C6D2; }
.sb-bank-label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 20px 0 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94A0B8;
}
.sb-word-tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 34px; justify-content: center; background: #FAF7EF; border-radius: 14px; padding: 16px; }
.sb-word-chip {
  background: #fff;
  border: 2px solid #EAE6DC;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 999px;
  cursor: pointer;
}
.sb-word-chip--built { background: #D85A30; border-color: #D85A30; color: #fff; }
.sb-build-check-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 2px; }
.sb-check-btn {
  background: #D85A30;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 3px 0 #A8431F;
}
.sb-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #A8431F; }
.sb-check-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 0 3px 0 #A8431F; }
.sb-build-feedback { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; }
.sb-build-feedback.is-good { color: #2C6B4F; }
.sb-build-feedback.is-retry { color: #B03A52; }
.sb-retry-btn {
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #DADCE3;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
}
.sb-retry-btn:disabled { opacity: 0.35; cursor: default; }
.sb-hint-btn {
  background: #FFF6E0;
  color: #A9720C;
  border: 2px solid #F2D48A;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
}
.sb-hint-btn:hover:not(:disabled) { background: #FCEFC7; }
.sb-hint-btn:disabled { opacity: 0.35; cursor: default; }

/* Highlights the tray tile Hint revealed, so the student can find it. */
.sb-word-chip--hinted {
  border-color: #D85A30;
  box-shadow: 0 0 0 3px rgba(216,90,48,0.25);
  animation: sb-hint-pulse 1s ease-in-out infinite;
}
@keyframes sb-hint-pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(216,90,48,0.25); }
  50% { box-shadow: 0 0 0 6px rgba(216,90,48,0.05); }
}
@media (prefers-reduced-motion: reduce) {
  .sb-word-chip--hinted { animation: none; }
}

/* ── Check/Hint popup ── */
.sb-popup-overlay {
  position: fixed;
  inset: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 20;
  animation: sb-page-in 0.15s ease;
}
.sb-popup-card {
  background: #FFFDF7;
  border: 3px solid #1B2A4A;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  padding: 26px 30px;
  max-width: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}
.sb-popup-icon { font-size: 32px; line-height: 1; }
.sb-popup-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 20px; color: #1B2A4A; margin: 0; }
.sb-popup-text { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #7C8598; margin: 0; line-height: 1.5; }
.sb-popup-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: #D85A30; }
.sb-popup-ok-btn {
  margin-top: 6px;
  background: #D85A30;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 10px 30px;
  cursor: pointer;
  box-shadow: 0 3px 0 #A8431F;
}
.sb-popup-ok-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #A8431F; }

/* ── My Sentence ── */
.sb-example { font-family: 'Quicksand', sans-serif; font-size: 15px; color: #94A0B8; margin: 0; }
.sb-my-sentence-input {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: #1B2A4A;
  border: 2px solid #EAE6DC;
  border-radius: 12px;
  padding: 12px 14px;
  resize: none;
  outline: none;
}
.sb-my-sentence-input:focus { border-color: #D85A30; }
.sb-my-sentence-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 2px; }
.sb-my-sentence-note { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #94A0B8; }
.sb-copy-btn {
  flex-shrink: 0;
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #DADCE3;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
}
.sb-copy-btn:disabled { opacity: 0.4; cursor: default; }

/* ── Nav row: a navy footer bar bled to the card's true edges (same
   negative-margin trick as .sb-book-header), matching the header at the
   top of every page. ── */
.sb-nav-row {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px -36px -30px;
  padding: 16px 36px;
  background: #1B2A4A;
}
.sb-nav-btn {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.4);
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  padding: 9px 17px;
  cursor: pointer;
}
.sb-nav-btn--primary { background: #D85A30; border-color: #D85A30; color: #fff; }
.sb-nav-btn:disabled { opacity: 0.35; cursor: default; }
.sb-nav-dots { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; }
.sb-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: rgba(255,255,255,0.25); }
.sb-nav-dot.is-active { width: 14px; background: #D85A30; }

@media (max-width: 520px) {
  .sb-book { padding: 22px 18px; }
  .sb-book-header { margin: -22px -18px 14px; padding: 12px 18px; }
  .sb-nav-row { margin: 18px -18px -22px; padding: 14px 18px; }
  .sb-toc-footer { margin: 18px -18px -22px; padding: 12px 18px; }
}
`;
