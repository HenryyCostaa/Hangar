# Hangar — arquivo técnico de caças 1939–1945

Portfólio sobre caças da Segunda Guerra, com olhar de engenharia elétrica.

- **Abertura**: uma malha quadriculada de onde o P-39Q-1 (visto de cima) sobe em relevo 3D, no ritmo da gravação real de um Allison V-1710 dando partida. Quando o motor pega, a malha leva uma onda de choque e a hélice dispara. Pra ver um instante parado: `?quadro=10`.
- **Nações**: carrossel 3D numa sala escura, cada nação com seu caça principal na capa. A capa do centro filtra o hangar.
- **Hangar**: 34 famílias de caças de 8 nações (EUA, Reino Unido, Alemanha, URSS, Japão, Itália, França e Finlândia). Cada avião aparece só na nação que o projetou. Tem filtros por motor e papel, ordenação e busca.
- **Ficha da família**: galeria, linha de variantes clicável (cada uma com foto, motor, armamento, texto técnico e o que mudou em relação à anterior), ficha técnica completa (métrica e imperial), o motor com gravações reais (partida, decolagem, rasante), elétrica e aviônica com osciloscópio, e história.
- **Comparador**: até 3 caças lado a lado.
- **Linha do tempo**: primeiro voo de cada família, por nação.
- **Bancada**: laboratório de ignição (tipo de motor e rpm → faíscas por segundo).
- **Trilha de fundo**: música original gerada ao vivo no navegador (Web Audio), baixinha. Liga e desliga no botão do topo.

## Onde editar

| O quê | Arquivo |
|---|---|
| Famílias, elétrica, história, fotos de cada uma | `js/dados.js` (`FAMILIAS`) |
| Variantes (foto, motor, armas, seções técnicas, sub-versões, o que mudou), um arquivo por nação | `js/variantes/` |
| Correções da ficha técnica e armamento | `js/dados.js` (`AJUSTES_FICHA`, `ARMAMENTO`) |
| Textos longos de motor e história de cada família | `js/historias.js` (`HISTORIAS`) |
| Texto do "Sobre" | `index.html` (seção SOBRE) |
| Cores e fontes | `css/style.css` (topo) |
| A trilha de fundo | `js/trilha.js` |
| Sons de motor (gravações em `audio/`, trechos, volume e qual família usa cada uma) | `js/dados.js` (`SONS`) |

### Sons

As gravações em `audio/` são de aviões restaurados, baixadas do Freesound sob licenças Creative Commons (CC BY e CC BY-NC). Autor e link de cada uma aparecem na seção Sobre. As NC só podem ser usadas sem fins comerciais.

### Fichas técnicas

`js/fichas.js` foi gerado automaticamente a partir das tabelas de especificações dos artigos da Wikipedia em inglês, já convertidas para unidades métricas. Quando a tabela traz como velocidade principal a do nível do mar, a máxima em altitude fica em `AJUSTES_FICHA`. Valores com ≈ são aproximados.

### Fotos

`js/fotos.js` diz de onde vem cada foto: 4 do P-39 estão em `img/` e as outras carregam direto do Wikimedia Commons, o que é permitido e funciona no GitHub Pages, mas precisa de internet. Autor e licença de cada uma estão em `js/creditos.js` e aparecem na seção Sobre. Se trocar fotos, mantenha os créditos.

## Ver no computador

Na pasta do projeto, rode:

```
npx http-server -p 5539 -c-1
```

Depois abra http://localhost:5539

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie esta pasta.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.
