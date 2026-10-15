import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

// Plain-language versions of the messages the sign-in service sends back.
function friendlyError(message) {
  const m = (message || "").toLowerCase();
  if (m.includes("invalid login")) return "That email and password don't match. Try again.";
  if (m.includes("not confirmed")) return "Confirm your email first. Open the message we sent you, then log in.";
  if (m.includes("already registered")) return "That email already has an account. Log in instead.";
  if (m.includes("rate limit") || m.includes("too many")) return "Too many tries. Wait a minute and try again.";
  if (m.includes("at least")) return "Your password needs at least 6 characters.";
  return message || "Something went wrong. Try again.";
}

export default function AuthForm({ mode, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const [checkInbox, setCheckInbox] = useState(false);
  const [hasPic, setHasPic] = useState(false);
  const { signUp, signIn } = useAuth();

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function switchMode(signup) {
    setIsSignUp(signup);
    setError(null);
    setCheckInbox(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const authError = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password);

    if (authError) {
      setLoading(false);
      setError(friendlyError(authError.message));
      return;
    }
    if (isSignUp) {
      // With email confirmation on there is no session yet: tell them to check their inbox.
      const { data } = await supabase.auth.getSession();
      setLoading(false);
      if (!data?.session) { setCheckInbox(true); return; }
    }
    setLoading(false);
    onClose();
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" role="dialog" aria-modal="true" aria-label={isSignUp ? "Create your account" : "Log in"} onClick={(e) => e.stopPropagation()}>
        <aside className="auth-side">
          <div className="auth-brand">Sentenco</div>
          <h3 className="auth-side-title">
            {isSignUp ? "Lessons your students will actually enjoy." : "Your lessons are right where you left them."}
          </h3>
          <ul className="auth-perks">
            <li><i aria-hidden="true">&#10003;</i>Free forever for beginner-level tools</li>
            <li><i aria-hidden="true">&#10003;</i>7-day Pro trial, no card needed</li>
            <li><i aria-hidden="true">&#10003;</i>Made by a teacher, for teachers</li>
          </ul>
          <div className={`auth-pic-wrap${hasPic ? " is-on" : ""}`}>
            <img className="auth-pic" src="/auth-side.jpg" alt="" onLoad={() => setHasPic(true)} onError={() => setHasPic(false)} />
          </div>
        </aside>

        <section className="auth-main">
          <button className="auth-close" onClick={onClose} aria-label="Close">&times;</button>

          {checkInbox ? (
            <div className="auth-inbox">
              <h2>Check your email</h2>
              <p className="auth-sub">
                We sent a confirmation link to <strong>{email}</strong>. Open it, then come back and log in. If you don't see it, look in your spam folder.
              </p>
              <button type="button" className="auth-submit" onClick={() => switchMode(false)}>Go to log in</button>
            </div>
          ) : (
            <>
              <div className="auth-seg" role="tablist">
                <button type="button" role="tab" aria-selected={isSignUp} className={isSignUp ? "on" : ""} onClick={() => switchMode(true)}>Sign up</button>
                <button type="button" role="tab" aria-selected={!isSignUp} className={!isSignUp ? "on" : ""} onClick={() => switchMode(false)}>Log in</button>
              </div>

              <h2>{isSignUp ? "Create your account" : "Welcome back"}</h2>
              <p className="auth-sub">{isSignUp ? "It takes under a minute." : "Log in to open your library."}</p>

              <form onSubmit={handleSubmit} className="auth-form">
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@school.com"
                    autoComplete="email"
                    required
                    autoFocus
                  />
                </label>
                <label>
                  Password
                  <span className="auth-pw">
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={isSignUp ? "At least 6 characters" : "Your password"}
                      autoComplete={isSignUp ? "new-password" : "current-password"}
                      required
                      minLength={6}
                    />
                    <button type="button" className="auth-eye" onClick={() => setShowPw((v) => !v)}>{showPw ? "Hide" : "Show"}</button>
                  </span>
                </label>

                {error && <p className="auth-error" role="alert">{error}</p>}

                <button type="submit" className="auth-submit" disabled={loading}>
                  {loading ? "One moment…" : isSignUp ? "Sign up free" : "Log in"}
                </button>
              </form>

              <p className="auth-fine">
                {isSignUp ? "Already a member? " : "New here? "}
                <button type="button" className="auth-link" onClick={() => switchMode(!isSignUp)}>{isSignUp ? "Log in" : "Sign up free"}</button>
              </p>
            </>
          )}
        </section>
      </div>

      <style>{`
        .auth-overlay {
          position: fixed; inset: 0; background: rgba(27,42,74,0.55);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px; overflow-y: auto;
        }
        .auth-modal {
          width: 100%; max-width: 860px; background: #fff; border-radius: 26px; overflow: hidden;
          display: grid; grid-template-columns: 5fr 6fr; position: relative;
          font-family: 'Quicksand', sans-serif; color: #2B2A4A;
          box-shadow: 0 30px 70px rgba(27,42,74,0.35);
        }
        .auth-side { background: #1B2A4A; color: #fff; padding: 34px 30px; display: flex; flex-direction: column; gap: 22px; }
        .auth-brand { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; letter-spacing: -0.01em; }
        .auth-side-title { font-family: 'Fredoka', sans-serif; font-weight: 500; font-size: 25px; line-height: 1.2; margin: 0; }
        .auth-perks { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; font-size: 14.5px; font-weight: 600; }
        .auth-perks li { display: flex; gap: 10px; align-items: center; }
        .auth-perks i { width: 22px; height: 22px; border-radius: 50%; background: #FF6B4A; flex: none; display: grid; place-items: center; font-style: normal; font-size: 12px; }
        .auth-pic-wrap { display: none; flex: 1; min-height: 150px; border-radius: 18px; overflow: hidden; }
        .auth-pic-wrap.is-on { display: block; }
        .auth-pic { width: 100%; height: 100%; object-fit: cover; display: block; }
        .auth-main { padding: 34px 34px 28px; position: relative; }
        .auth-close {
          position: absolute; top: 14px; right: 16px; border: 0; background: #F1EEF6;
          width: 32px; height: 32px; border-radius: 50%; color: #6B6E96; font-size: 18px; line-height: 1; cursor: pointer;
        }
        .auth-seg { display: flex; gap: 4px; background: #F1EEF6; border-radius: 999px; padding: 4px; max-width: 240px; }
        .auth-seg button {
          flex: 1; border: 0; background: transparent; color: #6B6E96; font: 700 14px 'Quicksand', sans-serif;
          padding: 9px 14px; border-radius: 999px; cursor: pointer;
        }
        .auth-seg button.on { background: #fff; color: #2B2A4A; box-shadow: 0 2px 8px rgba(43,42,74,0.12); }
        .auth-main h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; margin: 18px 0 4px; color: #2B2A4A; }
        .auth-sub { font-size: 14.5px; color: #6B6E96; margin: 0 0 20px; line-height: 1.55; }
        .auth-form { display: flex; flex-direction: column; gap: 14px; }
        .auth-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 700; color: #2B2A4A; }
        .auth-form input {
          width: 100%; padding: 13px 14px; border: 1.5px solid #E6E3EE; border-radius: 14px; background: #FBFAF7;
          font: 500 15px 'Quicksand', sans-serif; color: #2B2A4A; outline: none;
        }
        .auth-form input:focus { border-color: #FF6B4A; background: #fff; box-shadow: 0 0 0 4px #FDECE5; }
        .auth-pw { position: relative; display: block; }
        .auth-pw input { padding-right: 62px; }
        .auth-eye {
          position: absolute; right: 8px; top: 50%; transform: translateY(-50%); border: 0; background: transparent;
          color: #6B6E96; font: 700 12px 'Quicksand', sans-serif; padding: 6px 8px; border-radius: 8px; cursor: pointer;
        }
        .auth-error { color: #B3321C; background: #FDECE5; border-radius: 10px; font-size: 13px; font-weight: 600; margin: 0; padding: 9px 12px; }
        .auth-submit {
          width: 100%; border: 0; background: #FF6B4A; color: #fff; font: 600 17px 'Fredoka', sans-serif;
          padding: 14px; border-radius: 999px; box-shadow: 0 6px 0 #E8573A; cursor: pointer; margin-top: 4px;
          transition: transform 0.12s, box-shadow 0.12s;
        }
        .auth-submit:hover { transform: translateY(2px); box-shadow: 0 4px 0 #E8573A; }
        .auth-submit:disabled { opacity: 0.65; cursor: default; transform: none; box-shadow: 0 6px 0 #E8573A; }
        .auth-fine { font-size: 13px; color: #6B6E96; text-align: center; margin: 16px 0 0; }
        .auth-link { background: none; border: 0; color: #E8573A; font: 700 13px 'Quicksand', sans-serif; text-decoration: underline; cursor: pointer; padding: 0; }
        .auth-inbox h2 { margin-top: 6px; }
        .auth-close:focus-visible, .auth-seg button:focus-visible, .auth-submit:focus-visible, .auth-link:focus-visible, .auth-eye:focus-visible { outline: 3px solid #FFB4A2; outline-offset: 2px; }
        @media (max-width: 720px) {
          .auth-modal { grid-template-columns: 1fr; max-width: 440px; }
          .auth-side { padding: 22px 24px; gap: 14px; }
          .auth-side-title, .auth-pic-wrap.is-on { display: none; }
          .auth-perks { font-size: 13.5px; gap: 6px; }
          .auth-main { padding: 26px 22px 22px; }
        }
        @media (prefers-reduced-motion: reduce) { .auth-submit { transition: none; } }
      `}</style>
    </div>
  );
}
