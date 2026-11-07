// Data for the Unseen Reading hub (Reading > Unseen Reading). It reads the lesson configs and adds a
// one-line "how the two texts connect" for each; the shelf comes from unseenShelfByPart.js.
// Part 5 (Doriel) is not in the hub.

import { UNSEEN_PARTS_0 } from "./unseenPartsData0.js";
import { UNSEEN_PARTS_1 } from "./unseenPartsData1.js";
import { UNSEEN_PARTS_2 } from "./unseenPartsData2.js";
import { UNSEEN_PARTS_3 } from "./unseenPartsData3.js";
import { UNSEEN_PARTS_4 } from "./unseenPartsData4.js";
import { UNSEEN_PARTS_5 } from "./unseenPartsData5.js";
import { UNSEEN_PARTS_6 } from "./unseenPartsData6.js";
import { UNSEEN_PARTS_7 } from "./unseenPartsData7.js";
import { UNSEEN_PARTS_8 } from "./unseenPartsData8.js";
import { UNSEEN_SHELF_BY_PART } from "./unseenShelfByPart.js";

export const UNSEEN_SHELVES = [
  { id: "body", name: "Body and Health" },
  { id: "nature", name: "Nature and Earth" },
  { id: "tech", name: "Tech and Daily Life" },
  { id: "lang", name: "Language and Sound" },
  { id: "space", name: "Space and Astronomy" },
  { id: "mma", name: "MMA and Combat Sports" },
];

// [part, one line on how the two texts connect]. The shelf comes from unseenShelfByPart.js; order inside a shelf follows this list.
const META = [
  [18, "Two body systems that keep you alive: heart and blood"],
  [19, "A defence and its limit: vaccines work, medicines can fail"],
  [20, "Bacteria as friends: living in us, living in our food"],
  [21, "DNA read two ways: in twins, in ancient bones"],
  [22, "One clock, two problems: time zones and teenage nights"],
  [28, "Repair and renewal: a cut closes, cells rebuild"],
  [15, "How the brain reacts: to a new bed, to a smell"],
  [16, "Two food debates: where meat comes from, how long it lasts"],
  [2, "Two city problems and two ideas: heat, and food grown in layers"],
  [3, "Memory in the body and in the mind: vaccines and forgetting"],
  [4, "Two jobs for satellites: weather warnings and directions"],
  [30, "Plastic after we throw it away: tiny pieces, recycling that falls short"],
  [31, "Climbing: a first time on the wall, and the rope that keeps you safe"],
  [23, "Plants that make food, plants that catch it"],
  [24, "Two ways animals face winter: sleep through it or fly away"],
  [25, "Hide or warn: two defences made of color"],
  [26, "Two hidden worlds: under the forest floor, in the harshest places"],
  [27, "One predator changes a whole place, on land and in the sea"],
  [29, "Life where it seems impossible: deep sea and desert"],
  [13, "Bees pass messages, forests make weather"],
  [14, "A reef under heat, a city under heavy rain"],
  [12, "Two kinds of waves: one warns us, one jams us"],
  [6, "Two ways a device makes sure it is really you"],
  [7, "Two everyday gadgets and the trick inside each"],
  [9, "Two apps that quietly steer what you do next"],
  [10, "Two ways things move around a city"],
  [11, "Making and owning less: a printed house, shared tools"],
  [1, "Sharing books with people who have none: a van and street boxes"],
  [8, "Two ways media can help you learn English"],
  [17, "Two ways sound reaches us: translated, and felt as chills"],
  [32, "How English changes: new words and shifting accents"],
  [33, "Learning more than one language: the young brain and the bilingual brain"],
  [34, "Languages that do not use speech: whistles and hands"],
  [35, "Money that can be trusted: paper that is hard to fake, payments that are watched"],
  [36, "The life of a battery: how it wears out and where its lithium comes from"],
  [37, "Maps: what a flat map hides and how an app knows the traffic"],
  [38, "Counting time: atoms that never lose a second, and a calendar that needed fixing"],
  [39, "The sea: why it is salty and why it rises and falls"],
  [40, "Light in the sky: why it is blue and how a rainbow forms"],
  [41, "Volcanoes: why they erupt and the eruption that cooled the planet"],
  [42, "Taste and heat: how chili tricks your sensors and why a cold ruins flavor"],
  [43, "Moving the body: why muscles ache and how exercise may help the brain"],
  [44, "The life of a star: how it begins in a cloud and how it ends"],
  [45, "The Moon: how it began and why it always shows us the same face"],
  [46, "Seeing far: looking back in time with Webb, and measuring how far away stars are"],
  [47, "Black holes: what they are, and how we finally saw one"],
  [48, "Our neighbors: why Mars is red and why Venus is hotter than Mercury"],
  [49, "Eclipses: when the Moon covers the Sun, and when the Earth’s shadow covers the Moon"],
  [50, "How MMA began: an ancient sport, a Brazilian tradition and one night in Denver"],
  [51, "Two ways to win on the ground: leverage from the back, control from the feet"],
  [52, "Striking: boxing against Muay Thai, and what a knockout does to the brain"],
  [53, "Making weight: why classes exist and what it costs to reach the limit"],
  [54, "Choke and score: how a choke works and how judges decide a fight"],
  [55, "Staying safe: how a concussion happens and how the sport tries to protect fighters"],
];

export function unseenSlug(part) { return `unseen-reading-part-${part}`; }

export function buildUnseenHubLessons() {
  const configs = [...UNSEEN_PARTS_0, ...UNSEEN_PARTS_1, ...UNSEEN_PARTS_2, ...UNSEEN_PARTS_3, ...UNSEEN_PARTS_4, ...UNSEEN_PARTS_5, ...UNSEEN_PARTS_6, ...UNSEEN_PARTS_7, ...UNSEEN_PARTS_8];
  const byPart = new Map(configs.map((c) => [c.part, c]));
  return META.map(([part, link]) => {
    const c = byPart.get(part);
    return {
      part, shelf: UNSEEN_SHELF_BY_PART[part], link, slug: unseenSlug(part), title: c.theme, 
      a: c.texts.A.title, b: c.texts.B.title,
      wordsA: c.matches.A.map((m) => m[0]), wordsB: c.matches.B.map((m) => m[0]),
    };
  });
}
