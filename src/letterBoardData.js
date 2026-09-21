// Letter Board: shared data and helpers for the hub/editor and the play page.
//
// A set has exactly 20 items in a fixed order: items 1-9 are easy, 10-15 are
// average, 16-20 are difficult. The teacher picks a difficulty level and the
// board uses the first 9 (easy), 15 (easy + average) or 20 (all) items.
//
// item = { kind: "choice" | "open", q, options: [a, b, c], correct: 0-2, sample }

export const ITEM_COUNT = 20;

export const LEVELS = [
  { key: 1, name: "Easy", n: 9, sub: "9 easy" },
  { key: 2, name: "Easy and average", n: 15, sub: "9 easy, 6 average" },
  { key: 3, name: "All levels", n: 20, sub: "9 easy, 6 average, 5 difficult" },
];

export const GROUPS = [
  { key: "easy", label: "Easy", from: 0, to: 9 },
  { key: "avg", label: "Average", from: 9, to: 15 },
  { key: "hard", label: "Difficult", from: 15, to: 20 },
];

export function diffOf(i) {
  return i < 9 ? "easy" : i < 15 ? "avg" : "hard";
}

export function blankItem() {
  return { kind: "choice", q: "", options: ["", "", ""], correct: 0, sample: "" };
}

export function blankItems() {
  return Array.from({ length: ITEM_COUNT }, blankItem);
}

// An item is ready to play when it has a question, and (for choice items)
// three filled-in options.
export function itemReady(it) {
  if (!it || !it.q || !it.q.trim()) return false;
  if (it.kind === "open") return true;
  return Array.isArray(it.options) && it.options.length === 3 && it.options.every((o) => o && o.trim());
}

// Which difficulty levels have all their items filled in.
export function levelStatus(items) {
  const ready = (from, to) => items.slice(from, to).filter(itemReady).length;
  const easy = ready(0, 9);
  const avg = ready(9, 15);
  const hard = ready(15, 20);
  return {
    counts: { easy, avg, hard },
    // Missing items per level, counting everything the level needs.
    missing: {
      1: 9 - easy,
      2: 9 - easy + (6 - avg),
      3: 9 - easy + (6 - avg) + (5 - hard),
    },
  };
}

// Makes sure items from the database always have the full 20-item shape.
export function normalizeItems(raw) {
  const list = Array.isArray(raw) ? raw : [];
  return Array.from({ length: ITEM_COUNT }, (_, i) => {
    const it = list[i] || {};
    const base = blankItem();
    return {
      kind: it.kind === "open" ? "open" : "choice",
      q: typeof it.q === "string" ? it.q : "",
      options: Array.isArray(it.options) ? [0, 1, 2].map((k) => String(it.options[k] || "")) : base.options,
      correct: [0, 1, 2].includes(it.correct) ? it.correct : 0,
      sample: typeof it.sample === "string" ? it.sample : "",
    };
  });
}

const C = (q, options, correct) => ({ kind: "choice", q, options, correct, sample: "" });
const O = (q, sample) => ({ kind: "open", q, options: ["", "", ""], correct: 0, sample });

export const SAMPLE_ITEMS = [
  // easy (9)
  C("Which one is an animal?", ["chair", "rabbit", "spoon"], 1),
  C("One cat, two ___.", ["cates", "cat", "cats"], 2),
  O("Tell me three things in your bag.", "For example: a book, a pencil and a lunch box."),
  C("What color is a banana?", ["Blue", "Yellow", "Purple"], 1),
  O("Spell the word \"friend\" out loud.", "F - R - I - E - N - D"),
  C("Which word starts with the letter b?", ["apple", "cat", "ball"], 2),
  O("How old are you? Answer in a full sentence.", "\"I am nine years old.\" (any age, full sentence)"),
  C("The opposite of hot is ___.", ["small", "fast", "cold"], 2),
  O("Give me three animals.", "Any three, for example: a dog, a cat and a bird."),
  // average (6)
  C("She ___ to school every day.", ["go", "goes", "going"], 1),
  O("What did you eat for breakfast today?", "A sentence in the past: \"I ate rice and an egg.\""),
  C("There ___ three apples on the table.", ["is", "are", "am"], 1),
  O("Tell me what the weather is like today.", "For example: \"It is sunny and hot.\""),
  C("He ___ football yesterday.", ["plays", "played", "playing"], 1),
  O("Fix the sentence: \"She don't like pizza.\"", "\"She doesn't like pizza.\""),
  // difficult (5)
  C("She is ___ than me.", ["tallest", "tall", "taller"], 2),
  O("Describe your best friend in two sentences.", "Any two sentences with a name, a look or a thing they like."),
  C("If it rains tomorrow, I ___ at home.", ["stay", "will stay", "would stayed"], 1),
  O("What will you do tomorrow? Use \"will\" or \"going to\".", "For example: \"I will go to the park.\""),
  O("Describe your favorite food. Use two adjectives.", "For example: \"Pizza is hot and cheesy.\""),
];

// Opens the game in a popup, like the Wheel and the lesson players.
export function openLetterBoard(id) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(920, screenW - 40);
  const h = Math.min(840, screenH - 60);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  window.open(
    `/library/letter-board/play/${id}`,
    "sentencoLetterBoard",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}
