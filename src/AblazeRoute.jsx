import React from "react";
import { useParams } from "react-router-dom";
import IgniteLesson from "./IgniteLesson.jsx";
import AblazeLesson from "./AblazeLesson.jsx";
import { ABLAZE_A2_LESSONS } from "./ablazeA2Data.js";

// Ablaze (A2 Teens) lessons rebuilt in the picture-led style are rendered by the shared
// IgniteLesson player (track="ablaze"); lessons not rebuilt yet keep the older AblazeLesson player.
export default function AblazeRoute() {
  const { unit, lesson } = useParams();
  const entry = ABLAZE_A2_LESSONS[`${unit}-${lesson}`];
  return entry && entry.rebuilt ? <IgniteLesson track="ablaze" /> : <AblazeLesson />;
}
