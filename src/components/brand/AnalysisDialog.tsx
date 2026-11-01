import { formSteps } from "@/content/brand";

/**
 * Formulário de análise inicial renderizado como HTML estático.
 * A navegação entre etapas e o envio ao WhatsApp ficam em public/js/analysis.js,
 * sem React no navegador. Nada é salvo: as respostas só vão na mensagem.
 */
export function AnalysisDialog({
  city,
  message,
  phone,
}: {
  city: string;
  message: string;
  phone: string;
}) {
  return (
    <>
      <dialog
        id="bm-sheet"
        className="bm-sheet"
        aria-labelledby="bm-sheet-title-0"
        data-city={city}
        data-message={message}
        data-phone={phone}
      >
        <form className="bm-sheet__panel" noValidate>
          <div className="bm-sheet__top">
            <button type="button" className="bm-sheet__icon" data-back aria-label="Voltar">
              ←
            </button>
            <div
              className="bm-sheet__progress"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={formSteps.length}
              aria-valuenow={1}
              aria-label="Progresso da análise"
            >
              <span />
            </div>
            <button type="button" className="bm-sheet__icon" data-close aria-label="Fechar">
              ×
            </button>
          </div>

          {formSteps.map((s, i) => (
            <section
              key={s.key}
              className="bm-sheet__body"
              data-step={i}
              data-kind={s.kind}
              data-key={s.key}
              hidden={i > 0}
            >
              <span className="bm-eyebrow">{s.kicker}</span>
              <h2 id={`bm-sheet-title-${i}`} className="bm-sheet__title">
                {s.title}
              </h2>
              <p className="bm-sheet__subtitle">{s.subtitle}</p>

              {s.kind === "text" && (
                <label className="bm-field">
                  <span>{s.label}</span>
                  <input type="text" name={s.key} placeholder={s.placeholder} maxLength={80} />
                  {s.hint && <small>{s.hint}</small>}
                </label>
              )}

              {s.kind === "choice" && (
                <>
                  <div className="bm-options" role="radiogroup" aria-label={s.title}>
                    {s.options.map((o) => (
                      <button
                        key={o}
                        type="button"
                        role="radio"
                        aria-checked="false"
                        className="bm-option"
                        data-value={o}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                  {s.detail && (
                    <label className="bm-field">
                      <span>
                        {s.detail.label} <em>(opcional)</em>
                      </span>
                      <input
                        type="text"
                        name={s.detail.key}
                        placeholder={s.detail.placeholder}
                        maxLength={140}
                      />
                    </label>
                  )}
                </>
              )}

              {s.kind === "contact" && (
                <div className="bm-contact">
                  <label className="bm-field">
                    <span>Seu nome</span>
                    <input
                      type="text"
                      name="nome"
                      autoComplete="name"
                      placeholder="Como podemos te chamar?"
                      maxLength={80}
                    />
                  </label>
                  <label className="bm-field">
                    <span>Cidade</span>
                    <input
                      type="text"
                      name="cidade"
                      autoComplete="address-level2"
                      defaultValue={city}
                      maxLength={60}
                    />
                  </label>
                  <ul className="bm-summary" aria-label="Resumo das respostas" />
                </div>
              )}
            </section>
          ))}

          <div className="bm-sheet__actions">
            <button type="submit" className="bm-btn" data-submit disabled>
              Continuar
            </button>
            <p className="bm-sheet__privacy">
              Suas respostas não ficam salvas no site: elas só vão na mensagem que você envia.
            </p>
          </div>
        </form>
      </dialog>
      <script src="/js/analysis.js" defer />
    </>
  );
}
