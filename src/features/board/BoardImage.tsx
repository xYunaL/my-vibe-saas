"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

/** User-supplied post image with a graceful load-failure placeholder. */
export function BoardImage({ src, alt = "첨부 이미지", className }: Props) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--color-charcoal-750)] px-3 py-2 text-[var(--text-faint)]">
        <span aria-hidden>🖼️</span>
        <span className="font-mono text-[10px] uppercase tracking-wider">
          이미지를 불러올 수 없습니다
        </span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setBroken(true)}
        loading="lazy"
        className={cn("w-full object-cover", className)}
      />
    </div>
  );
}
