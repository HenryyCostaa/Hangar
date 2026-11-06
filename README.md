# Hangar — arquivo técnico de caças 1939–1945

Portfólio sobre caças da Segunda Guerra, com olhar de engenharia elétrica.

- **Abertura**: a sequência de partida elétrica do P-39Q-1 (bateria, gerador, magnetos, partida), com o osciloscópio mostrando a ignição acelerando.
- **Hangar**: 34 famílias de caças de 8 nações (EUA, Reino Unido, Alemanha, URSS, Japão, Itália, França e Finlândia). Cada nação mostra os caças que projetou e os que usou, com filtros por motor e papel, ordenação e busca.
- **Ficha da família**: galeria, linha de variantes clicável, ficha técnica completa (métrica e imperial), elétrica e aviônica com osciloscópio, botão "ouvir o motor", história e operadores.
- **Comparador**: até 3 caças lado a lado.
- **Linha do tempo**: primeiro voo de cada família, por nação.
- **Bancada**: laboratório de ignição (tipo de motor e rpm → faíscas por segundo).
- **Trilha de fundo**: música original gerada ao vivo no navegador (Web Audio), baixinha. Liga e desliga no botão do topo.

## Onde editar

| O quê | Arquivo |
|---|---|
| Famílias, variantes, elétrica, história, fotos de cada uma | `js/dados.js` (`FAMILIAS`) |
| Correções da ficha técnica e armamento | `js/dados.js` (`AJUSTES_FICHA`, `ARMAMENTO`) |
| Seus aeromodelos | `js/dados.js` (`PROJETOS`) |
| Texto do "Sobre" | `index.html` (seção SOBRE) |
| Cores e fontes | `css/style.css` (topo) |
| A trilha e os sons de motor | `js/trilha.js` |

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
