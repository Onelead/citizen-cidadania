"use client";

import { useEffect, useRef, useState } from "react";
import { formSteps } from "@/content/brand";
import { whatsappUrl } from "@/lib/site";

type Answers = Record<string, string>;

export function AnalysisForm({ city, message }: { city: string; message: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ cidade: city });

  useEffect(() => {
    const open = (e: Event) => {
      setStep(Number((e as CustomEvent).detail) || 0);
      dialog.current?.showModal();
    };
    window.addEventListener("open-analysis", open);
    return () => window.removeEventListener("open-analysis", open);
  }, []);

  const current = formSteps[step];
  const set = (key: string, value: string) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  const canContinue = (() => {
    if (current.kind === "text") return (answers[current.key] ?? "").trim().length > 0;
    if (current.kind === "choice") return Boolean(answers[current.key]);
    return (answers.nome ?? "").trim().length > 0;
  })();

  const next = () => canContinue && setStep((s) => Math.min(s + 1, formSteps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const send = () => {
    const line = (label: string, value?: string) =>
      value && value.trim() ? `• ${label}: ${value.trim()}` : null;
    const text = [
      message,
      "",
      "*Análise inicial da marca*",
      line("Marca", answers.marca),
      line("Área", answers.area),
      line("Atividade", answers.atividade),
      line("Fase da empresa", answers.fase),
      line("Uso do nome", answers.uso),
      line("Objetivo", answers.objetivo),
      line("Prazo", answers.prazo),
      "",
      line("Nome", answers.nome),
      line("Cidade", answers.cidade),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    dialog.current?.close();
  };

  const progress = ((step + 1) / formSteps.length) * 100;

  return (
    <dialog
      ref={dialog}
      className="bm-sheet"
      aria-labelledby="bm-sheet-title"
      onClick={(e) => e.target === dialog.current && dialog.current?.close()}
    >
      <form
        className="bm-sheet__panel"
        onSubmit={(e) => {
          e.preventDefault();
          if (current.kind === "contact") {
            if (canContinue) send();
          } else next();
        }}
      >
        <div className="bm-sheet__top">
          {step > 0 ? (
            <button type="button" className="bm-sheet__icon" onClick={back} aria-label="Voltar">
              ←
            </button>
          ) : (
            <span className="bm-sheet__icon" aria-hidden="true" />
          )}
          <div
            className="bm-sheet__progress"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={formSteps.length}
            aria-valuenow={step + 1}
            aria-label={`Etapa ${step + 1} de ${formSteps.length}`}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <button
            type="button"
            className="bm-sheet__icon"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="bm-sheet__body" key={step}>
          <span className="bm-eyebrow">{current.kicker}</span>
          <h2 id="bm-sheet-title" className="bm-sheet__title">
            {current.title}
          </h2>
          <p className="bm-sheet__subtitle">{current.subtitle}</p>

          {current.kind === "text" && (
            <label className="bm-field">
              <span>{current.label}</span>
              <input
                autoFocus
                type="text"
                value={answers[current.key] ?? ""}
                placeholder={current.placeholder}
                onChange={(e) => set(current.key, e.target.value)}
                maxLength={80}
              />
              {current.hint && <small>{current.hint}</small>}
            </label>
          )}

          {current.kind === "choice" && (
            <>
              <div className="bm-options" role="radiogroup" aria-label={current.title}>
                {current.options.map((o) => (
                  <button
                    key={o}
                    type="button"
                    role="radio"
                    aria-checked={answers[current.key] === o}
                    className="bm-option"
                    onClick={() => {
                      set(current.key, o);
                      if (!current.detail) setTimeout(() => setStep((s) => s + 1), 180);
                    }}
                  >
                    {o}
                  </button>
                ))}
              </div>
              {current.detail && (
                <label className="bm-field">
                  <span>{current.detail.label} <em>(opcional)</em></span>
                  <input
                    type="text"
                    value={answers[current.detail.key] ?? ""}
                    placeholder={current.detail.placeholder}
                    onChange={(e) => set(current.detail!.key, e.target.value)}
                    maxLength={140}
                  />
                </label>
              )}
            </>
          )}

          {current.kind === "contact" && (
            <div className="bm-contact">
              <label className="bm-field">
                <span>Seu nome</span>
                <input
                  autoFocus
                  type="text"
                  autoComplete="name"
                  value={answers.nome ?? ""}
                  placeholder="Como podemos te chamar?"
                  onChange={(e) => set("nome", e.target.value)}
                  maxLength={80}
                />
              </label>
              <label className="bm-field">
                <span>Cidade</span>
                <input
                  type="text"
                  autoComplete="address-level2"
                  value={answers.cidade ?? ""}
                  onChange={(e) => set("cidade", e.target.value)}
                  maxLength={60}
                />
              </label>
              <ul className="bm-summary" aria-label="Resumo das respostas">
                {[
                  ["Marca", answers.marca],
                  ["Área", answers.area],
                  ["Fase", answers.fase],
                  ["Uso do nome", answers.uso],
                  ["Objetivo", answers.objetivo],
                  ["Prazo", answers.prazo],
                ]
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <li key={k}>
                      <span>{k}</span>
                      <strong>{v}</strong>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bm-sheet__actions">
          {current.kind === "contact" ? (
            <button type="submit" className="bm-btn" disabled={!canContinue}>
              Enviar pelo WhatsApp
            </button>
          ) : (
            <button type="submit" className="bm-btn" disabled={!canContinue}>
              Continuar
            </button>
          )}
          <p className="bm-sheet__privacy">
            Suas respostas não ficam salvas no site: elas só vão na mensagem que você envia.
          </p>
        </div>
      </form>
    </dialog>
  );
}
