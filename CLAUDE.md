# CLAUDE.md — Ballion

> Regras globais carregadas automaticamente de `~/.claude/CLAUDE.md`
> Este arquivo contém apenas o que é específico deste projeto.

## Projeto

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
src/app/           → layout.tsx, page.tsx, globals.css
src/components/    → Navbar, Hero, Features, Metrics, Gamification, AppPreview, Community, CTA, Footer
src/components/ui/ → gold-button, soccer-ball-3d, scroll-reveal, particle-bg, animated-counter
src/lib/           → utils.ts (cn)
public/images/     → community.jpg, hero-ball.jpg, app-mockup.jpg, trophy.jpg
docs/              → PRODUCT.md, ARCHITECTURE.md, CONTRIBUTING.md
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

### Padrões do Projeto

- Tailwind CSS + classes customizadas: `.text-gold-gradient`, `.glow-gold`, `.glow-gold-lg`, `.animate-glow-pulse`
- GSAP + ScrollTrigger para animações de scroll
- Three.js via @react-three/fiber (dynamic import, SSR: false)
- Mobile-first, respeita `prefers-reduced-motion`
- Dark mode forçado via `<html class="dark">`

### Imagens — `public/images/`

| Arquivo | Componente | O que é |
|---|---|---|
| `community.jpg` | CommunitySection | Futebol na favela, pôr do sol |
| `hero-ball.jpg` | HeroSection | Bola no travessão, impacto |
| `app-mockup.jpg` | AppPreview | iPhone com KickTrak Pro |
| `trophy.jpg` | GamificationSection | Troféu Ballion + moedas |

### Git

- Branch principal: `main`
- Branch dev: `claude/update-documentation-86PhK`

### Status

Concluído: Landing page, componentes, animações, 3D, docs
Pendente: Imagens em `public/images/`, backend, banco de dados, deploy
