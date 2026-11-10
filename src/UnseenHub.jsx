import { useEffect, useMemo, useRef, useState } from "react";
import { UNSEEN_SHELVES, buildUnseenHubLessons } from "./unseenHubData.js";
import { openCustomLessonPopup } from "./customLessonsRegistry";
import "./unseenHub.css";

// 12 tiles a page on a full-size window (three or four tiles per row fill it evenly), 10 on a half-size window or smaller.
function usePageSize() {
  const pick = () => (typeof window !== "undefined" && window.innerWidth >= 1100 ? 12 : 10);
  const [n, setN] = useState(pick);
  useEffect(() => {
    const on = () => setN(pick());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return n;
}
const DECK_COLOR = { all: "#FFFFFF", body: "#FF9DB0", nature: "#7BE3AA", tech: "#8FBBFF", lang: "#FFD25E", space: "#B7A6FF", mma: "#FFA45C", safety: "#5CD6E6", money: "#C6E75F", mind: "#EBA6F2", history: "#E5BE8E", sports: "#FF8266", psych: "#2FC4B2", kids: "#6FD3FF" };

// The Unseen Reading room: topic tiles, each showing its pair of texts.
// `canOpen(slug)` limits the list to lessons this person may open.
export default function UnseenHub({ canOpen }) {
  const [aud, setAud] = useState("older"); // older = Teens and Adults (the topic shelves), kids = the Kids shelf
  const [shelf, setShelf] = useState("all");
  const [q, setQ] = useState("");
  const [peek, setPeek] = useState({});
  const [popped, setPopped] = useState(null);
  const [start, setStart] = useState(0); // index of the first lesson on screen
  const size = usePageSize();
  const tabsRef = useRef(null);

  // On a narrow screen the tabs scroll sideways; keep the chosen one in view.
  useEffect(() => {
    const box = tabsRef.current;
    const on = box?.querySelector('[aria-pressed="true"]');
    if (box && on) box.scrollTo({ left: on.offsetLeft - (box.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
  }, [shelf]);

  const all = useMemo(() => {
    const order = new Map(UNSEEN_SHELVES.map((s, i) => [s.id, i]));
    return buildUnseenHubLessons()
      .filter((l) => canOpen(l.slug))
      .map((l, i) => ({ l, i }))
      .sort((x, y) => order.get(x.l.shelf) - order.get(y.l.shelf) || x.i - y.i)
      .map((x) => x.l);
  }, [canOpen]);

  const forAud = (l) => (aud === "kids") === (l.shelf === "kids");
  const mine = all.filter(forAud);
  const kidsCount = all.filter((l) => l.shelf === "kids").length;
  const needle = q.trim().toLowerCase();
  const list = mine.filter((l) => {
    if (shelf !== "all" && l.shelf !== shelf) return false;
    if (!needle) return true;
    return [l.title, l.a, l.b, l.link, ...(l.wordsA || []), ...(l.wordsB || [])].join(" ").toLowerCase().includes(needle);
  });
  const shelfName = (id) => UNSEEN_SHELVES.find((s) => s.id === id)?.name || "";

  // A page at a time (12 on a full window, 10 on a half window). A new topic or a new search starts again on page 1.
  const pages = Math.max(1, Math.ceil(list.length / size));
  const here = Math.min(Math.floor(start / size) + 1, pages);
  const shown = list.slice((here - 1) * size, here * size);
  const skipReset = useRef(false);
  useEffect(() => { if (skipReset.current) { skipReset.current = false; return; } setStart(0); }, [shelf, q, aud]);
  const gridRef = useRef(null);
  function goTo(n) {
    setStart((n - 1) * size);
    setTimeout(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }

  function surprise() {
    if (!mine.length) return;
    if (shelf !== "all" || q) skipReset.current = true;
    setShelf("all"); setQ("");
    const idx = Math.floor(Math.random() * mine.length);
    const pick = mine[idx];
    setStart(Math.floor(idx / size) * size);
    setPopped(null);
    setTimeout(() => {
      setPopped(pick.part);
      document.getElementById(`uh-p${pick.part}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 30);
  }

  return (
    <div className="uh">
      {kidsCount > 0 && (
        <div className="uh-aud" role="group" aria-label="Who the texts are for">
          <button type="button" data-a="older" aria-pressed={aud === "older"} onClick={() => { setAud("older"); setShelf("all"); }}>Teens and Adults<i>{all.length - kidsCount}</i></button>
          <button type="button" data-a="kids" aria-pressed={aud === "kids"} onClick={() => { setAud("kids"); setShelf("all"); }}>Kids<i>{kidsCount}</i></button>
        </div>
      )}
      <div className="uh-deck" style={{ "--cur": aud === "kids" ? DECK_COLOR.kids : DECK_COLOR[shelf] }}>
        {aud === "older" && <div className="uh-tabs" role="group" aria-label="Topics" ref={tabsRef}>
          {[{ id: "all", name: "Everything" }, ...UNSEEN_SHELVES.filter((s) => s.id !== "kids")].map((s) => {
            const n = s.id === "all" ? mine.length : mine.filter((l) => l.shelf === s.id).length;
            if (s.id !== "all" && n === 0) return null;
            return (
              <button key={s.id} type="button" className="uh-tab" data-s={s.id} aria-pressed={shelf === s.id} onClick={() => setShelf(s.id)}>
                {s.short || s.name}<i>{n}</i>
              </button>
            );
          })}
        </div>}
        <div className="uh-panel">
          <label className="uh-search">
            <span className="uh-sr">Search Unseen Reading</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={aud === "kids" ? "Search a topic or a word, like sharks or robots" : "Search a topic or a word, like wolves or jet lag"} autoComplete="off" />
          </label>
          <button type="button" className="uh-big" onClick={surprise}>Surprise me</button>
        </div>
      </div>
      {aud === "kids" && <p className="uh-kids-note">Short texts with easy words for children before their teens: five questions a text, then ten words to match.</p>}

      <div className="uh-grid" ref={gridRef}>
        {list.length === 0 && <div className="uh-empty">Nothing matches that. Try “sleep” or “plant”.</div>}
        {shown.map((l) => (
          <article key={l.part} id={`uh-p${l.part}`} className={`uh-tile uh-c-${l.shelf} ${popped === l.part ? "is-pop" : ""}`} onAnimationEnd={() => setPopped(null)}>
            <div className="uh-top">
              <span className="uh-no">No. {l.caseNo}</span>
              <span className="uh-shelf">{shelfName(l.shelf)}</span>
            </div>
            <h3>{l.title}</h3>
            <div className="uh-strips">
              <div className="uh-strip"><b>A</b><span>{l.a}</span></div>
              <div className="uh-strip"><b>B</b><span>{l.b}</span></div>
            </div>
            <p className="uh-link">{l.link}</p>
            {peek[l.part] && (
              <div className="uh-words">
                <div><b>A</b><span>{l.wordsA.join(", ")}</span></div>
                <div><b>B</b><span>{l.wordsB.join(", ")}</span></div>
              </div>
            )}
            <div className="uh-foot">
              <span className="uh-count">{l.questions} questions · 10 words</span>
              <button type="button" className="uh-flip" aria-expanded={!!peek[l.part]} onClick={() => setPeek((p) => ({ ...p, [l.part]: !p[l.part] }))}>
                {peek[l.part] ? "Hide the words" : "Peek at the words"}
              </button>
              <button type="button" className="uh-play" onClick={() => openCustomLessonPopup(`/library/customized-lessons/${l.slug}`, "sentencoCustomLesson", 1200, 780)}>Play</button>
            </div>
          </article>
        ))}
      </div>

      {list.length > size && <Pager page={here} pages={pages} size={size} total={list.length} onGo={goTo} />}
    </div>
  );
}

// Page buttons under the tiles: Previous, a few page numbers (with … when there are many), Next.
function Pager({ page, pages, size, total, onGo }) {
  const nums = [];
  for (let n = 1; n <= pages; n++) {
    if (n === 1 || n === pages || Math.abs(n - page) <= 1) nums.push(n);
    else if (nums[nums.length - 1] !== "…") nums.push("…");
  }
  const from = (page - 1) * size + 1;
  const to = Math.min(total, page * size);
  return (
    <nav className="uh-pager" aria-label="Pages">
      <button type="button" className="uh-pg" disabled={page === 1} onClick={() => onGo(page - 1)}>← Previous</button>
      <div className="uh-pgs">
        {nums.map((n, i) => n === "…"
          ? <span key={`e${i}`} className="uh-pg-gap">…</span>
          : <button key={n} type="button" className="uh-pg uh-pg-n" aria-current={n === page ? "page" : undefined} onClick={() => onGo(n)}>{n}</button>)}
      </div>
      <button type="button" className="uh-pg" disabled={page === pages} onClick={() => onGo(page + 1)}>Next →</button>
      <span className="uh-pg-info">Showing {from} to {to} of {total}</span>
    </nav>
  );
}
