# Portfolio Kiyotaka

Landing page (single-page application) de tributo a **Kiyotaka Ayanokōji** (綾小路 清隆), do anime
*Classroom of the Elite* (*Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e*). Projeto desenvolvido como
atividade acadêmica do **Inovae (Atividade 03.1)**.

A interface, em português, recria a **estrutura de um portfólio de agência** (inspirada em *Soul Coast Creative*)
com uma **direção visual japonesa editorial**: tipografia *mincho/gótica*, rótulos bilíngues em kanji, texto
vertical (*tategaki*) e selo *hanko*.

## Sobre o projeto

Aplicação **front-end** (sem backend, banco de dados ou autenticação), construída com React + TypeScript.
É composta por uma única página com as seções:

1. **Navbar** — barra fixa com efeito de vidro. **Os itens são apenas visuais e não navegam** (requisito da atividade).
2. **Hero** — vídeo de fundo em tela cheia, declaração de visão, assinatura com selo e acento vertical em japonês.
3. **Galeria** — 6 cards (título + imagem) num layout em pirâmide **3 / 2 / 1**.
4. **Bastidores** — cabeçalho de perfil estilo rede social (com **avatar em vídeo**) seguido de um card único com uma citação do personagem.
5. **Footer** — rodapé escuro com navegação (também não-funcional), informações e selo.

> **Requisito de design:** a navegação (navbar e rodapé) é renderizada com `<button>` sem ação e `cursor: default` —
> nenhum clique navega, rola a página ou altera a URL.

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev) | 19.2 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | ~6.0 | Tipagem estática |
| [Vite](https://vite.dev) | ^8.0 | Build e servidor de desenvolvimento (HMR) |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0 | Memoização automática (via Babel + `@rolldown/plugin-babel`) |
| [ESLint](https://eslint.org) | 10 | Análise estática de código |
| [Google Fonts](https://fonts.google.com) | — | **Shippori Mincho** (títulos) + **Zen Kaku Gothic New** (texto/UI) |

## Pré-requisitos

- [Node.js](https://nodejs.org) **20 LTS ou superior**
- **npm** (acompanha o Node.js)
- As fontes japonesas são carregadas via Google Fonts (necessário acesso à internet na primeira carga).

## Como executar

```bash
# A partir da raiz do repositório, entre na pasta da aplicação
cd meu_app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra a URL exibida no terminal (por padrão, `http://localhost:5173`).

## Scripts disponíveis

Executados de dentro de `meu_app/`:

| Script | Comando | Descrição |
|---|---|---|
| `npm run dev` | `vite` | Sobe o servidor de desenvolvimento com Hot Module Replacement (HMR). |
| `npm run build` | `tsc -b && vite build` | Verifica os tipos e gera o build de produção em `dist/`. |
| `npm run preview` | `vite preview` | Serve localmente o build de produção para conferência. |
| `npm run lint` | `eslint .` | Roda o ESLint em todo o projeto. |

## Estrutura de pastas

Cada componente fica em sua própria pasta, junto do CSS correspondente (`Componente/Componente.tsx` + `Componente.css`).

```
meu_app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── media/
│   │   │   └── ayanokoji.mp4              # vídeo (fundo do hero + avatar de Bastidores)
│   │   └── images/
│   │       ├── ayanokoji_full.jpg         # poster do hero
│   │       ├── ayanokoji_digital.webp     # card "Classe D" + poster do avatar
│   │       ├── Ayanokoji_whiteroom.jpeg   # galeria
│   │       ├── Ayanokoji_chess.jpeg       # galeria
│   │       ├── Ayanokoji_mask.jpeg        # galeria
│   │       ├── Ayanokoji_umbrella.jpeg    # galeria
│   │       └── Ayanokoji_vsHousen.png     # galeria (banner)
│   ├── components/
│   │   ├── ui/                            # primitivas reutilizáveis
│   │   │   ├── Eyebrow/                   # rótulo bilíngue (kanji — texto)
│   │   │   ├── VerticalText/              # texto vertical (tategaki)
│   │   │   └── SealMark/                  # selo estilo hanko
│   │   ├── layout/
│   │   │   ├── Navbar/                    # navbar não-funcional
│   │   │   └── Footer/
│   │   └── sections/
│   │       ├── Hero/
│   │       ├── Gallery/                   # 6 cards (layout 3 / 2 / 1)
│   │       └── SocialFeed/                # "Bastidores": avatar em vídeo + card de citação
│   ├── data/
│   │   └── content.ts                     # conteúdo central (nav, cards, citação, imports de mídia)
│   ├── styles/
│   │   ├── tokens.css                     # design tokens (cor, tipografia, espaçamento)
│   │   └── global.css                     # reset + base (importa tokens.css)
│   ├── App.tsx                            # compõe layout + seções
│   └── main.tsx                           # ponto de entrada do React
├── index.html
├── package.json
├── vite.config.ts                         # Vite (React + React Compiler)
├── tsconfig*.json
└── eslint.config.js
```

## Arquitetura e padrões

- **Conteúdo separado da apresentação:** textos, itens de navegação, cards da galeria, a citação e os imports
  de mídia ficam em [src/data/content.ts](src/data/content.ts). Os componentes importam daí.
- **Design tokens:** [src/styles/tokens.css](src/styles/tokens.css) define a escala única de **cor, tipografia
  (`clamp`) e espaçamento** consumida por todo o CSS, facilitando rebalancear a página.
- **Tema:** *light editorial* intencional (sem dark mode automático), com motivo do "Quarto Branco" e um acento
  vermelhão de carimbo (`--seal`).
- **Acessibilidade:** landmarks semânticos, um único `h1` (Hero), imagens com `alt`, foco visível, alvos de toque
  ≥ 44px e `lang="ja"` nos trechos em japonês.

## Como editar o conteúdo

Tudo em [src/data/content.ts](src/data/content.ts):

- **Cards da galeria** (`galleryCards`): cada card tem `titulo` e um `img` opcional. Para adicionar/trocar uma
  imagem, importe o arquivo no topo do arquivo e preencha o campo `img`; sem `img`, o card mostra um placeholder.
- **Citação de Bastidores** (`bastidoresQuote`), **itens de navegação** (`navItems` / `footerNavItems`) e
  **redes** (`redesSociais`) também são editados ali.

## Observações

- Manter a navbar/rodapé **não-funcionais** é um requisito da atividade — evite transformar os botões em links.
- O avatar de Bastidores usa o vídeo em loop mudo com `autoPlay`; o `poster` (imagem digital) é exibido até o vídeo carregar.
- `Ayanokoji_vsHousen.png` é o maior asset estático (~600 kB); converter para `.webp` reduziria o tempo de carga.
