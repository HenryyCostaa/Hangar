/* Variantes — Japão */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  a6m: [
    { nome: "A6M1", ano: 1939, foto: "v-a6m-1", prod: "2", motor: "Mitsubishi Zuisei 13 · 780 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "Os dois protótipos de Jiro Horikoshi, de abril de 1939. A Marinha pediu o impossível, um caça de porta-aviões rápido, ágil e de alcance enorme, e Horikoshi cortou peso de tudo.",
      secoes: {
        estrutura: "Liga de alumínio nova, a Extra Super Duralumínio (ESD), mais resistente. A longarina da asa era contínua de ponta a ponta, com a cabine em cima. Sem blindagem e sem tanques protegidos.",
        motor: "Zuisei 13 de 780 hp. A hélice de 2 pás vibrava e foi trocada por uma de 3 pás e passo variável."
      },
      mudou: [] },
    { nome: "A6M2 Modelo 11", ano: 1940, foto: "", prod: "64", motor: "Nakajima Sakae 12 · 940 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "A primeira série, testada em combate na China em 1940, onde derrubou dezenas de caças sem perder nenhum.",
      secoes: {
        motor: "Sakae 12 de 14 cilindros, mais potente e de diâmetro um pouco maior.",
        estrutura: "Pontas das asas ainda fixas."
      },
      mudou: ["Nakajima Sakae 12 de 940 hp"] },
    { nome: "A6M2 Modelo 21", ano: 1940, foto: "v-a6m-2", principal: true, prod: "≈ 3.400 (Mitsubishi e Nakajima)", motor: "Nakajima Sakae 12 · 940 hp", armas: "2× 7,7 mm Tipo 97 · 2× 20 mm Tipo 99",
      texto: "O Zero de Pearl Harbor e de 1942. Com tanque descartável, passava de 3.000 km de alcance.",
      secoes: {
        estrutura: "Pontas das asas dobráveis, com 50 cm, para caber nos elevadores dos porta-aviões. Compensadores nos ailerons para deixar o comando leve em alta velocidade.",
        armas: "2 canhões Tipo 99-1 de 20 mm nas asas, com só 60 tiros cada em tambor, e baixa velocidade de projétil. 2 metralhadoras Tipo 97 de 7,7 mm no capô com 500 tiros cada.",
        sistemas: "Tanque descartável ventral de 330 L. Rádio Tipo 96 com antena no mastro atrás da cabine, que muitos pilotos tiravam por não funcionar bem."
      },
      mudou: ["Pontas das asas dobráveis (50 cm)", "Compensadores nos ailerons", "Tanque descartável de 330 L"] },
    { nome: "A6M2-N 'Rufe'", ano: 1942, foto: "v-a6m-2n", prod: "327", motor: "Nakajima Sakae 12 · 940 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "Hidroavião de caça da Nakajima, para defender ilhas onde não havia pista. Lutou nas Aleutas e nas Salomão.",
      secoes: { estrutura: "Flutuador central grande com tanque de combustível e dois flutuadores pequenos sob as asas. Leme maior para compensar a área do flutuador. Sem trem de pouso. O arrasto custava uns 100 km/h." },
      mudou: ["Flutuador central e dois sob as asas", "Leme maior"] },
    { nome: "A6M2-K", ano: 1943, foto: "", prod: "≈ 500", motor: "Nakajima Sakae 12", armas: "2× 7,7 mm",
      texto: "Treinador biplace para formar pilotos de Zero.",
      secoes: { estrutura: "Segunda cabine em tandem, canopy contínuo e pequenas barbatanas na cauda." },
      mudou: ["Segunda cabine para instrutor"] },
    { nome: "A6M3 Modelo 32", ano: 1942, foto: "", prod: "343", motor: "Nakajima Sakae 21 · 1.130 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "Mais motor, pontas de asa quadradas e menos combustível. Chegou justo na campanha de Guadalcanal, quando o alcance era o mais importante, e foi um problema.",
      secoes: {
        motor: "Sakae 21 com compressor de duas velocidades, melhor em altitude. Tomada de ar do carburador em cima do capô.",
        estrutura: "Pontas das asas cortadas, sem dobradiça: rolava mais rápido e mergulhava melhor. O motor maior roubou espaço de tanque.",
        armas: "Canhões Tipo 99-1 com tambor de 100 tiros."
      },
      mudou: ["Sakae 21 com compressor de 2 velocidades", "Pontas de asa cortadas", "Menos combustível: alcance menor"] },
    { nome: "A6M3 Modelo 22", ano: 1942, foto: "v-a6m-3", prod: "560", motor: "Nakajima Sakae 21 · 1.130 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "O Modelo 32 corrigido: asa longa de volta e mais combustível nas asas.",
      secoes: {
        estrutura: "Pontas dobráveis de volta, como no Modelo 21. Tanques de 45 L em cada asa.",
        armas: "22a: canhões Tipo 99-2 de cano longo, com mais velocidade de projétil."
      },
      mudou: ["Volta à asa longa com pontas dobráveis", "Tanques extras nas asas", "22a: canhões de cano longo"] },
    { nome: "A6M5 Modelo 52", ano: 1943, foto: "v-a6m-5", prod: "≈ 1.700", motor: "Nakajima Sakae 21 · 1.130 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "A resposta ao Hellcat e ao Corsair: mais rápido em mergulho, mas ainda sem proteção.",
      secoes: {
        estrutura: "Asa 1 m mais curta, de pontas arredondadas e sem dobra. Revestimento mais grosso para mergulhar até ~660 km/h.",
        motor: "Escapamentos individuais virados para trás: davam um pouco de empuxo, uns 10 km/h."
      },
      mudou: ["Asa mais curta e arredondada, sem dobra", "Escapamentos individuais", "Mergulho até ~660 km/h"] },
    { nome: "A6M5a Modelo 52 Ko", ano: 1944, foto: "", prod: "≈ 390", motor: "Sakae 21", armas: "2× 7,7 mm · 2× 20 mm (fita, 125 tiros)",
      texto: "Mais munição e revestimento ainda mais grosso.",
      secoes: {
        armas: "Canhões Tipo 99-2 Modelo 4 alimentados por fita, com 125 tiros em vez de 100 no tambor.",
        estrutura: "Revestimento mais grosso: mergulho até ~740 km/h."
      },
      mudou: ["Canhões alimentados por fita: 125 tiros", "Mergulho mais rápido"] },
    { nome: "A6M5b Modelo 52 Otsu", ano: 1944, foto: "", prod: "≈ 470", motor: "Sakae 21", armas: "1× 7,7 mm · 1× 13,2 mm · 2× 20 mm",
      texto: "A primeira proteção de verdade num Zero.",
      secoes: {
        armas: "Uma das metralhadoras de 7,7 mm virou uma Tipo 3 de 13,2 mm.",
        sistemas: "Para-brisa blindado de 45 mm e sistema de extinção de incêndio nos tanques, com CO2."
      },
      mudou: ["Metralhadora de 13,2 mm no capô", "Para-brisa blindado de 45 mm", "Extintor de CO2 nos tanques"] },
    { nome: "A6M5c Modelo 52 Hei", ano: 1944, foto: "", prod: "≈ 93", motor: "Sakae 21", armas: "1× 13,2 mm no capô · 2× 13,2 mm nas asas · 2× 20 mm",
      texto: "Muito mais fogo e blindagem. O avião ficou pesado demais para o Sakae 21, e o desempenho caiu.",
      secoes: {
        armas: "Mais 2 metralhadoras de 13,2 mm nas asas. A de 7,7 mm restante saiu. Trilhos para foguetes.",
        sistemas: "Placa de 8 mm atrás do piloto e tanque extra de 140 L atrás da cabine."
      },
      mudou: ["Mais 2× 13,2 mm nas asas", "Blindagem atrás do piloto e tanque extra", "Pesado demais para o motor"] },
    { nome: "A6M6c Modelo 53 Hei", ano: 1944, foto: "", prod: "1", motor: "Nakajima Sakae 31 · 1.210 hp com água-metanol", armas: "Como o A6M5c",
      texto: "Tentativa de recuperar desempenho com injeção de água-metanol. O sistema não funcionou bem e a série não saiu.",
      secoes: { motor: "Sakae 31 com injeção de água-metanol e tanques autovedantes." },
      mudou: ["Sakae 31 com injeção de água-metanol", "Tanques autovedantes"] },
    { nome: "A6M7 Modelo 62/63", ano: 1945, foto: "", prod: "≈ 470", motor: "Sakae 31", armas: "Como o A6M5c · 1 bomba de 250 kg",
      texto: "Zero bombardeiro de mergulho, para substituir os bombardeiros embarcados. Muitos foram usados em ataques suicidas.",
      secoes: { estrutura: "Cauda reforçada e cabide ventral para uma bomba de 250 kg, com tanques sob as asas." },
      mudou: ["Cabide para bomba de 250 kg", "Cauda reforçada para mergulho"] },
    { nome: "A6M8 Modelo 64", ano: 1945, foto: "", prod: "2", motor: "Mitsubishi Kinsei 62 · 1.560 hp", armas: "2× 13,2 mm · 2× 20 mm",
      texto: "O Zero com um motor de verdade, o Kinsei da Mitsubishi. Chegou a 572 km/h, mas a guerra acabou antes da produção.",
      secoes: {
        motor: "Kinsei 62 de 14 cilindros, maior e mais pesado. Capô maior e tomada de ar grande em cima.",
        armas: "As metralhadoras do capô saíram, porque o motor maior não deixava espaço."
      },
      mudou: ["Kinsei 62 de 1.560 hp", "Sem metralhadoras no capô"] }
  ],

  ki43: [
    { nome: "Ki-43 (protótipo)", ano: 1939, foto: "", prod: "3 + 10 de pré-série", motor: "Nakajima Ha-25 · 950 hp", armas: "2× 7,7 mm",
      texto: "Os primeiros eram menos manobráveis que o Ki-27, e o Exército quase cancelou. Os flaps de combate salvaram o projeto.",
      secoes: { estrutura: "Flaps 'borboleta' de Fowler, que abriam um pouco em curva fechada e aumentavam a sustentação: o Hayabusa virava mais fechado que qualquer caça aliado." },
      mudou: [] },
    { nome: "Ki-43-I", ano: 1941, foto: "v2-ki43-ki-43-i", prod: "≈ 716", motor: "Nakajima Ha-25 · 950 hp", armas: "Ia: 2× 7,7 · Ib: 7,7 + 12,7 · Ic: 2× 12,7 mm",
      texto: "O Hayabusa da conquista da Malásia, da Birmânia e das Índias Holandesas. Leve e extremamente manobrável, mas sem proteção e com pouco fogo.",
      secoes: {
        motor: "Ha-25 de 14 cilindros com hélice de 2 pás de passo variável.",
        armas: "As sub-versões mudavam só as armas do capô.",
        sistemas: "Sem blindagem e sem tanques protegidos. A asa às vezes quebrava em manobras muito fortes."
      },
      sub: [
        { nome: "Ki-43-Ia", texto: "2× 7,7 mm Tipo 89." },
        { nome: "Ki-43-Ib", texto: "1× 7,7 mm + 1× 12,7 mm Ho-103." },
        { nome: "Ki-43-Ic", texto: "2× 12,7 mm Ho-103." }
      ],
      mudou: ["Versão de série com flaps de combate", "Hélice de 2 pás", "Armas do capô variando entre 7,7 e 12,7 mm"] },
    { nome: "Ki-43-IIa", ano: 1942, foto: "v-ki43-2", principal: true, prod: "≈ 2.500 (todas as II)", motor: "Nakajima Ha-115 · 1.150 hp", armas: "2× 12,7 mm Ho-103",
      texto: "A versão principal, mais rápida e um pouco mais protegida.",
      secoes: {
        motor: "Ha-115 com compressor de duas velocidades e hélice de 3 pás.",
        estrutura: "Asa ~60 cm mais curta e reforçada.",
        sistemas: "Placa de 13 mm atrás do piloto e tanques com revestimento autovedante simples, de borracha. Cabides para tanques ou bombas de 250 kg."
      },
      mudou: ["Ha-115 de 1.150 hp e hélice de 3 pás", "Asa ~60 cm mais curta", "Blindagem atrás do piloto e tanques autovedantes"] },
    { nome: "Ki-43-IIb", ano: 1943, foto: "v2-ki43-ki-43-iib", prod: "parte das II", motor: "Nakajima Ha-115", armas: "2× 12,7 mm",
      texto: "Refinamentos de refrigeração e de tomadas de ar.",
      secoes: { motor: "Radiador de óleo movido para baixo do capô e tomada do carburador para o lábio de cima do capô." },
      mudou: ["Radiador de óleo e tomada de ar mudados de lugar"] },
    { nome: "Ki-43-II Kai", ano: 1943, foto: "", prod: "parte das II", motor: "Nakajima Ha-115", armas: "2× 12,7 mm",
      texto: "Escapamentos individuais, que davam um pouco de empuxo.",
      secoes: { motor: "Escapamentos individuais virados para trás, no lugar do coletor." },
      mudou: ["Escapamentos individuais"] },
    { nome: "Ki-43-III Ko", ano: 1944, foto: "", prod: "≈ 10 (Nakajima) + muitos pela Tachikawa", motor: "Nakajima Ha-115-II · 1.190 hp", armas: "2× 12,7 mm",
      texto: "Motor mais forte e ~576 km/h. Usado até o fim como interceptador na defesa do Japão.",
      secoes: { motor: "Ha-115-II, com mais potência em altitude." },
      mudou: ["Ha-115-II de 1.190 hp", "~576 km/h"] },
    { nome: "Ki-43-III Otsu", ano: 1945, foto: "", prod: "2", motor: "Mitsubishi Ha-112-II · 1.250 hp", armas: "2× 20 mm Ho-5",
      texto: "Protótipos com o radial da Mitsubishi e canhões de 20 mm. Não entrou em produção.",
      secoes: { motor: "Ha-112-II de 14 cilindros, mais largo." },
      mudou: ["Motor Ha-112-II", "2 canhões de 20 mm"] }
  ],

  ki61: [
    { nome: "Ki-61 (protótipo)", ano: 1941, foto: "", prod: "12", motor: "Kawasaki Ha-40 · 1.175 hp", armas: "2× 12,7 mm · 2× 7,7 mm",
      texto: "Voou em dezembro de 1941. O único caça japonês de série com motor em V refrigerado a líquido, uma versão licenciada e aliviada do DB 601.",
      secoes: {
        motor: "Ha-40: DB 601A fabricado pela Kawasaki, com peças aliviadas e o compressor redesenhado.",
        estrutura: "Asa de grande alongamento e fuselagem longa e fina. Radiador sob a fuselagem, no meio do avião."
      },
      mudou: [] },
    { nome: "Ki-61-I Ko", ano: 1943, foto: "v-ki61-1", prod: "≈ 390", motor: "Kawasaki Ha-40 · 1.175 hp", armas: "2× 12,7 mm no capô · 2× 7,7 mm nas asas",
      texto: "A primeira série. Estreou na Nova Guiné em 1943. Os pilotos aliados acharam que era um caça alemão ou italiano, por isso o apelido 'Tony'.",
      secoes: { sistemas: "Diferente dos outros caças japoneses, já saiu com blindagem do piloto e tanques autovedantes. Mergulhava bem." },
      mudou: ["Versão de série", "Blindagem e tanques autovedantes de fábrica"] },
    { nome: "Ki-61-I Otsu", ano: 1943, foto: "", prod: "≈ 590", motor: "Kawasaki Ha-40", armas: "4× 12,7 mm",
      texto: "As metralhadoras de 7,7 mm das asas viraram de 12,7 mm.",
      secoes: { armas: "4 Ho-103 de 12,7 mm: 2 no capô e 2 nas asas." },
      mudou: ["4× 12,7 mm"] },
    { nome: "Ki-61-I Hei", ano: 1943, foto: "", prod: "388", motor: "Kawasaki Ha-40", armas: "2× 12,7 mm · 2× MG 151/20 nas asas",
      texto: "Canhões alemães trazidos de submarino: cerca de 800 MG 151/20 chegaram ao Japão e foram montados nas asas.",
      secoes: { armas: "MG 151/20 de 20 mm nas asas, deitados de lado para caber na asa fina, com uma pequena bolha sob cada asa. 2× 12,7 mm no capô." },
      mudou: ["Canhões MG 151/20 importados nas asas"] },
    { nome: "Ki-61-I Tei (KAI)", ano: 1944, foto: "v-ki61-kai", principal: true, prod: "≈ 1.360", motor: "Kawasaki Ha-40", armas: "2× 20 mm Ho-5 no capô · 2× 12,7 mm nas asas",
      texto: "Quando os canhões alemães acabaram, o Ki-61 recebeu canhões japoneses Ho-5 no nariz. Foi a versão mais produzida.",
      secoes: {
        estrutura: "Fuselagem 19 cm mais longa, para caber os Ho-5 no capô. Estrutura reforçada e painéis de acesso mais fáceis de manter.",
        armas: "2 Ho-5 de 20 mm sincronizados no capô e 2× 12,7 mm nas asas."
      },
      mudou: ["Fuselagem 19 cm mais longa", "2 canhões Ho-5 de 20 mm no capô", "Estrutura mais fácil de manter"] },
    { nome: "Ki-61-II", ano: 1944, foto: "", prod: "8", motor: "Kawasaki Ha-140 · 1.500 hp", armas: "2× 20 mm · 2× 12,7 mm",
      texto: "Motor muito mais forte e asa maior. A asa nova deu problemas e voltou-se à original.",
      secoes: { estrutura: "Asa 10% maior e canopy redesenhado." },
      mudou: ["Ha-140 de 1.500 hp", "Asa maior (abandonada)"] },
    { nome: "Ki-61-II KAI", ano: 1944, foto: "v-ki61-2", prod: "≈ 375", motor: "Kawasaki Ha-140 · 1.500 hp", armas: "2× 20 mm Ho-5 · 2× 12,7 mm",
      texto: "O melhor Ki-61 em altitude, com ~610 km/h a 6.000 m, bom contra os B-29. Mas o motor era difícil de fabricar e a fábrica foi bombardeada.",
      secoes: {
        motor: "Ha-140 com compressor maior. Falhava muito, e a produção não acompanhava as fuselagens.",
        estrutura: "Asa original, fuselagem mais longa e leme maior."
      },
      mudou: ["Ha-140 com a asa original", "Fuselagem mais longa e leme maior", "Ficaram ~275 fuselagens sem motor"] },
    { nome: "Ki-100-I Ko", ano: 1945, foto: "v-ki61-ki100", prod: "≈ 275", motor: "Mitsubishi Ha-112-II · 1.500 hp", armas: "2× 20 mm Ho-5 · 2× 12,7 mm",
      texto: "A solução de emergência: um radial nas fuselagens que estavam paradas. Saiu mais leve e mais confiável que o Ki-61-II, e foi um dos melhores caças japoneses de 1945.",
      secoes: {
        motor: "Ha-112-II de 14 cilindros, 1,22 m de diâmetro contra 0,84 m da fuselagem. A Kawasaki estudou o encaixe do radial do Fw 190 e usou escapamentos individuais para preencher o degrau entre o motor e a fuselagem.",
        estrutura: "Sem radiador de água: uns 330 kg mais leve que o Ki-61-II. Fuselagem traseira alta, como no Ki-61."
      },
      mudou: ["Radial Ha-112-II no lugar do V12", "Uns 330 kg mais leve, sem radiador", "Aproveitou fuselagens paradas"] },
    { nome: "Ki-100-I Otsu", ano: 1945, foto: "", prod: "≈ 100", motor: "Mitsubishi Ha-112-II · 1.500 hp", armas: "2× 20 mm · 2× 12,7 mm",
      texto: "O Ki-100 feito do zero, já com fuselagem traseira rebaixada e canopy em bolha.",
      secoes: { estrutura: "Fuselagem traseira rebaixada e canopy em bolha, do projeto do Ki-61-III." },
      mudou: ["Canopy em bolha e fuselagem rebaixada"] },
    { nome: "Ki-100-II", ano: 1945, foto: "v2-ki61-ki-100-ii", prod: "3", motor: "Mitsubishi Ha-112-II Ru com turbo · 1.500 hp", armas: "2× 20 mm · 2× 12,7 mm",
      texto: "Ki-100 com turbocompressor para pegar os B-29 em altitude. Só protótipos.",
      secoes: { motor: "Ha-112-II Ru com turbocompressor sob a fuselagem." },
      mudou: ["Turbocompressor para alta altitude"] }
  ],

  ki84: [
    { nome: "Ki-84 (protótipo)", ano: 1943, foto: "v-ki84-proto", prod: "2 + ≈ 125 de pré-série", motor: "Nakajima Ha-45 Homare · 1.800 hp", armas: "2× 12,7 mm · 2× 20 mm",
      texto: "Voou em março de 1943. O Exército encomendou uma pré-série enorme para acelerar a entrada em serviço e corrigir problemas já com o avião voando.",
      secoes: { motor: "Homare de 18 cilindros em duas estrelas, compacto e com o diâmetro de um 14 cilindros. Muito avançado e muito sensível." },
      mudou: [] },
    { nome: "Ki-84-Ia", ano: 1944, foto: "v-ki84-1a", principal: true, prod: "≈ 3.000 (todos os I)", motor: "Nakajima Ha-45 Homare · 1.800–1.990 hp", armas: "2× 12,7 mm Ho-103 · 2× 20 mm Ho-5",
      texto: "Rápido, com ~624 km/h, bem blindado e bem armado. Os aliados o consideravam o caça japonês mais perigoso.",
      secoes: {
        sistemas: "Blindagem de 13 mm atrás do piloto, vidro blindado e tanques autovedantes.",
        motor: "O ponto fraco era elétrico e mecânico. O Homare sofria com gasolina de baixa octanagem, velas de má qualidade que sujavam, magnetos instáveis e falta de peças. Os mecânicos, cada vez menos experientes, tinham dificuldade. O desempenho real variava muito de avião para avião."
      },
      mudou: ["Versão de série com blindagem e tanques autovedantes", "2× 12,7 mm no capô + 2× 20 mm nas asas", "Motor sensível a gasolina, velas e magnetos"] },
    { nome: "Ki-84-Ib", ano: 1945, foto: "", prod: "parte dos I", motor: "Nakajima Ha-45", armas: "4× 20 mm Ho-5",
      texto: "Mais fogo contra os B-29: as metralhadoras do capô viraram canhões.",
      secoes: { armas: "4 Ho-5 de 20 mm: 2 no capô e 2 nas asas." },
      mudou: ["4 canhões Ho-5 de 20 mm"] },
    { nome: "Ki-84-Ic", ano: 1945, foto: "", prod: "poucos", motor: "Nakajima Ha-45", armas: "2× 30 mm Ho-105 · 2× 20 mm Ho-5",
      texto: "O Hayate mais armado, com canhões de 30 mm nas asas.",
      secoes: { armas: "2 Ho-105 de 30 mm nas asas e 2 Ho-5 de 20 mm no capô." },
      mudou: ["2 canhões de 30 mm nas asas"] },
    { nome: "Ki-84-II", ano: 1945, foto: "", prod: "poucos", motor: "Nakajima Ha-45", armas: "Como o Ia/Ib",
      texto: "Para poupar alumínio, partes do avião viraram madeira.",
      secoes: { estrutura: "Fuselagem traseira, pontas das asas e partes internas de madeira." },
      mudou: ["Fuselagem traseira e pontas das asas de madeira"] },
    { nome: "Ki-106 / Ki-113 / Ki-116", ano: 1945, foto: "v-ki84-der", prod: "3 + 1 + 1", motor: "Homare (Ki-106, Ki-113) · Mitsubishi Ha-112-II (Ki-116)", armas: "Como o Ki-84",
      texto: "Tentativas de fabricar o Hayate com o que sobrava no Japão em 1945. Nenhuma entrou em produção.",
      secoes: { estrutura: "Ki-106: todo de madeira, pela Tachikawa, e uns 300 kg mais pesado. Ki-113: estrutura de aço. Ki-116: motor Ha-112-II, menor e mais leve, uns 500 kg a menos, com hélice do Ki-46." },
      mudou: ["Ki-106: toda de madeira", "Ki-113: estrutura de aço", "Ki-116: motor Ha-112-II, ~500 kg mais leve"] }
  ],

  n1k: [
    { nome: "N1K1 Kyofu", ano: 1942, foto: "v-n1k-kyofu", prod: "97", motor: "Mitsubishi Kasei 14 · 1.460 hp", armas: "2× 7,7 mm · 2× 20 mm",
      texto: "Hidroavião de caça para defender bases em ilhas sem pista. Já tinha os flaps de combate automáticos que fariam fama no Shiden.",
      secoes: {
        estrutura: "Flutuador central grande e dois pequenos nas asas. Asa média.",
        motor: "Kasei 14. Alguns protótipos testaram hélices contrarrotativas contra o torque na decolagem da água."
      },
      mudou: [] },
    { nome: "N1K1-J Shiden", ano: 1943, foto: "v-n1k-1j", principal: true, prod: "≈ 1.000 (todas as N1K1-J)", motor: "Nakajima Homare 21 · 1.990 hp", armas: "2× 7,7 mm · 4× 20 mm Tipo 99",
      texto: "A Kawanishi tirou os flutuadores e fez um caça terrestre, sem pedido da Marinha. Rápido e muito manobrável, mas o trem herdado do hidroavião foi um problema.",
      secoes: {
        estrutura: "Por manter a asa média, o trem ficou longo e telescópico: encurtava ao recolher. Quebrava muito nos pousos.",
        sistemas: "Flaps de combate automáticos: um manômetro de mercúrio sentia a aceleração e o ângulo de ataque e abria os flaps sozinho em curva. O piloto não precisava pensar nisso.",
        armas: "2 metralhadoras de 7,7 mm no capô. 2 canhões de 20 mm nas asas e 2 em gôndolas sob as asas."
      },
      mudou: ["Flutuadores removidos; Homare 21 de 1.990 hp", "Trem longo telescópico por causa da asa média", "Flaps de combate automáticos por manômetro de mercúrio"] },
    { nome: "N1K1-Ja", ano: 1944, foto: "", prod: "parte das N1K1-J", motor: "Nakajima Homare 21", armas: "4× 20 mm",
      texto: "Sem as metralhadoras do capô, para cortar peso.",
      secoes: { armas: "Só os 4 canhões de 20 mm: 2 nas asas e 2 em gôndolas." },
      mudou: ["Metralhadoras do capô removidas"] },
    { nome: "N1K1-Jb / Jc", ano: 1944, foto: "", prod: "parte das N1K1-J", motor: "Nakajima Homare 21", armas: "4× 20 mm nas asas · bombas",
      texto: "Os 4 canhões ficaram dentro das asas, alimentados por fita. O Jc virou caça-bombardeiro.",
      secoes: { armas: "4 canhões Tipo 99-2 de 20 mm dentro das asas, sem gôndolas. Jb: cabides para 2 bombas de 250 kg. Jc: 4 bombas." },
      mudou: ["4 canhões dentro das asas, sem gôndolas", "Cabides para bombas"] },
    { nome: "N1K2-J Shiden-Kai", ano: 1944, foto: "v-n1k-2j", prod: "≈ 420", motor: "Nakajima Homare 21 · 1.990 hp", armas: "4× 20 mm nas asas",
      texto: "Um dos melhores caças da Marinha Imperial. O 343º Kokutai o usou na defesa do Japão em 1945.",
      secoes: {
        estrutura: "Asa movida para baixo, e o trem ficou curto e convencional. Fuselagem e cauda redesenhadas, com umas 43.000 peças contra 66.000 do N1K1-J, para fabricar mais rápido.",
        armas: "4 Tipo 99-2 de 20 mm dentro das asas, com mais munição."
      },
      mudou: ["Asa baixa e trem curto", "Fuselagem com muito menos peças", "4× 20 mm dentro das asas"] },
    { nome: "N1K2-K", ano: 1945, foto: "", prod: "poucos", motor: "Homare 21", armas: "2× 20 mm",
      texto: "Treinador biplace do Shiden-Kai.",
      secoes: { estrutura: "Segunda cabine para instrutor." },
      mudou: ["Treinador biplace"] }
  ]
});
