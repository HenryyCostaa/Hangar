/* =========================================================
   Portão + abertura: o P-39 feito de partículas (WebGL).
   Dezenas de milhares de pontos, cada um com o brilho de um
   pedacinho da foto noturna do P-39 disparando, voam de todos
   os lados e montam o avião em 3D (claro = mais perto), no
   ritmo da gravação do Allison V-1710 dando partida. Quando o
   motor pega, uma onda passa pelos pontos. Arraste pra girar,
   role pra dar zoom.
   ========================================================= */
(() => {
  const $ = s => document.querySelector(s);
  const T = window.Trilha;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portao = $("#portao"), ab = $("#abertura");
  const glc = $("#ab-foto3d");
  const bSom = $("#ligar-som"), bMudo = $("#ligar-mudo");

  /* ---------- linha do tempo (medida na gravação) ---------- */
  const P = T.tempos;
  const T_CLIPE = 2.75;                      // o trecho da gravação começa aqui
  const T_PARTIDA = T_CLIPE + P.arranque;    // o arranque começa a girar
  const T_PEGA = T_CLIPE + P.pega;           // o motor pega
  const T_FINAL = T_PEGA + 2.0;              // título e botão de entrar
  const ESPERA = 7;                          // segundos parado até entrar sozinho
  const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };

  /* ---------- a foto ---------- */
  const foto = new Image();
  const fotoPronta = new Promise(r => { foto.onload = () => r(true); foto.onerror = () => r(false); });
  foto.src = "img/p39-noite-ab.jpg";

  let W = 0, H = 0, dpr = 1, PASSO = 2.5;
  function enquadrar() {
    const fa = foto.naturalWidth / foto.naturalHeight;
    let fw, fh;
    if (W < 760) { fw = W * 1.25; fh = fw / fa; }
    else if (W / H > fa) { fw = W * 0.98; fh = fw / fa; }
    else { fh = H; fw = H * fa; }
    return { x: (W - fw) / 2 - (W < 760 ? W * 0.02 : 0), y: (H - fh) / 2, w: fw, h: fh };
  }
  function lerFoto(Q, cols, rows, blur) {
    const c = document.createElement("canvas"); c.width = cols; c.height = rows;
    const k = c.getContext("2d", { willReadFrequently: true });
    k.fillStyle = "#000"; k.fillRect(0, 0, cols, rows);
    if (blur) k.filter = `blur(${blur}px)`;
    k.drawImage(foto, Q.x / PASSO, Q.y / PASSO, Q.w / PASSO, Q.h / PASSO);
    const d = k.getImageData(0, 0, cols, rows).data, o = new Float32Array(cols * rows);
    for (let i = 0; i < o.length; i++) o[i] = (d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11) / 255;
    return o;
  }

  /* ---------- WebGL: um ponto por pedacinho da foto ---------- */
  const VS = `
    attribute vec3 alvo; attribute vec3 orig; attribute vec2 info;   // info: brilho, atraso
    uniform vec2 res; uniform float t, tPega, rotA, rotB, zoom, tam, tremor, dist;
    varying float vl; varying float va;
    float sst(float a, float b, float x){ float k = clamp((x - a) / (b - a), 0., 1.); return k * k * (3. - 2. * k); }
    void main(){
      float e = 1. - sst(info.y, info.y + 2.4, t);
      vec3 p = alvo + orig * e * e;
      // tremor do arranque
      p.xy += tremor * vec2(sin(t * 61. + alvo.y * .05), sin(t * 53. + alvo.x * .05));
      // onda quando o motor pega, saindo do nariz
      float u = t - tPega;
      if (u > 0. && u < 3.5) {
        float d = length(alvo.xy - vec2(res.x * .26, res.y * .1));
        float f = u * 900.;
        p.z += 70. * exp(-pow((d - f) / 90., 2.)) * exp(-u * 1.1) * (.4 + info.x);
      }
      float ca = cos(rotA), sa = sin(rotA), cb = cos(rotB), sb = sin(rotB);
      float x1 = p.x * ca + p.z * sa, z1 = -p.x * sa + p.z * ca;
      float y2 = p.y * cb - z1 * sb, z2 = p.y * sb + z1 * cb;
      float s = dist / max(40., dist - z2) * zoom;
      vec2 scr = vec2(x1, y2) * s;
      gl_Position = vec4(scr.x / res.x * 2., -scr.y / res.y * 2., 0., 1.);
      gl_PointSize = max(1., tam * s);
      vl = info.x;
      va = 1. - e * .6;
    }`;
  const FS = `
    precision mediump float;
    varying float vl; varying float va;
    uniform float clarao;
    void main(){
      float l = clamp(vl * 1.15, 0., 1.);
      vec3 cor = mix(vec3(.93, .92, .89) * (.25 + .9 * l), vec3(1., .66, .2), smoothstep(.86, .97, vl));
      cor += clarao;
      gl_FragColor = vec4(cor, (.35 + .65 * l) * va);
    }`;

  let GL = null;
  function iniciarGL() {
    const gl = glc.getContext("webgl", { antialias: false, preserveDrawingBuffer: true, premultipliedAlpha: false });
    if (!gl) return null;
    const sh = (tp, s) => { const o = gl.createShader(tp); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(o)); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
    gl.useProgram(pr);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    const u = {};
    ["res", "t", "tPega", "rotA", "rotB", "zoom", "tam", "tremor", "dist", "clarao"].forEach(n => { u[n] = gl.getUniformLocation(pr, n); });
    const at = {};
    ["alvo", "orig", "info"].forEach(n => { at[n] = gl.getAttribLocation(pr, n); });
    return { gl, u, at, bufs: {}, n: 0 };
  }

  function montar() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    if (!foto.naturalWidth) return;
    glc.width = Math.round(W * dpr); glc.height = Math.round(H * dpr);
    if (!GL) GL = iniciarGL();
    if (!GL) return;
    PASSO = W < 760 ? 2.2 : 2.5;
    const Q = enquadrar();
    const cols = Math.ceil(W / PASSO), rows = Math.ceil(H / PASSO);
    const lum = lerFoto(Q, cols, rows, 0), prof = lerFoto(Q, cols, rows, 4 / PASSO * 1.5);
    const alvo = [], orig = [], info = [];
    const Z = Math.min(W, H) * 0.2;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const k = j * cols + i, v = lum[k];
      if (v < 0.1) continue;
      alvo.push(i * PASSO - W / 2 + PASSO / 2, j * PASSO - H / 2 + PASSO / 2, Math.pow(prof[k], 0.8) * Z);
      const a = Math.random() * Math.PI * 2, r = 600 + Math.random() * 1800;
      orig.push(Math.cos(a) * r, (Math.random() - 0.5) * 2000, Math.sin(a) * r - 300);
      info.push(v, 0.15 + Math.random() * 2.4 + (i / cols) * 2.2);    // montam da cauda pro nariz
    }
    const { gl, at, bufs } = GL;
    const subir = (nome, dados, n) => {
      if (!bufs[nome]) bufs[nome] = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufs[nome]);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dados), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(at[nome]);
      gl.vertexAttribPointer(at[nome], n, gl.FLOAT, false, 0, 0);
    };
    subir("alvo", alvo, 3); subir("orig", orig, 3); subir("info", info, 2);
    GL.n = info.length / 2;
    gl.viewport(0, 0, glc.width, glc.height);
  }

  /* ---------- câmera: sozinha + mouse + arrastar + zoom ---------- */
  const cam = { mx: 0, my: 0, smx: 0, smy: 0, arrA: 0, arrB: 0, zoom: 1, zoomAlvo: 1, ultimoToque: -99 };
  let arrastando = null;
  window.addEventListener("pointermove", e => {
    cam.mx = e.clientX / innerWidth * 2 - 1; cam.my = e.clientY / innerHeight * 2 - 1;
    if (arrastando) {
      cam.arrA = Math.max(-0.8, Math.min(0.8, arrastando.a + (e.clientX - arrastando.x) * 0.006));
      cam.arrB = Math.max(-0.6, Math.min(0.6, arrastando.b + (e.clientY - arrastando.y) * 0.005));
      tocou();
    }
  });
  glc.addEventListener("pointerdown", e => { arrastando = { x: e.clientX, y: e.clientY, a: cam.arrA, b: cam.arrB }; ab.classList.add("girando"); tocou(); });
  window.addEventListener("pointerup", () => { arrastando = null; ab.classList.remove("girando"); });
  glc.addEventListener("wheel", e => { e.preventDefault(); cam.zoomAlvo = Math.max(0.6, Math.min(2.6, cam.zoomAlvo * Math.exp(-e.deltaY * 0.0012))); tocou(); }, { passive: false });
  let agoraT = 0;
  function tocou() { cam.ultimoToque = agoraT; }

  function desenhar(t, dt) {
    if (!GL || !GL.n) return;
    const { gl, u } = GL;
    agoraT = t;
    cam.smx += (cam.mx - cam.smx) * 0.06; cam.smy += (cam.my - cam.smy) * 0.06;
    cam.zoom += (cam.zoomAlvo - cam.zoom) * Math.min(1, dt * 6);
    // sem mexer por 2,5 s, o arraste volta devagar pro centro
    if (!arrastando && t - cam.ultimoToque > 2.5) { cam.arrA *= 1 - Math.min(1, dt * 0.8); cam.arrB *= 1 - Math.min(1, dt * 0.8); }
    // giro automático: forte enquanto monta, quase de frente quando pega, depois passeia
    const antes = 1 - sm(T_PEGA - 1.8, T_PEGA - 0.2, t), depois = sm(T_PEGA + 0.8, T_PEGA + 3, t);
    const autoA = 0.6 * Math.sin(t * 0.42) * antes + 0.32 * Math.sin((t - T_PEGA) * 0.5) * depois;
    const autoB = 0.22 * Math.sin(t * 0.31) * antes + 0.16 * Math.sin((t - T_PEGA) * 0.37) * depois;
    const rotA = autoA + cam.smx * 0.45 + cam.arrA;
    const rotB = autoB - cam.smy * 0.28 + cam.arrB;
    const aprox = 0.82 + 0.18 * sm(0, T_PEGA, t) + 0.06 * sm(T_PEGA, T_PEGA + 6, t);   // câmera chega perto
    const tremor = t >= T_PARTIDA && t < T_PEGA ? 0.9 : t >= T_PEGA && t < T_PEGA + 0.7 ? 2.5 * (1 - (t - T_PEGA) / 0.7) : 0;
    gl.clearColor(0.02, 0.02, 0.024, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(u.res, W, H);
    gl.uniform1f(u.t, t);
    gl.uniform1f(u.tPega, T_PEGA);
    gl.uniform1f(u.rotA, rotA);
    gl.uniform1f(u.rotB, rotB);
    gl.uniform1f(u.zoom, cam.zoom * aprox);
    gl.uniform1f(u.tam, PASSO * 0.82 * dpr);
    gl.uniform1f(u.tremor, tremor);
    gl.uniform1f(u.dist, Math.max(W, H) * 1.3);
    gl.uniform1f(u.clarao, t >= T_PEGA ? 0.35 * Math.max(0, 1 - (t - T_PEGA) / 0.5) : 0);
    gl.drawArrays(gl.POINTS, 0, GL.n);
  }

  /* ---------- pré-carrega a foto e o áudio antes de liberar as chaves do portão ---------- */
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
  let relogio = null, rodando = false, comSom = false, ultimo = 0;

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
    if (reduz || !GL) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function quadro() {
    if (!rodando) return;
    const t = Math.max(0, relogio()), dt = Math.min(0.05, Math.max(0, t - ultimo));
    ultimo = t;
    if (t >= T_FINAL) ab.classList.add("final");
    desenhar(t, dt);
    // entra sozinho depois de um tempo sem mexer
    if (t >= T_FINAL + ESPERA && t - cam.ultimoToque > ESPERA) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function terminar(pulou) {
    if (!rodando) return;
    rodando = false;
    if (pulou && comSom && relogio() < T_PEGA + 4) T.pararPartida();
    ab.classList.add("saindo");
    window.Hangar.revelar();
    if (comSom) T.ligar();
    setTimeout(() => { ab.hidden = true; }, 850);
  }

  window.addEventListener("resize", () => { if (rodando) montar(); });
  bSom.addEventListener("click", () => iniciar(true));
  bMudo.addEventListener("click", () => iniciar(false));
  $("#ab-pular").addEventListener("click", () => terminar(true));
  $("#ab-entrar").addEventListener("click", () => terminar(true));
  $("#pular-abertura").addEventListener("click", () => {
    portao.classList.add("saindo");
    setTimeout(() => { portao.hidden = true; }, 500);
    window.Hangar.revelar();
  });
  document.addEventListener("keydown", e => { if ((e.key === "Escape" || e.key === "Enter") && rodando) terminar(true); });

  // pra testar sem esperar: ?quadro=8.5 desenha esse instante parado (&giro=0.6 gira)
  const q = new URLSearchParams(location.search), teste = q.get("quadro");
  if (teste !== null) {
    portao.hidden = true; ab.hidden = false;
    fotoPronta.then(() => {
      montar();
      const t = parseFloat(teste) || 0;
      if (t >= T_FINAL) ab.classList.add("final");
      cam.arrA = parseFloat(q.get("giro") || 0); cam.ultimoToque = t;
      for (let k = 0; k < 120; k++) { cam.zoom = cam.zoomAlvo; desenhar(t, 0.016); }
    });
  }
})();
