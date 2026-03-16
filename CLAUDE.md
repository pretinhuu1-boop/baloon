# CLAUDE.md — Ballion Project Guide

---

## REGRAS DE OPERAÇÃO — INTEGRAÇÃO DE PROJETOS EXTERNOS

> Protocolo para trabalhar com repos GitHub, open source ou qualquer codebase externo.

### Princípio Central

Sessões do Claude começam do zero. Sem documentação, toda análise se perde. O documento de análise é a **memória persistente** entre sessões — sem ele, não há integração efetiva.

### FASE 1 — Compreensão Total

Antes de tocar em qualquer código, entender o projeto inteiro:

1. **Configs primeiro** — `package.json`, `tsconfig`, builds, `.env.example`. Versões exatas importam.
2. **Árvore completa** — Cada pasta, cada arquivo mapeado. Nada ignorado.
3. **Código linha a linha** — Entry points, rotas, componentes core, hooks, utils. Saber O QUE faz e COMO faz.
4. **Padrões** — Naming, estrutura, state management, estilos, error handling.
5. **Grafo de dependências** — Quem importa quem. Acoplamentos. Pontos de conexão.

### FASE 2 — Documento de Referência

Gerar `docs/ANÁLISE-<projeto>.md` com:

1. **Identidade** — Propósito, stack, versões
2. **Arquitetura** — Árvore de diretórios + fluxo de dados
3. **Mapa de módulos** — Cada um com: responsabilidade, props, imports, quem o usa
4. **Padrões** — Convenções, patterns recorrentes, design tokens
5. **Pontos de integração** — APIs, eventos, tipos compartilháveis, onde conectar
6. **Armadilhas** — Comportamentos não óbvios, configs frágeis, débitos técnicos

**CRÍTICO:** Incluir no documento **trechos de código completos** das partes que serão reutilizadas. Copiar funções inteiras, componentes inteiros, blocos de config inteiros — exatamente como estão no original. Isso economiza tokens nas sessões futuras (não precisa reler o projeto fonte) e garante precisão na integração.

### FASE 3 — Integração Cirúrgica

A filosofia é: **copiar o que funciona, codar só a cola.**

1. **Extrair com precisão** — Copiar seções inteiras, componentes completos, módulos prontos. Não reescrever o que já existe e funciona.
2. **Codar apenas as ligações** — O trabalho criativo é conectar as peças: adaptar imports, ajustar interfaces, criar bridges entre os projetos.
3. **Não reinventar a roda** — Se o projeto fonte resolve um problema, usar a solução dele. Adaptar > recriar.
4. **Pensar fora da caixa** — Nem sempre a integração óbvia é a melhor. Considerar: posso usar esse módulo de forma diferente do original? Posso combinar partes de projetos diferentes de forma criativa?
5. **Validar conflitos** — Checar dependências conflitantes e versões que colidem antes de integrar.

### Mentalidade

- **Documento primeiro, código depois** — A análise DEVE existir antes de qualquer integração
- **Copiar > recriar** — Código que já funciona não precisa ser reescrito, precisa ser conectado
- **Economizar tokens** — Documentar trechos de código no documento de análise para não precisar reler o projeto fonte em sessões futuras
- **Reler no início de cada sessão** — CLAUDE.md e documentos de análise são ponto de partida obrigatório
- **Atualizar sempre** — Descobriu algo novo? Atualiza o documento imediatamente

---

## Visão Geral

**Ballion** é uma landing page premium para o app **KickTrak Pro** — uma plataforma de tecnologia para futebol focada em treinos inteligentes, métricas em tempo real e gamificação. O slogan é _"Tecnologia para o futebol de verdade"_.

O site é voltado para jogadores de futebol de rua e base, democratizando ferramentas de treino profissional.

---

## Tech Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 16.1.6 (App Router) |
| React | 19.2.3 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| GSAP | 3.14.2 |
| Framer Motion | 12.36.0 |
| Three.js | 0.183.2 |
| @react-three/fiber | 9.5.0 |
| Lenis | 1.3.18 (smooth scroll) |
| tsparticles | 3.0.0 |

---

## Estrutura do Projeto

```
baloon/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz (dark mode, meta tags)
│   │   ├── page.tsx            # Página principal (landing page)
│   │   └── globals.css         # Estilos globais + tema Tailwind
│   ├── components/
│   │   ├── Navbar.tsx          # Navegação fixa com menu mobile
│   │   ├── HeroSection.tsx     # Hero com bola 3D + partículas
│   │   ├── FeaturesSection.tsx # 3 cards de funcionalidades
│   │   ├── MetricsShowcase.tsx # Contadores animados de métricas
│   │   ├── GamificationSection.tsx # Troféus, moedas, progressão
│   │   ├── AppPreview.tsx      # Carousel de telas do app
│   │   ├── CommunitySection.tsx # Pilares da comunidade
│   │   ├── CTASection.tsx      # Call-to-action (download)
│   │   ├── Footer.tsx          # Rodapé com links e redes sociais
│   │   └── ui/
│   │       ├── gold-button.tsx       # Botão dourado reutilizável
│   │       ├── soccer-ball-3d.tsx    # Bola 3D (Three.js)
│   │       ├── scroll-reveal.tsx     # Animação no scroll (GSAP)
│   │       ├── particle-bg.tsx       # Partículas em canvas
│   │       └── animated-counter.tsx  # Contador animado
│   └── lib/
│       └── utils.ts            # Utilitários (cn - merge classes)
├── public/
│   ├── images/                 # ⚠️ IMAGENS DO PROJETO (ver seção abaixo)
│   └── models/                 # Modelos 3D (futuro)
├── docs/
│   ├── PRODUCT.md              # Especificação do produto
│   ├── ARCHITECTURE.md         # Arquitetura do sistema
│   └── CONTRIBUTING.md         # Guia de contribuição
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting com ESLint
```

---

## Paleta de Cores

| Token | Cor | Uso |
|---|---|---|
| `--ballion-black` | `#0A0A0A` | Background principal |
| `--ballion-dark` | `#111111` | Background secundário |
| `--ballion-surface` | `#1A1A1A` | Cards elevados |
| `--ballion-border` | `#222222` | Bordas sutis |
| `--ballion-gold` | `#D4A54A` | Ouro principal |
| `--ballion-gold-light` | `#F5D78E` | Ouro claro |
| `--ballion-gold-dark` | `#A67C2E` | Ouro escuro |
| `--ballion-green` | `#34D399` | Verde destaque |
| `--ballion-green-dark` | `#1A472A` | Verde escuro |
| `--ballion-muted` | `#A0A0A0` | Texto secundário |

---

## Seções da Landing Page

A página é composta por 8 seções em sequência:

1. **Navbar** — Navegação fixa com logo, links e menu hamburger mobile
2. **HeroSection** — Headline animada + bola 3D rotativa + partículas
3. **FeaturesSection** — 3 cards: Treinos Inteligentes, Métricas, Gravação de Vídeo
4. **MetricsShowcase** — Contadores animados (92% precisão, 11/15 score, 20m)
5. **GamificationSection** — Troféus, moedas Ballion, progressão de nível
6. **AppPreview** — Carousel interativo com 4 telas do app
7. **CommunitySection** — Manifesto comunitário (Futebol de Rua, Base, Inclusão)
8. **CTASection** — Download na App Store e Google Play
9. **Footer** — Links, redes sociais (Instagram, X, TikTok)

---

## ⚠️ IMAGENS — INSTRUÇÕES IMPORTANTES

As imagens precisam ser colocadas manualmente em `public/images/`. Os componentes já referenciam os seguintes arquivos:

| Arquivo | Componente | Descrição |
|---|---|---|
| `public/images/community.jpg` | `CommunitySection.tsx` | Futebol na comunidade/favela, pôr do sol |
| `public/images/hero-ball.jpg` | `HeroSection.tsx` | Bola batendo no travessão, explosão dramática |
| `public/images/app-mockup.jpg` | `AppPreview.tsx` | Mockup do iPhone com KickTrak Pro |
| `public/images/trophy.jpg` | `GamificationSection.tsx` | Troféu Ballion dourado com moedas |

### Como adicionar as imagens:

```bash
# 1. Navegue até a pasta do projeto
cd baloon

# 2. Certifique-se de estar na branch correta
git checkout claude/update-documentation-86PhK

# 3. Copie as imagens para public/images/
# Renomeie cada imagem conforme a tabela acima:
#   - Foto do futebol na favela       → community.jpg
#   - Foto da bola no travessão       → hero-ball.jpg
#   - Mockup do iPhone KickTrak Pro   → app-mockup.jpg
#   - Troféu dourado com moedas       → trophy.jpg

cp ~/Downloads/foto-comunidade.jpg public/images/community.jpg
cp ~/Downloads/foto-bola-travessao.jpg public/images/hero-ball.jpg
cp ~/Downloads/foto-mockup-iphone.jpg public/images/app-mockup.jpg
cp ~/Downloads/foto-trofeu.jpg public/images/trophy.jpg

# 4. Commit e push
git add public/images/
git commit -m "feat: add project images"
git push origin claude/update-documentation-86PhK
```

---

## Padrões de Código

- **Componentes:** Functional components com TypeScript
- **Estilo:** Tailwind CSS + classes utilitárias customizadas
- **Animações:** GSAP com ScrollTrigger para scroll, Framer Motion para componentes
- **3D:** Three.js via @react-three/fiber (import dinâmico, SSR: false)
- **Acessibilidade:** Respeita `prefers-reduced-motion`, ARIA labels
- **Responsivo:** Mobile-first com breakpoints Tailwind (md, lg)

---

## Convenções Git

- **Branch principal:** `main`
- **Branch de desenvolvimento:** `claude/update-documentation-86PhK`
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)
- **PRs:** Título curto (<70 chars) + body com Summary e Test Plan

---

## Funcionalidades do KickTrak Pro

O app promovido pela landing page oferece:

- **Treinos Inteligentes** — Drills configuráveis de precisão com parâmetros ajustáveis
- **Métricas em Tempo Real** — Acompanhe precisão, score e distância ao vivo
- **Gravação de Vídeo** — Capture sessões para análise posterior
- **Troféus Ballion** — Conquistas desbloqueáveis
- **Moedas Ballion** — Sistema de recompensas
- **Progressão de Nível** — Sistema de evolução do jogador

---

## Status do Projeto

### Concluído
- Landing page completa com todas as seções
- Componentes UI com animações
- Bola 3D com Three.js
- Partículas de fundo
- Documentação (PRODUCT.md, ARCHITECTURE.md, CONTRIBUTING.md)

### Pendente
- ⚠️ Adicionar imagens reais em `public/images/`
- Backend e API
- Modelagem de banco de dados
- Integrações externas (storage, push notifications, analytics)
- Deploy em produção
