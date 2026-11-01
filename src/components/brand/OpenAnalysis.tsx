"use client";

import type { ReactNode } from "react";

/** Abre o formulário de análise inicial na etapa indicada. */
export function OpenAnalysis({
  step = 0,
  className,
  children,
}: {
  step?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        window.dispatchEvent(new CustomEvent("open-analysis", { detail: step }))
      }
    >
      {children}
    </button>
  );
}
