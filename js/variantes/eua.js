/* Variantes — EUA.
   Campos: nome, ano, foto (chave em fotos), prod (produção), motor, armas,
   texto (resumo), secoes { motor, armas, estrutura, sistemas, pintura },
   sub [{ nome, texto }] (sub-versões), mudou [ ... ] (em relação à anterior),
   principal (variante da ficha técnica), ficha (ficha própria em fichas.js). */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  p39: [
    { nome: "XP-39", ano: 1938, foto: "v-p39-xp39", prod: "1", motor: "Allison V-1710-17 com turbo GE B-5 · 1.150 hp", armas: "Desarmado (previsto: canhão T9 de 37 mm)",
      texto: "O protótipo que define a família: motor no meio da fuselagem, atrás do piloto, e um eixo de cerca de 3 m passando sob a cabine até uma caixa de redução no nariz. Voou em abril de 1938 e chegou a 628 km/h a 6.100 m, leve e sem armas.",
      secoes: {
        motor: "V-1710-17 com turbocompressor General Electric B-5 montado na lateral esquerda da fuselagem, alimentado pelos gases de escape. Era isso que dava o desempenho em altitude. Hélice tripá de velocidade constante.",
        estrutura: "Trem triciclo, ainda raro em caças em 1938, e cabine com portas de automóvel dos dois lados. A envergadura era de 10,9 m, com várias tomadas de ar na fuselagem para turbo, radiador e óleo.",
        sistemas: "Sem blindagem, sem tanques autovedantes e sem rádio de combate. Era um avião de demonstração."
      },
      mudou: [] },
    { nome: "XP-39B", ano: 1939, foto: "", prod: "1 (convertido)", motor: "Allison V-1710-37 · 1.090 hp, sem turbo", armas: "Desarmado",
      texto: "O XP-39 refeito depois dos testes no túnel de vento em escala real do NACA, em Langley. O turbo saiu para cortar arrasto e custo, e o avião ficou mais rápido em baixa altitude e muito pior em cima. Foi a decisão que marcou o P-39.",
      secoes: {
        motor: "V-1710-37 só com compressor mecânico de um estágio e uma velocidade. A potência caía rápido acima de uns 4.000 m.",
        estrutura: "Os radiadores de água e óleo foram para dentro das raízes das asas, alimentados por tomadas no bordo de ataque. A tomada do carburador foi para trás da cabine. A cabine foi rebaixada, a fuselagem alongada e a envergadura reduzida para 10,4 m."
      },
      mudou: ["Turbocompressor removido: só compressor mecânico de um estágio", "Radiadores nas raízes das asas; tomada do carburador atrás da cabine", "Cabine rebaixada, fuselagem mais longa e asa menor"] },
    { nome: "YP-39", ano: 1940, foto: "", prod: "13", motor: "Allison V-1710-37 · 1.090 hp", armas: "1× 37 mm T9 · 2× .50 · 2× .30",
      texto: "Lote de avaliação em serviço, o primeiro com armamento. Serviu para o Air Corps aprender a operar o arranjo de motor central e o canhão no cubo.",
      secoes: {
        armas: "Canhão T9 de 37 mm atirando pelo cubo da hélice, com 15 tiros (depois 30). Duas .50 e duas .30 no nariz, sincronizadas com a hélice.",
        estrutura: "Deriva levemente maior que a do XP-39B para melhorar a estabilidade direcional."
      },
      mudou: ["Primeiro com armamento instalado: 37 mm + 2× .50 + 2× .30", "Deriva maior"] },
    { nome: "P-39C", ano: 1941, foto: "v-p39-c", prod: "20", motor: "Allison V-1710-35 · 1.150 hp", armas: "1× 37 mm M4 · 2× .50 · 2× .30",
      texto: "A primeira série de produção. Ainda sem blindagem nem tanques autovedantes, foi considerada imprópria para combate e acabou usada em treino e testes.",
      secoes: {
        motor: "V-1710-35 (E4) com 1.150 hp na decolagem e hélice Curtiss Electric tripá: o passo das pás era mudado por um motor elétrico dentro do cubo.",
        armas: "Canhão M4 de 37 mm com 30 tiros, duas .50 e duas .30 no capô."
      },
      mudou: ["Motor V-1710-35 de 1.150 hp", "Canhão de série M4 no lugar do T9"] },
    { nome: "P-39D", ano: 1941, foto: "v-p39-d", prod: "923 (todas as D)", motor: "Allison V-1710-35 · 1.150 hp", armas: "1× 37 mm M4 · 2× .50 · 4× .30",
      texto: "A primeira versão de combate de verdade. Ganhou blindagem, tanques autovedantes e quatro .30 nas asas. Lutou na Nova Guiné, nas Aleutas e no começo do Pacífico.",
      secoes: {
        armas: "As duas .30 do nariz foram para as asas, com mais duas: 4× .30 nas asas, mais as 2× .50 do capô e o 37 mm. Ganhou um ponto ventral para tanque descartável de 284 L ou uma bomba de 227 kg.",
        sistemas: "Uns 110 kg de blindagem (placas e vidro blindado à frente e atrás do piloto) e tanques autovedantes nas asas. O revestimento interno dos tanques reduziu o combustível de 643 para 454 L. Rádio de comando SCR-274N.",
        pintura: "Verde-oliva por cima e cinza neutro por baixo, o padrão da USAAF."
      },
      sub: [
        { nome: "P-39D", texto: "Padrão: 37 mm M4, V-1710-35, hélice Curtiss Electric." },
        { nome: "P-39D-1", texto: "Canhão M1 de 20 mm com 60 tiros no lugar do 37 mm: munição mais rápida e com mais tiros, padrão do Lend-Lease." },
        { nome: "P-39D-2", texto: "Motor V-1710-63 de 1.325 hp e volta ao 37 mm. Mais tanque ventral." },
        { nome: "P-39D-3 / D-4", texto: "Conversões de reconhecimento com câmeras K-24 e K-25 na fuselagem traseira e blindagem extra no radiador." }
      ],
      mudou: ["4× .30 nas asas (o C não tinha armas nas asas)", "Blindagem de ~110 kg e tanques autovedantes; menos combustível", "Ponto ventral para tanque ou bomba de 227 kg"] },
    { nome: "P-400", ano: 1942, foto: "v-p39-p400", prod: "~200 retidos pela USAAF (de 675 encomendados)", motor: "Allison V-1710-E4 · 1.150 hp", armas: "1× 20 mm Hispano M1 · 2× .50 · 4× .30",
      texto: "Lote de exportação (Bell Model 14) cancelado depois de uma avaliação ruim. Uns 200 ficaram com a USAAF com o nome P-400 e foram mandados às pressas para o Pacífico. Em Guadalcanal, com o 67º Esquadrão, viraram aviões de ataque ao solo em voo rasante, onde o desempenho fraco em altitude não importava.",
      secoes: {
        armas: "Canhão Hispano de 20 mm com 60 tiros no lugar do 37 mm com 30: trajetória mais tensa e mais fácil de acertar em alvo aéreo. As 2× .50 e 4× .30 eram iguais às do P-39D.",
        sistemas: "Equipamento do padrão de exportação: rádio, instrumentos, mira e oxigênio diferentes dos da USAAF, o que dava trabalho de manutenção. Eram uns 300 kg mais pesados que o prometido.",
        pintura: "Muitos chegaram ao Pacífico com a camuflagem de exportação, verde escuro e terra escura por cima, por baixo das insígnias americanas pintadas por cima."
      },
      mudou: ["Canhão Hispano de 20 mm (60 tiros) no lugar do 37 mm (30 tiros)", "Rádio, instrumentos e mira do padrão de exportação", "Camuflagem verde e terra em vez do verde-oliva"] },
    { nome: "P-39F", ano: 1942, foto: "", prod: "229", motor: "Allison V-1710-35 · 1.150 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "Igual ao P-39D, mas com hélice Aeroproducts. Foi a primeira das muitas séries curtas que testavam combinações de hélice e motor.",
      secoes: {
        motor: "Hélice Aeroproducts tripá de passo hidráulico, com o comando de passo dentro do cubo, no lugar da Curtiss Electric. Isso acabou com a dependência do sistema elétrico para o passo da hélice.",
        sistemas: "27 foram convertidos em P-39F-2, com câmeras na fuselagem traseira e blindagem extra para reconhecimento."
      },
      mudou: ["Hélice Aeroproducts hidráulica no lugar da Curtiss Electric", "Versão F-2 de reconhecimento com câmeras"] },
    { nome: "P-39J", ano: 1942, foto: "", prod: "25", motor: "Allison V-1710-59 · 1.100 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "Uma série pequena feita para testar o controle automático de pressão de admissão do Allison.",
      secoes: { motor: "V-1710-59 com regulador automático de pressão de admissão. O piloto não precisava ficar corrigindo a manete conforme subia, e isso diminuía o risco de excesso de pressão." },
      mudou: ["V-1710-59 com controle automático de pressão de admissão"] },
    { nome: "P-39K", ano: 1942, foto: "v2-p39-p-39k", prod: "210", motor: "Allison V-1710-63 · 1.325 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "Primeiro P-39 com o V-1710-63, bem mais potente na decolagem e em baixa altitude. O peso máximo também subiu.",
      secoes: {
        motor: "V-1710-63 (E6) com 1.325 hp na decolagem. Hélice Aeroproducts.",
        sistemas: "Uma unidade virou P-39K-2, com outra relação de redução para testar desempenho em altitude, e serviu de base para o P-39N."
      },
      mudou: ["V-1710-63 de 1.325 hp", "Hélice Aeroproducts", "Peso máximo maior"] },
    { nome: "P-39L", ano: 1942, foto: "", prod: "250", motor: "Allison V-1710-63 · 1.325 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "Mesmo motor do K, mas de volta à hélice Curtiss Electric. O trem do nariz foi reforçado para o peso maior.",
      secoes: {
        motor: "V-1710-63 com hélice Curtiss Electric de passo elétrico.",
        estrutura: "Perna do trem do nariz reforçada. Alguns foram usados em testes de foguetes sob as asas."
      },
      mudou: ["Volta à hélice Curtiss Electric", "Trem do nariz reforçado"] },
    { nome: "P-39M", ano: 1942, foto: "", prod: "240", motor: "Allison V-1710-83 · 1.200 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "Tentativa de melhorar o P-39 em altitude média: outra relação de compressor e hélice maior. Ficou uns 15 km/h mais rápido a 4.600 m e perdeu na subida e em baixa altitude.",
      secoes: { motor: "V-1710-83 com compressor ajustado para altitude e hélice Aeroproducts de 3,38 m de diâmetro, maior que a anterior." },
      mudou: ["V-1710-83 ajustado para altitude média", "Hélice Aeroproducts maior (3,38 m)", "Mais rápido a 4.600 m; pior na subida"] },
    { nome: "P-39N", ano: 1943, foto: "v-p39-n", prod: "2.095", motor: "Allison V-1710-85 · 1.200 hp", armas: "1× 37 mm · 2× .50 · 4× .30",
      texto: "A primeira grande série e a que mais aliviou o avião. Combinou o V-1710-85 com uma redução diferente e hélice grande, rendendo melhor em média altitude, e ficou mais leve tirando combustível. A maior parte foi para o front oriental pelo Lend-Lease.",
      secoes: {
        motor: "V-1710-85 com relação de redução 9:5 e hélice Aeroproducts de 3,53 m. A redução maior deixava a hélice girar mais devagar e aproveitar melhor o ar rarefeito.",
        sistemas: "Os primeiros saíram com só 330 L de combustível interno para economizar peso, mas os pilotos reclamaram e o kit de tanques completo voltou nos blocos seguintes. Blindagem revisada para cortar peso."
      },
      sub: [
        { nome: "P-39N-0", texto: "Os primeiros 166, com combustível reduzido a 330 L." },
        { nome: "P-39N-1", texto: "Combustível de volta aos 454 L, mais equipamento padrão." },
        { nome: "P-39N-5", texto: "Placa de blindagem atrás do piloto trocada por vidro blindado, mais leve e com melhor visão. Novo rádio SCR-695 de identificação (IFF)." }
      ],
      mudou: ["V-1710-85 com redução 9:5 e hélice de 3,53 m", "Primeiros com combustível reduzido para economizar peso", "N-5: vidro blindado atrás do piloto e IFF"] },
    { nome: "P-39Q", ano: 1943, foto: "p39q", principal: true, prod: "4.905", motor: "Allison V-1710-85 · 1.200 hp (1.420 hp em emergência)", armas: "1× 37 mm M4 · 4× .50",
      texto: "A versão mais produzida de todas. As quatro .30 das asas viraram uma .50 em casulo sob cada asa. Cada bloco de produção mexeu em blindagem, combustível ou hélice. O P-39Q-1 da abertura do site é o primeiro bloco.",
      secoes: {
        armas: "37 mm M4 com 30 tiros, 2× .50 no capô com 200 tiros cada e, no lugar das 4× .30, uma .50 em casulo sob cada asa com 300 tiros. Muitos operadores tiravam os casulos para ganhar velocidade e manobra.",
        motor: "V-1710-85 com hélice Aeroproducts. Os blocos Q-21 e Q-25 tiveram hélice de 4 pás, e o Q-30 voltou à tripá.",
        sistemas: "Rádio VHF SCR-522A nos últimos blocos. Bateria e gerador de 24 V; o motor de partida era acionado de dentro da cabine com o Allison atrás do piloto."
      },
      sub: [
        { nome: "Q-1", texto: "150 aviões: casulos .50 sob as asas, blindagem completa." },
        { nome: "Q-5", texto: "950: blindagem reduzida e combustível de 416 L para economizar peso." },
        { nome: "Q-10", texto: "705: combustível de volta a 454 L, controle automático de pressão, mais blindagem e aquecimento da cabine." },
        { nome: "Q-15", texto: "1.000: mudanças menores de equipamento e rádio." },
        { nome: "Q-20", texto: "891: os mais comuns no front oriental, muitas vezes sem os casulos." },
        { nome: "Q-21", texto: "109: hélice Aeroproducts de 4 pás." },
        { nome: "Q-25", texto: "700: fuselagem traseira reforçada e hélice de 4 pás." },
        { nome: "Q-30", texto: "400: de volta à hélice tripá." }
      ],
      mudou: ["4× .30 das asas trocadas por 2× .50 em casulos", "Blindagem e combustível mudando a cada bloco", "Hélice de 4 pás nos blocos Q-21 e Q-25"] },
    { nome: "TP-39Q", ano: 1944, foto: "v2-p39-tp-39q", prod: "≈ 13 conversões", motor: "Allison V-1710-85", armas: "Desarmado",
      texto: "Treinador biplace: uma segunda cabine foi aberta no nariz, no lugar do canhão, para o instrutor.",
      secoes: { estrutura: "Cabine extra à frente da original, com canopy próprio. Ganhou uma pequena barbatana ventral para compensar a área a mais no nariz." },
      mudou: ["Segunda cabine no nariz, no lugar do canhão", "Barbatana ventral"] },
    { nome: "P-63A Kingcobra", ano: 1943, foto: "v-p39-p63", prod: "1.725", motor: "Allison V-1710-93 · 1.325 hp (1.500 hp em emergência)", armas: "1× 37 mm M10 · 4× .50",
      texto: "Não é um P-39 reformado: é um avião novo, maior, só com o mesmo arranjo de motor central. A asa de fluxo laminar e o compressor auxiliar resolveram a fraqueza em altitude. Quase todos foram para o front oriental.",
      secoes: {
        motor: "V-1710-93 com um compressor auxiliar de segundo estágio acionado por acoplamento hidráulico, que regulava a velocidade sozinho conforme a altitude. Hélice Aeroproducts de 4 pás.",
        armas: "Canhão M10 de 37 mm, com 30 tiros nos primeiros blocos e 58 a partir do A-9. 2× .50 no capô e 2× .50 em casulos. Até 3 bombas de 227 kg.",
        estrutura: "Asa NACA série 66 de fluxo laminar, com 11,7 m de envergadura. Fuselagem e cauda maiores, e a cauda foi redesenhada para dar mais estabilidade."
      },
      sub: [
        { nome: "P-63A-1 a A-6", texto: "Mudanças de blindagem e cabides de bombas." },
        { nome: "P-63A-9", texto: "Canhão M10 com 58 tiros e mais blindagem." },
        { nome: "P-63A-10", texto: "Blindagem extra e rádio novo." }
      ],
      mudou: ["Avião novo e maior, com asa de fluxo laminar NACA 66", "Compressor auxiliar de 2º estágio com acoplamento hidráulico", "Hélice de 4 pás e canhão M10 (até 58 tiros)"] },
    { nome: "P-63C", ano: 1944, foto: "", prod: "1.227", motor: "Allison V-1710-117 · 1.510 hp (1.800 hp com injeção de água)", armas: "1× 37 mm M10 · 4× .50",
      texto: "Mais potência com injeção de água e uma barbatana ventral para estabilidade. Foi a segunda grande série.",
      secoes: {
        motor: "V-1710-117 com injeção de água para potência de emergência de 1.800 hp.",
        estrutura: "Barbatana ventral sob a cauda e envergadura levemente maior."
      },
      mudou: ["V-1710-117 com injeção de água: até 1.800 hp", "Barbatana ventral sob a cauda"] },
    { nome: "RP-63 'Pinball'", ano: 1944, foto: "", prod: "≈ 330", motor: "Allison V-1710-117", armas: "Desarmado (era o alvo)",
      texto: "A versão mais curiosa da família, e um caso de engenharia elétrica. O RP-63 era um alvo tripulado: artilheiros treinavam atirando nele com balas frangíveis, de plástico e chumbo, que se desfaziam no impacto.",
      secoes: {
        estrutura: "Uns 675 kg de blindagem de duralumínio por fora da estrutura, canopy de vidro blindado e entradas de ar protegidas por grades.",
        sistemas: "Sensores atrás das placas detectavam cada impacto, e uma luz no cubo da hélice piscava a cada acerto, daí o apelido 'Pinball'. Um contador na cabine registrava os acertos."
      },
      mudou: ["Armas removidas", "Blindagem externa de duralumínio contra balas frangíveis", "Sensores de impacto ligados a uma luz no cubo da hélice"] }
  ],

  p40: [
    { nome: "XP-40", ano: 1938, foto: "v-p40-xp40", prod: "1", motor: "Allison V-1710-19 · 1.160 hp", armas: "2× .50 no nariz",
      texto: "O décimo P-36A da linha, com o radial trocado por um Allison V-1710 em linha. O radiador começou sob a fuselagem, atrás da asa, e foi para o 'queixo' depois dos testes no túnel do NACA.",
      secoes: {
        motor: "V-1710-19 (C13) com compressor mecânico. Hélice Curtiss Electric.",
        estrutura: "Célula do P-36 quase intacta: asa, trem que girava 90° ao recolher para dentro da asa, e cauda."
      },
      mudou: [] },
    { nome: "P-40", ano: 1940, foto: "", prod: "200", motor: "Allison V-1710-33 · 1.040 hp", armas: "2× .50 no nariz · 2× .30 nas asas",
      texto: "A primeira série. Sem blindagem nem tanques protegidos, já era obsoleta para a Europa em 1940, mas foi a base de tudo o que veio depois.",
      secoes: { armas: "Duas .50 sincronizadas no capô e uma .30 em cada asa." },
      mudou: ["V-1710-33 de 1.040 hp", "Radiador definitivo no queixo", "2× .50 no nariz + 2× .30 nas asas"] },
    { nome: "P-40B", ano: 1941, foto: "v-p40-b", prod: "131", motor: "Allison V-1710-33 · 1.040 hp", armas: "2× .50 no nariz · 4× .30 nas asas",
      texto: "Ganhou proteção de combate. É o padrão dos P-40 que estavam no Havaí e nas Filipinas em dezembro de 1941. Os aviões de exportação dos Tigres Voadores na China eram praticamente iguais.",
      secoes: {
        armas: "Mais uma .30 em cada asa: 4× .30 nas asas e 2× .50 no capô.",
        sistemas: "Blindagem atrás do piloto, para-brisa blindado e tanques parcialmente autovedantes.",
        pintura: "Verde-oliva e cinza. Os aviões dos Tigres Voadores tinham camuflagem verde e terra e a boca de tubarão pintada no queixo, copiada de caças da Luftwaffe e da RAF no deserto."
      },
      mudou: ["Blindagem e para-brisa blindado", "Tanques parcialmente autovedantes", "4× .30 nas asas (eram 2)"] },
    { nome: "P-40C", ano: 1941, foto: "", prod: "193", motor: "Allison V-1710-33 · 1.040 hp", armas: "2× .50 · 4× .30",
      texto: "Fechou a proteção dos tanques e ganhou um tanque descartável. O peso subiu e o desempenho caiu um pouco.",
      secoes: { sistemas: "Tanques totalmente autovedantes, novo sistema de combustível, ponto ventral para tanque de 197 L e rádio SCR-247N." },
      mudou: ["Tanques totalmente autovedantes", "Tanque ventral descartável de 197 L", "Rádio novo"] },
    { nome: "P-40D", ano: 1941, foto: "", prod: "23", motor: "Allison V-1710-39 · 1.150 hp", armas: "4× .50 nas asas",
      texto: "O primeiro grande redesenho do P-40, com motor novo e nariz novo. A série foi curta, logo substituída pelo P-40E com seis armas.",
      secoes: {
        motor: "V-1710-39 (F3R) com caixa de redução externa, mais compacta. O nariz ficou mais curto e o eixo da hélice mais alto, por isso o P-40D em diante tem cara diferente.",
        armas: "As armas do capô saíram, e todas foram para as asas: 4× .50.",
        estrutura: "Fuselagem 15 cm mais curta, radiador maior e mais fundo, e trem mais curto."
      },
      mudou: ["V-1710-39 com redução externa: nariz mais curto e alto", "Armas do capô removidas; 4× .50 nas asas", "Radiador maior e trem mais curto"] },
    { nome: "P-40E", ano: 1941, foto: "v-p40-e", principal: true, prod: "2.320", motor: "Allison V-1710-39 · 1.150 hp", armas: "6× .50 nas asas",
      texto: "O P-40D com seis .50, 281 tiros cada. Foi o P-40 de 1942: Pacífico, China, Alasca e Norte da África.",
      secoes: {
        armas: "6× .50 nas asas com 281 tiros cada. Ponto ventral para bomba de 227 kg ou tanque.",
        pintura: "Os do Norte da África usavam camuflagem de deserto, areia por cima e cinza ou azul por baixo, e filtro de ar contra areia."
      },
      sub: [
        { nome: "P-40E", texto: "Padrão com 6× .50." },
        { nome: "P-40E-1", texto: "Feito pelo Lend-Lease, com pequenas diferenças de equipamento e cabides sob as asas." }
      ],
      mudou: ["6× .50 nas asas (eram 4)"] },
    { nome: "P-40F", ano: 1942, foto: "v-p40-f", prod: "1.311", motor: "Packard V-1650-1 Merlin · 1.300 hp", armas: "6× .50",
      texto: "O Merlin fabricado pela Packard trouxe compressor de duas velocidades e mais fôlego em altitude. Foi o P-40 da USAAF no Norte da África, com o 33º e o 57º Fighter Groups.",
      secoes: {
        motor: "Packard V-1650-1 (Merlin 28) com compressor de um estágio e duas velocidades. O carburador ficava na parte de baixo do motor, então sumiu a tomada de ar em cima do nariz.",
        estrutura: "A partir do F-5 a fuselagem ganhou ~51 cm na parte traseira para corrigir a instabilidade direcional que vinha com a potência maior.",
        pintura: "Os do 57º FG no deserto usavam a cor areia por cima ('desert pink') e cinza por baixo. Filtro de ar tropical sob o nariz."
      },
      mudou: ["Packard Merlin com compressor de 2 velocidades", "Sem tomada de ar em cima do nariz", "Fuselagem traseira alongada a partir do F-5"] },
    { nome: "P-40K", ano: 1942, foto: "v2-p40-p-40k", prod: "1.300", motor: "Allison V-1710-73 · 1.325 hp", armas: "6× .50",
      texto: "Faltava Merlin, então voltou o Allison, agora mais forte. O torque maior exigiu mais área de cauda.",
      secoes: {
        motor: "V-1710-73 de 1.325 hp com regulador automático de pressão.",
        estrutura: "Os primeiros tinham uma barbatana dorsal na frente do leme. Os blocos finais ganharam a fuselagem longa do P-40F-5."
      },
      mudou: ["Volta ao Allison (V-1710-73, 1.325 hp)", "Barbatana dorsal e depois fuselagem longa"] },
    { nome: "P-40L", ano: 1942, foto: "v2-p40-p-40l", prod: "700", motor: "Packard V-1650-1 Merlin · 1.300 hp", armas: "4× ou 6× .50",
      texto: "Versão aliviada do P-40F, apelidada 'Gypsy Rose Lee' pelos pilotos, em alusão à dançarina de striptease. Tirou peso de onde dava.",
      secoes: { sistemas: "Algumas sem as duas armas externas, menos munição, menos combustível e menos blindagem. Ganhou uns 7 km/h e melhor subida." },
      mudou: ["Mais leve: menos armas, munição e blindagem em alguns blocos", "Mesma fuselagem longa do F-5"] },
    { nome: "P-40M", ano: 1942, foto: "v2-p40-p-40m", prod: "600", motor: "Allison V-1710-81 · 1.200 hp", armas: "6× .50",
      texto: "Feito para o Lend-Lease com o V-1710-81, que rendia melhor em altitude que o -73.",
      secoes: { estrutura: "Pequenas aberturas de refrigeração na frente da cobertura do escapamento e radiador reforçado." },
      mudou: ["V-1710-81, melhor em altitude", "Aberturas de refrigeração extras no nariz"] },
    { nome: "P-40N", ano: 1943, foto: "v-p40-n", prod: "5.220", motor: "Allison V-1710-81/-99/-115 · 1.200–1.360 hp", armas: "4× ou 6× .50",
      texto: "A versão mais produzida e a mais rápida de série, com ~610 km/h no N-1 aliviado. Passou por uma dieta forte e foi sendo atualizada bloco a bloco até 1944.",
      secoes: {
        estrutura: "Estrutura interna aliviada, rodas menores, radiadores e tanques de óleo de alumínio. A partir do N-5 a cabine ganhou armação nova, com o vidro de trás ampliado para melhor visão.",
        armas: "O N-1 tinha só 4 armas para ganhar peso, e os seguintes voltaram a 6. Cabides sob as asas para bombas e tanques."
      },
      sub: [
        { nome: "N-1", texto: "Aliviado: 4× .50, sem tanque dianteiro." },
        { nome: "N-5", texto: "6× .50 de volta, cabine com melhor visão traseira e cabides sob as asas." },
        { nome: "N-15 / N-20", texto: "Mais combustível e V-1710-99." },
        { nome: "N-40", texto: "V-1710-115 de 1.360 hp, nova bateria e outras mudanças elétricas." },
        { nome: "TP-40N", texto: "Conversões biplace de treino." }
      ],
      mudou: ["Estrutura aliviada, rodas menores e radiadores de alumínio", "N-1 com 4 armas; depois volta a 6", "Cabine com melhor visão traseira a partir do N-5"] },
    { nome: "XP-40Q", ano: 1944, foto: "v2-p40-xp-40q", prod: "3 protótipos", motor: "Allison V-1710-121 · 1.425 hp, com injeção de água", armas: "4× .50",
      texto: "A última tentativa de salvar o P-40: canopy em bolha, radiadores nas asas e motor de dois estágios. Chegou a ~679 km/h, mas não superava o P-51D.",
      secoes: {
        motor: "V-1710-121 com compressor de dois estágios e injeção de água. Hélice de 4 pás.",
        estrutura: "Radiadores movidos para as raízes das asas, nariz mais fino, canopy em bolha e pontas das asas cortadas."
      },
      mudou: ["Compressor de 2 estágios e hélice de 4 pás", "Radiadores nas asas e canopy em bolha", "Não entrou em produção"] }
  ],

  p38: [
    { nome: "XP-38", ano: 1939, foto: "v-p38-xp38", prod: "1", motor: "2× Allison V-1710-11/15 com turbo · 960 hp cada", armas: "Desarmado",
      texto: "Protótipo de janeiro de 1939, com os Allison girando em sentidos opostos e turbos GE nas vigas. Em fevereiro cruzou os EUA em 7 h 2 min numa tentativa de recorde e caiu no pouso, mas convenceu o Air Corps.",
      secoes: {
        motor: "Dois V-1710 com turbocompressores GE B-1 nas vigas, atrás dos motores. As hélices giravam para dentro.",
        estrutura: "Duas vigas com motores, turbos e radiadores, e uma nacele central para piloto e armas. Trem triciclo e revestimento de alumínio com rebites embutidos."
      },
      mudou: [] },
    { nome: "YP-38", ano: 1941, foto: "", prod: "13", motor: "2× Allison V-1710-27/29 · 1.150 hp cada", armas: "1× 37 mm M9 · 2× .50 · 2× .30",
      texto: "Lote de avaliação, redesenhado para produção. Mostrou o problema que perseguiu o P-38: perda de controle por compressibilidade em mergulhos rápidos.",
      secoes: {
        motor: "As hélices passaram a girar para fora, com as pás de cima se afastando da nacele, o que acabou com a vibração na cauda e deixou o avião estável como plataforma de tiro.",
        armas: "Todas as armas no nariz, sem convergência: canhão M9 de 37 mm, 2× .50 e 2× .30."
      },
      mudou: ["Hélices girando para fora", "Armamento no nariz: 37 mm + 2× .50 + 2× .30"] },
    { nome: "P-38D", ano: 1941, foto: "v2-p38-p-38d", prod: "36", motor: "2× Allison V-1710-27/29 · 1.150 hp cada", armas: "1× 37 mm · 4× .50",
      texto: "Primeira versão com proteção de combate. Pulou as letras B e C, e o 'D' indicava o padrão de proteção da época.",
      secoes: {
        sistemas: "Tanques autovedantes, blindagem e sistema de oxigênio de baixa pressão.",
        estrutura: "Incidência do estabilizador alterada para reduzir a vibração de cauda."
      },
      mudou: ["Tanques autovedantes e blindagem", "Ajuste no estabilizador contra vibração"] },
    { nome: "P-38E", ano: 1941, foto: "v-p38-e", prod: "210", motor: "2× Allison V-1710-27/29 · 1.150 hp cada", armas: "1× 20 mm Hispano M1 · 4× .50",
      texto: "Trocou o 37 mm por um Hispano de 20 mm e foi a primeira série grande. Muitos viraram F-4 de reconhecimento.",
      secoes: {
        armas: "Canhão M1 de 20 mm com 150 tiros no lugar do 37 mm com 15. 4× .50 com 500 tiros cada.",
        sistemas: "Sistemas hidráulico e elétrico revistos, e instrumentos novos."
      },
      mudou: ["Hispano de 20 mm (150 tiros) no lugar do 37 mm (15 tiros)", "Hidráulica e elétrica revistas"] },
    { nome: "P-38F", ano: 1942, foto: "", prod: "527", motor: "2× Allison V-1710-49/53 · 1.325 hp cada", armas: "1× 20 mm · 4× .50",
      texto: "O primeiro P-38 realmente pronto para combate. Os cabides sob as asas permitiam tanques descartáveis e deram o alcance que fez dele caça de escolta.",
      secoes: {
        sistemas: "Dois cabides sob as asas para tanques de até 1.136 L ou bombas de até 907 kg cada.",
        estrutura: "Flaps Fowler com posição de manobra de 8°, que aumentava a sustentação em curva sem muito arrasto."
      },
      mudou: ["Cabides sob as asas para tanques e bombas", "Flap de manobra a 8°", "V-1710-49/53 de 1.325 hp"] },
    { nome: "P-38G", ano: 1942, foto: "v-p38-g", prod: "1.082", motor: "2× Allison V-1710-51/55 · 1.325 hp cada", armas: "1× 20 mm · 4× .50",
      texto: "Motores e rádio melhores. Foi a versão que derrubou o avião do almirante Yamamoto em abril de 1943, numa interceptação a mais de 600 km da base, voando rasante sobre o mar.",
      secoes: { sistemas: "Rádio novo, sistema de oxigênio melhorado e mais combustível nos tanques descartáveis." },
      mudou: ["V-1710-51/55 com melhor potência em altitude", "Rádio e oxigênio melhores"] },
    { nome: "P-38H", ano: 1943, foto: "v2-p38-p-38h", prod: "601", motor: "2× Allison V-1710-89/91 · 1.425 hp cada", armas: "1× 20 mm · 4× .50",
      texto: "Mais potência, mas o intercooler nas asas não dava conta: acima de certa potência, a mistura esquentava e o motor podia detonar. Isso limitava o uso em altitude.",
      secoes: {
        motor: "V-1710-89/91 de 1.425 hp. Flaps do radiador de óleo com controle automático.",
        sistemas: "Cabides reforçados, para bombas de até 726 kg."
      },
      mudou: ["V-1710-89/91 de 1.425 hp", "Flaps automáticos no radiador de óleo", "Intercooler nas asas limitava a potência"] },
    { nome: "P-38J", ano: 1943, foto: "v-p38-j", prod: "2.970", motor: "2× Allison V-1710-89/91 · 1.425 hp (1.600 hp em emergência)", armas: "1× 20 mm · 4× .50",
      texto: "Resolveu o intercooler: ele saiu das asas e foi para baixo de cada motor, o 'queixo' do J. O espaço liberado virou tanque. No J-25 vieram os flaps de mergulho elétricos, o remédio contra a compressibilidade.",
      secoes: {
        motor: "Intercooler e radiador de óleo num duto sob cada motor, com a entrada de ar maior no 'queixo'. A mistura chegava mais fria e permitia toda a potência.",
        estrutura: "Tanques de 208 L no bordo de ataque, onde antes passavam os dutos do intercooler.",
        sistemas: "J-25: ailerons com servo hidráulico, os primeiros num caça americano, e flaps de mergulho acionados eletricamente sob as asas, que evitavam o mergulho sem saída por compressibilidade.",
        pintura: "A partir de 1944 saíam de fábrica sem pintura, em alumínio natural."
      },
      sub: [
        { nome: "J-5 / J-10", texto: "Queixo novo, para-brisa plano blindado no J-10." },
        { nome: "J-15", texto: "Sistema elétrico revisto." },
        { nome: "J-25", texto: "Ailerons com servo hidráulico e flaps de mergulho elétricos." }
      ],
      mudou: ["Intercooler sob o motor ('queixo') no lugar dos dutos nas asas", "Tanques extras no bordo de ataque", "J-25: ailerons hidráulicos e flaps de mergulho elétricos"] },
    { nome: "P-38L", ano: 1944, foto: "v-p38-l", principal: true, prod: "3.923", motor: "2× Allison V-1710-111/113 · 1.475 hp (1.600 hp em emergência)", armas: "1× 20 mm · 4× .50 · até 10 foguetes HVAR",
      texto: "A versão mais produzida e a mais refinada. Foi o P-38 que dominou o Pacífico, onde o alcance e os dois motores sobre o mar faziam diferença.",
      secoes: {
        motor: "V-1710-111/113 de 1.475 hp, com 1.600 hp em emergência.",
        armas: "No L-5, trilhos para 10 foguetes HVAR de 127 mm sob as asas, primeiro na 'árvore de Natal' e depois em lançadores de comprimento zero.",
        sistemas: "Luz de identificação sob a asa e melhorias de combustível."
      },
      sub: [
        { nome: "P-38L-1", texto: "Padrão com V-1710-111/113." },
        { nome: "P-38L-5", texto: "Foguetes HVAR, bomba de combustível melhorada e cabides reforçados." }
      ],
      mudou: ["V-1710-111/113 de 1.475 hp", "Trilhos para 10 foguetes HVAR", "Melhorias de combustível e cabides"] },
    { nome: "F-4 / F-5", ano: 1942, foto: "v-p38-f5", prod: "≈ 1.400 (conversões e de fábrica)", motor: "Igual ao modelo de base (E, G, J ou L)", armas: "Desarmado",
      texto: "As versões de reconhecimento fotográfico, que voavam alto e rápido demais para serem pegas. O nariz trocou as armas por câmeras.",
      secoes: {
        sistemas: "Quatro ou cinco câmeras K-17, K-22 e K-24, verticais e oblíquas, com aquecimento para não embaçar em altitude. O F-4 vinha do P-38E, e o F-5 do G, J e L.",
        pintura: "Azul 'Haze': uma pintura em degradê, escura embaixo e clara em cima, para sumir contra o céu."
      },
      mudou: ["Armas trocadas por 4–5 câmeras no nariz", "Pintura azul 'Haze'"] },
    { nome: "P-38 'Droop Snoot'", ano: 1944, foto: "", prod: "conversões", motor: "Igual ao P-38J/L", armas: "Desarmado; levava bombas",
      texto: "Líder de formação de bombardeio: um bombardeador ia num nariz de acrílico e dava o sinal para os outros P-38 lançarem as bombas juntos.",
      secoes: {
        estrutura: "Nariz envidraçado com mira de bombardeio Norden e espaço para o bombardeador deitado.",
        sistemas: "A versão 'Pathfinder' tinha radar de bombardeio BTO (H2X) no nariz, para atacar através das nuvens."
      },
      mudou: ["Nariz de acrílico para um bombardeador", "Versão com radar de bombardeio"] },
    { nome: "P-38M Night Lightning", ano: 1945, foto: "v2-p38-p-38m-night-lightning", prod: "≈ 75 conversões", motor: "2× Allison V-1710-111/113", armas: "1× 20 mm · 4× .50",
      texto: "Caça noturno improvisado a partir do P-38L, com operador de radar sentado atrás do piloto, apertado numa cabine elevada.",
      secoes: {
        sistemas: "Radar AN/APS-6 num casulo sob o nariz. Cancelas contra clarão na boca das armas para não cegar o piloto.",
        estrutura: "Cabine alongada e elevada para o segundo tripulante.",
        pintura: "Preto brilhante."
      },
      mudou: ["Segundo tripulante para o radar", "Radar AN/APS-6 sob o nariz", "Cancelas contra clarão nas armas"] }
  ],

  p47: [
    { nome: "XP-47B", ano: 1941, foto: "v-p47-xp47b", prod: "1", motor: "Pratt & Whitney R-2800-17 com turbo · 2.000 hp", armas: "8× .50",
      texto: "O avião inteiro foi desenhado em torno do turbocompressor. Voou em maio de 1941 e já passava de 640 km/h.",
      secoes: {
        motor: "R-2800 Double Wasp de 18 cilindros. O turbo ficava na fuselagem traseira, e os dutos de ar e de gás corriam por baixo da cabine, o que explica a fuselagem enorme.",
        estrutura: "Cabine com abertura tipo porta de carro, asa elíptica e trem que encurtava ao recolher para caber a hélice grande."
      },
      mudou: [] },
    { nome: "P-47B", ano: 1942, foto: "v2-p47-p-47b", prod: "171", motor: "Pratt & Whitney R-2800-21 · 2.000 hp", armas: "8× .50",
      texto: "A primeira série. Cheia de problemas: superfícies de comando que se deformavam em mergulho e o canopy que não abria em alta velocidade.",
      secoes: { estrutura: "Canopy de correr no lugar da porta de carro. Superfícies de comando com revestimento metálico depois de falhas das de tecido." },
      mudou: ["Canopy de correr", "Superfícies de comando metálicas"] },
    { nome: "P-47C", ano: 1942, foto: "v-p47-c", prod: "602", motor: "Pratt & Whitney R-2800-21 · 2.000 hp", armas: "8× .50",
      texto: "Entrou em combate na Europa em abril de 1943, com os 4º, 56º e 78º Fighter Groups.",
      secoes: {
        estrutura: "A partir do C-1 o motor foi 20 cm para frente, o que melhorou o centro de gravidade e a estabilidade.",
        sistemas: "Ponto ventral para tanque descartável e mastro de rádio vertical."
      },
      mudou: ["Motor 20 cm mais à frente (C-1)", "Ponto ventral para tanque"] },
    { nome: "P-47D (razorback)", ano: 1943, foto: "v-p47-d", prod: "≈ 5.000 (blocos D-1 a D-23)", motor: "R-2800-21/-59 · 2.000 hp (2.300 hp com água)", armas: "8× .50 · bombas",
      texto: "O 'Jug' de verdade. Bloco a bloco, ganhou injeção de água, hélice de pás largas e cabides, e de caça de escolta virou o grande caça-bombardeiro da Europa.",
      secoes: {
        motor: "Injeção de água-metanol a partir dos primeiros blocos D, com 2.300 hp em emergência. O R-2800-59 entrou no D-20. Do D-22 em diante, hélices de pás largas Hamilton Standard ou Curtiss, de 4 m, que melhoraram muito a subida.",
        armas: "8× .50 com até 425 tiros cada. Cabides sob as asas desde o D-15, para 2 bombas de 454 kg e mais uma no ventre.",
        sistemas: "Mais blindagem na cabine. Tanques descartáveis sob as asas e no ventre, que deram alcance para escoltar até a Alemanha.",
        pintura: "Verde-oliva e cinza, com faixas brancas de identificação no nariz e na cauda para não ser confundido com o Fw 190."
      },
      sub: [
        { nome: "D-1 a D-6", texto: "Injeção de água, mais blindagem e refrigeração melhorada." },
        { nome: "D-10 / D-11", texto: "R-2800-63, sistema de água revisto." },
        { nome: "D-15", texto: "Cabides sob as asas: virou caça-bombardeiro." },
        { nome: "D-20 / D-22 / D-23", texto: "R-2800-59 e hélices de pás largas." }
      ],
      mudou: ["Injeção de água-metanol: 2.300 hp", "Hélice de pás largas (D-22/23)", "Cabides sob as asas (D-15)"] },
    { nome: "P-47D (bolha)", ano: 1944, foto: "v-p47-d25", principal: true, prod: "≈ 7.000 (blocos D-25 a D-40)", motor: "R-2800-59 · 2.000 hp (2.300 hp com água)", armas: "8× .50 · bombas · foguetes",
      texto: "A partir do D-25 a fuselagem traseira foi rebaixada e o canopy virou uma bolha, com visão para todos os lados. A perda de área lateral piorou a estabilidade direcional, corrigida com uma barbatana dorsal.",
      secoes: {
        estrutura: "Canopy em bolha de correr, inspirado no Typhoon. A partir do D-40, barbatana dorsal na frente do leme.",
        sistemas: "Mais combustível interno, 1.400 L. D-30: flaps de recuperação de mergulho acionados eletricamente sob as asas. D-40: mira giroscópica K-14 e lançadores de foguetes HVAR.",
        pintura: "A maioria em alumínio natural. Faixas pretas e brancas de invasão a partir de junho de 1944."
      },
      sub: [
        { nome: "D-25", texto: "Canopy em bolha e mais combustível." },
        { nome: "D-28", texto: "Hélice Curtiss de pás largas." },
        { nome: "D-30", texto: "Flaps de recuperação de mergulho elétricos e ailerons revistos." },
        { nome: "D-40", texto: "Barbatana dorsal, mira K-14 e foguetes HVAR." }
      ],
      mudou: ["Canopy em bolha e fuselagem traseira rebaixada", "Flaps de mergulho elétricos (D-30)", "Barbatana dorsal e mira K-14 (D-40)"] },
    { nome: "P-47G", ano: 1943, foto: "v2-p47-p-47g", prod: "354", motor: "R-2800-21 · 2.000 hp", armas: "8× .50",
      texto: "P-47C e D fabricados pela Curtiss em Buffalo. A qualidade era inferior e quase todos ficaram nos EUA para treino.",
      secoes: { estrutura: "Dois foram convertidos em TP-47G, com segunda cabine para instrutor." },
      mudou: ["Fabricado pela Curtiss", "Usado em treino; TP-47G biplace"] },
    { nome: "XP-47J", ano: 1944, foto: "v2-p47-xp-47j", prod: "1", motor: "R-2800-57 com turbo CH-5 · 2.800 hp", armas: "6× .50",
      texto: "Versão aliviada e com motor turbinado que chegou a 811 km/h em 1944, um dos aviões a pistão mais rápidos da guerra. Não entrou em produção, mas o motor foi para o P-47M.",
      secoes: { estrutura: "Carenagem justa com ventoinha de refrigeração no nariz, estrutura aliviada e só 6 armas." },
      mudou: ["Turbo CH-5 e motor de 2.800 hp", "Ventoinha de refrigeração no nariz", "811 km/h; só protótipo"] },
    { nome: "P-47M", ano: 1944, foto: "v-p47-m", prod: "130", motor: "R-2800-57(C) com turbo CH-5 · 2.800 hp", armas: "8× .50",
      texto: "Versão de corrida para pegar as bombas voadoras V-1 e os jatos alemães. Passava dos 760 km/h. Quase todos foram para o 56º Fighter Group.",
      secoes: {
        motor: "R-2800-57 com turbo CH-5, que funcionava melhor em altitude. Os primeiros tiveram muitas falhas de ignição: a umidade no transporte por navio corroía os chicotes de ignição, e eles precisaram ser trocados.",
        estrutura: "Freios aerodinâmicos sob as asas."
      },
      mudou: ["R-2800-57 com turbo CH-5: até 2.800 hp", "Freios aerodinâmicos nas asas", "Falhas de ignição no começo, corrigidas trocando os chicotes"] },
    { nome: "P-47N", ano: 1945, foto: "v-p47-n", prod: "1.816", motor: "R-2800-57/-73/-77 · 2.800 hp", armas: "8× .50 · bombas · foguetes",
      texto: "Feito para o Pacífico. Uma asa nova com tanques internos deu alcance para escoltar os B-29 de Iwo Jima até o Japão, em missões de 8 horas.",
      secoes: {
        estrutura: "Asa nova, 46 cm mais longa e de pontas retas, com tanques internos que somavam mais 700 L. Trem reforçado para o peso de decolagem, que passou de 9 t.",
        sistemas: "Piloto automático, essencial para as missões de 8 horas, e rádio e navegação melhores."
      },
      mudou: ["Asa nova de pontas retas com tanques internos", "Alcance para escoltar B-29 até o Japão", "Piloto automático"] }
  ],

  p51: [
    { nome: "NA-73X", ano: 1940, foto: "v-p51-na73x", prod: "1", motor: "Allison V-1710-39 · 1.100 hp", armas: "Desarmado",
      texto: "Protótipo montado em 102 dias. A asa de fluxo laminar e o radiador ventral com efeito Meredith eram as duas grandes ideias do avião.",
      secoes: {
        estrutura: "Asa de fluxo laminar NACA/NAA: o ponto mais espesso ficava mais para trás, e o ar escoava colado por mais tempo, com menos arrasto.",
        motor: "O radiador sob a fuselagem ficava num duto que desacelerava o ar, aquecia e acelerava de novo na saída. Esse é o efeito Meredith, que devolvia parte do arrasto do radiador como empuxo."
      },
      mudou: [] },
    { nome: "XP-51 / P-51", ano: 1941, foto: "v2-p51-xp-51", prod: "2 + 150", motor: "Allison V-1710-39 · 1.150 hp", armas: "4× 20 mm Hispano",
      texto: "O primeiro Mustang da USAAF, comprado quase por obrigação. Os 150 'P-51' sem letra tinham quatro canhões de 20 mm nas asas, e muitos viraram F-6A de reconhecimento.",
      secoes: {
        armas: "4× Hispano de 20 mm nas asas, sem metralhadoras.",
        sistemas: "F-6A: câmeras K-24 atrás da cabine para reconhecimento em baixa altura."
      },
      mudou: ["4 canhões de 20 mm nas asas", "Muitos convertidos para reconhecimento F-6A"] },
    { nome: "A-36A Apache", ano: 1942, foto: "v2-p51-a-36a-apache", prod: "500", motor: "Allison V-1710-87 · 1.325 hp", armas: "6× .50 · 2 bombas de 227 kg",
      texto: "O Mustang bombardeiro de mergulho, comprado porque havia verba para bombardeiros de ataque. Lutou na Sicília e na Itália.",
      secoes: {
        armas: "2× .50 no queixo e 4× .50 nas asas. Cabides para 2 bombas de 227 kg.",
        estrutura: "Freios de mergulho perfurados acima e abaixo de cada asa, para limitar a velocidade no mergulho a ~630 km/h. Muitos pilotos os travavam por causa de problemas de assimetria."
      },
      mudou: ["Freios de mergulho nas asas", "Cabides para bombas", "6× .50 (2 no queixo)"] },
    { nome: "P-51A", ano: 1943, foto: "v-p51-a", prod: "310", motor: "Allison V-1710-81 · 1.200 hp", armas: "4× .50",
      texto: "O último Mustang com Allison. Era rápido em baixa altitude, mas o compressor de um estágio perdia fôlego acima de ~4.500 m, o que o limitou a ataque e reconhecimento.",
      secoes: {
        motor: "V-1710-81 com compressor melhor que o do A-36 e hélice tripá maior.",
        armas: "4× .50 nas asas, sem as armas do queixo.",
        sistemas: "Cabides para tanques descartáveis. Os de reconhecimento eram F-6B."
      },
      mudou: ["V-1710-81, melhor em média altitude", "4× .50 nas asas; sem armas no queixo", "Tanques descartáveis"] },
    { nome: "P-51B", ano: 1943, foto: "v-p51-b", prod: "1.988", motor: "Packard V-1650-3 Merlin · 1.400 hp", armas: "4× .50",
      texto: "O Merlin com compressor de dois estágios transformou o avião: virou o caça de escolta que levava os B-17 até Berlim e voltava.",
      secoes: {
        motor: "Packard V-1650-3 com compressor de dois estágios e duas velocidades, troca automática por um pressostato barométrico, e intercooler. Hélice Hamilton Standard de 4 pás. O radiador ventral cresceu para refrigerar também o intercooler.",
        estrutura: "Tomada de ar do carburador movida para baixo do nariz. Canopy de abrir para o lado. Muitos receberam no campo o canopy Malcolm, abaulado e deslizante, com visão muito melhor.",
        sistemas: "Tanque de 322 L atrás do piloto, que deixava o avião instável com ele cheio: tinha de ser usado primeiro.",
        pintura: "Verde-oliva e depois alumínio natural. Os do 354º FG usavam faixas brancas de identificação."
      },
      mudou: ["Merlin de 2 estágios e 2 velocidades com intercooler", "Hélice de 4 pás e radiador ventral maior", "Tomada de ar sob o nariz; tanque atrás do piloto"] },
    { nome: "P-51C", ano: 1943, foto: "", prod: "1.750", motor: "Packard V-1650-3/-7", armas: "4× .50",
      texto: "Igual ao P-51B, mas feito na fábrica de Dallas. Os C mais novos já usavam o V-1650-7, melhor em baixa altitude.",
      secoes: { motor: "V-1650-7 a partir de alguns blocos, com mais potência em baixa e média altitude." },
      mudou: ["Fabricado em Dallas", "V-1650-7 nos blocos finais"] },
    { nome: "P-51D", ano: 1944, foto: "v-p51-d", principal: true, prod: "≈ 8.100", motor: "Packard V-1650-7 · 1.490 hp (1.720 hp em emergência)", armas: "6× .50",
      texto: "O Mustang definitivo: fuselagem traseira rebaixada, canopy em bolha e seis .50.",
      secoes: {
        armas: "6× .50 montadas em pé, 400 tiros nas internas e 270 nas outras. Nas B/C elas ficavam inclinadas e travavam em curvas com muito g.",
        estrutura: "Canopy em bolha da Malcolm, raiz da asa alongada para caber o trem e as armas, e barbatana dorsal a partir do D-10.",
        sistemas: "Mira giroscópica K-14, que calculava a deflexão a partir da taxa de curva. Os blocos tardios tinham radar de alerta traseiro AN/APS-13, que acendia uma luz e tocava um sinal quando outro avião chegava por trás.",
        pintura: "Alumínio natural com cores de esquadrão no nariz e na cauda."
      },
      sub: [
        { nome: "D-5", texto: "Canopy em bolha, 6× .50 e mira N-3." },
        { nome: "D-10", texto: "Barbatana dorsal." },
        { nome: "D-20", texto: "Mira K-14, lançadores de foguetes e radar de alerta traseiro AN/APS-13 nos tardios." },
        { nome: "D-25 / D-30", texto: "Trem e tanques reforçados." }
      ],
      mudou: ["Canopy em bolha e fuselagem traseira rebaixada", "6× .50 montadas em pé", "Mira K-14 e radar de alerta traseiro"] },
    { nome: "P-51K", ano: 1944, foto: "", prod: "1.500", motor: "Packard V-1650-7", armas: "6× .50",
      texto: "P-51D de Dallas com hélice Aeroproducts, de pás ocas e sem a ponta do spinner, que às vezes vibrava.",
      secoes: { motor: "Hélice Aeroproducts de 3,35 m, menor que a Hamilton de 3,40 m, e spinner diferente." },
      mudou: ["Hélice Aeroproducts", "Fabricado em Dallas"] },
    { nome: "F-6D / F-6K", ano: 1944, foto: "v2-p51-f-6d", prod: "≈ 300", motor: "Packard V-1650-7", armas: "6× .50 (mantidas)",
      texto: "Mustangs de reconhecimento armado: continuavam com as armas e levavam câmeras na fuselagem traseira.",
      secoes: { sistemas: "Câmeras K-17 e K-22 atrás da cabine, com janelas laterais e no chão." },
      mudou: ["Câmeras atrás da cabine", "Mantinha as armas"] },
    { nome: "XP-51F / G / J", ano: 1944, foto: "", prod: "3 + 2 + 2", motor: "Merlin 100 / V-1650-7 / Allison V-1710-119", armas: "4× .50",
      texto: "Os Mustangs leves, redesenhados com cálculos britânicos de carga para cortar até 900 kg. O XP-51G, com Merlin 145M e hélice de 5 pás, passou de 790 km/h.",
      secoes: { estrutura: "Estrutura totalmente nova, canopy mais longo, trem simplificado, radiador menor e asa com outro perfil." },
      mudou: ["Estrutura nova e muito mais leve", "Base do P-51H"] },
    { nome: "P-51H", ano: 1945, foto: "v-p51-h", prod: "555", motor: "Packard V-1650-9 · até 2.218 hp com injeção de água", armas: "6× .50",
      texto: "O Mustang de série mais rápido, com 784 km/h. Herdou a estrutura leve dos XP-51F/G, mas chegou tarde demais para a guerra.",
      secoes: {
        motor: "V-1650-9 com injeção de água e controle automático de pressão (Simmonds), com até 2.218 hp. Hélice Aeroproducts de 4 pás.",
        estrutura: "Fuselagem mais longa, cauda mais alta, canopy menor e radiador redesenhado. Uns 600 kg mais leve que o D."
      },
      mudou: ["V-1650-9 com injeção de água: até 2.218 hp", "Estrutura leve, ~600 kg a menos", "Cauda mais alta e fuselagem mais longa"] }
  ],

  f4f: [
    { nome: "XF4F-2", ano: 1937, foto: "v-f4f-xf4f2", prod: "1", motor: "Pratt & Whitney R-1830-66 · 1.050 hp", armas: "2× .50 (previstas)",
      texto: "Projetado como biplano e mudado para monoplano ainda no papel. Perdeu a concorrência para o Buffalo, mas a Marinha pediu um redesenho.",
      secoes: { estrutura: "Fuselagem curta e gorda, trem que recolhia para dentro da fuselagem por manivela, como nos biplanos Grumman." },
      mudou: [] },
    { nome: "XF4F-3", ano: 1939, foto: "v2-f4f-xf4f-3", prod: "1 (convertido)", motor: "Pratt & Whitney XR-1830-76 · 1.200 hp", armas: "2× .50 + 2× .50",
      texto: "O XF4F-2 redesenhado: motor com compressor de dois estágios, asa maior e cauda nova. Chegou a 538 km/h e a Marinha encomendou.",
      secoes: {
        motor: "R-1830 com compressor de dois estágios e duas velocidades, muito melhor em altitude.",
        estrutura: "Asa mais longa com pontas quadradas e cauda redesenhada."
      },
      mudou: ["Compressor de 2 estágios", "Asa com pontas quadradas e cauda nova"] },
    { nome: "F4F-3", ano: 1940, foto: "v-f4f-3", principal: true, prod: "≈ 285", motor: "Pratt & Whitney R-1830-76 · 1.200 hp", armas: "4× .50",
      texto: "O Wildcat de Wake e do começo da guerra. As asas ainda eram fixas.",
      secoes: {
        armas: "4× .50 nas asas com 450 tiros cada, uns 34 segundos de fogo.",
        sistemas: "Blindagem e tanques autovedantes foram acrescentados durante a produção. Trem recolhido por manivela: 29 voltas."
      },
      sub: [
        { nome: "F4F-3", texto: "Padrão com R-1830-76 de dois estágios." },
        { nome: "F4F-3A", texto: "95 com R-1830-90 de um estágio só, pior em altitude, feito porque faltava o motor de dois estágios." },
        { nome: "F4F-3S 'Wildcatfish'", texto: "Um protótipo com flutuadores, para ilhas sem pista. Lento demais." }
      ],
      mudou: ["Versão de série com 4× .50 e 450 tiros por arma", "Blindagem e tanques autovedantes durante a produção"] },
    { nome: "F4F-4", ano: 1941, foto: "v-f4f-4", prod: "1.169", motor: "Pratt & Whitney R-1830-86 · 1.200 hp", armas: "6× .50",
      texto: "O Wildcat de Midway e Guadalcanal. Asas dobráveis e seis armas, mas mais pesado e com menos munição por arma.",
      secoes: {
        estrutura: "Asas dobrando para trás, rente à fuselagem (Sto-Wing, manual): cabiam muito mais aviões no porta-aviões.",
        armas: "6× .50 com 240 tiros cada, uns 20 segundos de fogo contra 34 do F4F-3. Os pilotos reclamaram.",
        sistemas: "Mais blindagem e tanques autovedantes de série. A subida caiu para ~600 m/min."
      },
      mudou: ["Asas dobráveis para trás (Sto-Wing)", "6× .50, só 240 tiros por arma (eram 450)", "Mais pesado: subida e manobra piores"] },
    { nome: "F4F-7", ano: 1942, foto: "v2-f4f-f4f-7", prod: "21", motor: "Pratt & Whitney R-1830-86", armas: "Desarmado",
      texto: "Versão de reconhecimento de longo alcance, sem armas, com as asas transformadas em tanques.",
      secoes: { sistemas: "Asas fixas cheias de combustível, uns 2.600 L, com alcance de mais de 5.000 km. Câmeras na fuselagem e sistema de alijamento de combustível." },
      mudou: ["Armas removidas; asas viraram tanques", "Câmeras para reconhecimento"] },
    { nome: "FM-1", ano: 1942, foto: "", prod: "1.151", motor: "Pratt & Whitney R-1830-86", armas: "4× .50",
      texto: "F4F-4 fabricado pela General Motors (Eastern Aircraft), para a Grumman se concentrar no Hellcat.",
      secoes: { armas: "Voltou a 4× .50 com 430 tiros cada, de novo com mais tempo de fogo." },
      mudou: ["Fabricado pela General Motors", "Volta a 4× .50 com mais munição"] },
    { nome: "FM-2", ano: 1943, foto: "v-f4f-fm2", prod: "4.127", motor: "Wright R-1820-56 Cyclone · 1.350 hp", armas: "4× .50",
      texto: "Para os porta-aviões de escolta, que tinham convés curto. O motor de uma estrela era mais leve e mais forte, e o FM-2 virou o Wildcat mais produzido.",
      secoes: {
        motor: "Wright R-1820 Cyclone de 9 cilindros numa estrela, contra 14 cilindros em duas do Twin Wasp. Tinha mais potência na decolagem e saiu uns 200 kg mais leve.",
        estrutura: "Leme mais alto para segurar o torque e radiador de óleo revisto.",
        sistemas: "Cabides para foguetes HVAR e bombas, usados contra submarinos e em ataque ao solo."
      },
      mudou: ["Wright R-1820 de uma estrela: mais leve e mais potente", "Leme mais alto", "Foguetes e bombas"] }
  ],

  f6f: [
    { nome: "XF6F-1", ano: 1942, foto: "v2-f6f-xf6f-1", prod: "1", motor: "Wright R-2600-10 Cyclone · 1.700 hp", armas: "6× .50",
      texto: "Protótipo de junho de 1942. A Grumman usou as lições do Wildcat contra o Zero: avião grande, asa baixa e enorme, muita blindagem e combustível.",
      secoes: { estrutura: "Asa de 31 m², a maior entre os caças monomotores americanos, e trem largo que girava 90° e recolhia para trás." },
      mudou: [] },
    { nome: "XF6F-3", ano: 1942, foto: "v-f6f-xf6f", prod: "1", motor: "Pratt & Whitney R-2800-10 · 2.000 hp", armas: "6× .50",
      texto: "O protótipo com o R-2800 Double Wasp, que virou o padrão da série.",
      secoes: { motor: "R-2800 de 18 cilindros com compressor de dois estágios." },
      mudou: ["R-2800 de 2.000 hp no lugar do R-2600"] },
    { nome: "F6F-3", ano: 1943, foto: "v-f6f-3", prod: "4.402", motor: "Pratt & Whitney R-2800-10 / -10W · 2.000 hp", armas: "6× .50",
      texto: "Entrou em combate em setembro de 1943 e dominou o Zero quase imediatamente. Foi o caça que mais derrubou aviões na Marinha dos EUA.",
      secoes: {
        armas: "6× .50 com 400 tiros cada.",
        sistemas: "Blindagem de ~95 kg em volta do piloto, do óleo e do motor. Tanques autovedantes. O R-2800-10W dos últimos tinha injeção de água."
      },
      mudou: ["Versão de série", "Injeção de água nos últimos (-10W)"] },
    { nome: "F6F-3N / -3E", ano: 1943, foto: "", prod: "≈ 230", motor: "R-2800-10W", armas: "6× .50",
      texto: "Os primeiros caças noturnos da família. O radar ficava num casulo no bordo de ataque da asa direita, e o piloto voava e operava a tela sozinho.",
      secoes: { sistemas: "-3N: radar AN/APS-6. -3E: radar AN/APS-4. Iluminação vermelha na cabine e para-brisa sem armação para não refletir." },
      mudou: ["Radar num casulo na asa direita", "Iluminação de cabine para voo noturno"] },
    { nome: "F6F-5", ano: 1944, foto: "v-f6f-5", principal: true, prod: "7.870", motor: "Pratt & Whitney R-2800-10W · 2.200 hp com água", armas: "6× .50 (ou 2× 20 mm + 4× .50) · 6 foguetes HVAR · bombas",
      texto: "A versão definitiva, com refinamentos que vieram dos relatos de combate.",
      secoes: {
        estrutura: "Carenagem do motor mais justa, para-brisa plano blindado, janelinhas atrás da cabine eliminadas, ailerons com compensadores de mola e cauda reforçada.",
        armas: "Alguns trocaram 2 das .50 por 2 canhões de 20 mm. Cabides para 6 foguetes HVAR e bombas de até 907 kg.",
        sistemas: "Mais blindagem atrás do piloto."
      },
      mudou: ["Para-brisa blindado plano e carenagem refinada", "Ailerons com compensadores de mola", "Foguetes HVAR e opção de 2× 20 mm"] },
    { nome: "F6F-5N", ano: 1944, foto: "v-f6f-n", prod: "1.189", motor: "R-2800-10W", armas: "6× .50 ou 2× 20 mm + 4× .50",
      texto: "O caça noturno padrão da Marinha no fim da guerra.",
      secoes: {
        sistemas: "Radar AN/APS-6 de 3 cm num casulo na asa direita, com alcance de ~8 km contra caças. Painel com iluminação vermelha.",
        pintura: "Azul escuro brilhante, o padrão da Marinha em 1944–45."
      },
      mudou: ["Radar AN/APS-6", "Muitos com 2 canhões de 20 mm"] },
    { nome: "F6F-5P", ano: 1944, foto: "", prod: "conversões", motor: "R-2800-10W", armas: "6× .50",
      texto: "Reconhecimento fotográfico armado: manteve as armas e ganhou uma câmera na fuselagem traseira.",
      secoes: { sistemas: "Câmera vertical ou oblíqua atrás da cabine." },
      mudou: ["Câmera na fuselagem traseira"] },
    { nome: "XF6F-6", ano: 1944, foto: "", prod: "2", motor: "Pratt & Whitney R-2800-18W · 2.100 hp", armas: "6× .50",
      texto: "Hellcat com motor de dois estágios e hélice de 4 pás. Chegou a 670 km/h, o Hellcat mais rápido, mas a guerra acabou antes da produção.",
      secoes: { motor: "R-2800-18W com hélice Hamilton Standard de 4 pás." },
      mudou: ["Hélice de 4 pás", "Motor -18W; só protótipo"] }
  ],

  f4u: [
    { nome: "XF4U-1", ano: 1940, foto: "v-f4u-xf4u", prod: "1", motor: "Pratt & Whitney XR-2800-4 · 1.850 hp", armas: "2× .50 · 2× .30",
      texto: "Em outubro de 1940 virou o primeiro caça monomotor americano a passar de 400 mph (644 km/h). A asa de gaivota invertida é a marca do avião.",
      secoes: {
        estrutura: "Asa de gaivota invertida: deixava o trem curto e forte e dava espaço para a hélice de 4 m que o R-2800 precisava. O encontro em ângulo reto com a fuselagem também reduzia o arrasto. Revestimento com solda a ponto, para uma superfície lisa.",
        armas: "Armas no capô e nas asas."
      },
      mudou: [] },
    { nome: "F4U-1", ano: 1942, foto: "v-f4u-1", prod: "758", motor: "Pratt & Whitney R-2800-8 · 2.000 hp", armas: "6× .50",
      texto: "Para caber 6 armas nas asas, o combustível foi para a fuselagem, e a cabine recuou. O nariz comprido tapava a visão no pouso, e o avião foi primeiro para os Fuzileiros, em terra.",
      secoes: {
        armas: "6× .50 nas asas, com 400 tiros nas internas e 375 nas externas.",
        estrutura: "Tanque de 900 L na fuselagem, na frente da cabine, que recuou 81 cm. O canopy cheio de armações deu o apelido 'birdcage', gaiola de pássaro.",
        sistemas: "No pouso, a asa direita estolava antes da esquerda e o trem quicava. Por isso o avião não foi liberado para porta-aviões no começo."
      },
      mudou: ["Cabine recuada 81 cm para caber tanque na fuselagem", "6× .50 nas asas", "Canopy 'birdcage'"] },
    { nome: "F4U-1A", ano: 1943, foto: "v-f4u-1a", prod: "2.066", motor: "Pratt & Whitney R-2800-8(W) · 2.000 hp", armas: "6× .50",
      texto: "Resolveu os problemas de pouso e liberou o Corsair para porta-aviões. Foi o avião dos ases do VF-17 e do VMF-214 de Pappy Boyington.",
      secoes: {
        estrutura: "Canopy mais alto e com menos armação, assento 18 cm mais alto e bequilha mais longa: visão muito melhor. Uma pequena cunha de 15 cm no bordo de ataque da asa direita fazia as duas asas estolarem juntas.",
        sistemas: "Amortecedor do trem principal revisto, sem quique. Injeção de água nos tardios."
      },
      mudou: ["Canopy mais alto e assento elevado", "Cunha na asa direita contra o estol assimétrico", "Amortecedor do trem sem quique"] },
    { nome: "F4U-1C", ano: 1944, foto: "", prod: "200", motor: "R-2800-8W", armas: "4× 20 mm AN/M2",
      texto: "Corsair com canhões. Os 20 mm eram devastadores contra alvos no solo, mas congelavam em altitude no começo, e os pilotos preferiam as .50 para combate aéreo.",
      secoes: { armas: "4 canhões AN/M2 de 20 mm com 231 tiros cada." },
      mudou: ["4 canhões de 20 mm no lugar das 6× .50"] },
    { nome: "F4U-1D", ano: 1944, foto: "v-f4u-1d", prod: "1.375", motor: "Pratt & Whitney R-2800-8W · 2.250 hp com água", armas: "6× .50 · 8 foguetes · 2 bombas",
      texto: "A versão caça-bombardeiro, para a fase final do Pacífico: Iwo Jima e Okinawa.",
      secoes: {
        motor: "Injeção de água-metanol de série, com 2.250 hp em emergência.",
        armas: "Dois cabides centrais para tanques ou bombas de 454 kg, e trilhos para 8 foguetes HVAR.",
        sistemas: "Saíram os tanques desprotegidos do bordo de ataque das asas, compensados pelos tanques descartáveis."
      },
      mudou: ["Injeção de água de série: 2.250 hp", "Dois cabides e 8 foguetes", "Sem os tanques desprotegidos das asas"] },
    { nome: "F4U-2", ano: 1943, foto: "v-f4u-2", prod: "32 conversões", motor: "R-2800-8", armas: "5× .50",
      texto: "Caça noturno convertido pela Naval Aircraft Factory: um único homem pilotando, operando o radar e atirando, à noite, sobre o mar.",
      secoes: {
        sistemas: "Radar AIA de 3 cm num radomo na ponta da asa direita, com tela na cabine. Piloto automático e rádio-altímetro.",
        armas: "Uma .50 da asa direita removida para compensar o peso do radar."
      },
      mudou: ["Radar AIA na ponta da asa direita", "Uma metralhadora a menos (5× .50)", "Piloto automático"] },
    { nome: "FG-1 / F3A-1", ano: 1943, foto: "", prod: "4.007 (Goodyear) + 735 (Brewster)", motor: "R-2800-8", armas: "6× .50",
      texto: "Corsairs fabricados pela Goodyear e pela Brewster, para aumentar a produção. O FG-1 da Goodyear tinha asas fixas, pensado para uso em terra.",
      secoes: { estrutura: "FG-1: asas sem dobradiça, mais leves. FG-1A e FG-1D seguiam os padrões 1A e 1D da Vought. Os Brewster tinham problemas de qualidade." },
      mudou: ["Fabricados pela Goodyear e pela Brewster", "FG-1 com asas fixas"] },
    { nome: "F4U-4", ano: 1944, foto: "v-f4u-4", principal: true, prod: "2.357", motor: "Pratt & Whitney R-2800-18W · 2.100 hp (2.450 hp em emergência)", armas: "6× .50 (F4U-4C: 4× 20 mm)",
      texto: "O Corsair da fase final da guerra e da Coreia, com motor de dois estágios mais forte e hélice de 4 pás. Passava de 710 km/h.",
      secoes: {
        motor: "R-2800-18W com compressor de dois estágios e injeção de água, até 2.450 hp. Hélice Hamilton Standard de 4 pás. A tomada de ar do carburador foi para o queixo da carenagem.",
        estrutura: "Cabine redesenhada, com piso inteiro e painel novo, e assento mais confortável.",
        sistemas: "Mais blindagem e lançadores de foguetes."
      },
      mudou: ["R-2800-18W com até 2.450 hp e hélice de 4 pás", "Tomada de ar no queixo", "Cabine redesenhada"] },
    { nome: "F2G 'Super Corsair'", ano: 1945, foto: "", prod: "10", motor: "Pratt & Whitney R-4360 Wasp Major · 3.000 hp", armas: "4× .50",
      texto: "Goodyear com o motor de 28 cilindros em quatro estrelas, o maior radial de série. Era para interceptar os kamikaze, mas chegou tarde. Depois da guerra virou avião de corrida.",
      secoes: {
        motor: "R-4360 de 28 cilindros em 4 estrelas, com 3.000 hp. Hélice de 4 m.",
        estrutura: "Canopy em bolha, tomada de ar atrás da cabine e leme mais alto para o torque enorme."
      },
      mudou: ["Motor de 28 cilindros e 3.000 hp", "Canopy em bolha", "Leme mais alto"] }
  ],

  f2a: [
    { nome: "XF2A-1", ano: 1937, foto: "v-f2a-x", prod: "1", motor: "Wright R-1820-22 Cyclone · 950 hp", armas: "1× .50 · 1× .30",
      texto: "Protótipo de dezembro de 1937 que venceu a concorrência contra o XF4F-2 da Grumman.",
      secoes: { estrutura: "Fuselagem em barril, asa média e trem que recolhia para dentro da fuselagem. Estrutura toda metálica com revestimento rebitado embutido." },
      mudou: [] },
    { nome: "F2A-1", ano: 1939, foto: "v-f2a-1", prod: "11 na Marinha", motor: "Wright R-1820-34 Cyclone · 940 hp", armas: "2× .50 no capô · 2× .50 nas asas",
      texto: "O primeiro caça monoplano da Marinha dos EUA em esquadrão, no VF-3. Leve e manobrável.",
      secoes: {
        estrutura: "Canopy e deriva revisados em relação ao protótipo.",
        sistemas: "Sem blindagem e sem tanques protegidos."
      },
      mudou: ["Canopy e deriva revistos", "Armas no capô e nas asas"] },
    { nome: "F2A-2", ano: 1940, foto: "v-f2a-2", prod: "43", motor: "Wright R-1820-40 Cyclone · 1.200 hp", armas: "4× .50",
      texto: "O melhor dos Buffalo em desempenho: mais motor, antes da blindagem e do combustível extra do F2A-3 pesarem.",
      secoes: { motor: "R-1820-40 de 1.200 hp e hélice Curtiss Electric nova.", estrutura: "Leme maior, trem reforçado." },
      mudou: ["R-1820-40 de 1.200 hp", "Hélice nova e leme maior"] },
    { nome: "F2A-3", ano: 1941, foto: "v-f2a-3", principal: true, prod: "108", motor: "Wright R-1820-40 Cyclone · 1.200 hp", armas: "4× .50",
      texto: "Ficou pesado demais para o motor que tinha. Foi o Buffalo dos Fuzileiros em Midway, em junho de 1942, onde o VMF-221 sofreu muito contra os Zero.",
      secoes: {
        estrutura: "Nariz alongado 25 cm com tanque extra.",
        sistemas: "Blindagem do piloto e tanques autovedantes. O peso subiu ~500 kg sem aumento de potência, e o trem passou a falhar com frequência."
      },
      mudou: ["Nariz alongado com mais combustível", "Blindagem e tanques autovedantes: ~500 kg a mais", "Mais lento e menos manobrável"] }
  ]
});
