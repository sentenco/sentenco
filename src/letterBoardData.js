// Letter Board: shared data and helpers for the hub/editor and the play page.
//
// A set has exactly 20 items in a fixed order: items 1-9 are easy, 10-15 are
// average, 16-20 are difficult. The teacher picks a difficulty level and the
// board uses the first 9 (easy), 15 (easy + average) or 20 (all) items.
//
// item = { kind: "choice" | "open", q, options: [a, b, c], correct: 0-2, sample,
//          task: "" | "story" | "grammar" | "picture" | "retell", image: "" }
//
// A set can also be built around one standalone story: set.story = { title, text, image }.
// The student reads it before the board opens and a Story button shows it again during play.

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

// What kind of task an item is. It only changes the label on the question card and, for pictures,
// shows the picture; the answering still works the same (choice or open).
export const TASKS = [
  { key: "", label: "General", tag: "" },
  { key: "story", label: "Story", tag: "About the story" },
  { key: "grammar", label: "Grammar", tag: "Check the grammar" },
  { key: "picture", label: "Picture", tag: "Look at the picture" },
  { key: "retell", label: "Retell", tag: "Retell it" },
];

export function taskTag(key) {
  const t = TASKS.find((x) => x.key === key);
  return t ? t.tag : "";
}

export function blankItem() {
  return { kind: "choice", q: "", options: ["", "", ""], correct: 0, sample: "", task: "", image: "" };
}

export function blankStory() {
  return { title: "", text: "", image: "" };
}

// A story counts once it has some text.
export function hasStory(story) {
  return !!(story && typeof story.text === "string" && story.text.trim());
}

export function normalizeStory(raw) {
  if (!raw || typeof raw !== "object") return blankStory();
  return {
    title: typeof raw.title === "string" ? raw.title : "",
    text: typeof raw.text === "string" ? raw.text : "",
    image: typeof raw.image === "string" ? raw.image : "",
  };
}

// Shrinks a picked image file to a small JPEG data URL so it can be saved inside the set.
export function fileToSmallImage(file, maxSide = 560, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("decode"));
      img.onload = () => {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
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
      task: TASKS.some((t) => t.key === it.task) ? it.task : "",
      image: typeof it.image === "string" ? it.image : "",
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

// ---- sample story set: "The Lost Cat" (pictures come from the A1 Kids picture library) ----------
const PIC = "/curriculum/";
const ST = (kind, q, options, correct, sample = "") => ({ kind, q, options, correct, sample, task: "story", image: "" });
const GR = (kind, q, options, correct, sample = "") => ({ kind, q, options, correct, sample, task: "grammar", image: "" });
const PI = (image, kind, q, options, correct, sample = "") => ({ kind, q, options, correct, sample, task: "picture", image });
const RE = (q, sample) => ({ kind: "open", q, options: ["", "", ""], correct: 0, sample, task: "retell", image: "" });

export const SAMPLE_STORY = {
  title: "The Lost Cat",
  text: "Last Saturday, Mia woke up at seven o'clock. She went to the kitchen, but her cat Coco was not there. Mia was worried.\n\n\"Where is Coco?\" she asked her mom.\n\n\"Look in the garden,\" said her mom.\n\nMia ran to the garden. She looked behind the big tree and under the bench, but she did not see Coco. Then she heard a small sound: \"Meow!\" The sound came from a red box next to the door.\n\nMia opened the box and found Coco inside, with three tiny kittens! Mia smiled and said, \"Coco, you are a mom now!\" She gave Coco some milk and called her brother Tom to see the new family. They were all very happy.",
  image: PIC + "u9-l1/cat.jpg",
};

export const SAMPLE_STORY_ITEMS = [
  // easy (9)
  ST("choice", "What is the cat's name?", ["Mia", "Coco", "Tom"], 1),
  PI(PIC + "u10-rooms/kitchen.jpg", "choice", "Mia went to this place first. Where is it?", ["the garden", "the kitchen", "the school"], 1),
  ST("choice", "What time did Mia wake up?", ["six o'clock", "seven o'clock", "eight o'clock"], 1),
  GR("choice", "Mia ___ to the kitchen.", ["go", "went", "goes"], 1),
  PI(PIC + "u2-l2/milk.avif", "choice", "Mia gave Coco this at the end. What is it?", ["juice", "milk", "water"], 1),
  ST("choice", "How did Mia feel when she could not find Coco?", ["worried", "angry", "sleepy"], 0),
  PI(PIC + "u5-family/mom.jpg", "choice", "Mia asked this person about Coco. Who is it?", ["her sister", "her mom", "her teacher"], 1),
  GR("choice", "Coco ___ not in the kitchen.", ["is", "were", "was"], 2),
  ST("open", "What is the name of Mia's brother?", ["", "", ""], 0, "Tom."),
  // average (6)
  ST("choice", "Where did the small sound come from?", ["from the big tree", "from a red box", "from the kitchen"], 1),
  GR("choice", "Mia ___ behind the big tree.", ["look", "looked", "looking"], 1),
  PI(PIC + "u3-l5/tree.avif", "choice", "Mia looked behind this. What is it?", ["a house", "a tree", "a bag"], 1),
  ST("choice", "How many kittens did Coco have?", ["two", "three", "four"], 1),
  GR("open", "Fix the sentence: \"Mia runned to the garden.\"", ["", "", ""], 0, "\"Mia ran to the garden.\""),
  RE("What happened when Mia opened the red box? Tell me in your own words.", "She found Coco inside with three tiny kittens, and she smiled."),
  // difficult (5)
  ST("choice", "Why did Mia say, \"Coco, you are a mom now!\"?", ["Coco was hiding", "Coco had kittens", "Coco was sick"], 1),
  GR("choice", "When Mia ___ the sound, she followed it.", ["hears", "heard", "hearing"], 1),
  PI(PIC + "u9-l1/cat.jpg", "open", "Look at the cat. Imagine Coco in the box. What is she thinking? Say two sentences.", ["", "", ""], 0, "Any two sentences, for example: \"I am a mom. My kittens are small and sleepy.\""),
  RE("Retell the whole story. Use first, then, and finally.", "First Mia could not find Coco. Then she heard a sound in the garden. Finally she found Coco and three kittens in a red box."),
  ST("open", "What will Mia do next? What would you do if your pet was lost?", ["", "", ""], 0, "Any sensible idea with a reason, for example: \"I would look everywhere and ask my family.\""),
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
