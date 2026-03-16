# CLAUDE.md — Ballion

> Regras globais carregadas automaticamente de `~/.claude/CLAUDE.md`
> Este arquivo contém apenas o que é específico deste projeto.

## Projeto

**Landing page da BALLION** — Plataforma Global de Desafios Esportivos. "Uma Bola. Um Celular. Um Milhão."

### Stack: Next.js 16.1 · React 19 · TS 5 · Tailwind 4 · GSAP · Three.js · Lenis

### Comandos

```bash
npm run dev      # Dev server
npm run build    # Build produção
npm run lint     # ESLint
```

### Estrutura

```
src/app/           → layout.tsx, page.tsx, globals.css
src/components/    → Navbar, HeroSection, FeaturesSection (ComoFunciona),
                     MetricsShowcase (Desafio), GamificationSection (Premiação),
                     AppPreview (Diferencial), CommunitySection (Acessibilidade),
                     FutureSection, FAQSection, CTASection, Footer
src/components/ui/ → gold-button, soccer-ball-3d, scroll-reveal, particle-bg,
                     animated-counter, smooth-scroll, page-loader, error-boundary,
                     stadium-lights
src/lib/           → utils.ts (cn)
public/images/     → hero-ball.png, app-mockup.png, trophy.png, community.png
docs/              → PRODUCT.md, ARCHITECTURE.md, CONTRIBUTING.md
```

### Seções da Landing Page

| # | Seção | Componente | id |
|---|---|---|---|
| 1 | Hero | HeroSection | — |
| 2 | Como Funciona | FeaturesSection | como-funciona |
| 3 | O Desafio | MetricsShowcase | desafio |
| 4 | Premiação | GamificationSection | premios |
| 5 | Diferencial | AppPreview | diferencial |
| 6 | Acessibilidade | CommunitySection | acessibilidade |
| 7 | Futuro | FutureSection | futuro |
| 8 | FAQ | FAQSection | faq |
| 9 | CTA Final | CTASection | participar |
| 10 | Footer | Footer | — |

### Cores

| Token | Hex | Uso |
|---|---|---|
| `--ballion-gold` | `#D4A54A` | Accent principal |
| `--ballion-gold-light` | `#F5D78E` | Highlights |
| `--ballion-gold-dark` | `#A67C2E` | Sombras ouro |
| `--ballion-black` | `#0A0F0A` | BG principal (verde-escuro profundo) |
| `--ballion-dark` | `#0D1A0F` | BG secundário |
| `--ballion-surface` | `#1A2A1A` | Cards |
| `--ballion-green` | `#34D399` | Accent secundário |
| `--ballion-muted` | `#A0A0A0` | Texto secundário |

### Tipografia

- **Display**: Bebas Neue (font-heading) — headlines uppercase
- **Body**: Inter (font-body) — texto corrido
- Via `next/font/google` com CSS variables

### Padrões do Projeto

- Tailwind CSS + classes customizadas: `.text-gold-gradient`, `.glow-gold`, `.stadium-light-left/right/center`, `.animate-float`
- GSAP + ScrollTrigger para animações de scroll
- Lenis para smooth scroll (integrado com GSAP ticker)
- Three.js via @react-three/fiber (dynamic import, SSR: false)
- Mobile-first, touch targets min 44px, respeita `prefers-reduced-motion`
- Dark mode forçado via `<html class="dark">`

### Imagens — `public/images/`

| Arquivo | Componente | O que é |
|---|---|---|
| `hero-ball.png` | HeroSection | Bola no travessão, impacto cinematográfico |
| `app-mockup.png` | MetricsShowcase | iPhone com KickTrak Pro |
| `trophy.png` | (reservado) | Troféu Ballion + moedas |
| `community.png` | CommunitySection | Futebol na favela, pôr do sol |

### Git

- Branch principal: `main`
- Branch dev: `claude/update-documentation-86PhK`

### Status

Concluído: Landing page reconstruída com 10 seções, animações GSAP, 3D, Lenis smooth scroll, fontes premium, imagens reais
Pendente: Backend, banco de dados, deploy, integração de email real no CTA
