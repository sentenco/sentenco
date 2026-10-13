import boy_kidImg from "./assets/notebook/boy-kid.jpg";
import girl_kidImg from "./assets/notebook/girl-kid.jpg";
import neutral_kidImg from "./assets/notebook/neutral-kid.jpg";
import boy_teenImg from "./assets/notebook/boy-teen.jpg";
import girl_teenImg from "./assets/notebook/girl-teen.jpg";
import neutral_teenImg from "./assets/notebook/neutral-teen.jpg";
import male_adultImg from "./assets/notebook/male-adult.jpg";
import female_adultImg from "./assets/notebook/female-adult.jpg";
import neutral_adultImg from "./assets/notebook/neutral-adult.jpg";

// safeArea is the padding (in % of the page box) kept clear of each
// design's border art, so the writable area never overlaps the artwork.
// aspect is width/height of the source image, used to size the page box.
// group is the audience row the design sits in on the picker.
const DESIGNS = [
  {
    key: "boy-kid",
    label: "Boy",
    group: "kids",
    image: boy_kidImg,
    blurb: "Rockets, planets and shooting stars. A space adventure page.",
    aspect: 1055 / 1491,
    safeArea: { top: 7, right: 10, bottom: 7, left: 10 },
    ink: "#1F2A5A",
    frame: "#FBF8F4",
  },
  {
    key: "girl-kid",
    label: "Girl",
    group: "kids",
    image: girl_kidImg,
    blurb: "Butterflies and little flowers in soft pastels.",
    aspect: 1055 / 1491,
    safeArea: { top: 7, right: 9, bottom: 7, left: 9 },
    ink: "#5A3A6B",
    frame: "#FBF8F4",
  },
  {
    key: "neutral-kid",
    label: "Neutral",
    group: "kids",
    image: neutral_kidImg,
    blurb: "Hills, a castle and a hot air balloon. A storybook countryside.",
    aspect: 1055 / 1491,
    safeArea: { top: 9, right: 11, bottom: 11, left: 11 },
    ink: "#2F4A3A",
    frame: "#FBF8F4",
  },
  {
    key: "boy-teen",
    label: "Boy",
    group: "teens",
    image: boy_teenImg,
    blurb: "Soccer balls, boots and goals with bold swooshes.",
    aspect: 1055 / 1491,
    safeArea: { top: 8, right: 9, bottom: 8, left: 9 },
    ink: "#1B2A4A",
    frame: "#FBF8F4",
  },
  {
    key: "girl-teen",
    label: "Girl",
    group: "teens",
    image: girl_teenImg,
    blurb: "Journals, polaroids and headphones in lilac and peach.",
    aspect: 1055 / 1491,
    safeArea: { top: 8, right: 11, bottom: 9, left: 11 },
    ink: "#3F3566",
    frame: "#FBF8F4",
  },
  {
    key: "neutral-teen",
    label: "Neutral",
    group: "teens",
    image: neutral_teenImg,
    blurb: "A torn-paper scrapbook with photos, plants and film.",
    aspect: 1055 / 1491,
    safeArea: { top: 11, right: 15, bottom: 11, left: 14 },
    ink: "#2B2B2B",
    frame: "#FBF8F4",
  },
  {
    key: "male-adult",
    label: "Male",
    group: "adults",
    image: male_adultImg,
    blurb: "Navy and gold: compass, globe, watch and mountains.",
    aspect: 1055 / 1491,
    safeArea: { top: 10, right: 13, bottom: 9, left: 13 },
    ink: "#1B2333",
    frame: "#FBF8F4",
  },
  {
    key: "female-adult",
    label: "Female",
    group: "adults",
    image: female_adultImg,
    blurb: "Leafy vines, jasmine flowers, latte and a pen.",
    aspect: 1055 / 1491,
    safeArea: { top: 8, right: 11, bottom: 9, left: 12 },
    ink: "#2F3D33",
    frame: "#FBF8F4",
  },
  {
    key: "neutral-adult",
    label: "Neutral",
    group: "adults",
    image: neutral_adultImg,
    blurb: "Calm circles, gold lines and olive leaves.",
    aspect: 1055 / 1491,
    safeArea: { top: 11, right: 15, bottom: 10, left: 12 },
    ink: "#232A2E",
    frame: "#FBF8F4",
  },
];

export const NOTEBOOK_GROUPS = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export function getNotebookDesign(key) {
  return DESIGNS.find((d) => d.key === key) || null;
}

// Shared with NotebookPage's .nbp-stage padding so the popup window JS
// sizing (in NotebookHub) and the actual CSS layout agree on how much
// frame to leave around the paper.
export const NOTEBOOK_STAGE_MARGIN = 16;

export default DESIGNS;
