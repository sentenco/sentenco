import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";

const GUIDES = {
  "A1-kids": {
    subtitle:
      "A quick-scan guide for new teachers teaching Sentenco A1 one-on-one online classes.",
    intro:
      "This guide gives teachers a fast overview of each lesson in Unit 1 and Unit 2. Use it as a live reference to see what to teach first, what to practice, and what to avoid.",
    units: [
      {
        unit: 1,
        lessons: [
          {
            n: 1,
            title: "Hello & My Name",
            goal: "Say hello and introduce yourself by name.",
            teachFirst: "Hello, goodbye, “What's your name?” / “My name is ___.”",
            practice: "Greet a partner and ask their name.",
            tip: "Don't ask for age or country yet — those come in Lesson 2.",
          },
          {
            n: 2,
            title: "My Age",
            goal: "Say your age, phone number, and where you're from.",
            teachFirst: "Numbers 1–10, “How old are you?”, phone number, “Where are you from?”",
            practice: "Ask and answer age, phone number, and country.",
            tip: "Country only comes up here — model it before asking the student to use it.",
          },
          {
            n: 3,
            title: "My Family",
            goal: "Name family members and talk about your family.",
            teachFirst: "Family words (mom, dad, sister, brother…), “I have a ___.”",
            practice: "Describe your own family using taught words.",
            tip: "Stick to the words taught — don't expand to aunt/uncle yet.",
          },
          {
            n: 4,
            title: "My Likes",
            goal: "Say what you like and don't like.",
            teachFirst: "Love / Like / Don't Like / Hate, “Do you like ___?”",
            practice: "Answer “Do you like…?” with real preferences.",
            tip: "Keep it to like/dislike only — no reasons (“because”) yet.",
          },
          {
            n: 5,
            title: "All About Me",
            goal: "Combine name, age, family, and likes into one recap.",
            teachFirst: "Nothing new — pure recap of Lessons 1–4.",
            practice: "Recap using only previously taught lines.",
            tip: "If a recap line is hard, that earlier lesson needs review.",
          },
          {
            n: 6,
            title: "What Can You Say? (Assessment)",
            goal: "Check if the student can produce name/age/country independently.",
            teachFirst: "Nothing new — assessment only.",
            practice: "Match, read, and speak the 4 core Unit 1 lines.",
            tip: "This is a check, not a teaching lesson — support, don't over-correct.",
          },
        ],
      },
      {
        unit: 2,
        lessons: [
          {
            n: 1,
            title: "My Morning",
            goal: "Talk about your morning routine in order.",
            teachFirst: "Wake up, brush my teeth, get dressed, go to school.",
            practice: "Sequence the routine with First/Then/Next/Last.",
            tip: "Model the full sequence before asking the student to order it.",
          },
          {
            n: 2,
            title: "Breakfast Time",
            goal: "Name breakfast foods and say what you eat and drink.",
            teachFirst: "Bread, milk, egg, cereal, “I eat ___.” / “I drink ___.”",
            practice: "Choose 2 breakfast items and say them.",
            tip: "Keep eat vs. drink distinct — milk is drunk, not eaten.",
          },
          {
            n: 3,
            title: "Go to School",
            goal: "Talk about your school-morning routine.",
            teachFirst: "School bag, shoes, bus, school, “I get/put on/take/go to ___.”",
            practice: "Order the routine and choose 2–3 actions to say.",
            tip: "Each item uses a different verb (get/put on/take/go) — model each one.",
          },
          {
            n: 4,
            title: "My Afternoon",
            goal: "Talk about your afternoon routine.",
            teachFirst: "Lunch, homework, play, TV, “I eat/do/play/watch ___.”",
            practice: "Sequence and choose 2–3 actions to say.",
            tip: "“Play” and “watch TV” don't take the same object pattern — don't force it.",
          },
          {
            n: 5,
            title: "My Evening",
            goal: "Talk about your evening routine.",
            teachFirst: "Dinner, bath, pajamas, bed, “I eat/take/put on/go to ___.”",
            practice: "Sequence and choose 2–3 actions to say.",
            tip: "This closes the full-day story — link back to Morning/Afternoon if ready.",
          },
          {
            n: 6,
            title: "All About My Day (Review)",
            goal: "Recap the whole day — morning, afternoon, evening.",
            teachFirst: "Nothing new — pure recap of Lessons 1–5.",
            practice: "Sort actions by time of day, then describe your whole day.",
            tip: "If sorting is hard, go back to that time-of-day's lesson.",
          },
          {
            n: 7,
            title: "My Day Check (Assessment)",
            goal: "Check if the student can produce day-routine language independently.",
            teachFirst: "Nothing new — assessment only.",
            practice: "Name words, order the day, say 3 lines about their day.",
            tip: "This is a check, not a teaching lesson — support, don't over-correct.",
          },
        ],
      },
    ],
  },
};

function LessonTable({ lessons }) {
  return (
    <div className="tg-table-wrap">
      <table className="tg-table">
        <thead>
          <tr>
            <th>Lesson #</th>
            <th>Title</th>
            <th>Goal</th>
            <th>Teach First</th>
            <th>Practice</th>
            <th>Teacher Tip</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((l) => (
            <tr key={l.n}>
              <td data-label="Lesson #">{l.n}</td>
              <td data-label="Title"><strong>{l.title}</strong></td>
              <td data-label="Goal">{l.goal}</td>
              <td data-label="Teach First">{l.teachFirst}</td>
              <td data-label="Practice">{l.practice}</td>
              <td data-label="Teacher Tip">{l.tip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// C1/C2 lessons carry real teacher guidance as a `teacherguide` slide row
// per lesson (see sql/lessons/README.md and SlideTeacherGuide.jsx) rather
// than a hardcoded table like the GUIDES object below — that content
// predates the C1/C2 redesign and was never extended past A1 Kids. This
// section groups by unit and renders each lesson's guide content directly
// from Supabase instead.
function AdvancedLessonGuide({ lesson, content }) {
  if (!content) {
    return (
      <div className="tg-adv-lesson tg-adv-lesson--empty">
        <div className="tg-adv-lesson-head">
          <h3>Lesson {lesson.lesson_number} — {lesson.title}</h3>
        </div>
        <p className="tg-adv-empty-note">Guide not written yet for this lesson.</p>
      </div>
    );
  }
  return (
    <div className="tg-adv-lesson">
      <div className="tg-adv-lesson-head">
        <h3>Lesson {lesson.lesson_number} — {lesson.title}</h3>
        {content.mode && <span className="tg-adv-mode-badge">{content.mode}</span>}
      </div>
      {(content.sections || []).map((section, i) => (
        <div className="tg-adv-section" key={i}>
          <div className="tg-adv-section-label">{section.label}</div>
          {(section.blocks || []).map((block, j) => (
            <div className="tg-adv-block" key={j}>
              {block.subLabel && <div className="tg-adv-sublabel">{block.subLabel}</div>}
              <p className={`tg-adv-text ${block.style === "quote" ? "is-quote" : ""} ${block.style === "accent" ? "is-accent" : ""}`}>
                {block.text}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TeacherGuide() {
  const { level, track } = useParams();
  const [searchParams] = useSearchParams();
  const guide = GUIDES[`${level}-${track}`];
  const isAdvancedTrack = level === "C1" || level === "C2";

  const unitParam = searchParams.get("unit");
  const scopedUnit = unitParam ? Number(unitParam) : null;
  const lessonParam = searchParams.get("lesson");
  const scopedLesson = lessonParam ? Number(lessonParam) : null;
  const units = guide
    ? scopedUnit
      ? guide.units.filter((u) => u.unit === scopedUnit)
      : guide.units
    : [];

  const [advLessons, setAdvLessons] = useState([]);
  const [advContent, setAdvContent] = useState({});
  const [advLoading, setAdvLoading] = useState(isAdvancedTrack);

  useEffect(() => {
    if (!isAdvancedTrack) return;
    let cancelled = false;

    async function load() {
      setAdvLoading(true);
      let lessonsQuery = supabase
        .from("lessons")
        .select("*")
        .eq("level", level)
        .eq("age_track", track)
        .eq("is_active", true)
        .order("unit_number", { ascending: true })
        .order("lesson_number", { ascending: true });
      if (scopedUnit) lessonsQuery = lessonsQuery.eq("unit_number", scopedUnit);
      if (scopedLesson) lessonsQuery = lessonsQuery.eq("lesson_number", scopedLesson);

      const { data: lessonsData } = await lessonsQuery;
      if (cancelled) return;
      const list = lessonsData || [];
      setAdvLessons(list);

      const ids = list.map((l) => l.id);
      if (ids.length) {
        const { data: slidesData } = await supabase
          .from("lesson_slides")
          .select("lesson_id, content")
          .in("lesson_id", ids)
          .eq("slide_type", "teacherguide")
          .eq("is_active", true);
        if (cancelled) return;
        const map = {};
        (slidesData || []).forEach((s) => {
          map[s.lesson_id] = s.content;
        });
        setAdvContent(map);
      } else {
        setAdvContent({});
      }
      setAdvLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [isAdvancedTrack, level, track, scopedUnit, scopedLesson]);

  const advUnitGroups = [];
  advLessons.forEach((lesson) => {
    let group = advUnitGroups.find((g) => g.unit === lesson.unit_number);
    if (!group) {
      group = { unit: lesson.unit_number, lessons: [] };
      advUnitGroups.push(group);
    }
    group.lessons.push(lesson);
  });

  return (
    <div className="tg-wrap">
      <style>{CSS}</style>

      <div className="tg-topbar">
        <div className="tg-breadcrumb">
          Curriculum &rsaquo; {level} &rsaquo; {track} &rsaquo;{" "}
          <span>
            Teacher's Guide
            {scopedLesson ? ` · Unit ${scopedUnit} · Lesson ${scopedLesson}` : scopedUnit ? ` · Unit ${scopedUnit}` : ""}
          </span>
        </div>
      </div>

      {isAdvancedTrack ? (
        advLoading ? (
          <div className="tg-empty">
            <h1>Teacher's Guide</h1>
            <p>Loading…</p>
          </div>
        ) : advUnitGroups.length === 0 ? (
          <div className="tg-empty">
            <h1>Teacher's Guide</h1>
            <p>
              There aren't any {level} {track} lessons here yet. Check back soon —
              we add new lessons every week.
            </p>
          </div>
        ) : (
          <div className="tg-content">
            {!scopedLesson && (
              <div className="tg-hero">
                <span className="tg-hero-badge">{level} · {track}</span>
                <h1 className="tg-hero-title">Teacher's Guide</h1>
                <p className="tg-hero-intro">
                  {scopedUnit
                    ? `Live reference for Unit ${scopedUnit} — one section per lesson, in teaching order.`
                    : "Live reference for every lesson in this track — one section per lesson, in teaching order."}
                </p>
              </div>
            )}
            {advUnitGroups.map((g) => (
              <section className={`tg-unit${scopedLesson ? " tg-unit--single" : ""}`} key={g.unit}>
                {!scopedLesson && <h2 className="tg-unit-title">Unit {g.unit}</h2>}
                {g.lessons.map((lesson) => (
                  <AdvancedLessonGuide key={lesson.id} lesson={lesson} content={advContent[lesson.id]} />
                ))}
              </section>
            ))}
          </div>
        )
      ) : !guide ? (
        <div className="tg-empty">
          <h1>Teacher's Guide</h1>
          <p>
            There isn't a teacher's guide for {level} {track} yet. Check back soon —
            we add guides as new units are built.
          </p>
        </div>
      ) : (
        <div className="tg-content">
          <div className="tg-hero">
            <span className="tg-hero-badge">{level} · {track}</span>
            <h1 className="tg-hero-title">Teacher's Guide</h1>
            <p className="tg-hero-subtitle">{guide.subtitle}</p>
            <p className="tg-hero-intro">
              {scopedUnit
                ? `This is the Unit ${scopedUnit} section of the guide. Use it as a live reference to see what to teach first, what to practice, and what to avoid.`
                : guide.intro}
            </p>
          </div>

          {units.map((u) => (
            <section className="tg-unit" key={u.unit}>
              <h2 className="tg-unit-title">Unit {u.unit}</h2>
              <LessonTable lessons={u.lessons} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.tg-wrap {
  min-height: 100%;
  background: #FBFAF7;
  font-family: 'Quicksand', sans-serif;
  color: #2B2330;
}

.tg-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
}
.tg-breadcrumb { font-size: 12px; font-weight: 600; color: #8A7B8A; text-transform: capitalize; }
.tg-breadcrumb span { color: #D85A30; }

.tg-content { padding: 32px 48px 72px; max-width: 1100px; margin: 0 auto; }

.tg-hero { padding-bottom: 28px; border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 28px; }
.tg-hero-badge {
  display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
  text-transform: uppercase; color: #D85A30; background: #FAECE7;
  padding: 4px 12px; border-radius: 999px; margin-bottom: 12px;
}
.tg-hero-title {
  font-family: 'Fredoka', sans-serif; font-size: 30px; font-weight: 700;
  margin: 0 0 8px; color: #2B2330;
  letter-spacing: normal;
}
.tg-hero-subtitle { font-size: 15px; font-weight: 600; color: #5A4E6A; margin: 0 0 10px; }
.tg-hero-intro { font-size: 13.5px; font-weight: 500; color: #8A7B8A; line-height: 1.6; max-width: 720px; margin: 0; }

.tg-unit { margin-bottom: 36px; }
.tg-unit-title {
  font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 700;
  color: #2B2330; margin: 0 0 14px;
  padding-bottom: 8px; border-bottom: 2px solid #FF7A59;
  display: inline-block;
}

.tg-table-wrap {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #fff;
}
.tg-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.tg-table th {
  text-align: left; font-family: 'Quicksand', sans-serif; font-weight: 700;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.04em;
  color: #8A7B8A; background: #FAF8F4; padding: 10px 14px;
  border-bottom: 1px solid rgba(0,0,0,0.08); white-space: nowrap;
}
.tg-table td {
  padding: 12px 14px; vertical-align: top; color: #4A4152;
  border-bottom: 1px solid rgba(0,0,0,0.05); line-height: 1.5;
}
.tg-table tr:last-child td { border-bottom: none; }
.tg-table td strong { color: #2B2330; font-weight: 700; }
.tg-table td:first-child { text-align: center; color: #A89BAA; font-weight: 700; width: 40px; }

.tg-empty { padding: 60px 48px; text-align: center; }
.tg-empty h1 { font-family: 'Fredoka', sans-serif; font-size: 24px; margin-bottom: 8px; }
.tg-empty p { color: #8A7B8A; font-size: 14px; }

.tg-adv-lesson {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  background: #fff;
  padding: 18px 22px;
  margin-bottom: 16px;
}
.tg-adv-lesson--empty { background: #FAF8F4; }
.tg-unit--single { margin-top: 8px; }
.tg-adv-lesson-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; margin-bottom: 12px;
  padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.06);
}
.tg-adv-lesson-head h3 {
  font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 700;
  color: #2B2330; margin: 0;
}
.tg-adv-mode-badge {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  color: #D85A30; background: #FAECE7; padding: 3px 10px; border-radius: 999px;
  white-space: nowrap;
}
.tg-adv-empty-note { color: #A89BAA; font-size: 13px; font-style: italic; margin: 0; }
.tg-adv-section { margin-bottom: 14px; }
.tg-adv-section:last-child { margin-bottom: 0; }
.tg-adv-section-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  color: #B08D77; margin-bottom: 6px;
}
.tg-adv-block { margin-bottom: 8px; }
.tg-adv-block:last-child { margin-bottom: 0; }
.tg-adv-sublabel {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  color: #A89BAA; margin-bottom: 3px;
}
.tg-adv-text { font-size: 13.5px; line-height: 1.6; color: #4A4152; margin: 0; }
.tg-adv-text.is-quote { font-style: italic; color: #6B5F52; }
.tg-adv-text.is-accent { font-style: italic; color: #B5502E; }

@media (max-width: 720px) {
  .tg-topbar, .tg-content { padding-left: 20px; padding-right: 20px; }
  .tg-table thead { display: none; }
  .tg-table, .tg-table tbody, .tg-table tr, .tg-table td { display: block; width: 100%; }
  .tg-table tr {
    padding: 12px 14px; border-bottom: 1px solid rgba(0,0,0,0.08);
  }
  .tg-table td {
    border-bottom: none; padding: 4px 0; text-align: left;
  }
  .tg-table td:first-child { text-align: left; }
  .tg-table td::before {
    content: attr(data-label);
    display: block;
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; color: #A89BAA; margin-bottom: 2px;
  }
}
`;
