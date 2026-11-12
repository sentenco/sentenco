import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { TLP_STYLES } from "./trackLevelStyles";
import JustTalkLevelTabs from "./JustTalkLevelTabs.jsx";

// Just Talk C1-C2: the owner's private speaking course for advanced students.
// Lesson pattern: Spin and speak (wheel impromptu) > brief > power phrases > main task (debate, dilemma or mini talk)
// > second take > wrap-up. Modules are not written yet, so the page shows an empty module area.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const PLUM = "#5B3F8C";

const CSS = `
.jt-c1-empty { background: #fff; border: 2px dashed #D9CFEA; border-radius: 20px; padding: 40px 24px; text-align: center; display: grid; justify-items: center; gap: 8px; margin-bottom: 26px; }
.jt-c1-empty .ic { width: 52px; height: 52px; border-radius: 50%; background: #EEE8F6; color: ${PLUM}; display: grid; place-items: center; }
.jt-c1-empty h2 { margin: 6px 0 0; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 22px; color: #1B2A4A; }
.jt-c1-empty p { margin: 0; max-width: 46ch; font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.55; }
`;

export default function JustTalkC1Hub() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  useEffect(() => {
    const id = "tlp-styles";
    document.getElementById(id)?.remove();
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = TLP_STYLES;
    document.head.appendChild(tag);
  }, []);

  if (loading) return null;
  if (user?.email?.toLowerCase() !== OWNER_EMAIL) return <p style={{ padding: 40, textAlign: "center", color: "#888" }}>Not available.</p>;

  return (
    <div className="tlp-wrap">
      <style>{CSS}</style>
      <div className="tlp-blob tlp-blob--a" />
      <div className="tlp-blob tlp-blob--b" />
      <div className="tlp-stage">
        <button type="button" className="tlp-breadcrumb" onClick={() => navigate("/library/curriculum")}>
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> Just Talk <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: PLUM }}>C1-C2 &middot; Speaking</span>
        </button>

        <div className="tlp-banner-hero" style={{ background: "#EEE8F6 url(/curriculum/just-talk-c1-banner.png) right center / cover no-repeat" }}>
          <div className="tlp-cefr-tag" style={{ color: PLUM }}>Speaking &middot; CEFR C1-C2 &middot; Only you can see this</div>
          <div className="tlp-banner-title">
            <span className="tlp-level-code" style={{ color: PLUM }}>C1-C2</span>
            <span className="tlp-level-name">Just Talk</span>
          </div>
          <p className="tlp-description">For advanced students who want to speak with more fluency, precision and persuasion: an impromptu speech, a real debate or dilemma, and a better second take.</p>
          <JustTalkLevelTabs active="c1" />
        </div>

        <div className="tlp-stats-strip">
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6.4 6.4" /></svg></div>
            <div><div className="tlp-stat-title">Spin and speak</div><div className="tlp-stat-sub">Every lesson starts with a 90-second impromptu speech</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--coral"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
            <div><div className="tlp-stat-title">Debate, dilemma, mini talk</div><div className="tlp-stat-sub">Three main-task formats that rotate by module</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--lav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg></div>
            <div><div className="tlp-stat-title">Second take</div><div className="tlp-stat-sub">The same speech again, with fewer fillers and new phrases</div></div>
          </div>
        </div>

        <div className="jt-c1-empty">
          <div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 7h6M8 11h6" /></svg></div>
          <h2>Modules coming soon</h2>
          <p>The C1-C2 stages and modules will appear here once the plan is approved.</p>
        </div>
      </div>
    </div>
  );
}
