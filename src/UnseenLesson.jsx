import { CasePlayer, CTitle, CArticle, CQuestion, CVocab, CEnd } from "./caseKit.jsx";
import { vocabId } from "./caseKitData.js";
import { buildLesson } from "./unseenPartsBuild.js";
import { UNSEEN_SHELF_BY_PART } from "./unseenShelfByPart.js";

// One Unseen Reading lesson, built from the data in unseenPartsData*.js and shown in the Case file player:
// title page, then for each of the two texts the article (with tap-for-meaning words) and its questions,
// then one vocabulary matching page for both texts, then the score.
// The texts are written by Sentenco and are for everyone, so no level is shown.

export default function UnseenLesson({ config }) {
  const lesson = buildLesson(config);
  const { part, texts, items, matches } = lesson;
  const topic = UNSEEN_SHELF_BY_PART[part] || "older";
  const label = (k) => (k === "A" ? "Text 1" : "Text 2");
  const itemId = (idx) => `u${part}-${idx + 1}`;
  const mids = (k) => matches[k].pairs.map((_, i) => vocabId((k === "A" ? 0 : 5) + i));
  const qids = (k) => items.map((it, i) => ({ it, id: itemId(i) })).filter((x) => x.it.text === k).map((x) => x.id);

  const articleSlide = (k) => ({
    stage: `${label(k)} · Read, then tap a highlighted word`,
    body: <CArticle label={`File ${k} · ${label(k)}`} title={texts[k].title} text={texts[k].text} pairs={matches[k].pairs} />,
  });

  const questionSlides = (k) => {
    const inText = items.filter((x) => x.text === k);
    return items.map((it, idx) => ({ it, idx })).filter((x) => x.it.text === k).map(({ it, idx }) => {
      const n = inText.indexOf(it) + 1;
      return {
        stage: `${label(k)} · Question ${n} of ${inText.length}`,
        body: (
          <CQuestion
            id={itemId(idx)}
            n={n}
            total={inText.length}
            kind={it.kind}
            prompt={it.prompt}
            options={it.options}
            correct={it.correct}
            explain={it.explain}
            textLabel={label(k)}
            textTitle={texts[k].title}
            text={texts[k].text}
            evidence={it.evidence}
          />
        ),
      };
    });
  };

  const allIds = [...qids("A"), ...qids("B"), ...mids("A"), ...mids("B")];
  const slides = [
    { stage: "Unseen Reading", body: <CTitle caseNo={part} theme={lesson.theme} titleA={texts.A.title} titleB={texts.B.title} /> },
    articleSlide("A"),
    ...questionSlides("A"),
    articleSlide("B"),
    ...questionSlides("B"),
    {
      stage: ({ store }) => `Match each word with its meaning · ${Object.keys(store["cv-done"] || {}).length} of 10`,
      body: (
        <CVocab
          textA={{ title: texts.A.title, text: texts.A.text, pairs: matches.A.pairs, defs: matches.A.defs }}
          textB={{ title: texts.B.title, text: texts.B.text, pairs: matches.B.pairs, defs: matches.B.defs }}
        />
      ),
    },
    {
      stage: "The End",
      body: (
        <CEnd
          caseNo={part}
          total={allIds.length}
          parts={[
            { label: "Text 1", title: texts.A.title, ids: qids("A") },
            { label: "Text 2", title: texts.B.title, ids: qids("B") },
            { label: "Words", title: "Vocabulary matching", ids: [...mids("A"), ...mids("B")] },
          ]}
        />
      ),
    },
  ];

  return <CasePlayer slides={slides} caseNo={part} theme={lesson.theme} topic={topic} />;
}
