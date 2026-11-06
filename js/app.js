/* =========================================================
   HANGAR — catálogo, ficha, comparador, linha do tempo, bancada
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const NAC = window.NACOES, FAM = window.FAMILIAS, FICHAS = window.FICHAS || {};
  const AJ = window.AJUSTES_FICHA || {}, ARM = window.ARMAMENTO || {}, CR = window.CREDITOS || {}, FOTOS = window.FOTOS || {};
  const T = window.Trilha;
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
    [FAM.length, "famílias de caças"], [NAC.length, "nações"], [totalVariantes, "variantes"], [Object.keys(FOTOS).length, "fotos"]
  ].map(([v, r]) => `<div><b>${v}</b><span>${r}</span></div>`).join("");
  $("#portao-sub").textContent = `${FAM.length} famílias de caças, ${NAC.length} nações, fichas completas e o lado elétrico de cada avião.`;
  $("#hero-foto").style.backgroundImage = `url("${abs(fotoUrl("p39-noite"))}")`;
  $("#hero-legenda").textContent = "Bell P-39 Airacobra disparando todas as armas à noite · USAAF";
  $("#abrir-destaque").addEventListener("click", () => abrirFicha("p39"));

  /* ---------- hangar: nações, filtros e cards ---------- */
  const estado = { nacao: "", motor: "", papel: "", ordem: "voo", busca: "" };
  const papeis = [...new Set(FAM.map(f => f.papel))].sort();
  $("#f-papel").innerHTML += papeis.map(p => `<option>${esc(p)}</option>`).join("");

  function contaNacao(id) {
    const proj = FAM.filter(f => f.nacao === id).length;
    const usados = FAM.filter(f => f.nacao !== id && f.operadores.includes(id)).length;
    return { proj, usados };
  }
  function desenharNacoes() {
    $("#nacoes").innerHTML =
      `<button class="nacao ${estado.nacao === "" ? "on" : ""}" data-n=""><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13" fill="none" stroke="#8f8d87" stroke-width="1.5"/><path d="M3 16h26M16 3c-6 7-6 19 0 26M16 3c6 7 6 19 0 26" fill="none" stroke="#8f8d87" stroke-width="1.2"/></svg><span><b>Todas</b><small>${FAM.length} famílias</small></span></button>` +
      NAC.map(n => {
        const c = contaNacao(n.id);
        const proj = `${c.proj} ${c.proj === 1 ? "projetada" : "projetadas"}`;
        const usados = c.usados ? ` · ${c.usados} ${c.usados === 1 ? "usada" : "usadas"}` : "";
        return `<button class="nacao ${estado.nacao === n.id ? "on" : ""}" data-n="${n.id}">${insignia(n.id)}<span><b>${esc(n.nome)}</b><small>${proj}${usados}</small></span></button>`;
      }).join("");
    $$("#nacoes .nacao").forEach(b => b.addEventListener("click", () => { estado.nacao = b.dataset.n; desenharNacoes(); desenharGrade(); }));
  }

  function filtradas() {
    const q = estado.busca.trim().toLowerCase();
    let l = FAM.filter(f => {
      if (estado.nacao && f.nacao !== estado.nacao && !f.operadores.includes(estado.nacao)) return false;
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
      const usado = estado.nacao && f.nacao !== estado.nacao;
      return `<button class="card" data-id="${f.id}">
        <div class="card-foto" style="background-image:url('${abs(fotoUrl(f.fotos[0], true))}')">${insignia(f.nacao, "ins")}</div>
        <div class="card-corpo">
          <span class="card-meta">${esc(f.fabricante)} · ${f.primeiroVoo.slice(0, 4)}${usado ? ` · <span class="ambar">usado pela ${esc(n.nome)}</span>` : ""}</span>
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
    $$("#grade .card").forEach(c => c.addEventListener("click", () => abrirFicha(c.dataset.id)));
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
    $("#ficha-historia").textContent = f.historia;

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

    // operadores
    $("#operadores").innerHTML = f.operadores.map(o => nacao(o)).filter(Boolean)
      .map(o => `<span>${insignia(o.id)}${esc(o.nome)}</span>`).join("");

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
    const v = f.variantes[k];
    $$("#variantes button").forEach((b, j) => b.classList.toggle("on", j === k));
    let mini = "";
    if (v.ficha) {
      const fv = fichaDe(v.ficha);
      if (fv) {
        mini = `<div class="variante-mini">
          ${fv.motor ? `<span>Motor <b>${esc(fv.motor)}</b></span>` : ""}
          ${fv.hp ? `<span>Potência <b>${n0(fv.hp)} hp</b></span>` : ""}
          ${fv.velMax ? `<span>Vel. máx. <b>${n0(fv.velMax)} km/h</b></span>` : ""}
          ${fv.teto ? `<span>Teto <b>${n0(fv.teto)} m</b></span>` : ""}
          ${fv.pesoVazio ? `<span>Peso vazio <b>${n0(fv.pesoVazio)} kg</b></span>` : ""}
          ${ARM[v.ficha] ? `<span>Armas <b>${esc(ARM[v.ficha])}</b></span>` : ""}
        </div>`;
      }
    }
    $("#variante-texto").innerHTML = `<span class="ano">${esc(v.nome)} · ${v.ano}${v.principal ? " · variante da ficha" : ""}</span><p>${esc(v.texto)}</p>${mini}`;
  }

  function fecharFicha(semHistorico) {
    if (fichaEl.hidden) return;
    fichaEl.hidden = true;
    oscFicha.ativo = false;
    document.body.classList.remove("com-ficha");
    if (!semHistorico && history.state && history.state.ficha) history.back();
    if (voltarFoco && voltarFoco.focus) voltarFoco.focus();
    voltarFoco = null;
  }

  $("#ficha-voltar").addEventListener("click", () => fecharFicha());
  $("#ficha-fechar").addEventListener("click", () => fecharFicha());
  $("#ouvir-motor").addEventListener("click", () => { if (atual) T.motor(atual.motor); });
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

  /* ---------- projetos ---------- */
  const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z]+/g, "-");
  $("#projetos-grid").innerHTML = (window.PROJETOS || []).map(p => `
    <article class="projeto">
      <div class="projeto-foto" style="background-image:url('${abs(fotoUrl(p.foto, true))}')"></div>
      <div class="projeto-corpo">
        <span class="status s-${slug(p.status)}">${esc(p.status)}</span>
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.notas)}</p>
        <dl class="mini-specs">
          <dt>Tipo</dt><dd>${esc(p.tipo)}</dd>
          <dt>Envergadura</dt><dd>${esc(p.envergadura)}</dd>
          <dt>Motor</dt><dd>${esc(p.motor)}</dd>
          <dt>Material</dt><dd>${esc(p.material)}</dd>
        </dl>
      </div>
    </article>`).join("");

  /* ---------- créditos ---------- */
  $("#creditos-lista").innerHTML = Object.keys(CR).map(k => {
    const c = CR[k], fonte = seguro(c.fonte);
    const titulo = fonte ? decodeURIComponent(fonte.split("/").pop()).replace(/^File:/, "").replace(/_/g, " ").replace(/\.(jpe?g|png|tiff?)$/i, "") : k;
    const lic = seguro(c.licencaUrl) ? `<a href="${c.licencaUrl}" target="_blank" rel="noopener">${esc(c.licenca)}</a>` : esc(c.licenca);
    return `<li>${fonte ? `<a href="${fonte}" target="_blank" rel="noopener">${esc(titulo)}</a>` : esc(titulo)} — ${esc(c.autor || "autor desconhecido")} · ${lic}</li>`;
  }).join("");

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
