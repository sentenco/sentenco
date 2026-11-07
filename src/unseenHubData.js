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
import { UNSEEN_PARTS_9 } from "./unseenPartsData9.js";
import { UNSEEN_SHELF_BY_PART } from "./unseenShelfByPart.js";
import { buildLesson } from "./unseenPartsBuild.js";

export const UNSEEN_SHELVES = [
  { id: "body", name: "Body and Health", short: "Body" },
  { id: "nature", name: "Nature and Earth", short: "Nature" },
  { id: "tech", name: "Tech and Daily Life", short: "Tech" },
  { id: "lang", name: "Language and Sound", short: "Language" },
  { id: "space", name: "Space and Astronomy", short: "Space" },
  { id: "mma", name: "MMA and Combat Sports", short: "MMA" },
  { id: "safety", name: "Safety and First Aid", short: "Safety" },
  { id: "money", name: "Money and Everyday Economics", short: "Money" },
  { id: "mind", name: "Thinking and Media", short: "Thinking" },
  { id: "history", name: "History That Explains Today", short: "History" },
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
  [56, "Skin and heat, skin and light: how to treat a burn, and why the Sun burns us"],
  [57, "Two sides of one danger: how to help a person who is choking, and why it happens"],
  [58, "Two tools for a stopped heart: hands that push, and a machine that shocks"],
  [59, "Germs: how soap beats them, and how they travel from person to person"],
  [60, "Rising prices: why they happen, and why central banks aim for a little"],
  [61, "Your money in the bank: where it goes, and how it is protected"],
  [62, "One idea, two directions: interest that grows your savings, and interest that grows your debt"],
  [63, "The price tag: why big packs cost less per piece, and why prices end in 9"],
  [64, "Fake news: why it travels so fast, and how to check what you read"],
  [65, "A memory is not a video: how it changes each time, and why witnesses get things wrong"],
  [66, "Behind the free and the famous: why ads work on us, and how free apps make money"],
  [67, "Two shortcuts of the mind: seeing what we expect, and holding on to the first number"],
  [68, "Faster ideas: the press that multiplied books, and the network that connected computers"],
  [69, "Setting the world’s clocks: the railways that needed one time, and the line where the date changes"],
  [70, "Signs that traveled: the letters we write with, and the digits we count with"],
  [71, "Money you can hold: the first coins in Lydia, and the first paper notes in China"],
  [72, "Slang: where new words are born, and why they go out of fashion"],
  [73, "Phrases that mean more than their words: where idioms come from, and why they confuse learners"],
  [74, "The sounds of speech: from clicks to tones"],
  [75, "Languages on the edge: why they disappear, and how some came back"],
  [76, "Planets around other stars: how we find them, and where life could be possible"],
  [77, "Falling around the Earth: why astronauts float, and how a rocket gets there"],
  [78, "Our star at work: the fusion inside it, and the storms that make the northern lights"],
  [79, "Living and crowding in orbit: a day on the space station, and the junk around the Earth"],
  [80, "The Philippine stick art: where arnis comes from, and what it is today"],
  [81, "Behind the fight: how fighters train, and how they recover"],
  [82, "Two Japanese arts: the throws of judo, and the strikes of karate"],
  [83, "Gear and ground: why MMA fights in a cage, and why its gloves are so small"],
  [84, "Fire at home: how it spreads and how alarms warn us, and what to do when it starts"],
  [85, "Two hazards of the Philippines: when the ground shakes, and when a typhoon comes"],
  [86, "Danger in the water: why drowning is silent, and how to escape a rip current"],
  [87, "When the body overreacts: how an allergy works, and what to do in a severe reaction"],
  [88, "Two emergencies where minutes matter: the signs of a stroke, and the signs of a heart attack"],
  [89, "Safe to eat? Why food poisoning happens, and how to store food so germs cannot grow"],
  [90, "Your money plan: how to divide your income, and how to protect yourself from surprises"],
  [91, "Borrowing and trust: how a credit score works, and why the price of a loan depends on the borrower"],
  [92, "Where our taxes go and how they are taken: the reason for taxes, and two kinds you meet every day"],
  [93, "Putting money to work: what a share is, and why spreading your money lowers the risk"],
  [94, "Money across borders: why exchange rates move, and what they mean for families who receive remittances"],
  [95, "Not falling for it: how common scams work, and habits that protect you"],
  [96, "Reading numbers carefully: when two things move together, and when a picture tells only half the story"],
  [97, "Better arguments: the tricks that look like reasons, and the habits of people who disagree well"],
  [98, "Where the attention goes: why multitasking does not work, and why phones are so hard to put down"],
  [99, "Who decides what you see: how feed algorithms choose, and what echo chambers do"],
  [100, "Seeing is not believing: how AI makes fake images, and how to check what you see"],
  [101, "Why we do what we do: how habits form, and why we put things off"],
  [102, "Roads of trade: the Silk Road across Asia, and the galleons across the Pacific"],
  [103, "Seven days and their names: why the week exists, and the gods and planets behind Monday to Sunday"],
  [104, "How medicine learned about germs: the doctor who washed his hands, and the vaccine that ended smallpox"],
  [105, "Keeping knowledge: how paper spread from China, and the great library of Alexandria"],
  [106, "Lighting up the world: the bulb that changed the night, and the wires that brought it home"],
  [107, "Finding the way at sea: the needle that points north, and the clock that solved longitude"],
];

export function unseenSlug(part) { return `unseen-reading-part-${part}`; }

export function buildUnseenHubLessons() {
  const configs = [...UNSEEN_PARTS_0, ...UNSEEN_PARTS_1, ...UNSEEN_PARTS_2, ...UNSEEN_PARTS_3, ...UNSEEN_PARTS_4, ...UNSEEN_PARTS_5, ...UNSEEN_PARTS_6, ...UNSEEN_PARTS_7, ...UNSEEN_PARTS_8, ...UNSEEN_PARTS_9];
  const byPart = new Map(configs.map((c) => [c.part, c]));
  return META.map(([part, link]) => {
    const c = byPart.get(part);
    return {
      part, shelf: UNSEEN_SHELF_BY_PART[part], link, slug: unseenSlug(part), title: c.theme, 
      a: c.texts.A.title, b: c.texts.B.title,
      questions: buildLesson(c).items.length, wordsA: c.matches.A.map((m) => m[0]), wordsB: c.matches.B.map((m) => m[0]),
    };
  });
}
