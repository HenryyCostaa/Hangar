/* Variantes — Itália, França e Finlândia */
Object.assign(window.VARIANTES = window.VARIANTES || {}, {
  macchi: [
    { nome: "C.200 Serie I–VI", ano: 1939, ficha: "c200", foto: "v-mac-200", prod: "≈ 400", motor: "Fiat A.74 RC38 · 870 hp", armas: "2× 12,7 mm Breda-SAFAT",
      texto: "O primeiro caça moderno de Mario Castoldi: radial Fiat, cabine elevada com a 'corcova' atrás do piloto, manobrável e robusto. As primeiras séries tinham canopy fechado e um defeito sério na asa.",
      secoes: {
        estrutura: "Canopy fechado nas primeiras unidades. A asa entrava em parafuso de repente em curvas fechadas, o que causou acidentes fatais. A solução foi um perfil de asa novo, de Ambrosini, nas séries seguintes.",
        armas: "Só 2 Breda-SAFAT de 12,7 mm no capô, sincronizadas com a hélice: fogo fraco para 1940.",
        motor: "Fiat A.74 RC38 de 14 cilindros, cópia aperfeiçoada do Pratt & Whitney Twin Wasp."
      },
      mudou: [] },
    { nome: "C.200 Serie VII em diante", ano: 1940, foto: "", prod: "≈ 750", motor: "Fiat A.74 RC38 · 870 hp", armas: "2× 12,7 mm",
      texto: "Asa corrigida e cabine aberta, que os pilotos, vindos dos biplanos, preferiam.",
      secoes: {
        estrutura: "Perfil de asa novo, sem o parafuso traiçoeiro. Cabine aberta, com só um para-brisa e laterais articuladas.",
        sistemas: "Rádio e oxigênio melhorados."
      },
      mudou: ["Perfil de asa novo, sem o parafuso perigoso", "Cabine aberta"] },
    { nome: "C.200 AS / CB", ano: 1941, foto: "", prod: "parte das séries", motor: "Fiat A.74 RC38", armas: "2× 12,7 mm · bombas (CB)",
      texto: "As versões para o deserto (AS, Africa Settentrionale) e de caça-bombardeiro (CB).",
      secoes: {
        motor: "AS: filtro de areia na tomada de ar do carburador, sob o capô.",
        sistemas: "Kit de sobrevivência no deserto. CB: cabides sob as asas para bombas de 50 a 160 kg ou tanques.",
        pintura: "Deserto: areia com manchas verdes em anéis, a camuflagem de 'anéis de fumaça', e faixa branca na fuselagem."
      },
      sub: [
        { nome: "C.200 AS", texto: "Filtro de areia e kit de deserto, para a Líbia." },
        { nome: "C.200 CB", texto: "Cabides para bombas sob as asas." }
      ],
      mudou: ["Filtro de areia (AS)", "Cabides para bombas (CB)"] },
    { nome: "C.202 Serie I–VI", ano: 1941, ficha: "c202", foto: "v-mac-202", principal: true, prod: "≈ 500", motor: "Alfa Romeo RA.1000 RC41 (DB 601A) · 1.175 hp", armas: "2× 12,7 mm",
      texto: "Castoldi colocou um DB 601 sob licença numa fuselagem nova e esguia, sobre a mesma asa do C.200. Passou dos 600 km/h e igualou os melhores caças aliados no Norte da África.",
      secoes: {
        motor: "RA.1000 RC41 'Monsone': DB 601A fabricado pela Alfa Romeo, com injeção direta. A produção era lenta, e isso limitou o número de C.202.",
        estrutura: "Fuselagem nova, mais longa e fina, cabine fechada com canopy de abrir para o lado e radiador sob a fuselagem.",
        armas: "Só as 2 de 12,7 mm do C.200: o grande defeito do avião."
      },
      mudou: ["V12 DB 601 (Alfa Romeo) no lugar do radial: +300 hp", "Fuselagem nova e esguia", "Cabine fechada"] },
    { nome: "C.202 Serie VII em diante", ano: 1942, foto: "", prod: "≈ 700", motor: "Alfa Romeo RA.1000 RC41 · 1.175 hp", armas: "2× 12,7 mm · 2× 7,7 mm",
      texto: "Finalmente mais armas, embora ainda pouco. Foi o C.202 de El Alamein e de Malta.",
      secoes: {
        armas: "2 metralhadoras de 7,7 mm nas asas, além das 2 de 12,7 mm.",
        sistemas: "Blindagem do piloto e para-brisa blindado. Mira Revi alemã em alguns."
      },
      mudou: ["2× 7,7 mm nas asas", "Blindagem e para-brisa blindado"] },
    { nome: "C.202 AS / CB", ano: 1942, foto: "", prod: "a maioria das séries", motor: "Alfa Romeo RA.1000 RC41", armas: "2× 12,7 mm · 2× 7,7 mm · bombas (CB)",
      texto: "Quase todos os C.202 que foram para a África eram AS, com filtro de areia.",
      secoes: {
        motor: "Filtro de areia numa caixa na lateral esquerda do nariz, na tomada do compressor.",
        sistemas: "CB: cabides sob as asas para 2 bombas de 50 a 160 kg ou tanques de 100 L.",
        pintura: "Areia com manchas verdes ('anéis de fumaça' ou manchas irregulares), faixa branca na fuselagem e nariz amarelo para identificação."
      },
      mudou: ["Filtro de areia na lateral do nariz", "Cabides para bombas ou tanques"] },
    { nome: "C.205V Veltro Serie I", ano: 1943, ficha: "c205", foto: "v-mac-205", prod: "≈ 100", motor: "Fiat RA.1050 RC58 Tifone (DB 605A) · 1.475 hp", armas: "2× 12,7 mm · 2× 7,7 mm",
      texto: "O DB 605 fabricado pela Fiat no C.202. Chegava a ~640 km/h. A primeira série ainda tinha as armas do C.202.",
      secoes: {
        motor: "RA.1050 RC58 Tifone: DB 605A fabricado pela Fiat, com 1.475 hp.",
        estrutura: "Radiador de óleo duplo sob o nariz e cauda reforçada."
      },
      mudou: ["DB 605 (Fiat) de 1.475 hp", "~640 km/h"] },
    { nome: "C.205V Serie III", ano: 1943, foto: "", prod: "≈ 160", motor: "Fiat RA.1050 RC58 · 1.475 hp", armas: "2× 12,7 mm · 2× MG 151/20",
      texto: "Enfim armamento de verdade: dois canhões alemães de 20 mm nas asas. É considerado o melhor caça italiano a entrar em ação em número.",
      secoes: { armas: "MG 151/20 de 20 mm nas asas no lugar das 7,7 mm." },
      mudou: ["2 canhões MG 151/20 nas asas"] },
    { nome: "C.205N Orione", ano: 1942, foto: "", prod: "2", motor: "Fiat RA.1050 RC58 · 1.475 hp", armas: "1× MG 151/20 no cubo · 4× 12,7 mm (N1) / 3× MG 151/20 + 2× 12,7 (N2)",
      texto: "Um C.205 com asa e fuselagem novas, para alta altitude. Excelente, mas a Regia Aeronautica preferiu o G.55, e o armistício parou tudo.",
      secoes: { estrutura: "Asa maior e fuselagem mais longa, com canhão no cubo da hélice." },
      mudou: ["Asa e fuselagem novas", "Canhão no cubo; só protótipos"] }
  ],

  g50: [
    { nome: "G.50 Serie I", ano: 1938, foto: "v-g50-1", principal: true, prod: "≈ 250", motor: "Fiat A.74 RC38 · 840 hp", armas: "2× 12,7 mm Breda-SAFAT",
      texto: "O primeiro monoplano de caça totalmente metálico com trem retrátil da Itália, projetado por Giuseppe Gabrielli.",
      secoes: {
        estrutura: "Canopy fechado nas primeiras unidades. Os pilotos, acostumados a biplanos, pediram cabine aberta: o canopy embaçava e era difícil de abrir em emergência.",
        armas: "2 de 12,7 mm no capô."
      },
      mudou: [] },
    { nome: "G.50 (cabine aberta)", ano: 1939, foto: "", prod: "parte da série", motor: "Fiat A.74 RC38", armas: "2× 12,7 mm",
      texto: "A partir de certa série, a cabine passou a ser aberta, com laterais rebatíveis.",
      secoes: { estrutura: "Cabine aberta com para-brisa e laterais rebatíveis." },
      mudou: ["Cabine aberta"] },
    { nome: "G.50bis", ano: 1940, foto: "", prod: "≈ 420", motor: "Fiat A.74 RC38 · 840 hp", armas: "2× 12,7 mm · bombas",
      texto: "A versão mais produzida: mais alcance, mais proteção e melhor visão.",
      secoes: {
        estrutura: "Fuselagem traseira redesenhada, mais baixa, para o piloto ver para trás. Leme maior.",
        sistemas: "Mais combustível, com alcance de ~1.000 km, blindagem atrás do piloto e cabides para bombas pequenas."
      },
      mudou: ["Mais combustível e blindagem", "Fuselagem traseira rebaixada", "Cabides para bombas"] },
    { nome: "G.50bis AS", ano: 1941, foto: "", prod: "parte da série", motor: "Fiat A.74 RC38", armas: "2× 12,7 mm · bombas",
      texto: "O G.50 do deserto, usado na Líbia como caça e, cada vez mais, como avião de ataque.",
      secoes: {
        motor: "Filtro de areia na tomada do carburador.",
        sistemas: "Kit de sobrevivência no deserto.",
        pintura: "Areia com manchas verdes e faixa branca na fuselagem."
      },
      mudou: ["Filtro de areia", "Kit de deserto"] },
    { nome: "G.50ter / G.50V", ano: 1941, foto: "", prod: "1 + 1", motor: "Fiat A.76 · 1.000 hp (ter) · DB 601A · 1.175 hp (V)", armas: "2× 12,7 mm",
      texto: "Tentativas de dar mais motor ao G.50. O G.50V, com DB 601, chegou a ~580 km/h e abriu caminho para o G.55.",
      secoes: { motor: "G.50ter: radial A.76. G.50V: V12 DB 601, com nariz longo e radiador sob a fuselagem." },
      mudou: ["Motores mais fortes; só protótipos"] },
    { nome: "G.50B", ano: 1940, foto: "g50-1", prod: "≈ 100", motor: "Fiat A.74 RC38", armas: "Desarmado",
      texto: "Treinador biplace com duplo comando, para formar pilotos de caça monoplano.",
      secoes: { estrutura: "Duas cabines em tandem com canopy longo." },
      mudou: ["Biplace com duplo comando"] }
  ],

  g55: [
    { nome: "G.55 (protótipo)", ano: 1942, foto: "", prod: "3", motor: "Fiat RA.1050 RC58 Tifone (DB 605A) · 1.475 hp", armas: "1× MG 151/20 · 4× 12,7 mm",
      texto: "Gabrielli projetou um caça em torno do DB 605, pensado para ser fácil de fabricar. Voou em abril de 1942.",
      secoes: { estrutura: "Asa baixa grande, com boa carga alar para altitude, e radiador sob a fuselagem." },
      mudou: [] },
    { nome: "G.55/0", ano: 1943, foto: "", prod: "≈ 15", motor: "Fiat RA.1050 RC58 · 1.475 hp", armas: "1× MG 151/20 no cubo · 4× 12,7 mm",
      texto: "Pré-série com 4 metralhadoras no nariz.",
      secoes: { armas: "Canhão pelo cubo e 4 Breda-SAFAT de 12,7 mm no capô, 2 em cima e 2 embaixo." },
      mudou: ["Pré-série: canhão no cubo + 4× 12,7 mm"] },
    { nome: "G.55 Serie I", ano: 1943, foto: "v-g55-1", principal: true, prod: "≈ 150", motor: "Fiat RA.1050 RC58 · 1.475 hp", armas: "3× MG 151/20 · 2× 12,7 mm",
      texto: "Em testes comparativos de 1943 foi avaliado como o melhor dos caças italianos com DB 605. Chegava a ~630 km/h e se mantinha bem em altitude.",
      secoes: {
        armas: "As 2 metralhadoras de baixo do capô viraram 2 canhões MG 151/20 nas asas: 3× 20 mm e 2× 12,7 mm.",
        estrutura: "Estrutura simplificada para produção, mas ainda demorada de fabricar: umas 15.000 horas por avião."
      },
      mudou: ["2 canhões de 20 mm nas asas: 3× 20 mm + 2× 12,7 mm", "Produção em série"] },
    { nome: "G.55/S", ano: 1944, foto: "", prod: "1", motor: "Fiat RA.1050", armas: "1 torpedo",
      texto: "Protótipo de caça-torpedeiro, com o radiador dividido em dois para o torpedo caber sob a fuselagem.",
      secoes: { estrutura: "Radiador ventral dividido em dois e cabide para torpedo de 680 kg." },
      mudou: ["Radiador dividido e cabide de torpedo"] },
    { nome: "G.56", ano: 1944, foto: "v2-g55-g-56", prod: "2", motor: "Daimler-Benz DB 603A · 1.750 hp", armas: "3× MG 151/20",
      texto: "O G.55 com o DB 603, maior. Chegou a ~690 km/h, o caça a pistão italiano mais rápido, mas não houve produção.",
      secoes: { motor: "DB 603A de 44,5 litros, mais largo." },
      mudou: ["DB 603A de 1.750 hp", "~690 km/h"] },
    { nome: "G.59", ano: 1948, foto: "v-g55-59", prod: "≈ 180", motor: "Rolls-Royce Merlin 500 · 1.610 hp", armas: "Variável (treino)",
      texto: "Depois da guerra, sem DB 605, a Fiat instalou um Merlin. Virou treinador avançado.",
      secoes: { estrutura: "Versões monoplace e biplace. As últimas tinham canopy em bolha." },
      mudou: ["Merlin no lugar do DB 605", "Treinador avançado"] }
  ],

  reggiane: [
    { nome: "Re.2000 Falco", ano: 1940, foto: "v-re-2000", prod: "≈ 30 na Regia Aeronautica", motor: "Piaggio P.XI RC40 · 986 hp", armas: "2× 12,7 mm",
      texto: "Projeto de Roberto Longhi, muito influenciado pelos Seversky americanos. Muito manobrável, mas o motor Piaggio era pouco confiável.",
      secoes: {
        estrutura: "Asa elíptica com tanques integrais: a própria estrutura vedada era o tanque, sem bolsas. Era leve, mas vazava e pegava fogo com facilidade.",
        motor: "Piaggio P.XI de 14 cilindros, que esquentava e falhava."
      },
      sub: [
        { nome: "Re.2000 Serie I", texto: "Padrão." },
        { nome: "Re.2000 Serie III (GA)", texto: "Mais combustível, para longo alcance." }
      ],
      mudou: [] },
    { nome: "Re.2000 Catapultabile", ano: 1941, foto: "v2-reggiane-re-2000-catapultabile", prod: "≈ 10", motor: "Piaggio P.XI", armas: "2× 12,7 mm",
      texto: "Versão para ser lançada de catapulta nos encouraçados da Marinha italiana. Também não podia pousar no navio.",
      secoes: { estrutura: "Pontos de catapulta e estrutura reforçada." },
      mudou: ["Lançado por catapulta de navio"] },
    { nome: "Re.2001 Falco II", ano: 1941, foto: "v-re-2001", prod: "≈ 250", motor: "Alfa Romeo RA.1000 RC41 (DB 601A) · 1.175 hp", armas: "2× 12,7 mm · 2× 7,7 mm",
      texto: "A mesma asa do Re.2000 com o DB 601 fabricado pela Alfa Romeo, que também ia para o Macchi C.202 e por isso faltava.",
      secoes: {
        estrutura: "Tanques integrais trocados por tanques autovedantes de verdade nas séries seguintes.",
        armas: "2 de 12,7 mm no capô e 2 de 7,7 mm nas asas."
      },
      sub: [
        { nome: "Re.2001 Serie I–IV", texto: "Caça padrão, com pequenas mudanças de armas e equipamento." },
        { nome: "Re.2001 CB", texto: "Caça-bombardeiro, com bomba de até 250 kg sob a fuselagem." },
        { nome: "Re.2001 CN", texto: "Caça noturno, com gôndolas de 20 mm sob as asas e cancelas nos escapamentos." }
      ],
      mudou: ["V12 DB 601 no lugar do radial Piaggio", "Tanques autovedantes de verdade", "Versões CB e CN"] },
    { nome: "Re.2002 Ariete", ano: 1942, foto: "v-re-2002", prod: "≈ 225", motor: "Piaggio P.XIX RC45 · 1.175 hp", armas: "2× 12,7 mm · 2× 7,7 mm · até 640 kg de bombas",
      texto: "Para contornar a falta de DB 601, voltou ao radial, agora mais forte. Virou caça-bombardeiro na Sicília em 1943.",
      secoes: {
        motor: "Piaggio P.XIX de 14 cilindros, mais confiável que o P.XI.",
        armas: "Cabide ventral para bomba de 250 ou 500 kg e cabides sob as asas."
      },
      mudou: ["Volta ao radial: Piaggio P.XIX de 1.175 hp", "Caça-bombardeiro com até 640 kg de bombas"] },
    { nome: "Re.2005 Sagittario", ano: 1943, foto: "v-re-2005", principal: true, prod: "48", motor: "Fiat RA.1050 RC58 Tifone (DB 605A) · 1.475 hp", armas: "1× MG 151/20 no cubo · 2× MG 151/20 · 2× 12,7 mm",
      texto: "Redesenho completo em torno do DB 605. Talvez o caça italiano mais avançado, mas só 48 foram fabricados.",
      secoes: {
        estrutura: "Fuselagem e asa novas. O trem girava 90° e recolhia deitado, fino, dentro da asa. Bordo de ataque mais fino.",
        armas: "3 canhões MG 151/20 (um no cubo, dois nas asas) e 2 metralhadoras de 12,7 mm."
      },
      mudou: ["DB 605 de 1.475 hp", "Fuselagem e asa novas; trem girando 90°", "3× 20 mm + 2× 12,7 mm"] }
  ],

  d520: [
    { nome: "D.520-01", ano: 1938, foto: "v-d520-proto", prod: "1", motor: "Hispano-Suiza 12Y-21 · 890 hp", armas: "Desarmado",
      texto: "Primeiro voo em outubro de 1938, com hélice de madeira de 2 pás e só ~480 km/h. Radiador, escapamentos e hélice foram refeitos até passar dos 530 km/h.",
      secoes: { estrutura: "Fuselagem fina com o radiador sob a asa e cabine bem atrás." },
      mudou: [] },
    { nome: "D.520-02 / 03", ano: 1939, foto: "", prod: "2", motor: "Hispano-Suiza 12Y-31 · 860 hp", armas: "1× 20 mm · 2× 7,5 mm",
      texto: "Protótipos que definiram a série: hélice de 3 pás, radiador revisto e armamento.",
      secoes: { motor: "Hélice Ratier de 3 pás e passo variável. Escapamentos ejetores." },
      mudou: ["Hélice de 3 pás", "Radiador e escapamentos refeitos"] },
    { nome: "D.520", ano: 1940, foto: "v-d520-serie", principal: true, prod: "≈ 440 até junho de 1940", motor: "Hispano-Suiza 12Y-45 · 935 hp", armas: "1× HS.404 20 mm · 4× MAC 1934 7,5 mm",
      texto: "O melhor caça francês de 1940, comparável ao Bf 109 E em manobra. Chegou tarde e em pouca quantidade.",
      secoes: {
        motor: "12Y-45 com compressor Szydlowski-Planiol, mais eficiente em altitude.",
        armas: "O canhão Hispano HS.404 de 20 mm atirava pelo cubo da hélice, entre as bancadas do V12: o 'moteur-canon'. 4 metralhadoras MAC 1934 de tambor nas asas.",
        sistemas: "Rádio e mira de série. Blindagem atrás do piloto."
      },
      mudou: ["12Y-45 com compressor Szydlowski-Planiol", "Canhão HS.404 pelo cubo + 4 metralhadoras", "~535 km/h"] },
    { nome: "D.523", ano: 1941, foto: "", prod: "1", motor: "Hispano-Suiza 12Y-51 · 1.000 hp", armas: "Como o D.520",
      texto: "Protótipo com o 12Y-51, mais forte. A produção parou com a guerra.",
      secoes: { motor: "12Y-51 de 1.000 hp." },
      mudou: ["Hispano-Suiza 12Y-51 de 1.000 hp"] },
    { nome: "D.524", ano: 1942, foto: "", prod: "1", motor: "Hispano-Suiza 12Z · 1.200 hp", armas: "Como o D.520",
      texto: "Protótipo com o novo 12Z de 1.200 hp, que poderia ter dado ao D.520 desempenho de 1942.",
      secoes: { motor: "Hispano-Suiza 12Z de 1.200 hp." },
      mudou: ["Hispano-Suiza 12Z de 1.200 hp"] },
    { nome: "D.520DC", ano: 1945, foto: "", prod: "≈ 13 conversões", motor: "Hispano-Suiza 12Y-45", armas: "Desarmado",
      texto: "Treinador biplace feito depois da Libertação, para a nova Armée de l'Air.",
      secoes: { estrutura: "Segunda cabine atrás da original, para o instrutor (DC = duplo comando)." },
      mudou: ["Treinador biplace de duplo comando"] }
  ],

  ms406: [
    { nome: "M.S.405", ano: 1935, foto: "v-ms-405", prod: "17", motor: "Hispano-Suiza 12Ygrs · 860 hp", armas: "1× 20 mm · 2× 7,5 mm",
      texto: "O primeiro caça francês a passar de 400 km/h em voo nivelado, com trem retrátil e cabine fechada.",
      secoes: { estrutura: "Estrutura de tubos com revestimento de Plymax: compensado colado a uma folha fina de alumínio. Era leve, mas lento de fabricar." },
      mudou: [] },
    { nome: "M.S.406", ano: 1938, foto: "v-ms-406", principal: true, prod: "≈ 1.080", motor: "Hispano-Suiza 12Y-31 · 860 hp", armas: "1× HS.404 ou HS.9 20 mm · 2× MAC 1934",
      texto: "O caça francês mais numeroso em 1940. Robusto e manobrável, mas já lento demais para enfrentar o Bf 109.",
      secoes: {
        estrutura: "Asa com estrutura nova e mais leve que a do 405.",
        motor: "Radiador ventral retrátil: descia na decolagem e na subida, quando o motor esquentava, e recolhia em cruzeiro para ganhar velocidade.",
        armas: "Canhão de 20 mm no cubo da hélice e 2 MAC 1934 de tambor nas asas."
      },
      mudou: ["Asa com estrutura nova e mais leve", "Radiador ventral retrátil", "Canhão de 20 mm no cubo"] },
    { nome: "M.S.410", ano: 1940, foto: "", prod: "≈ 75 conversões", motor: "Hispano-Suiza 12Y-31 · 860 hp", armas: "1× 20 mm · 4× MAC 1934",
      texto: "Atualização do 406 feita às pressas antes do armistício.",
      secoes: {
        motor: "Radiador fixo no lugar do retrátil, mais simples, e escapamentos ejetores que davam um pouco de empuxo.",
        armas: "4 metralhadoras de fita no lugar de 2 de tambor."
      },
      mudou: ["Radiador fixo", "4 metralhadoras de fita (eram 2 de tambor)", "Escapamentos ejetores"] },
    { nome: "M.S.450", ano: 1939, foto: "", prod: "1", motor: "Hispano-Suiza 12Y-45 · 935 hp", armas: "1× 20 mm · 2× 7,5 mm",
      texto: "Protótipo com o motor do D.520, para tentar manter o 406 competitivo. Não seguiu adiante.",
      secoes: { motor: "12Y-45 com compressor Szydlowski-Planiol." },
      mudou: ["Motor 12Y-45 do D.520"] }
  ],

  mb152: [
    { nome: "MB.150", ano: 1937, foto: "", prod: "1", motor: "Gnome-Rhône 14N · 920 hp", armas: "—",
      texto: "Na primeira tentativa, em 1936, o protótipo nem decolou. Com asa maior e trem modificado, voou em 1937.",
      secoes: { estrutura: "Estrutura robusta e simples, pensada para produção rápida." },
      mudou: [] },
    { nome: "MB.151", ano: 1939, foto: "v-mb-151", prod: "≈ 140", motor: "Gnome-Rhône 14N-35 · 920 hp", armas: "4× MAC 1934",
      texto: "Primeira versão de série. O desempenho ficou abaixo do esperado e muitos foram usados só como treinadores.",
      secoes: { motor: "Gnome-Rhône 14N-35 com hélice tripá de passo variável." },
      mudou: ["Versão de série com 14N-35", "4 metralhadoras MAC 1934"] },
    { nome: "MB.152", ano: 1939, foto: "", principal: true, prod: "≈ 480", motor: "Gnome-Rhône 14N-25/49 · 1.000–1.100 hp", armas: "2× HS.404 20 mm · 2× MAC 1934",
      texto: "Motor mais forte e dois canhões. Robusto, mas com refrigeração ruim e pouco alcance.",
      secoes: {
        motor: "O radial esquentava dentro da carenagem justa. Os tardios receberam carenagem e defletores revistos.",
        sistemas: "Muitos saíram da fábrica em 1940 sem hélice, sem mira ou sem rádio, e ficaram parados esperando equipamento.",
        armas: "2 canhões HS.404 de 20 mm nas asas, com tambor, e 2 metralhadoras."
      },
      mudou: ["Gnome-Rhône 14N de 1.000–1.100 hp", "2 canhões HS.404 de 20 mm", "Problemas de refrigeração e alcance"] },
    { nome: "MB.153 / MB.154", ano: 1939, foto: "", prod: "1 + 1", motor: "Pratt & Whitney Twin Wasp (153) · Wright Cyclone (154)", armas: "—",
      texto: "Protótipos com motores americanos, caso faltassem Gnome-Rhône.",
      secoes: { motor: "MB.153 com Pratt & Whitney R-1830 e MB.154 com Wright R-1820." },
      mudou: ["Motores americanos; só protótipos"] },
    { nome: "MB.155", ano: 1940, foto: "", prod: "≈ 10 até junho de 1940", motor: "Gnome-Rhône 14N-49 · 1.080 hp", armas: "2× 20 mm · 4× 7,5 mm",
      texto: "Resolveu o alcance: mais combustível, com a cabine mudada de lugar.",
      secoes: { estrutura: "Cabine mais para trás e tanque extra na frente dela. Carenagem do motor revista." },
      mudou: ["Mais combustível e cabine mais para trás", "Carenagem revista"] },
    { nome: "MB.157", ano: 1942, foto: "", prod: "1", motor: "Gnome-Rhône 14R · 1.590 hp", armas: "—",
      texto: "Com o Gnome-Rhône 14R de dois estágios, chegou a ~710 km/h em testes, comparável aos melhores caças da época. Ficou só no protótipo.",
      secoes: { motor: "14R de 1.590 hp, com radiador de óleo nas asas." },
      mudou: ["Gnome-Rhône 14R de 1.590 hp", "~710 km/h; só protótipo"] }
  ],

  myrsky: [
    { nome: "MY-1 (protótipo)", ano: 1941, foto: "", prod: "1", motor: "Pratt & Whitney R-1830 Twin Wasp · 1.065 hp", armas: "—",
      texto: "Projetado pela fábrica estatal VL para não depender de caças importados. Voou em dezembro de 1941.",
      secoes: { estrutura: "Fuselagem de tubos de aço com revestimento de madeira. Asa de madeira colada, para economizar metal importado." },
      mudou: [] },
    { nome: "Myrsky I", ano: 1943, foto: "", prod: "3", motor: "Pratt & Whitney R-1830 · 1.065 hp", armas: "4× 12,7 mm",
      texto: "Pré-série de três aviões, com estrutura e trem revistos depois dos testes.",
      secoes: { estrutura: "Estrutura aliviada e trem reforçado." },
      mudou: ["Estrutura e trem revistos", "Armamento instalado"] },
    { nome: "Myrsky II", ano: 1944, foto: "v-myr-2", principal: true, prod: "47", motor: "Pratt & Whitney R-1830 · 1.065 hp", armas: "4× 12,7 mm no capô",
      texto: "A série de produção. Chegava a ~535 km/h, mas as asas de madeira davam problema.",
      secoes: {
        armas: "4 metralhadoras de 12,7 mm LKk/42, derivadas da Browning, no capô e sincronizadas com a hélice.",
        estrutura: "A cola e a madeira das asas sofriam com a umidade. Houve falhas estruturais em mergulho, e o avião saiu de serviço depois da guerra."
      },
      mudou: ["Série de 47 aviões", "4× 12,7 mm no capô", "Asas de madeira sensíveis à umidade"] },
    { nome: "Myrsky III", ano: 1945, foto: "", prod: "0 (10 encomendados)", motor: "Pratt & Whitney R-1830", armas: "4× 12,7 mm",
      texto: "Série melhorada que não chegou a ser concluída depois da guerra.",
      secoes: { estrutura: "Correções de estrutura com base nos acidentes do Myrsky II." },
      mudou: ["Estrutura corrigida; não concluído"] }
  ]
});
