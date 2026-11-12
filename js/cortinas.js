/* =========================================================
   Cortinas entre as seções: cada seção é uma pasta do arquivo.
   A próxima sobe por cima da anterior (sticky), com a aba da
   pasta e a borda âmbar acesas; a de trás inclina pra trás,
   encolhe e escurece. Seções mais altas que a tela grudam pelo
   fim, então dá pra ler tudo antes da próxima cobrir. Entre uma
   e outra há uma pausa (margem), pra não pular de seção sem querer.
   ========================================================= */
(() => {
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const secs = [...document.querySelectorAll("main > section")];
  if (!secs.length) return;
  secs.forEach(s => s.classList.add("cortina"));
  const clamp = v => Math.min(1, Math.max(0, v));

  // marcadores fora do sticky: guardam a posição real de cada seção na página
  const marcas = secs.map(s => {
    const m = document.createElement("span");
    m.className = "marca-secao";
    m.setAttribute("aria-hidden", "true");
    s.before(m);
    return m;
  });

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
  let pedidoEm = 0;
  const pedir = () => {
    // se o quadro pedido não veio (aba em segundo plano), desenha direto
    if (pendente && performance.now() - pedidoEm > 250) { quadro(); return; }
    if (!pendente) { pendente = true; pedidoEm = performance.now(); requestAnimationFrame(quadro); }
  };

  /* ---------- links do menu: rolar até a posição real da seção ----------
     Com as seções grudadas (sticky), a anterior continua "no topo" pro navegador,
     então o link normal não voltava. Aqui a gente rola até o marcador dela. */
  function posicaoDe(s) {
    const i = secs.indexOf(s);
    if (i <= 0) return 0;
    const topo = document.querySelector(".topo");
    const margem = parseFloat(getComputedStyle(s).marginTop) || 0;
    const aba = 40;                                   // deixa a aba da pasta visível
    return marcas[i].getBoundingClientRect().top + scrollY + margem - (topo ? topo.offsetHeight : 0) - aba + 10;
  }
  // rolagem animada própria (a nativa às vezes para no meio com as seções grudadas)
  let animId = 0;
  function irPara(s, suave = true) {
    const destino = Math.max(0, posicaoDe(s)), inicio = scrollY, dist = destino - inicio;
    const id = ++animId;
    const html = document.documentElement, antes = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    if (!suave || reduz || Math.abs(dist) < 2) { scrollTo(0, destino); html.style.scrollBehavior = antes; return; }
    const dur = Math.min(1400, 500 + Math.abs(dist) * 0.12), t0 = performance.now();
    const ease = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    (function passo(agora) {
      if (id !== animId) return;
      const p = Math.min(1, (agora - t0) / dur);
      scrollTo(0, inicio + dist * ease(p));
      if (p < 1) requestAnimationFrame(passo); else html.style.scrollBehavior = antes;
    })(t0);
  }
  // se a pessoa rolar no meio da animação, ela para
  addEventListener("wheel", () => { animId++; }, { passive: true });
  addEventListener("touchstart", () => { animId++; }, { passive: true });
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const alvo = id && document.getElementById(id);
    if (!alvo || !secs.includes(alvo)) return;
    e.preventDefault();
    irPara(alvo);
    history.replaceState(null, "", "#" + id);
  });
  window.Cortinas = { irPara: id => { const s = document.getElementById(id); if (s && secs.includes(s)) irPara(s); } };

  addEventListener("scroll", pedir, { passive: true });
  addEventListener("resize", () => { medir(); pedir(); });
  // a altura das seções muda quando o conteúdo carrega (fotos, grade da linha do tempo)
  if ("ResizeObserver" in window) new ResizeObserver(() => { medir(); pedir(); }).observe(document.querySelector("main"));
  medir();
  quadro();
})();
