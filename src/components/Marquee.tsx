export function Marquee({
  items,
  className,
  reverse = false,
  muted = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ""}`}
    >
      <div className={`flex w-max gap-3 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex-shrink-0 rounded-full border px-4 py-2 font-mono text-xs ${
              muted
                ? "border-ink-800 bg-transparent text-ink-500"
                : "border-ink-700 bg-white/[0.02] text-ink-300"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
