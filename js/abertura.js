/* =========================================================
   Portão + abertura: a sequência de partida elétrica do
   P-39Q-1. O mostrador de rotação e o osciloscópio seguem o
   mesmo relógio do som do motor.
   ========================================================= */
(() => {
  const $ = s => document.querySelector(s);
  const T = window.Trilha;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portao = $("#portao"), ab = $("#abertura"), painel = $("#ab-painel");
  const canvas = $("#ab-osc"), g = canvas.getContext("2d");
  const foto = $("#ab-foto"), caixa = $("#ab-caixa");
  const bSom = $("#ligar-som"), bMudo = $("#ligar-mudo");
  const fmt = v => new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(v);

  const LINHAS = [
    { t: 0.15, txt: "Bateria", estado: "Ligada" },
    { t: 0.6, txt: "Gerador", estado: "OK" },
    { t: 1.05, txt: "Magnetos", estado: "Ambos" },
    { t: 1.5, txt: "Partida", estado: "Contato" }
  ];
  const T_PARTIDA = 1.5, T_FOTO = 5.1, T_FIM = 6.3;
  painel.innerHTML = LINHAS.map(l => `<div class="ab-linha"><span class="led"></span><span>${l.txt}</span><span class="estado">${l.estado}</span></div>`).join("");
  caixa.style.transition = "opacity .4s";

  /* pré-carrega a foto de abertura antes de liberar as chaves */
  let liberado = false;
  function liberar() {
    if (liberado) return;
    liberado = true;
    bSom.disabled = false;
    bMudo.disabled = false;
    $("#carregando").textContent = "Sistemas prontos";
  }
  $("#carregando").textContent = "Verificando sistemas…";
  const im = new Image();
  im.onload = im.onerror = liberar;
  im.src = fotoUrl("p39-noite");
  setTimeout(liberar, 5000);

  /* osciloscópio da abertura: V12, então faíscas/s = rpm ÷ 10 */
  let fase = 0;
  function desenhar(hz) {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    g.strokeStyle = "rgba(255,255,255,.06)";
    for (let i = 1; i < 10; i++) { const x = Math.round(i * w / 10) + 0.5; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
    for (let j = 1; j < 6; j++) { const y = Math.round(j * h / 6) + 0.5; g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    const ciclos = hz * 0.02, base = h * 0.66;
    g.strokeStyle = "#ffa31a";
    g.lineWidth = 1.6;
    g.shadowColor = "rgba(255,163,26,.5)";
    g.shadowBlur = 6;
    g.beginPath();
    for (let x = 0; x <= w; x++) {
      const t = (x / w) * ciclos + fase, k = t - Math.floor(t);
      let y = base;
      if (hz > 0) {
        if (k < 0.012) y = base - (k / 0.012) * h * 0.52;
        else if (k < 0.03) y = base - h * 0.52 + ((k - 0.012) / 0.018) * h * 0.38;
        else if (k < 0.2) y = base - h * 0.14;
        else y = base - Math.exp(-(k - 0.2) * 16) * Math.sin((k - 0.2) * 80) * h * 0.1;
      }
      x ? g.lineTo(x, y) : g.moveTo(x, y);
    }
    g.stroke();
    g.shadowBlur = 0;
    fase += 0.01 + ciclos * 0.004;
  }

  let relogio = null, rodando = false, comSom = false;

  function iniciar(som) {
    comSom = som;
    portao.classList.add("saindo");
    setTimeout(() => { portao.hidden = true; }, 500);
    foto.style.backgroundImage = `url("${fotoUrl("p39-noite")}")`;
    ab.hidden = false;
    rodando = true;
    const ctx = som ? T.init() : null;
    if (ctx) {
      ctx.resume();
      const t0 = ctx.currentTime + 0.25;
      T.partida(t0 + T_PARTIDA);
      relogio = () => ctx.currentTime - t0;
    } else {
      comSom = false;
      const p0 = performance.now() + 250;
      relogio = () => (performance.now() - p0) / 1000;
    }
    if (reduz) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function quadro() {
    if (!rodando) return;
    const t = relogio();
    LINHAS.forEach((l, i) => painel.children[i].classList.toggle("on", t >= l.t));
    const rpm = T.rpmAbertura(t - T_PARTIDA);
    $("#ab-rpm").textContent = fmt(rpm);
    $("#ab-hz").textContent = fmt(rpm / 10);
    desenhar(rpm / 10);
    if (t >= T_FOTO && !foto.classList.contains("aberta")) {
      foto.classList.add("aberta");
      caixa.style.opacity = "0";
    }
    if (t >= T_FIM) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function terminar(pulou) {
    if (!rodando) return;
    rodando = false;
    if (pulou && comSom) T.pararPartida();
    ab.classList.add("saindo");
    window.Hangar.revelar();
    if (comSom) T.ligar();
    setTimeout(() => { ab.hidden = true; }, 750);
  }

  bSom.addEventListener("click", () => iniciar(true));
  bMudo.addEventListener("click", () => iniciar(false));
  $("#ab-pular").addEventListener("click", () => terminar(true));
  $("#pular-abertura").addEventListener("click", () => {
    portao.classList.add("saindo");
    setTimeout(() => { portao.hidden = true; }, 500);
    window.Hangar.revelar();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && rodando) terminar(true); });
})();
