"use client";

import { useState } from "react";
import { isValidUrl } from "@/lib/utils";
import { BoardImage } from "./BoardImage";

type Props = {
  /** Label of the board being posted to (e.g. "전체" or team name). */
  scopeLabel: string;
  onClose: () => void;
  onSubmit: (input: { title: string; body: string; imageUrl?: string }) => void;
};

/**
 * Post composer modal (title + body + optional image URL).
 * Rendered conditionally by the parent.
 */
export function PostComposer({ scopeLabel, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const urlOk = isValidUrl(imageUrl);
  const showUrlError = imageUrl.length > 0 && !urlOk;
  const canSubmit =
    title.trim().length > 0 && body.trim().length > 0 && !showUrlError;

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit({ title, body, imageUrl: urlOk ? imageUrl.trim() : undefined });
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-composer-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--color-charcoal-800)] p-6">
        <h2
          id="post-composer-title"
          className="font-display text-xl font-black tracking-tight"
        >
          글쓰기
        </h2>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
          {scopeLabel} 게시판
        </p>

        <label className="mt-5 block">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
            제목 *
          </span>
          <input
            autoFocus
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={60}
            placeholder="제목을 입력하세요"
            aria-label="제목"
            className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--color-charcoal-700)] px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-f1-red)] focus:outline-none"
          />
        </label>

        <label className="mt-4 block">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
            본문 *
          </span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
            placeholder="내용을 입력하세요"
            aria-label="본문"
            className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--color-charcoal-700)] px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-f1-red)] focus:outline-none"
          />
        </label>

        <label className="mt-4 block">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
            이미지 URL (선택)
          </span>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            aria-label="이미지 URL"
            aria-invalid={showUrlError}
            className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--color-charcoal-700)] px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-f1-red)] focus:outline-none"
          />
          {showUrlError && (
            <span className="mt-1 block font-mono text-[10px] text-[var(--color-f1-red)]">
              유효한 http(s) URL을 입력해주세요
            </span>
          )}
        </label>

        {urlOk && (
          <div className="mt-3">
            <BoardImage src={imageUrl} alt="미리보기" className="max-h-40" />
          </div>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] hover:text-[var(--text)]"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-full bg-[var(--color-f1-red)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--text)] transition-colors hover:bg-[var(--color-f1-red-pressed)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
