"use client";

import { cn } from "@/lib/utils";
import { getTeam, SPECIAL_TEAM_CARDS } from "@/lib/teams";
import type { UserProfile } from "@/lib/types";

export type TabId = "main-straight" | "garage" | "meme" | "f1-101" | "pit-wall";

export const TABS: { id: TabId; label: string }[] = [
  { id: "main-straight", label: "Main Straight" },
  { id: "garage", label: "Garage" },
  { id: "meme", label: "Meme Box" },
  { id: "f1-101", label: "F1 101" },
  { id: "pit-wall", label: "Pit Wall" },
];

type Props = {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  profile?: UserProfile | null;
  onProfileClick?: () => void;
};

function profileBadge(profile: UserProfile | null | undefined): {
  icon: string;
  label: string;
} {
  if (!profile) return { icon: "👤", label: "Guest" };
  const team = getTeam(profile.selectedTeamId);
  if (team) return { icon: team.logo, label: profile.nickname };
  const special = SPECIAL_TEAM_CARDS.find((c) => c.id === profile.selectedTeamId);
  return { icon: special?.icon ?? "👤", label: profile.nickname };
}

export function AppHeader({ activeTab, onTabChange, profile, onProfileClick }: Props) {
  const badge = profileBadge(profile);
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[var(--color-charcoal-800)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-6 w-1.5 rounded-sm bg-[var(--color-f1-red)]"
            aria-hidden
          />
          <span className="font-display text-[20px] font-black tracking-tight text-white">
            PADDOCK<span className="text-[var(--color-f1-red)]">.</span>KOREA
          </span>
        </div>

        <nav
          aria-label="섹션 탭"
          className="hidden md:flex items-center gap-1 rounded-full bg-[var(--color-charcoal-700)] p-1"
        >
          {TABS.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
                  active
                    ? "bg-[var(--color-f1-red)] text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onProfileClick}
          disabled={!onProfileClick}
          className="flex items-center gap-2 rounded-full bg-[var(--color-charcoal-700)] px-3 py-1.5 text-xs text-white/70 transition-colors enabled:hover:text-white disabled:cursor-default"
          aria-label={profile ? `프로필: ${badge.label}` : "프로필 설정"}
        >
          <span className="text-base" aria-hidden>{badge.icon}</span>
          <span className="max-w-[8rem] truncate font-mono tracking-wider">
            {badge.label}
          </span>
        </button>
      </div>

      {/* Mobile tab strip */}
      <nav
        aria-label="섹션 탭 (모바일)"
        className="md:hidden flex overflow-x-auto border-t border-white/5"
      >
        {TABS.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-pressed={active}
              className={cn(
                "shrink-0 px-4 py-3 font-mono text-[10px] uppercase tracking-wider transition-colors",
                active
                  ? "border-b-2 border-[var(--color-f1-red)] text-white"
                  : "border-b-2 border-transparent text-white/55"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
