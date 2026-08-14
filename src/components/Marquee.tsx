export function Marquee({ items, className }: { items: string[]; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ""}`}
    >
      <div className="marquee-track flex w-max gap-3">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-shrink-0 rounded-full border border-ink-700 bg-white/[0.02] px-4 py-2 font-mono text-xs text-ink-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
