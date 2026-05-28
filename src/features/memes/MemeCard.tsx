"use client";

import { useState } from "react";
import { getTeam, SPECIAL_TEAM_CARDS } from "@/lib/teams";
import { cn } from "@/lib/utils";
import type { Meme } from "./types";

type Props = {
  meme: Meme;
  liked: boolean;
  onToggleLike: (id: string) => void;
};

function authorMeta(teamId: string): { color: string; logo: string } {
  const team = getTeam(teamId);
  if (team) return { color: team.baseColor, logo: team.logo };
  const special = SPECIAL_TEAM_CARDS.find((c) => c.id === teamId);
  return { color: "#ffb800", logo: special?.icon ?? "👤" };
}

/**
 * Single meme card (FR-007, FR-008). Falls back to a placeholder when the
 * image URL fails to load.
 */
export function MemeCard({ meme, liked, onToggleLike }: Props) {
  const [broken, setBroken] = useState(false);
  const meta = authorMeta(meme.authorTeamId);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/8 bg-[var(--color-charcoal-700)]">
      <div className="relative aspect-[3/2] w-full bg-[var(--color-charcoal-750)]">
        {broken ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/40">
            <span className="text-3xl" aria-hidden>🖼️</span>
            <span className="font-mono text-[10px] uppercase tracking-wider">
              이미지를 불러올 수 없습니다
            </span>
          </div>
        ) : (
          // Plain img: meme URLs are user-supplied, unknown domains.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={meme.imageUrl}
            alt={meme.caption ?? `${meme.authorNickname}님의 밈`}
            onError={() => setBroken(true)}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        {meme.caption && (
          <p className="text-sm leading-relaxed text-white/90">{meme.caption}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/55">
            <span aria-hidden>{meta.logo}</span>
            <span style={{ color: meta.color }}>{meme.authorNickname}</span>
          </span>
          <button
            type="button"
            onClick={() => onToggleLike(meme.id)}
            aria-pressed={liked}
            aria-label={liked ? "좋아요 취소" : "좋아요"}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] transition-colors",
              liked
                ? "bg-[var(--color-f1-red)]/15 text-[var(--color-f1-red)]"
                : "bg-[var(--color-charcoal-650)] text-white/55 hover:text-white"
            )}
          >
            <span aria-hidden>{liked ? "❤️" : "🤍"}</span>
            {meme.likes}
          </button>
        </div>
      </div>
    </article>
  );
}
