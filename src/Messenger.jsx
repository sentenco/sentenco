import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";
import ReportDialog from "./ReportDialog.jsx";
import { blockUser, unblockUser, useBlocked } from "./safetyApi.js";
import { teachingBadge } from "./ProfileSettings.jsx";
import { CUSTOM_LESSONS, customLessonBySlug, openCustomLesson } from "./customLessonsRegistry";
import useCustomLessonAccess from "./useCustomLessonAccess";

const POLL_MS = 30000; // fallback safety net; realtime handles the instant path
const QUICK_EMOJI = ["👍", "❤️", "😂", "😮", "😢", "🙏"];

function displayName(profile, fallbackEmail) {
  if (profile?.display_name?.trim()) return profile.display_name.trim();
  if (!fallbackEmail) return "Teacher";
  const raw = fallbackEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

function shortTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function listTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86400000);
  if (diffDays === 0) return shortTime(dateStr);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return d.toLocaleDateString(undefined, { weekday: "short" });
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function dateDivider(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined });
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.5 4.5 6 10l6.5 5.5" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4" width="15" height="12" rx="2.5" />
      <path d="M8 4v12" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="m17 17-4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 8.5 3 3 7-7" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6 3.5 10 8 14" />
      <path d="M3.5 10h8a5 5 0 0 1 5 5v1" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7" />
      <path d="M7 11.5c.6 1 1.6 1.6 3 1.6s2.4-.6 3-1.6" />
      <path d="M7.5 8h.01M12.5 8h.01" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.5 3.5 16 7l-8.5 8.5-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h12" />
      <path d="M7.5 6V4.5h5V6" />
      <path d="M5.5 6 6.2 16h7.6l.7-10" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="7" r="2.6" />
      <path d="M2.5 16c.5-3 2.4-4.5 5-4.5s4.5 1.5 5 4.5" />
      <path d="M13 6.5a2.4 2.4 0 1 1 2 3.7" />
      <path d="M14.5 11.7c1.9.4 3 1.7 3.4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
      <path d="M10 4.5v11" />
      <path d="M4.5 10h11" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10.5v5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-5" />
      <path d="M13 6 10 3 7 6" />
      <path d="M10 3v9" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15.5A2 2 0 0 1 6 14h10" />
      <path d="M6 3h10v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function EmptyChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export default function Messenger() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  const targetUserId = searchParams.get("to");

  const [conversations, setConversations] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [loadingList, setLoadingList] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [convSearch, setConvSearch] = useState("");
  const [listTab, setListTab] = useState("chats"); // "chats" | "requests"
  const [listCollapsed, setListCollapsed] = useState(false);
  const [replyTarget, setReplyTarget] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [reactionsByMessage, setReactionsByMessage] = useState({});
  const [reactionPickerFor, setReactionPickerFor] = useState(null);
  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [memberQuery, setMemberQuery] = useState("");
  const [memberResults, setMemberResults] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [creatingGroup, setCreatingGroup] = useState(false);
  const [groupMembersById, setGroupMembersById] = useState({});
  const [membersModalOpen, setMembersModalOpen] = useState(false);
  const [addMemberQuery, setAddMemberQuery] = useState("");
  const [addMemberResults, setAddMemberResults] = useState([]);
  const [memberActionTarget, setMemberActionTarget] = useState(null);
  const [lessonSharingReady, setLessonSharingReady] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const { access: lessonAccess } = useCustomLessonAccess(true);
  const threadEndRef = useRef(null);
  const pollRef = useRef(null);
  const activeIdRef = useRef(null);
  const composerRef = useRef(null);
  const { hidden: hiddenIds, mine: myBlocks, refresh: refreshBlocked } = useBlocked();
  const [reportTarget, setReportTarget] = useState(null);
  const [confirmBlock, setConfirmBlock] = useState(false);
  const messageIdsRef = useRef(new Set());
  const memberSearchTimer = useRef(null);
  const addMemberSearchTimer = useRef(null);
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);
  useEffect(() => { messageIdsRef.current = new Set(messages.map((m) => m.id)); }, [messages]);

  useEffect(() => {
    if (!activeId) { setListCollapsed(false); setReplyTarget(null); setEditingId(null); setMembersModalOpen(false); }
  }, [activeId]);

  useEffect(() => {
    if (!reactionPickerFor) return;
    function handleClick(e) {
      if (e.target.closest(".mg-reaction-picker, .mg-react-trigger")) return;
      setReactionPickerFor(null);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [reactionPickerFor]);

  useEffect(() => {
    clearTimeout(memberSearchTimer.current);
    const q = memberQuery.trim();
    if (!q) { setMemberResults([]); return; }
    memberSearchTimer.current = setTimeout(async () => {
      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, avatar_url")
        .ilike("display_name", `%${q}%`)
        .limit(8);
      const picked = new Set(selectedMembers.map((m) => m.id));
      setMemberResults((data || []).filter((p) => p.id !== user?.id && !picked.has(p.id)));
    }, 300);
    return () => clearTimeout(memberSearchTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberQuery]);

  useEffect(() => {
    const conv = conversations.find((c) => c.id === activeId);
    if (!activeId || !conv?.is_group) return;
    if (groupMembersById[activeId]) return;
    supabase
      .from("conversation_participants")
      .select("user_id")
      .eq("conversation_id", activeId)
      .then(({ data }) => {
        const ids = (data || []).map((r) => r.user_id);
        setGroupMembersById((prev) => ({ ...prev, [activeId]: ids }));
        loadProfiles(ids);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, conversations]);

  useEffect(() => {
    clearTimeout(addMemberSearchTimer.current);
    const q = addMemberQuery.trim();
    if (!q) { setAddMemberResults([]); return; }
    addMemberSearchTimer.current = setTimeout(async () => {
      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, avatar_url")
        .ilike("display_name", `%${q}%`)
        .limit(8);
      const already = new Set(groupMembersById[activeId] || []);
      setAddMemberResults((data || []).filter((p) => !already.has(p.id)));
    }, 300);
    return () => clearTimeout(addMemberSearchTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addMemberQuery]);

  useEffect(() => {
    if (!activeId || !user) return;
    const channel = supabase
      .channel(`participants-${activeId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "conversation_participants", filter: `conversation_id=eq.${activeId}` },
        (payload) => {
          const newUserId = payload.new.user_id;
          setGroupMembersById((prev) => {
            const existing = prev[activeId] || [];
            if (existing.includes(newUserId)) return prev;
            return { ...prev, [activeId]: [...existing, newUserId] };
          });
          loadProfiles([newUserId]);
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "conversation_participants", filter: `conversation_id=eq.${activeId}` },
        (payload) => {
          const removedUserId = payload.old.user_id;
          setGroupMembersById((prev) => ({ ...prev, [activeId]: (prev[activeId] || []).filter((id) => id !== removedUserId) }));
          if (removedUserId === user.id) {
            setConversations((prev) => prev.filter((c) => c.id !== activeId));
            setActiveId(null);
            setMembersModalOpen(false);
          }
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, user]);

  useEffect(() => {
    const el = composerRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
    el.style.overflowY = el.scrollHeight > 120 ? "auto" : "hidden";
  }, [draft, activeId]);

  useEffect(() => {
    if (!user) { setLoadingList(false); return; }
    loadConversations();
    pollRef.current = setInterval(loadConversations, POLL_MS);
    return () => clearInterval(pollRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user || !targetUserId || targetUserId === user.id) return;
    openWith(targetUserId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, targetUserId]);

  useEffect(() => {
    if (!activeId) { setMessages([]); return; }
    loadMessages(activeId);
    const poll = setInterval(() => loadMessages(activeId, true), POLL_MS);
    return () => clearInterval(poll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  useEffect(() => {
    if (!activeId || !user) return;
    const channel = supabase
      .channel(`messages-${activeId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${activeId}` },
        (payload) => {
          const row = payload.new;
          setMessages((prev) => (prev.some((m) => m.id === row.id) ? prev : [...prev, row]));
          if (row.sender_id !== user.id) {
            supabase.from("messages").update({ read_at: new Date().toISOString() }).eq("id", row.id).then(() => {
              setConversations((prev) => prev.map((c) => (c.id === activeId ? { ...c, unread: 0 } : c)));
            });
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "messages", filter: `conversation_id=eq.${activeId}` },
        (payload) => {
          const row = payload.new;
          setMessages((prev) => prev.map((m) => (m.id === row.id ? { ...m, ...row } : m)));
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [activeId, user]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`reactions-${user.id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "message_reactions" },
        (payload) => {
          const messageId = payload.new?.message_id || payload.old?.message_id;
          if (!messageId || !messageIdsRef.current.has(messageId)) return;
          setReactionsByMessage((prev) => {
            const list = prev[messageId] || [];
            if (payload.eventType === "DELETE") {
              return { ...prev, [messageId]: list.filter((r) => r.id !== payload.old.id) };
            }
            const next = list.filter((r) => r.id !== payload.new.id);
            return { ...prev, [messageId]: [...next, payload.new] };
          });
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`inbox-${user.id}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const row = payload.new;
          setConversations((prev) => {
            if (!prev.some((c) => c.id === row.conversation_id)) return prev;
            const updated = prev.map((c) => {
              if (c.id !== row.conversation_id) return c;
              const isOpen = c.id === activeIdRef.current;
              const bumpUnread = row.sender_id !== user.id && !isOpen;
              return { ...c, last_message_at: row.created_at, last_message: row.content, unread: bumpUnread ? (c.unread || 0) + 1 : c.unread };
            });
            return updated.sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at));
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "conversations" },
        (payload) => {
          const row = payload.new;
          if (row.request_status === undefined) return;
          setConversations((prev) => prev.map((c) => (c.id === row.id ? { ...c, request_status: row.request_status, requested_by: row.requested_by } : c)));
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "conversations" },
        (payload) => {
          const row = payload.new;
          if (row.user_a_id !== user.id && row.user_b_id !== user.id) return;
          setConversations((prev) => {
            if (prev.some((c) => c.id === row.id)) return prev;
            return [{ ...row, unread: 0 }, ...prev];
          });
          const otherId = row.user_a_id === user.id ? row.user_b_id : row.user_a_id;
          loadProfiles([otherId]);
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "conversation_participants", filter: `user_id=eq.${user.id}` },
        async (payload) => {
          const conversationId = payload.new.conversation_id;
          const { data: conv } = await supabase
            .from("conversations")
            .select("*")
            .eq("id", conversationId)
            .maybeSingle();
          if (!conv) return;
          setConversations((prev) => (prev.some((c) => c.id === conv.id) ? prev : [{ ...conv, unread: 0 }, ...prev]));
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, activeId]);

  async function loadProfiles(ids) {
    const missing = ids.filter((id) => !profiles[id]);
    if (!missing.length) return;
    const { data } = await supabase.from("profiles").select("id, display_name, avatar_url, country, years_teaching, is_mentor").in("id", missing);
    if (data) {
      setProfiles((prev) => {
        const next = { ...prev };
        data.forEach((p) => { next[p.id] = p; });
        return next;
      });
    }
  }

  async function loadConversations() {
    if (!user) return;
    const { data: direct, error: convError } = await supabase
      .from("conversations")
      .select("*")
      .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`)
      .order("last_message_at", { ascending: false });
    if (convError) { console.error("loadConversations failed:", convError); setLoadingList(false); return; }

    const { data: memberships } = await supabase
      .from("conversation_participants")
      .select("conversation_id")
      .eq("user_id", user.id);
    const groupIds = (memberships || []).map((m) => m.conversation_id);
    let groups = [];
    if (groupIds.length) {
      const { data: groupRows } = await supabase
        .from("conversations")
        .select("*")
        .in("id", groupIds);
      groups = groupRows || [];
    }

    const rows = [...(direct || []), ...groups].sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at));
    setConversations(rows);
    setLoadingList(false);

    const otherIds = rows.filter((c) => !c.is_group).map((c) => (c.user_a_id === user.id ? c.user_b_id : c.user_a_id));
    if (otherIds.length) loadProfiles(otherIds);

    if (rows.length) {
      const ids = rows.map((c) => c.id);
      const { data: unread } = await supabase
        .from("messages")
        .select("conversation_id")
        .in("conversation_id", ids)
        .is("read_at", null)
        .neq("sender_id", user.id);
      const counts = {};
      (unread || []).forEach((m) => { counts[m.conversation_id] = (counts[m.conversation_id] || 0) + 1; });
      setConversations((prev) => prev.map((c) => ({ ...c, unread: counts[c.id] || 0 })));
    }
  }

  async function loadMessages(conversationId, silent) {
    const baseCols = "id, conversation_id, sender_id, content, created_at, read_at, edited_at, deleted_at, reply_to_id";
    const run = (cols) => supabase.from("messages").select(cols).eq("conversation_id", conversationId).order("created_at", { ascending: true });
    // lesson_slug exists once sql/convo_share_lessons.sql has been run; fall back without it until then.
    let { data, error: msgError } = await run(`${baseCols}, lesson_slug`);
    if (msgError) {
      setLessonSharingReady(false);
      ({ data, error: msgError } = await run(baseCols));
    } else {
      setLessonSharingReady(true);
    }
    if (msgError) { if (!silent) setError(msgError.message); return; }
    const rows = data || [];
    setMessages(rows);

    if (rows.length) {
      const { data: reactions } = await supabase
        .from("message_reactions")
        .select("id, message_id, user_id, emoji")
        .in("message_id", rows.map((m) => m.id));
      const grouped = {};
      (reactions || []).forEach((r) => {
        if (!grouped[r.message_id]) grouped[r.message_id] = [];
        grouped[r.message_id].push(r);
      });
      setReactionsByMessage(grouped);
    } else {
      setReactionsByMessage({});
    }

    const unreadIds = rows.filter((m) => m.sender_id !== user.id && !m.read_at).map((m) => m.id);
    if (unreadIds.length) {
      supabase.from("messages").update({ read_at: new Date().toISOString() }).in("id", unreadIds).then(() => {
        setConversations((prev) => prev.map((c) => (c.id === conversationId ? { ...c, unread: 0 } : c)));
      });
    }
  }

  async function openWith(otherUserId) {
    setError(null);
    const [a, b] = [user.id, otherUserId].sort();
    const { data: existing } = await supabase
      .from("conversations")
      .select("id")
      .eq("user_a_id", a)
      .eq("user_b_id", b)
      .maybeSingle();
    if (existing) {
      setActiveId(existing.id);
      loadProfiles([otherUserId]);
      return;
    }
    const { data: created, error: createError } = await supabase
      .from("conversations")
      .insert({ user_a_id: a, user_b_id: b })
      .select("*")
      .single();
    if (createError) { setError("Couldn't start that conversation."); return; }
    setConversations((prev) => [{ ...created, unread: 0 }, ...prev]);
    setActiveId(created.id);
    loadProfiles([otherUserId]);
  }

  function addMember(p) {
    setSelectedMembers((prev) => (prev.some((m) => m.id === p.id) ? prev : [...prev, p]));
    setMemberResults((prev) => prev.filter((r) => r.id !== p.id));
    setMemberQuery("");
  }

  function removeMember(id) {
    setSelectedMembers((prev) => prev.filter((m) => m.id !== id));
  }

  function closeGroupModal() {
    setGroupModalOpen(false);
    setGroupName("");
    setMemberQuery("");
    setMemberResults([]);
    setSelectedMembers([]);
  }

  async function createGroup() {
    const title = groupName.trim();
    if (!title || selectedMembers.length < 2 || creatingGroup) return;
    setCreatingGroup(true);
    const { data: created, error: createError } = await supabase
      .from("conversations")
      .insert({ is_group: true, title, created_by: user.id })
      .select("*")
      .single();
    if (createError) { setCreatingGroup(false); setError("Couldn't create that group."); return; }

    const memberIds = [user.id, ...selectedMembers.map((m) => m.id)];
    const { error: memberError } = await supabase
      .from("conversation_participants")
      .insert(memberIds.map((id) => ({ conversation_id: created.id, user_id: id })));
    setCreatingGroup(false);
    if (memberError) { setError("Group created, but adding members failed."); return; }

    setGroupMembersById((prev) => ({ ...prev, [created.id]: memberIds }));
    setConversations((prev) => [{ ...created, unread: 0 }, ...prev]);
    setActiveId(created.id);
    closeGroupModal();
  }

  async function addGroupMember(p) {
    if (!activeConv?.is_group) return;
    const { error: err } = await supabase
      .from("conversation_participants")
      .insert({ conversation_id: activeConv.id, user_id: p.id });
    if (err) { setError("Couldn't add that teacher."); return; }
    setGroupMembersById((prev) => ({ ...prev, [activeConv.id]: [...(prev[activeConv.id] || []), p.id] }));
    setProfiles((prev) => ({ ...prev, [p.id]: p }));
    setAddMemberQuery("");
    setAddMemberResults([]);
  }

  async function confirmMemberAction() {
    if (!memberActionTarget || !activeConv) return;
    const targetUserId = memberActionTarget.type === "leave" ? user.id : memberActionTarget.userId;
    const { error: err } = await supabase
      .from("conversation_participants")
      .delete()
      .eq("conversation_id", activeConv.id)
      .eq("user_id", targetUserId);
    const wasLeaving = memberActionTarget.type === "leave";
    setMemberActionTarget(null);
    if (err) { setError("That didn't work."); return; }
    setGroupMembersById((prev) => ({ ...prev, [activeConv.id]: (prev[activeConv.id] || []).filter((id) => id !== targetUserId) }));
    if (wasLeaving) {
      setConversations((prev) => prev.filter((c) => c.id !== activeConv.id));
      setActiveId(null);
      setMembersModalOpen(false);
    }
  }

  async function answerRequest(accept) {
    const id = activeId;
    if (!id) return;
    const { error: reqError } = await supabase.rpc("respond_message_request", { p_conv: id, p_accept: accept });
    if (reqError) { setError("That did not go through. Please try again."); return; }
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, request_status: accept ? "accepted" : "declined" } : c)));
    if (!accept) setActiveId(null);
  }

  async function sendMessage(override, lessonSlug) {
    const content = (typeof override === "string" ? override : draft).trim();
    if (!content || !activeId || sending) return;
    setSending(true);
    if (typeof override !== "string") setDraft("");
    const replyToId = replyTarget?.id || null;
    const row = { conversation_id: activeId, sender_id: user.id, content, reply_to_id: replyToId };
    if (lessonSlug) row.lesson_slug = lessonSlug;
    const { data, error: sendError } = await supabase
      .from("messages")
      .insert(row)
      .select()
      .single();
    setSending(false);
    if (sendError) {
      const m = sendError.message || "";
      setError(/blocked/i.test(m) ? "You cannot message this teacher." : /request_pending/i.test(m) ? "Your message request is waiting. You can send more once they accept." : /request_declined/i.test(m) ? "That teacher did not accept your message request." : m);
      return;
    }
    setReplyTarget(null);
    setMessages((prev) => (prev.some((m) => m.id === data.id) ? prev : [...prev, data]));
    const now = new Date().toISOString();
    supabase.from("conversations").update({ last_message_at: now, last_message: content }).eq("id", activeId)
      .then(({ error: lastError }) => { if (lastError) console.error("update last message failed:", lastError); });
    setConversations((prev) => {
      const updated = prev.map((c) => (c.id === activeId ? { ...c, last_message_at: now, last_message: content } : c));
      return updated.sort((x, y) => new Date(y.last_message_at) - new Date(x.last_message_at));
    });
  }

  function shareLesson(lesson) {
    setShareOpen(false);
    sendMessage(`Shared a lesson: ${lesson.title}`, lesson.slug);
  }

  function startEdit(m) {
    setEditingId(m.id);
    setEditDraft(m.content);
    setReactionPickerFor(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditDraft("");
  }

  async function saveEdit() {
    const content = editDraft.trim();
    if (!content || !editingId) return;
    const editedId = editingId;
    const { error: editError } = await supabase.rpc("edit_message", { p_message_id: editedId, p_content: content });
    if (editError) { setError(editError.message); return; }
    setMessages((prev) => prev.map((m) => (m.id === editedId ? { ...m, content, edited_at: new Date().toISOString() } : m)));
    setEditingId(null);
    setEditDraft("");
  }

  async function handleDeleteMessage() {
    if (!deleteTarget) return;
    const target = deleteTarget;
    setDeleteTarget(null);
    const { error: deleteError } = await supabase.rpc("delete_message", { p_message_id: target.id });
    if (deleteError) { setError(deleteError.message); return; }
    setMessages((prev) => prev.map((m) => (m.id === target.id ? { ...m, deleted_at: new Date().toISOString(), content: "" } : m)));
  }

  async function toggleReaction(messageId, emoji) {
    const existing = (reactionsByMessage[messageId] || []).find((r) => r.user_id === user.id);
    setReactionPickerFor(null);
    if (existing && existing.emoji === emoji) {
      setReactionsByMessage((prev) => ({ ...prev, [messageId]: (prev[messageId] || []).filter((r) => r.id !== existing.id) }));
      await supabase.from("message_reactions").delete().eq("id", existing.id);
      return;
    }
    const { data } = await supabase
      .from("message_reactions")
      .upsert({ message_id: messageId, user_id: user.id, emoji }, { onConflict: "message_id,user_id" })
      .select()
      .single();
    if (data) {
      setReactionsByMessage((prev) => {
        const others = (prev[messageId] || []).filter((r) => r.user_id !== user.id);
        return { ...prev, [messageId]: [...others, data] };
      });
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  if (authLoading) return null;

  // Message requests: a first message from someone you are not connected with waits for you to accept it.
  const isIncomingRequest = (c) => !c.is_group && c.request_status === "pending" && !!c.requested_by && c.requested_by !== user?.id;
  const activeConv = conversations.find((c) => c.id === activeId);
  const activeOtherId = activeConv && !activeConv.is_group ? (activeConv.user_a_id === user?.id ? activeConv.user_b_id : activeConv.user_a_id) : null;
  const activeProfile = activeOtherId ? profiles[activeOtherId] : null;
  const activeName = activeProfile ? displayName(activeProfile) : "…";
  const activeLabel = activeConv?.is_group ? activeConv.title : activeName;
  const activeBlocked = !!activeOtherId && hiddenIds.includes(activeOtherId);
  const activeIncoming = !!activeConv && isIncomingRequest(activeConv);
  const activeOutgoingPending = !!activeConv && !activeConv.is_group && activeConv.request_status === "pending" && activeConv.requested_by === user?.id;
  const activeDeclinedOut = !!activeConv && !activeConv.is_group && activeConv.request_status === "declined" && activeConv.requested_by === user?.id;
  const alreadyRequested = activeOutgoingPending && messages.some((m) => m.sender_id === user?.id);
  const activeBlockedByMe = !!activeOtherId && myBlocks.includes(activeOtherId);
  const activeMemberIds = activeConv?.is_group ? (groupMembersById[activeConv.id] || []) : [];

  const myLessons = CUSTOM_LESSONS.filter((l) => lessonAccess.get(l.slug)?.relation === "mine");
  const canShareLesson = lessonSharingReady && myLessons.length > 0;
  const lessonMessages = messages.filter((m) => m.lesson_slug && !m.deleted_at);
  const lessonsFromThem = lessonMessages.filter((m) => m.sender_id !== user?.id);
  const lessonsFromMe = lessonMessages.filter((m) => m.sender_id === user?.id);
  const activeBadge = activeProfile ? teachingBadge(activeProfile.years_teaching) : null;
  const profileSub = (p) => {
    if (!p) return "";
    const years = p.years_teaching;
    const yrs = years === null || years === undefined || years === "" ? "" : (Number(years) < 1 ? "New to teaching" : `${years} ${Number(years) === 1 ? "year" : "years"} teaching`);
    return [p.country, yrs].filter(Boolean).join(" · ");
  };
  const recentConvs = conversations.slice(0, 6);
  const convMeta = (c) => {
    const otherId = !c.is_group ? (c.user_a_id === user.id ? c.user_b_id : c.user_a_id) : null;
    const p = otherId ? profiles[otherId] : null;
    return { p, name: c.is_group ? c.title : (p ? displayName(p) : "…") };
  };

  const requestCount = conversations.filter(isIncomingRequest).length;
  const tab = requestCount === 0 ? "chats" : listTab;
  const filteredConversations = conversations.filter((c) => {
    if (!c.is_group && c.request_status === "declined" && c.requested_by !== user?.id) return false; // I declined it
    if (tab === "requests" ? !isIncomingRequest(c) : isIncomingRequest(c)) return false;
    if (!convSearch.trim()) return true;
    if (c.is_group) return (c.title || "").toLowerCase().includes(convSearch.trim().toLowerCase());
    const otherId = c.user_a_id === user.id ? c.user_b_id : c.user_a_id;
    const name = profiles[otherId] ? displayName(profiles[otherId]) : "";
    return name.toLowerCase().includes(convSearch.trim().toLowerCase());
  });

  return (
    <div className="mg-shell">
      <style>{CSS}</style>
      {!user ? (
        <p className="mg-signin">Sign in to use Convo.</p>
      ) : (
        <div className="mg-frame">
          <div className="mg-body">
            <div className={`mg-list ${activeId ? "mg-list--hidden-mobile" : ""} ${listCollapsed ? "mg-list--collapsed" : ""}`}>
              <div className="mg-list-top">
                <h2 className="mg-list-title">Convo</h2>
                <button type="button" className="mg-new-group-btn" onClick={() => setGroupModalOpen(true)} aria-label="New group" title="New group">
                  <GroupIcon />
                </button>
              </div>
              <div className="mg-search">
                <SearchIcon />
                <input
                  type="text"
                  value={convSearch}
                  onChange={(e) => setConvSearch(e.target.value)}
                  placeholder="Search people and groups"
                />
              </div>
              {requestCount > 0 && (
                <div className="mg-list-tabs" role="tablist">
                  <button type="button" role="tab" aria-selected={tab === "chats"} className={tab === "chats" ? "is-on" : ""} onClick={() => setListTab("chats")}>Chats</button>
                  <button type="button" role="tab" aria-selected={tab === "requests"} className={tab === "requests" ? "is-on" : ""} onClick={() => setListTab("requests")}>Requests<em>{requestCount}</em></button>
                </div>
              )}
              {recentConvs.length > 1 && !convSearch.trim() && tab === "chats" && (
                <div className="mg-strip" aria-label="Recent conversations">
                  {recentConvs.map((c) => {
                    const { p, name } = convMeta(c);
                    return (
                      <button type="button" key={c.id} className={`mg-story ${c.id === activeId ? "is-active" : ""} ${c.unread > 0 ? "is-unread" : ""}`} onClick={() => setActiveId(c.id)}>
                        <span className={`mg-avatar mg-avatar--md ${c.is_group ? "mg-avatar--group" : ""}`}>
                          {c.is_group ? <GroupIcon /> : (p?.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(name))}
                        </span>
                        <span className="mg-story-name">{name.split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="mg-conv-list">
                {loadingList ? (
                  <p className="mg-empty-text">Loading…</p>
                ) : conversations.length === 0 ? (
                  <div className="mg-empty-state">
                    <EmptyChatIcon />
                    <p>No conversations yet. Message a teacher from Homeroom to start one.</p>
                  </div>
                ) : filteredConversations.length === 0 ? (
                  <p className="mg-empty-text">No matches for "{convSearch}".</p>
                ) : (
                  filteredConversations.map((c) => {
                    const otherId = !c.is_group ? (c.user_a_id === user.id ? c.user_b_id : c.user_a_id) : null;
                    const p = otherId ? profiles[otherId] : null;
                    const name = c.is_group ? c.title : (p ? displayName(p) : "…");
                    const unread = c.unread > 0;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        className={`mg-conv ${c.id === activeId ? "is-active" : ""} ${unread ? "is-unread" : ""}`}
                        onClick={() => setActiveId(c.id)}
                      >
                        <span className={`mg-avatar ${c.is_group ? "mg-avatar--group" : ""}`}>
                          {c.is_group ? <GroupIcon /> : (p?.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(name))}
                        </span>
                        <span className="mg-conv-text">
                          <span className="mg-conv-row">
                            <span className="mg-conv-name">{name}</span>
                            <span className="mg-conv-time">{c.last_message_at ? listTime(c.last_message_at) : ""}</span>
                          </span>
                          <span className="mg-conv-preview">{!c.is_group && c.request_status === "pending" && c.requested_by === user.id && c.last_message ? "Waiting for them to accept" : c.last_message || "Start the conversation"}</span>
                        </span>
                        {unread && <span className="mg-unread-badge">{c.unread > 9 ? "9+" : c.unread}</span>}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className={`mg-thread ${activeId ? "" : "mg-thread--hidden-mobile"}`}>
              {!activeId ? (
                <div className="mg-thread-empty">
                  <EmptyChatIcon />
                  <p>Select a conversation to start messaging.</p>
                </div>
              ) : (
                <>
                  <div className="mg-thread-head">
                    <button type="button" className="mg-back" onClick={() => setActiveId(null)} aria-label="Back to conversations">
                      <BackIcon />
                    </button>
                    <button
                      type="button"
                      className="mg-collapse-toggle"
                      onClick={() => setListCollapsed((v) => !v)}
                      aria-label={listCollapsed ? "Show conversation list" : "Hide conversation list"}
                      title={listCollapsed ? "Show conversation list" : "Hide conversation list"}
                    >
                      <PanelIcon />
                    </button>
                    {activeConv?.is_group ? (
                      <button type="button" className="mg-thread-identity" onClick={() => setMembersModalOpen(true)}>
                        <span className="mg-avatar mg-avatar--md mg-avatar--group"><GroupIcon /></span>
                        <span className="mg-thread-text">
                          <span className="mg-thread-name">{activeLabel}</span>
                          <span className="mg-thread-sub">{activeMemberIds.length || "…"} members &middot; tap to manage</span>
                        </span>
                      </button>
                    ) : (
                      <button type="button" className="mg-thread-identity" onClick={() => activeOtherId && navigate(`/library/teacher/${activeOtherId}`)} title="View profile">
                        <span className="mg-avatar mg-avatar--md">
                          {activeProfile?.avatar_url ? <img src={activeProfile.avatar_url} alt="" /> : initials(activeName)}
                        </span>
                        <span className="mg-thread-text">
                          <span className="mg-thread-name">{activeLabel}</span>
                          {profileSub(activeProfile) && <span className="mg-thread-sub">{profileSub(activeProfile)}</span>}
                        </span>
                      </button>
                    )}
                  </div>

                  {error && (
                    <div className="mg-error">
                      {error}
                      <button type="button" onClick={() => setError(null)} aria-label="Dismiss">&times;</button>
                    </div>
                  )}

                  <div className="mg-messages">
                    {messages.length === 0 ? (
                      <div className="mg-thread-empty mg-thread-empty--inline">
                        <p>Say hello to {activeLabel}.</p>
                      </div>
                    ) : (
                      messages.map((m, i) => {
                        const prev = messages[i - 1];
                        const next = messages[i + 1];
                        const showDivider = !prev || dateDivider(prev.created_at) !== dateDivider(m.created_at);
                        const isTight = prev && !showDivider && prev.sender_id === m.sender_id
                          && (new Date(m.created_at) - new Date(prev.created_at)) <= 5 * 60 * 1000;
                        const isLastInGroup = !next || next.sender_id !== m.sender_id
                          || (new Date(next.created_at) - new Date(m.created_at)) > 5 * 60 * 1000;
                        const isVeryLast = i === messages.length - 1;
                        const mine = m.sender_id === user.id;
                        const isDeleted = !!m.deleted_at;
                        const isEditing = editingId === m.id;
                        const quoted = m.reply_to_id ? messages.find((x) => x.id === m.reply_to_id) : null;
                        const reactionCounts = {};
                        (reactionsByMessage[m.id] || []).forEach((r) => {
                          if (!reactionCounts[r.emoji]) reactionCounts[r.emoji] = { count: 0, mine: false };
                          reactionCounts[r.emoji].count += 1;
                          if (r.user_id === user.id) reactionCounts[r.emoji].mine = true;
                        });
                        const hasReactions = Object.keys(reactionCounts).length > 0;
                        const senderLabel = (senderId) => senderId === user.id ? "You" : (profiles[senderId] ? displayName(profiles[senderId]) : activeName);
                        const showSenderName = activeConv?.is_group && !mine && (!prev || prev.sender_id !== m.sender_id || showDivider);
                        const actionsBtns = !isDeleted && !isEditing && (
                          <div className="mg-bubble-actions">
                            <button type="button" onClick={() => setReplyTarget(m)} aria-label="Reply" title="Reply"><ReplyIcon /></button>
                            <button
                              type="button"
                              className="mg-react-trigger"
                              onClick={() => setReactionPickerFor(reactionPickerFor === m.id ? null : m.id)}
                              aria-label="React"
                              title="React"
                            >
                              <SmileIcon />
                            </button>
                            {mine && (
                              <>
                                {!m.lesson_slug && <button type="button" onClick={() => startEdit(m)} aria-label="Edit" title="Edit"><EditIcon /></button>}
                                <button type="button" onClick={() => setDeleteTarget(m)} aria-label="Delete" title="Delete"><TrashIcon /></button>
                              </>
                            )}
                          </div>
                        );
                        return (
                          <Fragment key={m.id}>
                            {showDivider && (
                              <div className="mg-date-divider"><span>{dateDivider(m.created_at)}</span></div>
                            )}
                            <div id={`msg-${m.id}`} className={`mg-bubble-row ${mine ? "is-mine" : ""} ${isTight ? "is-tight" : ""}`}>
                              {mine && actionsBtns}
                              <div className="mg-bubble-col">
                                {showSenderName && <span className="mg-sender-name">{senderLabel(m.sender_id)}</span>}
                                {isEditing ? (
                                  <div className="mg-bubble mg-bubble--editing">
                                    <textarea
                                      value={editDraft}
                                      onChange={(e) => setEditDraft(e.target.value)}
                                      onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveEdit(); } if (e.key === "Escape") cancelEdit(); }}
                                      rows={2}
                                      autoFocus
                                    />
                                    <div className="mg-edit-actions">
                                      <button type="button" onClick={cancelEdit}>Cancel</button>
                                      <button type="button" onClick={saveEdit} disabled={!editDraft.trim()}>Save</button>
                                    </div>
                                  </div>
                                ) : (
                                  m.lesson_slug && !isDeleted ? (
                                    <button
                                      type="button"
                                      className="mg-lesson-card"
                                      onClick={() => { const l = customLessonBySlug(m.lesson_slug); if (l) openCustomLesson(l); }}
                                    >
                                      <span className="mg-lesson-ico"><BookIcon /></span>
                                      <span className="mg-lesson-text">
                                        <strong>{customLessonBySlug(m.lesson_slug)?.title || "Custom lesson"}</strong>
                                        <small>Custom lesson, tap to open</small>
                                      </span>
                                    </button>
                                  ) : (
                                  <span className={`mg-bubble ${isDeleted ? "mg-bubble--deleted" : ""}`}>
                                    {quoted && !isDeleted && (
                                      <span
                                        className="mg-quote"
                                        onClick={() => document.getElementById(`msg-${quoted.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                                      >
                                        <strong>{senderLabel(quoted.sender_id)}</strong>
                                        <span>{quoted.deleted_at ? "Message deleted" : quoted.content}</span>
                                      </span>
                                    )}
                                    {isDeleted ? "Message deleted" : m.content}
                                  </span>
                                  )
                                )}
                                {hasReactions && !isDeleted && (
                                  <div className={`mg-reactions ${mine ? "is-mine" : ""}`}>
                                    {Object.entries(reactionCounts).map(([emoji, info]) => (
                                      <button
                                        type="button"
                                        key={emoji}
                                        className={`mg-reaction-pill ${info.mine ? "is-mine-reaction" : ""}`}
                                        onClick={() => toggleReaction(m.id, emoji)}
                                      >
                                        {emoji} {info.count}
                                      </button>
                                    ))}
                                  </div>
                                )}
                                {reactionPickerFor === m.id && (
                                  <div className={`mg-reaction-picker ${mine ? "is-mine" : ""}`}>
                                    {QUICK_EMOJI.map((e) => (
                                      <button type="button" key={e} onClick={() => toggleReaction(m.id, e)}>{e}</button>
                                    ))}
                                  </div>
                                )}
                              </div>
                              {!mine && actionsBtns}
                            </div>
                            {isLastInGroup && !isEditing && (
                              <div className={`mg-bubble-meta ${mine ? "is-mine" : ""}`}>
                                {shortTime(m.created_at)}
                                {m.edited_at && !isDeleted && <span className="mg-edited-tag">edited</span>}
                                {isVeryLast && mine && m.read_at && !isDeleted && (
                                  <span className="mg-seen"><CheckIcon /> Seen</span>
                                )}
                              </div>
                            )}
                          </Fragment>
                        );
                      })
                    )}
                    <div ref={threadEndRef} />
                  </div>

                  {replyTarget && (
                    <div className="mg-reply-preview">
                      <div className="mg-reply-preview-text">
                        <strong>Replying to {replyTarget.sender_id === user.id ? "yourself" : (activeConv?.is_group ? (profiles[replyTarget.sender_id] ? displayName(profiles[replyTarget.sender_id]) : activeLabel) : activeName)}</strong>
                        <span>{replyTarget.deleted_at ? "Message deleted" : replyTarget.content}</span>
                      </div>
                      <button type="button" onClick={() => setReplyTarget(null)} aria-label="Cancel reply">&times;</button>
                    </div>
                  )}

                  {activeOutgoingPending && !alreadyRequested && !activeBlocked && (
                    <p className="mg-request-hint">You are not connected with {activeName}, so this goes to them as a message request.</p>
                  )}
                  {activeBlocked ? (
                    <div className="mg-blocked-note">
                      <span>{activeBlockedByMe ? `You blocked ${activeName}. Unblock to message them again.` : "You cannot message this teacher."}</span>
                      {activeBlockedByMe && <button type="button" onClick={async () => { await unblockUser(activeOtherId); refreshBlocked(); }}>Unblock</button>}
                    </div>
                  ) : activeIncoming ? (
                    <div className="mg-request-bar">
                      <p><strong>{activeName}</strong> is not connected with you. Accept to chat, or decline and they will not be able to message you again.</p>
                      <div className="mg-request-actions">
                        <button type="button" className="is-accept" onClick={() => answerRequest(true)}>Accept</button>
                        <button type="button" onClick={() => answerRequest(false)}>Decline</button>
                      </div>
                    </div>
                  ) : (alreadyRequested || activeDeclinedOut) ? (
                    <div className="mg-blocked-note">
                      <span>{activeDeclinedOut ? `${activeName} did not accept your message request.` : `Waiting for ${activeName} to accept your message request.`}</span>
                    </div>
                  ) : (
                  <div className="mg-composer">
                    {canShareLesson && (
                      <div className="mg-share-wrap">
                        <button type="button" className="mg-share-btn" onClick={() => setShareOpen((v) => !v)} aria-expanded={shareOpen} aria-label="Share a lesson" title="Share a lesson">
                          <ShareIcon />
                        </button>
                        {shareOpen && (
                          <div className="mg-share-menu" role="menu">
                            <div className="mg-share-title">Your custom lessons</div>
                            {myLessons.map((l) => (
                              <button type="button" key={l.slug} role="menuitem" onClick={() => shareLesson(l)}>
                                <span className="mg-lesson-ico"><BookIcon /></span>
                                <span>{l.title}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    <textarea
                      ref={composerRef}
                      className="mg-composer-input"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={`Message ${activeLabel}…`}
                      rows={1}
                    />
                    <button type="button" className="mg-send-btn" onClick={() => sendMessage()} disabled={!draft.trim() || sending} aria-label="Send">
                      <SendIcon />
                    </button>
                  </div>
                  )}
                </>
              )}
            </div>

            {activeId && activeConv && (
              <aside className="mg-side">
                {activeConv.is_group ? (
                  <>
                    <span className="mg-avatar mg-avatar--xl mg-avatar--group"><GroupIcon /></span>
                    <h3 className="mg-side-name">{activeLabel}</h3>
                    <p className="mg-side-sub">{activeMemberIds.length || "…"} members</p>
                    <button type="button" className="mg-side-btn" onClick={() => setMembersModalOpen(true)}>Manage group</button>
                    <h4 className="mg-side-h">Members</h4>
                    <div className="mg-side-members">
                      {activeMemberIds.map((id) => {
                        const mp = profiles[id];
                        const mn = id === user.id ? "You" : (mp ? displayName(mp) : "…");
                        return (
                          <div key={id} className="mg-side-member">
                            <span className="mg-avatar mg-avatar--xs">{mp?.avatar_url ? <img src={mp.avatar_url} alt="" /> : initials(mn)}</span>
                            {mn}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <span className="mg-avatar mg-avatar--xl">
                      {activeProfile?.avatar_url ? <img src={activeProfile.avatar_url} alt="" /> : initials(activeName)}
                    </span>
                    <h3 className="mg-side-name">{activeName}</h3>
                    {profileSub(activeProfile) && <p className="mg-side-sub">{profileSub(activeProfile)}</p>}
                    {(activeProfile?.is_mentor || activeBadge) && (
                      <div className="mg-side-pills">
                        {activeProfile?.is_mentor && <span>Mentor</span>}
                        {activeBadge && <span>{activeBadge.label}</span>}
                      </div>
                    )}
                    <button type="button" className="mg-side-btn" onClick={() => activeOtherId && navigate(`/library/teacher/${activeOtherId}`)}>View profile</button>
                    {activeOtherId && (
                      <div className="mg-side-safety">
                        <button type="button" onClick={() => setReportTarget({ type: "profile", id: activeOtherId, userId: activeOtherId, name: activeName })}>Report</button>
                        {activeBlockedByMe
                          ? <button type="button" onClick={async () => { await unblockUser(activeOtherId); refreshBlocked(); }}>Unblock</button>
                          : <button type="button" className="is-danger" onClick={() => setConfirmBlock(true)}>Block</button>}
                      </div>
                    )}
                  </>
                )}

                <h4 className="mg-side-h">Shared with you</h4>
                {lessonsFromThem.length === 0 ? (
                  <p className="mg-side-empty">Nothing shared yet.</p>
                ) : (
                  lessonsFromThem.map((m) => {
                    const l = customLessonBySlug(m.lesson_slug);
                    return (
                      <button type="button" key={m.id} className="mg-lesson-card mg-lesson-card--side" onClick={() => l && openCustomLesson(l)}>
                        <span className="mg-lesson-ico"><BookIcon /></span>
                        <span className="mg-lesson-text"><strong>{l?.title || "Custom lesson"}</strong><small>Custom lesson, tap to open</small></span>
                      </button>
                    );
                  })
                )}
                {lessonsFromMe.length > 0 && (
                  <>
                    <h4 className="mg-side-h">You shared</h4>
                    {lessonsFromMe.map((m) => {
                      const l = customLessonBySlug(m.lesson_slug);
                      return (
                        <button type="button" key={m.id} className="mg-lesson-card mg-lesson-card--side" onClick={() => l && openCustomLesson(l)}>
                          <span className="mg-lesson-ico"><BookIcon /></span>
                          <span className="mg-lesson-text"><strong>{l?.title || "Custom lesson"}</strong><small>Custom lesson, tap to open</small></span>
                        </button>
                      );
                    })}
                  </>
                )}
              </aside>
            )}
          </div>
        </div>
      )}

      <ReportDialog target={reportTarget} onClose={() => setReportTarget(null)} onBlocked={() => refreshBlocked()} />
      <ConfirmDialog
        open={confirmBlock}
        title={`Block ${activeName}?`}
        message="They will not be able to message you, follow you or connect with you, and you will not see each other's posts. They are not told. You can unblock them any time."
        confirmLabel="Block"
        onConfirm={async () => { setConfirmBlock(false); if (activeOtherId) { await blockUser(activeOtherId); refreshBlocked(); } }}
        onCancel={() => setConfirmBlock(false)}
      />
      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this message?"
        message="It'll be removed for both of you. This can't be undone."
        confirmLabel="Delete"
        danger
        onConfirm={handleDeleteMessage}
        onCancel={() => setDeleteTarget(null)}
      />

      {groupModalOpen && (
        <div className="mg-group-overlay" onClick={closeGroupModal}>
          <div className="mg-group-modal" onClick={(e) => e.stopPropagation()}>
            <h3>New group</h3>
            <label className="mg-group-label">Group name</label>
            <input
              type="text"
              className="mg-group-input"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="e.g. A2 Mentoring Circle"
              maxLength={60}
            />

            <label className="mg-group-label">Add teachers</label>
            {selectedMembers.length > 0 && (
              <div className="mg-group-chips">
                {selectedMembers.map((m) => (
                  <span key={m.id} className="mg-group-chip">
                    {displayName(m)}
                    <button type="button" onClick={() => removeMember(m.id)} aria-label={`Remove ${displayName(m)}`}>&times;</button>
                  </span>
                ))}
              </div>
            )}
            <input
              type="text"
              className="mg-group-input"
              value={memberQuery}
              onChange={(e) => setMemberQuery(e.target.value)}
              placeholder="Search teachers by name"
            />
            {memberResults.length > 0 && (
              <div className="mg-group-results">
                {memberResults.map((p) => (
                  <button type="button" key={p.id} className="mg-group-result" onClick={() => addMember(p)}>
                    <span className="mg-avatar mg-avatar--sm">{p.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(displayName(p))}</span>
                    {displayName(p)}
                  </button>
                ))}
              </div>
            )}

            <div className="mg-group-actions">
              <button type="button" className="mg-group-cancel" onClick={closeGroupModal}>Cancel</button>
              <button
                type="button"
                className="mg-group-create"
                onClick={createGroup}
                disabled={!groupName.trim() || selectedMembers.length < 2 || creatingGroup}
              >
                {creatingGroup ? "Creating…" : "Create group"}
              </button>
            </div>
            {selectedMembers.length > 0 && selectedMembers.length < 2 && (
              <p className="mg-group-hint">Add at least one more teacher. Groups need 3 people total.</p>
            )}
          </div>
        </div>
      )}

      {membersModalOpen && activeConv?.is_group && (
        <div className="mg-group-overlay" onClick={() => setMembersModalOpen(false)}>
          <div className="mg-group-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{activeConv.title}</h3>
            <label className="mg-group-label">{activeMemberIds.length} members</label>
            <div className="mg-member-list">
              {activeMemberIds.map((id) => {
                const p = profiles[id];
                const realName = p ? displayName(p) : "…";
                const isSelf = id === user.id;
                const isCreator = id === activeConv.created_by;
                const canRemove = isSelf || activeConv.created_by === user.id;
                return (
                  <div key={id} className="mg-member-row">
                    <span className="mg-avatar mg-avatar--sm">{p?.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(realName)}</span>
                    <span className="mg-member-name">
                      {isSelf ? "You" : realName}
                      {isCreator && <span className="mg-member-tag">Creator</span>}
                    </span>
                    {canRemove && (
                      <button
                        type="button"
                        className="mg-member-remove"
                        onClick={() => setMemberActionTarget(isSelf ? { type: "leave" } : { type: "remove", userId: id, name: realName })}
                      >
                        {isSelf ? "Leave" : "Remove"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <label className="mg-group-label">Add teachers</label>
            <input
              type="text"
              className="mg-group-input"
              value={addMemberQuery}
              onChange={(e) => setAddMemberQuery(e.target.value)}
              placeholder="Search teachers by name"
            />
            {addMemberResults.length > 0 && (
              <div className="mg-group-results">
                {addMemberResults.map((p) => (
                  <button type="button" key={p.id} className="mg-group-result" onClick={() => addGroupMember(p)}>
                    <span className="mg-avatar mg-avatar--sm">{p.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(displayName(p))}</span>
                    {displayName(p)}
                  </button>
                ))}
              </div>
            )}

            <div className="mg-group-actions">
              <button type="button" className="mg-group-cancel" onClick={() => setMembersModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={!!memberActionTarget}
        title={memberActionTarget?.type === "leave" ? "Leave this group?" : `Remove ${memberActionTarget?.name}?`}
        message={
          memberActionTarget?.type === "leave"
            ? "You'll stop seeing this conversation and won't be able to rejoin unless someone adds you back."
            : "They'll lose access to this group's messages."
        }
        confirmLabel={memberActionTarget?.type === "leave" ? "Leave" : "Remove"}
        danger
        onConfirm={confirmMemberAction}
        onCancel={() => setMemberActionTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.mg-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  height: 100%;
  min-height: 0;
  display: flex; flex-direction: column;
  background: #E7EAF2;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.mg-shell * { box-sizing: border-box; }

.mg-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card); flex-shrink: 0;
}
.mg-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.mg-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.mg-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.mg-signin { text-align: center; color: var(--muted); padding: 60px 0; }

.mg-frame { flex: 1; min-height: 0; display: flex; padding: 16px; background: #F1F3F8; }

.mg-body {
  flex: 1; min-height: 0; display: flex; gap: 14px; max-width: 1220px; width: 100%; margin: 0 auto;
}

.mg-list, .mg-thread, .mg-side {
  background: var(--card); border-radius: 22px; overflow: hidden; min-height: 0;
  box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 10px 28px -18px rgba(27,42,74,0.22);
}

.mg-list {
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  transition: width 0.18s ease, margin 0.18s ease;
}
.mg-list--collapsed { width: 0; margin-right: -14px; }
.mg-list--collapsed > * { opacity: 0; pointer-events: none; }
.mg-list-top { display: flex; align-items: center; justify-content: space-between; padding: 18px 18px 10px; flex-shrink: 0; }
.mg-list-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0; color: var(--ink); }
.mg-new-group-btn {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: none;
  background: var(--coral-pale); color: #E0502F; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.12s ease;
}
.mg-new-group-btn:hover { background: #fbdcd0; }
.mg-new-group-btn svg { width: 19px; height: 19px; }
.mg-search {
  display: flex; align-items: center; gap: 8px; margin: 0 14px 10px; padding: 10px 14px;
  background: #E7EAF2; border-radius: 999px; flex-shrink: 0;
}
.mg-search svg { width: 16px; height: 16px; color: var(--muted); flex-shrink: 0; }
.mg-search input { border: none; outline: none; background: none; font: inherit; font-size: 13px; font-weight: 600; color: var(--ink); width: 100%; }
.mg-search input::placeholder { color: var(--muted); }
.mg-strip { display: flex; gap: 12px; padding: 4px 16px 12px; overflow-x: auto; scrollbar-width: none; flex-shrink: 0; }
.mg-story { border: none; background: none; text-align: center; padding: 4px 0; cursor: pointer; flex-shrink: 0; max-width: 56px; }
.mg-story .mg-avatar { margin: 0 auto 4px; box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(43,42,74,0.1); }
.mg-story.is-unread .mg-avatar { box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--coral); }
.mg-story.is-active .mg-avatar { box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--navy); }
.mg-story-name { display: block; font-size: 11px; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mg-conv-list { flex: 1; overflow-y: auto; padding: 2px 8px 10px; }
.mg-empty-text { font-size: 13px; color: var(--muted); padding: 20px 14px; }
.mg-empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center;
  color: var(--muted); padding: 40px 20px;
}
.mg-empty-state svg { width: 28px; height: 28px; opacity: 0.4; }
.mg-empty-state p { margin: 0; font-size: 12.5px; line-height: 1.5; }

.mg-conv {
  position: relative; display: flex; align-items: center; gap: 12px; width: 100%;
  background: none; border: none; border-radius: 18px; padding: 10px; cursor: pointer; text-align: left;
  margin-bottom: 2px; transition: background 0.12s ease;
}
.mg-conv:hover { background: #F7F8FC; }
.mg-conv.is-active { background: var(--coral-pale); }
.mg-avatar {
  flex-shrink: 0; width: 46px; height: 46px; border-radius: 50%; overflow: hidden;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.mg-avatar img { width: 100%; height: 100%; object-fit: cover; }
.mg-avatar--xs { width: 30px; height: 30px; font-size: 11px; }
.mg-avatar--sm { width: 32px; height: 32px; font-size: 11px; }
.mg-avatar--md { width: 44px; height: 44px; font-size: 14px; }
.mg-avatar--xl { width: 86px; height: 86px; font-size: 28px; box-shadow: 0 0 0 4px #fff, 0 0 0 6px var(--coral-pale); }
.mg-avatar--group { background: var(--coral-pale); color: #E0502F; }
.mg-avatar--group svg { width: 52%; height: 52%; }
.mg-conv-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.mg-conv-row { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.mg-conv-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-conv-time { flex-shrink: 0; font-size: 11px; color: var(--muted); font-weight: 600; }
.mg-conv-preview { font-size: 12.5px; color: var(--muted); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-conv.is-unread .mg-conv-preview { color: var(--ink); font-weight: 700; }
.mg-unread-badge {
  flex-shrink: 0; min-width: 20px; height: 20px; padding: 0 6px; border-radius: 10px; background: var(--coral); color: #fff;
  font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center;
}

.mg-thread { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.mg-thread-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  color: var(--muted); text-align: center; padding: 20px;
}
.mg-thread-empty svg { width: 30px; height: 30px; opacity: 0.35; }
.mg-thread-empty p { margin: 0; font-size: 13px; }
.mg-thread-empty--inline { flex: 0 0 auto; margin: auto 0; }

.mg-thread-head { display: flex; align-items: center; gap: 10px; padding: 12px 18px; flex-shrink: 0; }
.mg-back { display: none; background: none; border: none; color: var(--muted); cursor: pointer; padding: 4px; }
.mg-back svg { width: 18px; height: 18px; }
.mg-collapse-toggle {
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  background: none; border: none; color: var(--muted); cursor: pointer; padding: 6px; border-radius: 10px;
  transition: background 0.12s ease, color 0.12s ease;
}
.mg-collapse-toggle:hover { background: #E7EAF2; color: var(--ink); }
.mg-collapse-toggle svg { width: 18px; height: 18px; }
.mg-thread-identity {
  display: flex; align-items: center; gap: 12px; min-width: 0; background: none; border: none; cursor: pointer;
  padding: 3px 6px; margin: -3px -6px; border-radius: 12px; text-align: left;
}
.mg-thread-identity:hover { background: #F7F8FC; }
.mg-thread-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.mg-thread-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-thread-sub { font-size: 12px; font-weight: 600; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-sender-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 11.5px; color: #E0502F; margin: 0 4px 2px; }

.mg-error {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: var(--coral-pale); color: var(--ink); font-size: 12.5px; padding: 8px 16px; margin: 0 16px 8px; border-radius: 12px;
}
.mg-error button { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; line-height: 1; }

.mg-messages { flex: 1; overflow-y: auto; padding: 18px 24px; display: flex; flex-direction: column; gap: 2px; background: #F7F8FC; }
.mg-date-divider { display: flex; align-items: center; justify-content: center; margin: 12px 0 8px; }
.mg-date-divider span { font-size: 12px; font-weight: 700; color: var(--muted); }
.mg-bubble-row { display: flex; align-items: flex-end; gap: 4px; margin-top: 8px; }
.mg-bubble-row.is-tight { margin-top: 3px; }
.mg-bubble-row.is-mine { justify-content: flex-end; }
.mg-bubble-col { display: flex; flex-direction: column; gap: 4px; max-width: 68%; min-width: 0; }
.mg-bubble-row.is-mine .mg-bubble-col { align-items: flex-end; }
.mg-bubble {
  padding: 10px 15px; border-radius: 20px 20px 20px 6px;
  background: #fff; color: var(--ink); font-size: 14px; font-weight: 600; line-height: 1.5; white-space: pre-wrap; word-break: break-word;
  display: block;
}
.mg-bubble-row.is-mine .mg-bubble { background: var(--coral); color: #fff; border-radius: 20px 20px 6px 20px; }
.mg-bubble--deleted { font-style: italic; opacity: 0.7; }

.mg-quote {
  display: block; margin-bottom: 6px; padding: 5px 9px; border-radius: 10px; cursor: pointer;
  background: rgba(43,42,74,0.06); border-left: 2px solid var(--muted);
  font-size: 11.5px; line-height: 1.35; white-space: normal;
}
.mg-bubble-row.is-mine .mg-bubble .mg-quote { background: rgba(255,255,255,0.18); border-left-color: rgba(255,255,255,0.6); }
.mg-quote strong { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 10.5px; margin-bottom: 1px; }
.mg-quote span { display: block; opacity: 0.85; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.mg-bubble--editing { background: #fff; border-radius: 16px; padding: 8px; display: flex; flex-direction: column; gap: 6px; box-shadow: 0 0 0 1px var(--hair); }
.mg-bubble--editing textarea {
  border: 1px solid var(--hair); border-radius: 12px; padding: 8px 10px; font: inherit; font-size: 13.5px;
  color: var(--ink); resize: none; outline: none; background: #fff;
}
.mg-bubble--editing textarea:focus { border-color: var(--coral); }
.mg-edit-actions { display: flex; justify-content: flex-end; gap: 8px; }
.mg-edit-actions button {
  border: none; background: none; font: inherit; font-size: 11.5px; font-weight: 700; cursor: pointer; padding: 3px 8px; border-radius: 6px;
  color: var(--muted);
}
.mg-edit-actions button:last-child { color: var(--coral); }
.mg-edit-actions button:last-child:disabled { opacity: 0.4; cursor: default; }
.mg-edit-actions button:hover:not(:disabled) { background: rgba(43,42,74,0.06); }

.mg-bubble-actions {
  display: flex; align-items: center; gap: 2px; flex-shrink: 0; padding-bottom: 4px;
  opacity: 0; transition: opacity 0.12s ease;
}
.mg-bubble-row:hover .mg-bubble-actions, .mg-bubble-row:focus-within .mg-bubble-actions { opacity: 1; }
.mg-bubble-actions button {
  width: 26px; height: 26px; border-radius: 50%; border: none; background: var(--card); color: var(--muted);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  box-shadow: 0 1px 3px rgba(43,42,74,0.14);
}
.mg-bubble-actions button:hover { color: var(--coral); }
.mg-bubble-actions svg { width: 13px; height: 13px; }

.mg-reactions { display: flex; flex-wrap: wrap; gap: 4px; }
.mg-reactions.is-mine { justify-content: flex-end; }
.mg-reaction-pill {
  display: inline-flex; align-items: center; gap: 3px; border: none; background: var(--card); box-shadow: 0 0 0 1px var(--hair);
  border-radius: 999px; padding: 2px 8px; font-size: 12px; font-weight: 700; cursor: pointer; color: var(--ink); line-height: 1.5;
}
.mg-reaction-pill.is-mine-reaction { box-shadow: 0 0 0 1px var(--coral); background: var(--coral-pale); }

.mg-reaction-picker {
  display: flex; gap: 2px; background: var(--card); border: 1px solid var(--hair); border-radius: 999px;
  padding: 4px; box-shadow: 0 4px 14px rgba(43,42,74,0.16); align-self: flex-start;
}
.mg-reaction-picker.is-mine { align-self: flex-end; }
.mg-reaction-picker button {
  width: 28px; height: 28px; border: none; background: none; font-size: 15px; cursor: pointer; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.mg-reaction-picker button:hover { background: var(--navy-pale); }

.mg-bubble-meta { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: var(--muted); margin: 3px 4px 4px; }
.mg-bubble-meta.is-mine { justify-content: flex-end; }
.mg-edited-tag { font-style: italic; }
.mg-seen { display: inline-flex; align-items: center; gap: 3px; color: var(--coral); font-weight: 700; }
.mg-seen svg { width: 11px; height: 11px; }

.mg-lesson-card {
  display: flex; align-items: center; gap: 12px; text-align: left; border: none; cursor: pointer; font: inherit; color: var(--ink);
  background: #fff; border-radius: 18px; padding: 10px 14px 10px 10px; box-shadow: 0 0 0 1px var(--hair); min-width: 230px; max-width: 100%;
  transition: box-shadow 0.12s ease;
}
.mg-lesson-card:hover { box-shadow: 0 0 0 1.5px var(--coral); }
.mg-bubble-row.is-mine .mg-lesson-card { box-shadow: 0 0 0 2px var(--coral); }
.mg-lesson-ico { width: 38px; height: 38px; border-radius: 12px; background: var(--navy-pale); color: var(--navy); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.mg-lesson-ico svg { width: 19px; height: 19px; }
.mg-lesson-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.mg-lesson-text strong { font-size: 13.5px; font-weight: 700; }
.mg-lesson-text small { font-size: 12px; font-weight: 600; color: var(--muted); }
.mg-lesson-card--side { width: 100%; min-width: 0; padding: 8px 10px 8px 8px; margin-bottom: 8px; }
.mg-lesson-card--side .mg-lesson-ico { width: 32px; height: 32px; border-radius: 10px; }

.mg-reply-preview {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 8px 20px; background: #E7EAF2; flex-shrink: 0;
}
.mg-reply-preview-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.mg-reply-preview-text strong { font-family: 'Fredoka', sans-serif; font-size: 11.5px; font-weight: 600; color: var(--ink); }
.mg-reply-preview-text span { font-size: 12px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-reply-preview button { flex-shrink: 0; background: none; border: none; color: var(--muted); font-size: 18px; cursor: pointer; line-height: 1; }

.mg-composer { display: flex; align-items: flex-end; gap: 8px; padding: 12px 16px 14px; flex-shrink: 0; }
.mg-composer-input {
  flex: 1; resize: none; border: none; border-radius: 22px; padding: 12px 18px;
  font: inherit; font-size: 14px; font-weight: 600; color: var(--ink); outline: none; max-height: 120px; min-height: 44px; overflow-y: hidden; background: #E7EAF2;
  transition: box-shadow 0.12s ease;
}
.mg-composer-input:focus { box-shadow: 0 0 0 2px var(--coral-pale); background: #E7EAF2; }
.mg-composer-input::placeholder { color: var(--muted); }
.mg-send-btn {
  flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%; border: none;
  background: var(--coral); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform 0.1s ease, opacity 0.1s ease, background 0.12s ease;
}
.mg-send-btn:not(:disabled):hover { background: #E0502F; transform: scale(1.05); }
.mg-send-btn:disabled { opacity: 0.35; cursor: default; }
.mg-send-btn svg { width: 17px; height: 17px; }
.mg-list-tabs { display: flex; gap: 6px; padding: 0 16px 10px; }
.mg-list-tabs button { border: none; background: #F1F3F8; color: #8B84A3; border-radius: 999px; padding: 7px 14px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 7px; }
.mg-list-tabs button.is-on { background: var(--navy); color: #fff; }
.mg-list-tabs em { font-style: normal; font-size: 11px; background: var(--coral); color: #fff; border-radius: 999px; padding: 1px 7px; }
.mg-request-bar { margin: 12px 16px 14px; padding: 14px 16px; border-radius: 22px; background: #FFF8F5; box-shadow: inset 0 0 0 1.5px #F5C7B8; }
.mg-request-bar p { margin: 0 0 10px; font-size: 13.5px; font-weight: 600; line-height: 1.5; color: var(--ink); }
.mg-request-actions { display: flex; gap: 8px; }
.mg-request-actions button { border: none; border-radius: 999px; padding: 9px 20px; font: inherit; font-size: 13.5px; font-weight: 700; cursor: pointer; background: #fff; color: var(--ink); box-shadow: inset 0 0 0 1.5px rgba(43,42,74,0.14); }
.mg-request-actions button.is-accept { background: var(--coral); color: #fff; box-shadow: none; }
.mg-request-actions button.is-accept:hover { background: #E0502F; }
.mg-request-hint { margin: 8px 18px 0; font-size: 12.5px; font-weight: 700; color: #8B84A3; text-align: center; }
.mg-blocked-note { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 12px 16px 14px; padding: 12px 16px; border-radius: 22px; background: #F1F3F8; font-size: 13.5px; font-weight: 700; color: #8B84A3; text-align: center; }
.mg-blocked-note button { border: none; background: var(--coral); color: #fff; border-radius: 999px; padding: 8px 16px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }
.mg-side-safety { display: flex; gap: 8px; margin-top: 8px; width: 100%; }
.mg-side-safety button { flex: 1; border: none; background: #F1F3F8; color: var(--ink); border-radius: 999px; padding: 9px 10px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }
.mg-side-safety button:hover { background: #E7EAF2; }
.mg-side-safety button.is-danger { color: #B3261E; }
.mg-share-wrap { position: relative; flex-shrink: 0; align-self: center; }
.mg-share-btn {
  display: flex; align-items: center; gap: 6px; border: none; background: var(--coral-pale); color: #C2411F; cursor: pointer;
  border-radius: 50%; width: 44px; height: 44px; justify-content: center; padding: 0; font: inherit;
}
.mg-share-btn:hover { background: #fbdcd0; }
.mg-share-btn svg { width: 19px; height: 19px; }
.mg-share-menu {
  position: absolute; bottom: calc(100% + 10px); left: 0; width: 300px; max-height: 300px; overflow-y: auto; z-index: 20;
  background: #fff; border-radius: 18px; padding: 8px; box-shadow: 0 12px 34px rgba(43,42,74,0.2), 0 0 0 1px var(--hair);
}
.mg-share-title { font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 700; padding: 6px 8px; }
.mg-share-menu button {
  display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; border-radius: 12px; padding: 8px;
  font: inherit; font-size: 13px; font-weight: 700; color: var(--ink); cursor: pointer; text-align: left;
}
.mg-share-menu button:hover { background: #F7F8FC; }

.mg-side { width: 270px; flex-shrink: 0; padding: 26px 20px; overflow-y: auto; text-align: center; display: flex; flex-direction: column; align-items: stretch; }
.mg-side .mg-avatar--xl { margin: 0 auto 12px; }
.mg-side-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; margin: 0; color: var(--ink); }
.mg-side-sub { font-size: 13px; font-weight: 600; color: var(--muted); margin: 3px 0 12px; }
.mg-side-pills { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px; }
.mg-side-pills span { background: var(--navy-pale); color: var(--navy); border-radius: 999px; padding: 3px 11px; font-size: 12px; font-weight: 700; }
.mg-side-btn {
  width: 100%; border: none; background: var(--coral); color: #fff; border-radius: 999px; padding: 11px; cursor: pointer;
  font: inherit; font-size: 13.5px; font-weight: 700; transition: background 0.12s ease;
}
.mg-side-btn:hover { background: #E0502F; }
.mg-side-h { margin: 24px 0 8px; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 700; text-align: left; }
.mg-side-empty { margin: 0; font-size: 13px; color: var(--muted); font-weight: 600; text-align: left; }
.mg-side-members { display: flex; flex-direction: column; gap: 4px; text-align: left; }
.mg-side-member { display: flex; align-items: center; gap: 10px; padding: 4px 0; font-size: 13.5px; font-weight: 700; }

.mg-group-overlay {
  position: fixed; inset: 0; background: rgba(43,42,74,0.35); backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px;
}
.mg-group-modal {
  width: 100%; max-width: 380px; background: var(--card); border-radius: 18px; padding: 22px;
  box-shadow: 0 20px 50px rgba(27,42,74,0.25); max-height: 85vh; overflow-y: auto;
}
.mg-group-modal h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; margin: 0 0 16px; color: var(--ink); }
.mg-group-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; color: var(--muted); margin: 14px 0 6px; }
.mg-group-label:first-of-type { margin-top: 0; }
.mg-group-input {
  width: 100%; border: 1px solid var(--hair); border-radius: 10px; padding: 10px 12px;
  font: inherit; font-size: 13.5px; color: var(--ink); outline: none; background: #FDFCFA;
}
.mg-group-input:focus { border-color: var(--coral); background: #fff; }
.mg-group-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.mg-group-chip {
  display: inline-flex; align-items: center; gap: 5px; background: var(--coral-pale); color: var(--ink);
  border-radius: 999px; padding: 4px 6px 4px 10px; font-size: 12px; font-weight: 600;
}
.mg-group-chip button { background: none; border: none; color: var(--muted); font-size: 14px; cursor: pointer; line-height: 1; padding: 2px; }
.mg-group-results {
  margin-top: 6px; border: 1px solid var(--hair); border-radius: 10px; overflow: hidden; max-height: 160px; overflow-y: auto;
}
.mg-group-result {
  display: flex; align-items: center; gap: 8px; width: 100%; padding: 8px 10px; background: none; border: none;
  cursor: pointer; text-align: left; font-size: 13px; color: var(--ink);
}
.mg-group-result:hover { background: var(--navy-pale); }
.mg-group-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.mg-group-cancel { background: none; border: none; font: inherit; font-size: 13px; font-weight: 600; color: var(--muted); cursor: pointer; padding: 8px 12px; }
.mg-group-create {
  border: none; border-radius: 10px; padding: 8px 16px; font: inherit; font-size: 13px; font-weight: 700;
  background: var(--coral); color: #fff; cursor: pointer;
}
.mg-group-create:disabled { opacity: 0.4; cursor: default; }
.mg-group-hint { font-size: 11px; color: var(--muted); margin: 10px 0 0; }

.mg-member-list { display: flex; flex-direction: column; gap: 2px; max-height: 180px; overflow-y: auto; margin-bottom: 4px; }
.mg-member-row { display: flex; align-items: center; gap: 9px; padding: 6px 2px; }
.mg-member-name { flex: 1; min-width: 0; font-size: 13px; color: var(--ink); display: flex; align-items: center; gap: 6px; }
.mg-member-tag {
  font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; color: var(--navy);
  background: var(--navy-pale); padding: 2px 6px; border-radius: 999px;
}
.mg-member-remove { flex-shrink: 0; background: none; border: none; font: inherit; font-size: 11.5px; font-weight: 600; color: var(--coral); cursor: pointer; padding: 4px 6px; }
.mg-member-remove:hover { text-decoration: underline; }

@media (max-width: 1080px) {
  .mg-side { display: none; }
}
@media (max-width: 720px) {
  .mg-frame { padding: 0; }
  .mg-body { gap: 0; }
  .mg-list, .mg-thread { border-radius: 0; box-shadow: none; }
  .mg-list { width: 100%; }
  .mg-list--hidden-mobile { display: none; }
  .mg-thread--hidden-mobile { display: none; }
  .mg-back { display: flex; align-items: center; justify-content: center; }
  .mg-collapse-toggle { display: none; }
  .mg-bubble-actions { opacity: 0.55; }
  .mg-share-menu { width: 260px; }
}
`;
