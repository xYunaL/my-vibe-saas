"use client";

import { useCallback, useMemo, useState } from "react";
import type { UserProfile } from "@/lib/types";
import type { Meme } from "../types";
import { SEED_MEMES } from "../mock-data";

export type SortOrder = "latest" | "popular";

type AddMemeInput = {
  imageUrl: string;
  caption?: string;
  profile: UserProfile;
};

/**
 * In-memory meme store (FR-006~FR-008, FR-012).
 * addMeme prepends; toggleLike flips a per-session like; sortOrder switches
 * between newest-first and most-liked-first.
 */
export function useMemes() {
  const [memes, setMemes] = useState<Meme[]>(SEED_MEMES);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [sortOrder, setSortOrder] = useState<SortOrder>("latest");

  const addMeme = useCallback(({ imageUrl, caption, profile }: AddMemeInput) => {
    const meme: Meme = {
      id: `meme-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
      imageUrl: imageUrl.trim(),
      caption: caption?.trim() || undefined,
      authorNickname: profile.nickname,
      authorTeamId: profile.selectedTeamId,
      likes: 0,
      createdAt: new Date().toISOString(),
    };
    setMemes((prev) => [meme, ...prev]);
  }, []);

  const toggleLike = useCallback(
    (id: string) => {
      const liked = likedIds.has(id);
      setMemes((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, likes: m.likes + (liked ? -1 : 1) } : m
        )
      );
      setLikedIds((prev) => {
        const next = new Set(prev);
        if (liked) next.delete(id);
        else next.add(id);
        return next;
      });
    },
    [likedIds]
  );

  const sorted = useMemo(() => {
    const copy = [...memes];
    if (sortOrder === "popular") {
      copy.sort((a, b) => b.likes - a.likes);
    } else {
      copy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return copy;
  }, [memes, sortOrder]);

  return { memes: sorted, likedIds, sortOrder, setSortOrder, addMeme, toggleLike };
}
