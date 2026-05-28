"use client";

import { useState } from "react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { MemeCard } from "./MemeCard";
import { MemeUploadModal } from "./MemeUploadModal";
import { useMemes, type SortOrder } from "./hooks/useMemes";
import { cn } from "@/lib/utils";
import type { UserProfile } from "@/lib/types";

type Props = {
  profile?: UserProfile | null;
};

const SORTS: { id: SortOrder; label: string }[] = [
  { id: "latest", label: "최신순" },
  { id: "popular", label: "인기순" },
];

/**
 * Meme Box feed (FR-006~FR-008, FR-012).
 */
export function MemeFeed({ profile }: Props) {
  const { memes, likedIds, sortOrder, setSortOrder, addMeme, toggleLike } =
    useMemes();
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <section className="rounded-2xl border border-white/8 bg-[var(--color-charcoal-800)] p-6">
      <header className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h2 className="font-display text-xl font-black tracking-tight">
            Meme Box
          </h2>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/45">
            팬 밈 모음
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={() => setUploadOpen(true)}
          disabled={!profile}
          title={profile ? undefined : "온보딩 완료 후 업로드할 수 있어요"}
        >
          + 밈 올리기
        </Button>
      </header>

      <div className="mt-4 flex gap-2" role="group" aria-label="정렬">
        {SORTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSortOrder(s.id)}
            aria-pressed={s.id === sortOrder}
            className={cn(
              "rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
              s.id === sortOrder
                ? "bg-[var(--color-f1-red)] text-white"
                : "border border-white/10 bg-[var(--color-charcoal-700)] text-white/55 hover:text-white"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {memes.length === 0 ? (
        <EmptyState
          icon="🖼️"
          title="아직 등록된 밈이 없습니다"
          description="이미지 URL로 첫 밈을 올려보세요."
        />
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {memes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              liked={likedIds.has(meme.id)}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      )}

      {uploadOpen && (
        <MemeUploadModal
          onClose={() => setUploadOpen(false)}
          onSubmit={({ imageUrl, caption }) => {
            if (!profile) return;
            addMeme({ imageUrl, caption, profile });
            setSortOrder("latest");
          }}
        />
      )}
    </section>
  );
}
