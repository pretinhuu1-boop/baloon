# CLAUDE.md — Ballion Project Guide

---

## REGRAS DE OPERAÇÃO — ANÁLISE DE PROJETOS EXTERNOS

> Protocolo obrigatório para quando trabalhamos com repositórios GitHub, projetos open source ou qualquer codebase externo que será integrado ao nosso projeto.

### Por que isso existe

Cada sessão do Claude começa do zero. Sem documentação prévia, toda análise precisa ser refeita do início. Isso desperdiça tempo e gera compreensão superficial. A única forma de misturar projetos de forma efetiva é entendê-los tão bem quanto o nosso próprio código.

### Protocolo de Análise Profunda

**FASE 1 — Varredura Completa (obrigatória antes de qualquer ação)**

1. **Ler TODOS os arquivos de configuração** — `package.json`, `tsconfig.json`, configs de build, `.env.example`, lockfiles. Entender dependências, scripts, versões exatas.
2. **Mapear a arquitetura inteira** — Cada pasta, cada arquivo, a árvore completa. Nenhum arquivo pode ser ignorado.
3. **Ler linha a linha os arquivos-chave** — Entry points, rotas, componentes principais, módulos core, middleware, hooks, utils. Não basta saber que existem, é preciso entender O QUE fazem e COMO fazem.
4. **Identificar padrões do projeto** — Convenções de nomes, estrutura de componentes, gerenciamento de estado, estratégia de estilo, tratamento de erros, padrões de API.
5. **Mapear dependências internas** — Quem importa quem. Quais módulos são acoplados. Onde estão os pontos de integração.

**FASE 2 — Documentação de Referência (obrigatória após análise)**

Após compreensão total, gerar um documento de referência (`ANÁLISE-<nome-do-projeto>.md`) contendo:

```
1. IDENTIDADE
   - Nome, propósito, público-alvo
   - Tech stack com versões exatas

2. ARQUITETURA
   - Árvore de diretórios completa com descrição de cada arquivo
   - Fluxo de dados (entrada → processamento → saída)
   - Pontos de entrada da aplicação

3. MAPA DE COMPONENTES / MÓDULOS
   - Cada componente/módulo com:
     - Responsabilidade (o que faz)
     - Props/parâmetros que aceita
     - Dependências (o que importa)
     - Dependentes (quem o usa)

4. PADRÕES E CONVENÇÕES
   - Naming conventions
   - Estrutura de arquivos
   - Patterns recorrentes (HOCs, hooks, composables, etc.)
   - Design system / tokens de design

5. PONTOS DE INTEGRAÇÃO
   - APIs expostas ou consumidas
   - Eventos emitidos/recebidos
   - Interfaces/tipos compartilháveis
   - Onde nosso projeto pode se conectar

6. ARMADILHAS E OBSERVAÇÕES
   - Comportamentos não óbvios
   - Configurações que quebram se alteradas
   - Dependências de versão críticas
   - TODOs e débitos técnicos encontrados
```

**FASE 3 — Validação antes de integrar**

1. **Nunca copiar código sem entender** — Se não consegue explicar cada linha, não está pronto para integrar.
2. **Identificar conflitos** — Dependências conflitantes, padrões incompatíveis, versões que colidem.
3. **Planejar a integração** — Definir exatamente quais partes serão extraídas, adaptadas ou reescritas.
4. **Testar isoladamente** — Antes de misturar, garantir que o trecho funciona sozinho.

### Regras Gerais

- **Profundidade > Velocidade** — Melhor demorar na análise do que quebrar na integração.
- **Documento primeiro, código depois** — O documento de análise DEVE existir antes de qualquer `import` ou `copy-paste`.
- **Reler antes de cada sessão** — O CLAUDE.md e os documentos de análise são a primeira coisa a ser lida em qualquer sessão nova.
- **Atualizar sempre** — Se durante o trabalho algo novo for descoberto, o documento deve ser atualizado imediatamente.
- **Um projeto por vez** — Analisar completamente um projeto externo antes de começar outro.

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
