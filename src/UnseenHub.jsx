import { useMemo, useState } from "react";
import { UNSEEN_SHELVES, buildUnseenHubLessons } from "./unseenHubData.js";
import { openCustomLessonPopup } from "./customLessonsRegistry";
import "./unseenHub.css";

// The Unseen Reading room: topic tiles, each showing its pair of texts.
// `canOpen(slug)` limits the list to lessons this person may open.
export default function UnseenHub({ canOpen }) {
  const [shelf, setShelf] = useState("all");
  const [q, setQ] = useState("");
  const [peek, setPeek] = useState({});
  const [popped, setPopped] = useState(null);

  const all = useMemo(() => {
    const order = new Map(UNSEEN_SHELVES.map((s, i) => [s.id, i]));
    return buildUnseenHubLessons()
      .filter((l) => canOpen(l.slug))
      .map((l, i) => ({ l, i }))
      .sort((x, y) => order.get(x.l.shelf) - order.get(y.l.shelf) || x.i - y.i)
      .map((x) => x.l);
  }, [canOpen]);
  const paired = all.filter((l) => !l.older);

  const needle = q.trim().toLowerCase();
  const list = all.filter((l) => {
    if (shelf !== "all" && l.shelf !== shelf) return false;
    if (!needle) return true;
    return [l.title, l.a, l.b, l.link, ...(l.wordsA || []), ...(l.wordsB || [])].join(" ").toLowerCase().includes(needle);
  });
  const shelfName = (id) => UNSEEN_SHELVES.find((s) => s.id === id)?.name || "";

  function surprise() {
    if (!paired.length) return;
    setShelf("all"); setQ("");
    const pick = paired[Math.floor(Math.random() * paired.length)];
    setPopped(null);
    setTimeout(() => {
      setPopped(pick.part);
      document.getElementById(`uh-p${pick.part}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 30);
  }

  return (
    <div className="uh">
      <div className="uh-tools">
        <div className="uh-row">
          <label className="uh-search">
            <span className="uh-sr">Search Unseen Reading</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a topic or a word, like wolves or jet lag" autoComplete="off" />
          </label>
          <button type="button" className="uh-big" onClick={surprise}>Surprise me</button>
        </div>
        <div className="uh-chips">
          {[{ id: "all", name: "Everything" }, ...UNSEEN_SHELVES].map((s) => {
            const n = s.id === "all" ? all.length : all.filter((l) => l.shelf === s.id).length;
            if (s.id !== "all" && n === 0) return null;
            return (
              <button key={s.id} type="button" className="uh-chip" aria-pressed={shelf === s.id} onClick={() => setShelf(s.id)}>
                {s.name}<i>{n}</i>
              </button>
            );
          })}
        </div>
      </div>

      <div className="uh-grid">
        {list.length === 0 && <div className="uh-empty">Nothing matches that. Try “sleep” or “plant”.</div>}
        {list.map((l) => (
          <article key={l.part} id={`uh-p${l.part}`} className={`uh-tile uh-c-${l.shelf} ${popped === l.part ? "is-pop" : ""}`} onAnimationEnd={() => setPopped(null)}>
            <div className="uh-top">
              <span className="uh-no">No. {l.part}</span>
              <span className="uh-shelf">{shelfName(l.shelf)}</span>
              <span className="uh-lvl">{l.level}</span>
            </div>
            <h3>{l.title}</h3>
            <div className="uh-strips">
              <div className="uh-strip"><b>A</b><span>{l.a}</span></div>
              <div className="uh-strip"><b>B</b><span>{l.b}</span></div>
            </div>
            <p className={`uh-link ${l.older ? "is-none" : ""}`}>{l.link}</p>
            {peek[l.part] && (
              <div className="uh-words">
                <div><b>A</b><span>{l.wordsA.join(", ")}</span></div>
                <div><b>B</b><span>{l.wordsB.join(", ")}</span></div>
              </div>
            )}
            <div className="uh-foot">
              <span className="uh-count">{l.older ? "Older format" : "8 questions · 10 words"}</span>
              {!l.older && (
                <button type="button" className="uh-flip" aria-expanded={!!peek[l.part]} onClick={() => setPeek((p) => ({ ...p, [l.part]: !p[l.part] }))}>
                  {peek[l.part] ? "Hide the words" : "Peek at the words"}
                </button>
              )}
              <button type="button" className="uh-play" onClick={() => openCustomLessonPopup(`/library/customized-lessons/${l.slug}`, "sentencoCustomLesson", 1200, 780)}>Play</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
