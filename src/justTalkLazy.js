import { lazy } from "react";

// Just Talk: the owner's private speaking course, loaded only when opened.
export const JustTalkHub = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkHub })));
export const JustTalkClass = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkClass })));
export const JustTalkCard = lazy(() => import("./JustTalkRoom.jsx").then((m) => ({ default: m.JustTalkCard })));
export const JustTalkBoard = lazy(() => import("./JustTalkBoard.jsx"));
export const JustTalkB1Hub = lazy(() => import("./JustTalkB1Hub.jsx"));
export const JustTalkB1Board = lazy(() => import("./JustTalkB1Board.jsx"));
export const JustTalkC1Hub = lazy(() => import("./JustTalkC1Hub.jsx"));
