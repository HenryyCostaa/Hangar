/* =========================================================
   Portão + abertura: a foto do P-39 em relevo de grade (2,5D).
   A foto vira uma malha quadriculada: cada célula tem o brilho
   da foto e sai da tela conforme esse brilho (claro = perto).
   Tudo no mesmo relógio da gravação do Allison V-1710 dando
   partida; quando o motor pega, o relevo salta e a malha leva
   uma onda de choque.
   ========================================================= */
(() => {
  const $ = s => document.querySelector(s);
  const T = window.Trilha;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portao = $("#portao"), ab = $("#abertura");
  const cv = $("#ab-grade"), g = cv.getContext("2d");
  const status = $("#ab-status"), leituras = $("#ab-leituras");
  const bSom = $("#ligar-som"), bMudo = $("#ligar-mudo");

  /* ---------- linha do tempo (medida na gravação) ---------- */
  const P = T.tempos;
  const T_CLIPE = 2.75;                      // o trecho da gravação começa aqui
  const T_PARTIDA = T_CLIPE + P.arranque;    // o arranque começa a girar
  const T_PEGA = T_CLIPE + P.pega;           // o motor pega
  const T_FINAL = T_PEGA + 2.4, T_FIM = T_FINAL + 2.0;
  const CHAVES = [
    { grande: "Bateria", t: 0.4, txt: "Bateria · 24 V no barramento" },
    { grande: "Combustível", t: 1.1, txt: "Bomba de combustível · 16 psi" },
    { grande: "Magnetos", t: 1.8, txt: "Magnetos · ambos" },
    { grande: "Primer", t: 2.4, txt: "Primer · 3 injeções" },
    { grande: "Partida", t: T_PARTIDA, txt: "Arranque girando · a tensão cai" }
  ];
  const elPasso = $("#ab-passo");
  function passo(pequeno, grande) {
    elPasso.innerHTML = `<small>${pequeno}</small>${grande}`;
    elPasso.classList.remove("troca"); void elPasso.offsetWidth; elPasso.classList.add("troca");
  }

  /* ---------- a foto vira relevo: claro = perto, escuro = longe ---------- */
  const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  const FOTO = "img/p39-noite-ab.jpg";
  const foto = new Image();
  const fotoPronta = new Promise(r => { foto.onload = () => r(true); foto.onerror = () => r(false); });
  foto.src = FOTO;

  let W = 0, H = 0, dpr = 1, CEL = 12, nx = 0, ny = 0, X0 = 0, Y0 = 0;
  let lum, prof, sorte, px, py;
  function montar() {
    dpr = Math.min(1.5, window.devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    if (!W || !H || !foto.naturalWidth) { W = 0; return; }
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    CEL = W < 760 ? 7 : Math.max(8, Math.min(12, Math.round(W / 150)));
    // a malha passa um pouco da tela pra aguentar a rotação
    const EW = W * 1.3, EH = H * 1.3;
    nx = Math.ceil(EW / CEL) + 1; ny = Math.ceil(EH / CEL) + 1;
    X0 = -((nx - 1) * CEL) / 2; Y0 = -((ny - 1) * CEL) / 2;
    // foto em "cover" na tela, deslocada um pouco pra direita como no retrato
    const amostra = (blur) => {
      const c = document.createElement("canvas"); c.width = nx; c.height = ny;
      const k = c.getContext("2d", { willReadFrequently: true });
      k.fillStyle = "#000"; k.fillRect(0, 0, nx, ny);
      if (blur) k.filter = `blur(${blur}px)`;
      const esc = (W < 760 ? W / foto.naturalWidth * 1.3 : Math.max(W / foto.naturalWidth, H / foto.naturalHeight) * 0.86) / CEL;
      const fw = foto.naturalWidth * esc, fh = foto.naturalHeight * esc;
      const desloc = W < 760 ? 0.1 : -0.02;
      k.drawImage(foto, nx / 2 - fw / 2 - fw * desloc, ny / 2 - fh * 0.56, fw, fh);
      const d = k.getImageData(0, 0, nx, ny).data, out = new Float32Array(nx * ny);
      for (let i = 0; i < out.length; i++) out[i] = Math.min(1, Math.pow(Math.max(0, (d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11) / 255 - 0.05) / 0.78, 0.85));
      return out;
    };
    lum = amostra(0);
    const borrada = amostra(1.6);
    prof = new Float32Array(nx * ny); sorte = new Float32Array(nx * ny);
    for (let i = 0; i < prof.length; i++) {
      // o avião (cinza médio) sai bem da tela; os clarões dos tiros saem ainda mais
      prof[i] = Math.min(1, Math.pow(borrada[i], 0.8));
      sorte[i] = Math.random();
    }
    px = new Float32Array(nx * ny); py = new Float32Array(nx * ny);
  }

  /* ---------- câmera e desenho ---------- */
  const ruido = (t, f) => Math.sin(t * f) * 0.6 + Math.sin(t * f * 2.7 + 1) * 0.4;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  window.addEventListener("pointermove", e => { mouse.x = e.clientX / innerWidth * 2 - 1; mouse.y = e.clientY / innerHeight * 2 - 1; });
  const NIV = 16;
  const lotes = Array.from({ length: NIV }, () => []);
  const ambar = [];

  function quadroGrade(t) {
    if (!W) { montar(); if (!W) return; }
    const girando = t >= T_PARTIDA, pegou = t >= T_PEGA, final = t >= T_FINAL;

    // profundidade: chapada até a partida, cresce com o arranque, salta quando pega
    let amp = 0;
    if (girando) amp = 0.35 * sm(T_PARTIDA, T_PEGA, t) + 0.025 * ruido(t, 19);
    if (pegou) { const u = t - T_PEGA; amp = 1 + 0.3 * Math.exp(-u * 3) * Math.cos(u * 10) - 0.65 * Math.exp(-u * 8); }
    const zMax = Math.min(W, H) * 0.24 * amp;

    // câmera quase de frente; gira devagar em volta e segue o mouse
    mouse.sx += (mouse.x - mouse.sx) * 0.06; mouse.sy += (mouse.y - mouse.sy) * 0.06;
    const orbita = sm(T_PARTIDA - 1, T_PEGA, t);
    const ga = (0.32 * Math.sin(t * 0.55 + 0.6) * orbita) + mouse.sx * 0.3 - 0.25 * sm(T_FINAL - 0.5, T_FIM, t);
    const gb = (0.12 * Math.sin(t * 0.4) * orbita) - mouse.sy * 0.18;
    const ca = Math.cos(ga), sa = Math.sin(ga), cb = Math.cos(gb), sb = Math.sin(gb);
    const D = Math.max(W, H) * 1.4, cx = W / 2, cy = H / 2;

    const uOnda = t - T_PEGA, onda = pegou && uOnda < 3;
    for (let j = 0, k = 0; j < ny; j++) {
      const Y = Y0 + j * CEL;
      for (let i = 0; i < nx; i++, k++) {
        const X = X0 + i * CEL;
        let Z = prof[k] * zMax;
        if (onda) {
          const dist = Math.hypot(X, Y), frente = uOnda * 1100;
          Z += 30 * Math.exp(-(((dist - frente) / 110) ** 2)) * Math.exp(-uOnda * 1.2) * Math.sin((dist - frente) / 26);
        }
        if (girando && !final && prof[k] > 0.05) Z += (pegou ? 1.4 : 0.7) * ruido(t + i * 0.37 + j * 0.11, 70);
        const x1 = X * ca + Z * sa, z1 = -X * sa + Z * ca;
        const y2 = Y * cb - z1 * sb, z2 = Y * sb + z1 * cb;
        const s = D / Math.max(60, D - z2);
        px[k] = cx + x1 * s; py[k] = cy + y2 * s;
      }
    }

    const tremor = girando && !final ? (pegou ? 2.4 : 0.9) : 0;
    g.setTransform(dpr, 0, 0, dpr, tremor * ruido(t, 61) * dpr, tremor * 0.6 * ruido(t, 53) * dpr);
    g.fillStyle = "#050506";
    g.fillRect(-10, -10, W + 20, H + 20);

    // a grade inteira
    const aparece = sm(0, 1.2, t);
    g.lineWidth = 1;
    g.strokeStyle = `rgba(232,230,225,${(0.17 * aparece).toFixed(3)})`;
    g.beginPath();
    for (let j = 0; j < ny; j++) { let k = j * nx; g.moveTo(px[k], py[k]); for (let i = 1; i < nx; i++) { k++; g.lineTo(px[k], py[k]); } }
    for (let i = 0; i < nx; i++) { let k = i; g.moveTo(px[k], py[k]); for (let j = 1; j < ny; j++) { k += nx; g.lineTo(px[k], py[k]); } }
    g.stroke();

    // as células da foto acendem aos poucos (com as chaves) e piscam até o motor pegar
    const acende = sm(0.3, T_PARTIDA, t);
    const q = Math.floor(t * 12);
    for (const l of lotes) l.length = 0;
    ambar.length = 0;
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const k = j * nx + i, v = lum[k];
      if (v < 0.07 || sorte[k] > acende) continue;
      if (!pegou && ((k * 2654435761 + q * 40503) >>> 0) % 23 === 0) continue;
      if (v > 0.985) { ambar.push(k); continue; }
      lotes[Math.min(NIV - 1, Math.floor(v / 0.985 * NIV))].push(k);
    }
    const quad = k => { g.moveTo(px[k], py[k]); g.lineTo(px[k + 1], py[k + 1]); g.lineTo(px[k + nx + 1], py[k + nx + 1]); g.lineTo(px[k + nx], py[k + nx]); g.closePath(); };
    const brilho = pegou ? 1 : 0.55 + 0.3 * sm(T_PARTIDA, T_PEGA, t);
    for (let n = 0; n < NIV; n++) {
      if (!lotes[n].length) continue;
      const b = (n + 0.5) / NIV;
      g.fillStyle = `rgba(236,233,226,${Math.min(1, (0.05 + 0.95 * b) * brilho).toFixed(3)})`;
      g.beginPath(); lotes[n].forEach(quad); g.fill();
    }
    // os clarões dos tiros e os traçantes em âmbar
    if (ambar.length) {
      g.fillStyle = `rgba(255,170,40,${(0.95 * brilho).toFixed(3)})`;
      g.shadowColor = "rgba(255,163,26,.9)"; g.shadowBlur = pegou ? 14 : 6;
      g.beginPath(); ambar.forEach(quad); g.fill();
      g.shadowBlur = 0;
    }
    // vãos escuros entre as células, como no retrato quadriculado
    g.strokeStyle = "rgba(5,5,6,.6)";
    g.lineWidth = 1.1;
    g.beginPath();
    for (const l of lotes) l.forEach(quad);
    g.stroke();

    // clarão quando pega
    if (pegou && uOnda < 0.5) { g.fillStyle = `rgba(255,236,200,${(0.3 * (1 - uOnda / 0.5)).toFixed(3)})`; g.fillRect(-10, -10, W + 20, H + 20); }
  }

  /* ---------- leituras no rodapé ---------- */
  const lido = { volts: 0, rpm: 0, oleo: 0, comb: 0, adm: 29.9 };
  function atualizarLeituras(t, dt) {
    const bat = t >= CHAVES[0].t, girando = t >= T_PARTIDA, pegou = t >= T_PEGA;
    const rpm = T.rpmAbertura(t - T_CLIPE);
    const alvo = {
      volts: !bat ? 0 : pegou ? 28 : girando ? 18.5 + ruido(t, 9) * 0.7 : 24,
      rpm,
      oleo: pegou ? Math.min(70, (t - T_PEGA) * 60) : girando ? Math.min(12, (t - T_PARTIDA) * 2.5) : 0,
      comb: t >= CHAVES[1].t ? 16 : 0,
      adm: pegou ? 21 + ruido(t, 11) * 0.6 : girando ? 28.5 : 29.9
    };
    for (const k in lido) lido[k] += (alvo[k] - lido[k]) * Math.min(1, dt * (k === "rpm" ? 9 : 6));
    const f = (v, c) => v.toFixed(c).replace(".", ",");
    leituras.innerHTML =
      `<span class="${girando && !pegou ? "quente" : ""}">Volts <b>${f(lido.volts, 1)}</b></span>` +
      `<span class="${pegou ? "quente" : ""}">RPM <b>${String(Math.round(lido.rpm)).padStart(4, "0")}</b></span>` +
      `<span>Óleo <b>${f(lido.oleo, 0)} psi</b></span>` +
      `<span>Comb. <b>${f(lido.comb, 0)} psi</b></span>` +
      `<span>Admissão <b>${f(lido.adm, 1)} pol Hg</b></span>` +
      `<span>Ignição <b>${f(rpm / 10, 0)} faíscas/s</b></span>`;
  }

  /* ---------- pré-carrega o áudio antes de liberar as chaves do portão ---------- */
  let liberado = false;
  function liberar() {
    if (liberado) return;
    liberado = true;
    bSom.disabled = false;
    bMudo.disabled = false;
    $("#carregando").textContent = "Sistemas prontos";
  }
  $("#carregando").textContent = "Verificando sistemas…";
  Promise.all([fotoPronta, Promise.resolve(T.preparar()).catch(() => {})]).then(liberar, liberar);
  setTimeout(liberar, 6000);

  /* ---------- quadro a quadro ---------- */
  let relogio = null, rodando = false, comSom = false, ultimo = 0, ultimaChave = -1;

  function iniciar(som) {
    comSom = som;
    portao.classList.add("saindo");
    setTimeout(() => { portao.hidden = true; }, 500);
    ab.hidden = false;
    montar();
    rodando = true;
    const ctx = som ? T.init() : null;
    if (ctx) {
      ctx.resume();
      const t0 = ctx.currentTime + 0.25;
      T.partida(t0 + T_CLIPE);
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
    const t = Math.max(0, relogio()), dt = Math.min(0.05, Math.max(0, t - ultimo));
    ultimo = t;
    CHAVES.forEach((c, i) => {
      if (t >= c.t && i > ultimaChave) {
        ultimaChave = i;
        status.textContent = c.txt;
        passo(`0${i + 1} / 05 · P-39Q-1`, c.grande);
      }
    });
    if (t >= T_PEGA && ultimaChave < 5) {
      ultimaChave = 5;
      status.textContent = "Pegou · 12 cilindros, mais de 100 faíscas por segundo";
      passo("Allison V-1710-85", "Pegou");
    }
    if (t >= T_FINAL) ab.classList.add("final");
    quadroGrade(t, dt);
    atualizarLeituras(t, dt);
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
    setTimeout(() => { ab.hidden = true; }, 850);
  }

  window.addEventListener("resize", () => { if (rodando) montar(); });
  bSom.addEventListener("click", () => iniciar(true));
  bMudo.addEventListener("click", () => iniciar(false));
  $("#ab-pular").addEventListener("click", () => terminar(true));
  $("#pular-abertura").addEventListener("click", () => {
    portao.classList.add("saindo");
    setTimeout(() => { portao.hidden = true; }, 500);
    window.Hangar.revelar();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && rodando) terminar(true); });

  // pra testar sem esperar: ?quadro=8.5 desenha esse instante parado
  const teste = new URLSearchParams(location.search).get("quadro");
  if (teste !== null) {
    portao.hidden = true; ab.hidden = false;
    fotoPronta.then(() => {
      montar();
      const t = parseFloat(teste) || 0;
      if (t >= T_FINAL) ab.classList.add("final");
      quadroGrade(t);
      atualizarLeituras(t, 1);
    });
  }
})();
