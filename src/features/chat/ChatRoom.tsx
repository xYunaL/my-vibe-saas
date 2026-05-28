"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EmptyState } from "@/components/ui/EmptyState";
import { TeamChatTabs } from "./TeamChatTabs";
import { ChatBubble } from "./ChatBubble";
import { LiveIndicator } from "./LiveIndicator";
import { useChatMessages } from "./hooks/useChatMessages";
import { canPostInTeamChat, getTeam, isRealTeam } from "@/lib/teams";
import type { UserProfile } from "@/lib/types";
import type { RoomType } from "./types";

type Props = {
  roomType: RoomType;
  profile?: UserProfile | null;
  /** Active team in The Garage (team mode only). */
  activeTeamId?: string;
  onTeamChange?: (teamId: string) => void;
};

/**
 * Chat room (FR-002~FR-005 + change `expand-team-roster-and-cross-team-chat`).
 *
 * Global mode: anyone with a profile can post.
 * Team mode: every team's chat is readable; the composer is gated by
 * canPostInTeamChat(profile, activeTeamId).
 */
export function ChatRoom({ roomType, profile, activeTeamId, onTeamChange }: Props) {
  const { messages, sendMessage } = useChatMessages(roomType);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => {
    if (roomType === "global") return messages;
    return messages.filter((m) => m.teamId === activeTeamId);
  }, [messages, roomType, activeTeamId]);

  // Auto-scroll to the newest message.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [visible.length]);

  const team = activeTeamId ? getTeam(activeTeamId) : undefined;
  const myTeamId =
    profile && isRealTeam(profile.selectedTeamId)
      ? profile.selectedTeamId
      : undefined;

  const canPost =
    roomType === "global"
      ? Boolean(profile)
      : canPostInTeamChat(profile ?? null, activeTeamId ?? "");

  const lockReason = !profile
    ? "온보딩을 완료하면 채팅에 참여할 수 있어요"
    : roomType === "team" && !canPost
      ? `읽기 전용 — ${team?.name ?? "이 팀"} 팬만 발언할 수 있어요`
      : null;

  const title =
    roomType === "global"
      ? "The Main Straight"
      : `The Garage — ${team?.name ?? "팀 선택"}`;
  const subtitle =
    roomType === "global"
      ? "전체 채팅"
      : "팀 채팅 · 다른 팀 채팅도 읽을 수 있어요";

  function handleSend() {
    if (!canPost || !profile) return;
    sendMessage(draft, profile, activeTeamId);
    setDraft("");
  }

  return (
    <section className="racing-border flex h-full flex-col rounded-2xl border border-white/8 bg-[var(--color-charcoal-800)] p-6 pl-8">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h2 className="font-display text-xl font-black tracking-tight">
            {title}
          </h2>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/45">
            {subtitle}
          </p>
        </div>
        <LiveIndicator />
      </div>

      {roomType === "team" && activeTeamId && onTeamChange && (
        <div className="pt-4">
          <TeamChatTabs
            activeTeamId={activeTeamId}
            onSelect={onTeamChange}
            myTeamId={myTeamId}
          />
        </div>
      )}

      {lockReason && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-[var(--color-carbon-gold)]/30 bg-[var(--color-carbon-gold)]/10 px-3 py-2">
          <span aria-hidden>🔒</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-carbon-gold)]">
            {lockReason}
          </span>
        </div>
      )}

      <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-1" style={{ minHeight: 280, maxHeight: 420 }}>
        {visible.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <EmptyState
              icon="💬"
              title="아직 메시지가 없어요"
              description="첫 메시지를 남겨보세요. 잠시 후 다른 팬들의 메시지도 도착합니다."
            />
          </div>
        ) : (
          visible.map((m) => (
            <ChatBubble
              key={m.id}
              message={m}
              isOwn={Boolean(profile) && m.nickname === profile!.nickname}
            />
          ))
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          disabled={!canPost}
          aria-label="메시지 입력"
          placeholder={canPost ? "메시지를 입력하세요…" : "이 채팅은 읽기 전용입니다"}
          className="flex-1 rounded-full border border-white/10 bg-[var(--color-charcoal-700)] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-f1-red)] focus:outline-none disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!canPost || draft.trim().length === 0}
          className="rounded-full bg-[var(--color-f1-red)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-f1-red-pressed)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </section>
  );
}
