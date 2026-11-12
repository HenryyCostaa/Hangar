/* =========================================================
   HANGAR — catálogo, ficha, comparador, linha do tempo, bancada
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const NAC = window.NACOES, FAM = window.FAMILIAS, FICHAS = window.FICHAS || {};
  const AJ = window.AJUSTES_FICHA || {}, ARM = window.ARMAMENTO || {}, CR = window.CREDITOS || {}, FOTOS = window.FOTOS || {};
  const T = window.Trilha;
  const VAR = window.VARIANTES || {}, HIST = window.HISTORIAS || {};
  FAM.forEach(f => { if (VAR[f.id]) f.variantes = VAR[f.id]; });
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const n0 = v => new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(v);
  const n1 = v => new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(v);
  const n2 = v => new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const seguro = u => (/^https:\/\//.test(u || "") ? u : null);

  window.fotoUrl = (nome, peq) => {
    const f = FOTOS[nome];
    if (f) return peq ? f.sm : f.lg;
    return `img/${nome}${peq ? "-sm" : ""}.jpg`;
  };
  const abs = u => new URL(u, location.href).href;
  const nacao = id => NAC.find(n => n.id === id);
  const familia = id => FAM.find(f => f.id === id);

  /* ---------- insígnias (desenhadas, sem símbolos políticos) ---------- */
  const ESTRELA = "16,7 18.12,13.09 24.56,13.22 19.42,17.11 21.29,23.28 16,19.6 10.71,23.28 12.58,17.11 7.44,13.22 13.88,13.09";
  const ESTRELA_G = "16,3 19.06,11.79 28.36,11.98 20.95,17.61 23.64,26.52 16,21.2 8.36,26.52 11.05,17.61 3.64,11.98 12.94,11.79";
  const roundel = (a, b, c) => `<circle cx="16" cy="16" r="14" fill="${a}"/><circle cx="16" cy="16" r="9.3" fill="${b}"/><circle cx="16" cy="16" r="4.6" fill="${c}"/>`;
  const INS = {
    eua: `<rect x="1" y="12.5" width="30" height="7" fill="#f2f2f2" stroke="#1f3a7a" stroke-width="1.2"/><circle cx="16" cy="16" r="10.5" fill="#1f3a7a"/><polygon fill="#f2f2f2" points="${ESTRELA}"/>`,
    ru: roundel("#1f3a7a", "#f2f2f2", "#c8102e"),
    ale: `<rect x="11.5" y="2.5" width="9" height="27" fill="#f2f2f2"/><rect x="2.5" y="11.5" width="27" height="9" fill="#f2f2f2"/><rect x="13.75" y="4.5" width="4.5" height="23" fill="#111"/><rect x="4.5" y="13.75" width="23" height="4.5" fill="#111"/>`,
    urss: `<polygon fill="#c8102e" stroke="#f2f2f2" stroke-width="1" points="${ESTRELA_G}"/>`,
    jap: `<circle cx="16" cy="16" r="14" fill="#f2f2f2"/><circle cx="16" cy="16" r="10.5" fill="#c8102e"/>`,
    ita: roundel("#009246", "#f2f2f2", "#ce2b37"),
    fra: roundel("#0055a4", "#f2f2f2", "#ef4135"),
    fin: roundel("#f2f2f2", "#003580", "#f2f2f2")
  };
  const insignia = (id, cls = "") => `<svg class="${cls}" viewBox="0 0 32 32" aria-hidden="true">${INS[id] || ""}</svg>`;

  /* ---------- ficha técnica (dados da Wikipedia + ajustes) ---------- */
  function fichaDe(id) {
    const base = FICHAS[id];
    if (!base) return null;
    const f = Object.assign({}, base, AJ[id] || {});
    if (!f.variante) f.variante = String(base.secao || "").replace(/^Specifications\s*/i, "").replace(/^\(|\)$/g, "").trim();
    f.armasPt = ARM[id] || null;
    return f;
  }
  const fichaFam = f => fichaDe(f.ficha) || {};
  const pulsos = m => (m.tipo === "jato" ? m.rpm / 60 : m.cil * m.rpm / 120);
  const anoVoo = f => { const [a, m] = f.primeiroVoo.split("-").map(Number); return a + ((m || 1) - 1) / 12; };
  const prodNum = f => parseInt(String(f.produzidos).replace(/[^\d]/g, ""), 10) || 0;

  function tempoSubida(t) {
    if (!t) return null;
    const pal = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
    let s = String(t).split(/::+|:\*|;/).map(x => x.trim()).filter(Boolean)[0] || "";
    s = s.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/gi, w => pal[w.toLowerCase()]);
    const alt = s.match(/([\d.,]+)\s*(ft|m)\b/), min = s.match(/([\d.]+)\s*min/), seg = s.match(/(\d+)\s*sec/);
    if (!alt || !min) return null;
    let m = parseFloat(alt[1].replace(/,/g, ""));
    if (alt[2] === "ft") m *= 0.3048;
    const total = Math.round(parseFloat(min[1]) * 60 + (seg ? parseInt(seg[1], 10) : 0));
    const ss = total % 60;
    return `${n0(Math.round(m / 10) * 10)} m em ${Math.floor(total / 60)} min${ss ? ` ${ss} s` : ""}`;
  }

  /* linhas da ficha técnica: [rótulo, valor principal, valor secundário] */
  function linhasFicha(fi, motor) {
    const L = [];
    const qtd = motor && motor.qtd > 1 ? motor.qtd : 1;
    const peso = fi.pesoBruto || fi.pesoMax;
    if (fi.velMax) L.push(["Velocidade máxima", `${n0(fi.velMax)} km/h`, `${n0(fi.velMax / 1.609)} mph${fi.velAlt ? ` · a ${n0(fi.velAlt)} m` : ""}`]);
    if (fi.velObs) L.push(["Velocidade baixa", fi.velObs, ""]);
    if (fi.teto) L.push(["Teto de serviço", `${n0(fi.teto)} m`, `${n0(fi.teto / 0.3048)} ft`]);
    if (fi.subida) L.push(["Razão de subida", `${n1(fi.subida)} m/s`, `${n0(fi.subida / 0.00508)} ft/min`]);
    const ts = tempoSubida(fi.tempoSubida);
    if (ts) L.push(["Tempo de subida", ts, ""]);
    if (fi.alcance) L.push(["Alcance", `${n0(fi.alcance)} km`, `${n0(fi.alcance / 1.609)} mi`]);
    if (fi.alcanceCombate) L.push(["Raio / alcance de combate", `${n0(fi.alcanceCombate)} km`, ""]);
    if (fi.alcanceTraslado) L.push(["Alcance de traslado", `${n0(fi.alcanceTraslado)} km`, "com tanques extras"]);
    if (fi.motor) L.push(["Motor", `${qtd > 1 ? qtd + "× " : ""}${fi.motor}`, "", true]);
    if (fi.kn) L.push(["Empuxo", `${qtd > 1 ? qtd + "× " : ""}${n2(fi.kn)} kN`, `${n0(fi.kn / 0.0044482)} lbf cada`]);
    else if (fi.hp) L.push(["Potência", `${qtd > 1 ? qtd + "× " : ""}${n0(fi.hp)} hp`, `${n0(fi.kw || fi.hp * 0.7457)} kW`]);
    if (fi.kw && peso && !fi.kn) L.push(["Potência / peso", `${n2(fi.kw * qtd / peso)} kW/kg`, "no peso de decolagem"]);
    if (fi.pesoVazio) L.push(["Peso vazio", `${n0(fi.pesoVazio)} kg`, `${n0(fi.pesoVazio / 0.4536)} lb`]);
    if (peso) L.push(["Peso de decolagem", `${n0(peso)} kg`, `${n0(peso / 0.4536)} lb`]);
    if (fi.envergadura) L.push(["Envergadura", `${n2(fi.envergadura)} m`, `${n1(fi.envergadura / 0.3048)} ft`]);
    if (fi.comprimento) L.push(["Comprimento", `${n2(fi.comprimento)} m`, `${n1(fi.comprimento / 0.3048)} ft`]);
    if (fi.altura) L.push(["Altura", `${n2(fi.altura)} m`, ""]);
    if (fi.areaAsa) L.push(["Área da asa", `${n1(fi.areaAsa)} m²`, peso ? `carga alar ${n0(peso / fi.areaAsa)} kg/m²` : ""]);
    if (fi.armasPt) L.push(["Armamento", fi.armasPt, "", true]);
    return L;
  }

  /* ---------- osciloscópio ---------- */
  class Osc {
    constructor(canvas) { this.c = canvas; this.g = canvas.getContext("2d"); this.hz = 300; this.tipo = "pulso"; this.fase = 0; this.ativo = false; }
    set(hz, tipo) { this.hz = hz; this.tipo = tipo || "pulso"; }
    desenhar() {
      const c = this.c, w = c.clientWidth, h = c.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      if (c.width !== Math.round(w * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
      const g = this.g;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      g.strokeStyle = "rgba(255,255,255,.06)";
      g.lineWidth = 1;
      for (let i = 1; i < 10; i++) { const x = Math.round(i * w / 10) + 0.5; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
      for (let j = 1; j < 6; j++) { const y = Math.round(j * h / 6) + 0.5; g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
      const ciclos = this.hz * 0.02;               // 20 ms na tela (2 ms/div)
      g.strokeStyle = "#ffa31a";
      g.lineWidth = 1.6;
      g.shadowColor = "rgba(255,163,26,.5)";
      g.shadowBlur = 6;
      g.beginPath();
      const base = h * 0.66;
      for (let x = 0; x <= w; x++) {
        const t = (x / w) * ciclos + this.fase;
        const k = t - Math.floor(t);
        let y;
        if (this.tipo === "seno") y = h / 2 - Math.sin(t * 2 * Math.PI) * h * 0.3;
        else if (this.hz <= 0) y = base;
        else if (k < 0.012) y = base - (k / 0.012) * h * 0.52;                    // pico de disparo
        else if (k < 0.03) y = base - h * 0.52 + ((k - 0.012) / 0.018) * h * 0.38; // cai pra linha de faísca
        else if (k < 0.2) y = base - h * 0.14;                                    // faísca acesa
        else y = base - Math.exp(-(k - 0.2) * 16) * Math.sin((k - 0.2) * 80) * h * 0.1; // oscilação da bobina
        x ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.stroke();
      g.shadowBlur = 0;
      if (!reduz) this.fase += 0.0025 * Math.max(1, ciclos / 3);
    }
  }
  const oscs = [];

  /* ---------- números do topo ---------- */
  const totalVariantes = FAM.reduce((s, f) => s + f.variantes.length, 0);
  $("#numeros").innerHTML = [
    [FAM.length, "famílias de caças"], [NAC.length, "nações"], [totalVariantes, "variantes"], [new Set(["p39-noite", ...FAM.flatMap(f => [...f.fotos, ...f.variantes.map(v => v.foto)])].filter(k => k && FOTOS[k])).size, "fotos"]
  ].map(([v, r]) => `<div><b>${v}</b><span>${r}</span></div>`).join("");
  $("#portao-sub").textContent = `${FAM.length} famílias de caças, ${NAC.length} nações, fichas completas e o lado elétrico de cada avião.`;
  $("#hero-foto").style.backgroundImage = `url("${abs(fotoUrl("p39-noite"))}")`;
  $("#hero-legenda").textContent = "Bell P-39 Airacobra disparando todas as armas à noite · USAAF";
  $("#abrir-destaque").addEventListener("click", () => abrirFicha("p39"));

  /* ---------- hangar: nações, filtros e cards ---------- */
  const estado = { nacao: "", motor: "", papel: "", ordem: "voo", busca: "" };
  const papeis = [...new Set(FAM.map(f => f.papel))].sort();
  $("#f-papel").innerHTML += papeis.map(p => `<option>${esc(p)}</option>`).join("");

  /* nações: capas num cilindro (visto por dentro), com inércia, separação de cor
     quando gira rápido, brilho seguindo o mouse e o fundo tingido pela foto ativa.
     Os caças só aparecem depois de entrar numa nação. */
  const PRINCIPAL = { eua: "p51", ru: "spitfire", ale: "bf109", urss: "yak", jap: "a6m", ita: "macchi", fra: "d520", fin: "myrsky" };
  const COR = { "": "255,163,26", eua: "90,140,255", ru: "235,80,90", ale: "220,220,220", urss: "255,70,60", jap: "255,90,90", ita: "60,200,120", fra: "90,150,255", fin: "120,170,255" };
  const CAPAS = [
    { id: "", nome: "Todas", forca: "8 nações", aviao: null, foto: "p39-noite" },
    ...NAC.map(n => { const f = familia(PRINCIPAL[n.id]); return { id: n.id, nome: n.nome, forca: n.forca, aviao: f, foto: f && f.fotos[0] }; })
  ];
  const N = CAPAS.length;
  const sala = $("#sala"), palco = $("#palco");
  palco.innerHTML = CAPAS.map((c, i) => {
    const img = abs(fotoUrl(c.foto, true));
    return `<button class="capa" data-i="${i}" aria-label="${esc(c.nome)}${c.aviao ? " · " + esc(c.aviao.nome) : ""}">
      <span class="capa-img" style="background-image:url('${img}')"></span>
      <span class="capa-rgb r" style="background-image:url('${img}')"></span>
      <span class="capa-rgb b" style="background-image:url('${img}')"></span>
      <span class="capa-brilho"></span><span class="capa-varre"></span>
      <span class="capa-num">${String(i).padStart(2, "0")} / ${String(N - 1).padStart(2, "0")}</span>
      ${c.id ? insignia(c.id, "ins") : ""}
      <span class="capa-nome">${esc(c.nome)}</span>
      <span class="capa-aviao">${c.aviao ? esc(c.aviao.nome) + " · " + c.aviao.primeiroVoo.slice(0, 4) : FAM.length + " famílias · " + totalVariantes + " variantes"}</span>
      <span class="capa-entrar">Entrar →</span>
    </button>`;
  }).join("");
  const capas = $$(".capa", palco);
  $("#sala-pontos").innerHTML = CAPAS.map((c, i) => `<button data-i="${i}" aria-label="${esc(c.nome)}"></button>`).join("");
  const pontos = $$("#sala-pontos button");
  const glows = $$("#sala-glow span");
  let pos = 0, vel = 0, alvo = 0, arraste = null, rodando = false, atualI = -1, glowK = 0;
  const volta = i => ((i % N) + N) % N;

  function posicionar() {
    const larg = capas[0].offsetWidth || 400;
    const R = larg * 2.1;                               // raio do cilindro
    const passoAng = (larg * 0.82) / R * 57.2958;       // graus entre capas
    capas.forEach((el, i) => {
      let d = i - pos;
      d = d - N * Math.round(d / N);                   // carrossel infinito
      const a = Math.abs(d);
      const ang = d * passoAng;
      const tilt = Math.max(-8, Math.min(8, -vel * 6));
      el.style.transform = `translateZ(${(-R * 0.08).toFixed(1)}px) translateZ(${R.toFixed(1)}px) rotateY(${(-ang).toFixed(2)}deg) translateZ(${(-R).toFixed(1)}px) rotateY(${(ang * 0.35).toFixed(2)}deg) skewX(${tilt.toFixed(2)}deg)`;
      el.style.opacity = a > 3.2 ? Math.max(0, 4 - a) : 1;
      el.style.zIndex = 100 - Math.round(a * 10);
      el.style.setProperty("--par", `${(d * 9).toFixed(2)}%`);
      el.style.setProperty("--vel", (vel * 26).toFixed(2));
      el.style.pointerEvents = a > 2.6 ? "none" : "";
      el.tabIndex = a < 0.5 ? 0 : -1;
    });
    palco.classList.toggle("rapido", Math.abs(vel) > 0.04);
    sala.style.setProperty("--chao", `${(-pos * 60).toFixed(1)}px`);
    const i = volta(Math.round(pos));
    if (i !== atualI) mudou(i);
  }

  function mudou(i) {
    atualI = i;
    const c = CAPAS[i];
    capas.forEach((el, k) => el.classList.toggle("centro", k === i));
    pontos.forEach((p, k) => p.classList.toggle("on", k === i));
    sala.style.setProperty("--cor", COR[c.id] || COR[""]);
    // fundo tingido: troca de camada
    glowK = 1 - glowK;
    glows[glowK].style.backgroundImage = `url("${abs(fotoUrl(c.foto, true))}")`;
    glows.forEach((g, k) => g.classList.toggle("on", k === glowK));
    $("#sala-nome").innerHTML = [...c.nome].map((l, k) => `<span style="animation-delay:${k * 0.035}s">${l === " " ? "&nbsp;" : esc(l)}</span>`).join("");
    const n = FAM.filter(f => !c.id || f.nacao === c.id);
    $("#sala-info").innerHTML = `
      <div>Nação<b>${esc(c.nome)}</b></div>
      <div>Força aérea<b>${esc(c.forca)}</b></div>
      <div class="so-largo">Na capa<b>${c.aviao ? esc(c.aviao.fabricante + " " + c.aviao.nome) : "Bell P-39 Airacobra"}</b></div>
      <div class="so-largo">Famílias<b>${n.length} · ${n.reduce((s, f) => s + f.variantes.length, 0)} variantes</b></div>`;
  }

  // física: mola até o alvo quando solto, inércia quando arrasta
  function passoFisica() {
    if (!arraste) {
      const f = (alvo - pos) * 0.032;     // mola mole: chega devagar e assenta suave
      vel = (vel + f) * 0.86;
      pos += vel;
      if (Math.abs(alvo - pos) < 0.0008 && Math.abs(vel) < 0.0008) { pos = alvo; vel = 0; }
    }
    posicionar();
    if (arraste || pos !== alvo || vel) requestAnimationFrame(passoFisica); else rodando = false;
  }
  function animar() { if (!rodando) { rodando = true; requestAnimationFrame(passoFisica); } }
  function irPara(i) {
    // menor caminho no círculo
    let d = i - pos; d = d - N * Math.round(d / N);
    alvo = Math.round(pos + d);
    if (reduz) { pos = alvo; vel = 0; posicionar(); return; }
    animar();
  }
  function desenharNacoes() { posicionar(); }

  capas.forEach((el, i) => {
    el.addEventListener("click", e => {
      if (arraste && arraste.moveu) { e.preventDefault(); return; }
      if (i === atualI) entrarNacao(CAPAS[i].id, e);
      else irPara(Math.round(pos) + ((i - atualI + N + N / 2) % N) - N / 2);
    });
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`);
    });
  });
  pontos.forEach((p, i) => p.addEventListener("click", () => irPara(Math.round(pos) + ((i - atualI + N + N / 2) % N) - N / 2)));
  $("#sala-esq").addEventListener("click", () => irPara(Math.round(alvo) - 1));
  $("#sala-dir").addEventListener("click", () => irPara(Math.round(alvo) + 1));
  sala.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { irPara(Math.round(alvo) - 1); e.preventDefault(); }
    if (e.key === "ArrowRight") { irPara(Math.round(alvo) + 1); e.preventDefault(); }
    if (e.key === "Enter" && e.target === sala) entrarNacao(CAPAS[atualI].id);
  });
  sala.addEventListener("pointermove", e => { const r = sala.getBoundingClientRect(); sala.style.setProperty("--lx", `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`); });
  palco.addEventListener("pointerdown", e => {
    arraste = { x: e.clientX, p: pos, moveu: false, id: e.pointerId, ux: e.clientX, ut: performance.now() };
  });
  window.addEventListener("pointermove", e => {
    if (!arraste || e.pointerId !== arraste.id) return;
    const dx = e.clientX - arraste.x;
    if (!arraste.moveu && Math.abs(dx) > 6) { arraste.moveu = true; palco.classList.add("arrastando"); animar(); }
    if (!arraste.moveu) return;
    const novo = arraste.p - dx / ((capas[0].offsetWidth || 400) * 0.85);
    const agora = performance.now();
    vel = vel * 0.75 + (novo - pos) * 0.25;
    pos = novo;
    arraste.ut = agora;
  });
  window.addEventListener("pointerup", e => {
    if (!arraste || e.pointerId !== arraste.id) return;
    palco.classList.remove("arrastando");
    if (arraste.moveu) { alvo = Math.round(pos + vel * 14); }   // joga com a inércia
    const a = arraste;
    arraste = null;
    if (a.moveu) { arraste = { moveu: true, solto: true }; setTimeout(() => { arraste = null; animar(); }, 0); }
  });
  let rodaTempo = 0;
  palco.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) && !e.shiftKey) return;
    e.preventDefault();
    const agora = performance.now();
    if (agora - rodaTempo < 260) return;
    rodaTempo = agora;
    irPara(Math.round(alvo) + Math.sign(e.deltaX || e.deltaY));
  }, { passive: false });
  window.addEventListener("resize", posicionar);

  /* ---------- dentro da nação: capa grande + filtros + cards ---------- */
  const nacTela = $("#nacao-tela");
  function entrarNacao(id, ev) {
    const c = CAPAS.find(k => k.id === id) || CAPAS[0];
    estado.nacao = id;
    nacTela.style.setProperty("--cx", ev && ev.clientX ? ev.clientX + "px" : "50%");
    nacTela.style.setProperty("--cy", ev && ev.clientY ? ev.clientY + "px" : "50%");
    $("#nac-capa").style.backgroundImage = `url("${abs(fotoUrl(c.foto))}")`;
    const n = FAM.filter(f => !id || f.nacao === id);
    $("#nac-ref").textContent = `Hangar · ${c.nome}`;
    $("#nac-txt").innerHTML = `<p>${id ? insignia(id) : ""} ${esc(c.forca)}</p>
      <h2 id="nac-nome">${[...c.nome].map((l, k) => `<span style="animation-delay:${0.35 + k * 0.04}s">${l === " " ? "&nbsp;" : esc(l)}</span>`).join("")}</h2>
      <small>${n.length} ${n.length === 1 ? "família" : "famílias"} · ${n.reduce((s, f) => s + f.variantes.length, 0)} variantes${c.aviao ? " · na capa: " + esc(c.aviao.fabricante + " " + c.aviao.nome) : ""}</small>`;
    desenharGrade();
    nacTela.hidden = false;
    nacTela.scrollTop = 0;
    document.body.classList.add("com-nacao");
    void nacTela.offsetWidth;
    nacTela.classList.add("on");
    setTimeout(() => $("#nac-voltar").focus({ preventScroll: true }), 60);
  }
  function sairNacao() {
    if (nacTela.hidden) return;
    nacTela.classList.remove("on");
    document.body.classList.remove("com-nacao");
    setTimeout(() => { if (!nacTela.classList.contains("on")) nacTela.hidden = true; }, reduz ? 0 : 850);
    capas[atualI] && capas[atualI].focus({ preventScroll: true });
  }
  $("#nac-voltar").addEventListener("click", sairNacao);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !nacTela.hidden && $("#ficha").hidden) sairNacao(); });

  function filtradas() {
    const q = estado.busca.trim().toLowerCase();
    let l = FAM.filter(f => {
      if (estado.nacao && f.nacao !== estado.nacao) return false;
      if (estado.motor && f.motor.tipo !== estado.motor) return false;
      if (estado.papel && f.papel !== estado.papel) return false;
      if (q) {
        const txt = [f.nome, f.fabricante, f.motor.nome, f.papel, ...f.variantes.map(v => v.nome), nacao(f.nacao).nome].join(" ").toLowerCase();
        if (!txt.includes(q)) return false;
      }
      return true;
    });
    const vel = f => fichaFam(f).velMax || 0;
    const ord = {
      voo: (a, b) => anoVoo(a) - anoVoo(b),
      vel: (a, b) => vel(b) - vel(a),
      prod: (a, b) => prodNum(b) - prodNum(a),
      nome: (a, b) => a.nome.localeCompare(b.nome, "pt-BR")
    }[estado.ordem];
    return l.sort(ord);
  }

  function desenharGrade() {
    const l = filtradas();
    const n = estado.nacao ? nacao(estado.nacao) : null;
    $("#contagem").textContent = n
      ? `${n.nome} · ${n.forca} · ${l.length} ${l.length === 1 ? "família" : "famílias"}`
      : `${l.length} ${l.length === 1 ? "família" : "famílias"}`;
    $("#grade").innerHTML = l.length ? l.map(f => {
      const fi = fichaFam(f);
      return `<button class="card" data-id="${f.id}">
        <div class="card-foto" style="background-image:url('${abs(fotoUrl(f.fotos[0], true))}')">${insignia(f.nacao, "ins")}</div>
        <div class="card-corpo">
          <span class="card-meta">${esc(f.fabricante)} · ${f.primeiroVoo.slice(0, 4)}</span>
          <h3>${esc(f.nome)}</h3>
          <span class="card-meta">${esc(f.papel)} · ${esc(f.motor.nome)}</span>
          <div class="card-dados">
            <span>Vel. máx.<b>${fi.velMax ? n0(fi.velMax) + " km/h" : "—"}</b></span>
            <span>Teto<b>${fi.teto ? n0(fi.teto) + " m" : "—"}</b></span>
            <span>Produção<b>${esc(f.produzidos.replace(/ \(.*\)$/, ""))}</b></span>
          </div>
        </div>
      </button>`;
    }).join("") : `<p class="mudo">Nenhuma família com esses filtros.</p>`;
    $$("#grade .card").forEach((c, k) => { c.style.animationDelay = `${0.45 + Math.min(k, 12) * 0.05}s`; c.addEventListener("click", () => abrirFicha(c.dataset.id)); });
  }

  $("#f-motor").addEventListener("change", e => { estado.motor = e.target.value; desenharGrade(); });
  $("#f-papel").addEventListener("change", e => { estado.papel = e.target.value; desenharGrade(); });
  $("#f-ordem").addEventListener("change", e => { estado.ordem = e.target.value; desenharGrade(); });
  $("#f-busca").addEventListener("input", e => { estado.busca = e.target.value; desenharGrade(); });
  desenharNacoes();
  desenharGrade();

  /* ---------- ficha da família ---------- */
  const fichaEl = $("#ficha");
  const oscFicha = new Osc($("#ficha-osc"));
  oscs.push(oscFicha);
  let atual = null, voltarFoco = null;

  function abrirFicha(id, semHistorico) {
    const f = familia(id);
    if (!f) return;
    atual = f;
    const n = nacao(f.nacao), fi = fichaFam(f);
    $("#ficha-ref").textContent = `REF. ${f.id.toUpperCase()} · ${n.nome}`;
    $("#ficha-meta").innerHTML = `${insignia(f.nacao)}<span>${esc(f.fabricante)}</span><span>${esc(n.nome)}</span><span>1º voo ${f.primeiroVoo.slice(0, 4)}</span><span>Em serviço ${esc(f.servico)}</span><span>${esc(f.papel)}</span><span>Produção ${esc(f.produzidos)}</span>`;
    $("#ficha-nome").textContent = f.nome;
    $("#ficha-resumo").textContent = f.resumo;

    // galeria
    const fotos = f.fotos.length ? f.fotos : [];
    $("#filme").innerHTML = fotos.map((nome, k) => `<button data-k="${k}" aria-label="Foto ${k + 1} de ${fotos.length}" style="background-image:url('${abs(fotoUrl(nome, true))}')"></button>`).join("");
    $$("#filme button").forEach(b => b.addEventListener("click", () => mostrarFoto(fotos, +b.dataset.k)));
    mostrarFoto(fotos, 0);

    // variantes
    const iPrincipal = Math.max(0, f.variantes.findIndex(v => v.principal));
    $("#variantes").innerHTML = f.variantes.map((v, k) => `${k ? '<span class="seta" aria-hidden="true">→</span>' : ""}<button data-k="${k}" class="${k === iPrincipal ? "on" : ""}">${esc(v.nome)}</button>`).join("");
    $$("#variantes button").forEach(b => b.addEventListener("click", () => mostrarVariante(f, +b.dataset.k)));
    mostrarVariante(f, iPrincipal);

    // ficha técnica
    $("#specs-titulo").textContent = fi.variante ? `Ficha técnica · ${fi.variante}` : "Ficha técnica";
    $("#specs").innerHTML = linhasFicha(fi, f.motor).map(([r, v, s, largo]) =>
      `<div class="${largo ? "largo" : ""}"><dt>${esc(r)}</dt><dd>${esc(v)}${s ? `<small>${esc(s)}</small>` : ""}</dd></div>`).join("");
    $("#fonte-ficha").innerHTML = fi.artigo
      ? `Fonte: tabela de especificações do artigo <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(fi.artigo.replace(/ /g, "_"))}" target="_blank" rel="noopener">${esc(fi.artigo)}</a> (Wikipedia, em inglês), convertida para unidades métricas.`
      : "";

    // elétrica e aviônica
    const m = f.motor, hzM = pulsos(m), jato = m.tipo === "jato";
    oscFicha.set(hzM, jato ? "seno" : "pulso");
    $("#osc-motor").textContent = `${m.nome}`;
    $("#osc-desc").textContent = jato
      ? `Turbina a ${n0(m.rpm)} rpm${m.qtd > 1 ? " · cada motor" : ""}`
      : `${m.cil} cilindros · ${n0(m.rpm)} rpm${m.qtd > 1 ? " · cada motor" : ""}`;
    $("#osc-hz").textContent = jato ? `${n0(hzM)} voltas/s` : `${n0(hzM)} faíscas/s`;
    const e = f.eletrica;
    $("#eletrica").innerHTML = [["Sistema", e.sistema], ["Ignição", e.ignicao], ["Rádio", e.radio], ["Mira", e.mira]]
      .filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("");
    $("#destaque").textContent = e.destaque || "";
    $("#destaque").hidden = !e.destaque;

    // o motor: texto longo + gravações reais
    const h = HIST[f.id] || {};
    $("#motor-nome").textContent = jato ? `${m.nome} · turbojato` : `${m.nome} · ${m.cil} cilindros${m.tipo === "radial" ? " em estrela" : m.cil === 24 ? " em H" : " em V"}`;
    $("#motor-texto").innerHTML = (h.motor || []).map(p => `<p>${esc(p)}</p>`).join("");
    T.pararSom(true);
    const som = T.infoFamilia(f.id);
    $("#sons").innerHTML = som.clipes.map(c => `<button class="btn btn-pequeno" data-som="${esc(c.nome)}" data-rotulo="${esc(c.rotulo)}">▶ ${esc(c.rotulo)}</button>`).join("");
    $$("#sons button").forEach(b => b.addEventListener("click", () => tocarSom(b)));
    $("#som-legenda").textContent = som.clipes.length ? `Gravação real. ${som.nota}` : som.nota;

    // história: seções com título, ou o texto curto de dados.js
    $("#ficha-historia").innerHTML = h.historia && h.historia.length
      ? h.historia.map(([t, txt]) => `<h4>${esc(t)}</h4><p>${esc(txt)}</p>`).join("")
      : `<p>${esc(f.historia)}</p>`;

    if (fichaEl.hidden) {
      voltarFoco = document.activeElement;
      fichaEl.hidden = false;
      document.body.classList.add("com-ficha");
      if (!reduz) { fichaEl.classList.remove("abrindo"); void fichaEl.offsetWidth; fichaEl.classList.add("abrindo"); }
      setTimeout(() => $("#ficha-voltar").focus(), 50);
      if (!semHistorico) history.pushState({ ficha: id }, "", `#ficha-${id}`);
    } else if (!semHistorico) {
      history.replaceState({ ficha: id }, "", `#ficha-${id}`);
    }
    $("#ficha-rolagem").scrollTop = 0;
    oscFicha.ativo = true;
  }

  function mostrarFoto(fotos, k) {
    const nome = fotos[k];
    if (!nome) return;
    const img = $("#galeria-img");
    img.src = abs(fotoUrl(nome));
    img.alt = atual ? `${atual.nome}, foto ${k + 1}` : "";
    $$("#filme button").forEach((b, j) => b.classList.toggle("on", j === k));
    const c = CR[nome];
    $("#credito").innerHTML = c
      ? `Foto: ${esc(c.autor || "autor desconhecido")} · ${esc(c.licenca)}${seguro(c.fonte) ? ` · <a href="${c.fonte}" target="_blank" rel="noopener">fonte</a>` : ""}`
      : "";
  }

  function mostrarVariante(f, k) {
    const v = f.variantes[k], ant = f.variantes[k - 1];
    $$("#variantes button").forEach((b, j) => b.classList.toggle("on", j === k));
    let mini = "";
    if (v.ficha) {
      const fv = fichaDe(v.ficha);
      if (fv) {
        mini = `<div class="variante-mini">
          ${fv.velMax ? `<span>Vel. máx. <b>${n0(fv.velMax)} km/h</b></span>` : ""}
          ${fv.teto ? `<span>Teto <b>${n0(fv.teto)} m</b></span>` : ""}
          ${fv.pesoVazio ? `<span>Peso vazio <b>${n0(fv.pesoVazio)} kg</b></span>` : ""}
        </div>`;
      }
    }
    // foto da variante; sem ela, a primeira da família
    const temFoto = v.foto && FOTOS[v.foto];
    const nomeFoto = temFoto ? v.foto : f.fotos[0];
    const c = CR[nomeFoto];
    const credito = c ? `Foto: ${esc(c.autor || "autor desconhecido")} · ${esc(c.licenca)}${seguro(c.fonte) ? ` · <a href="${c.fonte}" target="_blank" rel="noopener">fonte</a>` : ""}` : "";
    const mudou = v.mudou && v.mudou.length
      ? `<h4>O que mudou${ant ? ` desde o ${esc(ant.nome)}` : ""}</h4><ul class="mudou">${v.mudou.map(m => `<li>${esc(m)}</li>`).join("")}</ul>`
      : `<h4>Ponto de partida</h4><p class="mudo">Primeira versão da família.</p>`;
    $("#variante-texto").innerHTML = `<div class="var-grade">
      <figure class="var-foto">
        <img src="${abs(fotoUrl(nomeFoto, true))}" alt="${esc(f.nome)} ${esc(v.nome)}" loading="lazy">
        <figcaption>${temFoto ? "" : "Sem foto desta variante; foto da família. "}${credito}</figcaption>
      </figure>
      <div class="var-info">
        <span class="ano">${esc(v.nome)} · ${v.ano}${v.principal ? " · variante da ficha" : ""}</span>
        <dl class="var-dados">
          ${v.motor ? `<dt>Motor</dt><dd>${esc(v.motor)}</dd>` : ""}
          ${v.armas ? `<dt>Armas</dt><dd>${esc(v.armas)}</dd>` : ""}
          ${v.prod ? `<dt>Produção</dt><dd>${esc(v.prod)}</dd>` : ""}
        </dl>
        ${mini}
        <p>${esc(v.texto)}</p>
        ${mudou}
      </div></div>
      ${secoesVariante(v)}`;
  }

  // seções técnicas e sub-versões, abaixo da foto
  const SECOES = [["motor", "Motor e hélice"], ["armas", "Armamento"], ["estrutura", "Estrutura e aerodinâmica"],
    ["sistemas", "Sistemas, blindagem e equipamento"], ["pintura", "Pintura e uso em campo"]];
  function secoesVariante(v) {
    const s = v.secoes || {};
    const blocos = SECOES.filter(([k]) => s[k]).map(([k, t]) => `<section><h4>${t}</h4><p>${esc(s[k])}</p></section>`).join("");
    const subs = v.sub && v.sub.length
      ? `<section class="var-subs"><h4>Sub-versões e blocos de produção</h4><dl>${v.sub.map(x => `<dt>${esc(x.nome)}</dt><dd>${esc(x.texto)}</dd>`).join("")}</dl></section>`
      : "";
    return blocos || subs ? `<div class="var-secoes">${blocos}${subs}</div>` : "";
  }

  function fecharFicha(semHistorico) {
    if (fichaEl.hidden) return;
    fichaEl.hidden = true;
    oscFicha.ativo = false;
    T.pararSom();
    document.body.classList.remove("com-ficha");
    if (!semHistorico && history.state && history.state.ficha) history.back();
    if (voltarFoco && voltarFoco.focus) voltarFoco.focus();
    voltarFoco = null;
  }

  $("#ficha-voltar").addEventListener("click", () => fecharFicha());
  $("#ficha-fechar").addEventListener("click", () => fecharFicha());
  // botões de som: um toca por vez; clicar de novo para
  function tocarSom(b) {
    const tocava = b.classList.contains("tocando");
    $$("#sons button").forEach(x => { x.classList.remove("tocando"); x.textContent = `▶ ${x.dataset.rotulo}`; });
    T.pararSom(true);
    if (tocava) return;
    const fim = () => { b.classList.remove("tocando"); b.textContent = `▶ ${b.dataset.rotulo}`; };
    if (T.motor(b.dataset.som, fim)) { b.classList.add("tocando"); b.textContent = `■ Parar`; }
  }
  $("#ficha-comparar").addEventListener("click", () => {
    if (!atual) return;
    if (!comp.includes(atual.id)) { comp.shift(); comp.push(atual.id); }
    desenharComparador();
    fecharFicha();
    setTimeout(() => $("#comparar").scrollIntoView({ behavior: reduz ? "auto" : "smooth" }), 80);
  });
  addEventListener("popstate", e => {
    const id = e.state && e.state.ficha;
    if (id) abrirFicha(id, true);
    else fecharFicha(true);
  });
  document.addEventListener("keydown", e => {
    if (fichaEl.hidden) return;
    if (e.key === "Escape") fecharFicha();
    if (e.key === "Tab") {                       // foco preso dentro da ficha
      const foco = $$("button, a[href], select, input", fichaEl).filter(x => x.offsetParent !== null);
      if (!foco.length) return;
      const pri = foco[0], ult = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    }
  });

  /* ---------- comparador ---------- */
  const comp = ["p39", "bf109", "spitfire"];
  const opcoes = NAC.map(n => `<optgroup label="${esc(n.nome)}">${FAM.filter(f => f.nacao === n.id).map(f => `<option value="${f.id}">${esc(f.nome)}</option>`).join("")}</optgroup>`).join("");
  $("#comp-escolha").innerHTML = [0, 1, 2].map(i => `<div class="campo"><label for="comp-${i}">${i + 1}</label><select id="comp-${i}">${opcoes}</select></div>`).join("");
  [0, 1, 2].forEach(i => $(`#comp-${i}`).addEventListener("change", e => { comp[i] = e.target.value; desenharComparador(); }));

  const METRICAS = [
    { r: "Velocidade máxima", f: (fi) => fi.velMax, u: v => `${n0(v)} km/h`, melhor: "maior" },
    { r: "Teto de serviço", f: (fi) => fi.teto, u: v => `${n0(v)} m`, melhor: "maior" },
    { r: "Razão de subida", f: (fi) => fi.subida, u: v => `${n1(v)} m/s`, melhor: "maior" },
    { r: "Alcance", f: (fi) => fi.alcance || fi.alcanceTraslado, u: v => `${n0(v)} km`, melhor: "maior" },
    { r: "Potência total", f: (fi, f) => (fi.kn ? null : fi.hp && fi.hp * (f.motor.qtd || 1)), u: v => `${n0(v)} hp`, melhor: "maior" },
    { r: "Potência / peso", f: (fi, f) => (fi.kw && (fi.pesoBruto || fi.pesoMax) ? fi.kw * (f.motor.qtd || 1) / (fi.pesoBruto || fi.pesoMax) : null), u: v => `${n2(v)} kW/kg`, melhor: "maior" },
    { r: "Carga alar", f: (fi) => ((fi.pesoBruto || fi.pesoMax) && fi.areaAsa ? (fi.pesoBruto || fi.pesoMax) / fi.areaAsa : null), u: v => `${n0(v)} kg/m²`, melhor: "menor" },
    { r: "Peso vazio", f: (fi) => fi.pesoVazio, u: v => `${n0(v)} kg`, melhor: null },
    { r: "Envergadura", f: (fi) => fi.envergadura, u: v => `${n2(v)} m`, melhor: null }
  ];
  function desenharComparador() {
    comp.forEach((id, i) => { $(`#comp-${i}`).value = id; });
    const fams = comp.map(familia);
    const fis = fams.map(fichaFam);
    let html = `<div class="comp-linha cab"><span></span>${fams.map(f => `<span>${esc(f.nome)}<br><small class="mono mudo">${esc(fichaFam(f).variante || "")}</small></span>`).join("")}</div>`;
    METRICAS.forEach(m => {
      const vals = fis.map((fi, i) => { const v = m.f(fi, fams[i]); return v ? v : null; });
      const validos = vals.filter(v => v != null);
      if (!validos.length) return;
      const max = Math.max(...validos);
      const alvo = m.melhor === "maior" ? max : m.melhor === "menor" ? Math.min(...validos) : null;
      html += `<div class="comp-linha"><span class="comp-nome">${m.r}${m.melhor === "menor" ? " (menor é melhor)" : ""}</span>${vals.map((v, i) => {
        const melhor = alvo != null && v === alvo && validos.length > 1;
        return `<div class="comp-valor ${melhor ? "melhor" : ""}" data-nome="${esc(fams[i].nome)}"><b>${v != null ? m.u(v) : "—"}</b><div class="barra"><i style="width:${v != null ? (v / max * 100).toFixed(1) : 0}%"></i></div></div>`;
      }).join("")}</div>`;
    });
    html += `<div class="comp-linha"><span class="comp-nome">Armamento</span>${fams.map(f => `<div class="comp-valor" data-nome="${esc(f.nome)}"><b>${esc(ARM[f.ficha] || "—")}</b></div>`).join("")}</div>`;
    html += `<div class="comp-linha"><span class="comp-nome">Produção</span>${fams.map(f => `<div class="comp-valor" data-nome="${esc(f.nome)}"><b>${esc(f.produzidos)}</b></div>`).join("")}</div>`;
    $("#comp").innerHTML = html;
  }
  desenharComparador();

  /* ---------- linha do tempo ---------- */
  (function linhaDoTempo() {
    const ini = 1933, fim = 1946, pos = a => ((a - ini) / (fim - ini) * 100).toFixed(2) + "%";
    let html = `<div class="tempo-eixo">${Array.from({ length: fim - ini }, (_, k) => `<span style="left:${pos(ini + k + 0.5)}">${ini + k}</span>`).join("")}</div>`;
    html += `<div class="guerra" style="left:calc(130px + (100% - 130px) * ${((1939.67 - ini) / (fim - ini)).toFixed(4)});width:calc((100% - 130px) * ${((1945.67 - 1939.67) / (fim - ini)).toFixed(4)})"><span>Guerra · set/1939 – set/1945</span></div>`;
    // cada nome ocupa uma faixa livre, pra não sobrepor (largura estimada em anos)
    const anosPorPx = (fim - ini) / 1000;
    NAC.forEach(n => {
      const l = FAM.filter(f => f.nacao === n.id).sort((a, b) => anoVoo(a) - anoVoo(b));
      const faixas = [];
      const marcos = l.map(f => {
        const a = anoVoo(f), nome = f.nome.split(" / ")[0];
        const larg = (nome.length * 7 + 30) * anosPorPx;
        let k = faixas.findIndex(fimFaixa => fimFaixa < a);
        if (k < 0) { k = faixas.length; faixas.push(0); }
        faixas[k] = a + larg;
        return `<button class="marco" style="left:${pos(a)};top:${8 + k * 26}px" data-id="${f.id}" title="${esc(f.nome)} · 1º voo ${f.primeiroVoo.replace("-", "/")}"><i></i>${esc(nome)}</button>`;
      });
      html += `<div class="tempo-faixa"><span>${insignia(n.id)}${esc(n.nome)}</span><div class="tempo-trilho" style="height:${faixas.length * 26 + 14}px">${marcos.join("")}</div></div>`;
    });
    $("#tempo").innerHTML = html;
    $$("#tempo .marco").forEach(b => b.addEventListener("click", () => abrirFicha(b.dataset.id)));
  })();

  /* ---------- bancada ---------- */
  const oscLab = new Osc($("#lab-osc"));
  oscs.push(oscLab);
  function atualizarLab() {
    const cil = +$("#lab-motor").value, rpm = +$("#lab-rpm").value;
    const hzL = cil * rpm / 120;
    oscLab.set(hzL, "pulso");
    $("#lab-rpm-txt").textContent = `${n0(rpm)} rpm`;
    $("#lab-hz").textContent = n0(hzL);
    $("#lab-hz-top").textContent = `${n0(hzL)} Hz`;
    $("#lab-ms").textContent = `${n1(1000 / hzL)} ms`;
    $("#lab-velas").textContent = n0(cil * 2);
    $("#lab-desc").textContent = `${cil} cilindros · ${n0(rpm)} rpm`;
  }
  $("#lab-motor").addEventListener("change", atualizarLab);
  $("#lab-rpm").addEventListener("input", atualizarLab);
  atualizarLab();
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => { oscLab.ativo = e.isIntersecting; })).observe($("#lab-osc"));
  } else oscLab.ativo = true;

  /* ---------- créditos ---------- */
  const usadas = new Set(["p39-noite", ...FAM.flatMap(f => [...f.fotos, ...f.variantes.map(v => v.foto).filter(Boolean)])]);
  $("#creditos-lista").innerHTML = Object.keys(CR).filter(k => usadas.has(k)).map(k => {
    const c = CR[k], fonte = seguro(c.fonte);
    const titulo = fonte ? decodeURIComponent(fonte.split("/").pop()).replace(/^File:/, "").replace(/_/g, " ").replace(/\.(jpe?g|png|tiff?)$/i, "") : k;
    const lic = seguro(c.licencaUrl) ? `<a href="${c.licencaUrl}" target="_blank" rel="noopener">${esc(c.licenca)}</a>` : esc(c.licenca);
    return `<li>${fonte ? `<a href="${fonte}" target="_blank" rel="noopener">${esc(titulo)}</a>` : esc(titulo)} — ${esc(c.autor || "autor desconhecido")} · ${lic}</li>`;
  }).join("") + ((window.SONS && window.SONS.creditos) || []).filter(Boolean).map(c =>
    `<li>Som: <a href="${seguro(c.fonte) || "#"}" target="_blank" rel="noopener">${esc(c.titulo)}</a> — ${esc(c.autor)} · ${esc(c.licenca)}</li>`).join("");

  /* ---------- botão de som + mini visualizador ---------- */
  const somBtn = $("#som-btn"), somViz = $("#som-viz"), sg = somViz.getContext("2d");
  let dadosViz = null;
  function estadoSom(ligado) {
    somBtn.setAttribute("aria-pressed", String(ligado));
    somBtn.setAttribute("aria-label", ligado ? "Desligar a trilha de fundo" : "Ligar a trilha de fundo");
    $("#som-txt").textContent = ligado ? "Som on" : "Som off";
  }
  T.on(estadoSom);
  somBtn.addEventListener("click", () => { if (T.tocando()) T.desligar(); else T.ligar(); });
  function desenharSomViz() {
    const w = 44, h = 16;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (somViz.width !== w * dpr) { somViz.width = w * dpr; somViz.height = h * dpr; }
    sg.setTransform(dpr, 0, 0, dpr, 0, 0);
    sg.clearRect(0, 0, w, h);
    const an = T.analisador(), on = T.tocando();
    if (an && on) { if (!dadosViz) dadosViz = new Uint8Array(an.frequencyBinCount); an.getByteFrequencyData(dadosViz); }
    sg.fillStyle = on ? "#ffa31a" : "#4a4f55";
    for (let k = 0; k < 9; k++) {
      const v = on && dadosViz ? dadosViz[1 + k * 2] / 255 : 0.12;
      const bh = Math.max(2, v * h);
      sg.fillRect(k * 5, h - bh, 3, bh);
    }
  }

  /* ---------- laço de animação ---------- */
  function laco() {
    oscs.forEach(o => { if (o.ativo) o.desenhar(); });
    desenharSomViz();
    requestAnimationFrame(laco);
  }
  requestAnimationFrame(laco);

  /* ---------- entrada no site (chamado pela abertura) ---------- */
  function revelar() {
    document.body.classList.remove("trancado");
    estadoSom(T.tocando());
    const m = location.hash.match(/^#ficha-([\w-]+)$/);
    if (m && familia(m[1])) {
      history.replaceState(null, "", location.pathname);
      abrirFicha(m[1]);
    }
  }
  window.Hangar = { revelar, abrirFicha };
})();
