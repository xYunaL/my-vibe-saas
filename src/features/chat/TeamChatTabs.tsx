"use client";

import { TEAMS } from "@/lib/teams";
import { cn } from "@/lib/utils";

type Props = {
  activeTeamId: string;
  onSelect: (teamId: string) => void;
  /** The user's own team — gets a visual "내 팀" marker. */
  myTeamId?: string;
};

/**
 * Horizontal team selector for The Garage.
 * Lets any user browse every team's chat (read access); write access is
 * gated separately in ChatRoom via canPostInTeamChat().
 * Source: openspec/changes/expand-team-roster-and-cross-team-chat/specs/chat/spec.md
 */
export function TeamChatTabs({ activeTeamId, onSelect, myTeamId }: Props) {
  return (
    <nav
      aria-label="팀 채팅 선택"
      className="flex gap-1.5 overflow-x-auto border-b border-white/5 pb-3"
    >
      {TEAMS.map((team) => {
        const active = team.id === activeTeamId;
        const mine = team.id === myTeamId;
        return (
          <button
            key={team.id}
            type="button"
            onClick={() => onSelect(team.id)}
            aria-pressed={active}
            title={mine ? `${team.fullName} (내 팀)` : team.fullName}
            className={cn(
              "group relative flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
              active
                ? "border-transparent text-white"
                : "border-white/10 bg-[var(--color-charcoal-700)] text-white/55 hover:text-white"
            )}
            style={active ? { backgroundColor: team.baseColor } : undefined}
          >
            <span aria-hidden>{team.logo}</span>
            <span>{team.name}</span>
            {mine && (
              <span
                className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-carbon-gold)]"
                aria-label="내 팀"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
