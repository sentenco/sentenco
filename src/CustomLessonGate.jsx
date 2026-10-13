import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

// Wraps every custom-lesson route. A custom lesson opens only for its owner,
// the site owner, or a signed-in teacher who can see a Homeroom post that the
// owner shared it on. The decision comes from the database; this component
// just asks and shows the right screen. If the database function is missing
// (the sharing SQL hasn't been run), only the site owner gets in.

const OWNER_EMAIL = "caldrin1999@gmail.com";

function Screen({ title, text, action }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBFAF7", padding: 24, fontFamily: "'Quicksand', sans-serif" }}>
      <div style={{ maxWidth: 420, textAlign: "center", color: "#2B2A4A" }}>
        <img src="/logo-sentenco.png" alt="" style={{ height: 40, marginBottom: 14 }} />
        <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 24, margin: "0 0 8px" }}>{title}</h1>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6B6E96", margin: "0 0 18px" }}>{text}</p>
        {action}
      </div>
    </div>
  );
}

export default function CustomLessonGate({ slug, children }) {
  const { user, loading } = useAuth();
  const [state, setState] = useState("checking"); // checking | ok | denied | signin

  useEffect(() => {
    if (loading) return undefined;
    if (!user) { setState("signin"); return undefined; }
    let off = false;
    setState("checking");
    supabase.rpc("can_open_custom_lesson", { p_slug: slug }).then(({ data, error }) => {
      if (off) return;
      if (error) setState(user.email?.toLowerCase() === OWNER_EMAIL ? "ok" : "denied");
      else setState(data ? "ok" : "denied");
    });
    return () => { off = true; };
  }, [slug, user, loading]);

  if (state === "ok") return children;
  if (state === "checking") return <Screen title="One moment" text="Checking your access." />;

  const home = (label) => (
    <button
      type="button"
      onClick={() => { window.location.href = "/library"; }}
      style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", background: "#1B2A4A", border: "none", borderRadius: 999, padding: "11px 24px", cursor: "pointer" }}
    >
      {label}
    </button>
  );

  if (state === "signin") {
    return <Screen title="Sign in to open this lesson" text="Custom lessons are private. Sign in, and if a teacher shared this one with you, it will open." action={home("Go to Sentenco")} />;
  }
  return <Screen title="This lesson is private" text="Custom lessons belong to the teacher they were made for. If someone shared it in Homeroom, open it from their post." action={home("Go to Homeroom")} />;
}
