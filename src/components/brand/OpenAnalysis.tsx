import type { ReactNode } from "react";

/** Abre o formulário de análise inicial na etapa indicada (via public/js/analysis.js). */
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
    <button type="button" className={className} data-open-step={step}>
      {children}
    </button>
  );
}
