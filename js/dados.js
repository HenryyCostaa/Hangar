/* =========================================================
   HANGAR — arquivo técnico de caças 1939–1945
   Conteúdo editável. Os números da ficha técnica vêm de
   js/fichas.js (gerado das tabelas da Wikipedia).
   "≈" = valor aproximado.
   ========================================================= */

window.NACOES = [
  { id: "eua", nome: "EUA", forca: "USAAF · US Navy · USMC" },
  { id: "ru", nome: "Reino Unido", forca: "RAF · Fleet Air Arm" },
  { id: "ale", nome: "Alemanha", forca: "Luftwaffe" },
  { id: "urss", nome: "URSS", forca: "VVS · PVO" },
  { id: "jap", nome: "Japão", forca: "Exército e Marinha Imperial" },
  { id: "ita", nome: "Itália", forca: "Regia Aeronautica" },
  { id: "fra", nome: "França", forca: "Armée de l'Air" },
  { id: "fin", nome: "Finlândia", forca: "Ilmavoimat" }
];

/* Campos de cada família:
   motor: { tipo: "linha" | "radial" | "jato", cil: cilindros, rpm, qtd: nº de motores }
   ficha: id da ficha técnica principal em js/fichas.js
   variantes: ficam em js/variantes.js
   eletrica: sistema elétrico, rádio, mira e um destaque de engenharia */
window.FAMILIAS = [
  /* ===================== EUA ===================== */
  {
    id: "p39", nome: "P-39 Airacobra", fabricante: "Bell", nacao: "eua",
    papel: "Caça", primeiroVoo: "1938-04", servico: "1941–1945", produzidos: "9.588",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 1, nome: "Allison V-1710" },
    ficha: "p39", fotos: ["p39-noite", "p39q", "p39-perfil", "p39-mecanicos", "p39-porta", "p39-canhao", "p39-escape"],
    resumo: "Motor atrás do piloto, eixo passando sob a cabine e canhão de 37 mm atirando pelo cubo da hélice. Nos EUA ficou de escanteio; na URSS virou arma de ases.",
    historia: "A Bell desenhou o Airacobra em torno do canhão T9 de 37 mm: pra caber no nariz, o motor foi para o meio da fuselagem e um eixo de transmissão passa entre as pernas do piloto até a caixa de redução. O protótipo tinha turbocompressor, removido depois dos testes no túnel do NACA, e isso matou o desempenho em altitude. Na URSS, que recebeu quase metade da produção pelo Lend-Lease, o combate era em baixa altitude, e pilotos como Aleksandr Pokryshkin fizeram dele um dos caças mais temidos do front oriental.",
    eletrica: {
      sistema: "24 V CC, padrão dos caças da USAAF",
      ignicao: "Dupla, por magneto: 2 velas por cilindro",
      radio: "HF de comando SCR-274N; VHF SCR-522A nas versões finais",
      mira: "Refletora N-3",
      destaque: "As primeiras séries usavam hélice Curtiss Electric: o passo das pás era mudado por um motor elétrico dentro do cubo, comandado da cabine."
    }
  },
  {
    id: "p40", nome: "P-40 Warhawk", fabricante: "Curtiss", nacao: "eua",
    papel: "Caça", primeiroVoo: "1938-10", servico: "1940–1945", produzidos: "13.738",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 1, nome: "Allison V-1710" },
    ficha: "p40", fotos: ["p40-2", "p40-0"],
    resumo: "O caça americano que segurou a linha em 1941–42: robusto, fácil de produzir e famoso pelas bocas de tubarão dos Tigres Voadores.",
    historia: "O P-40 nasceu trocando o motor radial do P-36 Hawk por um Allison V-1710 em linha. Não brilhava em altitude, mas era resistente e estava disponível quando os EUA, o Reino Unido e a China mais precisavam. Os Tigres Voadores (AVG) na China e os pilotos da RAF no deserto do Norte da África criaram táticas de ataque em mergulho que tiravam proveito da sua robustez.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto: 2 velas por cilindro",
      radio: "HF de comando SCR-274N; VHF nas últimas séries",
      mira: "Refletora N-3",
      destaque: "Hélice Curtiss Electric: um motor elétrico no cubo girava as pás pra ajustar o passo, com controle automático de rotação."
    }
  },
  {
    id: "p38", nome: "P-38 Lightning", fabricante: "Lockheed", nacao: "eua",
    papel: "Caça bimotor", primeiroVoo: "1939-01", servico: "1941–1945", produzidos: "10.037",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 2, nome: "Allison V-1710 (×2)" },
    ficha: "p38", fotos: ["p38-1", "p38-0", "p38-5"],
    resumo: "Bimotor de dois tail booms, armas concentradas no nariz e turbocompressores: o caça que derrubou o avião do almirante Yamamoto.",
    historia: "O desenho de duas vigas de cauda deixou espaço para os turbocompressores da General Electric atrás de cada motor e para uma nacele central com todas as armas juntas no nariz, sem precisar de sincronizador. As hélices giram em sentidos opostos e anulam o torque. No Pacífico, com alcance de sobra, fez a missão que interceptou o almirante Yamamoto em 1943, e os maiores ases americanos da guerra, Bong e McGuire, voaram de P-38.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto, em cada motor",
      radio: "HF SCR-274N; VHF SCR-522A",
      mira: "Refletora",
      destaque: "Dois turbocompressores da General Electric, girados pelos gases do escapamento, mantinham a potência dos Allison em grande altitude."
    }
  },
  {
    id: "p47", nome: "P-47 Thunderbolt", fabricante: "Republic", nacao: "eua",
    papel: "Caça-bombardeiro", primeiroVoo: "1941-05", servico: "1942–1945", produzidos: "15.636",
    motor: { tipo: "radial", cil: 18, rpm: 2700, qtd: 1, nome: "Pratt & Whitney R-2800" },
    ficha: "p47", fotos: ["p47-noite", "p47-voo", "p47-guerra"],
    resumo: "O 'Jug': enorme, blindado, com oito .50 e um turbo gigante na cauda. Foi o avião do 1º Grupo de Aviação de Caça do Brasil na Itália.",
    historia: "Alexander Kartveli desenhou a fuselagem em volta do sistema de turbo: o compressor fica na traseira e dutos levam o ar comprimido até o motor de 18 cilindros. O resultado foi o caça monomotor mais pesado da guerra, excelente em alta altitude e em mergulho, e que virou o grande caça-bombardeiro da USAAF na Europa. O 1º GAvCa brasileiro voou P-47D na Itália sob o grito de 'Senta a Pua!'.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto: 36 velas no motor",
      radio: "VHF SCR-522A",
      mira: "Refletora N-3B; giroscópica K-14 nas últimas séries",
      destaque: "Injeção de água e metanol: por alguns minutos, borrifar a mistura no motor esfriava a admissão e liberava mais potência sem detonação."
    }
  },
  {
    id: "p51", nome: "P-51 Mustang", fabricante: "North American", nacao: "eua",
    papel: "Caça de escolta", primeiroVoo: "1940-10", servico: "1942–1945", produzidos: "+15.000",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 1, nome: "Packard V-1650 Merlin" },
    ficha: "p51", fotos: ["p51-voo", "p51-frente", "p51-guerra"],
    resumo: "Nasceu para a RAF, virou outro avião com o motor Merlin e passou a escoltar os bombardeiros até Berlim e de volta.",
    historia: "O protótipo NA-73X foi construído em cerca de 100 dias para a RAF. Com o Allison era ótimo em baixa altitude, mas quando recebeu o Merlin de compressor de dois estágios (fabricado pela Packard nos EUA) e mais combustível, ganhou alcance e desempenho em altitude para acompanhar os bombardeiros até o coração da Alemanha. O radiador ventral foi desenhado para aproveitar o 'efeito Meredith' e devolver parte do arrasto como empuxo.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto: 2 velas por cilindro",
      radio: "VHF SCR-522A e IFF",
      mira: "Giroscópica K-14 a partir de 1944",
      destaque: "A K-14 era um computador analógico: giroscópios e um circuito ajustado pelo piloto calculavam o ângulo de antecipação e moviam o retículo. Alguns D também levavam o radar de alerta de cauda AN/APS-13."
    }
  },
  {
    id: "f4f", nome: "F4F Wildcat", fabricante: "Grumman", nacao: "eua",
    papel: "Caça embarcado", primeiroVoo: "1937-09", servico: "1940–1945", produzidos: "7.885",
    motor: { tipo: "radial", cil: 14, rpm: 2700, qtd: 1, nome: "Pratt & Whitney R-1830" },
    ficha: "f4f", fotos: ["f4f-0", "f4f-7"],
    resumo: "O caça da Marinha americana que segurou o Zero no começo da guerra no Pacífico, com o trem de pouso recolhido na manivela.",
    historia: "Mais lento e menos ágil que o Zero, o Wildcat compensava com blindagem, tanques autovedantes e táticas como o 'Thach Weave', em que dois caças se cruzavam para proteger um ao outro. Lutou em Midway, Guadalcanal e no Mar de Coral. O trem de pouso era recolhido à mão: cerca de 29 voltas de manivela logo depois da decolagem.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF de bordo e receptor de retorno ZB",
      mira: "Refletora",
      destaque: "O receptor ZB captava o farol YE do porta-aviões, que transmitia uma letra em código Morse diferente em cada setor: pelo som, o piloto sabia em que direção estava o navio."
    }
  },
  {
    id: "f6f", nome: "F6F Hellcat", fabricante: "Grumman", nacao: "eua",
    papel: "Caça embarcado", primeiroVoo: "1942-06", servico: "1943–1945", produzidos: "12.275",
    motor: { tipo: "radial", cil: 18, rpm: 2700, qtd: 1, nome: "Pratt & Whitney R-2800" },
    ficha: "f6f", fotos: ["f6f-5", "f6f-7"],
    resumo: "O caça que tirou o domínio do Zero: cerca de 5.000 vitórias da Marinha americana, a maioria do Hellcat.",
    historia: "A Grumman desenhou o Hellcat a partir das lições do Wildcat contra o Zero: motor de 18 cilindros, muita blindagem e uma asa grande para pousar devagar no porta-aviões. Fácil de pilotar e de produzir, dominou batalhas como a do Mar das Filipinas, o 'Grande Tiro aos Perus de Marianas'. As versões noturnas levavam radar num casulo sob a asa direita.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto: 36 velas",
      radio: "VHF e receptor de retorno ZB",
      mira: "Refletora Mk 8",
      destaque: "O radar AN/APS-6 dos Hellcat noturnos cabia num casulo sob a asa e mostrava o alvo numa tela pequena na cabine, para um piloto sozinho."
    }
  },
  {
    id: "f4u", nome: "F4U Corsair", fabricante: "Vought", nacao: "eua",
    papel: "Caça embarcado", primeiroVoo: "1940-05", servico: "1942–1953", produzidos: "12.571",
    motor: { tipo: "radial", cil: 18, rpm: 2700, qtd: 1, nome: "Pratt & Whitney R-2800" },
    ficha: "f4u", fotos: ["f4u-voo", "f4u-asas"],
    resumo: "Asa de gaivota invertida, a maior hélice de caça da época e o primeiro caça monomotor americano a passar de 400 mph.",
    historia: "Para usar a hélice enorme exigida pelo R-2800 sem um trem de pouso longo demais, a Vought dobrou a asa para baixo perto da raiz: a famosa gaivota invertida. Difícil de pousar em porta-aviões no começo, estreou com os Marines em terra, em Guadalcanal, e virou uma das melhores plataformas de ataque da guerra. Serviu até a Guerra da Coreia.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto: 36 velas",
      radio: "VHF e receptor de retorno ZB",
      mira: "Refletora Mk 8",
      destaque: "No F4U-2 noturno, o radar foi para um casulo na ponta da asa direita e o operador era o próprio piloto, guiado também por controladores no navio."
    }
  },
  {
    id: "f2a", nome: "F2A Buffalo", fabricante: "Brewster", nacao: "eua",
    papel: "Caça embarcado", primeiroVoo: "1937-12", servico: "1939–1945", produzidos: "509",
    motor: { tipo: "radial", cil: 9, rpm: 2500, qtd: 1, nome: "Wright R-1820 Cyclone" },
    ficha: "f2a", fotos: ["f2a-0", "f2a-6"],
    resumo: "Fracasso no Pacífico, lenda na Finlândia: o mesmo avião que os finlandeses chamavam de 'pérola do céu'.",
    historia: "Primeiro monoplano da Marinha americana, o Buffalo ficou pesado demais nas versões finais e sofreu contra o Zero em Midway e na Malásia. Já a versão de exportação mais leve, o B-239, foi para a Finlândia em 1940, onde pilotos experientes, com táticas melhores, conseguiram centenas de vitórias contra a aviação soviética perdendo poucos aviões.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF de bordo",
      mira: "Refletora",
      destaque: "Os finlandeses tiraram o equipamento naval dos B-239 e ganharam leveza, o que ajudava muito no combate."
    }
  },

  /* ===================== REINO UNIDO ===================== */
  {
    id: "spitfire", nome: "Spitfire", fabricante: "Supermarine", nacao: "ru",
    papel: "Interceptador", primeiroVoo: "1936-03", servico: "1938–1955", produzidos: "20.351",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 1, nome: "Rolls-Royce Merlin / Griffon" },
    ficha: "spitfire", fotos: ["spit-voo", "spit-nariz", "spit-voo2"],
    resumo: "Asa elíptica fina, motor Merlin e mais de 20 versões: o único caça britânico produzido do começo ao fim da guerra.",
    historia: "R. J. Mitchell partiu dos hidroaviões de corrida da Supermarine. A asa elíptica e fina dava pouca resistência e espaço para as armas, e o desenho tinha folga para crescer: o Spitfire passou de cerca de 1.000 hp no Mk I para mais de 2.000 hp com o motor Griffon, sempre na linha de frente.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto: 2 velas por cilindro",
      radio: "HF TR9 em 1940, depois VHF TR1133 e TR1143",
      mira: "Refletora GM2; giroscópica Gyro Gunsight Mk II a partir de 1944",
      destaque: "O 'Pip-squeak' fazia o rádio transmitir sozinho um tom por 14 segundos a cada minuto: as estações em terra triangulavam o sinal e sabiam onde estava cada caça."
    }
  },
  {
    id: "hurricane", nome: "Hurricane", fabricante: "Hawker", nacao: "ru",
    papel: "Caça", primeiroVoo: "1935-11", servico: "1937–1947", produzidos: "14.487",
    motor: { tipo: "linha", cil: 12, rpm: 3000, qtd: 1, nome: "Rolls-Royce Merlin" },
    ficha: "hurricane", fotos: ["hurricane-1", "hurricane-2"],
    resumo: "Menos famoso que o Spitfire, mas foi ele quem derrubou a maior parte dos aviões alemães na Batalha da Inglaterra.",
    historia: "Construído com a técnica tradicional da Hawker, com estrutura de tubos de aço e boa parte coberta de tela, o Hurricane era fácil de consertar e uma plataforma de tiro estável. Em 1940 era o caça mais numeroso da RAF. Depois virou caça-bombardeiro, matador de tanques no deserto com canhões de 40 mm e foi lançado por catapulta de navios mercantes para defender comboios.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF TR9, depois VHF TR1133",
      mira: "Refletora GM2",
      destaque: "Como o Spitfire, usava o 'Pip-squeak': um relógio no painel ligava o transmissor sozinho para a rede de radiogoniometria acompanhar a formação."
    }
  },
  {
    id: "typhoon", nome: "Typhoon", fabricante: "Hawker", nacao: "ru",
    papel: "Caça-bombardeiro", primeiroVoo: "1940-02", servico: "1941–1945", produzidos: "3.317",
    motor: { tipo: "linha", cil: 24, rpm: 3700, qtd: 1, nome: "Napier Sabre (H-24)" },
    ficha: "typhoon", fotos: ["typhoon-2", "typhoon-0", "typhoon-6"],
    resumo: "Motor de 24 cilindros em H e foguetes sob as asas: o caçador de tanques da Normandia.",
    historia: "Pensado como interceptador, o Typhoon decepcionou em altitude e teve sérios problemas de motor e de estrutura na cauda. Em baixa altitude, porém, era rápido e muito bem armado. Com quatro canhões de 20 mm e foguetes RP-3, virou a principal arma de apoio aproximado da RAF depois do Dia D, atacando blindados e trens.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla: 48 velas no motor",
      radio: "VHF",
      mira: "Refletora",
      destaque: "O Napier Sabre dava partida com um cartucho Coffman: uma carga explosiva, disparada eletricamente, girava o motor. Eram 24 cilindros com válvulas de camisa, girando a 3.700 rpm."
    }
  },
  {
    id: "tempest", nome: "Tempest", fabricante: "Hawker", nacao: "ru",
    papel: "Caça", primeiroVoo: "1942-09", servico: "1944–1953", produzidos: "1.702",
    motor: { tipo: "linha", cil: 24, rpm: 3700, qtd: 1, nome: "Napier Sabre (H-24)" },
    ficha: "tempest", fotos: ["v-temp-5", "tempest-0", "v-temp-2"],
    resumo: "Um dos caças a pistão mais rápidos em baixa altitude: o maior caçador de bombas V-1.",
    historia: "O Tempest corrigiu o Typhoon com uma asa elíptica bem mais fina. Em 1944 virou o principal interceptador contra as bombas voadoras V-1 e, no avanço sobre a Alemanha, abateu vários jatos Me 262, normalmente quando eles desaceleravam para pousar.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla: 48 velas no motor",
      radio: "VHF",
      mira: "Giroscópica Gyro Gunsight Mk II",
      destaque: "A mira giroscópica GGS Mk II usava um giroscópio e um conjunto de espelhos para mover o retículo e já mostrar onde mirar à frente do alvo."
    }
  },

  /* ===================== ALEMANHA ===================== */
  {
    id: "bf109", nome: "Bf 109", fabricante: "Messerschmitt", nacao: "ale",
    papel: "Caça", primeiroVoo: "1935-05", servico: "1937–1945", produzidos: "≈34.000",
    motor: { tipo: "linha", cil: 12, rpm: 2800, qtd: 1, nome: "Daimler-Benz DB 601/605" },
    ficha: "bf109", fotos: ["bf109", "bf109-g6"],
    resumo: "O caça mais produzido da história, na linha de frente do primeiro ao último dia da guerra na Europa.",
    historia: "Willy Messerschmitt desenhou um caça pequeno e leve em volta do motor mais potente disponível. Do Bf 109 B da Guerra Civil Espanhola ao K de 1945, a célula recebeu motores cada vez maiores. Os maiores ases da história, como Erich Hartmann, voaram de Bf 109. O protótipo voou pela primeira vez com um motor britânico, um Rolls-Royce Kestrel.",
    eletrica: {
      sistema: "24 V CC, padrão da Luftwaffe",
      ignicao: "Dupla, por magneto Bosch",
      radio: "FuG 7 no E; VHF FuG 16Z e IFF FuG 25a no G",
      mira: "Refletora Revi C/12D, depois Revi 16B",
      destaque: "O DB 605 tinha injeção direta de combustível por bomba Bosch: sem carburador, o motor não engasgava em manobras com g negativo, ao contrário dos primeiros Merlin."
    }
  },
  {
    id: "fw190", nome: "Fw 190", fabricante: "Focke-Wulf", nacao: "ale",
    papel: "Caça", primeiroVoo: "1939-06", servico: "1941–1945", produzidos: "+20.000",
    motor: { tipo: "radial", cil: 14, rpm: 2700, qtd: 1, nome: "BMW 801" },
    ficha: "fw190", fotos: ["fw190-voo", "v-fw190-a8", "v-fw190-f8"],
    resumo: "Radial, robusto e cheio de automação elétrica: quando apareceu em 1941, superava o Spitfire da época.",
    historia: "Kurt Tank queria um 'cavalo de cavalaria': robusto, fácil de manter em campo e com trem de pouso largo. A automação do motor e os atuadores elétricos deixavam o piloto livre para lutar. A RAF só entendeu o avião quando um piloto alemão pousou por engano um Fw 190 intacto num aeródromo britânico em 1942.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto Bosch, com avanço automático",
      radio: "VHF FuG 16ZY e IFF FuG 25a",
      mira: "Refletora Revi 16B",
      destaque: "O trem de pouso, os flapes e o compensador eram movidos por motores elétricos, não por hidráulica. E o 'Kommandogerät' do BMW 801 ajustava sozinho passo da hélice, mistura, marcha do compressor e avanço da ignição a partir de uma única manete."
    }
  },
  {
    id: "bf110", nome: "Bf 110", fabricante: "Messerschmitt", nacao: "ale",
    papel: "Caça pesado", primeiroVoo: "1936-05", servico: "1937–1945", produzidos: "6.170",
    motor: { tipo: "linha", cil: 12, rpm: 2800, qtd: 2, nome: "Daimler-Benz DB 601/605 (×2)" },
    ficha: "bf110", fotos: ["bf110-4", "bf110-5"],
    resumo: "O 'Zerstörer' bimotor que sofreu contra os caças da RAF e renasceu como caça noturno com radar.",
    historia: "O Bf 110 foi pensado como caça pesado de longo alcance para escoltar bombardeiros. Contra Spitfires e Hurricanes em 1940 era pesado demais. Equipado com radar e com os canhões 'Schräge Musik', que atiravam para cima, virou a espinha dorsal da caça noturna alemã contra os bombardeiros da RAF.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Dupla, por magneto, em cada motor",
      radio: "FuG 10 (HF), VHF FuG 16Z e IFF FuG 25a",
      mira: "Refletora Revi",
      destaque: "Os caças noturnos levavam radar Lichtenstein: o FuG 202 operava por volta de 490 MHz, e o SN-2 (FuG 220) desceu para cerca de 90 MHz para escapar das interferências britânicas, com as antenas enormes de 'chifre de veado' no nariz."
    }
  },
  {
    id: "me262", nome: "Me 262 Schwalbe", fabricante: "Messerschmitt", nacao: "ale",
    papel: "Caça a jato", primeiroVoo: "1941-04", servico: "1944–1945", produzidos: "≈1.430",
    motor: { tipo: "jato", rpm: 8700, qtd: 2, nome: "Junkers Jumo 004 (×2)" },
    ficha: "me262", fotos: ["me262-6", "me262-1", "me262-2"],
    resumo: "O primeiro caça a jato operacional do mundo: uns 200 km/h mais rápido que qualquer caça a pistão aliado.",
    historia: "A célula ficou pronta antes dos motores: o primeiro voo foi com um motor a pistão no nariz. Os turbojatos Jumo 004 só aguentavam algumas dezenas de horas, por falta de ligas resistentes ao calor. Rápido demais para os caças aliados, o Me 262 ficava vulnerável na decolagem e no pouso, e os aliados passaram a atacar os aeródromos.",
    eletrica: {
      sistema: "24 V CC",
      ignicao: "Velas de ignição só na partida; depois a combustão se mantém sozinha",
      radio: "VHF FuG 16ZY e IFF FuG 25a",
      mira: "Refletora Revi 16B; giroscópica EZ 42 em alguns",
      destaque: "Cada Jumo 004 era girado na partida por um pequeno motor Riedel de dois tempos, escondido no cone da entrada de ar. A turbina girava a cerca de 8.700 rpm."
    }
  },

  /* ===================== URSS ===================== */
  {
    id: "i16", nome: "I-16", fabricante: "Polikarpov", nacao: "urss",
    papel: "Caça", primeiroVoo: "1933-12", servico: "1934–1943", produzidos: "≈10.000 (com treinadores)",
    motor: { tipo: "radial", cil: 9, rpm: 2200, qtd: 1, nome: "Shvetsov M-25 / M-62 / M-63" },
    ficha: "i16", fotos: ["v-i16-24"],
    resumo: "Pequeno e barrigudo, foi o primeiro caça monoplano com trem retrátil a entrar em serviço no mundo.",
    historia: "O 'Ishak' (burrinho) lutou na Espanha, na China, contra o Japão em Khalkhin Gol e contra a Finlândia, e ainda era o caça soviético mais numeroso quando a Alemanha invadiu em 1941. Muito instável e ágil, exigia um piloto atento. O trem de pouso era recolhido por manivela, com dezenas de voltas.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Por magneto",
      radio: "A maioria voava sem rádio",
      mira: "Telescópica, depois refletora PAK-1",
      destaque: "Sem rádio, as formações se comunicavam balançando as asas e por sinais com a mão, o que pesou muito contra os alemães em 1941."
    }
  },
  {
    id: "mig3", nome: "MiG-3", fabricante: "Mikoyan-Gurevich", nacao: "urss",
    papel: "Interceptador", primeiroVoo: "1940-04", servico: "1941–1944", produzidos: "≈3.400",
    motor: { tipo: "linha", cil: 12, rpm: 2050, qtd: 1, nome: "Mikulin AM-35A" },
    ficha: "mig3", fotos: ["mig3-1", "mig3-2"],
    resumo: "Rápido lá em cima, fraco lá embaixo: o primeiro MiG brilhava acima de 5.000 m, mas a guerra no leste era rasante.",
    historia: "O MiG-3 foi feito para interceptar bombardeiros em grande altitude. No front oriental, porém, quase todo o combate era abaixo de 4.000 m, onde ele era pesado e pouco ágil. A produção parou quando os motores Mikulin foram reservados ao avião de ataque Il-2, mas seguiu na defesa aérea de Moscou.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Por magneto",
      radio: "RSI-3; no começo, muitas vezes só o líder tinha transmissor",
      mira: "Refletora PBP-1",
      destaque: "Os primeiros rádios soviéticos sofriam com o ruído da ignição, por falta de blindagem elétrica: muitos pilotos desligavam o receptor de vez."
    }
  },
  {
    id: "yak", nome: "Yak-1 / Yak-9 / Yak-3", fabricante: "Yakovlev", nacao: "urss",
    papel: "Caça", primeiroVoo: "1940-01", servico: "1940–1950", produzidos: "≈36.700 (família)",
    motor: { tipo: "linha", cil: 12, rpm: 2700, qtd: 1, nome: "Klimov M-105 / VK-105" },
    ficha: "yak3", fotos: ["yak3-voo", "yak9-3", "yak1-3", "yak3-nn", "yak9-0", "yak1-0", "yak3-1944"],
    resumo: "A linhagem de caças mais produzida da guerra: madeira, aço e o motor Klimov, derivado do francês Hispano-Suiza.",
    historia: "Alexander Yakovlev criou uma família simples de produzir, com estrutura de tubos de aço e asas de madeira, que evoluiu sem parar: do Yak-1 de 1940 ao pequeno e ágil Yak-3 de 1944, passando pelo Yak-9, o caça soviético mais produzido. O regimento francês Normandie-Niemen lutou de Yak-1, Yak-9 e Yak-3 e voltou para a França com os próprios aviões.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "RSI-3, depois RSI-4",
      mira: "Refletora PBP-1",
      destaque: "O Klimov M-105 descende do Hispano-Suiza 12Y francês, o mesmo motor do Dewoitine D.520: o 'motor-canhão' atira um canhão de 20 mm pelo meio do cubo da hélice."
    }
  },
  {
    id: "la", nome: "LaGG-3 / La-5 / La-7", fabricante: "Lavochkin", nacao: "urss",
    papel: "Caça", primeiroVoo: "1940-03", servico: "1941–1950", produzidos: "≈22.000 (família)",
    motor: { tipo: "radial", cil: 14, rpm: 2400, qtd: 1, nome: "Shvetsov ASh-82" },
    ficha: "la5", fotos: ["la5-7", "la7-1", "la5-2", "la7-6"],
    resumo: "De 'caixão envernizado' a melhor caça soviético: a mesma célula de madeira mudou de vida com um motor radial.",
    historia: "O LaGG-3 era feito de 'madeira delta', camadas de madeira impregnadas com resina, e era pesado para o motor que tinha. Quando a equipe de Lavochkin encaixou o radial Shvetsov ASh-82 na mesma célula, nasceu o La-5, que chegou a tempo de Stalingrado. O La-7 refinou tudo, e foi com ele que Ivan Kozhedub, o maior ás aliado, derrubou um Me 262.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "RSI-4",
      mira: "Refletora PBP-1",
      destaque: "O ASh-82FN tinha injeção direta de combustível (o 'N' de neposredstvenny, 'direto'), como os motores alemães."
    }
  },

  /* ===================== JAPÃO ===================== */
  {
    id: "a6m", nome: "A6M Zero", fabricante: "Mitsubishi", nacao: "jap",
    papel: "Caça embarcado", primeiroVoo: "1939-04", servico: "1940–1945", produzidos: "10.939",
    motor: { tipo: "radial", cil: 14, rpm: 2550, qtd: 1, nome: "Nakajima Sakae" },
    ficha: "a6m", fotos: ["zero-verde", "zero-nariz", "zero-par", "zero-motor"],
    resumo: "Alcance enorme e manobrabilidade absurda em 1941–42, conseguidos com uma estrutura levíssima e quase nenhuma blindagem.",
    historia: "Jiro Horikoshi atendeu a uma especificação quase impossível da Marinha usando uma liga de alumínio nova e cortando peso de todo lugar. O Zero dominou o Pacífico no começo da guerra. Quando um exemplar quase intacto foi capturado no Alasca em 1942, os americanos descobriram suas fraquezas e criaram táticas para evitar a briga em curva.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Por magneto",
      radio: "Tipo 96 Ku-1 (HF)",
      mira: "Refletora Tipo 98",
      destaque: "Sem blindagem elétrica na ignição, o rádio chiava tanto que muitos pilotos o tiravam do avião, e até o mastro da antena era serrado para economizar peso."
    }
  },
  {
    id: "ki43", nome: "Ki-43 Hayabusa", fabricante: "Nakajima", nacao: "jap",
    papel: "Caça", primeiroVoo: "1939-01", servico: "1941–1945", produzidos: "5.919",
    motor: { tipo: "radial", cil: 14, rpm: 2750, qtd: 1, nome: "Nakajima Ha-25 / Ha-115" },
    ficha: "ki43", fotos: ["v-ki43-2", "ki43-3"],
    resumo: "O caça mais numeroso do Exército japonês: leve, ágil e muitas vezes confundido com o Zero pelos aliados.",
    historia: "O Hayabusa ('falcão-peregrino') era extremamente manobrável graças aos flapes de combate em forma de borboleta. Nas primeiras versões tinha só duas metralhadoras e nenhuma blindagem. Os aliados o chamavam de 'Oscar'.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Por magneto",
      radio: "HF; muitos voavam sem",
      mira: "Telescópica, depois refletora",
      destaque: "Os 'flapes de borboleta' podiam ser abertos em combate para gerar mais sustentação e fazer curvas ainda mais fechadas."
    }
  },
  {
    id: "ki61", nome: "Ki-61 Hien", fabricante: "Kawasaki", nacao: "jap",
    papel: "Caça", primeiroVoo: "1941-12", servico: "1943–1945", produzidos: "≈3.000",
    motor: { tipo: "linha", cil: 12, rpm: 2500, qtd: 1, nome: "Kawasaki Ha-40 (DB 601)" },
    ficha: "ki61", fotos: ["ki61-6", "ki61-1"],
    resumo: "O único caça japonês de série com motor em linha refrigerado a líquido: o DB 601 alemão feito sob licença.",
    historia: "Com o nariz fino do motor em linha, os aliados acharam que era uma cópia de caça alemão ou italiano e o apelidaram de 'Tony'. Robusto e bom em mergulho, sofria com a manutenção do motor e a dificuldade de fabricar o virabrequim. Muitas células do Ki-61-II ficaram sem motor e viraram o Ki-100, com motor radial.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF",
      mira: "Refletora",
      destaque: "O Ha-40 manteve a injeção direta de combustível do projeto alemão, uma tecnologia que a indústria japonesa teve dificuldade de produzir com precisão."
    }
  },
  {
    id: "ki84", nome: "Ki-84 Hayate", fabricante: "Nakajima", nacao: "jap",
    papel: "Caça", primeiroVoo: "1943-04", servico: "1944–1945", produzidos: "≈3.500",
    motor: { tipo: "radial", cil: 18, rpm: 3000, qtd: 1, nome: "Nakajima Ha-45 Homare" },
    ficha: "ki84", fotos: ["ki84-1", "ki84-0"],
    resumo: "O melhor caça japonês de série: em boas condições, encarava o P-51D e o P-47D de igual para igual.",
    historia: "Rápido, bem armado e com blindagem, o Hayate ('vendaval') era o que o Exército japonês precisava em 1944. O problema era o motor Homare, muito compacto e sensível, que sofria com combustível de baixa qualidade e falta de mecânicos experientes. Testes americanos com um exemplar capturado mostraram o quanto ele era bom.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto: 36 velas",
      radio: "HF",
      mira: "Refletora",
      destaque: "O Homare colocou 18 cilindros num diâmetro de motor de 14 cilindros: muito potente para o tamanho, mas sensível a qualquer variação de combustível."
    }
  },
  {
    id: "n1k", nome: "N1K-J Shiden", fabricante: "Kawanishi", nacao: "jap",
    papel: "Caça", primeiroVoo: "1942-12", servico: "1944–1945", produzidos: "≈1.500 (família)",
    motor: { tipo: "radial", cil: 18, rpm: 3000, qtd: 1, nome: "Nakajima Homare" },
    ficha: "n1k", fotos: ["n1k-0", "n1k-1", "n1k-2"],
    resumo: "Começou como hidroavião de caça e virou um dos caças terrestres mais perigosos da Marinha japonesa.",
    historia: "A Kawanishi transformou o hidroavião N1K 'Kyofu' num caça terrestre, o Shiden. O primeiro tinha asa média e um trem de pouso longo e frágil. O redesenho Shiden-Kai, de asa baixa e mais fácil de produzir, equipou o 343º Kōkūtai, uma unidade de elite que defendeu o Japão em 1945.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF",
      mira: "Refletora",
      destaque: "Os flapes de combate eram automáticos: um sensor com mercúrio media a aceleração da curva e um atuador abria os flapes na medida certa."
    }
  },

  /* ===================== ITÁLIA ===================== */
  {
    id: "macchi", nome: "Macchi C.200 / C.202 / C.205", fabricante: "Aeronautica Macchi", nacao: "ita",
    papel: "Caça", primeiroVoo: "1937-12", servico: "1939–1951", produzidos: "≈2.500 (família)",
    motor: { tipo: "linha", cil: 12, rpm: 2500, qtd: 1, nome: "Alfa Romeo RA.1000 (DB 601)" },
    ficha: "c202", fotos: ["c202-1", "c202-0", "c205-1", "c205-3"],
    resumo: "A família de caças italianos mais importante da guerra: a mesma célula de Mario Castoldi foi do radial ao DB 605.",
    historia: "O C.200 Saetta tinha motor radial e só duas metralhadoras. Com o motor alemão DB 601, fabricado sob licença pela Alfa Romeo, a mesma célula virou o C.202 Folgore, um dos melhores caças do Eixo no Norte da África em 1941–42. O C.205 Veltro recebeu o DB 605 e lutou dos dois lados depois do armistício de 1943.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "Só nas séries posteriores",
      mira: "Refletora San Giorgio",
      destaque: "A asa esquerda era cerca de 21 cm mais longa que a direita, para compensar o torque do motor: uma 'correção' feita na própria estrutura."
    }
  },
  {
    id: "g50", nome: "G.50 Freccia", fabricante: "Fiat", nacao: "ita",
    papel: "Caça", primeiroVoo: "1937-02", servico: "1938–1946", produzidos: "≈780",
    motor: { tipo: "radial", cil: 14, rpm: 2400, qtd: 1, nome: "Fiat A.74" },
    ficha: "g50", fotos: ["g50-1", "g50-3"],
    resumo: "O primeiro caça monoplano totalmente metálico da Itália, que fez sucesso nas mãos dos finlandeses.",
    historia: "O Freccia estreou na Guerra Civil Espanhola e foi superado rapidamente pelos caças britânicos. A Finlândia comprou 35 unidades, e seus pilotos conseguiram ótimos resultados contra a aviação soviética na Guerra de Continuação.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Por magneto",
      radio: "Na maioria, sem rádio",
      mira: "Refletora San Giorgio",
      destaque: "Os finlandeses equiparam seus Fiat com rádio e adaptaram o equipamento para o inverno, com temperaturas de até -40 °C."
    }
  },
  {
    id: "g55", nome: "G.55 Centauro", fabricante: "Fiat", nacao: "ita",
    papel: "Caça", primeiroVoo: "1942-04", servico: "1943–1945", produzidos: "≈300",
    motor: { tipo: "linha", cil: 12, rpm: 2800, qtd: 1, nome: "Fiat RA.1050 Tifone (DB 605)" },
    ficha: "g55", fotos: ["g55-1", "g55-2"],
    resumo: "Para muitos, o melhor caça italiano da guerra: avaliadores alemães chegaram a considerá-lo para produção na Alemanha.",
    historia: "Projetado por Giuseppe Gabrielli em volta do DB 605 licenciado, o Centauro tinha desempenho, armamento pesado e boa estrutura. Chegou tarde e em pouca quantidade: a maioria lutou com a força aérea da República Social Italiana, no norte, depois do armistício.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "Sim",
      mira: "Refletora San Giorgio",
      destaque: "O motor Tifone era o DB 605A fabricado pela Fiat, com injeção direta de combustível."
    }
  },
  {
    id: "reggiane", nome: "Reggiane Re.2000 / Re.2005", fabricante: "Reggiane", nacao: "ita",
    papel: "Caça", primeiroVoo: "1939-05", servico: "1940–1945", produzidos: "≈600 (família)",
    motor: { tipo: "linha", cil: 12, rpm: 2800, qtd: 1, nome: "Fiat RA.1050 (DB 605)" },
    ficha: "re2005", fotos: ["re2005-4", "re2005-2"],
    resumo: "Uma família elegante que terminou no Re.2005 Sagittario, rápido e bonito, mas feito em poucas dezenas.",
    historia: "O Re.2000 Falco, com motor radial, acabou exportado para a Suécia e a Hungria. Com motores alemães licenciados vieram o Re.2001 e, finalmente, o Re.2005 Sagittario, considerado um dos caças mais bonitos da guerra. Defendeu Nápoles, Roma e a Sicília em 1943.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "Sim",
      mira: "Refletora San Giorgio",
      destaque: "Como no Macchi C.205 e no Fiat G.55, o coração era o DB 605 alemão: os três 'Serie 5' italianos dividiam o mesmo motor."
    }
  },

  /* ===================== FRANÇA ===================== */
  {
    id: "d520", nome: "D.520", fabricante: "Dewoitine", nacao: "fra",
    papel: "Caça", primeiroVoo: "1938-10", servico: "1940–1953", produzidos: "≈900",
    motor: { tipo: "linha", cil: 12, rpm: 2400, qtd: 1, nome: "Hispano-Suiza 12Y" },
    ficha: "d520", fotos: ["d520-0", "d520-3"],
    resumo: "O melhor caça francês de 1940: chegou tarde e em pouca quantidade, mas encarou o Bf 109.",
    historia: "Moderno e ágil, o D.520 era o único caça francês capaz de enfrentar o Bf 109 E em pé de igualdade. Quando a Alemanha atacou em maio de 1940, poucas unidades tinham o avião. Depois do armistício, serviu à França de Vichy, inclusive contra os britânicos na Síria e contra os americanos no Norte da África.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF",
      mira: "Refletora",
      destaque: "O Hispano-Suiza 12Y era um 'moteur-canon': o canhão HS.404 de 20 mm ficava entre os bancos de cilindros e atirava pelo eixo oco da hélice."
    }
  },
  {
    id: "ms406", nome: "M.S.406", fabricante: "Morane-Saulnier", nacao: "fra",
    papel: "Caça", primeiroVoo: "1935-08", servico: "1938–1952", produzidos: "≈1.100",
    motor: { tipo: "linha", cil: 12, rpm: 2400, qtd: 1, nome: "Hispano-Suiza 12Y" },
    ficha: "ms406", fotos: ["ms406-2", "ms406-3"],
    resumo: "O caça francês mais numeroso de 1940, que ganhou uma segunda vida na Finlândia com motor soviético.",
    historia: "Lento perto do Bf 109 E, o M.S.406 lutou com coragem em 1940. A Finlândia recebeu dezenas deles e, em 1943, trocou o motor por Klimov M-105 capturados dos soviéticos, criando o 'Mörkö-Morane' (Morane fantasma), bem mais rápido.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF em parte da frota",
      mira: "Refletora",
      destaque: "O Mörkö-Morane só foi possível porque o Klimov M-105 era descendente do mesmo Hispano-Suiza 12Y: os finlandeses 'devolveram' o motor à sua origem."
    }
  },
  {
    id: "mb152", nome: "MB.150 / MB.152", fabricante: "Bloch", nacao: "fra",
    papel: "Caça", primeiroVoo: "1937-10", servico: "1939–1944", produzidos: "≈660 (família)",
    motor: { tipo: "radial", cil: 14, rpm: 2400, qtd: 1, nome: "Gnome-Rhône 14N" },
    ficha: "mb152", fotos: ["mb152-0", "mb152-1"],
    resumo: "Robusto e bem armado, mas sofreu com atrasos: muitos ficaram parados esperando hélices e miras em 1940.",
    historia: "O protótipo MB.150 nem conseguiu decolar na primeira tentativa, em 1936. Redesenhado, virou a família MB.151/152, com motor radial Gnome-Rhône. Em 1940 muitos aviões estavam prontos mas sem hélice ou equipamento, e os que lutaram mostraram ser resistentes.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "HF",
      mira: "Refletora",
      destaque: "Em 1940 a falta de miras e hélices, componentes de fornecedores diferentes, deixou dezenas de células prontas no chão."
    }
  },

  /* ===================== FINLÂNDIA ===================== */
  {
    id: "myrsky", nome: "VL Myrsky", fabricante: "Valtion lentokonetehdas", nacao: "fin",
    papel: "Caça", primeiroVoo: "1941-12", servico: "1944–1947", produzidos: "≈50",
    motor: { tipo: "radial", cil: 14, rpm: 2700, qtd: 1, nome: "Pratt & Whitney R-1830 Twin Wasp" },
    ficha: "myrsky", fotos: ["myrsky-0", "myrsky-3"],
    resumo: "O caça finlandês feito em casa: madeira, um motor americano conseguido via Suécia e muita determinação.",
    historia: "Sem acesso fácil a alumínio, a fábrica estatal finlandesa projetou um caça de madeira. O Myrsky ('tempestade') era rápido, mas a cola e a estrutura de madeira deram problemas e houve acidentes graves. Chegou em 1944 e foi usado principalmente em reconhecimento, inclusive contra os alemães na Guerra da Lapônia.",
    eletrica: {
      sistema: "Corrente contínua de bordo",
      ignicao: "Dupla, por magneto",
      radio: "Sim",
      mira: "Refletora",
      destaque: "Construir em madeira poupava alumínio, mas a umidade e a cola afetavam a resistência da asa: um problema de engenharia de materiais, não de projeto."
    }
  }
];

/* Correções manuais da ficha técnica (por id de ficha em js/fichas.js).
   Algumas tabelas da Wikipedia trazem como velocidade principal a do
   nível do mar; aqui fica a máxima em altitude, que está na observação. */
window.AJUSTES_FICHA = {
  p47: { variante: "P-47D-40" },
  p51: { variante: "P-51D" },
  f6f: { variante: "F6F-5" },
  spitfire: { variante: "Spitfire Mk Vb" },
  hurricane: { variante: "Hurricane Mk IIC" },
  typhoon: { variante: "Typhoon Mk IB" },
  tempest: { variante: "Tempest Mk V" },
  bf109: { variante: "Bf 109 G-6", velMax: 642, velAlt: 6300, velObs: "530 km/h ao nível do mar" },
  bf110: { variante: "Bf 110 C-1", velMax: 541, velAlt: 6000, velObs: "475 km/h ao nível do mar" },
  me262: { variante: "Me 262 A-1a" },
  mig3: { velMax: 640, velAlt: 7800, velObs: "505 km/h ao nível do mar" },
  yak7: { variante: "Yak-7A", velMax: 571, velAlt: 5000, velObs: "495 km/h ao nível do mar" },
  lagg3: { variante: "LaGG-3 (66ª série)" },
  la5: { variante: "La-5FN" },
  la7: { variante: "La-7 (produção de 1945)" },
  a6m: { variante: "A6M2 Modelo 21" },
  n1k: { velMax: 656, velAlt: 6100, velObs: "571 km/h ao nível do mar" },
  c200: { variante: "C.200 (primeiras séries)" },
  c202: { variante: "C.202CB Série IV–VIII" },
  re2005: { variante: "Re.2005" },
  d520: { variante: "D.520 C.1" },
  ms406: { variante: "M.S.406 C1", velMax: 490, velAlt: 4500, velObs: "452 km/h a 2.000 m" },
  myrsky: { variante: "Myrsky II" }
};

/* Armamento da variante da ficha, em português. */
window.ARMAMENTO = {
  p39: "1× canhão 37 mm + 4× .50",
  p40: "6× .50",
  p38: "1× canhão 20 mm + 4× .50 no nariz; foguetes e bombas",
  p47: "8× .50; até 1.100 kg de bombas ou foguetes",
  p51: "6× .50; bombas e foguetes",
  f4f: "4× .50",
  f6f: "6× .50; foguetes e bombas",
  f4u: "6× .50; foguetes e bombas",
  f2a: "4× .50",
  spitfire: "2× canhão 20 mm + 4× .303",
  hurricane: "4× canhão 20 mm",
  typhoon: "4× canhão 20 mm; 8 foguetes RP-3 ou 2 bombas",
  tempest: "4× canhão 20 mm",
  bf109: "1× canhão 20 mm (no eixo da hélice) + 2× 13 mm",
  fw190: "4× canhão 20 mm + 2× 13 mm",
  bf110: "2× canhão 20 mm + 4× 7,92 mm à frente; 1× 7,92 mm atrás",
  me262: "4× canhão 30 mm; foguetes R4M",
  i16: "4× 7,62 mm ShKAS",
  mig3: "1× 12,7 mm + 2× 7,62 mm",
  yak1: "1× canhão 20 mm + 1× 12,7 mm",
  yak7: "1× canhão 20 mm + 2× 7,62 mm",
  yak9: "1× canhão 20 mm + 2× 12,7 mm",
  yak3: "1× canhão 20 mm + 2× 12,7 mm",
  lagg3: "1× canhão 20 mm + 1× 12,7 mm",
  la5: "2× canhão 20 mm",
  la7: "2× canhão 20 mm",
  a6m: "2× canhão 20 mm + 2× 7,7 mm",
  ki43: "2× 12,7 mm",
  ki61: "2× canhão 20 mm + 2× 12,7 mm",
  ki84: "2× canhão 20 mm + 2× 12,7 mm",
  n1k: "4× canhão 20 mm + 2× 7,7 mm",
  c200: "2× 12,7 mm",
  c202: "2× 12,7 mm + 2× 7,7 mm",
  c205: "2× canhão 20 mm + 2× 12,7 mm",
  g50: "2× 12,7 mm",
  g55: "3× canhão 20 mm + 2× 12,7 mm",
  re2005: "3× canhão 20 mm + 2× 12,7 mm",
  d520: "1× canhão 20 mm (no eixo da hélice) + 4× 7,5 mm",
  ms406: "1× canhão 20 mm (no eixo da hélice) + 2× 7,5 mm",
  mb152: "2× canhão 20 mm + 2× 7,5 mm",
  myrsky: "4× 12,7 mm"
};

/* Sons de motor: gravações reais de aviões restaurados (Freesound), em audio/.
   ini/fim = trecho usado, em segundos; ganho = volume relativo (nivelado pela análise do áudio).
   familias: quais clipes cada família toca. mesmo = false quando a gravação é de um motor parecido. */
window.SONS = {
  pasta: "audio/",
  clipes: {
    "allison-partida":   { arq: "allison-partida.mp3",   ini: 37,  fim: 47,   ganho: 1.3, rotulo: "Partida",   fonte: 0 },
    "p40-decolagem":     { arq: "p40-decolagem.mp3",     ini: 7,   fim: 23.4, ganho: 0.9, rotulo: "Decolagem", fonte: 1 },
    "p51-decolagem":     { arq: "p51-decolagem.mp3",     ini: 7,   fim: 25.5, ganho: 0.8, rotulo: "Decolagem", fonte: 2 },
    "p51-rasante":       { arq: "p51-rasante.mp3",       ini: 0,   fim: 10.7, ganho: 0.8, rotulo: "Rasante",   fonte: 3 },
    "spitfire-rasante":  { arq: "spitfire-rasante.mp3",  ini: 33,  fim: 46,   ganho: 1.0, rotulo: "Rasante",   fonte: 4 },
    "spitfire-passagem": { arq: "spitfire-passagem.mp3", ini: 0,   fim: 27,   ganho: 0.75, rotulo: "Passagem", fonte: 5 },
    "hurricane-rasante": { arq: "hurricane-rasante.mp3", ini: 0,   fim: 9.1,  ganho: 0.75, rotulo: "Rasante",  fonte: 6 },
    "p47-partida":       { arq: "p47-partida.mp3",       ini: 32,  fim: 51,   ganho: 5.0, rotulo: "Partida",   fonte: 7 },
    "p47-rasante":       { arq: "p47-rasante.mp3",       ini: 3,   fim: 11.5, ganho: 1.0, rotulo: "Rasante",   fonte: 8 },
    "bf109-partida":     { arq: "bf109-partida.mp3",     ini: 3,   fim: 24,   ganho: 4.0, rotulo: "Partida",   fonte: 9 },
    "bf109-rasante":     { arq: "bf109-rasante.mp3",     ini: 0,   fim: 11.5, ganho: 1.3, rotulo: "Rasante",   fonte: 10 },
    "fw190-partida":     { arq: "fw190-partida.mp3",     ini: 20,  fim: 46,   ganho: 1.6, rotulo: "Partida",   fonte: 11 },
    "fw190-rasante":     { arq: "fw190-rasante.mp3",     ini: 0,   fim: 8.2,  ganho: 2.2, rotulo: "Rasante",   fonte: 12 },
    "zero-decolagem":    { arq: "zero-decolagem.mp3",    ini: 5,   fim: 22.6, ganho: 1.1, rotulo: "Decolagem", fonte: 13 },
    "corsair-rasante":   { arq: "corsair-rasante.mp3",   ini: 0,   fim: 17,   ganho: 0.75, rotulo: "Rasante",  fonte: 14 }
  },
  // abertura: a partida do Allison e, quando o motor pega, a decolagem por cima
  abertura: { partida: "allison-partida", voo: "p40-decolagem" },
  familias: {
    p39: { clipes: ["allison-partida", "p40-decolagem"], mesmo: true, nota: "Allison V-1710 de um P-40C restaurado: é o mesmo motor do P-39." },
    p40: { clipes: ["allison-partida", "p40-decolagem"], mesmo: true, nota: "P-40C restaurado, com o Allison V-1710 original." },
    p38: { clipes: ["allison-partida", "p40-decolagem"], mesmo: true, nota: "Allison V-1710 de um P-40C: o P-38 usava dois desses, com turbo." },
    p47: { clipes: ["p47-partida", "p47-rasante"], mesmo: true, nota: "P-47D restaurado, com o radial R-2800 de 18 cilindros." },
    p51: { clipes: ["p51-decolagem", "p51-rasante"], mesmo: true, nota: "P-51D restaurado, com o Packard Merlin." },
    f4u: { clipes: ["p47-partida", "corsair-rasante"], mesmo: true, nota: "Rasante de um Corsair. A partida é de um P-47: o motor R-2800 é o mesmo." },
    f6f: { clipes: ["p47-partida", "corsair-rasante"], mesmo: false, nota: "Sem gravação de um Hellcat. Você ouve o mesmo motor R-2800 num P-47 e num Corsair." },
    f4f: { clipes: ["zero-decolagem"], mesmo: false, nota: "Sem gravação de um Wildcat. Motor parecido: radial de 14 cilindros de um A6M Zero." },
    f2a: { clipes: ["zero-decolagem"], mesmo: false, nota: "Sem gravação de um Buffalo. Motor parecido: radial de um A6M Zero." },
    spitfire: { clipes: ["spitfire-rasante", "spitfire-passagem"], mesmo: true, nota: "Spitfire em voo, com o Rolls-Royce Merlin." },
    hurricane: { clipes: ["hurricane-rasante", "spitfire-passagem"], mesmo: true, nota: "Rasante de um Hurricane. A passagem longa é de um Spitfire, com o mesmo Merlin." },
    typhoon: { clipes: [], nota: "Não achei gravação livre de um Napier Sabre. Quase nenhum voa hoje." },
    tempest: { clipes: [], nota: "Não achei gravação livre de um Napier Sabre. Quase nenhum voa hoje." },
    bf109: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: true, nota: "Bf 109 E restaurado, com o Daimler-Benz DB 601 original." },
    bf110: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: false, nota: "Sem gravação de um Bf 110. Você ouve o mesmo motor DB 601 num Bf 109 E." },
    fw190: { clipes: ["fw190-partida", "fw190-rasante"], mesmo: true, nota: "Fw 190 A-5 restaurado, com o BMW 801 original." },
    me262: { clipes: [], nota: "Não achei gravação livre de um Jumo 004 funcionando." },
    i16: { clipes: ["zero-decolagem"], mesmo: false, nota: "Sem gravação de um I-16. Motor parecido: radial de um A6M Zero." },
    mig3: { clipes: ["allison-partida"], mesmo: false, nota: "Sem gravação de um Mikulin. Motor parecido: V12 Allison." },
    yak: { clipes: ["allison-partida", "p40-decolagem"], mesmo: false, nota: "Sem gravação de um Klimov. Motor parecido: V12 Allison de um P-40." },
    la: { clipes: ["fw190-partida", "fw190-rasante"], mesmo: false, nota: "Sem gravação de um Shvetsov ASh-82. Motor parecido: radial BMW 801 de 14 cilindros, de um Fw 190." },
    a6m: { clipes: ["zero-decolagem"], mesmo: true, nota: "A6M3 Zero restaurado, com o Nakajima Sakae original." },
    ki43: { clipes: ["zero-decolagem"], mesmo: true, nota: "Sakae de um A6M3 Zero: o Ha-25/Ha-115 do Ki-43 é o mesmo motor, com o nome do Exército." },
    ki61: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: true, nota: "DB 601 de um Bf 109 E: o Ha-40 do Ki-61 é esse motor fabricado sob licença." },
    ki84: { clipes: ["p47-partida", "p47-rasante"], mesmo: false, nota: "Sem gravação de um Homare. Motor parecido: radial de 18 cilindros de um P-47." },
    n1k: { clipes: ["p47-partida", "p47-rasante"], mesmo: false, nota: "Sem gravação de um Homare. Motor parecido: radial de 18 cilindros de um P-47." },
    macchi: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: true, nota: "DB 601 de um Bf 109 E: o motor do C.202 é esse, fabricado pela Alfa Romeo." },
    g50: { clipes: ["zero-decolagem"], mesmo: false, nota: "Sem gravação de um Fiat A.74. Motor parecido: radial de 14 cilindros de um A6M Zero." },
    g55: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: false, nota: "Sem gravação de um DB 605. Você ouve o DB 601, o irmão mais velho, num Bf 109 E." },
    reggiane: { clipes: ["bf109-partida", "bf109-rasante"], mesmo: false, nota: "Sem gravação de um Reggiane. Você ouve o DB 601 de um Bf 109 E, motor do Re.2001." },
    d520: { clipes: ["allison-partida"], mesmo: false, nota: "Sem gravação de um Hispano-Suiza 12Y. Motor parecido: V12 Allison." },
    ms406: { clipes: ["allison-partida"], mesmo: false, nota: "Sem gravação de um Hispano-Suiza 12Y. Motor parecido: V12 Allison." },
    mb152: { clipes: ["fw190-partida"], mesmo: false, nota: "Sem gravação de um Gnome-Rhône 14N. Motor parecido: radial de 14 cilindros de um Fw 190." },
    myrsky: { clipes: ["zero-decolagem"], mesmo: false, nota: "Sem gravação de um Myrsky. Motor parecido: radial de 14 cilindros de um A6M Zero." }
  },
  creditos: [
    { titulo: "P-40C - Allison Startup", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/142899/" },
    { titulo: "P-40 Takeoff", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161119/" },
    { titulo: "P-51 Mustang Takeoff", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/143561/" },
    { titulo: "Two P-51 Mustangs Pass Overhead", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161121/" },
    { titulo: "Spitfire 2 passes Military od", autor: "Cheeseheadburger", licenca: "CC BY 4.0", fonte: "https://freesound.org/people/Cheeseheadburger/sounds/170477/" },
    { titulo: "spitfire fly past", autor: "mattew", licenca: "CC BY 4.0", fonte: "https://freesound.org/people/mattew/sounds/42968/" },
    { titulo: "Hawker Hurricane Flyby", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161103/" },
    { titulo: "P-47 Thunderbolt Startup", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/142900/" },
    { titulo: "P-47 Flyby", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/143560/" },
    { titulo: "Bf-109 Startup", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161101/" },
    { titulo: "Bf-109 Flyby", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/143558/" },
    { titulo: "Fw-190 Engine Start", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161104/" },
    { titulo: "Fw-190 Flyby", autor: "Fight2FlyPhoto", licenca: "CC BY 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/143562/" },
    { titulo: "A6M3-22 Zero Takeoff", autor: "Fight2FlyPhoto", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/Fight2FlyPhoto/sounds/161110/" },
    { titulo: "Corsair passage", autor: "trouxel", licenca: "CC BY-NC 3.0", fonte: "https://freesound.org/people/trouxel/sounds/251316/" }
  ]
};

