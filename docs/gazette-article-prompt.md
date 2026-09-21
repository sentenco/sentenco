# Sentenco Gazette — Perplexity Article Prompt

Reusable prompt to feed Perplexity whenever we need fresh articles for
the Gazette (Articles page). Run it, then hand the raw output back to
Claude — Claude derives the Plain and Precise editions, glosses,
citation markers, and discussion guide, and inserts the finished entry
into `src/articlesData.js`.

Perplexity's job stops at: article/editorial text (roughly Polished
level) + title + dek + 3 real references. It does not need to know
our internal JS schema.

Category 9 (Law) is the one exception to the "neutral news" voice —
it runs as a genuine opinion piece (an "EDITORIAL"), matching the
"Sentenco Editorial" branding on the article page. Its Plain/Precise
editions should keep that same opinionated framing, just simplified
or elevated in vocabulary — not flattened into neutral reporting.

## The prompt

```
You are a news researcher for an ESL publication called "The Sentenco Gazette." Find ONE timely, real news story, trend, or notable court case/legal concept for EACH of the following 9 categories — stories can be from anywhere in the world, but must be current (from roughly the last 1–4 weeks, except Law, where a well-known or recent case/concept is fine) and classroom-safe (no partisan politics, no graphic content, no hot-button controversy — human interest, science, tech, culture, work, study, society, travel, or legal-education angles only):

1. Daily Life (wellbeing, habits, everyday life)
2. Nature & Science (environment, discoveries, space, health science)
3. Digital & Tech (gadgets, apps, AI, internet trends)
4. Work & Business (careers, workplace trends, companies)
5. Study & Skills (education, learning, skills, school life)
6. Culture & Fun (entertainment, art, food, stories, trends)
7. Society & Issues (community, people, social trends — non-partisan)
8. Travel & Places (destinations, travel trends, cities)
9. Law (real court cases or legal concepts, explained for a general reader — non-partisan, no ongoing political trials)

For categories 1–8, write in a neutral, informational news voice. For category 9 (Law), write in an "EDITORIAL" opinion voice instead — take a clear, reasoned point of view on the case or concept, the way a newspaper's editorial board would (see the ARTICLE/EDITORIAL note below).

For EACH of the 9 categories, using real sources you find through research, write:

- TITLE: a punchy, curiosity-driven headline, under 12 words
- DEK: one sentence hook/subtitle, about 20 words, no spoilers
- ARTICLE (categories 1–8) or EDITORIAL (category 9, Law): 300–400 words, 4–5 paragraphs, written in natural, clear English for an intermediate-to-advanced learner — clear sentences, no overly complex jargon, explain any technical or legal term in plain words the first time it's used. For the Law category specifically, write it as an opinion piece with a real point of view (e.g. "Our editorial view is...", "Editorially, we should...") rather than neutral reporting. Include one short, real quote from a source if one exists. Number your sources 1, 2, and 3 as you use them (see REFERENCES below), and place an inline marker like [1], [2], or [3] immediately after any sentence that source supports — reuse the SAME 3 numbers throughout the piece. Do not introduce a 4th, 5th, etc. source number; if you consult more than 3 sources, pick the 3 most important ones for the REFERENCES list and cite only those.
- REFERENCES: exactly 3 real sources you used, each as "domain.com — short headline of that source's article", numbered 1–3 to match the [1] [2] [3] markers used in the ARTICLE/EDITORIAL text above

IMPORTANT: Compile everything — all 9 pieces, each with its ARTICLE/EDITORIAL text (including inline [1]/[2]/[3] markers) and its own REFERENCES list directly underneath — into ONE single response. Do not split the references into a separate message, file, or follow-up; each piece's references must appear immediately after its text, in the same output.

Format your output clearly, one section per category, like this:

## 1. Daily Life
TITLE: ...
DEK: ...
ARTICLE:
...(paragraphs with [1] [2] [3] markers inline)...
REFERENCES:
1. domain.com — headline
2. domain.com — headline
3. domain.com — headline

## 2. Nature & Science
...(same structure)...

## 9. Law
TITLE: ...
DEK: ...
EDITORIAL:
...(opinion-voice paragraphs with [1] [2] [3] markers inline)...
REFERENCES:
1. domain.com — headline
2. domain.com — headline
3. domain.com — headline

(continue through all 9 categories, all in this one response)

Do not repeat a topic or angle you've already covered in a previous run of this prompt — always find something new and current.
```

## After Perplexity responds

Paste the raw output back to Claude. Claude will, per article:

- Rewrite it down to a **Plain** edition (A1–A2, ~150–200 words, simple vocabulary/short sentences)
- Rewrite it up to a **Precise** edition (C1–C2, more sophisticated vocabulary/structure)
- Add glosses (3 tricky words per edition, with simple definitions) and citation markers tied to the 3 references
- Write the 3-question discussion guide
- Pick the slug, emoji, and `variant`, and insert the finished entry into `src/articlesData.js`
