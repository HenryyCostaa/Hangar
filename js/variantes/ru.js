/* Variantes — Reino Unido */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  spitfire: [
    { nome: "K5054 (protótipo)", ano: 1936, foto: "v2-spitfire-k5054", prod: "1", motor: "Rolls-Royce Merlin C · 990 hp", armas: "Desarmado (depois 8× .303)",
      texto: "Voou em 5 de março de 1936. A asa elíptica de R. J. Mitchell era fina, com pouco arrasto, e mesmo assim tinha espaço para o trem e para oito metralhadoras.",
      secoes: {
        motor: "Merlin C de 990 hp com hélice de madeira de 2 pás e passo fixo. Radiador sob a asa direita.",
        estrutura: "Asa elíptica com longarina de tubos concêntricos e bordo de ataque em caixão de alumínio, que dava a rigidez. Trem estreito que abria para fora e recolhia para dentro da asa."
      },
      mudou: [] },
    { nome: "Mk I", ano: 1938, foto: "v-spit-1", prod: "1.567", motor: "Rolls-Royce Merlin II/III · 1.030 hp", armas: "IA: 8× .303 · IB: 2× 20 mm + 4× .303",
      texto: "O Spitfire da Batalha da Inglaterra. Mudou muito durante a produção, de hélice a blindagem, por causa da experiência de combate em 1940.",
      secoes: {
        motor: "As primeiras saíram com hélice de madeira de 2 pás e passo fixo. Depois veio a de Havilland de 3 pás com dois passos (um para decolagem e outro para cruzeiro) e, em junho de 1940, a conversão para velocidade constante, que melhorou muito a subida. A gasolina de 100 octanas, em 1940, permitiu mais pressão de admissão e uns 300 hp a mais em emergência.",
        armas: "IA: 8 Browning de .303 com 300 tiros cada. IB: 2 Hispano de 20 mm com tambor de 60 tiros, mais 4× .303. Montados de lado na asa fina, os canhões travavam muito em 1940.",
        sistemas: "Blindagem de ~33 kg atrás do piloto e para-brisa blindado acrescentados em 1940. O rádio HF TR9 foi trocado pelo VHF TR1133. IFF para ser reconhecido pelos radares da Chain Home.",
        pintura: "Terra escura e verde escuro por cima. Por baixo, metade preta e metade branca no começo de 1940, e depois o 'Sky', um verde-água claro."
      },
      sub: [
        { nome: "Mk IA", texto: "8× .303." },
        { nome: "Mk IB", texto: "2× 20 mm + 4× .303; poucos, por causa dos travamentos." }
      ],
      mudou: ["Versão de série com 8 metralhadoras", "Hélice evoluindo de 2 pás fixa para 3 pás de velocidade constante", "Blindagem e para-brisa blindado em 1940"] },
    { nome: "Mk II", ano: 1940, foto: "v-spit-2", prod: "921", motor: "Rolls-Royce Merlin XII · 1.175 hp", armas: "IIA: 8× .303 · IIB: 2× 20 mm + 4× .303",
      texto: "O primeiro Spitfire feito na fábrica nova de Castle Bromwich, perto de Birmingham. Mudou pouco por fora, mas o motor e a partida eram outros.",
      secoes: {
        motor: "Merlin XII de 1.175 hp, já ajustado para 100 octanas. Hélice Rotol de velocidade constante, com spinner mais rombudo.",
        sistemas: "Partida por cartucho Coffman: um cartucho explosivo girava o motor, daí a bolha no lado direito do nariz. O avião deixou de depender do carrinho de baterias externo, e o piloto podia dar partida sozinho, o que acelerava a decolagem de emergência.",
        armas: "IIB com 2 canhões de 20 mm de tambor."
      },
      sub: [
        { nome: "Mk IIA", texto: "8× .303." },
        { nome: "Mk IIB", texto: "2× 20 mm + 4× .303." },
        { nome: "Mk IIC (ASR)", texto: "Resgate no mar: levava bote e sinalizadores para lançar a pilotos caídos no Canal." }
      ],
      mudou: ["Feito em Castle Bromwich", "Merlin XII de 1.175 hp e hélice Rotol", "Partida por cartucho Coffman (bolha no nariz)"] },
    { nome: "PR IV / PR XI", ano: 1941, foto: "", prod: "229 (IV) + 471 (XI)", motor: "Merlin 45/46 (IV) · Merlin 61/63/70 (XI)", armas: "Desarmado",
      texto: "Os Spitfire de reconhecimento fotográfico. Sem armas, sem rádio pesado e com toda a asa cheia de combustível: velocidade e altitude eram a defesa.",
      secoes: {
        estrutura: "Asa 'D': os bordos de ataque viraram tanques integrados, com mais uns 300 L, e o alcance passou de 2.500 km.",
        sistemas: "Câmeras F8 e F24 na fuselagem traseira, verticais e em pares para foto estereoscópica. Aquecimento das câmeras para não congelar em altitude. O PR XI subia a mais de 12.000 m.",
        pintura: "Azul PRU, um azul médio que sumia no céu de altitude. Alguns de baixa altura eram rosa claro, para disfarçar contra as nuvens."
      },
      mudou: ["Armas removidas; bordos de ataque viraram tanques", "Câmeras F8/F24", "Pintura azul PRU"] },
    { nome: "Mk V", ano: 1941, foto: "v-spit-5", principal: true, prod: "6.479", motor: "Rolls-Royce Merlin 45/46/50/55 · 1.440–1.470 hp", armas: "VB: 2× 20 mm + 4× .303 · VC: até 4× 20 mm",
      texto: "O Spitfire mais produzido e o que mais lutou: França, Malta, deserto, Itália, Pacífico. Nasceu como solução rápida, um Mk I/II com motor novo, e foi sendo adaptado para cada teatro.",
      secoes: {
        motor: "Merlin 45 com compressor de um estágio e mais pressão, 1.470 hp. O Merlin 50 tinha carburador com diafragma, que não engasgava em g negativo; antes, isso dependia do 'orifício da senhorita Shilling', um limitador no carburador.",
        armas: "VA: 8× .303. VB: 2× 20 mm de tambor e 4× .303. VC: asa 'C' universal, com canhões alimentados por fita (120 tiros) e espaço para 4× 20 mm.",
        estrutura: "LF.V: pontas das asas cortadas, que rolavam mais rápido em baixa altura, e Merlin 45M/50M/55M com rotor do compressor reduzido. Os pilotos chamavam de 'clipped, cropped and clapped': cortado, aparado e gasto.",
        sistemas: "VB Trop: filtro de ar Vokes num grande carenado sob o nariz, contra a areia do deserto. Custava uns 13 km/h, e as oficinas no Egito criaram um filtro menor, o Aboukir. Tanque descartável 'chinelo' de 410 L sob a barriga para os voos de translado até Malta.",
        pintura: "Europa: cinza oceano e verde cinza por cima, cinza claro por baixo, faixa 'Sky' na fuselagem traseira. Deserto: terra escura e 'middlestone' por cima e azul 'azure' por baixo. Malta: aviões repintados em azul."
      },
      sub: [
        { nome: "Mk VA", texto: "8× .303; poucos." },
        { nome: "Mk VB", texto: "2× 20 mm de tambor + 4× .303. A mais comum." },
        { nome: "Mk VC", texto: "Asa 'C' universal, canhões de fita, cabides para bombas; muitos foram para Malta e para o Pacífico." },
        { nome: "Mk V Trop", texto: "Filtro Vokes ou Aboukir, kit de sobrevivência no deserto, para Norte da África e Malta." },
        { nome: "LF.V", texto: "Pontas de asa cortadas e compressor reduzido para baixa altitude." }
      ],
      mudou: ["Merlin 45/50 com 1.470 hp", "Asa B (2× 20 mm + 4× .303) e asa C universal", "Versões tropicais com filtro de areia e LF de asa cortada"] },
    { nome: "Mk VI", ano: 1942, foto: "", prod: "100", motor: "Rolls-Royce Merlin 47 · 1.415 hp", armas: "2× 20 mm · 4× .303",
      texto: "Spitfire de alta altitude, feito às pressas contra os Ju 86P de reconhecimento que voavam a mais de 12.000 m. Foi o primeiro com cabine pressurizada.",
      secoes: {
        motor: "Merlin 47 com um compressor Marshall extra só para pressurizar a cabine. Hélice Rotol de 4 pás.",
        estrutura: "Pontas de asa alongadas e pontudas, com 12,2 m de envergadura, para voar no ar rarefeito. O canopy não corria: era aparafusado e vedado antes do voo.",
        sistemas: "A cabine mantinha uma diferença de ~0,14 bar em relação ao ar de fora."
      },
      mudou: ["Primeiro com cabine pressurizada", "Pontas de asa longas e pontudas", "Hélice de 4 pás; canopy aparafusado"] },
    { nome: "Mk VII", ano: 1942, foto: "v2-spitfire-mk-vii", prod: "140", motor: "Rolls-Royce Merlin 61/64/71 · até 1.475 hp em altitude", armas: "2× 20 mm · 4× .303",
      texto: "O Spitfire de alta altitude de verdade: motor de dois estágios, cabine pressurizada e bequilha retrátil.",
      secoes: {
        motor: "Merlin de dois estágios com intercooler, o mesmo conceito do Mk IX, mais o compressor da cabine.",
        estrutura: "Bequilha retrátil, canopy deslizante com vedação dupla, tanques extras no bordo de ataque e leme pontudo e mais largo."
      },
      mudou: ["Merlin de 2 estágios", "Bequilha retrátil e tanques no bordo de ataque", "Canopy deslizante vedado"] },
    { nome: "Mk VIII", ano: 1943, foto: "", prod: "1.658", motor: "Rolls-Royce Merlin 61/63/66/70 · 1.565–1.710 hp", armas: "2× 20 mm · 4× .303",
      texto: "O Mk VII sem pressurização, a célula que deveria ter sido o padrão do Merlin de dois estágios. Foi para o Mediterrâneo, a Birmânia e a Austrália.",
      secoes: {
        estrutura: "Bequilha retrátil, tanques no bordo de ataque e leme pontudo. Fuselagem reforçada para o motor mais pesado.",
        sistemas: "Filtro de ar tropical de série, integrado sob o nariz e bem menor que o Vokes.",
        pintura: "Deserto no Mediterrâneo; verde e cinza no Extremo Oriente, com as insígnias sem o vermelho, para não serem confundidas com os discos japoneses."
      },
      sub: [
        { nome: "F VIII", texto: "Merlin 63, uso geral." },
        { nome: "LF VIII", texto: "Merlin 66 para baixa altitude, às vezes com asa cortada." },
        { nome: "HF VIII", texto: "Merlin 70 e asa longa para alta altitude." }
      ],
      mudou: ["Sem pressurização: a melhor célula do Merlin de 2 estágios", "Filtro tropical integrado de série", "Bequilha retrátil e tanques no bordo de ataque"] },
    { nome: "Mk IX", ano: 1942, foto: "v-spit-9", prod: "≈ 5.600", motor: "Rolls-Royce Merlin 61/63/66/70 · 1.565–1.720 hp", armas: "2× 20 mm + 4× .303 (IXe: 2× 20 mm + 2× .50)",
      texto: "A resposta ao Fw 190: um Mk V com o Merlin de dois estágios encaixado às pressas. Deu tão certo que virou o segundo Spitfire mais produzido.",
      secoes: {
        motor: "Merlin 61 com compressor de dois estágios e duas velocidades e intercooler: uns 60 km/h a mais em altitude. A troca de marcha do compressor era automática, por um pressostato barométrico. Nariz uns 23 cm mais longo e hélice Rotol de 4 pás.",
        estrutura: "Dois radiadores iguais sob as asas: o direito era de água e intercooler, o esquerdo de água e óleo, e por isso parecem simétricos. Nos últimos, fuselagem traseira rebaixada e canopy em bolha.",
        armas: "Asa C com 2× 20 mm e 4× .303. Asa E (IXe): 2× 20 mm nas posições internas e 2× .50 no lugar das quatro .303. Bomba de 227 kg no ventre.",
        sistemas: "Mira giroscópica Mk II nos últimos."
      },
      sub: [
        { nome: "F IX", texto: "Merlin 61/63, uso geral." },
        { nome: "LF IX", texto: "Merlin 66 para baixa e média altitude. A versão mais comum." },
        { nome: "HF IX", texto: "Merlin 70 para alta altitude." },
        { nome: "IXe", texto: "Asa E: 2× 20 mm + 2× .50." }
      ],
      mudou: ["Merlin 61 de 2 estágios com intercooler: +60 km/h em altitude", "Hélice de 4 pás e nariz mais longo", "Dois radiadores iguais sob as asas; asa E com .50"] },
    { nome: "Mk XII", ano: 1942, foto: "v-spit-12", prod: "100", motor: "Rolls-Royce Griffon III/IV · 1.735 hp", armas: "2× 20 mm · 4× .303",
      texto: "O primeiro Spitfire com Griffon, feito para pegar os Fw 190 que atacavam a costa sul da Inglaterra em voo rasante.",
      secoes: {
        motor: "Griffon de 36,7 litros, 36% maior que o Merlin, com compressor de um estágio e duas velocidades ajustado para baixa altitude. Girava ao contrário do Merlin: o avião puxava para o outro lado na decolagem.",
        estrutura: "Asas cortadas de série para rolar mais rápido. Nariz mais longo, com protuberâncias para os cabeçotes do Griffon, e leme pontudo maior."
      },
      mudou: ["Primeiro Griffon: motor maior e girando ao contrário", "Asas cortadas de série", "Especialista em baixa altitude"] },
    { nome: "Mk XIV", ano: 1944, foto: "v-spit-14", prod: "957", motor: "Rolls-Royce Griffon 65 · 2.035 hp", armas: "2× 20 mm · 2× .50 (asa E)",
      texto: "Griffon de dois estágios e hélice de 5 pás: o Spitfire mais forte da guerra. Chegava a 720 km/h, derrubou centenas de V-1 e foi um dos primeiros a abater um Me 262.",
      secoes: {
        motor: "Griffon 65 com compressor de dois estágios e intercooler, 2.035 hp. Hélice Rotol de 5 pás e 3,12 m.",
        estrutura: "Leme e deriva bem maiores para segurar o torque. Radiadores maiores sob as asas. As últimas séries tinham fuselagem rebaixada e canopy em bolha.",
        sistemas: "FR XIV: câmera oblíqua na fuselagem, tanque extra e asas cortadas, para reconhecimento armado em baixa altura."
      },
      sub: [
        { nome: "F XIV", texto: "Caça padrão." },
        { nome: "FR XIV", texto: "Câmera, tanque extra e asa cortada para reconhecimento armado." }
      ],
      mudou: ["Griffon 65 de 2 estágios, 2.035 hp", "Hélice de 5 pás e leme maior", "Canopy em bolha nas séries finais"] },
    { nome: "Mk XVI", ano: 1944, foto: "v2-spitfire-mk-xvi", prod: "1.054", motor: "Packard Merlin 266 · 1.705 hp", armas: "2× 20 mm · 2× .50 · bombas",
      texto: "Um LF IX com o Merlin fabricado pela Packard nos EUA. Foi caça-bombardeiro na fase final na Europa.",
      secoes: {
        motor: "Packard Merlin 266, equivalente ao Merlin 66 britânico, mas com peças em polegadas e exigindo ferramentas diferentes. Por isso ganhou numeração própria.",
        estrutura: "Quase todos com asas cortadas e asa E. Muitos com fuselagem rebaixada e canopy em bolha."
      },
      mudou: ["Merlin fabricado pela Packard", "Asa cortada e asa E quase sempre", "Muitos com canopy em bolha"] },
    { nome: "Seafire", ano: 1942, foto: "v-spit-seafire", prod: "≈ 2.600 até 1945", motor: "Merlin 45/46/55M · Griffon VI (XV)", armas: "2× 20 mm · 4× .303",
      texto: "O Spitfire naval. Rápido e bom de combate, mas o trem estreito, feito para pistas de grama, quebrava muito no convés.",
      secoes: {
        estrutura: "Gancho de pouso sob a fuselagem e pontos de içamento e catapulta. O Seafire III tinha asas dobráveis à mão, com dobra dupla. O XV trocou o gancho em 'A' por um gancho 'stinger' na cauda.",
        sistemas: "Rádio e equipamento naval, além de bote salva-vidas."
      },
      sub: [
        { nome: "Seafire IB", texto: "Convertido do Mk VB, com gancho. Asa fixa." },
        { nome: "Seafire IIC", texto: "Asa C, pontos de catapulta e estrutura reforçada." },
        { nome: "Seafire III", texto: "Asas dobráveis, Merlin 55M e hélice de 4 pás. O mais produzido." },
        { nome: "Seafire XV / XVII", texto: "Griffon VI. O XVII tinha canopy em bolha e trem mais macio." }
      ],
      mudou: ["Gancho de pouso e pontos de catapulta", "Seafire III com asas dobráveis", "Trem estreito: muitos acidentes no convés"] },
    { nome: "F.21 / 22 / 24", ano: 1945, foto: "v2-spitfire-f-21", prod: "≈ 450", motor: "Rolls-Royce Griffon 61/64/85 · 2.035–2.375 hp", armas: "4× 20 mm",
      texto: "Os últimos Spitfire, com asa nova: já não era elíptica e quase não era um Spitfire. O F.21 entrou em serviço em abril de 1945.",
      secoes: {
        estrutura: "Asa mais rígida, com pontas mais retas e ailerons maiores, que resolviam a torção da asa elíptica em alta velocidade. Trem mais longo e mais largo. O F.22 tinha canopy em bolha, e o F.24 mais combustível e foguetes.",
        armas: "4 canhões Hispano de 20 mm de série."
      },
      mudou: ["Asa nova, mais rígida e de pontas retas", "4× 20 mm de série", "Trem mais longo e largo"] }
  ],

  hurricane: [
    { nome: "K5083 (protótipo)", ano: 1935, foto: "", prod: "1", motor: "Rolls-Royce Merlin C · 1.025 hp", armas: "Desarmado",
      texto: "Voou em 6 de novembro de 1935, o primeiro monoplano de caça da RAF a passar de 480 km/h.",
      secoes: { estrutura: "Fuselagem de tubos de aço em treliça Warren, com cavernas de madeira e revestimento de tela. Era técnica de biplano, que as fábricas já dominavam." },
      mudou: [] },
    { nome: "Mk I", ano: 1937, foto: "v-hurr-1", prod: "≈ 4.000", motor: "Rolls-Royce Merlin II/III · 1.030 hp", armas: "8× .303 Browning",
      texto: "O caça que mais derrubou aviões na Batalha da Inglaterra, mais que todas as outras defesas juntas. Era robusto, estável para atirar e fácil de consertar no campo.",
      secoes: {
        motor: "As primeiras tinham hélice Watts de madeira de 2 pás e passo fixo. Depois veio a de Havilland de 3 pás com dois passos e, em 1940, a Rotol ou DH de velocidade constante. Escapamentos ejetores, que davam um pouco de empuxo.",
        estrutura: "As asas começaram de tela e passaram a metálicas, com revestimento trabalhante, em 1939. Um tiro passava pela tela sem explodir na estrutura, e um mecânico consertava com remendo.",
        sistemas: "Blindagem atrás do piloto e para-brisa blindado em 1940. Rádio TR9 e depois VHF.",
        pintura: "Terra escura e verde escuro por cima e 'Sky' por baixo."
      },
      sub: [
        { nome: "Mk I (asa de tela)", texto: "Primeiros ~400, asas revestidas de tela e hélice de 2 pás." },
        { nome: "Mk I (asa metálica)", texto: "Asas de revestimento trabalhante, mais rígidas e rápidas." },
        { nome: "Mk I Trop", texto: "Filtro de ar Vokes sob o nariz e kit de sobrevivência no deserto. Lutou no Norte da África e em Malta, com camuflagem terra escura e 'middlestone' por cima e azul 'azure' por baixo." }
      ],
      mudou: ["Versão de série", "Asas de tela trocadas por metálicas", "Hélice evoluindo até velocidade constante; versão tropical"] },
    { nome: "Mk IIA", ano: 1940, foto: "v2-hurricane-mk-iia", prod: "≈ 450", motor: "Rolls-Royce Merlin XX · 1.280 hp", armas: "8× .303",
      texto: "O Merlin XX com compressor de duas velocidades deu fôlego em altitude. Chegou no fim da Batalha da Inglaterra.",
      secoes: {
        motor: "Merlin XX com compressor de duas velocidades e refrigeração com mistura de água e glicol. Nariz uns 10 cm mais longo.",
        sistemas: "A série 2 tinha pontos para tanques descartáveis."
      },
      mudou: ["Merlin XX com compressor de 2 velocidades", "Nariz ~10 cm mais longo"] },
    { nome: "Mk IIB", ano: 1941, foto: "v-hurr-2b", prod: "≈ 3.000", motor: "Rolls-Royce Merlin XX · 1.280 hp", armas: "12× .303 · 2 bombas de 113/227 kg",
      texto: "Doze metralhadoras e bombas: o 'Hurribomber'. Começou a mudança do Hurricane de caça para avião de ataque.",
      secoes: {
        armas: "12 Browning de .303, 6 em cada asa. Cabides para 2 bombas de 113 ou 227 kg.",
        sistemas: "IIB Trop: filtro Vokes, para o Norte da África."
      },
      mudou: ["12× .303 (eram 8)", "Cabides para bombas: o 'Hurribomber'"] },
    { nome: "Mk IIC", ano: 1941, foto: "v-hurr-2c", principal: true, prod: "≈ 4.700", motor: "Rolls-Royce Merlin XX · 1.280 hp", armas: "4× 20 mm Hispano",
      texto: "A versão mais produzida. Quatro canhões no lugar das metralhadoras, e cada tiro de 20 mm explodia no alvo. Virou caça noturno, intruso sobre aeródromos inimigos e caça-bombardeiro.",
      secoes: {
        armas: "4 Hispano Mk II de 20 mm alimentados por fita.",
        sistemas: "Os intrusos noturnos usavam tanques descartáveis para voar sobre a França e esperar os bombardeiros alemães voltarem para pousar. Na versão tropical, filtro Vokes.",
        pintura: "Intrusos e caças noturnos em preto fosco. Os da Birmânia eram verde escuro e terra, com o disco vermelho da insígnia removido."
      },
      mudou: ["4 canhões Hispano de 20 mm", "Uso noturno e de intrusão", "Versões tropicais na Birmânia e no Norte da África"] },
    { nome: "Mk IID", ano: 1942, foto: "v-hurr-2d", prod: "≈ 800", motor: "Rolls-Royce Merlin XX · 1.280 hp", armas: "2× 40 mm Vickers S · 2× .303",
      texto: "O 'abridor de latas' do Norte da África, com o Esquadrão 6 em El Alamein. Atirava em blindados alemães em voo rasante.",
      secoes: {
        armas: "2 canhões Vickers S de 40 mm em casulos sob as asas, com 15 tiros cada, capazes de furar a blindagem traseira e de cima dos tanques. As 2× .303 levavam traçantes só para mirar.",
        sistemas: "Uns 160 kg de blindagem extra no radiador, no motor e no piloto, contra o fogo do chão. Filtro de areia de série.",
        pintura: "Deserto: terra escura e 'middlestone' por cima, azul 'azure' por baixo."
      },
      mudou: ["2 canhões de 40 mm sob as asas", "Metralhadoras só com traçantes para mirar", "Blindagem extra contra o fogo do chão"] },
    { nome: "Sea Hurricane", ano: 1941, foto: "v-hurr-sea", prod: "≈ 800 conversões", motor: "Merlin III / XX", armas: "8× .303 ou 4× 20 mm",
      texto: "Primeiro, os 'Hurricats': aviões disparados de catapulta em navios mercantes para espantar os quadrimotores de patrulha do Atlântico. Não tinham onde pousar.",
      secoes: {
        estrutura: "IA: pontos de catapulta e nenhum gancho. O piloto voltava para perto do comboio e saltava de paraquedas ou pousava na água. IB e IC: gancho de pouso para porta-aviões.",
        sistemas: "Rádio naval e equipamento de sobrevivência no mar."
      },
      sub: [
        { nome: "Sea Hurricane IA", texto: "Catapulta de navio mercante, sem gancho. Voo só de ida." },
        { nome: "Sea Hurricane IB", texto: "Gancho, para porta-aviões." },
        { nome: "Sea Hurricane IC", texto: "Gancho e 4× 20 mm." },
        { nome: "Sea Hurricane IIC", texto: "Merlin XX e rádio naval." }
      ],
      mudou: ["Versão de catapulta para navios mercantes", "Depois, gancho para porta-aviões"] },
    { nome: "Mk IV", ano: 1943, foto: "v-hurr-4", prod: "≈ 520", motor: "Rolls-Royce Merlin 24/27 · 1.620 hp", armas: "2× 40 mm ou 8 foguetes RP-3 ou 2 bombas",
      texto: "O Hurricane de ataque definitivo, com uma asa que aceitava qualquer arma. Lutou na Birmânia, nos Bálcãs e na Itália.",
      secoes: {
        estrutura: "Asa 'Low Attack' universal, com pontos que aceitavam os 40 mm, 8 foguetes RP-3, bombas, tanques ou lançadores de fumaça, conforme a missão.",
        sistemas: "Uns 160 kg de blindagem em volta do radiador e do motor. Filtro tropical em muitos."
      },
      mudou: ["Asa universal: 40 mm, foguetes RP-3 ou bombas", "Merlin 24/27 de 1.620 hp", "Blindagem no radiador e no motor"] },
    { nome: "Mk V", ano: 1943, foto: "", prod: "3", motor: "Rolls-Royce Merlin 32 · 1.700 hp", armas: "2× 40 mm",
      texto: "Protótipos de ataque com motor de baixa altitude e hélice de 4 pás, para a Birmânia. Não entraram em produção.",
      secoes: { motor: "Merlin 32 com compressor reduzido e hélice Rotol de 4 pás." },
      mudou: ["Merlin 32 de 1.700 hp e hélice de 4 pás", "Só protótipos"] }
  ],

  typhoon: [
    { nome: "Protótipo", ano: 1940, foto: "typhoon-2", prod: "2", motor: "Napier Sabre I · 2.100 hp", armas: "12× .303 (previstas)",
      texto: "Voou em fevereiro de 1940. Era um caça grande e pesado, pensado para substituir o Hurricane, em torno do motor mais potente da época.",
      secoes: {
        motor: "Napier Sabre: um H-24 de 24 cilindros em dois blocos horizontais, com dois virabrequins e válvulas de camisa em vez de válvulas de cabeçote. Compacto e muito potente, mas difícil de fabricar e de manter.",
        estrutura: "Asa grossa, de 19,5% de espessura na raiz, ótima para canhões e combustível, mas com problemas de compressibilidade acima de ~800 km/h em mergulho. Radiador no queixo."
      },
      mudou: [] },
    { nome: "Mk IA", ano: 1941, foto: "", prod: "105", motor: "Napier Sabre IIA · 2.180 hp", armas: "12× .303",
      texto: "A primeira série, com as 12 metralhadoras. Estreou cheia de problemas: o motor falhava e entrava monóxido de carbono na cabine.",
      secoes: {
        sistemas: "O monóxido de carbono do escapamento entrava na cabine, e os pilotos passaram a usar oxigênio desde a decolagem. A partida era por cartucho Coffman, que às vezes pegava fogo no motor.",
        estrutura: "Cabine com abertura tipo porta de carro."
      },
      mudou: ["Versão de série com 12× .303", "Monóxido de carbono na cabine: oxigênio desde a decolagem"] },
    { nome: "Mk IB", ano: 1941, foto: "v-typh-1b", principal: true, prod: "≈ 3.200 (todos os IB)", motor: "Napier Sabre IIA/IIB · 2.180–2.200 hp", armas: "4× 20 mm Hispano",
      texto: "Quatro canhões no lugar das 12 metralhadoras. Em 1942, mostrou que era muito rápido em baixa altitude e virou o único caça da RAF capaz de pegar os Fw 190 que atacavam a costa em voo rasante.",
      secoes: {
        armas: "4 Hispano Mk II de 20 mm com 140 tiros cada, com os canos saindo do bordo de ataque.",
        estrutura: "Várias caudas se soltaram em voo por vibração e fadiga. A 'Modificação 286' colocou placas de reforço por fora da junção da cauda.",
        pintura: "Como o perfil lembrava o Fw 190, ganhou faixas pretas e brancas sob as asas e um nariz amarelo em 1943 para evitar fogo amigo."
      },
      mudou: ["4 canhões Hispano de 20 mm no lugar das 12 metralhadoras", "Reforço da junção da cauda (Mod 286)", "Faixas de identificação sob as asas"] },
    { nome: "Mk IB (bolha)", ano: 1943, foto: "v-typh-bolha", prod: "parte dos IB", motor: "Napier Sabre IIB/IIC · 2.200–2.260 hp", armas: "4× 20 mm · 8 foguetes RP-3 ou 2 bombas de 454 kg",
      texto: "O Typhoon da Normandia. Virou o principal caça-bombardeiro da RAF contra blindados, trens e posições na França em 1944.",
      secoes: {
        motor: "Hélice de Havilland de 4 pás a partir de 1944. Filtro de ar contra a poeira das pistas de terra da Normandia, que estava destruindo os motores.",
        estrutura: "Canopy em bolha de correr no lugar da porta de carro, com visão muito melhor. Carenagens dos canos dos canhões encurtadas.",
        armas: "8 foguetes RP-3 com ogiva de 27 kg em trilhos sob as asas, ou 2 bombas de 454 kg.",
        pintura: "Faixas pretas e brancas de invasão a partir de junho de 1944."
      },
      mudou: ["Canopy em bolha de correr", "Hélice de 4 pás", "8 foguetes RP-3; filtro contra poeira"] },
    { nome: "FR.IB", ano: 1944, foto: "v-typh-fr", prod: "≈ 60", motor: "Napier Sabre IIB", armas: "2× 20 mm",
      texto: "Reconhecimento armado em baixa altura, logo antes e depois do Dia D.",
      secoes: { sistemas: "Os dois canhões internos saíram para dar lugar a câmeras F24, uma voltada para frente e duas verticais." },
      mudou: ["Câmeras F24 no lugar de 2 canhões"] },
    { nome: "NF.IB", ano: 1943, foto: "", prod: "1", motor: "Napier Sabre IIA", armas: "4× 20 mm",
      texto: "Teste de caça noturno com radar AI Mk IV. Não entrou em serviço.",
      secoes: { sistemas: "Radar AI Mk IV com antenas nas asas e equipamento atrás do piloto." },
      mudou: ["Radar AI Mk IV; só um avião"] }
  ],

  tempest: [
    { nome: "Tempest I", ano: 1943, foto: "v2-tempest-tempest-i", prod: "1", motor: "Napier Sabre IV · 2.240 hp", armas: "4× 20 mm",
      texto: "O Tempest mais limpo de todos: sem o radiador de queixo, chegou a ~750 km/h. Mas o Sabre IV não ficou pronto e o projeto parou.",
      secoes: { estrutura: "Radiadores no bordo de ataque das asas, nariz fino e asa nova, fina e elíptica." },
      mudou: [] },
    { nome: "Tempest V série 1", ano: 1944, foto: "tempest-0", prod: "100", motor: "Napier Sabre IIA · 2.180 hp", armas: "4× 20 mm Hispano Mk II",
      texto: "O Typhoon com asa nova. A primeira série ainda tinha os canos longos dos canhões aparecendo na frente da asa.",
      secoes: {
        estrutura: "Asa elíptica com 14,5% de espessura na raiz, contra 19,5% do Typhoon. A asa fina não tinha espaço para combustível, então a fuselagem foi alongada para um tanque à frente da cabine. Cauda maior e canopy em bolha de série.",
        armas: "Hispano Mk II com os canos saindo uns 30 cm do bordo de ataque."
      },
      mudou: ["Asa elíptica fina (14,5%)", "Fuselagem alongada com tanque à frente da cabine", "Canopy em bolha de série"] },
    { nome: "Tempest V série 2", ano: 1944, foto: "v-temp-5", principal: true, prod: "≈ 700", motor: "Napier Sabre IIB/IIC · 2.200–2.260 hp", armas: "4× 20 mm Hispano Mk V",
      texto: "O maior caçador de bombas voadoras V-1, com ~640 derrubadas, e um dos poucos caças a pistão que pegavam o Me 262, geralmente no pouso.",
      secoes: {
        armas: "Hispano Mk V, mais curto, leve e com cadência maior, embutido na asa.",
        motor: "Contra os V-1, usava gasolina de 150 octanas com mais pressão de admissão. Passava dos 690 km/h em baixa altitude.",
        estrutura: "Ailerons com compensadores de mola, leves em alta velocidade, e fuselagem traseira reforçada."
      },
      mudou: ["Hispano Mk V curto e embutido na asa", "Ailerons com compensador de mola", "Gasolina de 150 octanas contra os V-1"] },
    { nome: "Tempest II", ano: 1945, foto: "v-temp-2", prod: "452", motor: "Bristol Centaurus V · 2.520 hp", armas: "4× 20 mm Hispano Mk V",
      texto: "O Sabre trocado por um radial de 18 cilindros. Feito para a guerra no Extremo Oriente, chegou tarde.",
      secoes: {
        motor: "Bristol Centaurus de 18 cilindros com válvulas de camisa, 2.520 hp, montado com coxins elásticos. Radiadores de óleo nas raízes das asas.",
        estrutura: "Sem o radiador de queixo: nariz redondo e limpo. Tropicalizado de série."
      },
      mudou: ["Radial Bristol Centaurus de 18 cilindros", "Nariz limpo, sem o radiador de queixo", "Tropicalizado de série"] },
    { nome: "Tempest VI", ano: 1946, foto: "v-temp-6", prod: "142", motor: "Napier Sabre V · 2.340 hp", armas: "4× 20 mm Hispano Mk V",
      texto: "A última versão com Sabre, preparada para lugares quentes. Serviu no Oriente Médio até a chegada dos jatos.",
      secoes: {
        motor: "Sabre V de 2.340 hp, radiador maior e tomada do carburador movida para as raízes das asas, com filtro de ar.",
        estrutura: "O radiador de óleo saiu do queixo e foi para a asa, abrindo espaço para o radiador de água maior."
      },
      mudou: ["Sabre V de 2.340 hp", "Radiador maior e filtro de ar nas raízes das asas"] }
  ]
});
