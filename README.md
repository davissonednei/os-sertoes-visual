# Os Sertões — edição visual interativa

Protótipo 2, redesenhado para uma experiência de leitura simples inspirada na lógica editorial de *Walkachusetts*: narrativa em fluxo, imagens entre os parágrafos e nenhuma sobreposição entre texto e visual.

## Princípios

- texto é o eixo da experiência;
- imagens entram no fluxo normal da página;
- xilogravura é a linguagem visual principal;
- JavaScript é mínimo: apenas progresso de leitura e identificação da cena atual;
- layout responsivo em uma coluna;
- cada bloco editorial pode ser catalogado em `/conteudo`.

## Estrutura

- `index.html` — piloto 001 + 009
- `style.css` — sistema visual
- `script.js` — progresso de leitura
- `assets/` — xilogravuras em SVG
- `conteudo/` — fichas dos blocos

## Hospedagem

O projeto é estático e pode ser publicado diretamente no GitHub Pages.
