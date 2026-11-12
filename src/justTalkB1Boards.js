// Just Talk B1-B2 boards, keyed by lesson slug (b1Slug(title)) or "check-in-N".
import { B1_S1A } from "./justTalkB1S1a.js";
import { B1_S1B } from "./justTalkB1S1b.js";

export const B1_BOARDS = { ...B1_S1A, ...B1_S1B };

// Opinion phrases shown at the top of each discussion, rotated so lessons don't all look the same.
export const B1_PHRASES = [
  ["I'd say that...", "It depends on...", "To be honest,...", "That's a good point, but..."],
  ["In my opinion,...", "I'm not sure, but...", "For example,...", "I see what you mean, but..."],
  ["Personally, I...", "The thing is,...", "I agree, because...", "I don't agree, because..."],
];

export const B1_REACT = ["That's surprising because...", "I already knew that.", "I find that hard to believe because..."];
