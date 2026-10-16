// RELAY tracks: each track is a 5-lesson speaking course tailored to one
// context. A track's Library card links to its overview page
// (RelayTrack.jsx), which lists Lessons 1-5; only authored lessons are
// clickable, the rest show as "Coming soon" until their content is added
// here. Mirrors forgeTracks.js, but capped at 5 lessons per track (not 10).

import relayL1 from "./relayData";
import relayL2 from "./relayData2";
import relayL3 from "./relayData3";
import relayL4 from "./relayData4";
import relayL5 from "./relayData5";
import relayTeensL1 from "./relayTeensData";
import relayTeensL2 from "./relayTeensData2";
import relayTeensL3 from "./relayTeensData3";
import relayTeensL4 from "./relayTeensData4";
import relayTeensL5 from "./relayTeensData5";
import relayTeensGamingL1 from "./relayTeensGamingData";
import relayTeensGamingL2 from "./relayTeensGamingData2";
import relayTeensGamingL3 from "./relayTeensGamingData3";
import relayTeensGamingL4 from "./relayTeensGamingData4";
import relayTeensGamingL5 from "./relayTeensGamingData5";
import relayTeensMoneyL1 from "./relayTeensMoneyData";
import relayTeensMoneyL2 from "./relayTeensMoneyData2";
import relayTeensMoneyL3 from "./relayTeensMoneyData3";
import relayTeensMoneyL4 from "./relayTeensMoneyData4";
import relayTeensMoneyL5 from "./relayTeensMoneyData5";
import relayTeensTravelL1 from "./relayTeensTravelData";
import relayTeensTravelL2 from "./relayTeensTravelData2";
import relayTeensTravelL3 from "./relayTeensTravelData3";
import relayTeensTravelL4 from "./relayTeensTravelData4";
import relayTeensTravelL5 from "./relayTeensTravelData5";
import relayTeensFutureL1 from "./relayTeensFutureData";
import relayTeensFutureL2 from "./relayTeensFutureData2";
import relayTeensFutureL3 from "./relayTeensFutureData3";
import relayTeensFutureL4 from "./relayTeensFutureData4";
import relayTeensFutureL5 from "./relayTeensFutureData5";
import relayTeensFoodL1 from "./relayTeensFoodData";
import relayTeensFoodL2 from "./relayTeensFoodData2";
import relayTeensFoodL3 from "./relayTeensFoodData3";
import relayTeensFoodL4 from "./relayTeensFoodData4";
import relayTeensFoodL5 from "./relayTeensFoodData5";
import relayTeensHealthL1 from "./relayTeensHealthData";
import relayTeensHealthL2 from "./relayTeensHealthData2";
import relayTeensHealthL3 from "./relayTeensHealthData3";
import relayTeensHealthL4 from "./relayTeensHealthData4";
import relayTeensHealthL5 from "./relayTeensHealthData5";
import relayTeensMusicL1 from "./relayTeensMusicData";
import relayTeensMusicL2 from "./relayTeensMusicData2";
import relayTeensMusicL3 from "./relayTeensMusicData3";
import relayTeensMusicL4 from "./relayTeensMusicData4";
import relayTeensMusicL5 from "./relayTeensMusicData5";
import relayTeensStyleL1 from "./relayTeensStyleData";
import relayTeensStyleL2 from "./relayTeensStyleData2";
import relayTeensStyleL3 from "./relayTeensStyleData3";
import relayTeensStyleL4 from "./relayTeensStyleData4";
import relayTeensStyleL5 from "./relayTeensStyleData5";
import relayNetworkingL1 from "./relayNetworkingData";
import relayNetworkingL2 from "./relayNetworkingData2";
import relayNetworkingL3 from "./relayNetworkingData3";
import relayNetworkingL4 from "./relayNetworkingData4";
import relayNetworkingL5 from "./relayNetworkingData5";
import relayTravelL1 from "./relayTravelData";
import relayTravelL2 from "./relayTravelData2";
import relayTravelL3 from "./relayTravelData3";
import relayTravelL4 from "./relayTravelData4";
import relayTravelL5 from "./relayTravelData5";
import relayHealthL1 from "./relayHealthData";
import relayHealthL2 from "./relayHealthData2";
import relayHealthL3 from "./relayHealthData3";
import relayHealthL4 from "./relayHealthData4";
import relayHealthL5 from "./relayHealthData5";
import relayFinancesL1 from "./relayFinancesData";
import relayFinancesL2 from "./relayFinancesData2";
import relayFinancesL3 from "./relayFinancesData3";
import relayFinancesL4 from "./relayFinancesData4";
import relayFinancesL5 from "./relayFinancesData5";

const TRACKS = [
  {
    id: "relay-1",
    title: "Everyday Conversations",
    focus: "Small Talk",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayL1, relayL2, relayL3, relayL4, relayL5],
  },
  {
    id: "relay-teens-1",
    title: "School & Friends",
    focus: "Small Talk",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensL1, relayTeensL2, relayTeensL3, relayTeensL4, relayTeensL5],
  },
  {
    id: "relay-teens-gaming-1",
    title: "Gaming & Online Life",
    focus: "Gaming",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensGamingL1, relayTeensGamingL2, relayTeensGamingL3, relayTeensGamingL4, relayTeensGamingL5],
  },
  {
    id: "relay-teens-money-1",
    title: "Part-Time Jobs & Money",
    focus: "Money & Work",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensMoneyL1, relayTeensMoneyL2, relayTeensMoneyL3, relayTeensMoneyL4, relayTeensMoneyL5],
  },
  {
    id: "relay-teens-travel-1",
    title: "Travel & Adventures",
    focus: "Travel",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensTravelL1, relayTeensTravelL2, relayTeensTravelL3, relayTeensTravelL4, relayTeensTravelL5],
  },
  {
    id: "relay-teens-future-1",
    title: "Future Plans & Ambitions",
    focus: "Future",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensFutureL1, relayTeensFutureL2, relayTeensFutureL3, relayTeensFutureL4, relayTeensFutureL5],
  },
  {
    id: "relay-teens-food-1",
    title: "Food & Eating Out",
    focus: "Food",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensFoodL1, relayTeensFoodL2, relayTeensFoodL3, relayTeensFoodL4, relayTeensFoodL5],
  },
  {
    id: "relay-teens-health-1",
    title: "Health & Feeling Good",
    focus: "Health",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensHealthL1, relayTeensHealthL2, relayTeensHealthL3, relayTeensHealthL4, relayTeensHealthL5],
  },
  {
    id: "relay-teens-music-1",
    title: "Music & Creativity",
    focus: "Music & Creativity",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensMusicL1, relayTeensMusicL2, relayTeensMusicL3, relayTeensMusicL4, relayTeensMusicL5],
  },
  {
    id: "relay-teens-style-1",
    title: "Style & Shopping",
    focus: "Style & Shopping",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensStyleL1, relayTeensStyleL2, relayTeensStyleL3, relayTeensStyleL4, relayTeensStyleL5],
  },
  {
    id: "relay-networking-1",
    title: "Networking & Professional Events",
    focus: "Networking",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayNetworkingL1, relayNetworkingL2, relayNetworkingL3, relayNetworkingL4, relayNetworkingL5],
  },
  {
    id: "relay-travel-1",
    title: "Travel & Business Trips",
    focus: "Travel",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTravelL1, relayTravelL2, relayTravelL3, relayTravelL4, relayTravelL5],
  },
  {
    id: "relay-health-1",
    title: "Health & Wellness",
    focus: "Health",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayHealthL1, relayHealthL2, relayHealthL3, relayHealthL4, relayHealthL5],
  },
  {
    id: "relay-finances-1",
    title: "Money & Finances",
    focus: "Money & Finances",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayFinancesL1, relayFinancesL2, relayFinancesL3, relayFinancesL4, relayFinancesL5],
  },
];

export default TRACKS;

export function getTrack(trackId) {
  return TRACKS.find((t) => t.id === trackId) || null;
}

export function getLesson(trackId, lessonNum) {
  const track = getTrack(trackId);
  if (!track) return null;
  return track.lessons[lessonNum - 1] || null;
}
