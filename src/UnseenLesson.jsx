import { useContext, useState } from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";
import { ScoreCtx, useStore, NAVY, GREEN, RED, CORAL_DEEP } from "./e8Kit.jsx";
import { buildLesson } from "./unseenPartsBuild.js";

// One Unseen Reading lesson (Part 6 and later), built from the data in unseenPartsData*.js:
// two informative texts the student has never seen, four questions each, then five words from that text
// to match with their definitions. Level: B1+ to low B2. The text is written by Sentenco.

const MATCH_STYLES = `
.um { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 900px; }
.um-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.um-grid { display: grid; grid-template-columns: 250px 1fr; gap: 12px 24px; width: 100%; align-items: stretch; }
.um-col { display: flex; flex-direction: column; gap: 10px; }
.um-btn { min-height: 62px; font-family: 'Quicksand', sans-serif; font-weight: 700; color: ${NAVY}; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 16px; padding: 8px 18px; cursor: pointer; text-align: left; }
.um-btn:disabled { cursor: default; }
.um-btn:not(:disabled):hover { border-color: #9AA6C4; }
.um-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; text-align: center; }
.um-def { font-size: 19px; line-height: 1.3; }
.um-btn.is-sel { border-color: ${NAVY}; box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.um-btn.is-done { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.um-btn.is-flash { background: ${RED}; border-color: ${RED}; color: #fff; }
.um-foot { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 16px; color: ${NAVY}; }
`;

// Match each word with its definition: tap a word, then tap a definition. A wrong tap flashes red.
// The first tap for each word decides its point on the end page.
function UMatch({ id, label, pairs, defs }) {
  const { report } = useContext(ScoreCtx);
  const [done, setDone] = useStore("mt-" + id + "-done", {});
  const [sel, setSel] = useStore("mt-" + id + "-sel", null);
  const [flash, setFlash] = useState(null);
  const count = pairs.filter((_, i) => done[i]).length;

  function pickDef(di) {
    if (sel === null || done[di]) return;
    if (di === sel) {
      setDone((d) => ({ ...d, [di]: true }));
      report(`${id}-${di + 1}`, true);
      setSel(null);
    } else {
      report(`${id}-${sel + 1}`, false);
      setFlash(di);
      setTimeout(() => setFlash(null), 600);
    }
  }

  return (
    <div className="um">
      <span className="um-eyebrow">{label}</span>
      <div className="um-grid">
        <div className="um-col">
          {pairs.map(([w], i) => (
            <button key={w} type="button" className={`um-btn um-word ${done[i] ? "is-done" : sel === i ? "is-sel" : ""}`} disabled={!!done[i]} onClick={() => setSel(sel === i ? null : i)}>
              {w}
            </button>
          ))}
        </div>
        <div className="um-col">
          {defs.map((di) => (
            <button key={di} type="button" className={`um-btn um-def ${done[di] ? "is-done" : flash === di ? "is-flash" : ""}`} disabled={!!done[di]} onClick={() => pickDef(di)}>
              {pairs[di][1]}
            </button>
          ))}
        </div>
      </div>
      <div className="um-foot">{count} of {pairs.length} matched</div>
    </div>
  );
}

export default function UnseenLesson({ config }) {
  const lesson = buildLesson(config);
  const { part, texts, items, matches } = lesson;
  const title = `Unseen Reading: Part ${part}`;
  const label = (k) => (k === "A" ? "Text 1" : "Text 2");
  const itemId = (idx) => `u${part}-${idx + 1}`;
  const mids = (k) => matches[k].pairs.map((_, i) => `m${k}-${i + 1}`);
  const qids = (k) => items.map((it, i) => ({ it, id: itemId(i) })).filter((x) => x.it.text === k).map((x) => x.id);

  const textSlide = (k) => ({
    stage: `${label(k)} · Article`,
    note: "Give the student time to read the whole text once, without stopping. The questions come on the next pages, and she can reopen the text with the “See text” button.",
    body: <UText eyebrow={`${label(k)} · Article`} title={texts[k].title} text={texts[k].text} />,
  });

  const questionSlides = (k) => {
    const inText = items.filter((x) => x.text === k);
    return items.map((it, idx) => ({ it, idx })).filter((x) => x.it.text === k).map(({ it, idx }) => {
      const n = inText.indexOf(it) + 1;
      return {
        stage: `${label(k)} · Question ${n} of ${inText.length}`,
        note: "Question first, then the evidence in the text.",
        body: (
          <UQuestion
            id={itemId(idx)}
            n={n}
            total={inText.length}
            kind={it.kind}
            prompt={it.prompt}
            options={it.options}
            correct={it.correct}
            explain={it.explain}
            textTitle={texts[k].title}
            text={texts[k].text}
            evidence={it.evidence}
          />
        ),
      };
    });
  };

  const matchSlide = (k) => ({
    stage: `${label(k)} · Match the words`,
    note: "Five words from the text. Tap a word, then its definition. A wrong tap turns red and she tries again; her first tap decides the point.",
    body: <UMatch id={`m${k}`} label={`Words from ${label(k)}`} pairs={matches[k].pairs} defs={matches[k].defs} />,
  });

  const slides = [
    {
      stage: "Unseen Reading", title: true,
      note: `A reading lesson on informative texts the student has never seen. Theme: ${lesson.theme}. Two texts, four questions each, then five words to match with their definitions.`,
      body: <UCover title={title} module="MODULE E" />,
    },
    {
      stage: "Today’s Plan",
      note: "Read the plan in half a minute. The habit for the lesson: question first, then evidence.",
      body: (
        <UPlan
          goal="Goal: answer from the text, not from guessing"
          text="With a text you have never seen, the answer is always in the words. Your job is to find them."
          items={[
            ["Text 1", `${texts.A.title}: 4 questions, 5 words`, "11 min"],
            ["Text 2", `${texts.B.title}: 4 questions, 5 words`, "11 min"],
            ["Wrap-up", "Your score", "1 min"],
          ]}
        />
      ),
    },
    textSlide("A"),
    ...questionSlides("A"),
    matchSlide("A"),
    textSlide("B"),
    ...questionSlides("B"),
    matchSlide("B"),
    {
      stage: "The End",
      note: "Read the total. If one part went worse, ask which question type or which words caught her out.",
      body: (
        <UEnd
          title={title}
          ids={[...qids("A"), ...mids("A"), ...qids("B"), ...mids("B")]}
          parts={[
            { label: "Text 1", title: texts.A.title, ids: [...qids("A"), ...mids("A")] },
            { label: "Text 2", title: texts.B.title, ids: [...qids("B"), ...mids("B")] },
          ]}
        />
      ),
    },
  ];

  return <UnseenPlayer slides={slides} extraStyles={MATCH_STYLES} />;
}
