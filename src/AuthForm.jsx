import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function AuthForm({ mode, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const { signUp, signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const authError = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password);

    setLoading(false);

    if (authError) {
      setError(authError.message);
    } else {
      onClose();
    }
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>{isSignUp ? "Create your account" : "Welcome back"}</h2>
        <p className="auth-sub">
          {isSignUp ? "Free forever for beginner-level tools." : "Log in to access your library."}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </label>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? "Please wait..." : isSignUp ? "Sign up free" : "Log in"}
          </button>
        </form>

        <button className="auth-switch" onClick={() => setIsSignUp((v) => !v)}>
          {isSignUp ? "Already have an account? Log in" : "New here? Sign up free"}
        </button>
      </div>

      <style>{`
        .auth-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px;
        }
        .auth-modal {
          background: white; border-radius: 16px; padding: 32px;
          max-width: 380px; width: 100%; position: relative;
          font-family: 'Inter', sans-serif;
        }
        .auth-close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; font-size: 22px;
          cursor: pointer; color: #999; line-height: 1;
        }
        .auth-modal h2 { font-size: 20px; margin-bottom: 6px; color: #1B2A4A; }
        .auth-sub { font-size: 13.5px; color: #777; margin-bottom: 20px; }
        .auth-form { display: flex; flex-direction: column; gap: 14px; }
        .auth-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: #444; }
        .auth-form input, .auth-form select {
          padding: 10px 12px; border: 1px solid #DEDAD0; border-radius: 8px;
          font-size: 14px; outline: none; font-family: inherit; background: white;
        }
        .auth-form input:focus, .auth-form select:focus { border-color: #FF7A59; }
        .auth-error { color: #C0392B; font-size: 13px; margin: 0; }
        .auth-submit {
          background: #FF7A59; color: white; border: none; border-radius: 8px;
          padding: 11px; font-weight: 600; font-size: 14px; cursor: pointer; margin-top: 4px;
        }
        .auth-submit:disabled { opacity: 0.6; cursor: default; }
        .auth-switch {
          background: none; border: none; color: #777; font-size: 13px;
          margin-top: 16px; cursor: pointer; width: 100%; text-align: center;
        }
        .auth-switch:hover { color: #FF7A59; }
      `}</style>
    </div>
  );
}