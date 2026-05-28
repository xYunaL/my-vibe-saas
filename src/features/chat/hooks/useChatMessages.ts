"use client";

import { useCallback, useEffect, useState } from "react";
import { getTeam } from "@/lib/teams";
import type { UserProfile } from "@/lib/types";
import type { ChatMessage, RoomType } from "../types";
import {
  SEED_GLOBAL_MESSAGES,
  SEED_TEAM_MESSAGES,
  makeSimMessage,
} from "../mock-data";

const SIM_INTERVAL_MS = 7000;

/**
 * In-memory chat store with a setInterval simulator (FR-002, FR-005).
 *
 * One hook instance per room type. For team mode the hook keeps messages for
 * ALL teams; the caller filters by activeTeamId. Messages reset on reload
 * (no persistence — see TECHNICAL_DESIGN open questions).
 */
export function useChatMessages(roomType: RoomType) {
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    roomType === "global" ? SEED_GLOBAL_MESSAGES : SEED_TEAM_MESSAGES
  );

  // Simulated incoming traffic so the room feels alive during the demo.
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prev) => [...prev, makeSimMessage(roomType)]);
    }, SIM_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [roomType]);

  const sendMessage = useCallback(
    (text: string, profile: UserProfile, teamId?: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const team = getTeam(profile.selectedTeamId);
      const message: ChatMessage = {
        id: `me-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
        roomType,
        teamId: roomType === "team" ? teamId : undefined,
        nickname: profile.nickname,
        // Author's own team color (fall back to F1 red for none/all profiles).
        teamColor: team?.baseColor ?? "#e10600",
        text: trimmed,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, message]);
    },
    [roomType]
  );

  return { messages, sendMessage };
}
