"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type Line =
  | { type: "command"; text: string }
  | { type: "output"; text: string; tone?: "muted" | "success" };

const SCRIPT: Line[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "nicolas.palma — ingeniero de datos" },
  { type: "command", text: "sudo pacman -S python postgresql airflow docker" },
  { type: "output", text: ":: Resolviendo dependencias...", tone: "muted" },
  { type: "output", text: ":: Instalando decisiones-inteligentes-1.0... listo", tone: "success" },
  { type: "command", text: "./pipeline.sh --transform --load" },
  { type: "output", text: "✓ ETL ejecutado sin errores en 3.2s", tone: "success" },
  { type: "command", text: "echo $DISPONIBLE_PARA_DESAFIOS" },
  { type: "output", text: "true", tone: "success" },
];

const COMMAND_TYPE_MS = 42;
const OUTPUT_TYPE_MS = 16;
const AFTER_COMMAND_PAUSE_MS = 260;
const AFTER_OUTPUT_PAUSE_MS = 500;
const RESTART_PAUSE_MS = 3200;

export function TerminalHero() {
  const reducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const current = SCRIPT[lineIndex];

    if (!current) {
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, RESTART_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    if (charIndex < current.text.length) {
      const timeout = setTimeout(
        () => setCharIndex((c) => c + 1),
        current.type === "command" ? COMMAND_TYPE_MS : OUTPUT_TYPE_MS
      );
      return () => clearTimeout(timeout);
    }

    const pause = current.type === "command" ? AFTER_COMMAND_PAUSE_MS : AFTER_OUTPUT_PAUSE_MS;
    const timeout = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, pause);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, reducedMotion]);

  const completedLines = SCRIPT.slice(0, lineIndex);
  const activeLine = SCRIPT[lineIndex];
  const activeText = activeLine ? activeLine.text.slice(0, charIndex) : "";

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-ledger/70" />
        <span className="ml-2 font-mono text-[11px] text-ink-500">nicolas@arch:~</span>
      </div>
      <div className="min-h-[17rem] px-4 py-4 font-mono text-[13px] leading-relaxed">
        {(reducedMotion ? SCRIPT : completedLines).map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        {!reducedMotion && <ActiveLine line={activeLine} text={activeText} />}
      </div>
    </div>
  );
}

function TerminalLine({ line }: { line: Line }) {
  if (line.type === "command") {
    return (
      <p className="text-ink-50">
        <span className="text-ledger-glow">❯</span> {line.text}
      </p>
    );
  }
  return <p className={line.tone === "success" ? "text-ledger-glow" : "text-ink-500"}>{line.text}</p>;
}

function ActiveLine({ line, text }: { line: Line | undefined; text: string }) {
  if (!line) {
    return (
      <p className="text-ink-50">
        <span className="text-ledger-glow">❯</span> <Cursor />
      </p>
    );
  }
  if (line.type === "command") {
    return (
      <p className="text-ink-50">
        <span className="text-ledger-glow">❯</span> {text}
        <Cursor />
      </p>
    );
  }
  return (
    <p className={line.tone === "success" ? "text-ledger-glow" : "text-ink-500"}>
      {text}
      <Cursor />
    </p>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-ledger-glow"
    />
  );
}
