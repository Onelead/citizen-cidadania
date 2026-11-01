// Formulário de análise inicial (Registro de Marca): etapas e envio ao WhatsApp.
// JavaScript puro, sem dependências. Nada é salvo: as respostas só vão na mensagem.
(function () {
  var d = document.getElementById("bm-sheet");
  if (!d || typeof d.showModal !== "function") return;

  var form = d.querySelector("form");
  var steps = Array.prototype.slice.call(d.querySelectorAll("[data-step]"));
  var bar = d.querySelector(".bm-sheet__progress span");
  var progress = d.querySelector(".bm-sheet__progress");
  var back = d.querySelector("[data-back]");
  var submit = d.querySelector("[data-submit]");
  var answers = { cidade: d.dataset.city || "" };
  var i = 0;

  var LABELS = { area: "Área", fase: "Fase", uso: "Uso do nome", objetivo: "Objetivo", prazo: "Prazo" };

  function filled(v) { return (v || "").trim().length > 0; }

  function valid() {
    var s = steps[i];
    if (s.dataset.kind === "text") return filled(answers[s.dataset.key]);
    if (s.dataset.kind === "choice") return !!answers[s.dataset.key];
    return filled(answers.nome);
  }

  function summary() {
    var ul = d.querySelector(".bm-summary");
    if (!ul) return;
    ul.textContent = "";
    var rows = [["Marca", answers.marca]];
    Object.keys(LABELS).forEach(function (k) { rows.push([LABELS[k], answers[k]]); });
    rows.forEach(function (r) {
      if (!filled(r[1])) return;
      var li = document.createElement("li");
      var a = document.createElement("span");
      var b = document.createElement("strong");
      a.textContent = r[0];
      b.textContent = r[1];
      li.appendChild(a);
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  function render() {
    steps.forEach(function (s, n) { s.hidden = n !== i; });
    bar.style.width = ((i + 1) / steps.length) * 100 + "%";
    progress.setAttribute("aria-valuenow", String(i + 1));
    d.setAttribute("aria-labelledby", "bm-sheet-title-" + i);
    back.style.visibility = i > 0 ? "visible" : "hidden";
    var last = steps[i].dataset.kind === "contact";
    submit.textContent = last ? "Enviar pelo WhatsApp" : "Continuar";
    submit.disabled = !valid();
    if (last) summary();
    var field = steps[i].querySelector("input");
    if (field) setTimeout(function () { field.focus(); }, 30);
  }

  function next() {
    if (!valid()) return;
    if (i < steps.length - 1) { i += 1; render(); }
  }

  function send() {
    var line = function (label, v) { return filled(v) ? "• " + label + ": " + v.trim() : null; };
    var text = [
      d.dataset.message,
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
    ].filter(function (l) { return l !== null; }).join("\n");
    window.open("https://wa.me/" + d.dataset.phone + "?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
    d.close();
  }

  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-open-step]");
    if (!opener) return;
    i = Number(opener.getAttribute("data-open-step")) || 0;
    render();
    d.showModal();
  });

  d.addEventListener("click", function (e) {
    if (e.target === d) { d.close(); return; }
    if (e.target.closest("[data-close]")) { d.close(); return; }
    if (e.target.closest("[data-back]")) { i = Math.max(0, i - 1); render(); return; }
    var opt = e.target.closest("[data-value]");
    if (opt) {
      var s = steps[i];
      answers[s.dataset.key] = opt.getAttribute("data-value");
      s.querySelectorAll("[data-value]").forEach(function (b) { b.setAttribute("aria-checked", String(b === opt)); });
      submit.disabled = !valid();
      if (!s.querySelector("input")) setTimeout(next, 180);
    }
  });

  d.addEventListener("input", function (e) {
    if (e.target.name) answers[e.target.name] = e.target.value;
    submit.disabled = !valid();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (steps[i].dataset.kind === "contact") { if (valid()) send(); }
    else next();
  });
})();
