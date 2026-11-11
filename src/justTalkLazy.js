import { lazy } from "react";

// Just Talk: the owner's private speaking course, loaded only when opened.
export const JustTalkHub = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkHub })));
export const JustTalkClass = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkClass })));
export const JustTalkCard = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkCard })));
