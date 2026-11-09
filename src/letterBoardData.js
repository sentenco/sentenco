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
  text: "Last Saturday, Mia woke up at seven o'clock. She went to the kitchen, but her cat Coco was not there. Mia was worried.\n\n\"Where is Coco?\" she asked her mom.\n\nMia ran to the garden. She looked behind the big tree. Then she heard a small sound: \"Meow!\" It came from a red box.\n\nMia opened the box and found Coco with three tiny kittens! \"Coco, you are a mom now!\" Mia gave her some milk and called her brother Tom.",
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

// ---- story set: "The Secret Map" (an adventure for a 10-year-old boy, level A2, simple past, one cover picture) ----
export const SECRET_MAP_STORY = {
  title: "The Secret Map",
  text: "On Sunday, Dan was bored. It was raining, so he could not play football outside. He went up to the attic and opened his grandpa's old wooden box.\n\nInside the box, Dan found a small compass and a map with a red X. It said: \"Ten steps north of the gate.\"\n\nDan took the compass and ran outside. He walked ten steps north and dug under the old oak tree. He found a metal tin.\n\nDan opened the tin. Inside there was a photo and a note from Grandpa: \"A good explorer is brave and kind. Now it is your turn.\"",
  image: "/curriculum/letter-board/secret-map-cover.jpg",
};

export const SECRET_MAP_ITEMS = [
  // easy (9)
  ST("choice", "What was the weather like on Sunday?", ["sunny", "rainy", "windy"], 1),
  ST("choice", "How did Dan feel at the start of the story?", ["bored", "hungry", "scared"], 0),
  GR("choice", "Dan ___ up to the attic.", ["go", "goes", "went"], 2),
  ST("choice", "Whose wooden box was it?", ["his teacher's", "his grandpa's", "his mom's"], 1),
  ST("choice", "What did Dan find in the box?", ["a ball and a map", "a key and a photo", "a compass and a map"], 2),
  GR("choice", "Dan ___ a small compass.", ["found", "find", "finding"], 0),
  ST("choice", "What color was the X on the map?", ["blue", "black", "red"], 2),
  GR("choice", "It ___ raining on Sunday.", ["is", "was", "were"], 1),
  ST("open", "Where did Dan go first? Say the place.", ["", "", ""], 0, "To the attic."),
  // average (6)
  ST("choice", "Which way did Dan walk from the gate?", ["south", "north", "east"], 1),
  GR("choice", "Dan ___ ten steps north.", ["walk", "walking", "walked"], 2),
  ST("choice", "Where did Dan find the tin?", ["under the oak tree", "in the attic", "in the kitchen"], 0),
  GR("open", "Fix the sentence: \"Dan finded a metal tin.\"", ["", "", ""], 0, "\"Dan found a metal tin.\""),
  ST("choice", "What was inside the tin?", ["a compass and a ball", "a photo and a note", "money and a key"], 1),
  RE("What did Dan do after he found the map? Tell me in your own words.", "He took the compass, ran outside, walked ten steps north from the gate and dug under the oak tree."),
  // difficult (5)
  ST("choice", "Why did Dan go up to the attic?", ["He was bored and could not play outside", "He wanted to hide", "His mom told him to"], 0),
  GR("choice", "When Dan ___ the tin, he saw a photo.", ["opens", "opening", "opened"], 2),
  ST("open", "What did Grandpa want to say in his note? Say it in your own words.", ["", "", ""], 0, "He said a good explorer is brave and kind, and now it was Dan's turn."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Dan was bored, so he opened the box in the attic. Then he found a map and a compass. After that he walked ten steps north and dug under the oak tree. Finally he found a tin with a photo and a note from Grandpa."),
  ST("open", "Would you like to find a secret map like Dan? Where would it take you? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I would follow it to a cave. I like adventures.\""),
];

// ---- story set: "The Parol Maker" (a fiesta story for a 10-year-old, level A2, simple past, one cover picture) ----
export const PAROL_MAKER_STORY = {
  title: "The Parol Maker",
  text: "In December, Ana's town had a big fiesta. Everyone made a parol, a bright star lantern. On Saturday, Ana went to her grandpa's house. Lolo had bamboo sticks, colored paper and glue on the table.\n\nFirst, they tied five bamboo sticks into a star. Then Ana cut red, yellow and blue paper and glued it on the frame. At noon, the glue was still wet, so they ate rice and fried fish.\n\nIn the evening, Lolo put a small light inside the parol, and it glowed! Ana hung it on the gate. Her neighbors stopped to look. It was beautiful! Ana was very proud.",
  image: "/curriculum/letter-board/parol-maker-cover.jpg",
};

export const PAROL_MAKER_ITEMS = [
  // easy (9)
  ST("choice", "What did Ana's town have in December?", ["a fiesta", "a football game", "a school test"], 0),
  ST("choice", "What is a parol?", ["a bright star lantern", "a kind of rice", "a paper boat"], 0),
  ST("choice", "Whose house did Ana go to on Saturday?", ["her teacher's", "her grandpa's", "her friend's"], 1),
  GR("choice", "Ana ___ to her grandpa's house.", ["go", "went", "goes"], 1),
  ST("choice", "What did Lolo have on the table?", ["bamboo sticks, paper and glue", "a radio and a clock", "a cake and juice"], 0),
  ST("choice", "How many bamboo sticks did they tie into a star?", ["three", "four", "five"], 2),
  ST("choice", "Which colors of paper did Ana use?", ["red, yellow and blue", "green and white", "black and pink"], 0),
  GR("choice", "Ana ___ the paper on the frame.", ["glue", "glued", "gluing"], 1),
  ST("open", "What did Ana and Lolo eat for lunch?", ["", "", ""], 0, "Rice and fried fish."),
  // average (6)
  ST("choice", "Why did they eat lunch at noon?", ["The glue was still wet", "The parol was finished", "It was raining"], 0),
  GR("choice", "They ___ five sticks into a star.", ["tie", "tied", "tying"], 1),
  ST("choice", "What did Lolo put inside the parol?", ["a small light", "a little bird", "a piece of fruit"], 0),
  GR("open", "Fix the sentence: \"Ana cutted the paper.\"", ["", "", ""], 0, "\"Ana cut the paper.\""),
  ST("choice", "Where did Ana hang the parol?", ["on the gate", "in the kitchen", "on a tree"], 0),
  RE("What did Ana and Lolo do first, then, and in the evening? Tell me in your own words.", "First they tied the sticks into a star. Then Ana glued the paper on. In the evening Lolo put a light inside."),
  // difficult (5)
  ST("choice", "Why did the neighbors stop to look?", ["The parol was beautiful", "Ana was singing", "The gate was broken"], 0),
  GR("choice", "When Lolo ___ the light inside, the parol glowed.", ["puts", "put", "putting"], 1),
  ST("open", "Why was Ana proud at the end? Say it in your own words.", ["", "", ""], 0, "She made a beautiful parol with her grandpa, and everyone liked it."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Ana went to Lolo's house. Then they tied five sticks into a star. After that Ana glued colored paper on the frame. Finally Lolo put a light inside and Ana hung the parol on the gate."),
  ST("open", "Would you like to make a parol? What colors would you use? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I would use pink and green. I like bright colors.\""),
];

// ---- story set: "The Last Five Minutes" (a school football final for a teenage boy, level A2 to B1, simple past) ----
export const LAST_FIVE_STORY = {
  title: "The Last Five Minutes",
  text: "Marco was fifteen and he loved football. On Saturday, his school team played the final against Green Hill. Marco sat on the bench for the whole first half. His team was losing 1-0.\n\nAfter the break, the coach called his name. \"Marco, you play now. Stay calm and pass quickly.\" With five minutes left, Marco won the ball and passed it to his friend Tom. Tom scored! Now it was 1-1.\n\nIn the last minute, Marco ran down the side and shot. The ball hit the net! His team won 2-1, and everyone shouted his name.",
  image: "/curriculum/letter-board/last-five-minutes-cover.jpg",
};

export const LAST_FIVE_ITEMS = [
  // easy (9)
  ST("choice", "What did Marco love?", ["basketball", "football", "tennis"], 1),
  ST("choice", "How old was Marco?", ["fifteen", "fourteen", "sixteen"], 0),
  ST("choice", "Who did Marco's school team play in the final?", ["Red Hill", "Blue Park", "Green Hill"], 2),
  GR("choice", "Marco ___ football very much.", ["love", "loved", "loving"], 1),
  ST("choice", "Where did Marco sit in the first half?", ["in the goal", "in the car", "on the bench"], 2),
  ST("choice", "Who was winning in the first half?", ["Marco's team", "Green Hill", "Nobody"], 1),
  GR("choice", "On Saturday, his team ___ the final.", ["played", "play", "plays"], 0),
  ST("choice", "What did the coach tell Marco to do?", ["shoot every time", "run very fast", "stay calm and pass quickly"], 2),
  ST("open", "Who scored the first goal for Marco's team? Say the name.", ["", "", ""], 0, "Tom."),
  // average (6)
  ST("choice", "When did the coach call Marco's name?", ["before the game", "after the break", "in the last minute"], 1),
  GR("choice", "Marco ___ the ball and passed it to Tom.", ["won", "win", "winning"], 0),
  ST("choice", "How many minutes were left when Marco won the ball?", ["ten", "one", "five"], 2),
  GR("open", "Fix the sentence: \"Marco runned down the side.\"", ["", "", ""], 0, "\"Marco ran down the side.\""),
  ST("choice", "What was the score after Tom's goal?", ["1-1", "2-1", "0-1"], 0),
  RE("What happened after the break? Tell me in your own words.", "The coach called Marco. Marco won the ball and passed it to Tom. Tom scored and the game was 1-1."),
  // difficult (5)
  ST("choice", "Why did Marco go onto the pitch after the break?", ["The coach told him to play", "A player was hurt", "He wanted to go home"], 0),
  GR("choice", "When Marco ___, the ball hit the net.", ["shoots", "shot", "shooting"], 1),
  ST("open", "How do you think Marco felt at the end? Say why.", ["", "", ""], 0, "He felt happy and proud because he helped his team win."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Marco sat on the bench. Then the coach called him after the break. After that he passed to Tom and Tom scored. Finally Marco shot, the ball hit the net and his team won 2-1."),
  ST("open", "Do you play football? Who is your favorite player or team? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"My favorite team is Real Madrid. They play beautiful football.\""),
];

// ---- story set: "The Talent Show" (music and stage fright, teens, A2 to B1, simple past) ----
export const TALENT_SHOW_STORY = {
  title: "The Talent Show",
  text: "Lena was fourteen and she played the guitar every day, but she never played for other people. In March, her music teacher, Mr. Reyes, asked her to join the school talent show. Lena felt very nervous. \"I can't do it,\" she said.\n\nOn the night of the show, her hands shook. Her best friend Jade stood next to her and said, \"Just look at me.\" Lena walked onto the stage, took a deep breath and started to play. At first her voice was small, but soon it got stronger.\n\nWhen the song finished, the hall was quiet for a second. Then everybody clapped and shouted. Lena smiled. She was not scared anymore.",
  image: "/curriculum/letter-board/talent-show-cover.jpg",
};

export const TALENT_SHOW_ITEMS = [
  // easy (9)
  ST("choice", "What instrument did Lena play?", ["the piano", "the guitar", "the drums"], 1),
  ST("choice", "How old was Lena?", ["thirteen", "fifteen", "fourteen"], 2),
  ST("choice", "Who asked Lena to join the talent show?", ["her mother", "her music teacher", "her best friend"], 1),
  GR("choice", "Lena ___ the guitar every day.", ["play", "played", "playing"], 1),
  ST("choice", "How did Lena feel when the teacher asked her?", ["nervous", "bored", "angry"], 0),
  ST("choice", "What was the name of Lena's best friend?", ["Rosa", "Mia", "Jade"], 2),
  GR("choice", "Lena ___ onto the stage.", ["walk", "walked", "walking"], 1),
  ST("choice", "Where did Lena play at the end?", ["in the street", "on the stage", "in her room"], 1),
  ST("open", "What did Jade tell Lena to do? Say her words.", ["", "", ""], 0, "\"Just look at me.\""),
  // average (6)
  ST("choice", "What did Lena say when the teacher asked her?", ["\"I can't do it.\"", "\"I love it!\"", "\"Maybe next year.\""], 0),
  GR("choice", "Lena ___ a deep breath and started to play.", ["take", "took", "taking"], 1),
  ST("choice", "How was Lena's voice at first?", ["very loud", "small", "angry"], 1),
  GR("open", "Fix the sentence: \"Her hands shaked.\"", ["", "", ""], 0, "\"Her hands shook.\""),
  ST("choice", "What happened when the song finished?", ["Everybody left the hall quickly.", "The teacher stopped the show.", "The hall was quiet, then everybody clapped."], 2),
  RE("What happened on the night of the show? Tell me in your own words.", "Lena's hands shook, but Jade stood next to her. Lena walked onto the stage and started to play. At first her voice was small, then it got stronger."),
  // difficult (5)
  ST("choice", "Why did Jade say, \"Just look at me\"?", ["She wanted Lena to feel calmer.", "She wanted to play the guitar too.", "She was angry at Lena."], 0),
  GR("choice", "When the song ___, the hall was quiet for a second.", ["finish", "finished", "finishes"], 1),
  ST("open", "How did Lena feel at the end? Say why.", ["", "", ""], 0, "She felt happy and proud because everybody clapped and she was not scared anymore."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Lena's teacher asked her to join the talent show and she felt nervous. Then on the night of the show her hands shook, but Jade stood next to her. After that Lena walked onto the stage and played. Finally everybody clapped and Lena smiled."),
  ST("open", "Do you feel nervous before you speak or perform? What helps you? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I feel nervous before a test. I take a deep breath and it helps.\""),
];

// ---- story set: "The Lost Phone" (a lost phone at the mall, teens, A2 to B1, simple past) ----
export const LOST_PHONE_STORY = {
  title: "The Lost Phone",
  text: "On Saturday afternoon, Sofia went to the mall with her cousin Ben. They had burgers, looked at shoes and watched a movie trailer. At the bus stop, Sofia put her hand in her bag. Her phone wasn't there! \"It has all my photos,\" she said, and her face went white.\n\nThey ran back to the food court. A woman at the information desk smiled. \"A boy found a phone near the burger shop,\" she said. \"He left it with us.\" Sofia described her phone case, a blue one with a star, and the woman gave it back.\n\nSofia wanted to thank the boy, so she left a note at the desk. That night, she checked her bag twice before she went to sleep.",
  image: "/curriculum/letter-board/lost-phone-cover.jpg",
};

export const LOST_PHONE_ITEMS = [
  // easy (9)
  ST("choice", "Who went to the mall with Sofia?", ["her sister", "her cousin Ben", "her friend Ana"], 1),
  ST("choice", "When did they go to the mall?", ["on Saturday afternoon", "on Friday night", "on Sunday morning"], 0),
  GR("choice", "They ___ burgers at the mall.", ["has", "have", "had"], 2),
  ST("choice", "What was missing from Sofia's bag?", ["her wallet", "her phone", "her keys"], 1),
  ST("choice", "Where did they run back to?", ["the bus stop", "the shoe shop", "the food court"], 2),
  GR("choice", "Her phone ___ in her bag.", ["wasn't", "weren't", "isn't"], 0),
  ST("choice", "Who smiled at the information desk?", ["a boy", "a woman", "a teacher"], 1),
  ST("choice", "What did Sofia's phone case look like?", ["red with a heart", "blue with a star", "black and plain"], 1),
  ST("open", "What was on Sofia's phone that was important to her?", ["", "", ""], 0, "Her photos."),
  // average (6)
  ST("choice", "Why did Sofia's face go white?", ["She was cold.", "She felt sick from the burger.", "She was shocked about her phone."], 2),
  ST("choice", "Where did the boy find the phone?", ["near the shoe shop", "near the burger shop", "near the bus stop"], 1),
  GR("choice", "A boy ___ a phone near the burger shop.", ["found", "find", "finding"], 0),
  GR("open", "Fix the sentence: \"Sofia lefted a note at the desk.\"", ["", "", ""], 0, "\"Sofia left a note at the desk.\""),
  ST("choice", "What did the boy do with the phone?", ["He kept it.", "He left it at the information desk.", "He sold it."], 1),
  RE("What happened after Sofia and Ben ran back to the food court? Tell me in your own words.", "A woman at the information desk said a boy found a phone. Sofia described her blue phone case with a star and the woman gave the phone back."),
  // difficult (5)
  ST("choice", "Why did Sofia leave a note?", ["She wanted to thank the boy.", "She wanted to buy a new phone.", "She wanted to call the police."], 0),
  GR("choice", "Sofia wanted to say thank you, ___ she left a note.", ["but", "because", "so"], 2),
  ST("open", "Why did Sofia check her bag twice that night? Say it in your own words.", ["", "", ""], 0, "Because she was still worried about losing her phone again."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Sofia and Ben had burgers and looked at shoes at the mall. Then Sofia could not find her phone at the bus stop. After that they ran back and a woman gave the phone back. Finally Sofia left a thank-you note for the boy."),
  ST("open", "What would you do if you found a phone at the mall? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I would take it to the information desk. The owner will look for it there.\""),
];

// ---- story set: "The Last Level" (video games, teens, A2 to B1, simple past) ----
export const LAST_LEVEL_STORY = {
  title: "The Last Level",
  text: "Kai was fourteen and he played video games every evening. For one week, he tried to beat the last level of his favorite game, but he lost every time. He got angry and almost threw his controller.\n\nHis little sister, Mai, sat on the sofa and watched. \"The dragon always closes its eyes before it shoots fire,\" she said. \"Maybe you can hide then.\" Kai laughed, but he tried her idea. He hid behind a rock and, when the dragon closed its eyes, he attacked.\n\nAfter ten minutes, the dragon fell and the screen said, \"You win!\" Kai jumped up and hugged Mai. \"You're a genius!\" he said.",
  image: "/curriculum/letter-board/last-level-cover.jpg",
};

export const LAST_LEVEL_ITEMS = [
  // easy (9)
  ST("choice", "How old was Kai?", ["thirteen", "fourteen", "fifteen"], 1),
  ST("choice", "When did Kai play video games?", ["every evening", "every morning", "only on Sundays"], 0),
  ST("choice", "How long did Kai try to beat the last level?", ["one day", "two weeks", "one week"], 2),
  GR("choice", "Kai ___ every time.", ["lose", "lost", "losing"], 1),
  ST("choice", "Who watched Kai play?", ["his mother", "his little sister", "his best friend"], 1),
  ST("choice", "Where did Mai sit?", ["on the floor", "on the sofa", "on the bed"], 1),
  GR("choice", "Kai ___ angry.", ["gets", "get", "got"], 2),
  ST("choice", "What was at the end of the last level?", ["a robot", "a dragon", "a giant spider"], 1),
  ST("open", "What was the name of Kai's sister? Say the name.", ["", "", ""], 0, "Mai."),
  // average (6)
  ST("choice", "What does the dragon do before it shoots fire?", ["It jumps.", "It roars loudly.", "It closes its eyes."], 2),
  GR("choice", "Mai ___ on the sofa and watched.", ["sit", "sat", "sitted"], 1),
  ST("choice", "What did Mai say Kai could do?", ["stop playing", "hide when the dragon closes its eyes", "ask a friend for help"], 1),
  GR("open", "Fix the sentence: \"Kai hided behind a rock.\"", ["", "", ""], 0, "\"Kai hid behind a rock.\""),
  ST("choice", "How long did the last fight take?", ["ten minutes", "an hour", "two minutes"], 0),
  RE("How did Mai help her brother? Tell me in your own words.", "Mai watched Kai play and saw that the dragon closes its eyes before it shoots fire. She told Kai to hide at that moment, and it worked."),
  // difficult (5)
  ST("choice", "Why did Kai laugh at first?", ["He thought her idea was funny.", "He was very happy.", "He wanted to play a different game."], 0),
  GR("choice", "After ten minutes, the dragon ___.", ["fall", "fell", "falled"], 1),
  ST("open", "How did Kai feel at the end? What did he do?", ["", "", ""], 0, "He felt happy. He jumped up and hugged Mai."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Kai tried to beat the last level for a week, but he lost every time. Then Mai watched and saw that the dragon closes its eyes. After that Kai hid behind a rock and attacked. Finally the dragon fell and Kai hugged Mai."),
  ST("open", "Do you play video games? What is your favorite game? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"My favorite game is Minecraft. I like building houses with my friends.\""),
];

// ---- story set: "The Milk Tea Shop" (a first weekend job, teens, A2 to B1, simple past) ----
export const MILK_TEA_STORY = {
  title: "The Milk Tea Shop",
  text: "Nico was sixteen and he wanted to buy new sneakers, so he found a weekend job at a milk tea shop. On his first Saturday, the shop was very busy. A girl ordered a mango tea with less sugar, but Nico made it with extra sugar by mistake. \"This is too sweet,\" she said. Nico's face turned red.\n\nHis manager, Ms. Santos, did not shout. She helped him make a new drink and said, \"Everyone makes mistakes on the first day. Just read the order again before you start.\"\n\nNico followed her advice. By the end of the day, he made forty drinks and only one more mistake. When he got home, he told his mom, \"I think I like my job.\"",
  image: "/curriculum/letter-board/milk-tea-shop-cover.jpg",
};

export const MILK_TEA_ITEMS = [
  // easy (9)
  ST("choice", "How old was Nico?", ["fifteen", "sixteen", "seventeen"], 1),
  ST("choice", "What did Nico want to buy?", ["a phone", "new sneakers", "a bike"], 1),
  ST("choice", "Where was Nico's job?", ["at a pizza place", "at a bookstore", "at a milk tea shop"], 2),
  GR("choice", "Nico ___ a weekend job.", ["find", "found", "finding"], 1),
  ST("choice", "When did Nico work?", ["on weekdays", "on weekends", "every night"], 1),
  ST("choice", "What did the girl order?", ["a chocolate tea", "a mango tea", "a coffee"], 1),
  GR("choice", "The shop ___ very busy.", ["were", "is", "was"], 2),
  ST("choice", "What was the manager's name?", ["Ms. Reyes", "Ms. Santos", "Ms. Lopez"], 1),
  ST("open", "What color did Nico's face turn? Say the color.", ["", "", ""], 0, "Red."),
  // average (6)
  ST("choice", "What mistake did Nico make?", ["He forgot the ice.", "He used extra sugar.", "He gave the drink to the wrong person."], 1),
  GR("choice", "The girl said, \"This ___ too sweet.\"", ["are", "is", "be"], 1),
  ST("choice", "How did the manager act?", ["She shouted.", "She stayed calm and helped him.", "She sent him home."], 1),
  GR("open", "Fix the sentence: \"Nico maked forty drinks.\"", ["", "", ""], 0, "\"Nico made forty drinks.\""),
  ST("choice", "How many drinks did Nico make by the end of the day?", ["thirty", "forty", "fifty"], 1),
  RE("What happened after the girl said the drink was too sweet? Tell me in your own words.", "Ms. Santos did not shout. She helped Nico make a new drink and told him to read the order again before he starts."),
  // difficult (5)
  ST("choice", "What advice did the manager give Nico?", ["Work faster.", "Read the order again before you start.", "Ask the customer to make the drink."], 1),
  GR("choice", "Ms. Santos said, \"Everyone ___ mistakes on the first day.\"", ["make", "makes", "made"], 1),
  ST("open", "Why do you think Nico said, \"I think I like my job\"? Say it in your own words.", ["", "", ""], 0, "Because his manager was kind, he learned from his mistake and he did a good job by the end of the day."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Nico got a weekend job at a milk tea shop and made a drink with extra sugar by mistake. Then his manager helped him and gave him advice. After that he read each order again. Finally he made forty drinks and told his mom he liked his job."),
  ST("open", "Would you like a weekend job? What job would you choose? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I would like to work in a bookstore. I love reading and I like quiet places.\""),
];

// ---- story set: "The Mystery Notes" (secret notes in a locker, mystery with a surprise ending, teens, A2 to B1, simple past) ----
export const MYSTERY_NOTES_STORY = {
  title: "The Mystery Notes",
  text: "Leo was sixteen and he was very stressed about his exams. He stayed at school until late every evening to study. One Monday morning, he opened his locker and found a yellow note: \"You can do it. Believe in yourself.\" There was no name on it. The next day there was another note, and on Wednesday there was a third one.\n\nLeo asked his friends, but nobody knew. He thought Maya, a girl from his class, wrote the notes because she always smiled at him. On Friday, he came to school very early and hid behind the stairs. At seven o'clock, a man with a mop walked to Leo's locker and put a note inside. It was Mr. Cruz, the school cleaner!\n\n\"I see you studying late every night,\" Mr. Cruz said with a smile. \"I was a student once, too.\"",
  image: "/curriculum/letter-board/mystery-notes-cover.jpg",
};

export const MYSTERY_NOTES_ITEMS = [
  // easy (9)
  ST("choice", "How old was Leo?", ["fifteen", "sixteen", "seventeen"], 1),
  ST("choice", "What was Leo worried about?", ["his birthday", "his exams", "a football game"], 1),
  ST("choice", "What color was the note?", ["pink", "yellow", "blue"], 1),
  ST("choice", "Where did Leo find the note?", ["in his bag", "in his locker", "on his desk"], 1),
  GR("choice", "Leo ___ a yellow note in his locker.", ["finds", "find", "found"], 2),
  ST("choice", "How many notes did Leo find from Monday to Wednesday?", ["two", "three", "four"], 1),
  GR("choice", "There ___ no name on the note.", ["were", "are", "was"], 2),
  ST("choice", "Who did Leo think wrote the notes?", ["his teacher", "Maya", "his mother"], 1),
  ST("open", "What did the first note say? Say the words.", ["", "", ""], 0, "\"You can do it. Believe in yourself.\""),
  // average (6)
  ST("choice", "Why did Leo think Maya wrote the notes?", ["She always smiled at him.", "She was his best friend.", "She had a yellow pen."], 0),
  GR("choice", "Leo ___ his friends, but nobody knew.", ["ask", "asked", "asking"], 1),
  ST("choice", "What did Leo do on Friday?", ["He stayed home.", "He came early and hid behind the stairs.", "He asked the teacher."], 1),
  GR("open", "Fix the sentence: \"He hided behind the stairs.\"", ["", "", ""], 0, "\"He hid behind the stairs.\""),
  ST("choice", "What did the man carry?", ["a bag", "a mop", "a book"], 1),
  RE("What happened on Friday morning? Tell me in your own words.", "Leo came to school early and hid behind the stairs. At seven o'clock a man walked to his locker and put a note inside. It was Mr. Cruz, the school cleaner."),
  // difficult (5)
  ST("choice", "Why did Mr. Cruz write the notes?", ["He saw Leo studying late and wanted to help.", "He wanted to test Leo.", "He wanted a new locker."], 0),
  GR("choice", "Mr. Cruz said, \"I ___ a student once, too.\"", ["am", "was", "were"], 1),
  ST("open", "How do you think Leo felt when he saw Mr. Cruz? Say why.", ["", "", ""], 0, "He felt surprised and happy because he did not expect the cleaner, and Mr. Cruz was kind."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Leo found a yellow note in his locker and there was no name on it. Then he found more notes and thought Maya wrote them. After that he hid behind the stairs on Friday. Finally he saw Mr. Cruz, the school cleaner, put a note in his locker."),
  ST("open", "Who helps you when you feel stressed? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"My sister helps me. She listens and makes me laugh.\""),
];

// ---- story set: "The Escape Room" (a birthday escape room with a funny twist, teens, A2 to B1, simple past) ----
export const ESCAPE_ROOM_STORY = {
  title: "The Escape Room",
  text: "Pia and her three friends, Jun, Rey and Cass, went to an escape room for Pia's sixteenth birthday. The guide closed the door and said, \"You have sixty minutes. Find the golden key and open the door.\"\n\nThey looked under the table, behind the paintings and inside an old clock. After forty minutes, they were tired and a little angry. \"We will never get out of here!\" said Rey. Then Cass solved the last puzzle and a note appeared: \"The key is closer than you think.\"\n\nEverybody looked at the floor, the walls and the ceiling. Pia looked at Jun. He was very quiet and he kept touching his jacket. \"Jun, check your pockets,\" she said. Jun put his hand in his pocket and found the golden key. \"I picked it up in the first minute,\" he said, and his face turned red. The door opened with only ten seconds left!",
  image: "/curriculum/letter-board/escape-room-cover.jpg",
};

export const ESCAPE_ROOM_ITEMS = [
  // easy (9)
  ST("choice", "How many friends went with Pia?", ["two", "three", "four"], 1),
  ST("choice", "Why did they go to the escape room?", ["a school trip", "Pia's birthday", "Christmas"], 1),
  ST("choice", "Where did they go?", ["to a cinema", "to an escape room", "to a museum"], 1),
  ST("choice", "How many minutes did they have?", ["thirty", "forty", "sixty"], 2),
  GR("choice", "The guide ___ the door.", ["close", "closed", "closing"], 1),
  ST("choice", "What did they need to find?", ["a map", "a golden key", "a secret code"], 1),
  GR("choice", "They ___ under the table.", ["looked", "look", "looks"], 0),
  ST("choice", "Who said, \"We will never get out of here!\"?", ["Pia", "Cass", "Rey"], 2),
  ST("open", "Who solved the last puzzle? Say the name.", ["", "", ""], 0, "Cass."),
  // average (6)
  ST("choice", "What did the note say?", ["\"The key is closer than you think.\"", "\"The key is behind the door.\"", "\"The key is under the table.\""], 0),
  GR("choice", "Cass ___ the last puzzle.", ["solve", "solved", "solving"], 1),
  ST("choice", "How did the friends feel after forty minutes?", ["happy and excited", "tired and a little angry", "sleepy and bored"], 1),
  GR("open", "Fix the sentence: \"Jun finded the key.\"", ["", "", ""], 0, "\"Jun found the key.\""),
  ST("choice", "Where was the key?", ["in Jun's pocket", "inside the clock", "behind a painting"], 0),
  RE("What happened after the note appeared? Tell me in your own words.", "Everybody looked around the room. Pia saw that Jun was quiet and kept touching his jacket. Jun checked his pocket and found the golden key."),
  // difficult (5)
  ST("choice", "Why did Pia look at Jun?", ["He was holding a map.", "He was very quiet and kept touching his jacket.", "He was sitting on the key."], 1),
  GR("choice", "Jun said, \"I ___ it up in the first minute.\"", ["pick", "picked", "picking"], 1),
  ST("open", "Why did Jun's face turn red? Say it in your own words.", ["", "", ""], 0, "He was embarrassed because the key was in his pocket the whole time."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First the friends went into the escape room and the guide closed the door. Then they looked everywhere for the golden key. After that Cass solved the last puzzle and Pia looked at Jun. Finally Jun found the key in his pocket and the door opened with ten seconds left."),
  ST("open", "Would you like to try an escape room? Who would you go with? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"Yes, I would go with my cousins. We like puzzles.\""),
];

// ---- story set: "The Noise at Night" (strange sounds and a birthday surprise, teens, A2 to B1, simple past) ----
export const NIGHT_NOISE_STORY = {
  title: "The Noise at Night",
  text: "For three nights, Hana heard strange sounds from the garage under her bedroom. Tap, tap, tap. Then a long scrape. She was scared, but she did not tell her parents because she did not want to worry them. She thought a thief was in the house.\n\nOn the fourth night, she took a flashlight and walked down the stairs very slowly. Her heart was beating fast. She opened the garage door and the lights came on! Her dad and her little brother Tito stood there with sawdust in their hair. Behind them was a beautiful wooden bookshelf with a big red bow.\n\n\"Happy birthday, Hana!\" they shouted. The next day was her fifteenth birthday. She laughed and hugged them both.",
  image: "/curriculum/letter-board/noise-at-night-cover.jpg",
};

export const NIGHT_NOISE_ITEMS = [
  // easy (9)
  ST("choice", "For how many nights did Hana hear sounds before the fourth night?", ["four", "three", "two"], 1),
  ST("choice", "Where did the sounds come from?", ["the kitchen", "the garage", "the garden"], 1),
  GR("choice", "Hana ___ strange sounds.", ["hear", "heard", "hearing"], 1),
  ST("choice", "What did Hana think was in the house?", ["a ghost", "a cat", "a thief"], 2),
  ST("choice", "How did Hana feel?", ["scared", "happy", "bored"], 0),
  ST("choice", "What did Hana take on the fourth night?", ["a hammer", "a flashlight", "a book"], 1),
  GR("choice", "Her heart ___ beating fast.", ["were", "is", "was"], 2),
  ST("choice", "Who was in the garage?", ["her mom and her sister", "her dad and her little brother", "a thief"], 1),
  ST("open", "What was the name of Hana's little brother? Say the name.", ["", "", ""], 0, "Tito."),
  // average (6)
  ST("choice", "What was in the hair of Hana's dad and brother?", ["paint", "sawdust", "water"], 1),
  GR("choice", "Hana ___ the garage door.", ["open", "opened", "opens"], 1),
  ST("choice", "What was behind them?", ["a wooden bookshelf with a red bow", "a new bike", "a blue desk"], 0),
  GR("open", "Fix the sentence: \"Hana taked a flashlight.\"", ["", "", ""], 0, "\"Hana took a flashlight.\""),
  ST("choice", "Why did Hana not tell her parents about the sounds?", ["She was angry at them.", "She forgot.", "She did not want to worry them."], 2),
  RE("What happened when Hana opened the garage door? Tell me in your own words.", "The lights came on. Her dad and her little brother stood there with sawdust in their hair, and behind them was a wooden bookshelf with a red bow."),
  // difficult (5)
  ST("choice", "Why were her dad and brother in the garage at night?", ["They were fixing the car.", "They were making a birthday present for her.", "They were hiding from her."], 1),
  GR("choice", "The next day ___ her fifteenth birthday.", ["were", "is", "was"], 2),
  ST("open", "How did Hana feel at the end? Say why.", ["", "", ""], 0, "She felt happy and surprised because the noise was a birthday present, not a thief."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Hana heard strange sounds from the garage for three nights and she thought a thief was there. Then on the fourth night she took a flashlight and went downstairs. After that she opened the garage door and the lights came on. Finally she saw her dad and brother with a bookshelf for her birthday."),
  ST("open", "Have you ever had a surprise? What was it? Say two sentences.", ["", "", ""], 0, "Any two sentences, for example: \"My friends gave me a surprise party. I did not know about it.\""),
];

// ---- story set: "The Photo in the Book" (a clue in a second-hand book, teens, A2 to B1, simple past) ----
export const BOOK_PHOTO_STORY = {
  title: "The Photo in the Book",
  text: "Alex loved old books, so on Saturday he went to a second-hand bookshop. Inside one book, he found an old photo of two girls. On the back, someone wrote: \"Meet me under the big clock, 5 o'clock, May 5th.\"\n\nAlex looked at his phone. Today was May 5th, and it was a quarter to five! He ran to the big clock in the town square. At exactly five o'clock, an old man with a white beard walked up to him and smiled. \"You came!\" he said. \"You are the first person to follow the clue.\"\n\nAlex felt confused. \"Is this your photo?\" he asked. The man laughed. \"No. I'm Mr. Tan, the owner of the bookshop. I hide a photo in a book every month. The person who follows the clue gets a free book!\"",
  image: "/curriculum/letter-board/photo-in-the-book-cover.jpg",
};

export const BOOK_PHOTO_ITEMS = [
  // easy (9)
  ST("choice", "What did Alex love?", ["old cars", "old books", "old music"], 1),
  ST("choice", "Where did Alex go on Saturday?", ["to a library", "to a second-hand bookshop", "to a school"], 1),
  ST("choice", "What did Alex find in a book?", ["a letter", "money", "an old photo"], 2),
  GR("choice", "Alex ___ an old photo.", ["found", "find", "finding"], 0),
  ST("choice", "Who was in the photo?", ["two boys", "two girls", "a man and a dog"], 1),
  ST("choice", "What was the date?", ["June 5th", "May 5th", "May 15th"], 1),
  GR("choice", "Today ___ May 5th.", ["is", "were", "was"], 2),
  ST("choice", "Where was the big clock?", ["at school", "in the park", "in the town square"], 2),
  ST("open", "What time did the note say? Say the time.", ["", "", ""], 0, "5 o'clock."),
  // average (6)
  ST("choice", "What was written on the back of the photo?", ["\"Meet me under the big clock, 5 o'clock, May 5th.\"", "\"Call me tonight.\"", "\"Find the golden key.\""], 0),
  GR("choice", "Someone ___ a message on the back.", ["write", "wrote", "writing"], 1),
  ST("choice", "Who walked up to Alex at the clock?", ["an old man with a white beard", "a girl from the photo", "a police officer"], 0),
  GR("open", "Fix the sentence: \"Alex runned to the big clock.\"", ["", "", ""], 0, "\"Alex ran to the big clock.\""),
  ST("choice", "How did Alex feel when the man talked to him?", ["confused", "angry", "sleepy"], 0),
  RE("What happened at the big clock? Tell me in your own words.", "At five o'clock an old man with a white beard walked up to Alex and said he was the first person to follow the clue."),
  // difficult (5)
  ST("choice", "Who was the old man?", ["a friend of the girls", "the owner of the bookshop", "Alex's grandfather"], 1),
  GR("choice", "The person who ___ the clue gets a free book.", ["follow", "follows", "followed"], 1),
  ST("open", "Why did Mr. Tan hide a photo in a book? Say it in your own words.", ["", "", ""], 0, "He wanted to find readers who are curious, and he gives a free book to the person who follows the clue."),
  RE("Retell the whole story. Use first, then, after that and finally.", "First Alex found an old photo with a note in a book at the bookshop. Then he saw it was May 5th and ran to the big clock. After that an old man with a white beard walked up to him. Finally the man said he was the bookshop owner and Alex won a free book."),
  ST("open", "What kind of book would you choose? Say two sentences.", ["", "", ""], 0, "Any two sentences with a reason, for example: \"I would choose a mystery book. I like to guess the ending.\""),
];

// Opens the game in a popup, like the Wheel and the lesson players.
// `start` (1, 2 or 3) skips the setup screen and opens the board at that level.
export function openLetterBoard(id, start) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const h = Math.min(840, screenH - 60);
  const w = Math.min(Math.max(620, Math.round(h * 0.74)), screenW - 40); // tall and narrow like the card (never narrower than the card itself)
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  window.open(
    `/library/letter-board/play/${id}${start ? `?start=${start}` : ""}`,
    "sentencoLetterBoard",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}
