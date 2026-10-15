import { useEffect, useState } from "react";
import { timeAgo } from "./slideDeckTypes";
import { useAuth } from "./AuthContext";
import { getPendingRequesterIds, getFollowingIds, respondConnection, followUser } from "./networkApi.js";

// The bell panel shared by the Homeroom header (Library.jsx) and the page header (LibraryHeader.jsx):
// one soft card per reply, unread ones outlined in coral, a count in the heading and a mark-all button.

function BellBig() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function PostIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.1a8.4 8.4 0 1 1 16.1-4.4z" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 14 4 9 9 4" />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20a7 7 0 0 1 14 0" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M17 14a6 6 0 0 1 5 6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const NETWORK_TYPES = ["connect_request", "connect_accepted", "new_follower"];

function lineFor(n) {
  const who = <strong>{n.actor_name || "Someone"}</strong>;
  if (n.type === "connect_request") return <>{who} wants to connect with you</>;
  if (n.type === "connect_accepted") return <>{who} accepted your connection request</>;
  if (n.type === "new_follower") return <>{who} started following you</>;
  if (n.type === "code_redeemed") return <>{who} redeemed an access code</>;
  return <>{who} {n.type === "post_reply" ? "replied to your post" : "replied to your comment"}</>;
}

export default function NotificationPanel({ notifications, onGo, onRead, onMarkAll }) {
  const { user } = useAuth();
  const unread = notifications.filter((n) => !n.read_at).length;
  const [pending, setPending] = useState(null);   // ids still waiting for my answer
  const [following, setFollowing] = useState(null); // ids I follow
  const [done, setDone] = useState({});           // notification id -> "accepted" | "declined" | "followed"
  const hasNetwork = notifications.some((n) => NETWORK_TYPES.includes(n.type));

  useEffect(() => {
    if (!user || !hasNetwork) return;
    getPendingRequesterIds(user.id).then(setPending);
    getFollowingIds(user.id).then(setFollowing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, hasNetwork]);

  async function answer(n, accept) {
    setDone((d) => ({ ...d, [n.id]: accept ? "accepted" : "declined" }));
    await respondConnection(n.actor_id, accept);
    onRead?.(n);
  }

  async function followBack(n) {
    setDone((d) => ({ ...d, [n.id]: "followed" }));
    await followUser(n.actor_id);
    onRead?.(n);
  }
  return (
    <>
      <style>{CSS}</style>
      <div className="np" role="dialog" aria-label="Notifications">
        <div className="np-top">
          <h3 className="np-title">Notifications</h3>
          <span className={`np-pill${unread ? "" : " is-zero"}`}>{unread ? `${unread} new` : "All read"}</span>
        </div>
        {notifications.length === 0 ? (
          <div className="np-empty">
            <span className="np-ring"><BellBig /></span>
            <h4>You're all caught up</h4>
            <p>When someone replies to your posts or comments, you'll see it here.</p>
          </div>
        ) : (
          <>
            <div className="np-list">
              {notifications.map((n) => {
                const kind = n.type === "post_reply" ? "is-post" : n.type === "comment_reply" ? "is-comment" : n.type === "new_follower" ? "is-follow" : "is-network";
                const icon = n.type === "post_reply" ? <PostIcon /> : n.type === "comment_reply" ? <ReplyIcon /> : n.type === "new_follower" ? <EyeIcon /> : <UsersIcon />;
                const result = done[n.id];
                const canAnswer = n.type === "connect_request" && !result && pending && pending.includes(n.actor_id);
                const canFollowBack = n.type === "new_follower" && !result && following && !following.includes(n.actor_id);
                return (
                  <div key={n.id} className={`np-card${n.read_at ? " is-read" : " is-unread"}`}>
                    <button type="button" className="np-main" onClick={() => onGo(n)}>
                      <span className={`np-tile ${kind}`}>{icon}</span>
                      <span className="np-text">
                        <span className="np-who">{result === "accepted" ? <>You and <strong>{n.actor_name || "them"}</strong> are now connected</> : result === "declined" ? <>You declined <strong>{n.actor_name || "their"}</strong>’s request</> : result === "followed" ? <>You now follow <strong>{n.actor_name || "them"}</strong></> : lineFor(n)}</span>
                        <span className="np-time">{timeAgo(n.created_at)}</span>
                      </span>
                      {!n.read_at && !result && <span className="np-new">New</span>}
                    </button>
                    {(canAnswer || canFollowBack) && (
                      <div className="np-actions">
                        {canAnswer && (
                          <>
                            <button type="button" className="np-act np-act--coral" onClick={() => answer(n, true)}>Accept</button>
                            <button type="button" className="np-act np-act--soft" onClick={() => answer(n, false)}>Decline</button>
                          </>
                        )}
                        {canFollowBack && <button type="button" className="np-act np-act--line" onClick={() => followBack(n)}>Follow back</button>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="np-foot">
              <button type="button" className="np-markall" onClick={onMarkAll} disabled={!unread}>{unread ? "Mark all as read" : "All read"}</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const CSS = `
.np {
  position: absolute; top: 48px; right: 0; width: 410px; max-width: calc(100vw - 24px); z-index: 30;
  background: #F1F3F8; border-radius: 28px; padding: 16px; font-family: 'Quicksand', sans-serif; color: #2B2A4A;
  box-shadow: 0 0 0 1px rgba(43,42,74,0.1), 0 30px 60px -20px rgba(27,42,74,0.4);
}
.np * { box-sizing: border-box; }
.np-top { display: flex; align-items: center; justify-content: space-between; padding: 2px 4px 12px; }
.np-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; margin: 0; }
.np-pill { background: #FF6B4A; color: #fff; border-radius: 999px; font-size: 12px; font-weight: 700; padding: 4px 12px; }
.np-pill.is-zero { background: #E7EAF2; color: #8B84A3; }
.np-list { display: flex; flex-direction: column; gap: 8px; max-height: min(430px, 60vh); overflow-y: auto; padding: 3px; margin: -3px; }
.np-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 2px rgba(27,42,74,0.05); transition: transform 0.15s; }
.np-card:hover { transform: translateY(-1px); }
.np-card.is-unread { box-shadow: 0 0 0 2px #FF6B4A, 0 10px 22px -12px rgba(255,107,74,0.6); }
.np-main { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; border: none; background: none; cursor: pointer; font-family: inherit; color: inherit; padding: 12px 14px; border-radius: 20px; }
.np-main:focus-visible, .np-act:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
.np-tile { width: 42px; height: 42px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.np-tile svg { width: 19px; height: 19px; }
.np-tile.is-post { background: #FDECE5; color: #E0502F; }
.np-tile.is-comment { background: #E3F0FB; color: #1B4F7A; }
.np-tile.is-network { background: #EDE6F7; color: #5B3F82; }
.np-tile.is-follow { background: #E4F3EA; color: #1F6B45; }
.np-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.np-who { font-size: 14px; line-height: 1.4; font-weight: 600; }
.np-who strong { font-weight: 700; }
.np-card.is-read .np-who { color: #55527a; font-weight: 500; }
.np-time { font-size: 12px; font-weight: 700; color: #8B84A3; }
.np-new { font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; color: #E0502F; background: #FDECE5; border-radius: 999px; padding: 2px 8px; flex-shrink: 0; }
.np-actions { display: flex; gap: 8px; padding: 0 14px 12px 68px; }
.np-act { border: none; border-radius: 999px; padding: 7px 16px; font-family: inherit; font-size: 12.5px; font-weight: 700; cursor: pointer; }
.np-act--coral { background: #FF6B4A; color: #fff; }
.np-act--coral:hover { background: #E0502F; }
.np-act--soft { background: #F1F3F8; color: #2B2A4A; }
.np-act--soft:hover { background: #E7EAF2; }
.np-act--line { background: #fff; color: #2B2A4A; box-shadow: inset 0 0 0 1.5px rgba(43,42,74,0.14); }
.np-act--line:hover { box-shadow: inset 0 0 0 1.5px #FF6B4A; color: #E0502F; }
.np-foot { margin-top: 12px; }
.np-markall {
  width: 100%; border: none; background: #fff; color: #E0502F; border-radius: 999px; padding: 11px; font-family: inherit; font-size: 13px; font-weight: 700;
  box-shadow: 0 0 0 1px rgba(43,42,74,0.1); cursor: pointer;
}
.np-markall:hover:not(:disabled) { background: #FDECE5; }
.np-markall:disabled { color: #8B84A3; cursor: default; }
.np-empty { background: #fff; border-radius: 22px; text-align: center; padding: 30px 24px 34px; }
.np-ring { width: 72px; height: 72px; border-radius: 50%; background: #FDECE5; color: #E0502F; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; }
.np-ring svg { width: 30px; height: 30px; }
.np-empty h4 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0 0 4px; }
.np-empty p { margin: 0; font-size: 13.5px; font-weight: 600; color: #8B84A3; line-height: 1.5; }
@media (max-width: 1000px) {
  .np { position: fixed; top: 58px; right: 12px; width: calc(100vw - 24px); max-width: 410px; }
}
@media (prefers-reduced-motion: reduce) { .np-card { transition: none; } }
`;
