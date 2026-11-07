// Data for the Unseen Reading hub (Reading > Unseen Reading). It reads the lesson
// configs for Parts 6-29 and adds a subject shelf and a one-line "how the two texts
// connect" for each. Parts 1-4 are older lessons written before the texts were
// paired by topic, so they are listed by hand. Part 5 (Doriel) is not in the hub.

import { UNSEEN_PARTS_1 } from "./unseenPartsData1.js";
import { UNSEEN_PARTS_2 } from "./unseenPartsData2.js";
import { UNSEEN_PARTS_3 } from "./unseenPartsData3.js";
import { UNSEEN_PARTS_4 } from "./unseenPartsData4.js";
import { UNSEEN_PARTS_5 } from "./unseenPartsData5.js";
import { UNSEEN_PARTS_6 } from "./unseenPartsData6.js";

export const UNSEEN_SHELVES = [
  { id: "body", name: "Body and Health" },
  { id: "nature", name: "Nature and Earth" },
  { id: "tech", name: "Tech and Daily Life" },
  { id: "lang", name: "Language and Sound" },
  { id: "older", name: "Older lessons" },
];

// Shelf order inside each shelf follows this list.
const META = [
  [18, "body", "Two body systems that keep you alive: heart and blood"],
  [19, "body", "A defence and its limit: vaccines work, medicines can fail"],
  [20, "body", "Bacteria as friends: living in us, living in our food"],
  [21, "body", "DNA read two ways: in twins, in ancient bones"],
  [22, "body", "One clock, two problems: time zones and teenage nights"],
  [28, "body", "Repair and renewal: a cut closes, cells rebuild"],
  [15, "body", "How the brain reacts: to a new bed, to a smell"],
  [16, "body", "Two food debates: where meat comes from, how long it lasts"],
  [23, "nature", "Plants that make food, plants that catch it"],
  [24, "nature", "Two ways animals face winter: sleep through it or fly away"],
  [25, "nature", "Hide or warn: two defences made of color"],
  [26, "nature", "Two hidden worlds: under the forest floor, in the harshest places"],
  [27, "nature", "One predator changes a whole place, on land and in the sea"],
  [29, "nature", "Life where it seems impossible: deep sea and desert"],
  [13, "nature", "Bees pass messages, forests make weather"],
  [14, "nature", "A reef under heat, a city under heavy rain"],
  [12, "nature", "Two kinds of waves: one warns us, one jams us"],
  [6, "tech", "Two ways a device makes sure it is really you"],
  [7, "tech", "Two everyday gadgets and the trick inside each"],
  [9, "tech", "Two apps that quietly steer what you do next"],
  [10, "tech", "Two ways things move around a city"],
  [11, "tech", "Making and owning less: a printed house, shared tools"],
  [8, "lang", "Two ways media can help you learn English"],
  [17, "lang", "Two ways sound reaches us: translated, and felt as chills"],
];

const NOT_LINKED = "These two texts are not linked";
const OLD = [
  { part: 1, level: "A2 to low B1", title: "A Library Van and a Climbing Diary", a: "The Library Van", b: "Climbing Diary" },
  { part: 2, title: "Hot Cities and GPS", a: "Why Cities Are Hotter", b: "How GPS Works" },
  { part: 3, title: "Vaccines and Microplastics", a: "How a Vaccine Trains the Body", b: "Microplastics" },
  { part: 4, title: "Weather Warnings and Forgetting", a: "How Weather Warnings Work", b: "Why We Forget" },
];

export function unseenSlug(part) { return `unseen-reading-part-${part}`; }

export function buildUnseenHubLessons() {
  const configs = [...UNSEEN_PARTS_1, ...UNSEEN_PARTS_2, ...UNSEEN_PARTS_3, ...UNSEEN_PARTS_4, ...UNSEEN_PARTS_5, ...UNSEEN_PARTS_6];
  const byPart = new Map(configs.map((c) => [c.part, c]));
  const paired = META.map(([part, shelf, link]) => {
    const c = byPart.get(part);
    return {
      part, shelf, link, slug: unseenSlug(part), title: c.theme, level: "B1+ to low B2",
      a: c.texts.A.title, b: c.texts.B.title,
      wordsA: c.matches.A.map((m) => m[0]), wordsB: c.matches.B.map((m) => m[0]),
    };
  });
  const older = OLD.map((o) => ({
    part: o.part, shelf: "older", link: NOT_LINKED, slug: unseenSlug(o.part), title: o.title,
    level: o.level || "B1+ to low B2", a: o.a, b: o.b, older: true,
  }));
  return [...paired, ...older];
}
