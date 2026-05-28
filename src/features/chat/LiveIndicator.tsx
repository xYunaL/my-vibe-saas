/**
 * Live status pill (FR-005) — pulsing red dot + LIVE label.
 */
export function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-charcoal-700)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-f1-red)] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-f1-red)]" />
      </span>
      Live
    </span>
  );
}
