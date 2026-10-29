// Builds a Gazette article entry from short written text, so each explainer stays compact.
// In a paragraph string: {{word|part of speech|plain-English meaning}} marks a glossed word,
// and [1], [2], [3] mark a citation after the sentence a source supports.

const PUBLISHED = "2026-10-30";
const TOPIC_TITLES = {
  "Daily Life": "Wellbeing & Daily Life",
  "Nature & Science": "Nature, Science & Planet",
  "Digital & Tech": "Digital Life & Future Tech",
  "Work & Business": "Worklife, Business & Careers",
  "Study & Skills": "Study, School & Skills",
  "Culture & Fun": "Culture, Stories & Fun",
  "Society & Issues": "People, Society & Issues",
  "Travel & Places": "Places, Travel & Journeys",
};

function parseParts(text) {
  return text
    .split(/(\{\{[^}]+\}\}|\[\d\])/)
    .filter(Boolean)
    .map((tok) => {
      if (tok.startsWith("{{")) {
        const [g, pos, def] = tok.slice(2, -2).split("|");
        return { g, pos, def };
      }
      if (/^\[\d\]$/.test(tok)) return { c: Number(tok[1]) };
      return { t: tok };
    });
}

const plainText = (text) => text.replace(/\{\{([^|}]+)\|[^}]*\}\}/g, "$1").replace(/\[\d\]/g, "");
const countWords = (paras) => paras.reduce((n, p) => n + plainText(p).split(/\s+/).filter(Boolean).length, 0);

function edition(label, range, paras) {
  const wordCount = countWords(paras);
  return {
    label,
    range,
    readTime: `${Math.max(1, Math.round(wordCount / 150))} min read`,
    wordCount,
    blocks: paras.map((p) => ({ type: "p", parts: parseParts(p) })),
  };
}

export function makeExplainer({ slug, emoji, variant, topicLabel, title, dek, plain, polished, precise, references, guide, publishedAt = PUBLISHED }) {
  return {
    slug,
    ready: true,
    publishWithoutImage: true,
    publishedAt,
    emoji,
    variant,
    topicLabel,
    topicTitle: TOPIC_TITLES[topicLabel],
    title,
    dek,
    editions: {
      plain: edition("Plain Edition", "A1–A2", plain),
      polished: edition("Polished Edition", "B1–B2", polished),
      precise: edition("Precise Edition", "C1–C2", precise),
    },
    references,
    discussionGuide: guide.map((g) => ({ q: g.q, follow: g.follow })),
  };
}
