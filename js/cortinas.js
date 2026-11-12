/* =========================================================
   Cortinas entre as seções: cada seção é uma pasta do arquivo.
   A próxima sobe por cima da anterior (sticky), com a aba da
   pasta e a borda âmbar acesas; a de trás inclina pra trás,
   encolhe e escurece. Seções mais altas que a tela grudam pelo
   fim, então dá pra ler tudo antes da próxima cobrir.
   ========================================================= */
(() => {
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const secs = [...document.querySelectorAll("main > section")];
  if (!secs.length) return;
  secs.forEach(s => s.classList.add("cortina"));
  const clamp = v => Math.min(1, Math.max(0, v));

  function medir() {
    const H = innerHeight;
    secs.forEach(s => { s.style.top = `${Math.min(0, H - s.offsetHeight)}px`; });
  }

  let pendente = false;
  function quadro() {
    pendente = false;
    const H = innerHeight;
    const rects = secs.map(s => s.getBoundingClientRect());
    secs.forEach((s, i) => {
      // entrada desta seção (0 quando o topo dela aparece embaixo, 1 quando chega em cima)
      const kIn = clamp((H - rects[i].top) / (H * 0.85));
      s.style.setProperty("--k", kIn.toFixed(3));
      // quanto a próxima já cobriu esta
      const prox = rects[i + 1];
      const k = prox ? clamp(1 - prox.top / H) : 0;
      if (reduz) { s.style.setProperty("--escuro", (k * 0.6).toFixed(3)); return; }
      s.style.transform = k > 0.002
        ? `perspective(1400px) rotateX(${(k * 8).toFixed(2)}deg) scale(${(1 - k * 0.1).toFixed(4)}) translateY(${(-k * 40).toFixed(1)}px)`
        : "";
      s.style.setProperty("--escuro", (k * 0.6).toFixed(3));
    });
  }
  const pedir = () => { if (!pendente) { pendente = true; requestAnimationFrame(quadro); } };

  addEventListener("scroll", pedir, { passive: true });
  addEventListener("resize", () => { medir(); pedir(); });
  // a altura das seções muda quando o conteúdo carrega (fotos, grade da linha do tempo)
  if ("ResizeObserver" in window) new ResizeObserver(() => { medir(); pedir(); }).observe(document.querySelector("main"));
  medir();
  quadro();
})();
