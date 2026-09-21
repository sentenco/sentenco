import { useState } from "react";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";

// The whole site is in private preview -- only this account can get past
// the lock screen. Everyone else, even if they sign up for their own
// account, sees nothing but the lock. Remove this gate once the site is
// ready to be public.
const ALLOWED_EMAIL = "caldrin1999@gmail.com";

export default function SiteGate({ children }) {
  const { user, loading, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (loading) {
    return <div className="sgate-blank" />;
  }

  const isAllowed = user && user.email?.toLowerCase() === ALLOWED_EMAIL;

  if (isAllowed) return children;

  return (
    <div className="sgate-shell">
      <style>{CSS}</style>
      <div className="sgate-card">
        <span className="sgate-lock">🔒</span>
        <h1 className="sgate-title">sentenco</h1>
        <p className="sgate-blurb">
          {user
            ? "This site is in private preview and isn't open to this account yet."
            : "This site is in private preview. Log in with an authorized account to continue."}
        </p>
        {user ? (
          <button type="button" className="sgate-btn sgate-btn--ghost" onClick={signOut}>
            Log out
          </button>
        ) : (
          <button type="button" className="sgate-btn" onClick={() => setShowAuth(true)}>
            Log in
          </button>
        )}
      </div>
      {showAuth && <AuthForm mode="login" onClose={() => setShowAuth(false)} />}
    </div>
  );
}

const CSS = `
.sgate-blank { width: 100%; min-height: 100vh; background: #FBFAF7; }

.sgate-shell {
  width: 100%;
  min-height: 100vh;
  background: #FBFAF7;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 24px;
  font-family: 'Inter', sans-serif;
}
.sgate-shell * { box-sizing: border-box; }

.sgate-card {
  width: 100%;
  max-width: 360px;
  background: #FFFFFF;
  border: 1px solid #EDEAE0;
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(0,0,0,0.08);
}
.sgate-lock { font-size: 30px; display: block; margin-bottom: 10px; }
.sgate-title {
  font-weight: 700;
  font-size: 20px;
  color: #1B2A4A;
  margin: 0 0 10px;
}
.sgate-blurb {
  font-size: 13.5px;
  color: #777;
  line-height: 1.5;
  margin: 0 0 22px;
}
.sgate-btn {
  font-weight: 600;
  font-size: 14px;
  color: white;
  background: #FF7A59;
  border: none;
  border-radius: 8px;
  padding: 11px 18px;
  cursor: pointer;
  width: 100%;
}
.sgate-btn--ghost {
  background: none;
  color: #777;
  border: 1px solid #DEDAD0;
}
`;
