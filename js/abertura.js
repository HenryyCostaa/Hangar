/* =========================================================
   Portão + abertura: o P-39 se monta com partículas e vira
   a foto em 2,5D.
   Milhares de pontos voam de todos os lados e montam o P-39
   (a foto noturna, disparando) enquanto o Allison V-1710 dá
   partida na gravação. Quando o motor pega, os pontos viram a
   foto nítida, com profundidade, que mexe com o mouse.
   ========================================================= */
(() => {
  const $ = s => document.querySelector(s);
  const T = window.Trilha;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portao = $("#portao"), ab = $("#abertura");
  const cv = $("#ab-grade"), g = cv.getContext("2d");
  const glc = $("#ab-foto3d");
  const bSom = $("#ligar-som"), bMudo = $("#ligar-mudo");

  /* ---------- linha do tempo (medida na gravação) ---------- */
  const P = T.tempos;
  const T_CLIPE = 2.75;                      // o trecho da gravação começa aqui
  const T_PARTIDA = T_CLIPE + P.arranque;    // o arranque começa a girar
  const T_PEGA = T_CLIPE + P.pega;           // o motor pega: partículas viram foto
  const T_FINAL = T_PEGA + 2.6, T_FIM = T_FINAL + 2.0;
  const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  const ruido = (t, f) => Math.sin(t * f) * 0.6 + Math.sin(t * f * 2.7 + 1) * 0.4;

  /* ---------- a foto ---------- */
  const foto = new Image();
  const fotoPronta = new Promise(r => { foto.onload = () => r(true); foto.onerror = () => r(false); });
  foto.src = "img/p39-noite-ab.jpg";

  let W = 0, H = 0, dpr = 1, Q = null;      // Q: onde a foto fica na tela (px)
  // mesmo enquadramento pras partículas e pra foto 2,5D, pra uma virar a outra sem pulo
  function enquadrar() {
    const fa = foto.naturalWidth / foto.naturalHeight;
    let fw, fh;
    if (W < 760) { fw = W * 1.25; fh = fw / fa; }
    else if (W / H > fa) { fw = W; fh = W / fa; }
    else { fh = H; fw = H * fa; }
    const x = (W - fw) / 2 + (W < 760 ? -W * 0.02 : 0), y = (H - fh) / 2 - (W < 760 ? H * 0.04 : 0);
    return { x, y, w: fw, h: fh };
  }
  function lerFoto(cols, rows, passo, blur) {
    const c = document.createElement("canvas"); c.width = cols; c.height = rows;
    const k = c.getContext("2d", { willReadFrequently: true });
    k.fillStyle = "#000"; k.fillRect(0, 0, cols, rows);
    if (blur) k.filter = `blur(${blur}px)`;
    k.drawImage(foto, Q.x / passo, Q.y / passo, Q.w / passo, Q.h / passo);
    const d = k.getImageData(0, 0, cols, rows).data, o = new Float32Array(cols * rows);
    for (let i = 0; i < o.length; i++) o[i] = (d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11) / 255;
    return o;
  }

  /* ---------- partículas ---------- */
  let PT = null;
  function montarParticulas() {
    const passo = W < 760 ? 4 : 5;
    const cols = Math.ceil(W / passo), rows = Math.ceil(H / passo);
    const lum = lerFoto(cols, rows, passo, 0), prof = lerFoto(cols, rows, passo, 3);
    const n = [];
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const v = lum[j * cols + i];
      if (v < 0.09) continue;
      const a = Math.random() * Math.PI * 2, r = 700 + Math.random() * 1500;
      n.push({
        x: i * passo - W / 2, y: j * passo - H / 2, z: Math.pow(prof[j * cols + i], 0.8) * Math.min(W, H) * 0.3, v,
        ox: Math.cos(a) * r, oy: (Math.random() - 0.5) * 1800, oz: Math.sin(a) * r,
        atraso: 0.2 + Math.random() * 2.6 + (i / cols) * 1.6       // montam da cauda pro nariz
      });
    }
    PT = { n, passo };
  }
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  window.addEventListener("pointermove", e => { mouse.x = e.clientX / innerWidth * 2 - 1; mouse.y = e.clientY / innerHeight * 2 - 1; });
  const lotes = Array.from({ length: 6 }, () => []), amb = [];

  function particulas(t, alfa) {
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    if (alfa <= 0.002 || !PT) return;
    // gira com o mouse e sozinho, mas volta de frente antes de virar foto
    const livre = 1 - sm(T_PEGA - 1.6, T_PEGA - 0.2, t);
    const ga = (mouse.sx * 0.55 + Math.sin(t * 0.5) * 0.3) * livre, gb = -mouse.sy * 0.3 * livre;
    const ca = Math.cos(ga), sa = Math.sin(ga), cb = Math.cos(gb), sb = Math.sin(gb);
    const D = Math.max(W, H) * 1.3, cx = W / 2, cy = H / 2;
    const tam = PT.passo * 0.55;
    const tremor = t >= T_PARTIDA && t < T_PEGA ? 1.2 : 0;
    // quando pega, os pontos estouram um pouco pra fora enquanto a foto aparece
    const estouro = t >= T_PEGA ? sm(T_PEGA, T_PEGA + 0.9, t) : 0;
    for (const l of lotes) l.length = 0;
    amb.length = 0;
    for (const p of PT.n) {
      const e = 1 - sm(p.atraso, p.atraso + 2.2, t);
      const k = 1 + estouro * 0.08;
      let x = (p.x + p.ox * e) * k, y = (p.y + p.oy * e) * k, z = p.z + p.oz * e + estouro * 120 * p.v;
      if (tremor) { x += ruido(t + p.y * 0.01, 60) * tremor; y += ruido(t + p.x * 0.01, 50) * tremor; }
      const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
      const y2 = y * cb - z1 * sb, z2 = y * sb + z1 * cb;
      const s = D / Math.max(40, D - z2);
      const sx = cx + x1 * s, sy = cy + y2 * s;
      if (sx < -5 || sx > W + 5 || sy < -5 || sy > H + 5) continue;
      const it = [sx, sy, tam * s];
      if (p.v > 0.9) amb.push(it); else lotes[Math.min(5, Math.floor(p.v * 6.6))].push(it);
    }
    g.globalAlpha = alfa;
    lotes.forEach((l, n) => { g.fillStyle = `rgba(236,233,226,${0.18 + n * 0.16})`; for (const [x, y, r] of l) g.fillRect(x, y, r, r); });
    g.fillStyle = "#ffa31a"; for (const [x, y, r] of amb) g.fillRect(x, y, r * 1.3, r * 1.3);
    g.globalAlpha = 1;
  }

  /* ---------- a foto em 2,5D (WebGL) ---------- */
  let GL = null;
  function montarGL() {
    if (GL) { GL.gl.viewport(0, 0, glc.width, glc.height); return; }
    const gl = glc.getContext("webgl", { preserveDrawingBuffer: true });
    if (!gl) return;
    const vs = `attribute vec2 p; varying vec2 v; void main(){ v = p * .5 + .5; v.y = 1. - v.y; gl_Position = vec4(p, 0., 1.); }`;
    const fs = `precision highp float; varying vec2 v;
      uniform sampler2D foto, prof; uniform vec2 m, res; uniform vec4 quad; uniform float alfa, zoom, clarao;
      void main(){
        vec2 c = (v - .5) / zoom + .5;
        vec2 uv = (c - quad.xy) / quad.zw;
        // parallax: cada ponto anda conforme a profundidade (claro = perto)
        vec2 desl = m * vec2(.045, .03);
        vec2 q = uv; float d = 0.;
        for (int i = 0; i < 12; i++) { d = texture2D(prof, q).r; q = uv - desl * (d - .25); }
        vec3 col = vec3(0.);
        if (q.x > 0. && q.x < 1. && q.y > 0. && q.y < 1.) col = texture2D(foto, q).rgb;
        // esfuma as bordas da foto pra ela sumir no preto
        vec2 bb = smoothstep(0., .07, q) * smoothstep(0., .07, 1. - q);
        col *= bb.x * bb.y;
        float l = dot(col, vec3(.3, .59, .11));
        vec3 cor = mix(vec3(l), vec3(1., .72, .35) * l * 1.15, .8 * smoothstep(.9, 1., l));
        // grade fina, empurrada pela profundidade
        vec2 gg = abs(fract((c + desl * d * 1.4) * res / 26.) - .5);
        float linha = 1. - smoothstep(0., .05, min(gg.x, gg.y));
        cor += linha * (.04 + .22 * d);
        cor *= 1. - .55 * dot(v - .5, v - .5) * 2.;
        cor += clarao * vec3(1., .93, .8);
        gl_FragColor = vec4(cor * alfa, alfa);   // transparente até virar foto (alfa pré-multiplicado)
      }`;
    const sh = (tp, s) => { const o = gl.createShader(tp); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const tex = (unit, src) => { const tx = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tx); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); };
    // mapa de profundidade: a foto borrada e com contraste
    const dc = document.createElement("canvas"); dc.width = 640; dc.height = Math.round(640 * foto.naturalHeight / foto.naturalWidth);
    const dk = dc.getContext("2d"); dk.filter = "blur(7px) contrast(1.8) brightness(1.3)"; dk.drawImage(foto, 0, 0, dc.width, dc.height);
    tex(0, foto); tex(1, dc);
    gl.uniform1i(gl.getUniformLocation(pr, "foto"), 0); gl.uniform1i(gl.getUniformLocation(pr, "prof"), 1);
    const u = n => gl.getUniformLocation(pr, n);
    GL = { gl, u: { m: u("m"), res: u("res"), quad: u("quad"), alfa: u("alfa"), zoom: u("zoom"), clarao: u("clarao") } };
    gl.viewport(0, 0, glc.width, glc.height);
  }
  function foto3d(t, alfa) {
    if (!GL) return;
    const { gl, u } = GL;
    const u0 = Math.max(0, t - T_PEGA);
    const auto = sm(0.4, 2, u0), entra = sm(0, 1.2, u0);
    gl.uniform2f(u.m, (mouse.sx + Math.sin(u0 * 0.6) * 0.4 * auto) * entra, (mouse.sy * 0.8 + Math.sin(u0 * 0.45) * 0.2 * auto) * entra);
    gl.uniform2f(u.res, W, H);
    gl.uniform4f(u.quad, Q.x / W, Q.y / H, Q.w / W, Q.h / H);
    gl.uniform1f(u.alfa, alfa);
    gl.uniform1f(u.zoom, 1 + 0.06 * sm(0, 4.5, u0));
    gl.uniform1f(u.clarao, t >= T_PEGA ? 0.28 * Math.max(0, 1 - u0 / 0.45) : 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function montar() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    if (!foto.naturalWidth) return;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    glc.width = Math.round(W * dpr); glc.height = Math.round(H * dpr);
    Q = enquadrar();
    montarParticulas();
    montarGL();
  }

  function desenhar(t) {
    const vira = sm(T_PEGA - 0.05, T_PEGA + 0.7, t);       // 0: partículas · 1: foto
    particulas(t, 1 - vira);
    foto3d(t, vira);
    // a tela treme no arranque e quando pega
    const tremor = t >= T_PARTIDA && t < T_PEGA + 0.8 ? (t >= T_PEGA ? 3 * (1 - (t - T_PEGA) / 0.8) : 0.8) : 0;
    ab.style.transform = tremor ? `translate(${(ruido(t, 61) * tremor).toFixed(2)}px, ${(ruido(t, 53) * tremor * 0.6).toFixed(2)}px)` : "";
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
  let relogio = null, rodando = false, comSom = false;

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
    if (reduz || !foto.naturalWidth) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function quadro() {
    if (!rodando) return;
    const t = Math.max(0, relogio());
    mouse.sx += (mouse.x - mouse.sx) * 0.06; mouse.sy += (mouse.y - mouse.sy) * 0.06;
    if (t >= T_FINAL) ab.classList.add("final");
    desenhar(t);
    if (t >= T_FIM) { terminar(); return; }
    requestAnimationFrame(quadro);
  }

  function terminar(pulou) {
    if (!rodando) return;
    rodando = false;
    if (pulou && comSom) T.pararPartida();
    ab.classList.add("saindo");
    ab.style.transform = "";
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
      desenhar(t);
      ab.style.transform = "";
    });
  }
})();
