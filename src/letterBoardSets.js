import { SAMPLE_ITEMS, SAMPLE_STORY, SAMPLE_STORY_ITEMS, SECRET_MAP_STORY, SECRET_MAP_ITEMS } from "./letterBoardData";

// The Letter Board topics teachers can play. Each topic is a set of 20 items (see letterBoardData.js)
// and can be about anything: no categories. Teachers can't add or edit these; new topics are added here,
// often because a teacher asked for one through Custom Lessons.
//
// { id, title, blurb, items, story?, hidden?, coverFit? }
// hidden: not shown on the hub but still playable by its link. coverFit: "contain" for a picture on a plain background.

export const LETTER_BOARD_SETS = [
  {
    id: "sample",
    title: "Everyday English",
    blurb: "A friendly mix: animals, colors, spelling and speaking.",
    items: SAMPLE_ITEMS,
    story: null,
    hidden: true,
  },
  {
    id: "sample-story",
    title: "The Lost Cat",
    blurb: "Read a short story first, then answer questions about it.",
    items: SAMPLE_STORY_ITEMS,
    story: SAMPLE_STORY,
    coverFit: "contain",
  },
  {
    id: "secret-map",
    title: "The Secret Map",
    blurb: "A rainy day, an old box and a treasure hunt. Read the story, then play.",
    items: SECRET_MAP_ITEMS,
    story: SECRET_MAP_STORY,
  },
];

// What the hub shows: every topic that is not hidden.
export const HUB_SETS = LETTER_BOARD_SETS.filter((s) => !s.hidden);

export function getLetterBoardSet(id) {
  return LETTER_BOARD_SETS.find((s) => s.id === id) || null;
}
