/* =========================================================
   TRILHA DE FUNDO + SONS DE MOTOR
   Trilha original, gerada ao vivo (Web Audio), no clima de
   synth-pop psicodélico: 115 BPM, Mi♭ menor, groove de baixo,
   bateria seca de disco e pad com phaser e chorus.
   Nenhum arquivo de áudio, nenhuma música copiada.
   ========================================================= */
window.Trilha = (() => {
  const BPM = 115;
  const BEAT = 60 / BPM, STEP = BEAT / 4, BAR = BEAT * 4;
  const hz = n => 440 * Math.pow(2, (n - 69) / 12);

  // Ebm9 | Ebm9 | Cbmaj7 | Cbmaj7 | Abm9 | Abm7 | Bbm7 | Bb7
  const ACORDES = [
    { baixo: 39, notas: [58, 61, 65, 66], q: "m" },
    { baixo: 39, notas: [58, 61, 65, 66], q: "m" },
    { baixo: 35, notas: [58, 59, 63, 66], q: "M" },
    { baixo: 35, notas: [58, 59, 63, 66], q: "M" },
    { baixo: 44, notas: [58, 59, 63, 66], q: "m" },
    { baixo: 44, notas: [56, 59, 63, 66], q: "m" },
    { baixo: 46, notas: [56, 61, 65, 68], q: "m" },
    { baixo: 46, notas: [58, 62, 65, 68], q: "D" }
  ];
  // linha de baixo: [passo, intervalo, duração em passos]
  const BAIXO = [[0, 0, 3], [3, 0, 1], [6, 12, 1], [7, 10, 1], [8, 7, 2], [11, 0, 1], [12, 0, 2], [14, 3, 1], [15, 5, 1]];
  // frase do sintetizador (original, pentatônica de Mi♭ menor)
  const FRASE = [
    [[0, 70, 2], [2, 73, 2], [4, 75, 5], [10, 73, 2], [12, 70, 4]],
    [[0, 66, 2], [2, 68, 2], [4, 70, 7], [12, 68, 2], [14, 66, 2]]
  ];

  let ctx = null, master, musica, sfx, analyser, quente, ruido, curva;
  let padBus, padPump, phaserLfo, revSend, ecoSend;
  let tocando = false, timer = null, prox = 0, compasso = 0;

  function init() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();

    master = ctx.createGain(); master.gain.value = 0.32;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.25;
    analyser = ctx.createAnalyser(); analyser.fftSize = 64; analyser.smoothingTimeConstant = 0.8;
    master.connect(comp); comp.connect(analyser); analyser.connect(ctx.destination);

    // música passa por um passa-baixa "quente" (usado nas aberturas de filtro)
    musica = ctx.createGain(); musica.gain.value = 0;
    quente = ctx.createBiquadFilter(); quente.type = "lowpass"; quente.frequency.value = 9000; quente.Q.value = 0.7;
    musica.connect(quente); quente.connect(master);
    sfx = ctx.createGain(); sfx.gain.value = 1.6; sfx.connect(master);

    ruido = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = ruido.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    curva = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curva[i] = (1 + 4) * x / (1 + 4 * Math.abs(x)); }

    // reverb
    const rev = ctx.createConvolver();
    const len = ctx.sampleRate * 2.8, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const b = ir.getChannelData(c); for (let i = 0; i < len; i++) b[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    rev.buffer = ir;
    revSend = ctx.createGain(); revSend.gain.value = 0.35;
    revSend.connect(rev); rev.connect(musica);

    // eco de colcheia pontuada
    const eco = ctx.createDelay(2); eco.delayTime.value = BEAT * 0.75;
    const fb = ctx.createGain(); fb.gain.value = 0.38;
    const ecoLp = ctx.createBiquadFilter(); ecoLp.type = "lowpass"; ecoLp.frequency.value = 2400;
    eco.connect(ecoLp); ecoLp.connect(fb); fb.connect(eco); ecoLp.connect(musica);
    ecoSend = ctx.createGain(); ecoSend.gain.value = 0.4; ecoSend.connect(eco);

    // pad: phaser (4 passa-tudo modulados) + chorus + "pump" do bumbo
    padBus = ctx.createGain();
    const seco = ctx.createGain(); seco.gain.value = 0.6;
    const molhado = ctx.createGain(); molhado.gain.value = 0.55;
    let elo = padBus;
    phaserLfo = ctx.createOscillator(); phaserLfo.frequency.value = 0.18;
    const prof = ctx.createGain(); prof.gain.value = 650;
    phaserLfo.connect(prof);
    for (let i = 0; i < 4; i++) {
      const ap = ctx.createBiquadFilter(); ap.type = "allpass"; ap.frequency.value = 900 + i * 300; ap.Q.value = 0.6;
      prof.connect(ap.frequency); elo.connect(ap); elo = ap;
    }
    elo.connect(molhado); padBus.connect(seco);
    const chorus = ctx.createDelay(0.05); chorus.delayTime.value = 0.014;
    const chLfo = ctx.createOscillator(), chProf = ctx.createGain();
    chLfo.frequency.value = 0.7; chProf.gain.value = 0.003;
    chLfo.connect(chProf); chProf.connect(chorus.delayTime);
    padPump = ctx.createGain();
    seco.connect(padPump); molhado.connect(padPump); molhado.connect(chorus); chorus.connect(padPump);
    padPump.connect(musica); padPump.connect(revSend);
    phaserLfo.start(); chLfo.start();
    return ctx;
  }

  function fonteRuido(t, dur) {
    const s = ctx.createBufferSource(); s.buffer = ruido; s.loop = true;
    s.start(t, Math.random() * 1.5); s.stop(t + dur); return s;
  }
  function env(g, t, a, pico, dur) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(pico, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  }
  function filtro(tipo, f, q) { const b = ctx.createBiquadFilter(); b.type = tipo; b.frequency.value = f; if (q != null) b.Q.value = q; return b; }

  /* ---------- bateria ---------- */
  function bumbo(t, v = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(115, t); o.frequency.exponentialRampToValueAtTime(46, t + 0.09);
    env(g, t, 0.003, 0.9 * v, 0.34);
    o.connect(g); g.connect(musica); o.start(t); o.stop(t + 0.36);
    // bombeia o pad
    padPump.gain.setValueAtTime(0.35, t);
    padPump.gain.linearRampToValueAtTime(1, t + BEAT * 0.85);
  }
  function caixa(t, v = 1) {
    const n = fonteRuido(t, 0.25), bp = filtro("bandpass", 1900, 0.8), g = ctx.createGain();
    env(g, t, 0.002, 0.42 * v, 0.2);
    n.connect(bp); bp.connect(g); g.connect(musica); g.connect(revSend);
    const o = ctx.createOscillator(), og = ctx.createGain();
    o.type = "triangle"; o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(150, t + 0.06);
    env(og, t, 0.002, 0.3 * v, 0.1);
    o.connect(og); og.connect(musica); o.start(t); o.stop(t + 0.12);
  }
  function chimbal(t, v, aberto) {
    const dur = aberto ? 0.22 : 0.035;
    const n = fonteRuido(t, dur + 0.02), hp = filtro("highpass", aberto ? 7000 : 8500), g = ctx.createGain();
    env(g, t, 0.001, v, dur);
    n.connect(hp); hp.connect(g); g.connect(musica);
  }
  function chocalho(t, v) {
    const n = fonteRuido(t, 0.06), bp = filtro("bandpass", 5200, 1.2), g = ctx.createGain();
    env(g, t, 0.012, v, 0.05);
    n.connect(bp); bp.connect(g); g.connect(musica);
  }

  /* ---------- harmonia ---------- */
  function pad(t, notas, dur) {
    const lp = filtro("lowpass", 1300, 0.9);
    lp.frequency.setValueAtTime(900, t);
    lp.frequency.linearRampToValueAtTime(1700, t + dur * 0.6);
    lp.frequency.linearRampToValueAtTime(1100, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.05, t + 0.35);
    g.gain.setValueAtTime(0.05, t + dur - 0.2);
    g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.25);
    notas.forEach(n => {
      [-7, 7].forEach(dt => {
        const o = ctx.createOscillator();
        o.type = "sawtooth"; o.frequency.value = hz(n); o.detune.value = dt;
        o.connect(lp); o.start(t); o.stop(t + dur + 0.3);
      });
    });
    lp.connect(g); g.connect(padBus);
  }
  function baixo(t, nota, dur) {
    const o = ctx.createOscillator(), sub = ctx.createOscillator();
    o.type = "sawtooth"; sub.type = "sine";
    o.frequency.value = hz(nota); sub.frequency.value = hz(nota);
    const lp = filtro("lowpass", 700, 6);
    lp.frequency.setValueAtTime(1100, t); lp.frequency.exponentialRampToValueAtTime(320, t + 0.18);
    const sh = ctx.createWaveShaper(); sh.curve = curva;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.32, t + 0.008);
    g.gain.setValueAtTime(0.28, t + Math.max(0.02, dur - 0.04));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp); lp.connect(sh); sh.connect(g); sub.connect(g); g.connect(musica);
    [o, sub].forEach(x => { x.start(t); x.stop(t + dur + 0.02); });
  }
  function sinte(t, nota, dur) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator();
    o.type = "square"; o2.type = "triangle"; o2.detune.value = 5;
    o.frequency.value = hz(nota); o2.frequency.value = hz(nota);
    const vib = ctx.createOscillator(), vg = ctx.createGain();
    vib.frequency.value = 5.2; vg.gain.value = hz(nota) * 0.008;
    vib.connect(vg); vg.connect(o.frequency); vg.connect(o2.frequency);
    const lp = filtro("lowpass", 2000, 1);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.04, t + 0.04);
    g.gain.setValueAtTime(0.035, t + dur - 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.15);
    o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(musica); g.connect(ecoSend); g.connect(revSend);
    [o, o2, vib].forEach(x => { x.start(t); x.stop(t + dur + 0.2); });
  }
  function estatica(t) {        // chiado de rádio entre as partes
    const n = fonteRuido(t, 1.2), bp = filtro("bandpass", 600, 2), g = ctx.createGain();
    bp.frequency.setValueAtTime(600, t); bp.frequency.exponentialRampToValueAtTime(3200, t + 1.1);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.03, t + 0.6); g.gain.linearRampToValueAtTime(0.0001, t + 1.2);
    n.connect(bp); bp.connect(g); g.connect(musica);
  }

  /* ---------- sequenciador ---------- */
  function tocarCompasso(t, n) {
    const i = n % 8, a = ACORDES[i];
    const parte = n % 32;
    const quebra = parte >= 24 && parte < 28;          // breakdown: sem bumbo e caixa
    pad(t, a.notas, BAR);
    // baixo
    BAIXO.forEach(([s, iv, l]) => {
      if (quebra && s % 4) return;
      let intervalo = iv;
      if (a.q !== "m" && iv === 3) intervalo = 4;
      if (a.q === "M" && iv === 10) intervalo = 11;
      baixo(t + s * STEP, a.baixo + intervalo, l * STEP * 0.92);
    });
    // bateria
    for (let s = 0; s < 16; s++) {
      const ts = t + s * STEP + (s % 2 ? STEP * 0.1 : 0);   // leve swing
      if (!quebra && s % 4 === 0) bumbo(ts);
      if (!quebra && (s === 4 || s === 12)) caixa(ts);
      chimbal(ts, s % 4 === 0 ? 0.07 : s % 2 ? 0.035 : 0.05, false);
      if (!quebra && s % 4 === 2 && Math.random() < 0.55) chimbal(ts, 0.045, true);
      chocalho(ts, 0.018);
    }
    if (!quebra && i === 7 && Math.random() < 0.6) [13, 14, 15].forEach((s, k) => caixa(t + s * STEP, 0.35 + k * 0.15));
    // frase do sintetizador em blocos alternados
    if (Math.floor(n / 8) % 2 === 1 && (i === 0 || i === 1 || i === 4 || i === 5)) {
      FRASE[i % 2].forEach(([s, nota, l]) => sinte(t + s * STEP, nota, l * STEP));
    }
    if (n % 16 === 15) estatica(t + BAR - 1.2);
    // filtro abre no começo e fecha/abre no breakdown
    if (parte === 24) { quente.frequency.setValueAtTime(9000, t); quente.frequency.exponentialRampToValueAtTime(900, t + BAR * 2); }
    if (parte === 27) { quente.frequency.setValueAtTime(900, t); quente.frequency.exponentialRampToValueAtTime(9000, t + BAR); }
  }

  function agenda() {
    while (prox < ctx.currentTime + 0.35) {
      tocarCompasso(prox, compasso);
      prox += BAR; compasso++;
    }
  }

  function ligar(quando) {
    if (!init()) return;
    if (ctx.state === "suspended") ctx.resume();
    if (tocando) return;
    tocando = true;
    const t = Math.max(quando || 0, ctx.currentTime + 0.1);
    prox = t; compasso = 0;
    musica.gain.cancelScheduledValues(ctx.currentTime);
    musica.gain.setValueAtTime(0.0001, ctx.currentTime);
    musica.gain.linearRampToValueAtTime(1, t + 4);           // entra devagar
    quente.frequency.setValueAtTime(700, t);
    quente.frequency.exponentialRampToValueAtTime(9000, t + BAR * 4);
    agenda();
    timer = setInterval(agenda, 80);
    avisa();
  }
  function desligar() {
    if (!tocando) return;
    tocando = false;
    clearInterval(timer);
    const t = ctx.currentTime;
    musica.gain.cancelScheduledValues(t);
    musica.gain.setValueAtTime(musica.gain.value, t);
    musica.gain.linearRampToValueAtTime(0.0001, t + 0.8);
    avisa();
  }

  /* ---------- sons de motor: gravações reais em audio/ ---------- */
  // Cada clipe é um trecho (ini–fim) de um arquivo. Toca pelo Web Audio, com ganho próprio
  // e um compressor na saída pra nivelar gravações baixas e altas sem estourar.
  const SONS = window.SONS || { pasta: "", clipes: {}, familias: {} };
  const buffers = {};                       // arq → Promise<AudioBuffer>
  let saidaSons = null, tocandoSons = [], elAtual = null;
  function carregar(arq) {
    if (!buffers[arq]) {
      buffers[arq] = fetch(SONS.pasta + arq)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then(b => new Promise((ok, erro) => {
          const AC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
          new AC(1, 1, 44100).decodeAudioData(b, ok, erro);
        }));
      buffers[arq].catch(() => {});
    }
    return buffers[arq];
  }
  function saida() {
    if (!saidaSons) {
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14; comp.knee.value = 10; comp.ratio.value = 6; comp.attack.value = 0.004; comp.release.value = 0.2;
      saidaSons = ctx.createGain();
      saidaSons.gain.value = 0.9;
      saidaSons.connect(comp);
      comp.connect(ctx.destination);
    }
    return saidaSons;
  }
  function infoFamilia(id) {
    const f = SONS.familias[id] || { clipes: [] };
    return { nota: f.nota || "", mesmo: !!f.mesmo, clipes: (f.clipes || []).filter(n => SONS.clipes[n]).map(n => ({ nome: n, ...SONS.clipes[n] })) };
  }
  function pararSom(rapido) {
    const t = ctx ? ctx.currentTime : 0, d = rapido ? 0.12 : 0.5;
    tocandoSons.forEach(s => {
      try {
        s.g.gain.cancelScheduledValues(t);
        s.g.gain.setValueAtTime(Math.max(0.0001, s.g.gain.value), t);
        s.g.gain.exponentialRampToValueAtTime(0.0001, t + d);
        s.src.stop(t + d + 0.05);
      } catch (e) {}
    });
    tocandoSons = [];
    if (elAtual) { elAtual.pause(); elAtual = null; }
  }
  // agenda um trecho de um buffer já carregado; devolve a duração
  function agendar(buf, c, quando, opc = {}) {
    const ini = opc.ini ?? c.ini ?? 0, fim = Math.min(opc.fim ?? c.fim ?? buf.duration, buf.duration);
    const dur = Math.max(0.1, fim - ini), ganho = (c.ganho || 1) * (opc.ganho ?? 1);
    const fadeIn = opc.fadeIn ?? 0.25, fadeOut = Math.min(opc.fadeOut ?? 1.2, dur / 2);
    const src = ctx.createBufferSource(), g = ctx.createGain();
    src.buffer = buf;
    g.gain.setValueAtTime(0.0001, quando);
    g.gain.exponentialRampToValueAtTime(ganho, quando + fadeIn);
    g.gain.setValueAtTime(ganho, quando + dur - fadeOut);
    g.gain.exponentialRampToValueAtTime(0.0001, quando + dur);
    src.connect(g); g.connect(saida());
    src.start(quando, ini, dur + 0.05);
    const item = { src, g };
    tocandoSons.push(item);
    src.onended = () => { tocandoSons = tocandoSons.filter(x => x !== item); if (opc.aoFim) opc.aoFim(); };
    return dur;
  }
  function abaixaMusica(dur) {
    if (!tocando) return;
    const t = ctx.currentTime;
    musica.gain.cancelScheduledValues(t);
    musica.gain.setValueAtTime(musica.gain.value, t);
    musica.gain.linearRampToValueAtTime(0.2, t + 0.15);
    musica.gain.setValueAtTime(0.2, t + dur - 0.3);
    musica.gain.linearRampToValueAtTime(1, t + dur);
  }
  // "ouvir o motor" na ficha: toca um clipe pelo nome; aoFim avisa a interface
  function motor(nome, aoFim) {
    const c = SONS.clipes[nome];
    if (!c || !init()) return false;
    if (ctx.state === "suspended") ctx.resume();
    pararSom(true);
    const fimOk = () => { if (aoFim) aoFim(); };
    carregar(c.arq).then(buf => {
      const dur = agendar(buf, c, ctx.currentTime + 0.05, { aoFim: fimOk });
      abaixaMusica(dur + 0.4);
    }).catch(() => {
      // sem fetch (página aberta direto do disco): toca pelo elemento de áudio
      const a = new Audio(`${SONS.pasta}${c.arq}#t=${c.ini},${c.fim}`);
      a.volume = Math.min(1, c.ganho || 1);
      a.ontimeupdate = () => { if (a.currentTime >= c.fim) { a.pause(); fimOk(); } };
      a.onended = fimOk;
      elAtual = a;
      a.play().catch(fimOk);
    });
    return true;
  }

  // abertura: partida real do Allison V-1710. Tempos medidos na gravação (a partir do início do trecho):
  // 0,25 s o arranque começa a girar · 6,0 s o motor pega · 7,0 s pico
  const AB = { arranque: 0.25, pega: 6.0, pico: 7.0, fim: 9.5 };
  const CURVA_ABERTURA = [[0, 0], [0.25, 0], [0.9, 140], [5.6, 190], [6.0, 260], [6.5, 900], [7.0, 1500], [8.2, 1150], [9.5, 1050], [30, 1050]];
  function rpmAbertura(dt) {          // dt = segundos desde o início do trecho da partida
    const c = CURVA_ABERTURA;
    if (dt <= 0) return 0;
    for (let i = 1; i < c.length; i++) {
      if (dt <= c[i][0]) { const [t0, r0] = c[i - 1], [t1, r1] = c[i]; return r0 + (r1 - r0) * (dt - t0) / (t1 - t0); }
    }
    return c[c.length - 1][1];
  }
  // toca a partida em t (relógio do áudio) e, quando o motor pega, emenda a decolagem por baixo
  function partida(t) {
    const ab = SONS.abertura || {};
    const c = SONS.clipes[ab.partida], v = SONS.clipes[ab.voo];
    if (!c || !init()) return;
    carregar(c.arq).then(buf => agendar(buf, c, Math.max(ctx.currentTime, t), { fadeIn: 0.15, fadeOut: 2.2 })).catch(() => {});
    if (v) carregar(v.arq).then(buf => agendar(buf, v, Math.max(ctx.currentTime, t + AB.pico - 0.2), { ini: 12.5, fim: 21, ganho: 0.8, fadeIn: 1.2, fadeOut: 3.5 })).catch(() => {});
  }
  function pararPartida() { pararSom(true); }
  // pré-carrega os arquivos da abertura enquanto o portão está na tela
  function preparar() {
    const ab = SONS.abertura || {};
    return Promise.all([ab.partida, ab.voo].filter(n => SONS.clipes[n]).map(n => carregar(SONS.clipes[n].arq))).catch(() => {});
  }

  /* ---------- avisos para a interface ---------- */
  const ouvintes = new Set();
  function avisa() { ouvintes.forEach(fn => fn(tocando)); }

  return {
    init, ligar, desligar, motor, infoFamilia, pararSom, tempos: AB, partida, pararPartida, preparar, rpmAbertura,
    tocando: () => tocando,
    ativo: () => !!ctx,
    contexto: () => ctx,
    analisador: () => analyser,
    volume: v => { if (init()) master.gain.value = v; },
    on: fn => ouvintes.add(fn)
  };
})();
