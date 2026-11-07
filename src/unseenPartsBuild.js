import { UNSEEN_FIFTH } from "./unseenFifthQuestions.js";
import { UNSEEN_SIX } from "./unseenSixQuestions.js";

// Turns the short lesson data in unseenPartsData*.js into what the Unseen player needs.
// A question is written with the RIGHT answer first; it is moved to a different place for each question,
// so the right answer is not always "A". The matching definitions are shown in a scrambled order.

export const rotateOptions = (right, wrong, index) => {
  const pos = index % 3;
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { options, correct: pos };
};

// Definitions order for five words: each number is the word whose definition goes in that row.
export const defsOrder = (multiplier, shift) => [0, 1, 2, 3, 4].map((k) => (multiplier * k + shift) % 5);

export function buildLesson(cfg) {
  // Lessons in unseenSixQuestions.js use the standard six questions per text (Detail, Vocabulary, Reference, Not stated, Inference, Main idea).
  const six = UNSEEN_SIX[cfg.part];
  const extra = UNSEEN_FIFTH[cfg.part];
  const base = six
    ? [...six.A.map((t) => ["A", ...t]), ...six.B.map((t) => ["B", ...t])]
    : extra
      ? [...cfg.items.filter((i) => i[0] === "A"), ["A", ...extra.A], ...cfg.items.filter((i) => i[0] === "B"), ["B", ...extra.B]]
      : cfg.items;
  const items = base.map(([text, kind, prompt, right, w1, w2, explain, evidence], i) => ({
    text,
    kind,
    prompt,
    explain,
    evidence,
    ...rotateOptions(right, [w1, w2], i),
  }));
  const matches = {
    A: { pairs: cfg.matches.A, defs: defsOrder(2, cfg.part % 5) },
    B: { pairs: cfg.matches.B, defs: defsOrder(3, cfg.part % 5) },
  };
  return { ...cfg, items, matches };
}
