"use client";

import { useState } from "react";
import { SPECIAL_TEAM_CARDS, TEAMS } from "@/lib/teams";
import type { UserProfile } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  /** Dismiss without saving (guest preview). */
  onClose: () => void;
  /** Called with the completed profile when the user submits. */
  onComplete: (profile: UserProfile) => void;
  /** Pre-fill when editing an existing profile. */
  initialProfile?: UserProfile | null;
};

const MAX_NICKNAME = 15;

/**
 * Onboarding flow (FR-001 + change `expand-team-roster-and-cross-team-chat`).
 * Nickname + team/virtual-option selection → saveUserProfile (handled by parent).
 *
 * Rendered conditionally by the parent (`{open && <OnboardingModal/>}`), so
 * each open is a fresh mount — initial form state comes straight from props.
 */
export function OnboardingModal({ onClose, onComplete, initialProfile }: Props) {
  const [nickname, setNickname] = useState(initialProfile?.nickname ?? "");
  const [selectedId, setSelectedId] = useState<string>(
    initialProfile?.selectedTeamId ?? ""
  );

  const canSubmit = nickname.trim().length > 0 && selectedId.length > 0;

  function handleSubmit() {
    if (!canSubmit) return;
    onComplete({ nickname: nickname.trim(), selectedTeamId: selectedId });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      <div className="racing-border w-full max-w-3xl rounded-2xl border border-white/8 bg-[var(--color-charcoal-800)] p-8 pl-10 max-h-[90vh] overflow-y-auto">
        <h2
          id="onboarding-title"
          className="font-display text-2xl font-black tracking-tight"
        >
          패독에 오신 것을 환영합니다
        </h2>
        <p className="mt-1 text-sm text-white/55">
          닉네임과 응원할 팀을 선택해주세요.
        </p>

        <label className="mt-6 block">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
            Nickname
          </span>
          <input
            autoFocus
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canSubmit) handleSubmit();
            }}
            maxLength={MAX_NICKNAME}
            placeholder="예: 맥스맘"
            aria-label="닉네임"
            className="mt-2 w-full rounded-lg border border-white/10 bg-[var(--color-charcoal-700)] px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-f1-red)] focus:outline-none"
          />
          <span className="mt-1 block text-right font-mono text-[10px] text-white/35">
            {nickname.length}/{MAX_NICKNAME}
          </span>
        </label>

        <div className="mt-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
            Choose your team — 2026 grid
          </span>

          {/* Virtual options first so non-fans see they are welcome. */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {SPECIAL_TEAM_CARDS.map((card) => {
              const active = selectedId === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedId(card.id)}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border-2 px-3 py-3 text-left transition-colors",
                    active
                      ? "bg-[var(--color-charcoal-650)]"
                      : "bg-[var(--color-charcoal-700)] hover:bg-[var(--color-charcoal-650)]"
                  )}
                  style={{
                    borderColor: active ? card.borderColor : "rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-2xl" aria-hidden>
                    {card.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-bold text-white">
                      {card.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                      {card.caption}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {TEAMS.map((team) => {
              const active = selectedId === team.id;
              return (
                <button
                  key={team.id}
                  type="button"
                  onClick={() => setSelectedId(team.id)}
                  aria-pressed={active}
                  title={team.fullName}
                  className={cn(
                    "flex flex-col gap-1 rounded-lg border-2 p-3 text-left transition-colors",
                    active
                      ? "bg-[var(--color-charcoal-650)]"
                      : "border-white/8 bg-[var(--color-charcoal-700)] hover:bg-[var(--color-charcoal-650)]"
                  )}
                  style={{ borderColor: active ? team.baseColor : undefined }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-sm"
                      style={{ background: team.baseColor }}
                      aria-hidden
                    />
                    <span className="text-lg" aria-hidden>
                      {team.logo}
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      {team.name}
                    </span>
                  </div>
                  <ul className="ml-5 list-disc font-mono text-[10px] text-white/55 marker:text-white/30">
                    {team.drivers.map((d) => (
                      <li key={d} className="truncate">
                        {d}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/55 hover:text-white"
          >
            나중에
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-full bg-[var(--color-f1-red)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-f1-red-pressed)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
}
