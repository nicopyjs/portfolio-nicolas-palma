const BAR_HEIGHTS = [38, 62, 48, 78, 58, 88, 68];
const BI_BAR_HEIGHTS = [32, 58, 42, 72, 52, 86];

function ChromeBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-ink-700 bg-ink-800/60 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-ink-700" />
      <span className="h-2 w-2 rounded-full bg-ink-700" />
      <span className="h-2 w-2 rounded-full bg-ledger/70" />
      <span className="ml-2 truncate font-mono text-[10px] text-ink-500">{label}</span>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex h-full flex-col">
      <ChromeBar label="movimientos.neb.cl" />
      <div className="flex flex-1 flex-col gap-2.5 p-3.5">
        <div className="flex gap-2.5">
          <div className="flex-1 rounded-lg border border-ink-700 bg-white/[0.02] p-2">
            <div className="font-mono text-[9px] uppercase tracking-wide text-ink-500">Ingresos</div>
            <div className="mt-1 font-display text-lg font-semibold text-ledger-glow">+18.4%</div>
          </div>
          <div className="flex-1 rounded-lg border border-ink-700 bg-white/[0.02] p-2">
            <div className="font-mono text-[9px] uppercase tracking-wide text-ink-500">Gastos</div>
            <div className="mt-1 font-display text-lg font-semibold text-ink-50">-6.1%</div>
          </div>
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-ink-700 bg-white/[0.02] p-3">
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-ledger to-ledger-glow"
              style={{ height: `${h}%`, opacity: 0.5 + (i / BAR_HEIGHTS.length) * 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BiPreview() {
  return (
    <div className="flex h-full flex-col">
      <ChromeBar label="powerbi · resultado.pbix" />
      <div className="grid flex-1 grid-cols-2 gap-2.5 p-3.5">
        <div className="rounded-lg border border-ink-700 bg-white/[0.02] p-2">
          <div className="font-mono text-[9px] uppercase tracking-wide text-ink-500">EBITDA</div>
          <div className="mt-1 font-display text-base font-semibold text-ledger-glow">$482M</div>
        </div>
        <div className="rounded-lg border border-ink-700 bg-white/[0.02] p-2">
          <div className="font-mono text-[9px] uppercase tracking-wide text-ink-500">Margen</div>
          <div className="mt-1 font-display text-base font-semibold text-ink-50">32.7%</div>
        </div>
        <div className="col-span-2 flex flex-1 items-center gap-3 rounded-lg border border-ink-700 bg-white/[0.02] p-2.5">
          <svg viewBox="0 0 36 36" className="h-11 w-11 flex-shrink-0 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#26332b" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#6be39b"
              strokeWidth="4"
              strokeDasharray="97"
              strokeDashoffset="28"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex h-10 flex-1 items-end gap-1">
            {BI_BAR_HEIGHTS.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-ledger/60" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(47,158,99,0.1),transparent_70%)] p-4">
      <div className="relative flex h-full w-32 flex-col overflow-hidden rounded-[1.4rem] border border-ink-700 bg-ink-950 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between px-3 pt-2 font-mono text-[8px] text-ink-500">
          <span>9:41</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ledger-glow" />
        </div>
        <div
          className="relative mx-2 mt-2 flex-1 overflow-hidden rounded-lg border border-ink-800"
          style={{
            backgroundImage:
              "linear-gradient(rgba(138,154,143,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(138,154,143,0.08) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        >
          <span className="absolute left-1/2 top-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-ledger-glow/70" />
          <span className="absolute left-1/2 top-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ledger-glow" />
        </div>
        <div className="m-2 rounded-lg border border-ledger/40 bg-ledger/10 p-2">
          <div className="font-mono text-[7px] uppercase tracking-wide text-ledger-glow">Alerta sísmica</div>
          <div className="mt-0.5 font-mono text-[7px] text-ink-300">Magnitud 5.2 · 42km</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ variant }: { variant: "dashboard" | "mobile" | "bi" }) {
  return (
    <div className="h-56 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/70 shadow-xl shadow-black/30 backdrop-blur-sm">
      {variant === "dashboard" && <DashboardPreview />}
      {variant === "mobile" && <MobilePreview />}
      {variant === "bi" && <BiPreview />}
    </div>
  );
}
