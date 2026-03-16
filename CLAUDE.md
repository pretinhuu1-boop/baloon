# CLAUDE.md — Ballion

## REGRA 0 — Quando algo falha

PARAR. Pensar. Não tocar em nada até entender a causa real. Falha é informação — esconder falha ou retentar silenciosamente destrói informação.

---

## Regras de Operação

### Disciplina de Execução

- **Máximo 3 ações, depois verificar.** Mais de 5 sem checagem acumula erros invisíveis.
- **Chesterton's Fence** — Antes de remover qualquer coisa, explicar por que existe. "Parece não usado" exige prova com referências e git history.
- **Verificação é a regra de maior impacto.** Sempre rodar `npm run lint` e `npm run build` após implementações.
- **Sem TODOs, placeholders ou trechos incompletos.** Entregar código pronto.
- **3 exemplos reais antes de abstrair.** Escreva código similar 2 vezes; só abstraia na terceira.

### Git

- IMPORTANTE: `git add .` é proibido. Adicionar arquivos individualmente.
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`
- Branch principal: `main`
- Nunca fazer force push sem autorização explícita.

### Gestão de Contexto (Multi-Sessão)

- **Document & Clear** — Antes de encerrar trabalho complexo, salvar progresso e decisões em arquivo `.md` dentro de `docs/`. Na sessão seguinte, ler o documento e continuar.
- **Reler CLAUDE.md + docs de análise** no início de cada sessão.
- **Ao compactar contexto**, SEMPRE preservar: lista de arquivos modificados, comandos de teste, e decisões tomadas.
- **Subagentes para investigação** — Usar agentes para explorar código e manter o contexto principal limpo.

### Economia de Tokens

- Referenciar docs existentes (`@docs/PRODUCT.md`) ao invés de duplicar conteúdo.
- Código conciso: aproveitar features da linguagem, syntactic sugar do TS/React.
- Comentários apenas onde a lógica não é auto-evidente.
- Arquivo CLAUDE.md inteiro deve ficar abaixo de 200 linhas.

---

## Integração de Projetos Externos

> Protocolo para trabalhar com repos GitHub, open source ou qualquer codebase externo.

### Princípio

Sessões começam do zero. O documento de análise é a **memória persistente** — sem ele, não há integração efetiva.

### FASE 1 — Compreensão Total

Antes de tocar em código, entender o projeto inteiro:

1. **Configs** — `package.json`, `tsconfig`, builds, `.env.example`. Versões exatas.
2. **Árvore completa** — Cada pasta, cada arquivo. Nada ignorado.
3. **Código linha a linha** — Entry points, rotas, core, hooks, utils. O QUE faz e COMO faz.
4. **Padrões** — Naming, estrutura, state, estilos, error handling.
5. **Grafo de dependências** — Quem importa quem. Acoplamentos. Conexões.

### FASE 2 — Documento de Referência

Gerar `docs/ANÁLISE-<projeto>.md` com:

1. **Identidade** — Propósito, stack, versões
2. **Arquitetura** — Árvore + fluxo de dados
3. **Mapa de módulos** — Responsabilidade, props, imports, dependentes
4. **Padrões** — Convenções, patterns, design tokens
5. **Pontos de integração** — APIs, eventos, tipos, onde conectar
6. **Armadilhas** — Comportamentos não óbvios, configs frágeis

IMPORTANTE: Incluir **trechos de código completos** das partes reutilizáveis. Copiar funções, componentes e configs inteiros — economiza tokens em sessões futuras.

### FASE 3 — Integração Cirúrgica

**Copiar o que funciona, codar só a cola.**

1. **Extrair com precisão** — Seções inteiras, componentes completos. Não reescrever o que funciona.
2. **Codar apenas as ligações** — Adaptar imports, ajustar interfaces, criar bridges.
3. **Não reinventar a roda** — Se resolve o problema, usar. Adaptar > recriar.
4. **Pensar fora da caixa** — Posso usar esse módulo de forma diferente? Combinar partes de projetos de forma criativa?
5. **Validar conflitos** — Dependências e versões que colidem, antes de integrar.

---

## Projeto Ballion

**Landing page premium do KickTrak Pro** — tecnologia para futebol de verdade. Foco em jogadores de rua e base.

### Stack: Next.js 16.1 · React 19 · TS 5 · Tailwind 4 · GSAP · Three.js · Framer Motion · Lenis

### Comandos

```bash
npm run dev      # Dev server
npm run build    # Build produção
npm run lint     # ESLint
```

### Estrutura

```
src/app/         → layout.tsx, page.tsx, globals.css
src/components/  → Navbar, Hero, Features, Metrics, Gamification, AppPreview, Community, CTA, Footer
src/components/ui/ → gold-button, soccer-ball-3d, scroll-reveal, particle-bg, animated-counter
src/lib/         → utils.ts (cn)
public/images/   → community.jpg, hero-ball.jpg, app-mockup.jpg, trophy.jpg
docs/            → PRODUCT.md, ARCHITECTURE.md, CONTRIBUTING.md
```

### Cores

| Token | Hex | Uso |
|---|---|---|
| `--ballion-gold` | `#D4A54A` | Accent principal |
| `--ballion-gold-light` | `#F5D78E` | Highlights |
| `--ballion-gold-dark` | `#A67C2E` | Sombras ouro |
| `--ballion-black` | `#0A0A0A` | BG principal |
| `--ballion-surface` | `#1A1A1A` | Cards |
| `--ballion-green` | `#34D399` | Accent secundário |
| `--ballion-muted` | `#A0A0A0` | Texto secundário |

### Padrões

- Functional components + TypeScript
- Tailwind CSS + classes utilitárias customizadas (`.text-gold-gradient`, `.glow-gold`)
- GSAP + ScrollTrigger para animações de scroll
- Three.js via @react-three/fiber (dynamic import, SSR: false)
- Mobile-first, respeita `prefers-reduced-motion`

### Imagens — `public/images/`

| Arquivo | Componente | O que é |
|---|---|---|
| `community.jpg` | CommunitySection | Futebol na favela, pôr do sol |
| `hero-ball.jpg` | HeroSection | Bola no travessão, impacto |
| `app-mockup.jpg` | AppPreview | iPhone com KickTrak Pro |
| `trophy.jpg` | GamificationSection | Troféu Ballion + moedas |

### Status

Concluído: Landing page, componentes, animações, 3D, docs
Pendente: Imagens em `public/images/`, backend, banco de dados, deploy
