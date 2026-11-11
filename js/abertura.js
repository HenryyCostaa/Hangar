/* =========================================================
   Portão + abertura: partida na cabine do P-39Q-1.
   Você liga as chaves na ordem real (bateria, bomba, magnetos,
   primer, partida) e os ponteiros seguem o mesmo relógio da
   gravação do Allison V-1710 dando partida.
   ========================================================= */
(() => {
  const $ = s => document.querySelector(s);
  const T = window.Trilha;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portao = $("#portao"), ab = $("#abertura"), painel = $("#ab-painel");
  const canvas = $("#ab-osc"), g = canvas.getContext("2d");
  const foto = $("#ab-foto"), status = $("#ab-status");
  const bSom = $("#ligar-som"), bMudo = $("#ligar-mudo");

  /* ---------- relógios ---------- */
  // cada relógio varre 270°, de -135° a +135°
  const RELOGIOS = [
    { id: "volts", nome: "Voltímetro", uni: "VOLTS", min: 0, max: 30, passo: 10, faixa: [24, 28.5] },
    { id: "rpm", nome: "Tacômetro", uni: "RPM × 100", min: 0, max: 35, passo: 5, faixa: [10, 30] },
    { id: "oleo", nome: "Pressão do óleo", uni: "PSI", min: 0, max: 100, passo: 25, faixa: [55, 85] },
    { id: "comb", nome: "Pressão de combustível", uni: "PSI", min: 0, max: 25, passo: 5, faixa: [14, 18] },
    { id: "adm", nome: "Pressão de admissão", uni: "POL Hg", min: 10, max: 50, passo: 10, faixa: [20, 44] }
  ];
  const ang = (r, v) => -135 + 270 * (Math.min(r.max, Math.max(r.min, v)) - r.min) / (r.max - r.min);
  const polar = (a, raio) => { const t = (a - 90) * Math.PI / 180; return [60 + raio * Math.cos(t), 60 + raio * Math.sin(t)]; };
  function svgRelogio(r) {
    let s = `<circle class="aro" cx="60" cy="60" r="55"/><circle class="face" cx="60" cy="60" r="52"/>`;
    const [fx0, fy0] = polar(ang(r, r.faixa[0]), 47), [fx1, fy1] = polar(ang(r, r.faixa[1]), 47);
    s += `<path class="faixa" d="M${fx0.toFixed(1)} ${fy0.toFixed(1)} A47 47 0 ${ang(r, r.faixa[1]) - ang(r, r.faixa[0]) > 180 ? 1 : 0} 1 ${fx1.toFixed(1)} ${fy1.toFixed(1)}"/>`;
    const sub = r.passo / 5;
    for (let v = r.min; v <= r.max + 0.001; v += sub) {
      const grande = Math.abs(v / r.passo - Math.round(v / r.passo)) < 0.001;
      const a = ang(r, v), [x0, y0] = polar(a, grande ? 37 : 40), [x1, y1] = polar(a, 44);
      s += `<line class="tique${grande ? " g" : ""}" x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`;
      if (grande) { const [tx, ty] = polar(a, 29); s += `<text class="num" x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle">${Math.round(v)}</text>`; }
    }
    s += `<text class="uni" x="60" y="92" text-anchor="middle">${r.uni}</text>`;
    s += `<line class="agulha" id="ag-${r.id}" x1="60" y1="68" x2="60" y2="20" transform="rotate(-135 60 60)"/><circle class="pino" cx="60" cy="60" r="4.5"/>`;
    return `<figure class="relogio"><svg viewBox="0 0 120 120" role="img" aria-label="${r.nome}">${s}</svg><figcaption>${r.nome}</figcaption></figure>`;
  }
  $("#ab-relogios").innerHTML = RELOGIOS.map(svgRelogio).join("");
  const agulhas = Object.fromEntries(RELOGIOS.map(r => [r.id, { r, el: $(`#ag-${r.id}`), v: r.min, alvo: r.min }]));

  /* ---------- chaves e linha do tempo ---------- */
  const P = T.tempos;                        // tempos medidos na gravação: arranque, pega, pico
  const T_CLIPE = 2.75;                      // o trecho da gravação começa aqui
  const T_PARTIDA = T_CLIPE + P.arranque;    // 3,0 s: o arranque começa a girar
  const T_PEGA = T_CLIPE + P.pega;           // 8,75 s: o motor pega
  const T_FINAL = T_PEGA + 2.2, T_FIM = T_FINAL + 1.9;
  const CHAVES = [
    { id: "bat", nome: "Bateria", grande: "Bateria", t: 0.4, txt: "Bateria ligada · 24 V no barramento" },
    { id: "bomba", nome: "Bomba comb.", grande: "Combustível", t: 1.1, txt: "Bomba de combustível · 16 psi" },
    { id: "mag", nome: "Magnetos", grande: "Magnetos", t: 1.8, txt: "Magnetos · ambos" },
    { id: "primer", nome: "Primer", grande: "Primer", t: 2.4, txt: "Primer · 3 injeções" },
    { id: "partida", nome: "Partida", grande: "Partida", t: T_PARTIDA, txt: "Partida · o arranque gira o V12 e a tensão cai" }
  ];
  const elPasso = $("#ab-passo");
  function passo(pequeno, grande) {
    elPasso.innerHTML = `<small>${pequeno}</small>${grande}`;
    elPasso.classList.remove("troca"); void elPasso.offsetWidth; elPasso.classList.add("troca");
  }
  $("#ab-chaves").innerHTML = CHAVES.map(c => `<div class="ab-chave" id="ch-${c.id}"><span class="led"></span><span class="trilho"></span><span>${c.nome}</span></div>`).join("");

  /* pré-carrega a foto e o áudio antes de liberar as chaves do portão */
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
  const fotoOk = new Promise(r => { im.onload = im.onerror = r; });
  im.src = fotoUrl("p39-noite");
  Promise.all([fotoOk, T.preparar()]).then(liberar);
  setTimeout(liberar, 6000);

  /* ---------- osciloscópio: V12, então faíscas/s = rpm ÷ 10 ---------- */
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
    const ciclos = hz * 0.04, base = h * 0.72;
    g.strokeStyle = "#ffa31a";
    g.lineWidth = 1.5;
    g.shadowColor = "rgba(255,163,26,.5)";
    g.shadowBlur = 5;
    g.beginPath();
    for (let x = 0; x <= w; x++) {
      const t = (x / w) * ciclos + fase, k = t - Math.floor(t);
      let y = base;
      if (hz > 0) {
        if (k < 0.02) y = base - (k / 0.02) * h * 0.58;
        else if (k < 0.05) y = base - h * 0.58 + ((k - 0.02) / 0.03) * h * 0.42;
        else if (k < 0.22) y = base - h * 0.16;
        else y = base - Math.exp(-(k - 0.22) * 16) * Math.sin((k - 0.22) * 80) * h * 0.1;
      }
      x ? g.lineTo(x, y) : g.moveTo(x, y);
    }
    g.stroke();
    g.shadowBlur = 0;
    fase += 0.012 + ciclos * 0.004;
  }

  /* ---------- quadro a quadro ---------- */
  let relogio = null, rodando = false, comSom = false, ultimo = 0, ultimaChave = -1;
  const ruido = (t, f) => Math.sin(t * f) * 0.6 + Math.sin(t * f * 2.7 + 1) * 0.4;

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
    const t = relogio(), dt = Math.min(0.05, Math.max(0, t - ultimo));
    ultimo = t;

    // chaves, na ordem
    CHAVES.forEach((c, i) => {
      if (t >= c.t && i > ultimaChave) {
        ultimaChave = i;
        $(`#ch-${c.id}`).classList.add("on");
        status.textContent = c.txt;
        passo(`0${i + 1} / 05`, c.grande);
        if (c.id === "bat") painel.classList.add("aceso");
      }
    });

    // alvos dos ponteiros
    const bat = t >= CHAVES[0].t, girando = t >= T_PARTIDA, pegou = t >= T_PEGA;
    const rpm = T.rpmAbertura(t - T_CLIPE);
    const A = agulhas;
    // o motor de arranque puxa centenas de ampères: a tensão cai; com o motor girando, o gerador carrega a 28 V
    A.volts.alvo = !bat ? 0 : pegou ? 28 : girando ? 18.5 + ruido(t, 9) * 0.7 : 24;
    A.comb.alvo = t >= CHAVES[1].t ? 16 + (pegou ? ruido(t, 13) * 0.4 : 0) : 0;
    A.rpm.alvo = rpm / 100 + (girando && !pegou ? ruido(t, 17) * 0.25 : pegou ? ruido(t, 23) * 0.3 : 0);
    A.oleo.alvo = pegou ? Math.min(70, (t - T_PEGA) * 60) : girando ? Math.min(12, (t - T_PARTIDA) * 2.5) : 0;
    A.adm.alvo = !bat ? 10 : pegou ? 21 + ruido(t, 11) * 0.6 : girando ? 28.5 + ruido(t, 15) * 0.5 : 29.9;
    for (const k in A) {
      const a = A[k];
      a.v += (a.alvo - a.v) * Math.min(1, dt * (k === "rpm" ? 9 : 6));
      a.el.setAttribute("transform", `rotate(${ang(a.r, a.v).toFixed(2)} 60 60)`);
    }
    desenhar(rpm / 10);

    // a cabine treme com o motor
    if (girando && t < T_FINAL) {
      const amp = pegou ? 1.6 : 0.6;
      painel.style.marginLeft = `${(ruido(t, 61) * amp).toFixed(2)}px`;
      painel.style.marginBottom = `${(ruido(t, 53) * amp * 0.6).toFixed(2)}px`;
    }
    if (pegou && !foto.classList.contains("aberta")) {
      foto.classList.add("aberta");
      status.textContent = "Pegou · 12 cilindros, mais de 100 faíscas por segundo";
      passo("Allison V-1710", "Pegou");
    }
    if (t >= T_FINAL && !ab.classList.contains("final")) {
      ab.classList.add("final");
      foto.classList.add("cheia");
      painel.style.marginLeft = painel.style.marginBottom = "";
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
    setTimeout(() => { ab.hidden = true; }, 850);
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
