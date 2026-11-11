/* Variantes — URSS */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  i16: [
    { nome: "TsKB-12", ano: 1933, foto: "", prod: "2", motor: "Shvetsov M-22 · 480 hp", armas: "2× ShKAS (previstas)",
      texto: "O protótipo de Polikarpov voou em dezembro de 1933: o primeiro caça de asa baixa, com trem retrátil e em cantiléver, a chegar perto da produção no mundo.",
      secoes: { estrutura: "Fuselagem curtíssima de madeira (monocoque de bétula colada), asa metálica com revestimento de tela no bordo de fuga, e trem retrátil por manivela. Era instável em arfagem de propósito, para virar muito rápido." },
      mudou: [] },
    { nome: "Tipo 4", ano: 1934, foto: "", prod: "≈ 250", motor: "Shvetsov M-22 · 480 hp", armas: "2× ShKAS de 7,62 mm",
      texto: "A primeira série. Mesmo com pouco motor, era mais rápida que os biplanos da época.",
      secoes: {
        sistemas: "Trem recolhido por manivela: uns 44 giros de mão, com o avião balançando enquanto o piloto pedalava a manivela depois da decolagem.",
        estrutura: "Canopy deslizante de acrílico, que embaçava e manchava de óleo."
      },
      mudou: ["Versão de série com M-22", "2× ShKAS nas asas"] },
    { nome: "Tipo 5", ano: 1935, foto: "", prod: "≈ 930", motor: "Shvetsov M-25 · 700 hp", armas: "2× ShKAS",
      texto: "O M-25, um Wright Cyclone fabricado sob licença, deu ao I-16 desempenho de verdade.",
      secoes: { motor: "M-25 de 9 cilindros com 700 hp e capô redesenhado com venezianas na frente para regular a refrigeração." },
      mudou: ["M-25 (Cyclone licenciado) de 700 hp", "Capô novo com venezianas de refrigeração"] },
    { nome: "Tipo 6", ano: 1936, foto: "", prod: "≈ 200", motor: "Shvetsov M-25A · 730 hp", armas: "2× ShKAS (+1 ventral em alguns)",
      texto: "Motor um pouco mais forte e alguns com uma terceira metralhadora sob a fuselagem.",
      secoes: { motor: "M-25A de 730 hp." },
      mudou: ["M-25A de 730 hp", "Terceira ShKAS ventral em alguns"] },
    { nome: "Tipo 10", ano: 1937, foto: "", prod: "≈ 2.700", motor: "Shvetsov M-25V · 750 hp", armas: "4× ShKAS",
      texto: "O dobro de armas e a cabine aberta que os pilotos queriam.",
      secoes: {
        armas: "Duas ShKAS no capô, sincronizadas com a hélice, e duas nas asas. A ShKAS disparava uns 1.800 tiros por minuto, uma das mais rápidas do mundo.",
        estrutura: "Cabine aberta com para-brisa fixo. Flaps de pouso pela primeira vez, acionados a ar comprimido.",
        sistemas: "Alguns com esquis para o inverno, que recolhiam junto do trem."
      },
      mudou: ["4× ShKAS (2 no capô, 2 nas asas)", "Cabine aberta", "Flaps de pouso"] },
    { nome: "Tipo 17", ano: 1938, foto: "", prod: "≈ 800", motor: "Shvetsov M-25V · 750 hp", armas: "2× ShVAK 20 mm · 2× ShKAS",
      texto: "O I-16 com canhões: mais pesado, mais lento e com muito mais fogo.",
      secoes: {
        armas: "2 canhões ShVAK de 20 mm nas asas no lugar das ShKAS.",
        estrutura: "Trem reforçado e bequilha com roda de borracha no lugar do patim."
      },
      mudou: ["2 canhões ShVAK de 20 mm nas asas", "Trem reforçado e bequilha com roda"] },
    { nome: "Tipo 18", ano: 1939, foto: "", prod: "≈ 1.000", motor: "Shvetsov M-62 · 1.000 hp", armas: "4× ShKAS",
      texto: "O M-62, com compressor de duas velocidades, trouxe fôlego em altitude e muito mais subida.",
      secoes: { motor: "M-62 de 1.000 hp com compressor de duas velocidades e hélice AV-1 de passo variável. Capô novo com 7 venezianas." },
      mudou: ["M-62 de 1.000 hp com compressor de 2 velocidades", "Hélice AV-1 de passo variável"] },
    { nome: "Tipo 24", ano: 1939, foto: "v-i16-24", principal: true, prod: "≈ 950", motor: "Shvetsov M-62 / M-63 · 1.000–1.100 hp", armas: "4× ShKAS · 6 foguetes RS-82",
      texto: "O I-16 mais comum em junho de 1941. Já era superado pelo Bf 109, mas a curva e a coragem dos pilotos ainda contavam em baixa altitude.",
      secoes: {
        estrutura: "Asa reforçada, com revestimento de compensado no lugar de parte da tela. Bequilha com roda. Tanque descartável sob as asas em alguns.",
        armas: "Trilhos para 6 foguetes RS-82 sob as asas.",
        sistemas: "Rádio RSI-1 em alguns, mas a maioria dos caças soviéticos de 1941 ainda não tinha rádio."
      },
      mudou: ["Asa reforçada com revestimento de compensado", "Foguetes RS-82", "Rádio em alguns"] },
    { nome: "Tipo 27 / 28", ano: 1940, foto: "", prod: "≈ 350", motor: "M-62 / M-63", armas: "2× ShVAK · 2× ShKAS",
      texto: "As versões com canhão do Tipo 18 e do Tipo 24.",
      secoes: { armas: "2 ShVAK de 20 mm nas asas e 2 ShKAS no capô." },
      mudou: ["Canhões ShVAK nas asas"] },
    { nome: "Tipo 29", ano: 1940, foto: "", prod: "≈ 650", motor: "Shvetsov M-63 · 1.100 hp", armas: "2× ShKAS · 1× UBS 12,7 mm",
      texto: "A última série. A metralhadora de 12,7 mm entrou no centro do capô.",
      secoes: { armas: "Uma UBS de 12,7 mm no centro do capô e 2 ShKAS. Cabides para bombas ou tanques." },
      mudou: ["UBS de 12,7 mm no capô", "M-63 de 1.100 hp"] },
    { nome: "UTI-4", ano: 1935, foto: "", prod: "≈ 3.400", motor: "Shvetsov M-25 · 700 hp", armas: "Desarmado",
      texto: "Treinador biplace, indispensável porque o I-16 não perdoava pilotos inexperientes.",
      secoes: { estrutura: "Duas cabines abertas em tandem e duplo comando. Muitos com trem fixo, para simplificar." },
      mudou: ["Duas cabines em tandem com duplo comando", "Muitos com trem fixo"] }
  ],

  mig3: [
    { nome: "I-200", ano: 1940, foto: "", prod: "3", motor: "Mikulin AM-35 · 1.350 hp", armas: "1× BS 12,7 mm · 2× ShKAS",
      texto: "Protótipo de interceptador de alta altitude, projetado em torno do AM-35, um motor grande e forte lá em cima. Chegou a 648 km/h a 7.000 m em testes.",
      secoes: { estrutura: "Fuselagem dianteira de tubos de aço com painéis de duralumínio, traseira de madeira e asa externa de madeira. Mista, para poupar alumínio." },
      mudou: [] },
    { nome: "MiG-1", ano: 1940, foto: "", prod: "100", motor: "Mikulin AM-35 · 1.350 hp", armas: "1× BS 12,7 mm · 2× ShKAS",
      texto: "A primeira série. Era instável direcionalmente, tinha pouco alcance e pousava rápido.",
      secoes: { estrutura: "Uns com cabine aberta e outros com canopy que abria para o lado." },
      mudou: ["Versão de série", "Cabine aberta ou canopy lateral"] },
    { nome: "MiG-3", ano: 1941, foto: "v-mig3-3", principal: true, prod: "≈ 3.000", motor: "Mikulin AM-35A · 1.350 hp", armas: "1× BS 12,7 mm · 2× ShKAS",
      texto: "O MiG-1 corrigido. Rápido em altitude, mas a guerra no front oriental acontecia abaixo de 4.000 m, onde ele era pesado e lento.",
      secoes: {
        estrutura: "Motor 10 cm mais à frente e mais 1° de diedro nas asas externas: mais estável. Canopy de correr com vidro atrás da cabeça.",
        sistemas: "Tanque extra de 250 L sob a cabine. Radiador maior e trem reforçado."
      },
      mudou: ["Motor 10 cm à frente e mais diedro", "Tanque extra sob a cabine", "Canopy de correr com visão traseira"] },
    { nome: "MiG-3 (2× UBS)", ano: 1941, foto: "v-mig3-tardio", prod: "≈ 300", motor: "Mikulin AM-35A · 1.350 hp", armas: "2× UBS 12,7 mm · 1× ShKAS",
      texto: "Lotes do fim de 1941 com mais fogo, depois de reclamações sobre o armamento fraco.",
      secoes: { armas: "2 metralhadoras UBS de 12,7 mm e uma ShKAS. Trilhos para 6 foguetes RS-82 e cabides para bombas pequenas." },
      mudou: ["2× UBS de 12,7 mm", "Foguetes RS-82 e bombas leves"] },
    { nome: "MiG-3 (2× ShVAK)", ano: 1942, foto: "", prod: "≈ 50", motor: "Mikulin AM-35A", armas: "2× ShVAK 20 mm",
      texto: "Uma série curta com dois canhões de 20 mm, feita com motores que sobraram. A produção do MiG-3 já tinha parado: a fábrica do AM-35 passou a fazer o AM-38 do Il-2 de ataque, uma prioridade maior.",
      secoes: { armas: "2 ShVAK de 20 mm no capô." },
      mudou: ["2 canhões ShVAK de 20 mm", "Fim da produção: motor reservado para o Il-2"] },
    { nome: "MiG-3 AM-38", ano: 1942, foto: "", prod: "poucos", motor: "Mikulin AM-38 · 1.600 hp", armas: "2× UBS",
      texto: "Testes com o motor de baixa altitude do Il-2, para usar o MiG-3 onde a guerra acontecia. Não seguiu adiante.",
      secoes: { motor: "AM-38 ajustado para baixa altitude, com 1.600 hp na decolagem." },
      mudou: ["Motor AM-38 de baixa altitude"] }
  ],

  yak: [
    { nome: "Yak-1", ano: 1940, ficha: "yak1", foto: "v2-yak-yak-1", prod: "≈ 8.700 (com o 1B)", motor: "Klimov M-105P · 1.050 hp", armas: "1× ShVAK 20 mm · 2× ShKAS",
      texto: "O primeiro caça de Yakovlev, chamado I-26 no protótipo. Simples, leve e fácil de fabricar em fábricas evacuadas para os Urais.",
      secoes: {
        estrutura: "Fuselagem de tubos de aço soldados com revestimento de tela e compensado. Asa de madeira com longarinas de pinho e revestimento de compensado de bétula.",
        motor: "M-105P, um V12 derivado do Hispano-Suiza 12Y, com o canhão ShVAK atirando pelo cubo da hélice, entre as bancadas do V.",
        sistemas: "Rádio só nos aviões de líder no começo. Esquis no inverno."
      },
      mudou: [] },
    { nome: "Yak-1B", ano: 1942, foto: "v-yak-1", prod: "≈ 4.200", motor: "Klimov M-105PF · 1.180 hp", armas: "1× ShVAK · 1× UBS 12,7 mm",
      texto: "O Yak-1 com fuselagem rebaixada e canopy em bolha, mais leve e com melhor visão.",
      secoes: {
        estrutura: "Fuselagem traseira rebaixada e canopy em bolha, com visão para trás.",
        armas: "As 2 ShKAS foram trocadas por uma UBS de 12,7 mm.",
        sistemas: "Rádio RSI-4 em mais aviões e manche com gatilho redesenhado."
      },
      mudou: ["Fuselagem rebaixada e canopy em bolha", "UBS de 12,7 mm no lugar das 2 ShKAS", "M-105PF de 1.180 hp"] },
    { nome: "Yak-7UTI / 7V", ano: 1941, foto: "v-yak-7", prod: "≈ 900", motor: "Klimov M-105P", armas: "1× ShKAS ou desarmado",
      texto: "O treinador biplace (UTI-26) que deu origem ao Yak-7.",
      secoes: { estrutura: "Duas cabines em tandem. Estrutura mais robusta que a do Yak-1." },
      mudou: ["Treinador biplace"] },
    { nome: "Yak-7B", ano: 1942, ficha: "yak7", foto: "v2-yak-yak-7b", prod: "≈ 5.000", motor: "Klimov M-105PA/PF · 1.050–1.180 hp", armas: "1× ShVAK · 2× UBS",
      texto: "O treinador virou caça: o espaço do segundo assento ficou vazio ou virou compartimento. Mais robusto que o Yak-1.",
      secoes: {
        armas: "ShVAK no cubo e 2 UBS de 12,7 mm no capô.",
        estrutura: "Os tardios tinham fuselagem rebaixada e canopy em bolha, como o Yak-1B."
      },
      mudou: ["Derivado do treinador: estrutura robusta", "2× UBS de 12,7 mm", "Fuselagem rebaixada nos tardios"] },
    { nome: "Yak-7-37", ano: 1942, foto: "", prod: "22", motor: "Klimov M-105PA", armas: "1× MPSh-37 de 37 mm · 2× UBS",
      texto: "Teste de um canhão de 37 mm no cubo da hélice, que abriu caminho para o Yak-9T.",
      secoes: { estrutura: "Cabine recuada para caber o canhão longo." },
      mudou: ["Canhão de 37 mm no cubo", "Cabine recuada"] },
    { nome: "Yak-9", ano: 1942, ficha: "yak9", foto: "v2-yak-yak-9", prod: "≈ 16.700 (todas as Yak-9)", motor: "Klimov M-105PF · 1.180 hp", armas: "1× ShVAK · 1× UBS",
      texto: "O caça soviético mais produzido da guerra. Nasceu do Yak-7DI, com longarinas de duralumínio.",
      secoes: { estrutura: "Longarinas de duralumínio no lugar da madeira: asa mais leve e com espaço para combustível. Radiador de óleo no queixo." },
      mudou: ["Longarinas de duralumínio: mais leve e mais combustível"] },
    { nome: "Yak-9T", ano: 1943, foto: "", prod: "≈ 2.750", motor: "Klimov M-105PF", armas: "1× NS-37 de 37 mm · 1× UBS",
      texto: "O Yak-9 caçador de tanques e de bombardeiros. Um acerto de 37 mm derrubava qualquer avião.",
      secoes: {
        armas: "Canhão NS-37 de 37 mm com 32 tiros, atirando pelo cubo. O recuo era tão forte que o avião desacelerava, e só rajadas curtas eram precisas.",
        estrutura: "Cabine recuada 40 cm para caber o canhão. O centro de gravidade mudou e o avião ficou mais pesado de comando."
      },
      mudou: ["Canhão NS-37 de 37 mm", "Cabine recuada 40 cm"] },
    { nome: "Yak-9K", ano: 1944, foto: "v2-yak-yak-9k", prod: "53", motor: "Klimov M-105PF", armas: "1× NS-45 de 45 mm · 1× UBS",
      texto: "O maior canhão já montado num caça monomotor da guerra.",
      secoes: { armas: "NS-45 de 45 mm com freio de boca, para reduzir o recuo, e só 29 tiros. Rajadas de mais de 3 tiros desestabilizavam o avião." },
      mudou: ["Canhão NS-45 de 45 mm com freio de boca"] },
    { nome: "Yak-9D / DD", ano: 1943, foto: "", prod: "≈ 3.000 (D) + 400 (DD)", motor: "Klimov M-105PF", armas: "1× ShVAK · 1× UBS",
      texto: "Versões de longo alcance. O DD escoltou bombardeiros americanos em 1944 em missões de apoio aos partisans iugoslavos e na Itália.",
      secoes: { sistemas: "D: 4 tanques nas asas, alcance de ~1.400 km. DD: 6 tanques, alcance de ~2.200 km, mais rádio e navegação." },
      mudou: ["Tanques extras nas asas: até 2.200 km de alcance"] },
    { nome: "Yak-9B", ano: 1944, foto: "", prod: "≈ 110", motor: "Klimov M-105PF", armas: "1× ShVAK · 1× UBS · 400 kg de bombas",
      texto: "Caça com compartimento de bombas interno, atrás da cabine.",
      secoes: { armas: "4 bombas de 100 kg em pé num compartimento atrás da cabine, ou bombas de fragmentação. O alijamento mudava o centro de gravidade de repente." },
      mudou: ["Compartimento interno de bombas"] },
    { nome: "Yak-9U", ano: 1944, foto: "v-yak-9", prod: "≈ 3.900", motor: "Klimov VK-107A · 1.650 hp", armas: "1× ShVAK · 2× UBS (ou NS-23)",
      texto: "O Yak-9 com motor novo e aerodinâmica do Yak-3. Passava de 670 km/h.",
      secoes: {
        motor: "VK-107A de 1.650 hp, com 4 válvulas por cilindro. Esquentava muito e tinha vida curta no começo.",
        estrutura: "Radiador de óleo movido para as raízes das asas, cabine um pouco recuada e revestimento de compensado melhor."
      },
      mudou: ["VK-107A de 1.650 hp", "Radiador de óleo nas raízes das asas"] },
    { nome: "Yak-3", ano: 1944, ficha: "yak3", foto: "v-yak-3", principal: true, prod: "≈ 4.850", motor: "Klimov VK-105PF-2 · 1.290 hp", armas: "1× ShVAK · 2× UBS",
      texto: "O Yak mais leve e ágil. Abaixo de 4.000 m, era o melhor caça do front oriental para combate de curva.",
      secoes: {
        estrutura: "Asa menor, de 9,2 m contra 10 m do Yak-1. Muito peso cortado, com longarinas de duralumínio. Radiador de óleo nas raízes das asas e radiador de água mais embutido.",
        motor: "VK-105PF-2 com mais pressão de admissão em baixa altitude."
      },
      mudou: ["Asa menor (9,2 m) e muito mais leve", "Radiador de óleo nas raízes das asas", "VK-105PF-2 de 1.290 hp"] },
    { nome: "Yak-3 VK-107", ano: 1945, foto: "", prod: "≈ 50 até 1945", motor: "Klimov VK-107A · 1.650 hp", armas: "2× ShVAK",
      texto: "Yak-3 com o motor do Yak-9U: chegava a ~720 km/h. Problemas de motor atrasaram o avião para depois da guerra.",
      secoes: { motor: "VK-107A, com refrigeração aumentada." },
      mudou: ["VK-107A: ~720 km/h", "2× ShVAK"] }
  ],

  la: [
    { nome: "LaGG-1", ano: 1940, foto: "", prod: "100", motor: "Klimov M-105P · 1.050 hp", armas: "1× ShVAK · 2× UBS · 2× ShKAS",
      texto: "O primeiro caça de Lavochkin, Gorbunov e Gudkov, feito quase todo de 'delta-madeira'. Pesado e com pouco alcance.",
      secoes: { estrutura: "Delta-madeira: compensado de bétula impregnado com resina fenol-formaldeído e prensado a quente. Resistia como metal leve e não queimava fácil, mas era pesado." },
      mudou: [] },
    { nome: "LaGG-3", ano: 1941, ficha: "lagg3", foto: "v-la-lagg3", prod: "≈ 6.500", motor: "Klimov M-105P / PF · 1.050–1.180 hp", armas: "1× ShVAK · 1–2× UBS",
      texto: "O LaGG-1 com mais alcance. Mudou em 66 séries de produção, quase todas para tirar peso. Os pilotos brincavam que a sigla queria dizer 'caixão envernizado garantido'.",
      secoes: {
        estrutura: "Slats automáticos a partir da 4ª série. Antena e equipamentos aliviados, e tanques extras nas asas.",
        armas: "As ShKAS foram sumindo para economizar peso, até ficar ShVAK mais 1 UBS.",
        sistemas: "Rádio e trem com melhorias nas séries finais."
      },
      mudou: ["Mais alcance com tanques nas asas", "Slats automáticos e alívio de peso", "Armamento reduzido"] },
    { nome: "LaGG-3-37", ano: 1942, foto: "", prod: "≈ 20", motor: "Klimov M-105PF", armas: "1× Sh-37 de 37 mm · 1× UBS",
      texto: "LaGG-3 com canhão de 37 mm no cubo, para ataque e antitanque.",
      secoes: { armas: "Canhão Sh-37 de 37 mm, pesado demais para o avião." },
      mudou: ["Canhão de 37 mm no cubo"] },
    { nome: "La-5", ano: 1942, foto: "v2-la-la-5", prod: "≈ 1.100", motor: "Shvetsov ASh-82 · 1.700 hp", armas: "2× ShVAK 20 mm",
      texto: "A virada: um radial de 14 cilindros encaixado na fuselagem do LaGG-3. Uns 600 hp a mais e um caça que finalmente enfrentava o Bf 109 G.",
      secoes: {
        motor: "Shvetsov ASh-82 de 14 cilindros em duas estrelas, refrigerado a ar: sem radiador de água vulnerável a tiros.",
        armas: "2 ShVAK de 20 mm no capô, sincronizados com a hélice.",
        estrutura: "A fuselagem fina do LaGG precisou de painéis laterais para cobrir o radial largo."
      },
      mudou: ["Radial ASh-82 no lugar do V12: +600 hp", "2× ShVAK no capô", "Sem radiador de água"] },
    { nome: "La-5F", ano: 1943, foto: "v2-la-la-5f", prod: "≈ 1.000", motor: "Shvetsov ASh-82F · 1.700 hp", armas: "2× ShVAK",
      texto: "Mais potência de emergência e melhor visão traseira.",
      secoes: {
        motor: "ASh-82F com potência de emergência por mais tempo.",
        estrutura: "Fuselagem traseira rebaixada e canopy com vidro atrás da cabeça."
      },
      mudou: ["ASh-82F", "Fuselagem traseira rebaixada"] },
    { nome: "La-5FN", ano: 1943, ficha: "la5", foto: "v-la-5", principal: true, prod: "≈ 6.000", motor: "Shvetsov ASh-82FN · 1.850 hp", armas: "2× ShVAK",
      texto: "O La-5 definitivo, que lutou em Kursk. Em baixa altitude era tão rápido quanto o Fw 190.",
      secoes: {
        motor: "ASh-82FN com injeção direta: sem carburador, sem engasgar em g negativo e com 1.850 hp. A tomada de ar do compressor foi para cima do capô.",
        estrutura: "Os tardios tinham longarinas metálicas, que cortaram uns 100 kg."
      },
      mudou: ["ASh-82FN com injeção direta: 1.850 hp", "Tomada de ar em cima do capô", "Longarinas metálicas nos tardios"] },
    { nome: "La-5UTI", ano: 1943, foto: "", prod: "≈ 1.000", motor: "Shvetsov ASh-82FN", armas: "1× ShVAK ou desarmado",
      texto: "Treinador biplace para a conversão de pilotos ao La-5.",
      secoes: { estrutura: "Segunda cabine atrás da primeira." },
      mudou: ["Treinador biplace"] },
    { nome: "La-7", ano: 1944, ficha: "la7", foto: "v-la-7", prod: "≈ 5.700", motor: "Shvetsov ASh-82FN · 1.850 hp", armas: "2× ShVAK ou 3× B-20",
      texto: "O La-5FN refinado no túnel de vento do TsAGI: chegava a 680 km/h. Ivan Kozhedub, o maior ás aliado, derrubou um Me 262 com ele.",
      secoes: {
        estrutura: "Mais metal, com longarinas de duralumínio. O radiador de óleo saiu do queixo e foi para baixo da fuselagem traseira. As tomadas do compressor foram para as raízes das asas. Painéis do capô vedados para reduzir vazamentos de ar.",
        armas: "2 ShVAK ou, nos tardios, 3 canhões B-20 de 20 mm, mais leves."
      },
      mudou: ["Longarinas metálicas e capô vedado", "Radiador de óleo sob a fuselagem; tomadas nas raízes das asas", "3× B-20 nos tardios"] }
  ]
});
