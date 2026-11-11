/* Variantes — Alemanha */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  bf109: [
    { nome: "V1", ano: 1935, foto: "v2-bf109-v1", prod: "1", motor: "Rolls-Royce Kestrel VI · 695 hp", armas: "Desarmado",
      texto: "O protótipo voou em maio de 1935 com um motor Rolls-Royce comprado, porque o Jumo 210 não estava pronto. Já tinha tudo o que definiu o 109: asa pequena, slats automáticos, cabine fechada e trem preso na fuselagem.",
      secoes: { estrutura: "Fuselagem monocoque de duas metades unidas no meio. O trem ficava preso na fuselagem e abria para fora, o que permitia trocar a asa sem levantar o avião, mas deixava a bitola estreita: muitos acidentes no pouso a vida toda." },
      mudou: [] },
    { nome: "B 'Bruno'", ano: 1937, foto: "", prod: "≈ 340", motor: "Junkers Jumo 210D · 640 hp", armas: "3× MG 17 de 7,92 mm",
      texto: "A primeira série de produção. Começou com hélice de madeira de passo fixo e logo passou a uma VDM metálica de passo variável.",
      secoes: {
        armas: "2 MG 17 no capô, sincronizadas, e uma terceira entre as bancadas do motor, atirando pelo cubo. Essa terceira vibrava e superaquecia.",
        motor: "Jumo 210D com carburador e compressor de uma velocidade."
      },
      mudou: ["Versão de série com Jumo 210D", "3× MG 17", "Hélice VDM de passo variável nas tardias"] },
    { nome: "C 'Clara'", ano: 1938, foto: "", prod: "58", motor: "Junkers Jumo 210G · 700 hp", armas: "4× MG 17 (C-3: 2× MG 17 + 2× MG FF)",
      texto: "Primeiro 109 com injeção de combustível e com armas nas asas.",
      secoes: {
        motor: "Jumo 210G com injeção direta, sem carburador.",
        armas: "Duas MG 17 no capô e duas nas asas. O C-3 testou canhões MG FF de 20 mm nas asas."
      },
      mudou: ["Jumo 210G com injeção direta", "Armas nas asas: 4× MG 17"] },
    { nome: "D 'Dora'", ano: 1938, foto: "v-bf109-bcd", prod: "≈ 650", motor: "Junkers Jumo 210D · 680 hp", armas: "4× MG 17",
      texto: "Faltavam motores com injeção, então voltou o Jumo com carburador. Ainda era o 109 de muitas unidades em setembro de 1939.",
      secoes: { motor: "Jumo 210D com carburador, mais simples de fabricar, e radiador sob o nariz." },
      mudou: ["Volta ao Jumo 210D com carburador", "Mantém 4× MG 17"] },
    { nome: "E-1", ano: 1939, foto: "v2-bf109-e-1", prod: "≈ 1.200", motor: "Daimler-Benz DB 601A · 1.100 hp", armas: "4× MG 17 (ou 2× MG 17 + 2× MG FF)",
      texto: "O primeiro com o DB 601, o motor que fez o 109 de verdade. Mudou o nariz e os radiadores.",
      secoes: {
        motor: "DB 601A, V12 invertido de 33,9 litros com injeção direta Bosch: não engasgava em g negativo, e o piloto podia empurrar o nariz para baixo e fugir, coisa que um Merlin com carburador não fazia. Compressor com acoplamento hidráulico, que ajustava a velocidade sozinho conforme a altitude. Hélice VDM de passo variável elétrico.",
        estrutura: "Radiador de óleo sob o nariz e dois radiadores de água sob as asas, com abas automáticas. Nariz mais longo e mais alto."
      },
      mudou: ["DB 601A com injeção direta e compressor hidráulico", "Radiadores sob as asas", "Hélice VDM de passo elétrico"] },
    { nome: "E-3", ano: 1940, foto: "v-bf109-e", prod: "≈ 1.300", motor: "Daimler-Benz DB 601A · 1.175 hp", armas: "2× MG 17 · 2× MG FF 20 mm",
      texto: "O 109 da campanha da França e do começo da Batalha da Inglaterra. Os canhões nas asas viraram padrão.",
      secoes: {
        armas: "2 MG FF de 20 mm nas asas, com tambor de 60 tiros cada: pouco tempo de fogo e cadência baixa, mas destruidores. 2 MG 17 no capô com 1.000 tiros cada.",
        sistemas: "Blindagem atrás do piloto acrescentada durante 1940. Rádio FuG 7.",
        pintura: "Verde escuro (RLM 70/71) e cinza (RLM 02) por cima e azul claro (RLM 65) por baixo. Durante a Batalha da Inglaterra as laterais ficaram mais claras, com manchas, para combater sobre o Canal. Nariz e leme amarelos para identificação."
      },
      mudou: ["2 canhões MG FF de 20 mm nas asas de série", "Blindagem atrás do piloto"] },
    { nome: "E-4", ano: 1940, foto: "v2-bf109-e-4", prod: "≈ 1.000", motor: "DB 601A (E-4/N: DB 601N · 1.200 hp)", armas: "2× MG 17 · 2× MG FF/M",
      texto: "Mudanças da experiência da Batalha da Inglaterra: munição melhor, mais proteção e mais visão.",
      secoes: {
        armas: "MG FF/M: canhão que disparava granadas de parede fina com muito explosivo ('Minengeschoss').",
        estrutura: "Canopy novo com armação quadrada e vidro mais plano, também colocado em muitos E-3.",
        sistemas: "Placa de blindagem curva sobre a cabeça do piloto, presa ao canopy.",
        motor: "E-4/N: DB 601N, com cabeçotes mais altos e taxa de compressão maior, para gasolina C3 de 96 octanas. 1.200 hp."
      },
      sub: [
        { nome: "E-4", texto: "MG FF/M, canopy quadrado e blindagem da cabeça." },
        { nome: "E-4/B", texto: "Caça-bombardeiro, com bomba de 250 kg sob a fuselagem." },
        { nome: "E-4/N", texto: "DB 601N de 1.200 hp para gasolina C3." }
      ],
      mudou: ["Canhões MG FF/M de granada de mina", "Canopy de armação quadrada", "Blindagem sobre a cabeça; versão N com DB 601N"] },
    { nome: "E-7", ano: 1940, foto: "v2-bf109-e-7", prod: "≈ 500", motor: "DB 601A / 601N", armas: "2× MG 17 · 2× MG FF/M · bomba ou tanque",
      texto: "O primeiro 109 com tanque descartável. O alcance curto foi o grande problema do 109 sobre a Inglaterra, e o E-7 tentava resolver isso.",
      secoes: {
        sistemas: "Cabide ETC 500 sob a fuselagem para tanque de 300 L ou bomba de 250 kg.",
        estrutura: "E-7/U2: blindagem extra no motor e no radiador para ataque ao solo."
      },
      sub: [
        { nome: "E-7", texto: "Cabide para tanque de 300 L." },
        { nome: "E-7/N", texto: "Com o DB 601N." },
        { nome: "E-7/U2", texto: "Blindagem extra para ataque ao solo." }
      ],
      mudou: ["Cabide ventral para tanque de 300 L ou bomba", "Versão U2 blindada para ataque"] },
    { nome: "E-7/Trop", ano: 1941, foto: "", prod: "parte dos E-7", motor: "Daimler-Benz DB 601N · 1.200 hp", armas: "2× MG 17 · 2× MG FF/M",
      texto: "O primeiro 109 do deserto. Chegou à Líbia em abril de 1941 com o I./JG 27, para apoiar o Afrika Korps de Rommel. O avião foi adaptado à areia e ao calor.",
      secoes: {
        motor: "Filtro de areia (Staubfilter) na tomada de ar do compressor, do lado esquerdo do nariz. Numa caixa cilíndrica, o ar passava por telas antes de chegar ao motor. Custava velocidade, mas sem ele a areia destruía os cilindros em poucas horas.",
        sistemas: "Kit de sobrevivência no deserto atrás da cabine, com água, comida, pistola e sinalizadores. Proteção extra para os mecanismos contra a poeira.",
        pintura: "Areia (RLM 79 Sandgelb) por cima e azul claro (RLM 78) por baixo, às vezes com manchas verde-oliva (RLM 80). Faixa branca na fuselagem traseira e pontas das asas brancas: a marca de identificação do teatro do Mediterrâneo."
      },
      mudou: ["Filtro de areia na tomada do compressor", "Kit de sobrevivência no deserto", "Pintura areia e azul, com faixa branca do Mediterrâneo"] },
    { nome: "F-1 / F-2", ano: 1941, foto: "v2-bf109-f-1", prod: "≈ 1.500", motor: "DB 601N · 1.200 hp", armas: "F-1: 1× MG FF/M · F-2: 1× MG 151/15 · 2× MG 17",
      texto: "Para muitos pilotos, o 109 mais equilibrado. A aerodinâmica foi toda refeita, e as asas ficaram sem armas.",
      secoes: {
        estrutura: "Pontas das asas arredondadas, carenagem do motor nova e mais limpa, spinner maior, estabilizador sem montantes e bequilha semi-retrátil. Radiadores mais rasos com sistema de camada-limite. Nas primeiras F, a cauda se soltou em voo por vibração, e a estrutura foi reforçada.",
        armas: "Um canhão entre as bancadas do V12, atirando pelo cubo da hélice: no F-1, o MG FF/M com 60 tiros; no F-2, o MG 151/15 com 200 tiros, de cadência alta. Menos fogo que o E, mas tudo no eixo do avião, mais fácil de acertar."
      },
      sub: [
        { nome: "F-1", texto: "MG FF/M de 20 mm no cubo." },
        { nome: "F-2", texto: "MG 151/15 de 15 mm no cubo, com 200 tiros. Também houve F-2/Trop no deserto." }
      ],
      mudou: ["Aerodinâmica refeita: pontas arredondadas, sem montantes na cauda", "Canhão único no cubo; asas sem armas", "Bequilha semi-retrátil"] },
    { nome: "F-4", ano: 1941, foto: "v-bf109-f", prod: "≈ 1.840", motor: "Daimler-Benz DB 601E · 1.350 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "O F definitivo, com motor mais forte e canhão de 20 mm de alta cadência. Dominou o front oriental em 1941–42.",
      secoes: {
        motor: "DB 601E de 1.350 hp, que funcionava com gasolina B4 de 87 octanas: bem mais fácil de abastecer no front que o 601N.",
        armas: "MG 151/20 com 150 tiros pelo cubo, com o dobro da cadência do MG FF e trajetória melhor.",
        sistemas: "Vidro blindado mais grosso no para-brisa e tanque autovedante melhor. F-4/R1: gôndolas de 20 mm sob as asas. F-4/Z: injeção de GM-1 (óxido nitroso) para altitude."
      },
      mudou: ["DB 601E de 1.350 hp com gasolina comum", "MG 151/20 no cubo", "Vidro blindado mais grosso; kits R1 e Z"] },
    { nome: "F-4/Trop", ano: 1942, foto: "", prod: "parte dos F-4", motor: "Daimler-Benz DB 601E · 1.350 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "O 109 do deserto em sua melhor forma. Era o avião de Hans-Joachim Marseille, o 'Amarelo 14' do JG 27, que derrubou 17 aviões num único dia em setembro de 1942.",
      secoes: {
        motor: "Filtro de areia (Staubfilter) na tomada de ar do compressor, com carenado em forma de cilindro do lado esquerdo do nariz. O piloto podia desligar o filtro em voo, depois de sair da poeira da decolagem, para recuperar potência.",
        sistemas: "Kit de sobrevivência no deserto e um para-sol de lona para proteger a cabine no chão, que podia passar de 50 °C. Bateria e instrumentos com proteção contra o calor. Os mecânicos trocavam o óleo bem mais vezes por causa da areia.",
        pintura: "Areia (RLM 79) por cima e azul claro (RLM 78) por baixo, às vezes com manchas verde-oliva (RLM 80) para pistas com vegetação. Faixa branca na fuselagem traseira, pontas das asas brancas e, em muitos, spinner com espiral branca."
      },
      mudou: ["Filtro de areia que podia ser desligado em voo", "Kit de deserto e para-sol para a cabine", "Pintura areia e azul, faixa branca do Mediterrâneo"] },
    { nome: "G-1", ano: 1942, foto: "", prod: "167", motor: "Daimler-Benz DB 605A · 1.475 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "O primeiro com o DB 605, feito para alta altitude, com cabine pressurizada.",
      secoes: {
        motor: "DB 605A: o 601 com cilindros alargados, 35,7 litros e 1.475 hp. Maior e mais pesado.",
        sistemas: "Cabine pressurizada por um compressor pequeno, com tomada de ar no lado direito do capô. Vidros duplos com sílica-gel entre as placas para não embaçar. Provisão para injeção de GM-1.",
        estrutura: "Estrutura reforçada para o motor mais pesado e trem reforçado."
      },
      mudou: ["DB 605A de 1.475 hp", "Cabine pressurizada com vidros duplos", "Estrutura reforçada"] },
    { nome: "G-2", ano: 1942, foto: "v-bf109-g2", prod: "≈ 1.590", motor: "Daimler-Benz DB 605A · 1.475 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "O G-1 sem pressurização: mais simples, mais leve e mais produzido. Muitos pilotos o consideravam o melhor G de pilotar.",
      secoes: { sistemas: "Sem compressor de cabine nem vidros duplos. G-2/R1: cabide de bomba e tanques sob as asas, para caça-bombardeiro de longo alcance." },
      mudou: ["Sem pressurização: mais simples e leve", "Mesmo armamento do F-4"] },
    { nome: "G-2/Trop", ano: 1942, foto: "", prod: "parte dos G-2", motor: "DB 605A · 1.475 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "O G-2 adaptado ao deserto. Chegou ao JG 27 e ao JG 77 no fim de 1942, durante El Alamein e a retirada para a Tunísia.",
      secoes: {
        motor: "Filtro de areia redondo na tomada do compressor, maior que o do F-4/Trop.",
        sistemas: "Kit de deserto, para-sol e uma pequena alça na lateral esquerda da fuselagem para fixar o para-sol.",
        pintura: "Areia (RLM 79) e azul claro (RLM 78), faixa branca e pontas das asas brancas. Na Tunísia, alguns usavam manchas de verde."
      },
      mudou: ["Filtro de areia maior", "Kit de deserto e para-sol"] },
    { nome: "G-4", ano: 1942, foto: "", prod: "≈ 1.240", motor: "DB 605A · 1.475 hp", armas: "1× MG 151/20 · 2× MG 17",
      texto: "Igual ao G-2 por fora, mas com uma mudança importante de rádio.",
      secoes: {
        sistemas: "Rádio VHF FuG 16Z no lugar do FuG 7a de HF: comunicação clara e com mais alcance, compatível com o controle no solo por radar. A antena mudou de lugar.",
        estrutura: "Rodas maiores (660 × 160 mm), que não cabiam na asa e criaram as pequenas bolhas no extradorso, sobre os poços das rodas."
      },
      mudou: ["Rádio VHF FuG 16Z", "Rodas maiores com bolhas no extradorso da asa"] },
    { nome: "G-5", ano: 1943, foto: "v2-bf109-g-5", prod: "≈ 475", motor: "DB 605A / AS", armas: "1× MG 151/20 · 2× MG 131",
      texto: "O G-6 com cabine pressurizada, para interceptar bombardeiros em altitude.",
      secoes: { sistemas: "Pressurização como no G-1. G-5/AS: motor DB 605AS com compressor maior." },
      mudou: ["G-6 com cabine pressurizada"] },
    { nome: "G-6", ano: 1943, foto: "v-bf109-g6", principal: true, prod: "≈ 12.000", motor: "Daimler-Benz DB 605A · 1.475 hp", armas: "1× MG 151/20 (ou MK 108) · 2× MG 131",
      texto: "A versão mais produzida de todos os caças da história, junto com os G-14. Feito para enfrentar bombardeiros, ganhou um sistema de kits que o deixava pesado e desajeitado contra caças.",
      secoes: {
        armas: "As MG 17 do capô viraram MG 131 de 13 mm. Como as culatras eram maiores, apareceram as 'bolhas' (Beulen) na carenagem, que deram ao G-6 o apelido 'Beule'.",
        sistemas: "Kits de fábrica (Umrüst-Bausätze) e de campo (Rüstsätze): R1 com cabide de bomba de 250 kg; R3 com tanque de 300 L; R6 com 2 gôndolas de MG 151/20 sob as asas ('Kanonenboot'), destruidoras contra bombardeiros mas que custavam uns 30 km/h; U4 com o canhão MK 108 de 30 mm no cubo. G-6/N, caça noturno: radar passivo FuG 350 Naxos para detectar o radar dos bombardeiros e cancelas contra clarão.",
        estrutura: "Os tardios receberam o canopy Erla Haube, de armação mínima, e o leme alto de madeira."
      },
      sub: [
        { nome: "G-6", texto: "Padrão, com 2× MG 131." },
        { nome: "G-6/R6", texto: "Gôndolas de 20 mm sob as asas, contra bombardeiros." },
        { nome: "G-6/U4", texto: "MK 108 de 30 mm no cubo." },
        { nome: "G-6/AS", texto: "DB 605AS com compressor do DB 603, maior. Carenagem com bolhas assimétricas, para alta altitude." },
        { nome: "G-6/Trop", texto: "Filtro de areia, para a Itália, os Bálcãs e o Mediterrâneo." },
        { nome: "G-6/N", texto: "Caça noturno 'Wilde Sau' com radar passivo Naxos." }
      ],
      mudou: ["2× MG 131 de 13 mm com as 'bolhas' na carenagem", "Sistema de kits: gôndolas de 20 mm, MK 108 de 30 mm, bombas", "Versões AS, Trop e de caça noturno"] },
    { nome: "G-10", ano: 1944, foto: "v2-bf109-g-10", prod: "≈ 2.600", motor: "Daimler-Benz DB 605D · até 1.850 hp com MW 50", armas: "1× MG 151/20 ou MK 108 · 2× MG 131",
      texto: "Uma ponte até o K-4: célula do G com o motor DB 605D. Parecia um G-14 por fora, com o nariz mais limpo.",
      secoes: {
        motor: "DB 605D com compressor maior, o mesmo do 605AS, e injeção MW 50 de água-metanol. A injeção resfriava a mistura e permitia muito mais pressão de admissão por alguns minutos. Radiador de óleo maior e mais fundo sob o nariz.",
        estrutura: "Carenagem nova, sem as bolhas grandes. Canopy Erla Haube e leme alto."
      },
      mudou: ["DB 605D com compressor maior e MW 50", "Carenagem nova e mais limpa", "Radiador de óleo maior"] },
    { nome: "G-12", ano: 1944, foto: "v2-bf109-g-12", prod: "≈ 500 conversões", motor: "DB 605A", armas: "1× MG 131 ou desarmado",
      texto: "Treinador biplace convertido de G-4 e G-6 usados. Ajudava a formar os pilotos novos que chegavam com pouco treino.",
      secoes: { estrutura: "Segunda cabine para o instrutor atrás da original, com canopy próprio e menos combustível." },
      mudou: ["Segunda cabine para instrutor"] },
    { nome: "G-14", ano: 1944, foto: "v-bf109-g14", prod: "≈ 5.500", motor: "Daimler-Benz DB 605AM · 1.800 hp com MW 50", armas: "1× MG 151/20 ou MK 108 · 2× MG 131",
      texto: "A padronização: tudo o que os G-6 vinham recebendo aos poucos virou equipamento de série.",
      secoes: {
        motor: "DB 605AM com injeção MW 50 de série. G-14/AS: DB 605ASM para alta altitude.",
        estrutura: "Canopy Erla Haube e leme alto de madeira de série.",
        sistemas: "Rádio FuG 16ZY com radiogoniômetro e IFF FuG 25a."
      },
      mudou: ["Canopy Erla Haube e leme alto de série", "MW 50 de série", "Rádio FuG 16ZY e IFF"] },
    { nome: "K-4 'Kurfürst'", ano: 1944, foto: "v-bf109-k", prod: "≈ 1.600", motor: "Daimler-Benz DB 605DB/DC · até 2.000 hp", armas: "1× MK 108 de 30 mm · 2× MG 131",
      texto: "O último 109 de série e o mais rápido, com ~710 km/h a 7.500 m. Uma tentativa de acabar com a bagunça de sub-versões dos G.",
      secoes: {
        motor: "DB 605DB (gasolina B4 com MW 50) ou DC (gasolina C3 com MW 50), até 2.000 hp em emergência.",
        armas: "MK 108 de 30 mm com 65 tiros no cubo: três acertos derrubavam um bombardeiro. 2× MG 131 no capô.",
        estrutura: "Bequilha longa e totalmente retrátil, portas nos poços das rodas (muitas vezes tiradas no campo), leme com compensadores Flettner e escotilha do rádio mudada de lugar."
      },
      mudou: ["DB 605DB/DC de até 2.000 hp", "MK 108 de 30 mm de série", "Bequilha retrátil e portas nos poços das rodas"] }
  ],

  fw190: [
    { nome: "V1", ano: 1939, foto: "", prod: "1", motor: "BMW 139 · 1.550 hp", armas: "Desarmado",
      texto: "Voou em junho de 1939. O projeto de Kurt Tank apostava num caça robusto com motor radial, quando todo mundo ia de V12.",
      secoes: {
        motor: "BMW 139 com um spinner grande e oco, com o ar entrando pelo centro, para reduzir o arrasto. O motor superaquecia demais, e o spinner oco foi abandonado.",
        estrutura: "Trem largo e forte que recolhia para dentro, muito mais seguro que o do 109. Comandos por tubos e alavancas em vez de cabos, com resposta precisa."
      },
      mudou: [] },
    { nome: "A-0", ano: 1940, foto: "v2-fw190-a-0", prod: "28", motor: "BMW 801C-0 · 1.560 hp", armas: "4× MG 17",
      texto: "Pré-série com o novo BMW 801. Os primeiros saíram com asa pequena, e o restante com a asa maior, que virou padrão.",
      secoes: {
        motor: "BMW 801 de 14 cilindros em duas estrelas, com uma ventoinha de 12 pás atrás do spinner que forçava ar pelo motor dentro da carenagem justa. Radiador de óleo anular na frente, protegido por um anel blindado.",
        estrutura: "Envergadura passou de 9,5 m para 10,5 m."
      },
      mudou: ["BMW 801 de 14 cilindros com ventoinha de refrigeração", "Asa maior (10,5 m)"] },
    { nome: "A-1", ano: 1941, foto: "v2-fw190-a-1", prod: "≈ 100", motor: "BMW 801C-1 · 1.560 hp", armas: "4× MG 17 · 2× MG FF",
      texto: "A primeira série. Em setembro de 1941 apareceu sobre a França e era superior ao Spitfire V em quase tudo, menos em curva.",
      secoes: {
        sistemas: "Kommandogerät: um computador mecânico-hidráulico que, com uma só alavanca, ajustava mistura, passo da hélice, pressão do compressor, troca de marcha do compressor e ponto de ignição dos magnetos. O piloto só mexia na manete.",
        armas: "2 MG 17 no capô e 2 nas raízes das asas, sincronizadas com a hélice, e 2 MG FF de 20 mm nas asas, fora do disco da hélice."
      },
      mudou: ["Versão de série com o Kommandogerät", "4× MG 17 + 2× MG FF"] },
    { nome: "A-2", ano: 1941, foto: "v2-fw190-a-2", prod: "≈ 420", motor: "BMW 801C-2 · 1.600 hp", armas: "2× MG 17 · 2× MG 151/20 · 2× MG FF",
      texto: "Mais fogo nas raízes das asas e melhor refrigeração.",
      secoes: {
        armas: "As MG 17 das raízes das asas viraram MG 151/20 de 20 mm sincronizados, atirando através da hélice com cadência alta.",
        motor: "Aberturas de refrigeração na lateral da carenagem, atrás do motor, contra o superaquecimento das estrelas de trás."
      },
      mudou: ["MG 151/20 nas raízes das asas", "Aberturas de refrigeração nas laterais"] },
    { nome: "A-3", ano: 1942, foto: "v-fw190-a3", prod: "≈ 510", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 17 · 2× MG 151/20 · 2× MG FF",
      texto: "O BMW 801D trouxe mais potência e resolveu boa parte do superaquecimento. Um A-3 pousou por engano na Inglaterra em junho de 1942 e os britânicos o testaram por inteiro.",
      secoes: { motor: "BMW 801D-2 com taxa de compressão maior, para gasolina C3 de 96 octanas. 1.700 hp na decolagem." },
      mudou: ["BMW 801D-2 de 1.700 hp", "Gasolina C3 de 96 octanas"] },
    { nome: "A-4", ano: 1942, foto: "v2-fw190-a-4", prod: "≈ 980", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 17 · 2× MG 151/20 · 2× MG FF",
      texto: "Rádio novo e potência de emergência. Também foi o primeiro Fw 190 tropicalizado, para a Tunísia.",
      secoes: {
        sistemas: "Rádio VHF FuG 16Z, com um pequeno mastro de antena no topo da deriva. Provisão para injeção de água-metanol para potência de emergência curta.",
        motor: "A-4/Trop: filtro de areia na tomada de ar do compressor, sob a carenagem, para operar das pistas de terra da Tunísia.",
        pintura: "Cinza (RLM 74/75/76) na Europa. Na Tunísia, alguns tinham areia por cima e faixa branca do Mediterrâneo."
      },
      sub: [
        { nome: "A-4", texto: "FuG 16Z e potência de emergência." },
        { nome: "A-4/Trop", texto: "Filtro de areia, para a Tunísia em 1942–43." },
        { nome: "A-4/U8", texto: "Caça-bombardeiro de longo alcance, com tanques sob as asas." }
      ],
      mudou: ["Rádio FuG 16Z com mastro na deriva", "Provisão para potência de emergência", "Versão tropical para a Tunísia"] },
    { nome: "A-5", ano: 1943, foto: "v-fw190-a5", prod: "≈ 1.750", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 17 · 2× MG 151/20 · 2× MG FF",
      texto: "O motor foi para frente e o avião ficou mais equilibrado e com mais espaço para equipamento.",
      secoes: {
        estrutura: "Berço do motor 15 cm mais longo: corrigiu o centro de gravidade, que ia para trás quando se instalavam equipamentos. O espaço extra também ajudava a refrigeração.",
        sistemas: "Muitos kits de fábrica (U-) para testar armas, bombas e tanques, que deram origem às séries F e G."
      },
      mudou: ["Motor 15 cm mais à frente", "Muitos kits experimentais"] },
    { nome: "A-6", ano: 1943, foto: "v2-fw190-a-6", prod: "≈ 570", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 17 · 4× MG 151/20",
      texto: "Asa nova, mais leve, feita para quatro canhões de 20 mm de alta cadência: o Fw 190 virou caçador de bombardeiros.",
      secoes: {
        armas: "Os MG FF externos viraram MG 151/20, alimentados por fita e com 125 tiros cada.",
        sistemas: "Rádio FuG 16ZE com radiogoniômetro e IFF FuG 25."
      },
      mudou: ["Asa nova com 4× MG 151/20 de série", "Rádio FuG 16ZE e IFF FuG 25"] },
    { nome: "A-7", ano: 1943, foto: "v2-fw190-a-7", prod: "≈ 80", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 131 · 4× MG 151/20",
      texto: "Série curta, de transição para o A-8: as metralhadoras do capô ficaram maiores.",
      secoes: {
        armas: "MG 131 de 13 mm no capô no lugar das MG 17, com uma pequena bolha na carenagem.",
        sistemas: "Mira Revi 16B."
      },
      mudou: ["2× MG 131 de 13 mm no capô", "Mira Revi 16B"] },
    { nome: "A-8", ano: 1944, foto: "v-fw190-a8", principal: true, prod: "≈ 6.650", motor: "BMW 801D-2 · 1.700 hp (2.050 hp em emergência)", armas: "2× MG 131 · 4× MG 151/20",
      texto: "A versão mais produzida. Mais combustível, potência de emergência e cabides mudados de lugar.",
      secoes: {
        motor: "Sistema de injeção de gasolina C3 extra no compressor (Erhöhte Notleistung), que dava ~2.050 hp por 10 minutos em baixa altitude.",
        sistemas: "Tanque de 115 L atrás da cabine, usado para combustível ou para o sistema de injeção. Cabide ETC 501 movido 20 cm para frente. Rádio FuG 16ZY.",
        armas: "2× MG 131 com 475 tiros cada e 4× MG 151/20."
      },
      sub: [
        { nome: "A-8", texto: "Padrão." },
        { nome: "A-8/R2", texto: "Os MG 151/20 externos viraram MK 108 de 30 mm, para atacar bombardeiros." },
        { nome: "A-8/R8 'Sturmbock'", texto: "Kit R2 e mais blindagem: placas na lateral da cabine e vidros blindados laterais de 30 mm. Pesado e lento, voava em formações cerradas contra os B-17, escoltado por 109." },
        { nome: "A-8/U1", texto: "Treinador biplace." }
      ],
      mudou: ["Injeção extra de gasolina C3: ~2.050 hp em emergência", "Tanque de 115 L atrás da cabine", "Versões Sturmbock com MK 108 e blindagem"] },
    { nome: "A-9", ano: 1944, foto: "", prod: "≈ 900", motor: "BMW 801S/TS · 2.000 hp", armas: "2× MG 131 · 4× MG 151/20",
      texto: "O último A, com o BMW 801 mais forte.",
      secoes: {
        motor: "BMW 801S/TS de 2.000 hp, ventoinha de 14 pás e anel blindado do radiador de óleo mais grosso, de 10 mm. Hélice de madeira mais larga em alguns.",
        estrutura: "Canopy em bolha mais alto, que alguns A-8 já tinham."
      },
      mudou: ["BMW 801S/TS de 2.000 hp", "Ventoinha de 14 pás e anel blindado mais grosso"] },
    { nome: "F-8", ano: 1944, foto: "v-fw190-f8", prod: "≈ 3.400", motor: "BMW 801D-2 · 1.700 hp", armas: "2× MG 131 · 2× MG 151/20 · bombas",
      texto: "A versão de ataque ao solo, que substituiu o Ju 87 Stuka nas unidades de apoio. Era a versão Schlacht (ataque) do A-8.",
      secoes: {
        sistemas: "Uns 360 kg de blindagem extra: embaixo do motor, nos tanques e em volta do piloto.",
        armas: "Os canhões externos saíram. Cabide ETC 501 no ventre e 4 ETC 50 sob as asas para bombas. Alguns levavam foguetes anticarro Panzerblitz ou bombas de fragmentação.",
        motor: "Sistema de injeção de emergência para baixa altitude."
      },
      mudou: ["Blindagem extra de ~360 kg", "Canhões externos removidos; cabides no ventre e nas asas", "Alguns com foguetes anticarro"] },
    { nome: "D-9 'Dora'", ano: 1944, foto: "v-fw190-d9", prod: "≈ 1.800", motor: "Junkers Jumo 213A · 1.750 hp (2.100 hp com MW 50)", armas: "2× MG 131 · 2× MG 151/20",
      texto: "Trocou o radial por um V12 invertido, para dar ao Fw 190 desempenho em altitude. Os pilotos desconfiaram no começo e depois o consideraram o melhor caça a pistão da Luftwaffe.",
      secoes: {
        motor: "Jumo 213A, V12 invertido refrigerado a líquido, com radiador anular na frente: por isso parece radial. O anel do radiador tinha blindagem. MW 50 nos tardios, com até 2.100 hp.",
        estrutura: "O nariz ficou 60 cm mais longo, então foi colocada uma seção de 50 cm na fuselagem traseira para equilibrar. Leme e deriva maiores. Canopy em bolha.",
        armas: "Os canhões externos saíram: 2× MG 131 no capô e 2× MG 151/20 nas raízes das asas."
      },
      mudou: ["Jumo 213A em V invertido com radiador anular", "Seção extra na fuselagem traseira para equilibrar", "MW 50: até 2.100 hp, ~685 km/h"] },
    { nome: "D-11 / D-13", ano: 1945, foto: "", prod: "poucas dezenas", motor: "Junkers Jumo 213F · 2.060 hp com MW 50", armas: "D-13: 1× MG 151/20 no cubo · 2× MG 151/20",
      texto: "Os últimos Dora, com o Jumo 213F de compressor de duas velocidades e armamento mais forte.",
      secoes: {
        armas: "D-11: 2× MK 108 nas asas e 2× MG 151/20. D-13: canhão MG 151/20 atirando pelo cubo da hélice, mais 2× MG 151/20. As MG 131 do capô saíram.",
        motor: "Jumo 213F com MW 50 e hélice de pás largas."
      },
      mudou: ["Jumo 213F mais forte", "Canhão no cubo (D-13); MG 131 do capô removidas"] },
    { nome: "Ta 152 H", ano: 1945, foto: "v-fw190-ta152", prod: "≈ 40", motor: "Junkers Jumo 213E · 1.750 hp (2.050 hp com GM 1 / MW 50)", armas: "1× MK 108 · 2× MG 151/20",
      texto: "Leva o 'Ta' de Kurt Tank. Caça de alta altitude derivado do D-9, que chegava a 755 km/h a 12.500 m.",
      secoes: {
        motor: "Jumo 213E com compressor de dois estágios e três velocidades, e intercooler. GM 1 (óxido nitroso) para altitude e MW 50 para baixa altitude.",
        estrutura: "Asa longa de 14,4 m, para o ar rarefeito. Fuselagem ainda mais longa que a do D-9.",
        sistemas: "Cabine pressurizada e piloto automático simples."
      },
      mudou: ["Jumo 213E de 2 estágios e 3 velocidades", "Asa de 14,4 m e cabine pressurizada", "GM 1 e MW 50; MK 108 no cubo"] }
  ],

  bf110: [
    { nome: "V1", ano: 1936, foto: "v2-bf110-v1", prod: "1", motor: "2× Daimler-Benz DB 600A · 910 hp cada", armas: "Desarmado",
      texto: "Protótipo de maio de 1936 do 'Zerstörer', o caça pesado de longo alcance que deveria abrir caminho para os bombardeiros.",
      secoes: { estrutura: "Bimotor metálico com cauda dupla e cabine longa para piloto, radioperador e artilheiro de cauda." },
      mudou: [] },
    { nome: "B", ano: 1938, foto: "", prod: "≈ 45", motor: "2× Junkers Jumo 210G · 700 hp cada", armas: "4× MG 17 · 2× MG FF · 1× MG 15",
      texto: "Faltavam DB 600, então a primeira série usou o Jumo 210, fraco demais para o avião. Serviu de treino.",
      secoes: { armas: "4 MG 17 no topo do nariz e 2 MG FF de 20 mm embaixo, mais uma MG 15 traseira para defesa." },
      mudou: ["Jumo 210G no lugar do DB 600", "Armamento pesado no nariz"] },
    { nome: "Bf 110 C", ano: 1939, foto: "v-bf110-c", principal: true, prod: "≈ 1.300", motor: "2× Daimler-Benz DB 601A · 1.100 hp cada", armas: "2× MG FF · 4× MG 17 · 1× MG 15",
      texto: "A primeira versão de verdade, com o DB 601. Brilhou na Polônia e na França. Na Batalha da Inglaterra foi pego por Spitfires e Hurricanes e precisou de escolta de 109.",
      secoes: {
        motor: "DB 601A com radiadores retangulares sob as asas, fora dos motores.",
        armas: "Todo o fogo concentrado no nariz, sem convergência.",
        sistemas: "C-4: blindagem do piloto e do artilheiro. C-4/B: cabides sob a fuselagem para 2 bombas de 250 kg.",
        pintura: "Cinza e verde, e muitos do ZG 76 com uma boca de tubarão no nariz. No Norte da África, os do ZG 26 tinham filtros de areia (C-4/Trop) e pintura areia."
      },
      sub: [
        { nome: "C-1", texto: "Padrão." },
        { nome: "C-4", texto: "Blindagem do piloto e do artilheiro." },
        { nome: "C-4/B", texto: "Cabides para 2 bombas de 250 kg." },
        { nome: "C-4/Trop", texto: "Filtros de areia nos motores, para o Norte da África com o ZG 26." },
        { nome: "C-5", texto: "Reconhecimento: câmera Rb 50/30 no lugar dos MG FF." }
      ],
      mudou: ["DB 601A de 1.100 hp", "Radiadores sob as asas", "Versões blindada, bombardeira, tropical e de reconhecimento"] },
    { nome: "Bf 110 D", ano: 1940, foto: "v-bf110-d", prod: "≈ 230", motor: "2× DB 601A · 1.100 hp cada", armas: "2× MG FF · 4× MG 17 · 1× MG 15",
      texto: "Versão de longo alcance para cruzar o Mar do Norte, até a Noruega e o norte da Inglaterra.",
      secoes: {
        sistemas: "D-1: tanque ventral de madeira compensada de 1.050 L, a 'barriga de bassê' (Dackelbauch). Acumulava vapor de combustível e foi abandonado. D-3: 2 tanques descartáveis de 900 L sob as asas e cone de cauda alongado com bote salva-vidas.",
        pintura: "Muitos foram para a Noruega e, depois, para o Norte da África."
      },
      sub: [
        { nome: "D-0 / D-1", texto: "Tanque ventral 'Dackelbauch' de 1.050 L." },
        { nome: "D-2", texto: "Tanques descartáveis menores." },
        { nome: "D-3", texto: "Tanques de 900 L sob as asas e bote no cone de cauda." }
      ],
      mudou: ["Tanque ventral 'Dackelbauch'", "Tanques descartáveis grandes", "Bote salva-vidas na cauda"] },
    { nome: "Bf 110 E", ano: 1941, foto: "", prod: "≈ 850", motor: "2× DB 601N/P · 1.200 hp cada", armas: "2× MG FF · 4× MG 17 · 1× MG 15 · até 1.200 kg de bombas",
      texto: "Caça-bombardeiro. Lutou nos Bálcãs, no front oriental e no Norte da África.",
      secoes: {
        armas: "4 cabides ETC 50 sob as asas e 2 sob a fuselagem.",
        estrutura: "Estrutura reforçada para o peso maior.",
        motor: "E/Trop: filtros de areia nos motores, para o deserto."
      },
      mudou: ["Cabides sob as asas e a fuselagem: até 1.200 kg de bombas", "DB 601N/P", "Versão tropical"] },
    { nome: "Bf 110 F", ano: 1941, foto: "v-bf110-e", prod: "≈ 600", motor: "2× Daimler-Benz DB 601F · 1.350 hp cada", armas: "2× MG FF · 4× MG 17 · 1× MG 15",
      texto: "Motor mais forte e mais blindagem. O F-4 foi uma das primeiras versões pensadas como caça noturno, a função que salvou o 110.",
      secoes: {
        sistemas: "Para-brisa blindado de 57 mm e blindagem da tripulação mais grossa. F-4: três tripulantes, rádios novos e cancelas contra clarão nos escapamentos, para não ser visto e não cegar o piloto.",
        motor: "DB 601F com compressor melhor."
      },
      mudou: ["DB 601F de 1.350 hp", "Para-brisa de 57 mm e mais blindagem", "F-4: caça noturno com cancelas nos escapamentos"] },
    { nome: "Bf 110 G-2", ano: 1942, foto: "", prod: "≈ 800", motor: "2× Daimler-Benz DB 605B · 1.475 hp cada", armas: "2× MG 151/20 · 4× MG 17 · kits",
      texto: "Destruidor diurno contra os bombardeiros americanos. Com os kits pesados, virou presa fácil para os P-47 e P-51 de escolta.",
      secoes: {
        motor: "DB 605B, com radiadores maiores e leme maior para a potência.",
        armas: "Kits: canhão BK 3,7 de 37 mm sob a fuselagem; 2 tubos de foguetes WGr 21 sob cada asa, para quebrar formações de B-17; gôndola com 2× MG 151/20 extras. Os MG FF viraram MG 151/20. Metralhadora traseira dupla MG 81Z."
      },
      mudou: ["DB 605B de 1.475 hp e leme maior", "Kits: canhão de 37 mm, foguetes WGr 21", "Metralhadora traseira dupla MG 81Z"] },
    { nome: "Bf 110 G-4", ano: 1942, foto: "v-bf110-g", prod: "≈ 2.000", motor: "2× DB 605B · 1.475 hp cada", armas: "2× MK 108 · 2× MG 151/20 · Schräge Musik",
      texto: "O caça noturno padrão da Luftwaffe, com três tripulantes. Lutou contra os bombardeiros noturnos até 1945.",
      secoes: {
        sistemas: "Radar FuG 202/212 Lichtenstein de 490 MHz, com antenas em forma de cruz no nariz. Depois, FuG 220 SN-2 de 90 MHz, imune ao chaff 'Window', com as grandes antenas 'galhada de cervo' (Hirschgeweih), que custavam uns 40 km/h. Receptor Naxos e Flensburg para seguir o radar e o sinal de alerta traseiro dos bombardeiros.",
        armas: "Schräge Musik: 2 canhões MG FF/M ou MK 108 atrás da cabine, apontados para cima a ~70°. O 110 voava por baixo do bombardeiro, onde não havia artilheiro, e mirava nos tanques das asas.",
        motor: "Abafadores de chama sobre os escapamentos."
      },
      mudou: ["Radar Lichtenstein e depois SN-2 com antenas 'galhada'", "Schräge Musik: canhões atirando para cima", "Receptores Naxos e Flensburg"] }
  ],

  me262: [
    { nome: "V1", ano: 1941, foto: "v-me262-v1", prod: "1", motor: "Jumo 210G a pistão (depois + 2× BMW 003)", armas: "Desarmado",
      texto: "Os jatos atrasaram, e a célula voou em abril de 1941 com um motor a pistão no nariz. Em março de 1942 foram instalados os BMW 003, que falharam os dois no primeiro voo. O motor a pistão salvou o pouso.",
      secoes: { estrutura: "Bequilha (trem convencional) e asa levemente enflechada, de 18,5°, que entrou para corrigir o centro de gravidade, não por aerodinâmica." },
      mudou: [] },
    { nome: "V3", ano: 1942, foto: "", prod: "1", motor: "2× Junkers Jumo 004A · 8,3 kN cada", armas: "Desarmado",
      texto: "O primeiro voo só com jatos, em 18 de julho de 1942. Com bequilha, o profundor ficava na sombra da asa na decolagem, e o piloto precisava tocar os freios para levantar a cauda.",
      secoes: { motor: "Jumo 004A de compressor axial com 8 estágios." },
      mudou: ["Primeiro voo só a jato"] },
    { nome: "A-1a Schwalbe", ano: 1944, foto: "v-me262-a1", principal: true, prod: "≈ 1.400 (todas as versões)", motor: "2× Junkers Jumo 004B · 8,8 kN cada", armas: "4× MK 108 de 30 mm · 24 foguetes R4M (opcional)",
      texto: "O primeiro caça a jato em serviço, com ~870 km/h, 150 km/h a mais que qualquer caça a pistão aliado.",
      secoes: {
        motor: "Jumo 004B: 8 estágios de compressor axial, 6 câmaras de combustão e turbina de um estágio. Sem níquel e cromo suficientes, as palhetas da turbina eram de aço com cobertura de alumínio, ocas e refrigeradas a ar. Duravam de 10 a 25 horas. Acelerar rápido demais causava apagamento ou incêndio. A partida usava um pequeno motor a gasolina Riedel dentro do cone de entrada de cada turbina.",
        armas: "4 MK 108 de 30 mm no nariz, com 100 tiros nos de cima e 80 nos de baixo. Poucos acertos derrubavam um bombardeiro, mas a velocidade baixa do projétil dificultava acertar caças. Alguns levavam 24 foguetes R4M sob as asas, disparados em salva contra formações.",
        estrutura: "Trem triciclo e slats automáticos no bordo de ataque."
      },
      sub: [
        { nome: "A-1a", texto: "Caça padrão." },
        { nome: "A-1a/U3", texto: "Reconhecimento: câmeras Rb no nariz no lugar dos canhões." },
        { nome: "A-1a/U4", texto: "Canhão Mauser BK 5 de 50 mm no nariz, contra bombardeiros. Dois protótipos." }
      ],
      mudou: ["Jumo 004B de série; vida de 10 a 25 h", "Trem triciclo", "4× MK 108 e foguetes R4M"] },
    { nome: "A-2a Sturmvogel", ano: 1944, foto: "v-me262-a2", prod: "parte da produção", motor: "2× Jumo 004B", armas: "2× MK 108 · 2 bombas de 250 kg",
      texto: "Versão caça-bombardeiro, pedida pelo alto comando. Rápido demais para ser interceptado, mas sem mira adequada para bombardeio.",
      secoes: { armas: "Dois MK 108 a menos. Cabides Wikingerschiff para 2 bombas de 250 kg sob o nariz." },
      mudou: ["Dois canhões a menos", "Cabides para 2 bombas de 250 kg"] },
    { nome: "B-1a", ano: 1944, foto: "", prod: "≈ 15", motor: "2× Jumo 004B", armas: "4× MK 108 (ou desarmado)",
      texto: "Treinador biplace, para transição de pilotos que vinham dos caças a pistão.",
      secoes: { estrutura: "Segunda cabine para o instrutor no lugar de um tanque. O combustível perdido foi compensado com tanques descartáveis sob o nariz." },
      mudou: ["Segunda cabine para instrutor", "Tanques descartáveis sob o nariz"] },
    { nome: "B-1a/U1", ano: 1945, foto: "v-me262-b1", prod: "≈ 6 conversões", motor: "2× Jumo 004B", armas: "4× MK 108",
      texto: "Caça noturno improvisado a partir do treinador. O segundo assento era do operador de radar. Voou com o Kommando Welter contra os Mosquito sobre Berlim.",
      secoes: { sistemas: "Radar FuG 218 Neptun com antenas 'galhada de cervo' no nariz, que custavam uns 60 km/h. Receptor FuG 350 Naxos." },
      mudou: ["Segundo assento para operador de radar", "Radar FuG 218 Neptun com antenas no nariz"] },
    { nome: "C-1a Heimatschützer", ano: 1945, foto: "", prod: "1", motor: "2× Jumo 004B + motor-foguete Walter HWK 509", armas: "4× MK 108",
      texto: "Interceptador de subida rápida, com um motor-foguete na cauda. Subiu a 11.700 m em uns 4 minutos e meio.",
      secoes: { motor: "Motor-foguete Walter HWK 509 de combustível líquido na cauda, usado só na subida." },
      mudou: ["Motor-foguete na cauda para subir rápido", "Só protótipo"] }
  ]
});
