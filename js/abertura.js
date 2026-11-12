/* =========================================================
   Portão + abertura: o P-39Q-1 em relevo de grade.
   Uma malha quadriculada cobre a tela e o Airacobra (visto
   de cima) sobe dela como relevo, no mesmo relógio da gravação
   do Allison V-1710 dando partida. Quando o motor pega, a malha
   leva uma onda de choque e a hélice dispara.
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

  /* ---------- o P-39 visto de cima, como mapa de altura (metros) ----------
     x: do nariz (0) à cauda (9,2 m) · y: para o lado (meia envergadura 5,2 m) */
  const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  function meiaLarg(x) {
    if (x < 0 || x > 9.2) return 0;
    if (x < 0.55) return 0.36 * Math.sqrt(x / 0.55);          // cubo da hélice (com o canhão de 37 mm)
    if (x < 1.0) return 0.36 + (x - 0.55) / 0.45 * 0.12;
    if (x < 3.4) return 0.48 + (x - 1.0) / 2.4 * 0.12;
    if (x < 5.0) return 0.6;                                  // motor atrás do piloto
    return 0.6 * (1 - (x - 5.0) / 4.2 * 0.78);
  }
  function altura(x, y) {
    const ay = Math.abs(y);
    let h = 0;
    const w = meiaLarg(x);
    const topo = (xx, yy) => { const ww = meiaLarg(xx); return ww && yy < ww ? ww * 1.15 * Math.sqrt(1 - (yy / ww) ** 2) : 0; };
    if (w && ay < w) h = topo(x, ay);
    // cabine (a da porta de carro)
    const cx = (x - 3.45) / 0.85, cy = ay / 0.34, q = 1 - cx * cx - cy * cy;
    if (q > 0) h = Math.max(h, topo(x, ay) + 0.42 * Math.sqrt(q));
    // tomada de ar do motor, atrás da cabine
    if (x > 4.3 && x < 5.6 && ay < 0.17) h = Math.max(h, topo(x, ay) + 0.24 * sm(4.3, 4.7, x) * (1 - sm(5.2, 5.6, x)) * (1 - ay / 0.17));
    // asa baixa, trapezoidal, com diedro
    if (ay < 5.2) {
      const k = ay / 5.2, le = 3.3 + 0.65 * k, te = 5.6 - 0.55 * k;
      if (x > le && x < te) {
        const t = (x - le) / (te - le);
        let ok = true;
        if (ay > 4.55) ok = ((ay - 4.55) / 0.65) ** 2 + ((t - 0.42) / 0.58) ** 2 < 1;
        if (ok) h = Math.max(h, 0.05 + ay * 0.05 + (te - le) * 0.42 * Math.sqrt(t) * (1 - t));
      }
    }
    // profundor
    if (ay < 1.95) {
      const k = ay / 1.95, le = 7.95 + 0.4 * k, te = 9.05 - 0.1 * k;
      if (x > le && x < te) { const t = (x - le) / (te - le); h = Math.max(h, 0.12 + (te - le) * 0.3 * Math.sqrt(t) * (1 - t)); }
    }
    // deriva: uma crista fina no eixo
    if (ay < 0.13 && x > 7.6 && x < 9.25) {
      const perfil = sm(7.6, 8.5, x) * (1 - 0.3 * sm(9.0, 9.25, x)) * 1.25;
      h = Math.max(h, topo(Math.min(x, 9.19), ay) + perfil * (1 - ay / 0.13));
    }
    return h;
  }

  /* ---------- malha ---------- */
  let W = 0, H = 0, dpr = 1, S = 40, CEL = 16, nx = 0, ny = 0, X0 = 0, Y0 = 0;
  let h0, xm, px, py, pz, borda, poeira = [];
  function montar() {
    dpr = Math.min(1.5, window.devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    if (!W || !H) return;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    S = Math.min(H * 0.78 / 9.4, W * (W < 760 ? 0.86 : 0.58) / 10.4);  // pixels por metro
    CEL = Math.max(11, Math.min(17, Math.round(S * 0.26)));
    X0 = -1.9 * W / 2; Y0 = -3.4 * H / 2;
    nx = Math.ceil(3.8 * W / 2 / CEL) + 1;
    ny = Math.ceil(4.8 * H / 2 / CEL) + 1;
    const N = nx * ny;
    h0 = new Float32Array(N); xm = new Float32Array(N);
    px = new Float32Array(N); py = new Float32Array(N); pz = new Float32Array(N);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const X = X0 + i * CEL, Y = Y0 + j * CEL;
      const xx = Y / S + 4.6, yy = X / S;
      h0[j * nx + i] = altura(xx, yy);
      xm[j * nx + i] = xx;
    }
    // pixels soltos em volta do avião (textura digital)
    poeira = [];
    const marca = new Uint8Array(N);
    for (let j = 3; j < ny - 4; j++) for (let i = 3; i < nx - 4; i++) {
      if (h0[j * nx + i] <= 0.01) continue;
      for (let b = -4; b <= 4; b++) for (let a = -4; a <= 4; a++) marca[(j + b) * nx + i + a] = 1;
    }
    for (let k = 0; k < N - nx - 1; k++) if (marca[k] && h0[k] <= 0.01 && h0[k + 1] <= 0.01 && h0[k + nx] <= 0.01 && h0[k + nx + 1] <= 0.01 && Math.random() < 0.3) poeira.push(k);
    // células do contorno (pra pintar em âmbar)
    borda = new Uint8Array(N);
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const k = j * nx + i, a = h0[k] > 0.01, b = h0[k + 1] > 0.01, c = h0[k + nx] > 0.01, d = h0[k + nx + 1] > 0.01;
      if ((a || b || c || d) && !(a && b && c && d)) borda[k] = 1;
    }
  }

  /* ---------- câmera e desenho ---------- */
  const ruido = (t, f) => Math.sin(t * f) * 0.6 + Math.sin(t * f * 2.7 + 1) * 0.4;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  window.addEventListener("pointermove", e => { mouse.x = e.clientX / innerWidth * 2 - 1; mouse.y = e.clientY / innerHeight * 2 - 1; });
  let anguloHelice = 0;

  function quadroGrade(t, dt) {
    if (!W) { montar(); if (!W) return; }
    const girando = t >= T_PARTIDA, pegou = t >= T_PEGA, final = t >= T_FINAL;
    const rpm = T.rpmAbertura(t - T_CLIPE);

    // altura do relevo: plano até a partida, sobe com o arranque, salta quando pega
    let amp = 0;
    if (girando) amp = 0.32 * sm(T_PARTIDA, T_PEGA, t) + 0.02 * ruido(t, 19);
    if (pegou) { const u = t - T_PEGA; amp = 1 + 0.32 * Math.exp(-u * 3.2) * Math.cos(u * 11) - 0.68 * Math.exp(-u * 9); }
    // câmera: de cima no começo, inclina com o arranque, gira no final
    mouse.sx += (mouse.x - mouse.sx) * 0.05; mouse.sy += (mouse.y - mouse.sy) * 0.05;
    let incl = 0.06 + 0.5 * sm(T_PARTIDA - 0.5, T_PEGA + 0.4, t) + 0.18 * sm(T_FINAL - 0.6, T_FIM, t) + mouse.sy * 0.07;
    let giro = 0.06 * Math.sin(t * 0.5) - 0.32 * sm(T_FINAL - 0.6, T_FIM + 0.5, t);
    const lado = mouse.sx * 0.16;
    const D = Math.max(W, H) * 1.15;
    const ci = Math.cos(incl), si = Math.sin(incl), cg = Math.cos(giro), sg = Math.sin(giro), cl = Math.cos(lado), sl = Math.sin(lado);
    const cx = W / 2, cy = H * 0.5;
    const zEsc = S * 1.75 * amp;

    // onda de choque saindo do nariz quando o motor pega
    const uOnda = t - T_PEGA, onda = pegou && uOnda < 3.5;
    const nY = (0 - 4.6) * S;
    const N = nx * ny;
    for (let j = 0, k = 0; j < ny; j++) {
      const Y = Y0 + j * CEL;
      for (let i = 0; i < nx; i++, k++) {
        const X = X0 + i * CEL;
        let Z = h0[k] * zEsc;
        if (onda) {
          const dist = Math.hypot(X, Y - nY);
          const frente = uOnda * 900;
          const env = Math.exp(-(((dist - frente) / 120) ** 2)) * Math.exp(-uOnda * 1.1);
          Z += env * 26 * Math.sin((dist - frente) / 28);
        }
        if (girando && !final) Z += (pegou ? 0.9 : 0.5) * ruido(t + i * 0.37 + j * 0.11, 70) * (h0[k] > 0.01 ? 1 : 0.25);
        // gira na mesa, inclina, e um pouco de lado com o mouse
        const X1 = X * cg - Y * sg, Y1 = X * sg + Y * cg;
        const y2 = Y1 * ci - Z * si, z2 = Z * ci + Y1 * si;
        const x3 = X1 * cl + z2 * sl, z3 = -X1 * sl + z2 * cl;
        const s = D / Math.max(80, D - z3);
        px[k] = cx + x3 * s; py[k] = cy + y2 * s; pz[k] = s;
      }
    }

    // tremor
    const tremor = girando && !final ? (pegou ? 2.2 : 0.8) : 0;
    const ox = tremor * ruido(t, 61), oy = tremor * 0.6 * ruido(t, 53);
    g.setTransform(dpr, 0, 0, dpr, ox * dpr, oy * dpr);
    g.fillStyle = "#050506";
    g.fillRect(-10, -10, W + 20, H + 20);

    // malha de fundo
    const aparece = sm(0, 1.4, t);
    g.lineWidth = 1;
    g.strokeStyle = `rgba(232,230,225,${(0.2 * aparece).toFixed(3)})`;
    g.beginPath();
    for (let j = 0; j < ny; j++) { let k = j * nx; g.moveTo(px[k], py[k]); for (let i = 1; i < nx; i++) { k++; g.lineTo(px[k], py[k]); } }
    for (let i = 0; i < nx; i++) { let k = i; g.moveTo(px[k], py[k]); for (let j = 1; j < ny; j++) { k += nx; g.lineTo(px[k], py[k]); } }
    g.stroke();

    // o avião: células preenchidas com sombreamento, varridas do nariz à cauda
    const varre = -0.6 + (t - 0.35) / 2.3 * 10.6;
    const L = [-0.42, -0.58, 0.7];
    const NIV = 12, caminhos = Array.from({ length: NIV }, () => []);
    const contorno = [];
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const k = j * nx + i;
      const hm = Math.max(h0[k], h0[k + 1], h0[k + nx], h0[k + nx + 1]);
      if (hm <= 0.01 || xm[k] > varre) continue;
      if (borda[k]) { contorno.push(k); continue; }
      const dx = (h0[k + 1] + h0[k + nx + 1] - h0[k] - h0[k + nx]) * 0.5 * S / CEL * (0.35 + amp);
      const dy = (h0[k + nx] + h0[k + nx + 1] - h0[k] - h0[k + 1]) * 0.5 * S / CEL * (0.35 + amp);
      const len = Math.hypot(dx, dy, 1);
      const b = Math.max(0, (-dx * L[0] - dy * L[1] + L[2]) / len);
      caminhos[Math.min(NIV - 1, Math.floor(b * NIV))].push(k);
    }
    const quad = k => { g.moveTo(px[k], py[k]); g.lineTo(px[k + 1], py[k + 1]); g.lineTo(px[k + nx + 1], py[k + nx + 1]); g.lineTo(px[k + nx], py[k + nx]); g.closePath(); };
    const brilho = pegou ? 1 : 0.55 + 0.45 * sm(T_PARTIDA, T_PEGA, t);
    for (let n = 0; n < NIV; n++) {
      if (!caminhos[n].length) continue;
      const b = n / (NIV - 1);
      g.fillStyle = `rgba(232,230,225,${((0.05 + 0.78 * b * b) * brilho).toFixed(3)})`;
      g.beginPath(); caminhos[n].forEach(quad); g.fill();
    }
    // pixels soltos, piscando
    if (t > 0.6) {
      const q = Math.floor(t * 9);
      g.fillStyle = `rgba(232,230,225,${(0.16 * sm(0.6, 1.6, t)).toFixed(3)})`;
      g.beginPath();
      for (let n = 0; n < poeira.length; n++) { const k = poeira[n]; if (((k * 2654435761 + q * 40503) >>> 0) % 7 < 2 && xm[k] < varre + 1) quad(k); }
      g.fill();
    }
    // a malha por cima do avião, mais forte
    g.strokeStyle = `rgba(5,5,6,${(0.55 * brilho).toFixed(3)})`;
    g.lineWidth = 1.2;
    g.beginPath();
    for (const lista of caminhos) lista.forEach(quad);
    g.stroke();
    // contorno em âmbar
    if (contorno.length) {
      g.fillStyle = `rgba(255,163,26,${(0.85 * brilho).toFixed(3)})`;
      g.beginPath(); contorno.forEach(quad); g.fill();
    }
    // linha de varredura
    if (varre < 10.2 && t > 0.35) {
      const jv = Math.round(((varre - 4.6) * S - Y0) / CEL);
      if (jv > 0 && jv < ny) {
        g.strokeStyle = "rgba(255,163,26,.8)"; g.lineWidth = 1.5;
        g.shadowColor = "rgba(255,163,26,.8)"; g.shadowBlur = 10;
        g.beginPath(); let k = jv * nx; g.moveTo(px[k], py[k]); for (let i = 1; i < nx; i++) { k++; g.lineTo(px[k], py[k]); } g.stroke();
        g.shadowBlur = 0;
      }
    }

    // hélice de 3 pás, girando no plano perpendicular ao eixo
    anguloHelice += rpm / 60 * Math.PI * 2 * dt;
    if (t > 2.2) {
      const R = 1.57 * S, xh = (0.18 - 4.6) * S, zc = 0;
      const proj = (X, Y, Z) => {
        const X1 = X * cg - Y * sg, Y1 = X * sg + Y * cg;
        const y2 = Y1 * ci - Z * si, z2 = Z * ci + Y1 * si;
        const x3 = X1 * cl + z2 * sl, z3 = -X1 * sl + z2 * cl;
        const s = D / Math.max(80, D - z3);
        return [cx + x3 * s, cy + y2 * s];
      };
      const vis = sm(2.2, 2.8, t);
      if (rpm > 350) {
        g.strokeStyle = `rgba(255,163,26,${(0.28 * vis * sm(350, 900, rpm)).toFixed(3)})`;
        g.lineWidth = 1.2;
        g.beginPath();
        for (let a = 0; a <= 48; a++) { const th = a / 48 * Math.PI * 2; const [u, v] = proj(R * Math.cos(th), xh, zc + R * Math.sin(th) * Math.max(0.1, amp)); a ? g.lineTo(u, v) : g.moveTo(u, v); }
        g.stroke();
      }
      const borrao = rpm > 600 ? 0.25 : 1;
      g.strokeStyle = `rgba(255,190,90,${(0.95 * vis * borrao).toFixed(3)})`;
      g.lineWidth = 3;
      g.lineCap = "round";
      g.beginPath();
      for (let p = 0; p < 3; p++) {
        const th = anguloHelice + p * Math.PI * 2 / 3;
        const [u0, v0] = proj(0, xh, zc), [u1, v1] = proj(R * Math.cos(th), xh, zc + R * Math.sin(th) * Math.max(0.1, amp));
        g.moveTo(u0, v0); g.lineTo(u1, v1);
      }
      g.stroke();
    }

    // escurece o fundo distante
    const grad = g.createLinearGradient(0, 0, 0, H * 0.45);
    grad.addColorStop(0, "rgba(5,5,6,1)"); grad.addColorStop(1, "rgba(5,5,6,0)");
    g.fillStyle = grad; g.fillRect(-10, -10, W + 20, H * 0.45 + 10);

    // clarão quando pega
    if (pegou && uOnda < 0.6) { g.fillStyle = `rgba(255,236,200,${(0.35 * (1 - uOnda / 0.6)).toFixed(3)})`; g.fillRect(-10, -10, W + 20, H + 20); }
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
  Promise.resolve(T.preparar()).then(liberar, liberar);
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
    portao.hidden = true; ab.hidden = false; montar();
    const t = parseFloat(teste) || 0;
    if (t >= T_FINAL) ab.classList.add("final");
    for (let k = 0; k < 40; k++) { mouse.sx = mouse.sy = 0; quadroGrade(t, 0.016); }
    atualizarLeituras(t, 1);
  }
})();
