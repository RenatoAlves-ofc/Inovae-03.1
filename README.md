# Ayanokoji — Página de Tributo

Single-page application (SPA) de tributo ao personagem **Kiyotaka Ayanokoji**, do anime *Classroom of the Elite* (*Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e*). Projeto desenvolvido como atividade acadêmica do **Inovae (Atividade 03.1)**.

## Sobre o projeto

É uma aplicação **front-end** (sem backend, banco de dados ou autenticação) construída com React e TypeScript. A interface, em português, apresenta:

- Uma **seção *hero*** em tela cheia com vídeo de fundo do personagem, título "Ayanokoji" e o subtítulo *Estratégia • Inteligência • Classe D*.
- Uma **barra de navegação** fixa (sticky), com efeito de vidro (glassmorphism via `backdrop-filter`) e links de navegação por âncora.
- Suporte a **tema claro/escuro** automático (`prefers-color-scheme`) e **layout responsivo** (breakpoints em ~820px e ~1024px).

> **Status:** em desenvolvimento. No momento, apenas as seções *Início* (`#inicio`) e *Fotos* (`#fotos`) existem — e a seção de fotos é um **placeholder** ("Cards com GIFs estarão aqui"). Os demais links da navbar (`#classe-d`, `#quarto-branco`, `#estrategia`, `#inteligencia`, `#observacao`) apontam para seções ainda planejadas.

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev) | 19.2 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | ~6.0 | Tipagem estática |
| [Vite](https://vite.dev) | ^8.0 | Build e servidor de desenvolvimento (HMR) |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0 | Memoização automática (via Babel + `@rolldown/plugin-babel`) |
| [ESLint](https://eslint.org) | 10 | Análise estática de código |

## Pré-requisitos

- [Node.js](https://nodejs.org) **20 LTS ou superior**
- **npm** (acompanha o Node.js)

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
| `npm run build` | `tsc -b && vite build` | Faz a verificação de tipos e gera o build de produção em `dist/`. |
| `npm run preview` | `vite preview` | Serve localmente o build de produção para conferência. |
| `npm run lint` | `eslint .` | Roda o ESLint em todo o projeto. |

## Estrutura de pastas

```
meu_app/
├── public/
│   ├── favicon.svg              # Ícone do site
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── gifs/
│   │   │   └── ayanokoji.mp4    # Vídeo de fundo do hero
│   │   └── imgs/
│   │       ├── ayanokoji_digital.webp
│   │       └── ayanokoji_full.jpg
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegação
│   │   └── Navbar.css
│   ├── App.tsx                  # Componente principal (hero + seção de fotos)
│   ├── App.css
│   ├── index.css                # Estilos globais e variáveis de tema
│   └── main.tsx                 # Ponto de entrada do React
├── index.html                   # HTML base (monta o app em #root)
├── package.json
├── vite.config.ts               # Configuração do Vite (React + React Compiler)
├── tsconfig*.json               # Configurações do TypeScript
└── eslint.config.js
```

## Funcionalidades

**Implementado**

- [x] Barra de navegação responsiva com efeito de vidro
- [x] Seção *hero* com vídeo de fundo em loop, mudo e autoplay
- [x] Tema claro/escuro automático
- [x] Layout responsivo (mobile e desktop)

**Planejado**

- [ ] Cards com GIFs na seção de fotos (`#fotos`)
- [ ] Seções *Classe D*, *Quarto Branco*, *Estratégia*, *Inteligência* e *Observação*

## Próximos passos / melhorias

- Implementar as seções referenciadas pela navbar que ainda não existem.
- Substituir o placeholder da seção de fotos por cards reais com os assets disponíveis.
- Ajustar os metadados em [index.html](index.html): definir `lang="pt-BR"` e um `<title>` descritivo (atualmente `meu_app`).
